import { z } from "zod";

/**
 * Single source of truth for the enquiry form. The SAME schema validates
 * on the client (react-hook-form) and on the server (/api/enquiry).
 */
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  company: z.string().trim().max(120, "Company name is too long").optional().or(z.literal("")),
  country: z
    .string()
    .trim()
    .min(2, "Please select your country")
    .max(60, "Country name is too long"),
  email: z.email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone / WhatsApp number")
    .max(25, "Phone number is too long"),
  category: z.string().trim().min(2, "Please choose a product category"),
  product: z.string().trim().max(140).optional().or(z.literal("")),
  quantity: z.string().trim().max(60).optional().or(z.literal("")),
  timeframe: z.string().trim().max(80).optional().or(z.literal("")),
  customDesign: z.enum(["yes", "no"]),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (minimum 10 characters)")
    .max(2000, "Message is too long"),
  /** Page the enquiry was sent from (for context in the email). */
  page: z.string().trim().max(200).optional().or(z.literal("")),
  /** Timestamp (ms) when the form was rendered. Used for time-to-submit check. */
  startedAt: z.number().int().positive(),
  /** Honeypot. Must stay empty. */
  website: z.string().max(0).optional().or(z.literal("")),
  /** Optional Cloudflare Turnstile token. */
  turnstileToken: z.string().optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const CUSTOM_DESIGN_OPTIONS = [
  { value: "no", label: "No, standard product" },
  { value: "yes", label: "Yes, I need a custom design" },
] as const;

export const TIMEFRAME_OPTIONS = [
  "Within 30 days",
  "30-60 days",
  "60-90 days",
  "Flexible / just exploring",
] as const;
