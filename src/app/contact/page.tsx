import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Suspense } from "react";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { FULL_ADDRESS, SITE, whatsappLink } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Talk to Our Export Team in Surat, India",
  description:
    "Contact Achrat Exports in Surat, Gujarat: reach our export team by form, email, phone or WhatsApp. Business hours, address and map. Responses within 1-2 business days.",
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
        title="Let's talk about your next import"
        description="Call, message or write. A real export specialist answers, not a ticket queue."
        crumbs={[{ label: "Contact" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* Details + map */}
            <div className="space-y-6">
              <RevealGroup variant="up" stagger={0.1} className="grid gap-5 sm:grid-cols-2">
                <a href={`mailto:${SITE.email}`} className="group rounded-card border border-navy/8 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/40">
                  <Mail className="h-6 w-6 text-gold" aria-hidden="true" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Email</p>
                  <p className="mt-1 break-all text-sm font-semibold text-ink group-hover:text-navy">{SITE.email}</p>
                </a>
                <a href={`tel:${SITE.phone}`} className="group rounded-card border border-navy/8 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/40">
                  <Phone className="h-6 w-6 text-gold" aria-hidden="true" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Phone / WhatsApp</p>
                  <p className="mt-1 text-sm font-semibold text-ink group-hover:text-navy">{SITE.phone}</p>
                </a>
                <div className="rounded-card border border-navy/8 bg-white p-6 shadow-card sm:col-span-2">
                  <MapPin className="h-6 w-6 text-gold" aria-hidden="true" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Registered address</p>
                  <p className="mt-1 text-sm font-semibold leading-relaxed text-ink">{FULL_ADDRESS}</p>
                </div>
                <div className="rounded-card border border-navy/8 bg-white p-6 shadow-card sm:col-span-2">
                  <Clock3 className="h-6 w-6 text-gold" aria-hidden="true" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Business hours</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{SITE.hours}</p>
                </div>
              </RevealGroup>

              <Reveal variant="up" delay={0.15}>
                <a
                  href={whatsappLink(`Hello ${SITE.name}, I'd like to speak to the export team.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 items-center justify-center gap-3 rounded-card bg-teal px-6 py-4 font-semibold text-ivory shadow-card transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Chat instantly on WhatsApp
                </a>
              </Reveal>

              <Reveal variant="up" delay={0.2} className="overflow-hidden rounded-card border border-navy/8 shadow-card">
                <iframe
                  src={MAP_URL}
                  title={`Map of ${SITE.name}, ${SITE.address.city}`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] w-full border-0 sm:h-[340px]"
                />
              </Reveal>
            </div>

            {/* Form */}
            <Reveal variant="right">
              <h2 className="mb-6 font-heading text-2xl font-semibold text-ink">Write to us</h2>
              <Suspense fallback={<div className="h-96 animate-pulse rounded-card bg-white shadow-soft" aria-hidden="true" />}>
                <EnquiryForm variant="contact" />
              </Suspense>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
