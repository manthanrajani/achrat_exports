import { NextResponse } from "next/server";
import { sendEnquiryEmails } from "@/lib/mail";
import { checkRateLimit } from "@/lib/rateLimit";
import { enquirySchema } from "@/lib/validations";
import { SITE } from "@/config/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Bots that submit instantly get rejected. Humans need a few seconds to read a form. */
const MIN_TIME_TO_SUBMIT_MS = 3000;

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/** Optional Cloudflare Turnstile verification. Only runs when a secret key is configured. */
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // feature disabled
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token, remoteip: ip }),
    });
    const body = (await res.json()) as { success?: boolean };
    return Boolean(body.success);
  } catch (error) {
    console.error("[enquiry] turnstile verification failed:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1) In-memory IP rate limit: 5 requests / 10 minutes
    const limit = checkRateLimit(`enquiry:${ip}`);
    if (!limit.allowed) {
      return NextResponse.json(
        { error: "rate_limited", retryAfter: limit.retryAfterSeconds },
        { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
      );
    }

    const raw: unknown = await request.json().catch(() => null);
    if (!raw || typeof raw !== "object") {
      return NextResponse.json({ error: "invalid_body" }, { status: 400 });
    }

    // 2) Re-validate server-side with the SAME Zod schema the client used
    const parsed = enquirySchema.safeParse({ ...(raw as Record<string, unknown>), startedAt: Number((raw as { startedAt?: unknown }).startedAt) });
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "validation_failed",
          issues: parsed.error.issues.map((issue) => ({ path: issue.path.join("."), message: issue.message })),
        },
        { status: 400 },
      );
    }
    const data = parsed.data;

    // 3) Honeypot: pretend success so bots think they won
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ ok: true });
    }

    // 4) Minimum time-to-submit
    const now = Date.now();
    if (data.startedAt > now || now - data.startedAt < MIN_TIME_TO_SUBMIT_MS) {
      return NextResponse.json({ error: "too_fast" }, { status: 400 });
    }

    // 5) Optional Turnstile
    const human = await verifyTurnstile(data.turnstileToken ?? "", ip);
    if (!human) {
      return NextResponse.json({ error: "verification_failed" }, { status: 400 });
    }

    // 6) Track which page the enquiry came from
    if (!data.page) {
      data.page = request.headers.get("referer") ?? SITE.domain;
    }

    // 7) Send business email + buyer auto-reply (nothing is stored)
    const result = await sendEnquiryEmails(data);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[enquiry] unexpected error:", error);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
