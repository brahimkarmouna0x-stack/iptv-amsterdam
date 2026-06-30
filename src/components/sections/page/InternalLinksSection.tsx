import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { InternalLink } from "@/content/iptv-german-pages";

/**
 * Contextual internal-link grid — drives crawl depth and topical relevance.
 * Not a PageSection variant; rendered by the route after the dynamic sections.
 */
export default function InternalLinksSection({
  links,
  eyebrow = "Meer in de kennisbank",
  heading = "Gerelateerde onderwerpen",
}: {
  links: InternalLink[];
  eyebrow?: string;
  heading?: string;
}) {
  if (!links.length) return null;

  return (
    <section className="section-contain py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full glass px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-rouge-400 glow-red">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl font-bold text-blanc-50 sm:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group card-lift rounded-2xl border border-blanc-50/5 bg-blanc-50/[0.03] p-6 transition-colors hover:border-france-500/35 hover:bg-blanc-50/[0.05]"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-lg font-black text-blanc-50 transition-colors group-hover:text-france-400">
                  {link.label}
                </h3>
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-blanc-500 transition-colors group-hover:text-france-400"
                />
              </div>
              {link.description && (
                <p className="text-sm font-medium leading-relaxed text-blanc-500">
                  {link.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
