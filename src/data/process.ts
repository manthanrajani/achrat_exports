/**
 * Process & strengths content used across pages.
 */

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

/** 7-step export journey (Enquiry → Delivery). */
export const EXPORT_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: "Enquiry",
    description:
      "Share your product, quantity, destination and customization needs. We respond with pricing, MOQ and lead time, typically within 1-2 business days.",
  },
  {
    step: 2,
    title: "Design & Sampling",
    description:
      "For custom orders, our team develops your design, or modifies one of ours, and produces samples for your approval before anything goes into production.",
  },
  {
    step: 3,
    title: "Production",
    description:
      "Approved designs move into production with agreed specifications, materials and timelines, coordinated closely with our manufacturing partners.",
  },
  {
    step: 4,
    title: "Quality Check",
    description:
      "Every lot is inspected against your approved sample for finish, dimensions, glazing, hardware action and consistency, piece by piece before packing.",
  },
  {
    step: 5,
    title: "Packaging",
    description:
      "Goods are packed in standard export packaging: individual wrapping, sturdy cartons, edge protection and palletizing or crating for fragile ceramics.",
  },
  {
    step: 6,
    title: "Shipping",
    description:
      "We dispatch by sea (FCL/LCL), air or courier under your agreed Incoterms, EXW, FOB or CIF, with complete export documentation.",
  },
  {
    step: 7,
    title: "Delivery",
    description:
      "Your order reaches your port or door, sale-ready. We stay available for claims support, reorders and planning your next purchase cycle.",
  },
];

/** 4-step custom design (OEM) journey. */
export const CUSTOM_DESIGN_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Share Your Requirement",
    description:
      "Send us your brief, including sketches, reference photos, technical drawings or even a rough idea, along with target sizes, colors and quantities.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Our team translates your brief into a production-ready design: form, glaze palette, pattern artwork, branding placement and packaging concept.",
  },
  {
    step: 3,
    title: "Sample",
    description:
      "We produce physical samples for your review. You approve the exact look and feel before we commit to bulk. Changes at this stage are easy.",
  },
  {
    step: 4,
    title: "Production",
    description:
      "Once approved, we run full production with quality checks against your approved sample, then pack and ship under your terms.",
  },
];

/** What buyers can customize (used on the Custom Design page). */
export const CUSTOMIZATION_OPTIONS = [
  {
    title: "Shape",
    description: "Profiles, rims, handles and silhouettes, from classic rounds to sculptural forms like our fish-shaped platters.",
  },
  {
    title: "Size",
    description: "Capacities and dimensions tuned to your market, from mini condiment bowls to banquet platters.",
  },
  {
    title: "Color",
    description: "Glaze palettes matched to your brand or trend direction. Mints, emeralds, rose tones, aquas and beyond.",
  },
  {
    title: "Pattern",
    description: "Florals, geometrics, ripples and bespoke artwork applied to cups, plates, bowls and sets.",
  },
  {
    title: "Branding",
    description: "Private-label marks, logo decals and back-stamps so the product arrives as unmistakably yours.",
  },
  {
    title: "Packaging",
    description: "Retail boxes, gift packaging and printed export cartons with your artwork and shipping marks.",
  },
];

/** Key strengths (used in Why Choose Us sections). */
export const STRENGTHS = [
  {
    title: "Custom & Modified Designs",
    description: "Share a brief or pick from our range. We create new designs or adapt existing ones to your market.",
  },
  {
    title: "Premium Quality",
    description: "Every lot is inspected against the approved sample before it is allowed anywhere near a carton.",
  },
  {
    title: "Competitive Pricing",
    description: "Direct-from-India sourcing keeps pricing sharp without compromising materials or finish.",
  },
  {
    title: "Export-Ready Packaging",
    description: "Individual wrapping, strong cartons and palletizing engineered for long-haul freight.",
  },
  {
    title: "Low MOQ",
    description: "Bathroom accessories from just 1 piece and flexible crockery MOQs. Validate ranges before scaling.",
  },
  {
    title: "Global Shipping",
    description: "Worldwide dispatch by sea, air or courier under EXW, FOB or CIF, with full export documentation.",
  },
];
