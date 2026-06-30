import { memo } from "react";
import { type Trending } from "@/constants/trending-data";
import { SafeImage } from "@/components/shared/SafeImage";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface BrowseCardProps {
  item: Trending;
  index: number;
  onClick: () => void;
}

const BrowseCardComponent = ({ item, index, onClick }: BrowseCardProps) => {
  const isLive = item.type === "lives";
  const isSport = item.type === "sports";

  // Animation delay calculation (capped)
  const delay = `${Math.min(0.03 * (index % 20), 0.6)}s`;

  if (isLive) {
    return (
      <div
        onClick={onClick}
        className="relative rounded-2xl overflow-hidden border border-blanc-50/5 glass-strong group flex flex-col items-center justify-center p-6 h-[220px] transition-[transform,border-color] duration-500 hover:scale-[1.02] hover:border-france-500/30 animate-slide-up cursor-pointer"
        style={{ animationDelay: delay }}
      >
        <div className="absolute inset-0 bg-france-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="w-24 h-24 rounded-full overflow-hidden bg-france-950/40 flex items-center justify-center border border-blanc-50/10 group-hover:border-france-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-[border-color,box-shadow] duration-700 mb-4 relative shrink-0 z-10">
          <SafeImage
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="96px"
            quality={50}
          />
        </div>

        <h3 className="font-bold text-blanc-50 text-lg mb-3 tracking-tight truncate w-full text-center z-10">
          {item.title}
        </h3>

        <div className="flex items-center justify-center gap-2 w-full flex-wrap z-10">
          <span className="px-2.5 py-1 rounded-full bg-rouge-500/20 text-rouge-400 text-[10px] font-black uppercase flex items-center gap-1.5 border border-rouge-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-rouge-500 animate-pulse"></span>
            EN DIRECT
          </span>
          <span className="px-2.5 py-1 rounded-full bg-blanc-50/10 text-blanc-50/90 text-[10px] font-black uppercase border border-blanc-50/5">
            PREMIUM
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative rounded-2xl overflow-hidden cursor-pointer animate-slide-up border border-blanc-50/5 hover:border-france-500/30 transition-[transform,border-color] duration-700 hover:scale-[1.02] shadow-2xl",
        isSport ? "aspect-video" : "aspect-2/3",
      )}
      style={{ animationDelay: delay }}
    >
      <SafeImage
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={60}
      />

      <div className="absolute inset-0 bg-linear-to-t from-france-950 via-france-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={cn(
              "px-2.5 py-1 rounded-full text-blanc-50 text-[10px] font-black uppercase shadow-lg",
              item.quality === "LIVE"
                ? "bg-rouge-500 shadow-rouge-500/40"
                : "bg-france-500 shadow-france-500/40",
            )}
          >
            {item.quality}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-blanc-50/10 backdrop-blur-md text-blanc-50 text-[10px] font-black uppercase border border-blanc-50/10">
            {item.genre}
          </span>
        </div>

        <h3 className="text-blanc-50 font-bold text-lg leading-tight group-hover:text-france-500 transition-colors line-clamp-2">
          {item.title}
        </h3>

        {!isSport && (
          <div className="flex items-center gap-3 mt-3 text-[10px] font-bold text-blanc-400">
            <div className="flex items-center gap-1.5">
              <Star size={12} className="text-[#F4C430]" fill="currentColor" />
              <span className="text-blanc-50">{item.rating}</span>
            </div>
            {item.date && (
              <span>{new Date(item.date).getFullYear()}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export const BrowseCard = memo(BrowseCardComponent);
BrowseCard.displayName = "BrowseCard";
