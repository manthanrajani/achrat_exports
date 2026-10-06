import Image from "next/image";
import { ArrowRight, PenTool, ShieldCheck, Truck } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";
import { SITE } from "@/config/site";
import { photo } from "@/data/media";

const IMG_PRIMARY = photo("33633350");
const IMG_SECONDARY = photo("6169151");

export function AboutPreview() {
  return (
    <Section className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Imagery */}
          <Reveal variant="left" className="relative pb-12 sm:pb-16 lg:pb-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-soft">
              <Image
                src={IMG_PRIMARY}
                alt="Handcrafted clay pots in a traditional Indian pottery workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 hidden w-1/2 overflow-hidden rounded-card border-8 border-ivory shadow-lift sm:block lg:-right-10">
              <div className="relative aspect-[4/5]">
                <Image
                  src={IMG_SECONDARY}
                  alt="Export carton being sealed with a fragile label"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -left-5 -top-5 hidden rounded-card bg-navy px-6 py-5 text-ivory shadow-lift sm:block">
              <p className="font-number text-2xl font-semibold text-gold">Est. {SITE.established}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/70">Surat · Gujarat · India</p>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal variant="up">
              <p className="flex items-center gap-3 font-number text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-8 bg-gold" aria-hidden="true" /> About {SITE.name}
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)] font-semibold text-ink">
                A Surat-based merchant exporter built on craftsmanship and trust
              </h2>
            </Reveal>
            <Reveal variant="up" delay={0.12}>
              <p className="mt-5 leading-relaxed text-muted">
                {SITE.name} is a leading India-based merchant exporter specializing in ceramic crockery manufacturing,
                with expertise across multiple product categories. We create custom designs around each client&rsquo;s
                brief, and our skilled team can modify any existing design to match your market&rsquo;s preferences.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Our commitment to excellence, innovation and customer satisfaction makes us a trusted export partner
                for global markets, from boutique homeware brands to high-volume wholesalers.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.22} className="mt-8 space-y-4">
              {[
                { icon: PenTool, title: "Custom & modified designs", text: "Share a brief; we shape, glaze and brand around it." },
                { icon: ShieldCheck, title: "Verified & registered", text: `GSTIN ${SITE.gst} · FIEO Registered · Export ready.` },
                { icon: Truck, title: "Worldwide logistics", text: "Sea, air or courier: EXW, FOB or CIF, fully documented." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-soft bg-navy/5 text-navy">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
                    <p className="text-sm text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal variant="up" delay={0.32}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Button href="/about" variant="primary">
                  Our Story <ArrowRight className="hidden" aria-hidden="true" />
                </Button>
                <div className="border-l-2 border-gold pl-4">
                  <p className="text-sm font-semibold text-ink">{SITE.contactPerson}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{SITE.contactRole} · {SITE.name}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
