"use client";

import { useState, useMemo } from "react";
import { Search, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { IPTV_GERMAN_PAGES, iptvPath } from "@/content/iptv-german-pages";

const VaultSearch = () => {
  const [query, setQuery] = useState("");

  const filteredResults = useMemo(() => {
    if (query.length < 2) return [];

    const searchTerms = query.toLowerCase().split(" ");
    return IPTV_GERMAN_PAGES.filter((page) => {
      const content =
        `${page.keyword} ${page.title} ${page.metaDescription}`.toLowerCase();
      return searchTerms.every((term) => content.includes(term));
    }).slice(0, 8);
  }, [query]);

  // Announce results count to screen readers
  const resultCount = filteredResults.length;

  return (
    <div className="relative w-full max-w-2xl mx-auto z-50">
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {query.length >= 2
          ? resultCount > 0
            ? `${resultCount} resultaten gevonden`
            : "Geen resultaten gevonden"
          : ""}
      </div>
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Search
            size={20}
            className="text-blanc-400 group-focus-within:text-france-500 transition-colors"
          />
        </div>
        <input
          type="text"
          placeholder="Doorzoek de kennisbank (bijv. Smarters, 4K, app...)"
          className="w-full bg-france-950/80 backdrop-blur-xl border border-blanc-50/10 rounded-2xl py-5 pl-14 pr-12 text-blanc-50 placeholder:text-blanc-500 focus:outline-none focus:ring-2 focus:ring-france-700/50 focus:border-france-700/50 transition-all shadow-2xl"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute inset-y-0 right-4 flex items-center text-blanc-400 hover:text-blanc-50 transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {filteredResults.length > 0 && (
        <div
          className="absolute top-full mt-3 w-full bg-france-950 border border-blanc-50/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300"
          role="listbox"
          aria-label="Zoekresultaten"
        >
          <div className="p-2">
            {filteredResults.map((result) => (
              <Link
                key={result.slug}
                href={iptvPath(result.slug)}
                onClick={() => setQuery("")}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-blanc-50/5 transition-all group"
              >
                <div>
                  <h4 className="text-blanc-50 font-bold text-sm group-hover:text-france-500 transition-colors">
                    {result.keyword}
                  </h4>
                  <p className="text-xs text-blanc-500 line-clamp-1 mt-1">
                    {result.metaDescription}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-blanc-600 group-hover:text-france-500 transform translate-x-0 group-hover:translate-x-1 transition-all"
                />
              </Link>
            ))}
          </div>
          <div className="bg-blanc-50/2 p-3 text-center border-t border-blanc-50/5">
            <p className="text-[10px] text-blanc-500 uppercase tracking-widest font-bold">
              {filteredResults.length} resultaten gevonden
            </p>
          </div>
        </div>
      )}

      {query.length >= 2 && filteredResults.length === 0 && (
        <div className="absolute top-full mt-3 w-full bg-france-950 border border-blanc-50/10 rounded-2xl p-8 text-center shadow-2xl">
          <p className="text-blanc-400 text-sm">
            Geen resultaten gevonden voor &quot;{query}&quot;
          </p>
        </div>
      )}
    </div>
  );
};

export default VaultSearch;
