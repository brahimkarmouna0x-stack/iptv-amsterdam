import {
  BadgeCheck,
  Globe2,
  Headphones,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

const criteria = [
  {
    icon: Server,
    title: "Stabiele servers met hoge uptime",
    desc: "Een goede IPTV aanbieder draait op professionele serverinfrastructuur met minimaal 99,5% uptime. IPTV Amsterdam garandeert 99,9% beschikbaarheid dankzij redundante datacenteropstelling.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: Globe2,
    title: "Groot en actueel zenderaanbod",
    desc: "De beste IPTV aanbieder van Nederland biedt meer dan 25.000 kanalen, inclusief alle Nederlandse publieke zenders, internationale sport en regionale kanalen — dagelijks geüpdatete aanbod.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    icon: Headphones,
    title: "Nederlandse klantenservice",
    desc: "Een betrouwbare IPTV aanbieder in Nederland biedt ondersteuning in het Nederlands, via WhatsApp of chat, met een korte reactietijd. Geen Engelstalige scripts of vertragingen van dagen.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Veilige, transparante betaling",
    desc: "Betrouwbare IPTV aanbieders accepteren iDEAL, PayPal of creditcard via een beveiligde verbinding. Geen obscure betaalmethoden, geen eisen tot betaling via cryptovaluta of bankoverschrijving.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    icon: Zap,
    title: "4K kwaliteit zonder buffering",
    desc: "Een premium IPTV aanbieder levert echte 4K UHD-streams met adaptieve bitrate. Geen kwaliteitsdaling bij drukte — ook niet tijdens Champions League-finales of Formule 1-races.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: BadgeCheck,
    title: "Gratis proef zonder risico",
    desc: "De beste IPTV aanbieders staan achter hun dienst met een gratis proefperiode. Test alle kanalen en functies voordat u betaalt — een serieuze aanbieder is niet bang voor een eerlijke beoordeling.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
];

export function IptvAanbiederCriteria() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 700px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Beoordeel uw aanbieder
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            6 kenmerken van de beste{" "}
            <span className="text-gradient">IPTV aanbieder</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Gebruik deze criteria om IPTV aanbieders te vergelijken en de
            betrouwbaarste keuze te maken voor uw situatie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="animate-slide-up glass rounded-3xl p-7 group border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border ${item.border}`}
                >
                  <Icon size={22} className={item.color} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-blanc-50">
                  {item.title}
                </h3>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const aanbiederFaqs = [
  {
    q: "Hoe kies ik de beste IPTV aanbieder in Nederland?",
    a: "Vergelijk IPTV aanbieders op uptime (minimaal 99%), zenderaanbod (25.000+), klantenservice (Nederlands, snel) en veilige betaling. Test altijd eerst via een gratis proef. IPTV Amsterdam scoort op alle criteria als beste IPTV aanbieder van Nederland.",
  },
  {
    q: "Wat maakt IPTV Amsterdam beter dan andere aanbieders?",
    a: "IPTV Amsterdam combineert het grootste zenderaanbod (31.000+ kanalen), 4K-kwaliteit, 99,9% uptime en 24/7 WhatsApp-support in het Nederlands — allemaal voor een scherpe prijs. Geen enkele andere aanbieder biedt dit complete pakket.",
  },
  {
    q: "Is IPTV Amsterdam een legale IPTV aanbieder?",
    a: "IPTV Amsterdam levert een technische Amsterdamdienst. Raadpleeg uw lokale wet- en regelgeving voor uw specifieke situatie. Ons platform is technisch opgezet om gebruikers te voorzien van maximale kijkbeleving.",
  },
];

export function IptvAanbiederFaq() {
  return (
    <section
      className="py-16 relative overflow-hidden bg-black/20"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 420px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
              IPTV aanbieder — vragen
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-blanc-50">
              Vragen over de{" "}
              <span className="text-gradient">IPTV aanbieder</span>
            </h2>
          </div>
          <div className="space-y-4">
            {aanbiederFaqs.map((item, idx) => (
              <details
                key={idx}
                className="group glass rounded-2xl overflow-hidden border border-blanc-50/5 open:border-france-400/30 transition-all duration-300"
              >
                <summary className="list-none flex items-center justify-between p-5 cursor-pointer">
                  <span className="font-bold text-blanc-50 pr-4 text-sm">
                    {item.q}
                  </span>
                  <span className="text-france-400 text-xl shrink-0 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium px-5 pb-5">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
