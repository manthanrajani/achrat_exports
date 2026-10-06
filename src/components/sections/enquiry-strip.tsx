"use client";

import { ArrowRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * Gold quick-enquiry strip: type what you're looking for and jump straight
 * into the quote form with the product field pre-filled.
 */
export function EnquiryStrip() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = query.trim()
      ? `/get-quote?product=${encodeURIComponent(query.trim())}`
      : "/get-quote";
    router.push(target);
  };

  return (
    <div className="bg-gold py-8">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-5 px-5 sm:px-8 lg:flex-row lg:justify-between lg:gap-10 lg:px-10">
        <p className="text-center font-heading text-xl font-semibold text-navy sm:text-2xl lg:text-left">
          What are you looking to import?
        </p>
        <form onSubmit={submit} className="flex w-full max-w-xl items-stretch gap-2" role="search" aria-label="Quick enquiry">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-navy/50" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. ceramic mugs, towel racks, dinner plates…"
              aria-label="Product you want to import"
              className="min-h-12 w-full rounded-soft border border-navy/20 bg-ivory py-3 pl-11 pr-4 text-[15px] text-ink placeholder:text-muted/70 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/25"
            />
          </div>
          <button
            type="submit"
            className="btn-sheen inline-flex min-h-12 shrink-0 items-center gap-2 rounded-soft bg-navy px-6 py-3 font-semibold text-ivory transition-all duration-300 hover:bg-blue"
          >
            Enquire <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
