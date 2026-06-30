import {
  Zap,
  Star,
  Gauge,
  ShieldCheck,
  Headphones,
  Lock,
  MonitorPlay,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Zap,
    title: "Directe activering binnen 5 minuten",
    description:
      "Direct na uw bestelling ontvangt u uw inloggegevens per e-mail. Geen wachttijden, geen technici. IPTV Amsterdam is live binnen 5 minuten.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    number: "02",
    icon: Star,
    title: "Premium 4K & 8K Amsterdamkwaliteit",
    description:
      "Geniet van kristalheldere beelden in echte 4K Ultra HD met HDR-ondersteuning. Geen compressie-artefacten, geen pixelranden — puur premium.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Hoge prestaties & nul buffering",
    description:
      "Adaptieve bitrate-Amsterdam en wereldwijd CDN-netwerk zorgen voor vloeiend kijken — ook bij piekbelasting of een tragere verbinding.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    number: "04",
    icon: MonitorPlay,
    title: "99,9% uptime — betrouwbaar streamen",
    description:
      "Redundante servers verspreid over meerdere datacenters garanderen 99,9% beschikbaarheid. Bij een storing schakelen we automatisch over.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    number: "05",
    icon: Headphones,
    title: "24/7 klantenservice via WhatsApp",
    description:
      "Ons supportteam is dag en nacht bereikbaar met een gemiddelde reactietijd van minder dan 5 minuten. Persoonlijke hulp wanneer u het nodig heeft.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    number: "06",
    icon: Lock,
    title: "Veilige ervaring & moderne Amsterdam",
    description:
      "Versleutelde verbindingen, geen verborgen kosten, geen jaarcontracten. IPTV Amsterdam werkt op basis van volledige transparantie en veiligheid.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    number: "07",
    icon: ShieldCheck,
    title: "Geen verplichtingen — stop wanneer u wilt",
    description:
      "Geen installatiekosten, geen langetermijncontracten. U betaalt alleen voor wat u gebruikt en kunt op elk moment stoppen of upgraden.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
];

const WhyChooseAmsterdam = () => {
  return (
    <section
      id="waarom-iptv-amsterdam"
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 820px" }}
    >
      <div
        className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-rouge-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 bottom-1/4 w-[300px] h-[300px] bg-france-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider">
            Waarom IPTV Amsterdam
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Waarom kiezen voor{" "}
            <span className="text-gradient">IPTV Amsterdam</span>?
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            IPTV Amsterdam combineert ongeëvenaarde kanaalkeuze, 4K-kwaliteit en
            persoonlijke service — voor één vaste lage prijs, zonder
            verplichtingen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="animate-slide-up glass rounded-3xl p-7 group border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border ${item.border}`}
                  >
                    <Icon size={22} className={item.color} aria-hidden="true" />
                  </div>
                  <span
                    className="text-4xl font-black text-blanc-50/8 leading-none mt-1 select-none"
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-blanc-50 leading-snug">
                  {item.title}
                </h3>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAmsterdam;
