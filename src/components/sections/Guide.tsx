import { CheckCircle2, Globe2, Infinity, Sparkles, Tv, Zap } from "lucide-react";

const accessItems = [
  "Toegang tot duizenden live kanalen wereldwijd",
  "Nederlandse & internationale kanalen (NPO, RTL, SBS6, Net5)",
  "Premium sportkanalen & filmbibliotheek",
  "Zonder contract en verborgen kosten",
];

const featureItems = [
  {
    title: "Volledige flexibiliteit",
    description:
      "In tegenstelling tot traditionele televisie biedt IPTV functies zoals pauzeren, terugspoelen en opnemen. U bepaalt zelf uw programma.",
    icon: Infinity,
    tone: "text-france-100 bg-france-500/15 border-france-500/25",
  },
  {
    title: "Eenvoudige installatie",
    description:
      "Geen monteur nodig. Voer uw IPTV-code in apps zoals IPTV Smarters of TiviMate in en begin direct met streamen.",
    icon: Sparkles,
    tone: "text-france-100 bg-france-700/15 border-france-700/25",
  },
  {
    title: "Overal kijken",
    description:
      "Of u nu thuis of onderweg bent, u heeft op elk verbonden apparaat toegang tot uw favoriete kanalen.",
    icon: Globe2,
    tone: "text-emerald-100 bg-emerald-300/10 border-emerald-300/20",
  },
];

const Guide = () => {
  return (
    <section id="guide" className="relative overflow-hidden py-20 sm:py-24" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}>
      <div className="absolute inset-x-0 top-0 h-72 bg-linear-to-b from-france-500/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex rounded-full border border-france-500/25 bg-france-500/15 px-4 py-1.5 text-sm font-black uppercase tracking-[0.14em] text-france-100">
              De complete gids
            </span>
            <h2 className="mt-6 font-display text-4xl font-black leading-tight text-blanc-50 sm:text-5xl">
              Wat is IPTV en <br />
              <span className="text-gradient">hoe werkt het?</span>
            </h2>
            <div className="mt-7 space-y-5 text-base leading-7 text-blanc-300 sm:text-lg">
              <p>
                IPTV staat voor{" "}
                <span className="font-semibold text-blanc-50">
                  Internet Protocol Television
                </span>{" "}
                en betekent televisie die via internet wordt uitgezonden. In plaats van
                kabel of satelliet worden tv-kanalen als beveiligde datapakketten rechtstreeks
                naar uw apparaat gestreamd.
              </p>
              <p>
                Met een stabiele internetverbinding kijkt u thuis
                of onderweg op uw Smart-tv, smartphone, tablet, computer
                of tv-box.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-blanc-50/10 bg-france-900 p-6 sm:p-8">
            <Tv size={170} aria-hidden="true" className="absolute right-0 top-8 opacity-5 pointer-events-none" />

            <h3 className="relative mb-6 flex items-center gap-3 text-xl font-black text-blanc-50">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-france-500/25 bg-france-500/15 text-france-100">
                <Zap size={21} aria-hidden="true" />
              </span>
              Directe toegang
            </h3>

            <ul className="relative space-y-3">
              {accessItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-blanc-300">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-france-300"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-7 rounded-xl border border-blanc-50/10 bg-blanc-50/[0.04] p-4 text-sm italic text-blanc-300">
              &quot;De toekomst van televisie is er. Flexibel, betaalbaar en grenzeloos.&quot;
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featureItems.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-blanc-50/10 bg-france-900 p-6"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${feature.tone}`}
                >
                  <Icon size={23} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-black text-blanc-50">
                  {feature.title}
                </h3>
                <p className="leading-6 text-blanc-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guide;
