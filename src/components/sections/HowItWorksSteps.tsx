import Link from "next/link";
import { ShoppingCart, CreditCard, Mail, PlayCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ShoppingCart,
    title: "Kies uw pakket",
    description:
      "Selecteer het IPTV Amsterdam abonnement dat bij u past — van 1 tot 4 gelijktijdige verbindingen, met looptijden van maandelijks tot jaarlijks.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
    connector: "bg-linear-to-r from-france-500/30 to-rouge-500/30",
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Bestelling afronden",
    description:
      "Rond uw bestelling veilig af via een beveiligde betaalmethode. Uw persoonlijke gegevens zijn te allen tijde beschermd.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
    connector: "bg-linear-to-r from-rouge-500/30 to-france-500/30",
  },
  {
    step: "03",
    icon: Mail,
    title: "Ontvang uw inloggegevens",
    description:
      "Direct na betaling ontvangt u een e-mail met uw persoonlijke M3U-url en Xtream Codes. Inclusief een duidelijke installatiehandleiding.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
    connector: "bg-linear-to-r from-france-500/30 to-rouge-500/30",
  },
  {
    step: "04",
    icon: PlayCircle,
    title: "Begin direct met streamen",
    description:
      "Voer uw gegevens in uw IPTV-app in en geniet meteen van duizenden kanalen, films en series in verbluffende 4K Ultra HD.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
    connector: null,
  },
];

const HowItWorksSteps = () => {
  return (
    <section
      id="hoe-werkt-het"
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 620px" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-rouge-500/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider">
            Aan de slag
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            In <span className="text-gradient">4 stappen</span> klaar om te
            kijken
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Van bestelling tot Amsterdam in minder dan 5 minuten. Geen
            technische kennis vereist — wij begeleiden u door elke stap.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="animate-slide-up glass rounded-3xl p-8 text-center group border border-blanc-50/5 hover:border-blanc-50/10 transition-all duration-300"
                  style={{ animationDelay: `${0.12 * idx}s` }}
                >
                  <div className="relative inline-flex mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border ${item.border}`}
                    >
                      <Icon
                        size={26}
                        className={item.color}
                        aria-hidden="true"
                      />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-france-500 text-blanc-50 text-[10px] font-black flex items-center justify-center shadow-md"
                      aria-hidden="true"
                    >
                      {idx + 1}
                    </span>
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

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="#pakketten"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-rouge-500 text-blanc-50 font-black text-base uppercase tracking-wide shadow-[0_16px_44px_-12px_rgba(174,28,40,0.55)] hover:bg-rouge-600 hover:-translate-y-0.5 transition-all duration-200"
          >
            <PlayCircle size={20} aria-hidden="true" />
            Bekijk pakketten &amp; start vandaag
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
