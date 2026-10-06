"use client";

import { ClipboardCheck, Factory, MailOpen, Package, Palette, Ship, Truck } from "lucide-react";
import { useRef } from "react";
import type { ProcessStep } from "@/data/process";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const STEP_ICONS = [MailOpen, Palette, Factory, ClipboardCheck, Package, Ship, Truck];

/**
 * Full vertical timeline with a center line that draws as you scroll (scrub).
 * Steps alternate left / right on desktop and stack on mobile.
 */
export function ExportTimeline({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;
      const q = gsap.utils.selector(ref.current);

      // Draw the spine
      gsap.fromTo(
        q("[data-spine]"),
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 72%", end: "bottom 58%", scrub: 0.6 },
        },
      );

      // Reveal each row + pulse its node
      q("[data-row]").forEach((row) => {
        const el = row as HTMLElement;
        const fromLeft = el.dataset.side === "left";
        gsap.from(el.querySelector("[data-card]") as Element, {
          x: fromLeft ? -56 : 56,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 84%", once: true },
        });
        gsap.from(el.querySelector("[data-node]") as Element, {
          scale: 0,
          duration: 0.5,
          ease: "back.out(2.2)",
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 84%", once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl">
      {/* Spine */}
      <div aria-hidden="true" className="absolute inset-y-0 left-5 w-[2px] bg-navy/10 lg:left-1/2 lg:-translate-x-1/2">
        <div data-spine className="h-full w-full bg-gradient-to-b from-gold via-gold to-gold/40" />
      </div>

      <ol className="space-y-12 lg:space-y-16">
        {steps.map((step, index) => {
          const Icon = STEP_ICONS[index % STEP_ICONS.length];
          const leftSide = index % 2 === 0;
          return (
            <li key={step.step} data-row data-side={leftSide ? "left" : "right"} className="relative pl-16 lg:pl-0">
              {/* Node */}
              <span
                data-node
                aria-hidden="true"
                className="absolute left-5 top-1 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold bg-white text-navy shadow-card lg:left-1/2"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <div className={cn("lg:w-[calc(50%-3.5rem)]", leftSide ? "lg:mr-auto lg:text-right" : "lg:ml-auto")}>
                <div
                  data-card
                  className={cn(
                    "rounded-card border border-navy/8 bg-white p-6 shadow-card transition-shadow duration-500 hover:shadow-lift sm:p-7",
                    leftSide && "lg:[direction:ltr]",
                  )}
                >
                  <p className="font-number text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Step {String(step.step).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-[15px]">{step.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
