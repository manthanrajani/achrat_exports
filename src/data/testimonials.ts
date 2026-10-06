/**
 * Buyer testimonials.
 * Items marked isSample: true are PLACEHOLDERS (SAMPLE - REPLACE). They render
 * with a visible "Sample" tag so nobody mistakes them for real feedback.
 * Replace the two samples with real buyer quotes when available.
 */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  isSample?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "High quality products with excellent service. Achrat Exports is my go-to for all my crockery needs.",
    name: "Verified Buyer",
    role: "Crockery Importer",
  },
  {
    quote:
      "Impressive Products and Service: Achrat Exports has a wide range of products to choose from. Their quality and pricing are unbeatable.",
    name: "Verified Buyer",
    role: "Wholesale Distributor",
  },
  {
    quote:
      "The custom design process was smooth from brief to sample, and the export packaging arrived in excellent condition.",
    name: "International Buyer",
    role: "Home & Living Retailer",
  },
  {
    quote: "Quick responses, clear export paperwork and on-time dispatch, exactly what we needed for our first order from India.",
    name: "International Buyer",
    role: "Project Procurement Lead",
  },
];
