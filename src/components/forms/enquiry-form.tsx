"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Mail, MessageCircle, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { CUSTOM_DESIGN_OPTIONS, TIMEFRAME_OPTIONS, enquirySchema, type EnquiryInput } from "@/lib/validations";
import { SITE, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { Input, Select, Textarea } from "@/components/ui/form-field";

type FormStatus = "idle" | "submitting" | "error";

declare global {
  interface Window {
    onTurnstileOk?: (token: string) => void;
  }
}

const CATEGORY_OPTIONS = [
  ...CATEGORIES.map((c) => ({ value: c.name, label: c.name })),
  { value: "General / Other", label: "General / Other" },
];

interface EnquiryFormProps {
  variant?: "quote" | "contact";
  className?: string;
}

/**
 * The ONLY dynamic feature on the site: validated on the client and re-validated
 * on the server with the SAME Zod schema. On failure, shows email/WhatsApp fallback.
 */
export function EnquiryForm({ variant = "quote", className }: EnquiryFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const turnstileToken = useRef<string>("");
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const prefillProduct = searchParams.get("product") ?? "";
  const prefillFrom = searchParams.get("from") ?? "";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      company: "",
      country: "",
      email: "",
      phone: "",
      category: "",
      product: prefillProduct,
      quantity: "",
      timeframe: "",
      customDesign: "no",
      message: "",
      website: "",
      page: prefillFrom,
      startedAt: 1,
      turnstileToken: "",
    },
  });

  // Registered-at timestamp (spam check) + prefill from the referring product page
  useEffect(() => {
    setValue("startedAt", Date.now());
    if (prefillProduct) {
      setValue("product", prefillProduct);
      const match = PRODUCTS.find((p) => p.slug === prefillProduct);
      if (match) {
        const cat = CATEGORIES.find((c) => c.slug === match.category);
        if (cat) setValue("category", cat.name);
      }
    }
    if (prefillFrom) setValue("page", prefillFrom);
  }, [prefillProduct, prefillFrom, setValue]);

  // Optional Cloudflare Turnstile
  useEffect(() => {
    if (!turnstileSiteKey) return;
    window.onTurnstileOk = (token: string) => {
      turnstileToken.current = token;
    };
    if (!document.querySelector('script[src*="challenges.cloudflare.com"]')) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      document.head.appendChild(script);
    }
    return () => {
      delete window.onTurnstileOk;
    };
  }, [turnstileSiteKey]);

  const onSubmit = handleSubmit(async (values) => {
    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, turnstileToken: turnstileToken.current || values.turnstileToken }),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setServerMessage(
          res.status === 429
            ? "Too many attempts in a short time. Please try again in a few minutes, or reach us directly below."
            : body.error === "send_failed" || body.error === "smtp_not_configured"
              ? "Our mail service is temporarily unavailable. Please use the direct options below. We reply fast."
              : "Something went wrong while sending. Please try again or use the direct options below.",
        );
        return;
      }
      setStatus("idle");
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please check your connection or use the direct options below.");
    }
  });

  const waMessage = prefillProduct
    ? `Hello ${SITE.name}, I'd like a quote for: ${PRODUCTS.find((p) => p.slug === prefillProduct)?.name ?? prefillProduct}.`
    : `Hello ${SITE.name}, I'd like to discuss an enquiry.`;

  return (
    <div className={cn("relative overflow-hidden rounded-card border border-navy/8 bg-white shadow-soft", className)}>
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold/60 to-gold" />

      <form onSubmit={onSubmit} noValidate className="grid gap-5 p-6 sm:grid-cols-2 sm:p-9" aria-label={variant === "quote" ? "Request a quote" : "Contact form"}>
        {/* Hidden plumbing */}
        <input type="hidden" {...register("startedAt")} />
        <input type="hidden" {...register("page")} />
        <input type="hidden" {...register("turnstileToken")} />
        {/* Honeypot. Invisible to humans, irresistible to bots */}
        <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
          <label>
            Website
            <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
          </label>
        </div>

        <Input label="Full name" required placeholder="Your full name" autoComplete="name" error={errors.name?.message} {...register("name")} />
        <Input label="Company name" placeholder="Company / store (optional)" autoComplete="organization" error={errors.company?.message} {...register("company")} />

        <Input label="Country" required placeholder="e.g. United States" autoComplete="country-name" error={errors.country?.message} {...register("country")} />
        <Input label="Email" required type="email" placeholder="you@company.com" autoComplete="email" error={errors.email?.message} {...register("email")} />

        <Input label="Phone / WhatsApp" required placeholder="+1 555 000 0000" autoComplete="tel" error={errors.phone?.message} {...register("phone")} />
        <Select label="Product category" required placeholder="Choose a category…" options={CATEGORY_OPTIONS} error={errors.category?.message} {...register("category")} />

        <div className="sm:col-span-2">
          <Input
            label="Product"
            placeholder="Product name or SKU (optional)"
            hint={prefillProduct ? "Pre-filled from the product page" : "Optional"}
            list="product-suggestions"
            error={errors.product?.message}
            {...register("product")}
          />
          <datalist id="product-suggestions">
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.name} />
            ))}
          </datalist>
        </div>

        <Input label="Estimated quantity" placeholder="e.g. 500 pieces / 1 container" error={errors.quantity?.message} {...register("quantity")} />
        <Select
          label="Expected delivery timeframe"
          placeholder="Select a timeframe…"
          options={TIMEFRAME_OPTIONS.map((t) => ({ value: t, label: t }))}
          error={errors.timeframe?.message}
          {...register("timeframe")}
        />

        <fieldset className="sm:col-span-2">
          <legend className="mb-2 text-sm font-semibold text-ink">
            Do you need a custom design? <span className="text-gold" aria-hidden="true">*</span>
          </legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CUSTOM_DESIGN_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className="flex min-h-12 cursor-pointer items-center gap-3 rounded-soft border border-navy/15 px-4 py-3 text-sm font-medium text-ink transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold/10"
              >
                <input type="radio" value={opt.value} {...register("customDesign")} className="h-4 w-4 accent-[#0B2545]" />
                {opt.label}
              </label>
            ))}
          </div>
          {errors.customDesign && (
            <p role="alert" className="mt-1.5 text-xs font-medium text-[#B3261E]">
              Please choose one option
            </p>
          )}
        </fieldset>

        <div className="sm:col-span-2">
          <Textarea
            label="Message"
            required
            placeholder="Tell us about your requirement. Sizes, colors, destination port, packaging or branding needs…"
            error={errors.message?.message}
            {...register("message")}
          />
        </div>

        {turnstileSiteKey && (
          <div className="sm:col-span-2">
            <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-callback="onTurnstileOk" data-theme="light" />
          </div>
        )}

        {status === "error" && (
          <div role="alert" className="rounded-soft border border-[#B3261E]/30 bg-[#B3261E]/5 p-5 sm:col-span-2">
            <p className="flex items-start gap-2.5 text-sm font-semibold text-ink">
              <AlertCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#B3261E]" aria-hidden="true" />
              {serverMessage}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent("Enquiry: " + (prefillProduct || "Product"))}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-soft bg-navy px-5 py-2.5 text-sm font-semibold text-ivory"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> {SITE.email}
              </a>
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-soft bg-teal px-5 py-2.5 text-sm font-semibold text-ivory"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
              </a>
            </div>
          </div>
        )}

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-sheen inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-soft bg-navy px-8 py-3.5 font-semibold text-ivory transition-all duration-300 hover:bg-blue disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4.5 w-4.5 animate-spin" aria-hidden="true" /> Sending…
              </>
            ) : (
              <>
                <Send className="h-4.5 w-4.5" aria-hidden="true" />
                {variant === "quote" ? "Request Quote" : "Send Message"}
              </>
            )}
          </button>
          <p className="mt-3.5 flex items-center gap-2 text-xs text-muted">
            <CheckCircle2 className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
            We typically respond within 1-2 business days. Nothing you send is stored on this website.
          </p>
        </div>
      </form>
    </div>
  );
}
