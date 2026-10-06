"use client";

import { ArrowUp } from "lucide-react";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ScrollStatusBar } from "@/components/layout/scroll-status-bar";

function scrollToTop() {
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, o?: { duration?: number }) => void } }).__lenis;
  if (lenis) lenis.scrollTo(0, { duration: 1.2 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

/** Gold scroll-progress bar pinned to the very top of the viewport. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { scaleX: 0 },
        { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } },
      );
    },
    { scope: ref },
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px] bg-transparent">
      <div ref={ref} className="h-full w-full origin-left bg-gold" />
    </div>
  );
}

export function FloatingWidgets() {
  return (
    <>
      <ScrollProgress />
      <ScrollStatusBar />
    </>
  );
}

/** Small client button used in the footer's bottom bar. */
export function BackToTop() {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="inline-flex min-h-11 items-center gap-2 rounded-soft border border-ivory/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ivory/80 transition-all duration-300 hover:border-gold hover:text-gold"
    >
      Back to top
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
