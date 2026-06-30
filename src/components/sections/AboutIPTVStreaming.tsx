import { Clapperboard, Globe2, Signal, Tv } from "lucide-react";

const stats = [
  { icon: Tv, value: "31.000+", label: "Live kanalen bij IPTV Amsterdam" },
  { icon: Clapperboard, value: "140.000+", label: "Films & series on demand" },
  { icon: Globe2, value: "190+", label: "Landen in ons aanbod" },
  { icon: Signal, value: "99,9%", label: "Uptime garantie" },
];

const AboutIPTVAmsterdam = () => {
  return (
    <section
      id="over-iptv-amsterdam"
      className="py-24 relative overflow-hidden bg-black/25"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 620px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-france-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left — text */}
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-6 uppercase tracking-wider glow-gold">
                Over IPTV Amsterdam
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6 text-blanc-50 leading-tight">
                Wat is <span className="text-gradient">IPTV Amsterdam</span>?
              </h2>
              <div className="space-y-4 text-blanc-400 font-medium leading-relaxed">
                <p>
                  <strong className="text-blanc-200">IPTV Amsterdam</strong> is
                  een Nederlandse premium IPTV-aanbieder die u toegang geeft tot
                  duizenden live kanalen, films en series via uw
                  internetverbinding — zonder vaste contracten of dure
                  kabelabonnementen.
                </p>
                <p>
                  Met <strong className="text-blanc-200">IPTV Amsterdam</strong>{" "}
                  kijkt u alles wat u wilt: van Nederlandse publieke zenders en
                  populaire sportevenementen tot internationale kanalen uit meer
                  dan 190 landen. Alles in verbluffende 4K Ultra HD op elk
                  apparaat dat u kiest.
                </p>
                <p>
                  Wij geloven dat kwalitatief IPTV voor iedereen toegankelijk
                  moet zijn. Daarom biedt{" "}
                  <strong className="text-blanc-200">IPTV Amsterdam</strong>{" "}
                  scherpe abonnementsprijzen, een gratis proef en 24/7
                  persoonlijke klantenservice via WhatsApp — zodat u altijd en
                  overal kunt genieten van premium televisie.
                </p>
              </div>
            </div>

            {/* Right — stat grid */}
            <div className="grid grid-cols-2 gap-4 animate-slide-up">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass rounded-3xl p-6 border border-blanc-50/5 hover:border-france-400/25 transition-all duration-300 group"
                    style={{ animationDelay: `${0.1 * idx}s` }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-france-500/15 border border-france-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        size={20}
                        className="text-france-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-3xl font-black text-blanc-50 mb-1">
                      {item.value}
                    </div>
                    <p className="text-blanc-500 text-xs font-bold uppercase tracking-wider leading-tight">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIPTVAmsterdam;
