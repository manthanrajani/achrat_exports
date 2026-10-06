"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export type RevealVariant = "up" | "down" | "left" | "right" | "zoom" | "fade";

const offsets: Record<RevealVariant, { x?: number; y?: number; scale?: number }> = {
  up: { y: 18 },
  down: { y: -18 },
  left: { x: 22 },
  right: { x: -22 },
  zoom: { scale: 0.98 },
  fade: {},
};

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  /** Kept for call-site compatibility; reveal now uses the viewport, not ScrollTrigger. */
  start?: string;
}

function revealTargets(
  targets: Element[],
  variant: RevealVariant,
  duration: number,
  delay: number,
  stagger: number,
  onComplete: () => void,
) {
  gsap.set(targets, { willChange: "transform, opacity", force3D: true });
  gsap.fromTo(
    targets,
    { ...offsets[variant], opacity: 0, force3D: true },
    {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: "power2.out",
      force3D: true,
      overwrite: "auto",
      onComplete: () => {
        gsap.set(targets, { clearProps: "willChange,transform" });
        onComplete();
      },
    },
  );
}

/**
 * Plays a reveal once the element is actually inside the viewport.
 * Content stays visible if the observer never runs, so sections cannot
 * be left as empty space (opacity 0) when smooth-scroll and ScrollTrigger disagree.
 */
function useInViewReveal(
  ref: React.RefObject<HTMLDivElement | null>,
  getTargets: () => Element[],
  duration: number,
  delay: number,
  stagger: number,
  variant: RevealVariant,
) {
  const getTargetsRef = useRef(getTargets);
  getTargetsRef.current = getTargets;

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;
    const readTargets = () => getTargetsRef.current().filter(Boolean);

    const targets = readTargets();
    gsap.set(targets, { clearProps: "opacity,transform,visibility" });

    let played = false;
    let finished = false;
    let fallback = 0;
    const play = () => {
      if (played) return;
      const live = readTargets();
      if (live.length === 0) return;
      played = true;
      revealTargets(live, variant, duration, delay, stagger, () => {
        finished = true;
      });
      const expected = (duration + delay + stagger * Math.max(live.length - 1, 0)) * 1000 + 700;
      fallback = window.setTimeout(() => {
        if (finished) return;
        gsap.killTweensOf(live);
        gsap.set(live, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "transform,willChange" });
      }, expected);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          play();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 12% 0px" },
    );
    observer.observe(root);

    const rect = root.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.12 && rect.bottom > 0) play();

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [variant, duration, delay, stagger]);
}

export function Reveal({ children, variant = "up", delay = 0, duration = 0.62, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useInViewReveal(ref, () => (ref.current ? [ref.current] : []), duration, delay, 0, variant);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface RevealGroupProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  stagger?: number;
  duration?: number;
  className?: string;
  start?: string;
}

/** Stagger-reveals its direct children once the group enters the viewport. */
export function RevealGroup({ children, variant = "up", stagger = 0.06, duration = 0.62, className }: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  useInViewReveal(
    ref,
    () => (ref.current ? Array.from(ref.current.children) : []),
    duration,
    0,
    Math.min(stagger, 0.06),
    variant,
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
