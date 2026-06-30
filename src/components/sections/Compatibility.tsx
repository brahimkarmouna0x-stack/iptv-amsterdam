"use client";

import { useMemo, useState } from "react";
import { usePhoneNumber } from "@/hooks/usePhoneNumber";
import {
  Box,
  Check,
  ChevronDown,
  Copy,
  Gamepad2,
  Globe2,
  Headphones,
  Laptop,
  MonitorPlay,
  PlayCircle,
  Search,
  Smartphone,
  Tv,
  X,
} from "lucide-react";
import { DEVICE_CATEGORIES } from "@/constants/compatibility-data";

const iconMap: Record<string, typeof Tv> = {
  "Smartphones & Tablets": Smartphone,
  "Smart-tv's & Amsterdam": Tv,
  "Computers & Laptops": Laptop,
  Amsterdamapparaten: MonitorPlay,
  "Tv-boxen": Box,
  Spelconsoles: Gamepad2,
  Mediaspelers: PlayCircle,
  Browsers: Globe2,
};

const Compatibility = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const { phoneNumber, whatsappUrl } = usePhoneNumber();

  const query = searchQuery.toLowerCase().trim();

  // When searching, auto-open all categories. Native <details> handles the rest.
  const forceOpen = query.length > 0;

  const filteredCategories = useMemo(() => {
    if (!query) {
      return DEVICE_CATEGORIES.map((category) => ({
        ...category,
        matchedItems: category.items,
      }));
    }

    return DEVICE_CATEGORIES.map((category) => {
      const titleMatches = category.title.toLowerCase().includes(query);
      const matchedItems = category.items.filter((item) =>
        item.toLowerCase().includes(query),
      );

      if (!titleMatches && matchedItems.length === 0) return null;

      return {
        ...category,
        matchedItems: titleMatches ? category.items : matchedItems,
      };
    }).filter(Boolean) as ((typeof DEVICE_CATEGORIES)[number] & {
      matchedItems: string[];
    })[];
  }, [query]);

  const totalItems = DEVICE_CATEGORIES.reduce(
    (total, category) => total + category.items.length,
    0,
  );

  const copyPhone = () => {
    if (!phoneNumber) return;
    navigator.clipboard.writeText(`+${phoneNumber}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="compatibility"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 900px" }}
    >
      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-france-500/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-france-500/20 bg-france-500/15 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-france-100">
            <Tv size={14} aria-hidden="true" />
            Universele compatibiliteit
          </span>
          <h2 className="mt-4 font-display text-4xl font-black text-blanc-50 sm:text-5xl">
            Werkt op <span className="text-gradient">vrijwel elk apparaat</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-blanc-400 sm:text-base">
            Zoek uw merk, app, tv-type of speler. Wij ondersteunen {totalItems}+
            populaire apparaten, apps en IPTV-platformen.
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-2xl">
          <label htmlFor="device-search" className="sr-only">
            Zoek een apparaat of merk
          </label>
          <div className="relative">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-blanc-500"
              aria-hidden="true"
            />
            <input
              id="device-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Zoek Samsung, LG, Firestick, MAG, TiviMate, iPhone..."
              className="w-full rounded-2xl border border-blanc-50/10 bg-france-900 py-4 pl-13 pr-12 text-blanc-50 outline-none transition-colors placeholder:text-blanc-500 focus:border-france-500/50"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Zoekveld wissen"
                className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-blanc-400 transition-colors hover:bg-white/10 hover:text-blanc-50"
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p
              className="mt-3 text-center text-sm font-medium text-blanc-500"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {filteredCategories.length} categorieën gevonden voor &quot;
              {searchQuery}&quot;
            </p>
          )}
        </div>

        <div className="mb-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.title as keyof typeof iconMap] ?? Tv;

            return (
              <details
                key={category.title}
                {...(forceOpen ? { open: true } : {})}
                className="group overflow-hidden rounded-2xl border border-blanc-50/10 bg-france-900/90 transition-all duration-200"
              >
                <summary className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6 cursor-pointer list-none">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-france-500/15 text-france-100">
                      <Icon size={23} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-black text-blanc-50 sm:text-xl">
                        {category.title}
                      </h3>
                      <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.12em] text-blanc-500">
                        {category.matchedItems.length} opties
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-blanc-500 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 px-5 pb-5 sm:px-6 sm:pb-6">
                  {category.matchedItems.map((item) => {
                    const isMatch = query && item.toLowerCase().includes(query);
                    return (
                      <div
                        key={item}
                        className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ${
                          isMatch
                            ? "bg-france-500/15 text-france-100"
                            : "bg-white/[0.035] text-blanc-300"
                        }`}
                      >
                        <Check
                          size={14}
                          className={
                            isMatch ? "text-france-100" : "text-emerald-300"
                          }
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </details>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="col-span-full rounded-2xl border border-blanc-50/10 bg-france-900 px-6 py-16 text-center">
              <Search
                size={34}
                className="mx-auto mb-4 text-blanc-600"
                aria-hidden="true"
              />
              <h3 className="text-xl font-black text-blanc-50">
                Geen apparaat gevonden
              </h3>
              <p className="mt-2 text-blanc-400">
                Neem contact met ons op. IPTV werkt vaak via M3U, Xtream Codes
                of een webspeler.
              </p>
            </div>
          )}
        </div>

        <div className="rounded-2xl bg-france-900 p-6 shadow-[0_22px_70px_-52px_rgba(34,211,238,0.45)] sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-france-500/15 text-france-100">
                <Headphones size={24} aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-black text-blanc-50">
                Staat uw apparaat niet in de lijst?
              </h3>
              <p className="mt-3 text-sm leading-6 text-blanc-400">
                Onze IPTV werkt op vrijwel elk apparaat met internet, browser,
                M3U-speler, Xtream Codes-app of een Android/Smart-tv-omgeving.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-rouge-500 px-5 py-3 text-sm font-black text-blanc-50 transition-colors hover:bg-rouge-600"
              >
                Live chat
              </a>
              <button
                type="button"
                onClick={copyPhone}
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-blanc-50/10 bg-blanc-50/[0.05] px-5 py-3 text-sm font-bold text-blanc-50 transition-colors hover:bg-white/10"
              >
                <Copy size={16} aria-hidden="true" />
                {copied ? "Gekopieerd" : phoneNumber ? `+${phoneNumber}` : ""}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compatibility;
