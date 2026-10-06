"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE, whatsappLink } from "@/config/site";
import { PRODUCT_COUNT } from "@/data/products";

const LINES = [
  {
    short: "Shipped across the world",
    full: "Crockery and bathroom accessories, shipped worldwide",
  },
  {
    short: "Custom designs on request",
    full: "Custom designs, made around your brief",
  },
  {
    short: "Low MOQ from Surat",
    full: "Bathroom accessories from just 1 piece",
  },
  {
    short: "Packed and export ready",
    full: "Export-ready packing, shipped from Surat",
  },
] as const;

type LenisLike = {
  on: (event: "scroll", cb: () => void) => void;
  off?: (event: "scroll", cb: () => void) => void;
};

function introHasLeft(intro: Element | null): boolean {
  if (!intro) return false;
  return intro.getBoundingClientRect().bottom <= 0;
}

function footerIsBelow(footer: Element | null): boolean {
  if (!footer) return true;
  return footer.getBoundingClientRect().top >= window.innerHeight;
}

/** True once the opening section has left and the footer has not entered. */
export function useStatusBarVisible() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const intro = document.querySelector("[data-page-intro]");
      const footer = document.querySelector("footer");
      setVisible(introHasLeft(intro) && footerIsBelow(footer));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    lenis?.on("scroll", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      lenis?.off?.("scroll", update);
    };
  }, [pathname]);

  return visible;
}

/**
 * Slim status strip. Visible only after the opening section has left
 * the viewport and before the footer enters it, in either scroll direction.
 */
export function ScrollStatusBar() {
  const visible = useStatusBarVisible();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setLine((current) => (current + 1) % LINES.length), 3400);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={[
        "fixed bottom-5 left-1/2 z-[60] w-max max-w-[calc(100%-1.5rem)] -translate-x-1/2 lg:bottom-6",
        reduceMotion ? "transition-opacity duration-200" : "transition-all duration-500 ease-out",
        visible ? "translate-y-0 opacity-100" : reduceMotion ? "pointer-events-none opacity-0" : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <div className="flex items-center gap-2 rounded-full border border-ivory/10 bg-navy/95 py-1.5 pl-3 pr-1.5 shadow-lift backdrop-blur-md sm:gap-3 sm:py-2 sm:pl-5 sm:pr-2">
        <span className="relative flex h-2 w-2 shrink-0 sm:h-2.5 sm:w-2.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold sm:h-2.5 sm:w-2.5" />
        </span>

        <p className="min-w-0 flex-1 whitespace-nowrap text-[11px] leading-none text-ivory/85 lg:text-[13px]" aria-live="polite">
          <span className="hidden font-number font-semibold text-gold min-[400px]:inline">{PRODUCT_COUNT}+</span>
          <span className="mx-1.5 hidden text-ivory/35 lg:inline">/</span>
          <span className="hidden font-number text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory/70 lg:inline">Products</span>
          <span className="mx-1.5 hidden text-ivory/35 min-[400px]:inline">·</span>
          <span className="inline-grid align-bottom">
            {LINES.map((item, index) => (
              <span
                key={item.short}
                aria-hidden={index !== line}
                className={`col-start-1 row-start-1 transition-opacity duration-500 ${index === line ? "opacity-100" : "pointer-events-none opacity-0"}`}
              >
                <span className="lg:hidden">{item.short}</span>
                <span className="hidden lg:inline">{item.full}</span>
              </span>
            ))}
          </span>
        </p>

        <Link
          href="/get-quote"
          className="inline-flex min-h-8 shrink-0 items-center rounded-full bg-gold px-3 py-1.5 text-[11px] font-semibold text-navy transition-all duration-300 hover:brightness-110 sm:min-h-9 sm:px-4 sm:text-xs"
        >
          <span className="min-[400px]:hidden">Quote</span>
          <span className="hidden min-[400px]:inline">Get a Quote</span>
        </Link>
        <a
          href={whatsappLink(`Hello ${SITE.name}, I'd like to discuss an export order.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-ivory transition-transform duration-300 hover:scale-105 sm:h-9 sm:w-9"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current sm:h-[18px] sm:w-[18px]" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.06 8.06 0 0 1-1.24-4.28c0-4.47 3.64-8.11 8.16-8.11 4.47 0 8.11 3.64 8.11 8.11s-3.64 8.12-8.11 8.12Zm4.45-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.73 2.64 4.18 3.7.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
