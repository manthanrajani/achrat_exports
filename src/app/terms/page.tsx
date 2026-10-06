import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: `Terms governing use of the ${SITE.name} website and the basis on which export quotations and orders are handled.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="The fine print, readable"
      title="Terms & Conditions"
      description="The basis on which we operate this website and handle quotations and orders."
      updated="January 2026"
      sections={[
        {
          heading: "General",
          paragraphs: [
            `This website is operated by ${SITE.name}, a sole proprietorship based in Surat, Gujarat, India. By browsing this website or submitting an enquiry, you accept these terms. This page is a generic template prepared for owner review.`,
          ],
        },
        {
          heading: "Website content",
          paragraphs: [
            "Content on this website is for general information about our products and export services. Product photographs may be representative; colors and finishes of handcrafted ceramic items can vary slightly between display screens and production lots. Indicative prices, where shown, are subject to change and are confirmed formally in a written quotation.",
          ],
        },
        {
          heading: "Quotations & orders",
          paragraphs: [
            "An enquiry submitted through this website is not a purchase order. A binding agreement forms only when specifications, quantities, pricing, payment terms, Incoterms and timelines are confirmed in a proforma invoice or written contract and any agreed advance is received. Production timelines stated in such documents prevail over general information on this website.",
          ],
        },
        {
          heading: "Custom designs & intellectual property",
          paragraphs: [
            "Custom designs developed from a buyer's brief remain subject to the terms agreed with that buyer in writing, including ownership and exclusivity of design. Our own catalogue designs, brand assets, photographs and text on this website remain the property of Achrat Exports and may not be reproduced without permission.",
          ],
        },
        {
          heading: "Export compliance",
          paragraphs: [
            "Buyers are responsible for ensuring that products ordered comply with the import regulations, standards and duties of their destination country. We support this with documentation and product information on request, but destination compliance remains the importer's responsibility.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "This website is provided on an 'as is' basis without warranties of any kind. To the fullest extent permitted by law, Achrat Exports is not liable for indirect or consequential losses arising from use of this website or reliance on its general content. Liability for products supplied is governed by the agreed order terms.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of India, and courts in Surat, Gujarat shall have jurisdiction, subject to any different jurisdiction expressly agreed in a written order contract.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about these terms: email ${SITE.email} or call ${SITE.phone}.`,
          ],
        },
      ]}
    />
  );
}
