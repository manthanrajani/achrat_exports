import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Shipping & Export Policy",
  description:
    "How Achrat Exports ships worldwide: sea, air and courier options, EXW/FOB/CIF Incoterms, packaging standards, documentation, timelines and transit-damage claims.",
  path: "/shipping-policy",
});

export default function ShippingPolicyPage() {
  return (
    <LegalPage
      eyebrow="Logistics, transparently"
      title="Shipping & Export Policy"
      description="How consignments are packed, shipped, documented and supported in transit."
      updated="January 2026"
      sections={[
        {
          heading: "Scope",
          paragraphs: [
            "This policy summarizes how Achrat Exports handles shipping for export orders. Specific arrangements for your order, Incoterm, route, timelines and costs, are confirmed in your proforma invoice and prevail over this general policy. This page is a generic template prepared for owner review.",
          ],
        },
        {
          heading: "Shipping methods",
          paragraphs: [
            "We ship worldwide by sea (full-container and less-than-container loads), by air freight for urgent consignments, and by international courier for samples and small validation orders. Carrier and routing are selected with your cost, timeline and cargo type in mind.",
          ],
        },
        {
          heading: "Incoterms",
          paragraphs: [
            "We commonly work with EXW (Ex Works), FOB (Free on Board) and CIF (Cost, Insurance & Freight). Under EXW the buyer arranges carriage from our facility; under FOB we deliver loaded on board at the nominated Indian port; under CIF we arrange freight and insurance to your destination port. Other Incoterms can be discussed for your order.",
          ],
        },
        {
          heading: "Packaging",
          paragraphs: [
            "All products ship in standard export packaging: individual wrapping, partitioned inner boxes, strong corrugated master cartons with handling marks, and palletizing or crating for fragile ceramic consignments. Photo documentation of packed goods is available on request.",
          ],
        },
        {
          heading: "Timelines",
          paragraphs: [
            "Production lead time and sample timelines are stated in your quotation and proforma invoice. Transit time depends on the destination, shipping mode and carrier schedules, and is estimated, not guaranteed, at the time of booking.",
          ],
        },
        {
          heading: "Documentation",
          paragraphs: [
            "Each shipment includes standard export documents: commercial invoice, packing list, bill of lading or airway bill, and a certificate of origin where required. Destination-specific documents can be arranged when identified before dispatch.",
          ],
        },
        {
          heading: "Duties & destination compliance",
          paragraphs: [
            "Import duties, taxes and destination clearance formalities are the buyer's responsibility unless expressly agreed otherwise in writing. We provide the product and shipment information needed for smooth clearance.",
          ],
        },
        {
          heading: "Transit damage & claims",
          paragraphs: [
            "Despite careful packing, ceramic and glass cargo can occasionally suffer transit damage. Inspect your consignment on arrival, note any damage on the delivery receipt, photograph affected items and packaging, and notify us promptly (within 7 days of delivery) so we can work with you and the relevant carrier or insurer on a remedy. Retain damaged goods and packaging until the claim is resolved.",
          ],
        },
        {
          heading: "Delays & force majeure",
          paragraphs: [
            "We proactively communicate any production or shipping delay we become aware of. Neither party is liable for delays caused by events beyond reasonable control, including port congestion, carrier schedule changes, customs holds, weather and other force-majeure events.",
          ],
        },
        {
          heading: "Questions",
          paragraphs: [
            "For shipment-specific questions, contact us via the enquiry form, email or WhatsApp. Include your proforma or invoice reference for the fastest answer.",
          ],
        },
      ]}
    />
  );
}
