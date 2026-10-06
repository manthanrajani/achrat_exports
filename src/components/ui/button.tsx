import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "outline" | "ghost-light";
type Size = "sm" | "md" | "lg";

const base =
  "btn-sheen inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-soft font-semibold tracking-wide transition-all duration-300 will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-ivory shadow-card hover:-translate-y-0.5 hover:bg-blue hover:shadow-lift",
  gold: "bg-gold text-navy shadow-gold hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lift",
  outline:
    "border border-navy/25 bg-transparent text-navy hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-ivory",
  "ghost-light":
    "border border-ivory/30 bg-transparent text-ivory hover:-translate-y-0.5 hover:border-gold hover:text-gold",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  showIcon?: boolean;
  ariaLabel?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
}

interface ButtonProps extends BaseProps {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button(props: LinkProps | ButtonProps) {
  const { variant = "primary", size = "md", className, children, showIcon = true, ariaLabel } = props;
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span className="relative z-[2]">{children}</span>
      {showIcon && (
        <ArrowRight className="relative z-[2] h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cn("group", classes)} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cn("group", classes)}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
