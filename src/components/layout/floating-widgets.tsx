"use client";

import { ArrowUp } from "lucide-react";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { SITE, whatsappLink } from "@/config/site";

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

/** Floating WhatsApp button. Visible on every page. */
function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(`Hello ${SITE.name}, I'd like to discuss an export order.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-[70] flex items-center gap-0 rounded-full bg-teal p-1 text-ivory shadow-lift transition-all duration-500 hover:gap-2 hover:pr-5 sm:bottom-6 sm:right-6"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.06 8.06 0 0 1-1.24-4.28c0-4.47 3.64-8.11 8.16-8.11 4.47 0 8.11 3.64 8.11 8.11s-3.64 8.12-8.11 8.12Zm4.45-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.73 2.64 4.18 3.7.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[140px] sm:block">
        Chat with us
      </span>
    </a>
  );
}

export function FloatingWidgets() {
  return (
    <>
      <ScrollProgress />
      <WhatsAppFloat />
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
