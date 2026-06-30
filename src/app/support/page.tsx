import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ChevronRight,
  CircleHelp,
  CreditCard,
  Flame,
  Rocket,
  Search,
  ShieldCheck,
  Tv,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Helpcentrum — IPTV Support & Handleidingen | IPTV Amsterdam",
  description:
    "Vind antwoorden op uw IPTV-vragen. Installatiehandleidingen voor Smart TV, Android, Apple TV en meer. 24/7 WhatsApp-support via IPTV Amsterdam.",
  path: "/support",
});

const HelpCenterPage = () => {
  const categories: Array<{
    Icon: LucideIcon;
    title: string;
    desc: string;
    color: string;
    href: string;
  }> = [
    {
      Icon: Rocket,
      title: "Aan de slag",
      desc: "Ontdek hoe u uw abonnement binnen enkele minuten op elk apparaat instelt.",
      color: "text-france-400",
      href: "/support/guides",
    },
    {
      Icon: CreditCard,
      title: "Facturatie & pakketten",
      desc: "Informatie over abonnementen, verlengingen en betaalmethoden.",
      color: "text-rouge-400",
      href: "#",
    },
    {
      Icon: ShieldCheck,
      title: "Veiligheid",
      desc: "Hoe wij uw gegevens beschermen en tips om uw account te beveiligen.",
      color: "text-emerald-400",
      href: "#",
    },
    {
      Icon: Wrench,
      title: "Problemen oplossen",
      desc: "Los veelvoorkomende Amsterdam- en weergaveproblemen op.",
      color: "text-france-300",
      href: "#",
    },
    {
      Icon: Tv,
      title: "Content & kanalen",
      desc: "Ontdek onze kanaallijsten, VOD-bibliotheek en EPG-details.",
      color: "text-rouge-500",
      href: "#",
    },
    {
      Icon: CircleHelp,
      title: "Algemene FAQ",
      desc: "Snelle antwoorden op de meestgestelde vragen.",
      color: "text-france-400",
      href: "#",
    },
  ];

  const articles = [
    "Zo configureer je IPTV Smarters Pro",
    "Welke apparaten ondersteunen 4K-Amsterdam?",
    "Hoe verleng ik mijn abonnement",
    "De Xtream Codes API begrijpen",
    "Veelgebruikte oplossingen tegen buffering",
    "Zo gebruik je de elektronische programmagids (EPG)",
  ];

  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider">
            Support
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            Help<span className="text-gradient">centrum</span>
          </h1>
          <div className="max-w-2xl mx-auto relative mt-8">
            <input
              type="text"
              placeholder="Zoek artikelen, handleidingen of oplossingen..."
              className="w-full px-5 sm:px-8 py-4 sm:py-5 rounded-2xl glass text-blanc-50 placeholder-blanc-500 border border-blanc-50/10 focus:outline-none focus:border-france-500/50 text-base sm:text-lg shadow-2xl"
            />
            <Search
              className="absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 text-blanc-500"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-14 sm:mb-20">
          {categories.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="glass rounded-2xl p-6 sm:p-8 hover:bg-blanc-50/5 border border-blanc-50/10 group transition-all animate-fade-up"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-blanc-50/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}
              >
                <item.Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-blanc-50 mb-2">
                {item.title}
              </h3>
              <p className="text-blanc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="glass rounded-2xl p-5 sm:p-8 md:p-12 border border-blanc-50/10">
          <h2 className="text-xl sm:text-2xl font-bold text-blanc-50 mb-6 sm:mb-8 flex items-center gap-3">
            <Flame className="h-6 w-6 text-orange-500" aria-hidden="true" />
            Populaire artikelen
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-blanc-50/5 text-blanc-400 hover:text-france-500 transition-all group"
              >
                <span className="font-medium">{article}</span>
                <ChevronRight
                  className="h-4 w-4 text-blanc-600 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HelpCenterPage;
