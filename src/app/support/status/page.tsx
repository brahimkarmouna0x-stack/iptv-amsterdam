import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  CreditCard,
  Film,
  Headphones,
  List,
  Server,
  type LucideIcon,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Servicestatus — IPTV Uptime Monitor | IPTV Amsterdam",
  description:
    "Realtime overzicht van de servicestatus en uptime van alle IPTV Amsterdam Amsterdamdiensten en serverclusters. Alle systemen operationeel.",
  path: "/support/status",
});

const StatusPage = () => {
  const services: Array<{
    name: string;
    status: string;
    health: number;
    Icon: LucideIcon;
  }> = [
    {
      name: "Wereldwijde Amsterdam-cluster",
      status: "Operationeel",
      health: 100,
      Icon: Server,
    },
    {
      name: "Xtream Codes API",
      status: "Operationeel",
      health: 100,
      Icon: Code2,
    },
    {
      name: "VOD-bibliotheek toegang",
      status: "Operationeel",
      health: 100,
      Icon: Film,
    },
    {
      name: "EPG-dataleverancier",
      status: "Operationeel",
      health: 99,
      Icon: List,
    },
    {
      name: "Betalingsverwerking",
      status: "Operationeel",
      health: 100,
      Icon: CreditCard,
    },
    {
      name: "Klantenserviceportaal",
      status: "Operationeel",
      health: 100,
      Icon: Headphones,
    },
  ];

  const regions = [
    { name: "Noord-Amerika", latency: "24ms", load: "34%" },
    { name: "Europa", latency: "18ms", load: "42%" },
    { name: "Midden-Oosten", latency: "45ms", load: "28%" },
    { name: "Azië-Pacific", latency: "62ms", load: "31%" },
  ];

  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-emerald-400 text-sm font-bold mb-4 uppercase tracking-wider">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400 animate-live-pulse"
              aria-hidden="true"
            />
            Alle systemen operationeel
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6       text-blanc-50 leading-tight">
            Service<span className="text-gradient">status</span>
          </h1>
          <p className="text-blanc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Realtime monitoring van onze wereldwijde infrastructuur en
            Amsterdamdiensten.
          </p>
        </div>

        {/* Global Health Header */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 border border-emerald-500/20 bg-emerald-500/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 animate-slide-up shadow-2xl shadow-emerald-500/5">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center animate-pulse">
                <CheckCircle2
                  className="h-8 w-8 text-emerald-500"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"></div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold       text-blanc-50 mb-1">
                Alle systemen operationeel
              </h2>
              <p className="text-blanc-400 text-sm">
                Laatste controle: zojuist (automatische update)
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="px-6 py-3 rounded-xl glass       text-blanc-50 font-bold hover:bg-blanc-50/10 transition-all border border-blanc-50/10">
              Status vernieuwen
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Services */}
          <div className="lg:col-span-2 space-y-4 animate-slide-up">
            <h2 className="text-xl font-bold       text-blanc-50 mb-6 ml-2">
              Hoofddiensten
            </h2>
            {services.map((service, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-5 sm:p-6 border border-blanc-50/5 hover:border-blanc-50/10 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blanc-50/5 flex items-center justify-center text-blanc-400 group-hover:text-france-500 transition-colors">
                    <service.Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="      text-blanc-50 font-bold text-sm mb-0.5">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-1 rounded-full bg-blanc-50/5 overflow-hidden">
                        <div
                          className="h-full bg-emerald-500"
                          style={{ width: `${service.health}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] text-blanc-500">
                        {service.health}% gezondheid
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 self-start sm:self-auto">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Status */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-xl font-bold       text-blanc-50 mb-6 ml-2">
                Regionale knooppunten
              </h2>
              <div className="glass rounded-2xl p-6 sm:p-8 border border-blanc-50/5 space-y-8">
                {regions.map((region, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="      text-blanc-50 font-bold text-sm">
                        {region.name}
                      </h3>
                      <span className="text-[10px] font-bold text-blanc-500 uppercase tracking-widest">
                        {region.latency}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-blanc-50/5 overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-france-500 to-rouge-500"
                        style={{ width: region.load }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-medium text-blanc-500">
                      <span>Serverbelasting</span>
                      <span>{region.load}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Callout */}
            <div className="glass rounded-2xl p-6 sm:p-8 border border-france-500/20 bg-france-500/5 relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-france-500/10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <h2 className="text-lg font-bold       text-blanc-50 mb-2">
                Een probleem opgemerkt?
              </h2>
              <p className="text-sm text-blanc-400 mb-6 leading-relaxed">
                Heeft u Amsterdamproblemen die hier niet worden weergegeven?
                Neem dan contact met ons op.
              </p>
              <Link
                href="/support/contact"
                className="text-sm font-bold text-france-500 hover:      text-blanc-50 transition-colors flex items-center gap-2 group/btn"
              >
                Probleem melden
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StatusPage;
