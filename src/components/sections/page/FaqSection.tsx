"use client";

import { useId, useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import type { PageFaq } from "@/content/iptv-german-pages";

/**
 * Accessible FAQ accordion with a live search filter. The full FAQ set is also
 * emitted as FAQPage JSON-LD server-side (see JsonLd), so client filtering has
 * no SEO impact.
 */
export default function FaqSection({ faqs }: { faqs: PageFaq[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q),
    );
  }, [faqs, query]);

  return (
    <section
      id="faq"
      className="section-contain py-16 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full glass px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-rouge-400 glow-red">
            FAQ
          </span>
          <h2 className="font-display text-3xl font-bold text-blanc-50 sm:text-4xl">
            Veelgestelde vragen
          </h2>
        </div>

        <div className="relative mb-6">
          <Search
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-blanc-500"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Zoek vragen…"
            aria-label="Zoek vragen"
            className="w-full rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.03] py-3.5 pl-11 pr-4 text-sm font-medium text-blanc-100 placeholder:text-blanc-500 focus:border-france-400/40 focus:outline-none"
          />
        </div>

        <div className="space-y-3">
          {filtered.map((faq, index) => {
            const isOpen = open === index;
            const btnId = `${baseId}-btn-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <div
                key={faq.question}
                className={`glass overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? "border-france-400/30" : "border-blanc-50/5"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-bold text-blanc-50">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className={`shrink-0 text-france-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  aria-hidden={!isOpen}
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm font-medium leading-relaxed text-blanc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="rounded-2xl border border-blanc-50/5 bg-blanc-50/[0.03] p-6 text-center text-sm font-medium text-blanc-400">
              Geen passende vragen gevonden.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
