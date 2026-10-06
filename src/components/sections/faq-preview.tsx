import { Reveal } from "@/components/animations/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";
import { FAQS } from "@/data/faqs";

export function FaqPreview() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="up">
              <p className="flex items-center gap-3 font-number text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-8 bg-gold" aria-hidden="true" /> Common questions
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)] font-semibold text-ink">
                Everything importers ask before the first order
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                MOQs, sampling, Incoterms, packaging, documentation. The essentials, answered plainly. Still curious
                about something? We reply within 1-2 business days.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/faq" variant="primary">
                  View All FAQs
                </Button>
                <Button href="/contact" variant="outline">
                  Ask a Question
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right">
            <Accordion items={FAQS.slice(0, 5)} defaultOpen={0} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
