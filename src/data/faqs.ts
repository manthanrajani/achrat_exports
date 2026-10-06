/**
 * Frequently asked questions, also used to generate FAQPage JSON-LD.
 * Keep answers honest: no invented certifications, countries or statistics.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "We keep MOQs buyer-friendly. Bathroom accessories (stainless steel & brass) start from just 1 piece, and ceramic crockery follows a low, flexible MOQ depending on the design and customization involved. Share your target quantities when you visit the office and we'll confirm the exact MOQ for your selection.",
  },
  {
    question: "Can you create custom or modified designs?",
    answer:
      "Yes. Custom design is one of our core strengths. You can share a brief, reference images or technical drawings, and our team will develop a new design or modify an existing one to match your preferences, including shape, size, color, pattern, branding and packaging.",
  },
  {
    question: "Do you provide samples before bulk production?",
    answer:
      "Yes. Sampling is part of our standard process. After the design is finalized, we produce samples for your approval before mass production begins. Sample cost and courier time depend on the product and are confirmed with your quotation.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Payment terms are confirmed with each order and depend on order size and relationship. We commonly work with advance plus balance against shipping documents, bank transfer (T/T) and letter of credit (L/C) where required. Tell us your preferred terms when you visit the office and we'll confirm what works for your order.",
  },
  {
    question: "Which countries do you ship to?",
    answer:
      "We ship worldwide by sea (FCL/LCL) for bulk orders and by air or courier for samples and smaller lots. We work with reliable freight forwarders and can ship to your nominated port or door, subject to the agreed Incoterms.",
  },
  {
    question: "Which Incoterms do you support?",
    answer:
      "We commonly work with EXW (Ex Works), FOB (Free on Board) and CIF (Cost, Insurance & Freight). If you prefer another Incoterm, mention it in your enquiry and we'll confirm feasibility for your destination.",
  },
  {
    question: "What is the typical production lead time?",
    answer:
      "Lead time depends on the product, customization level and order quantity, and is stated clearly in your proforma invoice. Standard production typically runs 30-45 days after sample approval and order confirmation. Custom designs may need extra time for sampling before bulk production.",
  },
  {
    question: "How do you pack fragile ceramic products for export?",
    answer:
      "Ceramics are individually wrapped and separated, packed in strong corrugated cartons with edge protection, and palletized or crated where required. We follow standard export packaging practices so your goods arrive sale-ready, not shattered.",
  },
  {
    question: "What export documents do you provide?",
    answer:
      "We provide standard export documentation for every shipment: commercial invoice, packing list and bill of lading/airway bill, plus a certificate of origin where required. Additional documents can be arranged based on your country's import requirements.",
  },
  {
    question: "Can you handle private labeling and custom packaging?",
    answer:
      "Yes. We offer private labeling, logo application and custom retail or gift packaging for crockery programs, as well as export cartons printed with your shipping marks.",
  },
  {
    question: "Are you a registered exporter?",
    answer:
      "Yes. Achrat Exports is a GST-verified sole proprietorship (GSTIN 24BLSPL5948Q1Z0), FIEO registered and verified on the Indian Business Portal (GlobalLinker). We are an export-ready merchant exporter based in Surat, Gujarat, India.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Visit the Contact page for the Surat office address and business hours. Bring the product category, quantities, destination country and whether you need a custom design.",
  },
];
