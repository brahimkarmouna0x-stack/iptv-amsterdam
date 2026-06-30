import Image from "next/image";

const LOGOS = [
  { name: "BeIN Sports", path: "/images-/bein-sport.webp", shape: "wide", scale: 0.92 },
  { name: "BeIN Sports 2", path: "/images-/beinsport.webp", shape: "mark", scale: 0.9 },
  { name: "Premier League", path: "/images-/pl.webp", shape: "mark", scale: 0.86 },
  { name: "Champions League", path: "/images-/cl.webp", shape: "mark", scale: 0.86 },
  { name: "La Liga", path: "/images-/ll.webp", shape: "mark", scale: 0.9 },
  { name: "Bundesliga", path: "/images-/bl.webp", shape: "mark", scale: 0.88 },
  { name: "Ligue 1", path: "/images-/l1.webp", shape: "mark", scale: 0.88 },
  { name: "Eredivisie", path: "/images-/nl.webp", shape: "mark", scale: 0.88 },
  { name: "Sky Sports", path: "/images-/sa.webp", shape: "mark", scale: 0.9 },
  { name: "Olympics", path: "/images-/olympics.webp", shape: "mark", scale: 0.86 },
  { name: "KSA Sports", path: "/images-/ksal.webp", shape: "mark", scale: 0.9 },
  {
    name: "National Geographic",
    path: "/images-/National-Geographic-Logo-2105276458.webp",
    shape: "wide",
    scale: 0.9,
  },
] as const;

const MARQUEE_LOGOS = [...LOGOS, ...LOGOS];

const FeatureMarquee = () => {
  return (
    <section
      className="relative overflow-hidden border-y border-blanc-50/10 bg-france-950/70 py-6"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 92px" }}
      aria-label="Kanalen en netwerken"
    >
      <div className="absolute inset-0 bg-linear-to-r from-france-500/10 via-transparent to-emerald-300/5" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-france-300/15 bg-france-300/10 blur-[1px]" />
      <div className="absolute inset-y-0 left-0 w-20 sm:w-56 pointer-events-none z-10 bg-linear-to-r from-france-950 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-56 pointer-events-none z-10 bg-linear-to-l from-france-950 to-transparent" />

      <div className="feature-logo-track feature-logo-ribbon relative flex items-center gap-4 py-5 will-change-transform sm:gap-6">
        {MARQUEE_LOGOS.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="feature-logo-card group relative flex h-20 w-40 shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] border border-blanc-50/10 bg-blanc-50/[0.08] shadow-[0_20px_50px_-32px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:border-france-300/40 hover:bg-blanc-50/[0.11] sm:h-24 sm:w-52"
          >
            <div className="absolute inset-x-3 top-0 h-px bg-linear-to-r from-transparent via-france-300/30 to-transparent" />
            <div
              className={`relative ${
                logo.shape === "wide"
                  ? "h-11 w-28 sm:h-[52px] sm:w-36"
                  : "h-[52px] w-[52px] sm:h-[60px] sm:w-[60px]"
              } opacity-90 grayscale-[0.35] transition-[opacity,filter,transform] duration-300 group-hover:opacity-100 group-hover:grayscale-0`}
              style={{ transform: `scale(${logo.scale})` }}
            >
              <Image
                src={logo.path}
                alt={logo.name}
                fill
                className="object-contain"
                sizes={
                  logo.shape === "wide"
                    ? "(max-width: 640px) 112px, 144px"
                    : "(max-width: 640px) 52px, 60px"
                }
                loading="lazy"
                quality={62}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureMarquee;
