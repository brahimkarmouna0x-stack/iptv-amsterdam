import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import {
  Tv,
  Film,
  MonitorPlay,
  ShieldCheck,
  Play,
  Layers,
  Check,
} from "lucide-react";

interface HeroProps {
  pillText?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  bgImage?: string;
}

const quickPoints = [
  "Directe activering",
  "Alle apparaten",
  "24/7 klantenservice",
];

const showcaseStats = [
  { icon: Tv, label: "Live kanalen", value: "Duizenden zenders" },
  { icon: Film, label: "Films & series (VOD)", value: "Uitgebreide VOD" },
  { icon: MonitorPlay, label: "Beeldkwaliteit", value: "4K & 8K HDR" },
  { icon: ShieldCheck, label: "Serverbeschikbaarheid", value: "99,9% uptime" },
];

const Hero = ({ pillText, title, subtitle, bgImage }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-france-950">
      <picture className="absolute inset-0 z-0">
        <source
          media="(max-width: 767px)"
          srcSet={bgImage || "/images/abonnement-bg.webp"}
        />
        <Image
          src={bgImage || "/images/abonnement-bg.webp"}
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={70}
          sizes="100vw"
          aria-hidden="true"
          className="object-cover object-center"
        />
      </picture>

      {/* Ink overlays — keep text readable, push German black */}
      <div className="absolute inset-0 z-0 bg-linear-to-t from-france-950 via-france-950/85 to-france-950/40 lg:bg-linear-to-r lg:from-france-950 lg:via-france-950/92 lg:to-france-950/30" />
      {/* Gold + red ambient accents */}
      <div className="absolute -top-24 -left-24 z-0 h-96 w-96 rounded-full bg-france-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 z-0 h-96 w-96 rounded-full bg-rouge-600/10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 lg:py-36">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-12">
          {/* ===== LEFT — Message + CTA ===== */}
          <div className="w-full lg:w-[54%] flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-france-950/70 backdrop-blur-md border border-france-500/30 mb-7 text-xs sm:text-sm text-france-300 font-semibold tracking-wide shadow-[0_0_20px_rgba(236,201,75,0.12)]">
              <span
                className="h-2 w-2 rounded-full bg-france-400 animate-live-pulse"
                aria-hidden="true"
              />
              {pillText || "Premium IPTV · IPTV Amsterdam"}
            </span>

            <h1 className="font-display font-bold text-[1.75rem] leading-[1.12] sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.4rem] mb-5 text-blanc-50 tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
              {title || (
                <>
                  Premium IPTV Abonnement in Amsterdam
                  <span className="mt-3 block bg-linear-to-r from-france-300 via-france-400 to-france-500 bg-clip-text text-transparent">
                    Stabiel streamen met IPTV Amsterdam
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blanc-300 max-w-xl mb-7 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
              {subtitle ||
                "Premium IPTV-abonnement in Amsterdam met betrouwbare servers, alle Nederlandse zenders en messcherpe 4K-kwaliteit op elk apparaat."}
            </p>

            {/* Quick value chips */}
            <ul className="mb-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2.5">
              {quickPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm font-semibold text-blanc-200"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-france-500/15 text-france-400">
                    <Check size={13} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Primary actions */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 mb-8">
              <Link
                href="#pakketten"
                className="group btn-shine w-full sm:w-auto px-9 py-4 rounded-2xl bg-rouge-500 text-blanc-50 font-bold text-base sm:text-lg hover:bg-rouge-600 transition-all flex items-center justify-center gap-3 shadow-[0_16px_44px_-12px_rgba(174,28,40,0.55)] hover:shadow-[0_22px_56px_-12px_rgba(174,28,40,0.6)] hover:-translate-y-0.5 active:translate-y-0 will-change-transform"
              >
                <Play
                  size={20}
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                Start gratis proef
              </Link>
              <Link
                href="#pakketten"
                className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-france-950/40 backdrop-blur-md text-blanc-50 font-bold text-base sm:text-lg hover:bg-france-500/10 transition-all flex items-center justify-center gap-3 border border-france-500/35 hover:border-france-400/60"
              >
                <Layers
                  size={20}
                  className="text-france-400"
                  aria-hidden="true"
                />
                Bekijk pakketten
              </Link>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-3.5">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&fit=crop",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80&fit=crop",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative w-9 h-9 rounded-full border-2 border-france-950 overflow-hidden bg-blanc-800"
                  >
                    <Image
                      src={src}
                      alt={`Gebruiker ${i + 1}`}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-3.5 h-3.5 text-france-400 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs font-bold text-blanc-50 ml-1.5 french-num">
                    4,9/5
                  </span>
                </div>
                <p className="text-xs text-blanc-400 font-medium">
                  Vertrouwd door kijkers in Amsterdam &amp; Nederland
                </p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT — Premium showcase panel ===== */}
          <div className="hidden lg:flex w-full lg:w-[42%] justify-end">
            <div
              className="relative w-full max-w-sm animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              {/* Decorative floating chips */}
              <div className="hero-float-card absolute -left-10 top-10 z-20 flex items-center gap-2 rounded-2xl border border-france-500/30 bg-france-950/80 px-4 py-3 backdrop-blur-md shadow-2xl">
                <span className="badge-live">LIVE</span>
                <span className="text-sm font-semibold text-blanc-50">
                  Eredivisie
                </span>
              </div>
              <div
                className="hero-float-card absolute -right-6 bottom-16 z-20 flex items-center gap-2 rounded-2xl border border-france-500/30 bg-france-950/80 px-4 py-3 backdrop-blur-md shadow-2xl"
                style={{ animationDelay: "1.2s" }}
              >
                <MonitorPlay
                  size={18}
                  className="text-france-400"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-blanc-50">
                  4K · Geen buffering
                </span>
              </div>

              {/* Main glass command panel */}
              <div className="glass-strong relative z-10 overflow-hidden rounded-3xl p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-france-400/60 to-transparent" />
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-france-500/15 text-france-400">
                      <Tv size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-blanc-50">
                        IPTV Amsterdam
                      </p>
                      <p className="text-[11px] text-blanc-400">
                        Premium Amsterdam
                      </p>
                    </div>
                  </div>
                  <span className="badge-live">LIVE</span>
                </div>

                <div className="space-y-2.5">
                  {showcaseStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between rounded-xl border border-blanc-50/5 bg-blanc-50/[0.03] px-3.5 py-3 transition-colors hover:border-france-500/30"
                      >
                        <span className="flex items-center gap-2.5 text-sm text-blanc-300">
                          <Icon
                            size={16}
                            className="text-france-400"
                            aria-hidden="true"
                          />
                          {stat.label}
                        </span>
                        <span className="text-sm font-bold text-blanc-50 french-num">
                          {stat.value}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="#pakketten"
                  className="btn-gold mt-5 flex w-full items-center justify-center gap-2"
                >
                  <Play size={16} fill="currentColor" aria-hidden="true" />
                  Start nu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
