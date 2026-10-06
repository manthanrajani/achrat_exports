"use client";

import { useRef, useState } from "react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/** Cinematic brand preloader. Slides away once the intro completes. */
export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (prefersReducedMotion()) {
        setDone(true);
        return;
      }
      const q = gsap.utils.selector(ref.current);
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => setDone(true),
      });
      tl.from(q("[data-logo]"), { opacity: 0, y: 28, duration: 0.8 })
        .from(q("[data-tagline]"), { opacity: 0, y: 14, duration: 0.5 }, "-=0.25")
        .fromTo(q("[data-bar]"), { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, "-=0.4")
        .to(ref.current, { yPercent: -100, duration: 0.85, ease: "power4.inOut", delay: 0.15 });
    },
    { scope: ref },
  );

  if (done) return null;

  return (
    <>
      <noscript>
        <style>{`#site-preloader{display:none}`}</style>
      </noscript>
      <div
        id="site-preloader"
        ref={ref}
        aria-hidden="true"
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-navy"
      >
        <div data-logo>
          <BrandLogo tone="ivory" className="h-20 w-auto sm:h-28" />
        </div>
        <p data-tagline className="mt-5 font-number text-[11px] font-semibold uppercase tracking-[0.34em] text-gold">
          Surat · Gujarat · India
        </p>
        <div className="mt-8 h-px w-44 overflow-hidden bg-ivory/15">
          <div data-bar className="h-full w-full origin-left bg-gold" />
        </div>
      </div>
    </>
  );
}
