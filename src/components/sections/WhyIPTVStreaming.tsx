import {
  BadgeCheck,
  HeadphonesIcon,
  MonitorPlay,
  PackageCheck,
  Server,
  Tv2,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Tv2,
    title: "IPTV Amsterdam biedt het grootste aanbod van Nederland",
    description:
      "Met meer dan 31.000 live kanalen en 140.000+ films en series heeft IPTV Amsterdam het meest uitgebreide IPTV-pakket op de markt — van NPO tot internationale nieuwszenders en sportevenementen.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    number: "02",
    icon: Server,
    title: "IPTV Amsterdam garandeert 99,9% uptime",
    description:
      "IPTV Amsterdam draait op redundante, hoge-beschikbaarheidsservers verspreid over meerdere datacenters. Bij een storing schakelen we automatisch over, zodat u nooit een seconde mist.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    number: "03",
    icon: MonitorPlay,
    title: "IPTV Amsterdam levert échte 4K-kwaliteit",
    description:
      "Geen compressie-artefacten of pixelranden. IPTV Amsterdam streamt in echte 4K Ultra HD met HDR-ondersteuning, zodat elke film, serie en live wedstrijd er spectaculair uitziet.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    number: "04",
    icon: HeadphonesIcon,
    title: "IPTV Amsterdam helpt u 24/7 via WhatsApp",
    description:
      "Ons supportteam is dag en nacht bereikbaar via WhatsApp met een gemiddelde reactietijd van minder dan 5 minuten. IPTV Amsterdam zorgt ervoor dat u altijd snel geholpen wordt.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    number: "05",
    icon: BadgeCheck,
    title: "IPTV Amsterdam zonder verplichtingen of verborgen kosten",
    description:
      "Geen jaarcontracten, geen installatiekosten, geen verborgen tarieven. IPTV Amsterdam werkt op basis van volledige transparantie: u betaalt alleen voor wat u gebruikt en stopt wanneer u wilt.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    number: "06",
    icon: PackageCheck,
    title: "IPTV Amsterdam is direct actief na bestelling",
    description:
      "Direct na uw betaling ontvangt u uw persoonlijke inloggegevens per e-mail. IPTV Amsterdam activering duurt gemiddeld minder dan 5 minuten — geen wachten, geen technici aan de deur.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
];

const WhyIPTVAmsterdam = () => {
  return (
    <section
      id="waarom-iptv-amsterdam"
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 750px" }}
    >
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-rouge-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            Waarom IPTV Amsterdam
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            6 redenen om te kiezen voor{" "}
            <span className="text-gradient">IPTV Amsterdam</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            IPTV Amsterdam combineert ongeëvenaarde kanaalkeuze, 4K-kwaliteit en
            persoonlijke service — voor één vaste lage prijs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="animate-slide-up glass rounded-3xl p-7 group border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border ${item.border}`}
                  >
                    <Icon size={22} className={item.color} aria-hidden="true" />
                  </div>
                  <span className="text-4xl font-black text-blanc-50/8 leading-none mt-1 select-none">
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

export default WhyIPTVAmsterdam;
