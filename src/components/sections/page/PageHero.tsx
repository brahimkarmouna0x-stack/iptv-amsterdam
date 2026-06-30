import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { HeroBlock } from "@/content/iptv-german-pages";

/**
 * Page hero — server-rendered so the H1 (LCP element) ships in the initial HTML.
 * `children` is used for the breadcrumb trail rendered above the headline.
 */
export default function PageHero({
  hero,
  children,
}: {
  hero: HeroBlock;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {hero.background && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-france-950/85" />
          <Image
            src={hero.background}
            alt=""
            fill
            priority
            fetchPriority="high"
            quality={50}
            sizes="100vw"
            className="object-cover blur-sm"
          />
        </div>
      )}
      <div className="absolute top-0 left-1/4 z-0 h-96 w-96 rounded-full bg-france-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 z-0 h-96 w-96 rounded-full bg-rouge-500/12 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children && <div className="mb-8">{children}</div>}

        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap gap-2">
            {hero.badgeTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-france-500/25 bg-france-500/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-france-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight text-blanc-50 sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>

          <p className="mb-10 max-w-3xl text-lg font-medium leading-relaxed text-blanc-300 sm:text-xl">
            {hero.subheadline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={hero.cta.href}
              className="btn-shine flex items-center gap-3 rounded-full bg-rouge-500 px-8 py-4 text-sm font-bold uppercase tracking-widest text-blanc-50 shadow-lg shadow-rouge-500/25 transition-all hover:bg-rouge-600 active:scale-95"
            >
              {hero.cta.label}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/iptv-gids"
              className="glass flex items-center gap-3 rounded-full border border-blanc-50/10 px-8 py-4 text-sm font-bold uppercase tracking-widest text-blanc-50 transition-all hover:bg-blanc-50/5"
            >
              Alle gidsen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
