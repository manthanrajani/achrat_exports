import type { Metadata } from "next";
import { Clock3, MapPin } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { FULL_ADDRESS, SITE } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Visit Our Export Office in Surat, India",
  description:
    "Find Achrat Exports in Surat, Gujarat. Registered address, business hours and map for the export office.",
  path: "/contact",
  keywords: ["contact achrat exports", "surat exporter contact", "ceramic exporter india contact"],
});

const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(FULL_ADDRESS)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero
        eyebrow="Contact us"
        title="Visit the export office in Surat"
        description="Our office address, business hours and map."
        crumbs={[{ label: "Contact" }]}
      />

      <Section>
        <Container className="max-w-3xl">
          <RevealGroup variant="up" stagger={0.1} className="grid gap-5">
            <div className="rounded-card border border-navy/8 bg-white p-6 shadow-card">
              <MapPin className="h-6 w-6 text-gold" aria-hidden="true" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Registered address</p>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-ink">{FULL_ADDRESS}</p>
              <p className="mt-3 text-sm text-muted">
                {SITE.contactPerson} · {SITE.contactRole}
              </p>
            </div>
            <div className="rounded-card border border-navy/8 bg-white p-6 shadow-card">
              <Clock3 className="h-6 w-6 text-gold" aria-hidden="true" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Business hours</p>
              <p className="mt-1 text-sm font-semibold text-ink">{SITE.hours}</p>
            </div>
          </RevealGroup>

          <Reveal variant="up" delay={0.15} className="mt-6 overflow-hidden rounded-card border border-navy/8 shadow-card">
            <iframe
              src={MAP_URL}
              title={`Map of ${SITE.name}, ${SITE.address.city}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[300px] w-full border-0 sm:h-[420px]"
            />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
