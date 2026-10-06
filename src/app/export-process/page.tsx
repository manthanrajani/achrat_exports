import type { Metadata } from "next";
import { FileCheck2, MessageSquareReply, Timer } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ExportTimeline } from "@/components/sections/export-timeline";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { photo } from "@/data/media";
import { EXPORT_PROCESS } from "@/data/process";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Export Process - From Enquiry to Delivery in 7 Transparent Steps",
  description:
    "See exactly how Achrat Exports moves your order from enquiry through design, sampling, production, quality checks, export packaging and worldwide shipping to final delivery.",
  path: "/export-process",
  keywords: ["india export process", "how to import ceramics from india", "export documentation", "FCL LCL shipping india"],
});

const HERO_IMAGE = photo("30115463");

export default function ExportProcessPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Export Process", path: "/export-process" }])} />
      <PageHero
        eyebrow="How we export"
        title="Seven steps. Zero guesswork."
        description="Follow your order from first enquiry to final delivery, with clear updates at every stage."
        crumbs={[{ label: "Export Process" }]}
        image={HERO_IMAGE}
      />

      {/* Assurance strip */}
      <Section className="pb-0 lg:pb-0" noPadding>
        <Container className="pt-16 lg:pt-20">
          <RevealGroup variant="up" stagger={0.1} className="grid gap-5 sm:grid-cols-3">
            {[
              { icon: MessageSquareReply, title: "1-2 day replies", text: "Every enquiry gets a considered, detailed response, with pricing, MOQ and lead time included." },
              { icon: FileCheck2, title: "Full documentation", text: "Commercial invoice, packing list, B/L or AWB and certificate of origin on every shipment." },
              { icon: Timer, title: "Timeline clarity", text: "Sampling windows and production lead times are written into your proforma and kept." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-card border border-navy/8 bg-white p-6 shadow-card">
                <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-ink">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Timeline */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The journey"
              title="Enquiry to delivery, step by step"
              description="Scroll through the process. The line draws itself as your order would move through it."
            />
          </Reveal>
          <ExportTimeline steps={EXPORT_PROCESS} />
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
