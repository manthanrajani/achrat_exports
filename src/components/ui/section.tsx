import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------ Container ------------------------------ */

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10", className)}>{children}</div>;
}

/* -------------------------------- Section ------------------------------- */

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** ivory (default) | mist | navy */
  tone?: "ivory" | "mist" | "navy";
  id?: string;
  noPadding?: boolean;
}

export function Section({ children, className, tone = "ivory", id, noPadding = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        noPadding ? "" : "py-20 sm:py-24 lg:py-28",
        tone === "ivory" && "bg-ivory",
        tone === "mist" && "bg-mist",
        tone === "navy" && "bg-navy text-ivory",
        className,
      )}
    >
      {children}
    </section>
  );
}

/* --------------------------------- Badge -------------------------------- */

export function Badge({
  children,
  className,
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "navy" | "teal" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-number text-[11px] font-semibold uppercase tracking-[0.14em]",
        tone === "gold" && "bg-gold/15 text-gold",
        tone === "navy" && "bg-navy/5 text-navy",
        tone === "teal" && "bg-teal/10 text-teal",
        tone === "light" && "bg-ivory/10 text-ivory",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------ SectionHeading -------------------------- */

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", tone = "dark", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-3xl sm:mb-16", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      <p
        className={cn(
          "mb-4 flex items-center gap-3 font-number text-xs font-semibold uppercase tracking-[0.22em]",
          align === "center" && "justify-center",
          tone === "dark" ? "text-gold" : "text-gold",
        )}
      >
        <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
        {eyebrow}
        <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
      </p>
      <h2
        className={cn(
          "text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold",
          tone === "dark" ? "text-ink" : "text-ivory",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-[clamp(1rem,1.4vw,1.125rem)] leading-relaxed", tone === "dark" ? "text-muted" : "text-ivory/75")}>
          {description}
        </p>
      )}
    </div>
  );
}
