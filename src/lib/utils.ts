import { SITE } from "@/config/site";

/** Tiny classnames joiner (no external dep). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Format a number as Indian Rupees, no decimals (₹299 → "₹299"). */
export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Absolute URL for the canonical domain. Used in JSON-LD / metadata. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE.domain}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Truncate long text for meta descriptions. */
export function truncate(text: string, length = 160): string {
  if (text.length <= length) return text;
  return `${text.slice(0, length - 1).trimEnd()}…`;
}
