import Image from "next/image";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { PARTNERS } from "@/data/partners";

export function PartnersSection() {
  return (
    <Section id="partners" tone="mist">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Partner brands"
            title="Labels we take to buyers worldwide"
            description="Crockery, bathroom accessories, steel, pumps and diamonds. Brands we source, pack and export from Surat."
          />
        </Reveal>

        <RevealGroup stagger={0.08} className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {PARTNERS.map((partner) => (
            <article
              key={partner.src}
              className="group flex min-h-[168px] items-center justify-center rounded-card border border-navy/8 bg-white px-6 py-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lift sm:min-h-[188px] sm:px-8"
            >
              <Image
                src={partner.src}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="max-h-24 w-auto max-w-[88%] object-contain transition-transform duration-500 group-hover:scale-[1.04] sm:max-h-28"
              />
            </article>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
