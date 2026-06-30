import type { PageSectionType } from "@/content/iptv-german-pages";

/**
 * Lightweight per-section skeleton shown as the `next/dynamic` loading fallback
 * during client navigation. Uses the shared `.skeleton` utility from globals.css.
 */
export function SectionSkeleton({ kind }: { kind: PageSectionType }) {
  const rows: Record<PageSectionType, number> = {
    richText: 3,
    features: 3,
    pricing: 3,
    comparison: 6,
    devices: 4,
    howItWorks: 4,
    testimonials: 3,
    channelList: 6,
    faq: 5,
    cta: 1,
  };

  const count = rows[kind] ?? 3;

  return (
    <section
      aria-hidden="true"
      className="py-16 sm:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="skeleton mx-auto mb-4 h-9 w-64 max-w-full rounded-xl" />
        <div className="skeleton mx-auto mb-12 h-4 w-80 max-w-full rounded-lg" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="skeleton h-40 w-full rounded-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
