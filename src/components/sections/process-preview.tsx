import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal, RevealGroup } from "@/components/animations/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { EXPORT_PROCESS } from "@/data/process";

/** Condensed 7-step process shown on the home page. */
export function ProcessPreview() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="From enquiry to delivery"
            title="A transparent, seven-step export process"
            description="You always know exactly where your order stands. Here is how we move from first hello to delivered goods."
          />
        </Reveal>

        <RevealGroup variant="up" stagger={0.08} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EXPORT_PROCESS.map((step) => (
            <div
              key={step.step}
              className="group relative overflow-hidden rounded-card border border-navy/8 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lift"
            >
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-4 font-number text-[5rem] font-semibold leading-none text-gold/15 transition-colors duration-500 group-hover:text-gold/25"
              >
                {String(step.step).padStart(2, "0")}
              </span>
              <p className="relative font-number text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Step {String(step.step).padStart(2, "0")}
              </p>
              <h3 className="relative mt-2.5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="relative mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}

          {/* CTA card completes the 8-cell grid */}
          <Link
            href="/export-process"
            className="group flex min-h-full flex-col justify-between gap-6 rounded-card bg-navy p-6 text-ivory shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <p className="font-heading text-xl font-semibold leading-snug">
              See the full journey, step by step
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
              How We Export
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
            </span>
          </Link>
        </RevealGroup>
      </Container>
    </Section>
  );
}
