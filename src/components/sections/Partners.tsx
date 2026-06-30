import Image from "next/image";

const PARTNERS = [
  {
    name: "Netflix",
    label: "Amsterdam via IPTV",
    logo: "/images-/netflix.webp",
    imageClass: "scale-90",
  },
  {
    name: "Apple TV",
    label: "Amsterdam via IPTV",
    logo: "/images-/apple-2.webp",
    imageClass: "scale-95",
  },
  {
    name: "Disney+",
    label: "Amsterdam via IPTV",
    logo: "/images-/disney.webp",
    imageClass: "scale-100",
  },
  {
    name: "HBO Max",
    label: "Amsterdam via IPTV",
    logo: "/images-/hbomax.webp",
    imageClass: "scale-95",
  },
  {
    name: "Prime Video",
    label: "Amsterdam via IPTV",
    logo: "/images-/prime-video.webp",
    imageClass: "scale-105",
  },
  {
    name: "Videoland",
    label: "Amsterdam via IPTV",
    logo: "/images-/video-land.webp",
    imageClass: "scale-110",
  },
  {
    name: "BBC",
    label: "Amsterdam via IPTV",
    logo: "/images-/bbc.webp",
    imageClass: "scale-95",
  },
];

const LOOP_PARTNERS = [...PARTNERS, ...PARTNERS, ...PARTNERS];

const Partners = () => {
  return (
    <section
      className="relative isolate overflow-hidden py-18 sm:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 550px" }}
    >
      <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-france-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex rounded-full border border-france-300/20 bg-france-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-france-100">
            Premium Amsterdam
          </span>
          <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-blanc-50 sm:text-6xl">
            Series & <span className="text-gradient">Films</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-blanc-300 sm:text-lg">
            Alle series en films inbegrepen. Kies uit duizenden kanalen en
            series in HD-kwaliteit.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-blanc-800/20 bg-blanc-50/[0.045] px-3 py-7 shadow-[0_24px_80px_-48px_rgba(34,211,238,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-5 sm:py-9">
          <div className="animate-marquee mask-fade-edges flex w-fit items-center gap-4 py-3 will-change-transform sm:gap-6">
            {LOOP_PARTNERS.map((partner, index) => (
              <article
                key={`${partner.name}-${index}`}
                className="group relative flex h-40 w-36 shrink-0 flex-col justify-between overflow-hidden rounded-[1.5rem] border border-blanc-800/20 bg-france-950/85 p-4 shadow-[0_20px_55px_-38px_rgba(15,23,42,1)] transition-colors hover:border-france-300/40 hover:bg-france-950 sm:h-48 sm:w-44 sm:p-5 before:content-[''] before:absolute before:inset-x-5 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/25 before:to-transparent"
                aria-hidden={index >= PARTNERS.length}
              >
                <div className="flex h-24 items-center justify-center rounded-2xl border border-blanc-800/20 bg-blanc-50/[0.06] px-4 sm:h-28">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={92}
                    quality={60}
                    sizes="(max-width: 640px) 128px, 164px"
                    className={`h-full max-h-18 w-full object-contain drop-shadow-[0_12px_26px_rgba(0,0,0,0.35)] transition duration-300 group-hover:opacity-100 ${partner.imageClass}`}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold tracking-tight text-blanc-50 sm:text-base">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-france-100/65">
                    {partner.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
