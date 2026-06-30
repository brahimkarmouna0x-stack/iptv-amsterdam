import { BadgeCheck, CreditCard, Info, ShieldCheck } from "lucide-react";

const checklistItems = [
  {
    icon: ShieldCheck,
    title: "Kies een gecertificeerde aanbieder",
    desc: "Controleer altijd of de IPTV-aanbieder aantoonbare reviews heeft, Nederlandse support biedt en veilige betaalmethoden zoals iDEAL accepteert voordat u IPTV koopt.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: Info,
    title: "Vergelijk het zenderaanbod",
    desc: "Niet elk IPTV-pakket bevat dezelfde kanalen. Check of de Nederlandse publieke zenders, sportzenders (ESPN, Ziggo Sport) en uw favoriete internationale kanalen zijn inbegrepen.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    icon: CreditCard,
    title: "Let op de totaalprijs",
    desc: "Vergelijk IPTV kopen op maandprijs, niet alleen op introductieprijs. Let op activatiekosten, eenmalige kosten en wat er bij verlenging wordt gevraagd. IPTV Amsterdam hanteert altijd transparante tarieven.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: BadgeCheck,
    title: "Test altijd eerst met een proef",
    desc: "Een serieuze IPTV-aanbieder biedt een gratis proefperiode. Test de beeldkwaliteit, stabiliteit op piekuren en het gebruiksgemak voordat u een volledig pakket koopt.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
];

export function IptvKopenChecklist() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            IPTV kopen checklist
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Waar moet u op letten bij{" "}
            <span className="text-gradient">IPTV kopen</span>?
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Voorkom teleurstellingen: dit zijn de vier punten die elke slimme
            koper controleert voordat hij IPTV koopt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {checklistItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="animate-slide-up glass rounded-3xl p-7 group border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300 flex gap-5"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border ${item.border}`}
                >
                  <Icon size={22} className={item.color} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2 text-blanc-50">
                    {item.title}
                  </h3>
                  <p className="text-blanc-400 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const kopenFaqs = [
  {
    q: "Kan ik IPTV kopen zonder jaarcontract?",
    a: "Ja. Bij IPTV Amsterdam kiest u zelf de looptijd — vanaf 1 maand. U betaalt alleen voor de periode die u wilt, zonder vastzitten aan een jaarcontract. Hoe langer u kiest, hoe lager de maandprijs.",
  },
  {
    q: "Wat heb ik nodig om IPTV te kopen en te gebruiken?",
    a: "U heeft een stabiele internetverbinding nodig (minimaal 10 Mbps voor HD) en een compatibel apparaat: Smart TV, telefoon, tablet, Fire TV Stick of computer. De app instellen duurt minder dan 5 minuten.",
  },
  {
    q: "Is IPTV kopen bij IPTV Amsterdam veilig?",
    a: "Absoluut. Uw betaling verloopt via SSL-beveiligde verbindingen met iDEAL, PayPal of creditcard. Uw gegevens worden nooit gedeeld met derden. We voldoen aan de Europese AVG-wetgeving.",
  },
];

export function IptvKopenFaq() {
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
              IPTV kopen — vragen
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-blanc-50">
              Nog vragen over <span className="text-gradient">IPTV kopen</span>?
            </h2>
          </div>
          <div className="space-y-4">
            {kopenFaqs.map((item, idx) => (
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
