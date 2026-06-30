import {
  Baby,
  BookOpen,
  Drama,
  Film,
  Flag,
  Gamepad2,
  Globe2,
  Goal,
  Heart,
  Landmark,
  MicVocal,
  MonitorPlay,
  Music,
  Newspaper,
  Radio,
  Swords,
  Telescope,
  Trophy,
  Tv,
  Volleyball,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Category data                                                      */
/* ------------------------------------------------------------------ */

interface CategoryItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

const ROW_A: CategoryItem[] = [
  {
    icon: Tv,
    title: "Nederlandse zenders",
    description: "Publieke & commerciële zenders in HD",
    href: "/popular?type=lives",
    gradient: "from-france-500/20 to-france-700/10",
  },
  {
    icon: Trophy,
    title: "Live sport",
    description: "Voetbal, Formule 1, UFC & meer live",
    href: "/popular?type=sports",
    gradient: "from-rouge-500/20 to-rouge-700/10",
  },
  {
    icon: Film,
    title: "Films",
    description: "Nieuwigheden, klassiekers & blockbusters",
    href: "/popular?type=movies",
    gradient: "from-france-400/20 to-france-600/10",
  },
  {
    icon: MonitorPlay,
    title: "Series",
    description: "Populaire shows & complete seizoenen",
    href: "/popular?type=series",
    gradient: "from-rouge-400/20 to-rouge-600/10",
  },
  {
    icon: Heart,
    title: "Familiezenders",
    description: "Entertainment voor het hele gezin",
    href: "/popular?genre=Famille",
    gradient: "from-pink-500/20 to-pink-700/10",
  },
  {
    icon: Music,
    title: "Muziek",
    description: "Muziek-tv, concerten & charts",
    href: "/popular?genre=Musique",
    gradient: "from-violet-500/20 to-violet-700/10",
  },
  {
    icon: Newspaper,
    title: "Nieuws",
    description: "Actueel nieuws 24/7",
    href: "/popular?type=lives",
    gradient: "from-blue-500/20 to-blue-700/10",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Live-streams, toernooien & gaming-nieuws",
    href: "/popular?genre=Gaming",
    gradient: "from-emerald-500/20 to-emerald-700/10",
  },
  {
    icon: BookOpen,
    title: "Documentaires",
    description: "Documentaires over natuur, wetenschap & geschiedenis",
    href: "/popular?type=movies",
    gradient: "from-amber-500/20 to-amber-700/10",
  },
  {
    icon: Baby,
    title: "Kinderzenders",
    description: "Veilige content voor de kleintjes",
    href: "/popular?genre=Famille",
    gradient: "from-sky-400/20 to-sky-600/10",
  },
];

const ROW_B: CategoryItem[] = [
  {
    icon: Globe2,
    title: "Internationale zenders",
    description: "Zenders uit 190+ landen wereldwijd",
    href: "/popular?genre=Internationaal",
    gradient: "from-france-500/20 to-france-700/10",
  },
  {
    icon: Flag,
    title: "Nederlandse zenders",
    description: "NPO, RTL, SBS & regionale zenders",
    href: "/popular?type=lives",
    gradient: "from-orange-500/20 to-orange-700/10",
  },
  {
    icon: Landmark,
    title: "UK-zenders",
    description: "BBC, ITV, Channel 4 & Sky UK",
    href: "/popular?type=lives",
    gradient: "from-red-600/20 to-red-800/10",
  },
  {
    icon: Telescope,
    title: "VS-zenders",
    description: "CNN, HBO, NBC, FOX & ESPN",
    href: "/popular?type=lives",
    gradient: "from-blue-600/20 to-blue-800/10",
  },
  {
    icon: Goal,
    title: "Motorsport",
    description: "Formule 1, MotoGP, Rally & meer",
    href: "/popular?type=sports",
    gradient: "from-rouge-500/20 to-rouge-700/10",
  },
  {
    icon: Swords,
    title: "Vechtsport",
    description: "UFC, Boksen, WWE & Wrestling",
    href: "/popular?type=sports",
    gradient: "from-rose-600/20 to-rose-800/10",
  },
  {
    icon: Volleyball,
    title: "Tennis",
    description: "Grand Slams, ATP & WTA live",
    href: "/popular?type=sports",
    gradient: "from-lime-500/20 to-lime-700/10",
  },
  {
    icon: Drama,
    title: "Basketbal",
    description: "NBA, EuroLeague & internationale competities",
    href: "/popular?type=sports",
    gradient: "from-amber-600/20 to-amber-800/10",
  },
  {
    icon: MicVocal,
    title: "Entertainment",
    description: "Talkshows, reality-tv & shows",
    href: "/popular?type=lives",
    gradient: "from-france-400/20 to-france-600/10",
  },
  {
    icon: Radio,
    title: "Premium-tv",
    description: "Exclusieve zenders & 4K-beleving",
    href: "/popular?type=lives",
    gradient: "from-france-300/20 to-rouge-500/10",
  },
];

/* Duplicate arrays so the marquee loops seamlessly (2× = 50% offset) */
const MARQUEE_A = [...ROW_A, ...ROW_A];
const MARQUEE_B = [...ROW_B, ...ROW_B];

/* ------------------------------------------------------------------ */
/*  Category card — shared between both rows                           */
/* ------------------------------------------------------------------ */

function CategoryCard({ item, index }: { item: CategoryItem; index: number }) {
  const Icon = item.icon;
  const hue = index % 3;

  return (
    <a
      href={item.href}
      className={`group relative flex w-[220px] shrink-0 flex-col rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 sm:w-[250px] sm:p-6 ${hue === 0
          ? "hover:border-france-500/40 hover:shadow-[0_0_30px_-8px_rgba(236,201,75,0.25)]"
          : hue === 1
            ? "hover:border-rouge-500/40 hover:shadow-[0_0_30px_-8px_rgba(218,33,40,0.25)]"
            : "hover:border-blanc-300/30 hover:shadow-[0_0_30px_-8px_rgba(255,255,255,0.12)]"
        }`}
    >
      {/* Subtle gradient overlay on hover */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-br ${item.gradient}`}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className={`relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-blanc-50/10 bg-blanc-50/[0.06] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg ${hue === 0
            ? "text-france-400 group-hover:shadow-france-500/20"
            : hue === 1
              ? "text-rouge-400 group-hover:shadow-rouge-500/20"
              : "text-blanc-100 group-hover:shadow-blanc-300/15"
          }`}
      >
        <Icon size={20} aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="relative text-[15px] font-bold text-blanc-50 transition-colors duration-300 group-hover:text-france-100 sm:text-base">
        {item.title}
      </h3>

      {/* Description */}
      <p className="relative mt-1.5 text-[11px] leading-relaxed text-blanc-500 transition-colors duration-300 group-hover:text-blanc-400 sm:text-xs">
        {item.description}
      </p>

      {/* Bottom accent line */}
      <span
        className={`pointer-events-none absolute bottom-0 left-4 right-4 h-px scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${hue === 0
            ? "bg-france-500/50"
            : hue === 1
              ? "bg-rouge-500/50"
              : "bg-blanc-300/40"
          }`}
        aria-hidden="true"
      />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

const Categories = () => {
  return (
    <section
      id="categories"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}
    >
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-france-500/5 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 top-2/3 h-[400px] w-[400px] rounded-full bg-rouge-500/5 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* --- Header --- */}
        <div className="mx-auto mb-12 max-w-7xl px-4 sm:mb-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-france-500/20 bg-france-500/15 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-france-100">
                <Tv size={14} aria-hidden="true" />
                Ontdekken
              </span>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight text-blanc-50 sm:text-5xl">
                Content voor <span className="text-gradient">elk moment</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm font-medium leading-6 text-blanc-400 sm:text-base">
              Sport, films, series, internationale zenders en exclusieve
              premium-content – alles in één abonnement.
            </p>
          </div>
        </div>

        {/* --- Marquee Row A (leftward) --- */}
        <div className="mask-fade-edges relative mb-6 sm:mb-8">
          <div className="categories-track-1 flex gap-4 pr-4 sm:gap-5">
            {MARQUEE_A.map((item, index) => (
              <CategoryCard key={`a-${item.title}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* --- Marquee Row B (rightward) --- */}
        <div className="mask-fade-edges relative">
          <div className="categories-track-2 flex gap-4 pr-4 sm:gap-5">
            {MARQUEE_B.map((item, index) => (
              <CategoryCard key={`b-${item.title}-${index}`} item={item} index={index + 10} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
