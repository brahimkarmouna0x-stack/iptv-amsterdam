"use client";

import { useMemo, useState } from "react";
import type {
  DevicePlatform,
  PageSection,
} from "@/content/iptv-german-pages";
import { getIcon } from "./icons";

type Props = Extract<PageSection, { type: "devices" }>;

const PLATFORM_LABEL: Record<DevicePlatform | "all", string> = {
  all: "Alle",
  android: "Android",
  ios: "iOS",
  "smart-tv": "Smart-tv",
  browser: "Browser",
  box: "Tv-box",
  windows: "Windows",
  other: "Overige",
};

export default function DevicesSection({ heading, subheading, list }: Props) {
  const [active, setActive] = useState<DevicePlatform | "all">("all");

  const platforms = useMemo<(DevicePlatform | "all")[]>(() => {
    const present = Array.from(new Set(list.map((device) => device.platform)));
    return ["all", ...present];
  }, [list]);

  const filtered = useMemo(
    () => (active === "all" ? list : list.filter((d) => d.platform === active)),
    [list, active],
  );

  return (
    <section className="section-contain py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(heading || subheading) && (
          <div className="mb-10 text-center">
            {subheading && (
              <span className="mb-4 inline-block rounded-full glass px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-france-400 glow-gold">
                {subheading}
              </span>
            )}
            {heading && (
              <h2 className="font-display text-3xl font-bold text-blanc-50 sm:text-4xl">
                {heading}
              </h2>
            )}
          </div>
        )}

        <div
          role="tablist"
          aria-label="Apparaten filteren"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {platforms.map((platform) => {
            const selected = active === platform;
            return (
              <button
                key={platform}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(platform)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  selected
                    ? "bg-france-500 text-blanc-50"
                    : "glass border border-blanc-50/10 text-blanc-300 hover:bg-blanc-50/5"
                }`}
              >
                {PLATFORM_LABEL[platform]}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((device) => {
            const Icon = getIcon(device.icon);
            return (
              <div
                key={device.name}
                className="card-lift flex flex-col items-start rounded-2xl border border-blanc-50/5 bg-blanc-50/[0.03] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-france-500/15 text-france-400">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mb-1 text-base font-black text-blanc-50">
                  {device.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-blanc-500">
                  {device.steps} stappen om in te stellen
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
