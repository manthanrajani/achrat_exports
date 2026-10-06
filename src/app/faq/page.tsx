import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { FAQS } from "@/data/faqs";
import { JsonLd, breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ: MOQ, Samples, Payment Terms, Shipping and Incoterms",
  description:
    "Answers for importers: minimum order quantities, custom designs, sampling, payment terms, shipping methods, lead times, export packaging, documentation and Incoterms (EXW, FOB, CIF).",
  path: "/faq",
  keywords: ["import faq india", "moq ceramics", "export payment terms", "fob cif exw explained", "sample before bulk order"],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqLd(FAQS),
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]),
        ]}
      />
      <PageHero
        eyebrow="Frequently asked questions"
        title="Everything importers ask us"
        description="MOQ, sampling, payments, shipping, documents. Answered plainly, without fine print."
        crumbs={[{ label: "FAQ" }]}
      />

      <Section>
        <Container className="max-w-4xl">
          <Reveal variant="up">
            <Accordion items={FAQS} defaultOpen={0} />
          </Reveal>
          <Reveal variant="up" delay={0.15} className="mt-12 text-center">
            <p className="text-muted">Don&rsquo;t see your question here?</p>
            <div className="mt-5 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary">
                Ask Us Directly
              </Button>
              <Button href="/contact" variant="outline">
                Visit the Office
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
