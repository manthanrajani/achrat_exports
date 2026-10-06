import type { Metadata } from "next";
import { Anchor, FileCheck2, Globe2, Plane, Ship, Truck } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TradeGlobe } from "@/components/sections/trade-globe";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { photo } from "@/data/media";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Global Reach - Worldwide Shipping, Incoterms & Trade Terms",
  description:
    "Achrat Exports ships worldwide from India by sea, air and courier under EXW, FOB or CIF Incoterms, with complete export documentation, low MOQs and sample-friendly logistics.",
  path: "/global-reach",
  keywords: ["worldwide shipping india exporter", "FOB CIF EXW terms", "sea freight india tableware", "import from surat india"],
});

const HERO_IMAGE = photo("24246926");

const INCOTERMS = [
  {
    code: "EXW",
    name: "Ex Works",
    text: "You collect from our Surat facility with your own forwarder. Maximum control for experienced importers. We prepare, pack and hand over with documentation.",
  },
  {
    code: "FOB",
    name: "Free on Board",
    text: "We handle export clearance and load your goods onto the vessel at the nominated Indian port. Freight and insurance stay with you from there.",
  },
  {
    code: "CIF",
    name: "Cost, Insurance & Freight",
    text: "We arrange and pay for sea freight and insurance to your destination port. Simple landed cost, ideal for first-time importers.",
  },
];

const MODES = [
  { icon: Ship, title: "Sea freight · FCL / LCL", text: "The workhorse for bulk crockery, sanitary ware and hardware. Full or shared containers, port-to-port or door delivery via forwarders." },
  { icon: Plane, title: "Air freight", text: "For urgent, high-value or time-critical consignments. Faster transit at a premium, booked through cargo carriers." },
  { icon: Truck, title: "Courier for samples", text: "Design samples and small validation orders travel by international courier, tracked to your door." },
];

const DOCUMENTS = [
  "Commercial invoice",
  "Packing list",
  "Bill of lading / airway bill",
  "Certificate of origin (where required)",
  "Additional documents per your country's import rules. Tell us what you need",
];

export default function GlobalReachPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Global Reach", path: "/global-reach" }])} />
      <PageHero
        eyebrow="Global reach"
        title="Shipping worldwide, from one accountable desk"
        description="Sea, air and courier, with flexible Incoterms, honest lead times and complete paperwork on every consignment."
        crumbs={[{ label: "Global Reach" }]}
        image={HERO_IMAGE}
      />

      {/* Globe intro */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="left">
              <p className="flex items-center gap-3 font-number text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-8 bg-gold" aria-hidden="true" /> Where we deliver
              </p>
              <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-ink">
                Any market. Any port. One exporter.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Whether you sell in a single city or across continents, we build the logistics around your plan:
                samples by courier, validation orders by LCL, and full containers when you scale. Destination,
                Incoterm and timeline are agreed up front, in writing, in your proforma.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-muted">
                <li className="flex items-center gap-3">
                  <Globe2 className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  Shipping arranged to virtually any port worldwide
                </li>
                <li className="flex items-center gap-3">
                  <Anchor className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  EXW, FOB and CIF supported as standard
                </li>
                <li className="flex items-center gap-3">
                  <FileCheck2 className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  Complete export documentation with every shipment
                </li>
              </ul>
            </Reveal>
            <Reveal variant="zoom" className="rounded-card bg-navy p-6 shadow-lift sm:p-10">
              <TradeGlobe />
              <p className="mt-4 text-center text-xs text-ivory/50">
                Stylized routes show capability, not a claimed client list.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Incoterms */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Trade terms"
              title="Incoterms we work with"
              description="Pick the shipping arrangement that matches your freight setup, and we'll quote accordingly."
            />
          </Reveal>
          <RevealGroup variant="up" stagger={0.12} className="grid gap-6 md:grid-cols-3">
            {INCOTERMS.map((term) => (
              <div key={term.code} className="group rounded-card border border-navy/8 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-lift">
                <p className="font-number text-3xl font-semibold tracking-wide text-navy">
                  {term.code}
                  <span className="ml-3 text-sm font-medium uppercase tracking-[0.14em] text-gold">{term.name}</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{term.text}</p>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Modes + docs + terms */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Logistics, paperwork & terms"
              title="The practical details, up front"
            />
          </Reveal>

          <RevealGroup variant="up" stagger={0.1} className="grid gap-6 md:grid-cols-3">
            {MODES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-card border border-navy/8 bg-white p-7 shadow-card">
                <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </RevealGroup>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal variant="left">
              <div className="h-full rounded-card bg-navy p-8 text-ivory sm:p-10">
                <h3 className="flex items-center gap-3 font-heading text-xl font-semibold">
                  <FileCheck2 className="h-5 w-5 text-gold" aria-hidden="true" /> Documentation on every shipment
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {DOCUMENTS.map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-ivory/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal variant="right">
              <div className="flex h-full flex-col gap-6">
                <div className="rounded-card border border-gold/40 bg-gold/10 p-8">
                  <h3 className="font-heading text-xl font-semibold text-ink">Payment terms</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    We discuss payment terms openly per order, commonly advance plus balance against documents, bank
                    transfer (T/T) or letter of credit (L/C), and confirm them in your proforma invoice before
                    production begins. Mention your preferred arrangement in your enquiry.
                  </p>
                </div>
                <div className="rounded-card border border-navy/8 bg-white p-8 shadow-card">
                  <h3 className="font-heading text-xl font-semibold text-ink">MOQ notes</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Bathroom accessories (stainless steel &amp; brass) start from just 1 piece under HS Code 73249000.
                    Ceramic crockery follows low, flexible MOQs depending on design and customization. Samples are
                    available for all product categories before bulk production.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
