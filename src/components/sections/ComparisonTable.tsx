import React from "react";
import { Check, X } from "lucide-react";

const features = [
  "Maandelijkse kosten",
  "Aantal kanalen",
  "4K & HD kwaliteit",
  "Films & series on demand",
  "Kijken op meerdere apparaten",
  "Geen vaste installateur nodig",
  "Gratis proefperiode",
  "Direct opzegbaar",
  "Kijken onderweg",
  "Internationale kanalen",
];

const iptv = [
  "Vanaf €5,99/maand",
  "Duizenden",
  true,
  "Uitgebreide VOD",
  true,
  true,
  true,
  true,
  true,
  true,
];

const cable = [
  "Vanaf €29,99/maand",
  "100–300",
  false,
  "Beperkt",
  false,
  false,
  false,
  false,
  false,
  false,
];

type CellValue = string | boolean;

const Cell = ({ value, highlight = false }: { value: CellValue; highlight?: boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-france-500/20 border border-france-500/30">
        <Check size={14} className="text-france-400" aria-label="Ja" />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rouge-900/30 border border-rouge-700/30">
        <X size={14} className="text-rouge-500" aria-label="Nee" />
      </span>
    );
  }
  return (
    <span className={`text-sm font-semibold ${highlight ? "text-france-300" : "text-blanc-400"}`}>
      {value}
    </span>
  );
};

const ComparisonTable = () => {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 650px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Vergelijking
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            IPTV vs <span className="text-gradient">Traditionele TV</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Zie zelf waarom honderdduizenden Nederlanders overstappen op IPTV.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="glass rounded-3xl overflow-hidden border border-blanc-50/5">
            <div className="grid grid-cols-[1fr_1fr_1fr] text-sm">
              <div className="p-5 border-b border-blanc-50/5 bg-blanc-50/[0.02]" />
              <div className="p-5 border-b border-l border-france-400/20 bg-france-500/10 text-center">
                <span className="font-black text-france-300 tracking-wide uppercase text-xs">
                  IPTV Amsterdam
                </span>
              </div>
              <div className="p-5 border-b border-l border-blanc-50/5 bg-blanc-50/[0.02] text-center">
                <span className="font-black text-blanc-500 tracking-wide uppercase text-xs">
                  Kabel / Satelliet
                </span>
              </div>

              {features.map((feature, idx) => (
                <React.Fragment key={`row-${idx}`}>
                  <div
                    className={`px-5 py-4 text-blanc-300 font-medium text-sm flex items-center ${idx < features.length - 1 ? "border-b border-blanc-50/5" : ""}`}
                  >
                    {feature}
                  </div>
                  <div
                    className={`px-5 py-4 flex items-center justify-center border-l border-france-400/20 bg-france-500/5 ${idx < features.length - 1 ? "border-b border-france-400/10" : ""}`}
                  >
                    <Cell value={iptv[idx]} highlight />
                  </div>
                  <div
                    className={`px-5 py-4 flex items-center justify-center border-l border-blanc-50/5 ${idx < features.length - 1 ? "border-b border-blanc-50/5" : ""}`}
                  >
                    <Cell value={cable[idx]} />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
