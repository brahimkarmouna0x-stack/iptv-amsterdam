import Link from "next/link";
import { Check, Zap, Star } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  period: string;
  totalPrice: string;
  monthlyPrice: string;
  savings: string | null;
  badge: string | null;
  highlight: boolean;
  benefits: string[];
  cta: string;
}

const plans: Plan[] = [
  {
    id: "monthly",
    name: "Maandelijks",
    period: "per maand",
    totalPrice: "€14,99",
    monthlyPrice: "€14,99",
    savings: null,
    badge: null,
    highlight: false,
    benefits: [
      "Duizenden live kanalen",
      "Films & series on demand",
      "4K Ultra HD kwaliteit",
      "Alle apparaten",
      "24/7 klantenservice",
    ],
    cta: "Start direct",
  },
  {
    id: "quarterly",
    name: "Per kwartaal",
    period: "per 3 maanden",
    totalPrice: "€37,99",
    monthlyPrice: "€12,66/mnd",
    savings: "Bespaar 15%",
    badge: null,
    highlight: false,
    benefits: [
      "Duizenden live kanalen",
      "Films & series on demand",
      "4K Ultra HD kwaliteit",
      "Alle apparaten",
      "24/7 klantenservice",
    ],
    cta: "Kies kwartaal",
  },
  {
    id: "halfyear",
    name: "Halfjaarlijks",
    period: "per 6 maanden",
    totalPrice: "€42,99",
    monthlyPrice: "€7,17/mnd",
    savings: "Bespaar 52%",
    badge: null,
    highlight: false,
    benefits: [
      "Duizenden live kanalen",
      "Films & series on demand",
      "4K Ultra HD kwaliteit",
      "Alle apparaten",
      "24/7 klantenservice",
    ],
    cta: "Kies half jaar",
  },
  {
    id: "annual",
    name: "Jaarlijks",
    period: "per jaar",
    totalPrice: "€69,99",
    monthlyPrice: "€5,83/mnd",
    savings: "Bespaar 61%",
    badge: "Meest gekozen",
    highlight: true,
    benefits: [
      "Duizenden live kanalen",
      "Films & series on demand",
      "4K Ultra HD kwaliteit",
      "Alle apparaten",
      "24/7 klantenservice",
      "Gratis proef beschikbaar",
    ],
    cta: "Kies jaarlijks",
  },
];

const SubscriptionPlans = () => {
  return (
    <section
      id="abonnementen"
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 780px" }}
    >
      <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-france-500/5 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute right-0 top-1/2 w-[350px] h-[350px] bg-rouge-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider">
            Onze abonnementen
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Kies uw{" "}
            <span className="text-gradient">IPTV Amsterdam pakket</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Flexibele abonnementen zonder vaste contracten. Hoe langer de looptijd,
            hoe meer u bespaart. Alle pakketten inclusief gratis proef.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-7 flex flex-col transition-all duration-300 group border ${
                plan.highlight
                  ? "bg-linear-to-b from-france-950 to-france-900/80 border-france-400/40 shadow-[0_0_60px_-15px_rgba(66,99,183,0.5)]"
                  : "glass border-blanc-50/8 hover:border-france-500/25"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rouge-500 text-blanc-50 text-[11px] font-black uppercase tracking-widest shadow-lg">
                    <Star size={10} fill="currentColor" aria-hidden="true" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Savings badge */}
              {plan.savings && (
                <div className="absolute top-5 right-5">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-rouge-500/15 text-rouge-400 text-[10px] font-black uppercase tracking-wide border border-rouge-500/20">
                    {plan.savings}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-blanc-400 mb-2">
                  {plan.name}
                </p>
                <div className="flex items-end gap-2 mb-1">
                  <span className={`text-4xl font-black ${plan.highlight ? "text-blanc-50" : "text-blanc-50"}`}>
                    {plan.totalPrice}
                  </span>
                </div>
                <p className="text-sm text-blanc-400 font-medium">{plan.period}</p>
                {plan.monthlyPrice !== plan.totalPrice && (
                  <p className="text-xs text-france-400 font-bold mt-1">{plan.monthlyPrice}</p>
                )}
              </div>

              {/* Divider */}
              <div className={`h-px mb-6 ${plan.highlight ? "bg-france-400/20" : "bg-blanc-50/8"}`} />

              {/* Benefits */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm">
                    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      plan.highlight ? "bg-france-500/20 text-france-400" : "bg-france-500/10 text-france-400"
                    }`}>
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-blanc-300 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#pakketten"
                className={`flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-black uppercase tracking-wide transition-all duration-200 ${
                  plan.highlight
                    ? "bg-rouge-500 text-blanc-50 shadow-[0_12px_30px_-8px_rgba(174,28,40,0.45)] hover:bg-rouge-600 hover:-translate-y-0.5"
                    : "bg-blanc-50/8 text-blanc-50 border border-blanc-50/10 hover:bg-blanc-50/14 hover:border-france-500/30"
                }`}
              >
                <Zap size={14} aria-hidden="true" />
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-blanc-500 mt-10 font-medium">
          Prijzen zijn voor 1 verbinding. Meer verbindingen beschikbaar op de{" "}
          <Link href="#pakketten" className="text-france-400 hover:text-france-300 font-bold transition-colors">
            prijzenpagina
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
