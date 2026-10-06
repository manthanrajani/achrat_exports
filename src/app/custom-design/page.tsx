import type { Metadata } from "next";
import Image from "next/image";
import { Flower2, Package, Palette, Ruler, Shapes, Stamp } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { photo } from "@/data/media";
import { CUSTOMIZATION_OPTIONS, CUSTOM_DESIGN_STEPS } from "@/data/process";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Custom Design & OEM - Made-to-Order Ceramics from India",
  description:
    "Share a brief and Achrat Exports designs, samples and produces custom ceramic crockery for your brand: shape, size, color, pattern, branding and packaging, with a simple 4-step OEM process.",
  path: "/custom-design",
  keywords: ["custom ceramic dinnerware", "oem ceramics india", "private label tableware", "custom pottery manufacturer", "design your own crockery"],
});

const CUSTOM_IMAGE = photo("11065504");
const SKETCH_IMAGE = photo("3991973");

const OPTION_ICONS = [
  <Shapes key="o1" className="h-5 w-5" aria-hidden="true" />,
  <Ruler key="o2" className="h-5 w-5" aria-hidden="true" />,
  <Palette key="o3" className="h-5 w-5" aria-hidden="true" />,
  <Flower2 key="o4" className="h-5 w-5" aria-hidden="true" />,
  <Stamp key="o5" className="h-5 w-5" aria-hidden="true" />,
  <Package key="o6" className="h-5 w-5" aria-hidden="true" />,
];

export default function CustomDesignPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Custom Design / OEM", path: "/custom-design" }])} />
      <PageHero
        eyebrow="Custom Design / OEM"
        title="Your design. Our craft. One seamless process."
        description="From a rough sketch to a retail-ready shipment, we create custom ceramic designs, or modify ours, exactly to your market's taste."
        crumbs={[{ label: "Custom Design / OEM" }]}
        image={SKETCH_IMAGE}
      />

      {/* Intro */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="left">
              <p className="flex items-center gap-3 font-number text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-8 bg-gold" aria-hidden="true" /> Design-led exporting
              </p>
              <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-ink">
                Custom-made is our standard, not our exception
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Most exporters ask you to pick from a fixed catalogue. We prefer your brief. Send a sketch, a mood
                board, reference photos or a technical drawing. Our team develops a production-ready design, or
                adapts any piece from our existing range to match your customer&rsquo;s preferences.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Shape, size, color, pattern, branding and packaging are all on the table, for boutique runs and full
                container programs alike. And because sampling comes before production, what you approve is what you
                receive.
              </p>
              <div className="mt-8">
                <Button href="/get-quote?category=Ceramic%20Crockery" variant="primary">
                  Brief Us on Your Design
                </Button>
              </div>
            </Reveal>
            <Reveal variant="right" className="relative pb-10 sm:pb-12 lg:pb-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-soft">
                <Image
                  src={CUSTOM_IMAGE}
                  alt="Minimal white ceramic tableware ready for custom glaze development"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-[1.4s] hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 rounded-card bg-gold px-6 py-5 text-navy shadow-lift sm:-left-8">
                <p className="font-heading text-2xl font-bold">4 steps</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em]">brief → production</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4-step process */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="A simple four-step design journey"
              description="No design jargon and no disappearing suppliers. Just a clear path from your idea to your invoice."
            />
          </Reveal>
          <RevealGroup variant="up" stagger={0.12} className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CUSTOM_DESIGN_STEPS.map((step) => (
              <div key={step.step} className="group relative overflow-hidden rounded-card border border-navy/8 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-lift">
                <span aria-hidden="true" className="absolute -right-3 -top-5 font-number text-[5.5rem] font-semibold leading-none text-gold/15 transition-colors group-hover:text-gold/25">
                  {step.step}
                </span>
                <p className="relative font-number text-xs font-semibold uppercase tracking-[0.2em] text-gold">Step {step.step}</p>
                <h3 className="relative mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* What we customize */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Full creative control"
              title="Six things you can customize"
              description="Mix and match every attribute below. We build the product around your brand, not the other way round."
            />
          </Reveal>
          <RevealGroup variant="up" stagger={0.09} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CUSTOMIZATION_OPTIONS.map((option, index) => (
              <FeatureCard key={option.title} icon={OPTION_ICONS[index]} title={option.title} description={option.description} />
            ))}
          </RevealGroup>
          <Reveal className="mt-12 text-center">
            <p className="mx-auto max-w-xl text-sm text-muted">
              Working with an existing reference piece? We modify current designs too, with faster sampling and lower
              development cost.
            </p>
            <div className="mt-6">
              <Button href="/products" variant="outline">
                Pick a Base Design from the Catalogue
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
