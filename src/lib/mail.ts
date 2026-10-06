import nodemailer from "nodemailer";
import { FULL_ADDRESS, SITE } from "@/config/site";
import type { EnquiryInput } from "@/lib/validations";

/** Escape user input before injecting into HTML emails. */
function esc(value: string | undefined): string {
  if (!value) return "Not provided";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string | undefined): string {
  return `
    <tr>
      <td style="padding:10px 14px;font-size:13px;color:#5B6472;border-bottom:1px solid #EEF1F5;white-space:nowrap;vertical-align:top;font-weight:600;">${label}</td>
      <td style="padding:10px 14px;font-size:14px;color:#1A1A1A;border-bottom:1px solid #EEF1F5;">${esc(value)}</td>
    </tr>`;
}

/** Clean HTML email to the business inbox with every field. */
export function buildBusinessEmail(data: EnquiryInput): { subject: string; html: string } {
  const subject = `New enquiry: ${data.category} | ${data.name} (${data.country})`;
  const html = `
  <div style="margin:0;padding:32px 16px;background:#F1F4F8;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #E4E9F0;">
      <div style="background:#0B2545;padding:28px 32px;">
        <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#C9A24B;">New enquiry received</p>
        <h1 style="margin:8px 0 0;font-size:22px;color:#FAFAF7;font-weight:700;">${esc(data.product || data.category)}</h1>
        <p style="margin:6px 0 0;font-size:13px;color:#B9C4D6;">Sent from ${esc(data.page || SITE.domain)} · reply directly to respond to the buyer</p>
      </div>
      <table role="presentation" style="width:100%;border-collapse:collapse;padding:12px 12px;">
        <tbody>
          ${row("Full name", data.name)}
          ${row("Company", data.company)}
          ${row("Country", data.country)}
          ${row("Email", data.email)}
          ${row("Phone / WhatsApp", data.phone)}
          ${row("Product category", data.category)}
          ${row("Product", data.product)}
          ${row("Quantity", data.quantity)}
          ${row("Delivery timeframe", data.timeframe)}
          ${row("Custom design", data.customDesign === "yes" ? "Yes, custom design needed" : "No, standard product")}
        </tbody>
      </table>
      <div style="padding:8px 26px 26px;">
        <p style="font-size:13px;color:#5B6472;font-weight:600;margin:16px 0 6px;">Message</p>
        <div style="background:#F7F9FC;border:1px solid #E4E9F0;border-radius:12px;padding:16px;font-size:14px;line-height:1.6;color:#1A1A1A;white-space:pre-wrap;">${esc(data.message)}</div>
      </div>
    </div>
    <p style="text-align:center;font-size:12px;color:#8A93A3;margin-top:20px;">
      ${SITE.name} · ${FULL_ADDRESS}<br/>GSTIN ${SITE.gst} · FIEO Registered
    </p>
  </div>`;
  return { subject, html };
}

/** Short branded auto-reply sent to the buyer. */
export function buildAutoReplyEmail(data: EnquiryInput): { subject: string; html: string } {
  const subject = `We've received your enquiry at ${SITE.name}`;
  const html = `
  <div style="margin:0;padding:32px 16px;background:#F1F4F8;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #E4E9F0;">
      <div style="background:#0B2545;padding:28px 32px;">
        <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#C9A24B;">${SITE.tagline}</p>
        <h1 style="margin:8px 0 0;font-size:22px;color:#FAFAF7;font-weight:700;">Thank you, ${esc(data.name)}.</h1>
      </div>
      <div style="padding:28px 32px;font-size:14px;line-height:1.75;color:#3A4354;">
        <p>We've received your enquiry${data.product ? ` about <strong>${esc(data.product)}</strong>` : ` about <strong>${esc(data.category)}</strong>`} and our export team is already reviewing it.</p>
        <p>You can expect a detailed reply, including pricing, MOQ and lead-time details, within <strong>1-2 business days</strong>.</p>
        <div style="background:#F7F9FC;border-left:3px solid #C9A24B;border-radius:0 12px 12px 0;padding:16px 18px;margin:20px 0;">
          <p style="margin:0;font-weight:700;color:#0B2545;">Need a faster answer?</p>
          <p style="margin:6px 0 0;">Reach us instantly on WhatsApp: <strong>${esc(SITE.phone)}</strong></p>
        </div>
        <p style="margin-bottom:0;">Warm regards,<br/><strong>${esc(SITE.contactPerson)}</strong><br/>${SITE.contactRole}, ${SITE.name}<br/><span style="color:#8A93A3;font-size:12px;">${FULL_ADDRESS}</span></p>
      </div>
    </div>
    <p style="text-align:center;font-size:12px;color:#8A93A3;margin-top:20px;">GSTIN ${SITE.gst} · FIEO Registered · ${SITE.domain}</p>
  </div>`;
  return { subject, html };
}

export type MailResult = { ok: true } | { ok: false; error: string };

async function sendWithResend(data: EnquiryInput): Promise<MailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO;
  if (!apiKey || !from || !to) return { ok: false, error: "resend_not_configured" };

  const business = buildBusinessEmail(data);
  const autoReply = buildAutoReplyEmail(data);

  const send = async (payload: Record<string, unknown>) => {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Resend error ${res.status}`);
  };

  await send({ from, to, reply_to: data.email, subject: business.subject, html: business.html });
  await send({ from, to: data.email, subject: autoReply.subject, html: autoReply.html });
  return { ok: true };
}

async function sendWithSmtp(data: EnquiryInput): Promise<MailResult> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.MAIL_FROM ?? user;
  const to = process.env.MAIL_TO ?? user;
  if (!host || !user || !pass) return { ok: false, error: "smtp_not_configured" };

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const business = buildBusinessEmail(data);
  const autoReply = buildAutoReplyEmail(data);

  await transporter.sendMail({ from, to, replyTo: data.email, subject: business.subject, html: business.html });
  await transporter.sendMail({ from, to: data.email, subject: autoReply.subject, html: autoReply.html });
  return { ok: true };
}

/**
 * Sends (1) the enquiry to the business inbox and (2) an auto-reply to the buyer.
 * Nothing is stored anywhere. Provider chosen via EMAIL_PROVIDER env ("smtp" | "resend").
 */
export async function sendEnquiryEmails(data: EnquiryInput): Promise<MailResult> {
  try {
    const provider = (process.env.EMAIL_PROVIDER ?? "smtp").toLowerCase();
    return provider === "resend" ? await sendWithResend(data) : await sendWithSmtp(data);
  } catch (error) {
    console.error("[enquiry] email send failed:", error);
    return { ok: false, error: "send_failed" };
  }
}
