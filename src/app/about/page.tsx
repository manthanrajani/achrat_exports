import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Gem, Handshake, PenTool, SearchCheck, Users } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/config/site";
import { photo } from "@/data/media";

export const metadata: Metadata = pageMetadata({
  title: "About Us - Our Story, Mission & Business Profile",
  description:
    "Achrat Exports is a FIEO-registered, GST-verified merchant exporter from Surat, Gujarat, specializing in custom ceramic crockery, sanitary ware, bathroom accessories and hardware for global markets.",
  path: "/about",
  keywords: ["about achrat exports", "surat exporter company", "indian merchant exporter", "FIEO registered exporter"],
});

const STORY_IMAGE = photo("31493651");
const WORKSHOP_IMAGE = photo("33633350");

const VALUES = [
  {
    icon: <Gem className="h-5 w-5" aria-hidden="true" />,
    title: "Craftsmanship",
    description: "Every piece should be worth photographing and worth reordering. We obsess over finish, glaze and feel.",
  },
  {
    icon: <Handshake className="h-5 w-5" aria-hidden="true" />,
    title: "Reliability",
    description: "Quoted timelines and approved samples are commitments, not estimates. We ship what we promised.",
  },
  {
    icon: <SearchCheck className="h-5 w-5" aria-hidden="true" />,
    title: "Transparency",
    description: "Clear pricing, honest MOQs and proactive updates at every stage of your order.",
  },
  {
    icon: <Users className="h-5 w-5" aria-hidden="true" />,
    title: "Partnership",
    description: "We grow when our buyers grow, so we design, price and pack for your market's success.",
  },
];

const PARTNER_REASONS = [
  "Direct communication with the founder-led team, with no layers and no lost context",
  "Custom and modified designs are our daily work, not an exception",
  "FIEO-registered and GST-verified exporter with export-ready documentation",
  "Low MOQs let you test ranges before committing to container volumes",
  "Export-grade packaging practices for fragile ceramics and metalware",
  "Worldwide shipping under EXW, FOB or CIF with full paperwork",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }])} />
      <PageHero
        eyebrow="Our story"
        title="Where India's ceramic craft meets global trade"
        description="A young, focused export house from Surat, blending artisan tableware with disciplined export operations."
        crumbs={[{ label: "About Us" }]}
        image={WORKSHOP_IMAGE}
      />

      {/* Story + business profile */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Reveal variant="up">
                <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-ink">
                  Crafting excellence since {SITE.established}
                </h2>
              </Reveal>
              <Reveal variant="up" delay={0.1}>
                <p className="mt-5 leading-relaxed text-muted">
                  {SITE.name} is a leading India-based merchant exporter specializing in ceramic crockery manufacturing,
                  with expertise across multiple product categories: ceramic sanitary ware, brass and stainless-steel
                  bathroom accessories, and hardware products.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  We create custom designs according to each client&rsquo;s needs, and our skilled team can modify
                  existing designs to match customer preferences: shape, size, color, pattern, branding and packaging.
                  Our commitment to excellence, innovation and customer satisfaction makes us a trusted export partner
                  for global markets.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  Headquartered in Surat, one of India&rsquo;s most dynamic manufacturing and trading cities, we work
                  closely with skilled ceramic artisans and vetted production units across Gujarat, then manage
                  quality, packing and paperwork from a single accountable desk.
                </p>
              </Reveal>

              <Reveal variant="up" delay={0.18} className="relative mt-10 overflow-hidden rounded-card">
                <div className="relative aspect-[16/9]">
                  <Image src={STORY_IMAGE} alt="Shelves of handcrafted ceramics in an artisan studio" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-6 font-heading text-xl font-semibold text-ivory">
                    Artisan-made, export-finished.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Business profile card */}
            <Reveal variant="right">
              <aside className="sticky top-28 overflow-hidden rounded-card bg-navy p-8 text-ivory shadow-lift sm:p-10" aria-label="Business profile">
                <PenTool className="h-7 w-7 text-gold" aria-hidden="true" />
                <h2 className="mt-4 font-heading text-2xl font-semibold">Business profile</h2>
                <dl className="mt-6 space-y-4 text-sm">
                  {[
                    ["Company", SITE.name],
                    ["Head", SITE.contactPerson],
                    ["Business type", SITE.businessType],
                    ["Legal structure", SITE.legalStructure],
                    ["Established", SITE.established],
                    ["Team size", SITE.teamSize],
                    ["Location", `${SITE.address.city}, ${SITE.address.state}, India`],
                    ["GSTIN", SITE.gst],
                    ["Registrations", "FIEO Registered · Indian Business Portal Verified"],
                  ].map(([term, value]) => (
                    <div key={term} className="flex flex-col gap-1 border-b border-ivory/10 pb-4 last:border-0 last:pb-0 sm:flex-row sm:justify-between sm:gap-4">
                      <dt className="shrink-0 font-semibold uppercase tracking-[0.14em] text-ivory/55 text-[11px] sm:pt-0.5">{term}</dt>
                      <dd className="text-ivory/90 sm:text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
                <Button href="/contact" variant="gold" className="mt-8 w-full">
                  Work With Us
                </Button>
              </aside>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Mission & vision */}
      <Section tone="mist">
        <Container>
          <RevealGroup variant="up" stagger={0.12} className="grid gap-6 md:grid-cols-2">
            <div className="rounded-card border border-navy/8 bg-white p-8 shadow-card sm:p-10">
              <p className="font-number text-xs font-semibold uppercase tracking-[0.22em] text-gold">Our mission</p>
              <p className="mt-4 font-heading text-[1.4rem] leading-relaxed text-ink">
                To make Indian craftsmanship effortlessly importable, delivering quality products, honest terms and a
                buying experience global buyers can trust on every single order.
              </p>
            </div>
            <div className="rounded-card bg-navy p-8 text-ivory shadow-card sm:p-10">
              <p className="font-number text-xs font-semibold uppercase tracking-[0.22em] text-gold">Our vision</p>
              <p className="mt-4 font-heading text-[1.4rem] leading-relaxed">
                To become the most trusted small-batch export partner from India, known for custom design, kept
                promises and shipments that arrive exactly as approved.
              </p>
            </div>
          </RevealGroup>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What guides us"
              title="Values that show up in every carton"
              description="Principles are easy to print. Ours are kept between the first sample and the last quality check."
            />
          </Reveal>
          <RevealGroup variant="up" stagger={0.1} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <FeatureCard key={value.title} icon={value.icon} title={value.title} description={value.description} />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Why partner with us */}
      <Section tone="mist">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="left">
              <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-ink">Why partner with Achrat Exports?</h2>
              <p className="mt-5 leading-relaxed text-muted">
                Importing should feel predictable. Here is what working with a registered, founder-led export team from
                Surat actually looks like:
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/products" variant="primary">
                  Browse Products
                </Button>
                <Button href="/contact" variant="outline">
                  Talk to Us
                </Button>
              </div>
            </Reveal>
            <Reveal variant="right">
              <ul className="space-y-4">
                {PARTNER_REASONS.map((reason) => (
                  <li key={reason} className="flex items-start gap-3.5 rounded-soft border border-navy/8 bg-white p-4 shadow-card">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-ink">{reason}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
