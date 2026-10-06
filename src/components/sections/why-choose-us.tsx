import { Boxes, Gem, IndianRupee, PackageCheck, PenTool, Ship } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { STRENGTHS } from "@/data/process";

const ICONS = [
  <PenTool key="i1" className="h-5 w-5" aria-hidden="true" />,
  <Gem key="i2" className="h-5 w-5" aria-hidden="true" />,
  <IndianRupee key="i3" className="h-5 w-5" aria-hidden="true" />,
  <PackageCheck key="i4" className="h-5 w-5" aria-hidden="true" />,
  <Boxes key="i5" className="h-5 w-5" aria-hidden="true" />,
  <Ship key="i6" className="h-5 w-5" aria-hidden="true" />,
];

export function WhyChooseUs() {
  return (
    <Section tone="navy" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,#FAFAF7_1px,transparent_0)] [background-size:42px_42px]" />
      </div>

      <Container className="relative">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Why buyers choose Achrat"
            title="An export partner that works the way you do"
            description="Registered, verified and export-ready, with the flexibility of a focused team and the discipline of a much larger exporter."
          />
        </Reveal>

        <RevealGroup variant="up" stagger={0.09} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {STRENGTHS.map((strength, index) => (
            <FeatureCard key={strength.title} tone="dark" icon={ICONS[index]} title={strength.title} description={strength.description} />
          ))}
        </RevealGroup>

        <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-3" variant="zoom">
          {["FIEO Registered", "GST Verified", "Export Ready", "Indian Business Portal Verified"].map((label) => (
            <span
              key={label}
              className="rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 font-number text-xs font-semibold uppercase tracking-[0.16em] text-gold"
            >
              {label}
            </span>
          ))}
        </Reveal>

        <Reveal className="mt-12 text-center">
          <Button href="/custom-design" variant="gold">
            Start a Custom Project
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
