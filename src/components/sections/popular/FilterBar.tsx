import { memo } from "react";
import { cn } from "@/lib/utils";
import { CalendarDays, Flame, Star } from "lucide-react";

interface FilterBarProps {
  activeType: "all" | "movies" | "series" | "lives" | "sports";
  setActiveType: (type: "all" | "movies" | "series" | "lives" | "sports") => void;
  activeGenre: string;
  setActiveGenre: (genre: string) => void;
  genres: string[];
  sortBy: "popularity" | "rating" | "newest";
  setSortBy: (sort: "popularity" | "rating" | "newest") => void;
}

const FilterBarComponent = ({
  activeType,
  setActiveType,
  activeGenre,
  setActiveGenre,
  genres,
  sortBy,
  setSortBy,
}: FilterBarProps) => {
  return (
    <div className="flex flex-col gap-6 mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Type Filter */}
        <div className="relative flex items-center gap-1 p-1 bg-blanc-50/5 backdrop-blur-md rounded-full border border-blanc-50/5 overflow-x-auto scrollbar-hide">
          {([
            { id: "all", label: "Alle" },
            { id: "movies", label: "Films" },
            { id: "series", label: "Series" },
            { id: "lives", label: "Live tv" },
            { id: "sports", label: "Sport" },
          ] as const).map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setActiveType(type.id);
                setActiveGenre("Alle");
              }}
              className={cn(
                "relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 z-10 whitespace-nowrap cursor-pointer",
                activeType === type.id ? "text-blanc-50" : "text-blanc-400 hover:text-blanc-200"
              )}
            >
              {activeType === type.id && (
                <div className="absolute inset-0 bg-france-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] -z-10" />
              )}
              {type.label}
            </button>
          ))}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-3 glass p-1.5 rounded-2xl border border-blanc-50/5 self-start overflow-x-auto scrollbar-hide">
          {([
            { id: "popularity", label: "Populair", Icon: Flame },
            { id: "rating", label: "Best beoordeeld", Icon: Star },
            { id: "newest", label: "Nieuwste", Icon: CalendarDays },
          ] as const).map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSortBy(opt.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                sortBy === opt.id ? "bg-blanc-50/10 text-blanc-50 shadow-inner" : "text-blanc-500 hover:text-blanc-300"
              }`}
            >
              <opt.Icon className="h-4 w-4" aria-hidden="true" />
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Genre Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide border-t border-blanc-50/5 pt-6">
        <span className="text-[10px] font-black text-blanc-500 uppercase tracking-[0.2em] mr-4 shrink-0">
          Genre:
        </span>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeGenre === genre ? "text-france-500 bg-france-500/10" : "text-blanc-500 hover:text-blanc-300"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export const FilterBar = memo(FilterBarComponent);
FilterBar.displayName = "FilterBar";
