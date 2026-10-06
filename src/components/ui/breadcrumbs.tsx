import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium sm:text-sm">
        <li>
          <Link
            href="/"
            className={`inline-flex min-h-8 items-center gap-1.5 transition-colors ${
              tone === "light" ? "text-ivory/70 hover:text-gold" : "text-muted hover:text-navy"
            }`}
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            Home
          </Link>
        </li>
        {items.map((item) => (
          <Fragment key={item.label}>
            <li aria-hidden="true" className={tone === "light" ? "text-ivory/40" : "text-muted/50"}>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`inline-flex min-h-8 items-center transition-colors ${
                    tone === "light" ? "text-ivory/70 hover:text-gold" : "text-muted hover:text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className={`inline-flex min-h-8 items-center ${tone === "light" ? "text-gold" : "text-navy"}`}>
                  {item.label}
                </span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
