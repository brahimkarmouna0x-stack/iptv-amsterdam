import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PageSection } from "@/content/iptv-german-pages";

type Props = Extract<PageSection, { type: "cta" }>;

export default function CtaSection({ heading, text, cta, variant }: Props) {
  const isPrimary = variant === "primary";
  return (
    <section className="section-contain py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong relative overflow-hidden rounded-3xl border border-france-400/15 p-10 text-center glow-gold sm:p-16">
          <div className="relative z-10">
            <h2 className="mb-5 font-display text-3xl font-bold leading-tight text-blanc-50 sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            {text && (
              <p className="mx-auto mb-9 max-w-2xl text-lg font-medium leading-relaxed text-blanc-400">
                {text}
              </p>
            )}
            <Link
              href={cta.href}
              className={`btn-shine inline-flex items-center gap-3 rounded-full px-9 py-4 text-base font-bold tracking-wide transition-all active:scale-95 ${
                isPrimary
                  ? "bg-rouge-500 text-blanc-50 shadow-[0_18px_50px_-12px_rgba(218,33,40,0.5)] hover:bg-rouge-600"
                  : "glass border border-blanc-50/10 text-blanc-50 hover:bg-blanc-50/10"
              }`}
            >
              {cta.label}
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
