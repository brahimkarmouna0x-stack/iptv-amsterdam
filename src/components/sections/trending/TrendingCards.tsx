import { memo } from "react";
import { Star } from "lucide-react";
import type { TrendingItem } from "@/lib/trending-utils";
import { SafeImage } from "@/components/shared/SafeImage";

const OPTIMIZED_IMAGE_HOSTS = [
  "tmdb.org",
  "unsplash.com",
  "thesportsdb.com",
  "i.imgur.com",
];

const shouldOptimizeImage = (src: string | undefined) => {
  if (!src) return false;
  return (
    src.startsWith("/") ||
    OPTIMIZED_IMAGE_HOSTS.some((host) => src.includes(host))
  );
};

const ImageFallback = ({ title }: { title: string }) => (
  <div className="relative flex aspect-[2/3] w-full items-center justify-center">
    <div className="flex aspect-[2/3] w-full items-center justify-center p-4">
      <span className="text-center text-xs font-bold text-blanc-500">{title}</span>
    </div>
  </div>
);

export const FeaturedCard = memo(function FeaturedCard({
  item,
  ariaHidden = false,
}: {
  item: TrendingItem;
  ariaHidden?: boolean;
}) {
  const imageSrc = item.image;

  return (
    <article
      data-slider-card
      aria-hidden={ariaHidden}
      className="group relative w-[168px] shrink-0 snap-start overflow-hidden rounded-2xl border border-blanc-50/10 bg-france-900 shadow-[0_22px_60px_-42px_rgba(59,130,246,0.6)] transition-[border-color,transform] duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-france-300/40 sm:w-[210px] lg:w-[230px]"
      style={{ willChange: "transform" }}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <SafeImage
          src={imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 168px, (max-width: 1024px) 210px, 230px"
          quality={55}
          className="object-cover transition duration-700 group-hover:scale-105"
          unoptimized={!shouldOptimizeImage(imageSrc)}
          fallback={<ImageFallback title={item.title} />}
        />
        <div className="absolute inset-0 bg-linear-to-t from-france-950 via-france-950/18 to-transparent" />
        <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
          <span className="rounded-full border border-france-300/30 bg-france-500/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-france-100">
            {item.quality}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-blanc-50/10 bg-france-950/35 px-2.5 py-1 text-[10px] font-black text-blanc-50 backdrop-blur-md">
            <Star
              size={11}
              className="fill-[#F4C430] text-[#F4C430]"
              aria-hidden="true"
            />
            {item.rating}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-france-100/75">
            {item.genre}
          </p>
          <h3 className="line-clamp-2 min-h-[44px] text-lg font-black leading-[1.1] text-blanc-50">
            {item.title}
          </h3>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-blanc-50/5 transition group-hover:ring-france-300/30" />
    </article>
  );
});
FeaturedCard.displayName = "FeaturedCard";

export const ChannelCard = memo(function ChannelCard({
  item,
  ariaHidden = false,
}: {
  item: TrendingItem;
  ariaHidden?: boolean;
}) {
  return (
    <article
      data-slider-card
      aria-hidden={ariaHidden}
      className="group relative w-[178px] shrink-0 snap-start overflow-hidden rounded-2xl border border-blanc-50/10 bg-france-900/95 p-4 shadow-[0_20px_55px_-42px_rgba(59,130,246,0.55)] transition-[border-color,transform] duration-300 hover:-translate-y-1.5 hover:border-france-300/35 sm:w-[198px]"
    >
      <div className="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-france-100/30 to-transparent" />
      <div className="mb-4 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-rouge-300/15 bg-rouge-400/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-rouge-100">
          <span className="h-1.5 w-1.5 rounded-full bg-rouge-400" />
          Live
        </span>
        <span className="rounded-full border border-blanc-50/10 bg-blanc-50/[0.06] px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-blanc-300">
          {item.quality}
        </span>
      </div>
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.06] p-2">
        <SafeImage
          src={item.image}
          alt={item.title}
          width={80}
          height={80}
          sizes="80px"
          quality={45}
          className="h-full w-full object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.45)] transition duration-300 group-hover:scale-105"
          unoptimized={!shouldOptimizeImage(item.image)}
          fallback={null}
        />
      </div>
      <h3 className="line-clamp-2 min-h-[40px] text-center text-sm font-black leading-5 text-blanc-50 sm:text-base">
        {item.title}
      </h3>
      <div className="mt-4 flex items-center justify-center gap-1.5">
        <span className="text-[10px] font-black uppercase tracking-[0.14em] text-france-100/65">
            Live HD
        </span>
      </div>
    </article>
  );
});
ChannelCard.displayName = "ChannelCard";
