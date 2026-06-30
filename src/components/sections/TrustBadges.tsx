import { Lock, ShieldCheck, Zap } from "lucide-react";

const paymentMethods = [
  { name: "iDEAL", flag: "🇳🇱", popular: true },
  { name: "PayPal", flag: null, popular: false },
  { name: "Visa", flag: null, popular: false },
  { name: "Mastercard", flag: null, popular: false },
  { name: "Bancontact", flag: "🇧🇪", popular: false },
  { name: "Klarna", flag: null, popular: false },
];

const trustSignals = [
  {
    icon: ShieldCheck,
    title: "SSL 256-bit versleuteling",
    description:
      "Alle betalingstransacties verlopen via een beveiligde, versleutelde verbinding. Uw bankgegevens zijn te allen tijde beschermd.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
    glow: "hover:border-france-400/30",
  },
  {
    icon: Lock,
    title: "GDPR & AVG-conform",
    description:
      "Uw persoonlijke gegevens worden nooit verkocht of gedeeld met derden. Wij voldoen volledig aan de Europese privacywetgeving.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
    glow: "hover:border-rouge-400/30",
  },
  {
    icon: Zap,
    title: "99,9% uptime gegarandeerd",
    description:
      "Onze servers draaien op redundante infrastructuur. Bij storingen schakelen we automatisch over op back-upservers — u merkt er niets van.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
    glow: "hover:border-france-400/30",
  },
];

const TrustBadges = () => {
  return (
    <section
      className="py-24 relative overflow-hidden bg-black/30"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 560px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            Veilig betalen
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Uw betaling is{" "}
            <span className="text-gradient">100% veilig</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Betaal met uw favoriete betaalmethode via een volledig beveiligde
            verbinding. Geen verborgen kosten, geen verrassingen.
          </p>
        </div>

        {/* Payment method pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl glass border transition-all duration-200 hover:-translate-y-0.5 cursor-default ${
                method.popular
                  ? "border-france-400/25 hover:border-france-400/45"
                  : "border-blanc-50/8 hover:border-blanc-50/15"
              }`}
            >
              {method.flag && (
                <span className="text-base leading-none" aria-hidden="true">
                  {method.flag}
                </span>
              )}
              <span
                className={`font-bold text-sm ${
                  method.popular ? "text-france-300" : "text-blanc-300"
                }`}
              >
                {method.name}
              </span>
              {method.popular && (
                <span className="text-[9px] font-black uppercase tracking-wider bg-france-500/20 text-france-400 px-1.5 py-0.5 rounded-full border border-france-500/20">
                  Populair
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Trust signal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {trustSignals.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`animate-slide-up glass rounded-3xl p-8 group border border-blanc-50/5 ${item.glow} transition-all duration-300 text-center`}
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div
                  className={`mx-auto mb-6 w-14 h-14 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border ${item.border}`}
                >
                  <Icon size={24} className={item.color} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-blanc-50">
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

export default TrustBadges;
