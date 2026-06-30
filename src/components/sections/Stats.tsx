import { Clapperboard, Tv, Users, Zap, type LucideIcon } from "lucide-react";

interface StatItemProps {
  value: string;
  label: string;
  icon: LucideIcon;
}

const StatItem = ({ value, label, icon: Icon }: StatItemProps) => {
  return (
    <div className="group flex flex-col items-center rounded-3xl border border-blanc-50/5 bg-france-900 p-8 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blanc-50/5 bg-blanc-50/5 transition-transform duration-300 group-hover:scale-105 group-hover:border-france-400/30">
        <Icon size={26} className="text-france-400" aria-hidden="true" />
      </div>
      <div className="mb-2 text-4xl font-black text-blanc-50 sm:text-5xl">
        {value}
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-blanc-400 sm:text-xs">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <section
      className="relative overflow-hidden bg-black/40 py-24 before:content-[''] before:absolute before:left-0 before:top-0 before:h-px before:w-full before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-linear-to-r after:from-transparent after:via-white/10 after:to-transparent"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 350px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          <StatItem value="31K+" label="Kanalen" icon={Tv} />
          <StatItem value="140K+" label="Films & series" icon={Clapperboard} />
          <StatItem value="99,9%" label="Amsterdamkwaliteit" icon={Zap} />
          <StatItem value="10K+" label="Actieve gebruikers" icon={Users} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
