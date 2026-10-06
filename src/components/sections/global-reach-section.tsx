import { Anchor, FileCheck2, HandCoins } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { TradeGlobe } from "@/components/sections/trade-globe";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";

export function GlobalReachSection() {
  return (
    <Section tone="navy" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-[24rem] w-[24rem] rounded-full bg-teal/10 blur-3xl" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div>
            <Reveal variant="up">
              <p className="flex items-center gap-3 font-number text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-8 bg-gold" aria-hidden="true" /> Shipping worldwide
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)] font-semibold text-ivory">
                From Surat to every port you sell in
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-ivory/75">
                We dispatch worldwide by sea (FCL &amp; LCL), air and courier, with complete export documentation on
                every shipment. Samples travel fast by courier; bulk orders move cost-efficiently by container.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.15} className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Anchor, title: "EXW · FOB · CIF", text: "Flexible Incoterms matched to your freight setup." },
                { icon: FileCheck2, title: "Full documentation", text: "Invoice, packing list, B/L or AWB, origin certificate." },
                { icon: HandCoins, title: "Buyer-friendly terms", text: "Payment and MOQ discussed openly per order." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-card border border-ivory/10 bg-ivory/[0.04] p-5">
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-semibold text-ivory">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ivory/65">{text}</p>
                </div>
              ))}
            </Reveal>

            <Reveal variant="up" delay={0.25} className="mt-9">
              <Button href="/global-reach" variant="gold">
                Explore Our Global Reach
              </Button>
            </Reveal>
          </div>

          <Reveal variant="zoom" className="relative mx-auto w-full max-w-[520px]">
            <TradeGlobe />
            <p className="mt-2 text-center text-xs text-ivory/50">
              Indicative routes show capability, not a client list. We arrange shipping to virtually any port worldwide.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
