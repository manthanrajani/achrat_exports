"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/section";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  /** Optional background photograph (dimmed under navy) */
  image?: string;
}

export function PageHero({ eyebrow, title, description, crumbs, image }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;
      const q = gsap.utils.selector(ref.current);
      gsap.from(q("[data-hero-reveal]"), {
        y: 34,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        immediateRender: false,
      });
      if (image) {
        gsap.to(q("[data-hero-bg]"), {
          yPercent: 14,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });
      }
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy pb-16 pt-32 text-ivory sm:pb-20 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {image && (
          <div className="absolute inset-[-16%]">
            <Image
              data-hero-bg
              src={image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-20 will-change-transform"
            />
          </div>
        )}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,#FAFAF7_1px,transparent_0)] [background-size:36px_36px]" />
      </div>

      <Container className="relative">
        {crumbs && crumbs.length > 0 && (
          <div data-hero-reveal className="mb-6">
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        <p data-hero-reveal className="flex items-center gap-3 font-number text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
          <span className="h-px w-9 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 data-hero-reveal className="mt-4 max-w-3xl font-heading text-[clamp(2.1rem,4.6vw,3.4rem)] font-semibold leading-[1.1] text-ivory">
          {title}
        </h1>
        {description && (
          <p data-hero-reveal className="mt-5 max-w-2xl text-[clamp(1rem,1.4vw,1.1rem)] leading-relaxed text-ivory/75">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
