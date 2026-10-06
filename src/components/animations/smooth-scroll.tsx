"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger, gsap, prefersReducedMotion } from "@/lib/gsap";

function resetToTop(lenis: Lenis | null) {
  if (typeof window === "undefined") return;
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  // Lenis owns scrolling, so window.scrollTo alone leaves the next page mid-way.
  lenis?.scrollTo(0, { immediate: true, force: true });
  window.scrollTo(0, 0);
  ScrollTrigger.refresh();
}

/**
 * Lenis smooth scrolling synced with GSAP's ticker and ScrollTrigger.
 * - Refresh ScrollTrigger after images/fonts finish loading.
 * - Reset scroll to top on route change.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);
    lenisRef.current = lenis;

    // Expose for "back to top" buttons.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", refresh);
    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh).catch(() => undefined);
    }
    const timeout = window.setTimeout(refresh, 1500);
    requestAnimationFrame(refresh);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(raf);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    resetToTop(lenisRef.current);
  }, [pathname]);

  useEffect(() => {
    resetToTop(lenisRef.current);
    const frame = requestAnimationFrame(() => resetToTop(lenisRef.current));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return <>{children}</>;
}
