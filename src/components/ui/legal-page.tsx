import { Reveal } from "@/components/animations/reveal";
import { Badge, Container, Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

/**
 * Shared layout for policy pages.
 * NOTE: All policy copy is sensible but GENERIC business wording.
 * each page carries an "Owner review pending" badge until confirmed.
 */
export function LegalPage({
  eyebrow,
  title,
  description,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} crumbs={[{ label: title }]} />
      <Section>
        <Container className="max-w-3xl">
          <Reveal variant="up">
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <Badge tone="navy">Last updated: {updated}</Badge>
              <Badge tone="gold">Owner review pending: generic template</Badge>
            </div>
          </Reveal>
          <div className="space-y-10">
            {sections.map((section, index) => (
              <Reveal key={section.heading} variant="up" delay={0.04 * (index % 6)}>
                <section aria-labelledby={`legal-${index}`}>
                  <h2 id={`legal-${index}`} className="font-heading text-xl font-semibold text-ink sm:text-2xl">
                    {index + 1}. {section.heading}
                  </h2>
                  <div className="mt-4 space-y-3.5">
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i} className="leading-relaxed text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
