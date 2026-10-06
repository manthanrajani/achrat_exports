/**
 * Central site configuration. Edit values here; they propagate everywhere.
 * Anything wrapped in [BRACKETS] is a PLACEHOLDER the owner must replace.
 */

export const SITE = {
  name: "Achrat Exports",
  tagline: "Crafting Excellence, Delivering Quality Globally",
  subTagline: "Leading India-based merchant exporter of ceramic crockery and more",
  description:
    "Achrat Exports is a Surat-based merchant exporter of ceramic crockery, ceramic sanitary ware, brass and stainless-steel bathroom accessories and hardware products, with custom designs, low MOQ, export-ready packaging and global shipping.",

  /** Canonical production domain (used for SEO, sitemap, OG URLs) */
  domain: "https://achratexports.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://achratexports.com",

  contactPerson: "Yash Jagdishbhai Lunagariya",
  contactRole: "Head",
  businessType: "Brand Owner · Exporter · Importer · Wholesaler",
  legalStructure: "Sole Proprietorship",
  established: "June 2024",
  teamSize: "1-10 people",

  // --- Verified credentials (as provided by owner) ---
  gst: "24BLSPL5948Q1Z0",
  iec: process.env.NEXT_PUBLIC_IEC ?? "", // set NEXT_PUBLIC_IEC when issued
  credentials: [
    "FIEO Registered",
    "GST Verified",
    "Export Ready",
    "Verified on Indian Business Portal (GlobalLinker)",
  ] as const,

  // --- Address (OWNER TO CONFIRM before go-live) ---
  address: {
    line1: "3rd Floor, Block no. 71/A, Patel Nagar",
    line2: "A K Road",
    city: "Surat",
    state: "Gujarat",
    postalCode: "395006",
    country: "India",
  },
  geo: { lat: 21.2094, lng: 72.8317 }, // A K Road, Surat (approx.)

  // --- CONTACT PLACEHOLDERS: replace in .env (see .env.example) ---
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+91 99999 99999",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "919999999999",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "sales@achratexports.com",

  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE ?? "",
  },

  hours: "Monday - Saturday · 10:00 AM - 7:00 PM IST",
} as const;

export const FULL_ADDRESS = `${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.postalCode}, ${SITE.address.country}`;

/** WhatsApp click-to-chat link (wa.me requires digits only) */
export function whatsappLink(message?: string): string {
  const digits = SITE.whatsapp.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
