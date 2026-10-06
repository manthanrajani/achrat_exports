import type { Metadata } from "next";
import { MessageSquareReply, ShieldCheck, Timer } from "lucide-react";
import { Suspense } from "react";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { JsonLd, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Get a Quote: Free Export Quotation in 1-2 Business Days",
  description:
    "Request a tailored export quotation from Achrat Exports: ceramic crockery, sanitary ware, bathroom accessories and hardware. Tell us quantity, destination and customization. We reply within 1-2 business days.",
  path: "/get-quote",
  keywords: ["export quotation india", "ceramic crockery quote", "bulk order enquiry", "import tableware pricing"],
});

const PROMISES = [
  { icon: MessageSquareReply, title: "Detailed reply in 1-2 days", text: "Pricing, MOQ and lead time, not a canned auto-response." },
  { icon: Timer, title: "Sampling before production", text: "Approve real samples before committing to bulk." },
  { icon: ShieldCheck, title: "Nothing stored", text: "Your enquiry is emailed to us and never saved on this website." },
];

export default function GetQuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Get a Quote", path: "/get-quote" }])} />
      <PageHero
        eyebrow="Get a quote"
        title="Tell us what you need. We'll price it precisely"
        description="Fill the form below and our export team will respond with a tailored quotation, typically within 1-2 business days."
        crumbs={[{ label: "Get a Quote" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <RevealGroup variant="up" stagger={0.12} className="space-y-5">
                {PROMISES.map(({ icon: Icon, title, text }, i) => (
                  <div key={title} className="flex gap-4 rounded-card border border-navy/8 bg-white p-6 shadow-card">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-soft bg-navy/5 text-navy">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-base font-semibold text-ink">{title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{text}</span>
                    </span>
                  </div>
                ))}
              </RevealGroup>

              <Reveal variant="up" delay={0.2}>
                <div className="mt-6 rounded-card bg-navy p-7 text-ivory shadow-card">
                  <h2 className="font-heading text-lg font-semibold">Prefer to write directly?</h2>
                  <p className="mt-2 text-sm text-ivory/70">Email us at</p>
                  <a href={`mailto:${SITE.email}`} className="link-underline mt-1 inline-block font-semibold text-gold">
                    {SITE.email}
                  </a>
                  <p className="mt-4 text-sm text-ivory/70">or call / WhatsApp</p>
                  <a href={`tel:${SITE.phone}`} className="link-underline mt-1 inline-block font-semibold text-gold">
                    {SITE.phone}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal variant="right">
              <Suspense fallback={<div className="h-96 animate-pulse rounded-card bg-white shadow-soft" aria-hidden="true" />}>
                <EnquiryForm variant="quote" />
              </Suspense>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
