"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
          href="/contact"
          className="inline-flex min-h-8 shrink-0 items-center rounded-full bg-gold px-3 py-1.5 text-[11px] font-semibold text-navy transition-all duration-300 hover:brightness-110 sm:min-h-9 sm:px-4 sm:text-xs"
        >
          <span className="min-[400px]:hidden">Visit</span>
          <span className="hidden min-[400px]:inline">Visit Us</span>
        </Link>
      </div>
    </div>
  );
}
