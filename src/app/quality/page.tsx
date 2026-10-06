import type { Metadata } from "next";
import Image from "next/image";
import { Boxes, ClipboardCheck, Layers, ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { photo } from "@/data/media";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Quality & Packaging - Export-Safe Ceramics and Metalware",
  description:
    "How Achrat Exports checks every lot against approved samples and packs fragile ceramics and metalware for long-haul freight: individual wrapping, strong cartons, edge protection and palletizing.",
  path: "/quality",
  keywords: ["export packaging ceramics", "fragile cargo packing", "quality control indian exporter", "safe shipping tableware"],
});

const QC_IMAGE = photo("14341974");
const PACK_IMAGE_1 = photo("6169151");
const PACK_IMAGE_2 = photo("6169020");

const QC_POINTS = [
  { title: "Approved-sample matching", text: "Production lots are compared against the sample you signed off: glaze, color, weight and finish." },
  { title: "Visual & surface inspection", text: "Pinholes, glaze runs, chips, warping and decoration alignment are checked piece by piece." },
  { title: "Dimensional checks", text: "Key measurements are verified so sets stack correctly and hardware installs as expected." },
  { title: "Function tests", text: "Towel racks bear weight, hinges and handles cycle smoothly, sanitary ware is checked for flaws." },
  { title: "Pre-dispatch audit", text: "Cartons, markings, counts and packing lists are cross-checked before the container is sealed." },
];

const PACKAGING_STEPS = [
  { step: 1, title: "Individual wrapping", text: "Each ceramic piece is wrapped and separated, so no surface touches another surface." },
  { step: 2, title: "Partitioned inner boxes", text: "Dividers and cushioning immobilize contents inside strong inner cartons." },
  { step: 3, title: "5-ply export cartons", text: "Corrugated master cartons with edge protectors and fragile/side-up handling marks." },
  { step: 4, title: "Palletizing & crating", text: "Heavy or fragile consignments are strapped to pallets or crated for rough routes." },
  { step: 5, title: "Container loading plan", text: "Heavy at the base, fragile on top, loaded to minimize in-transit movement." },
];

export default function QualityPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Quality & Packaging", path: "/quality" }])} />
      <PageHero
        eyebrow="Quality & packaging"
        title="Checked piece by piece. Packed for the journey."
        description="A beautiful product is worthless if it arrives broken. Here is how we protect your order, honestly and without certificate theatre."
        crumbs={[{ label: "Quality & Packaging" }]}
        image={PACK_IMAGE_1}
      />

      {/* QC approach */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="left">
              <p className="flex items-center gap-3 font-number text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-8 bg-gold" aria-hidden="true" /> Our quality approach
              </p>
              <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-ink">
                You approve a sample. We hold production to it.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Our quality process is deliberately simple and strict: your approved sample becomes the contract, and
                every production lot is inspected against it before packing. What you approved is what ships, with no
                silent substitutions, no &ldquo;close enough&rdquo; glazes.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                We are transparent about who we are: a young, verified exporter, FIEO registered and GST-verified,
                that chooses rigorous checking over impressive-sounding paperwork. Ask us anything about how a
                specific product is tested.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Ask About Our QC Process
                </Button>
              </div>
            </Reveal>

            <Reveal variant="right">
              <ul className="space-y-4">
                {QC_POINTS.map((point, index) => (
                  <li key={point.title} className="flex gap-4 rounded-soft border border-navy/8 bg-white p-5 shadow-card">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-soft bg-navy/5 font-number text-sm font-semibold text-navy">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-[15px] font-semibold text-ink">{point.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{point.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Packaging */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Export packaging standards"
              title="Five layers between your ceramics and the ocean"
              description="Fragile cargo needs engineering, not luck. Every consignment follows the same protective sequence."
            />
          </Reveal>

          <RevealGroup variant="up" stagger={0.1} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PACKAGING_STEPS.map((item) => (
              <div key={item.step} className="rounded-card border border-navy/8 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-number text-sm font-semibold text-navy">
                  {item.step}
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </RevealGroup>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Reveal variant="left" className="relative overflow-hidden rounded-card lg:col-span-2">
              <div className="relative aspect-[16/10]">
                <Image src={QC_IMAGE} alt="Hands carefully arranging ceramic plates and bowls before packing" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 sm:left-8">
                  <p className="font-heading text-2xl font-semibold text-ivory">Handled like it&rsquo;s our own</p>
                  <p className="mt-1 max-w-md text-sm text-ivory/75">From kiln to container, every handover is supervised by our team.</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="right" className="grid gap-6">
              <div className="relative overflow-hidden rounded-card">
                <div className="relative aspect-[16/10]">
                  <Image src={PACK_IMAGE_2} alt="Fragile-labeled export cartons organized on steel shelving" fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center rounded-card bg-navy p-7 text-ivory">
                <ShieldCheck className="h-6 w-6 text-gold" aria-hidden="true" />
                <p className="mt-3 text-sm leading-relaxed text-ivory/85">
                  Photo documentation of your packed goods and sealed container is shared on request, so you can see
                  the load before it sails.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Handling banner */}
      <Section noPadding className="pt-0 lg:pt-0">
        <Container>
          <RevealGroup variant="up" stagger={0.1} className="grid gap-5 rounded-card border border-navy/8 bg-white p-8 shadow-soft sm:grid-cols-3 sm:p-10">
            {[
              { icon: ClipboardCheck, title: "Pre-shipment report", text: "Counts, markings and QC findings shared before dispatch." },
              { icon: Layers, title: "Breakage-spare planning", text: "Extra-packing options and spare-piece strategies for long routes." },
              { icon: Boxes, title: "Mixed SKU consolidation", text: "Combine crockery, accessories and hardware safely in one shipment." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="mt-3.5 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
