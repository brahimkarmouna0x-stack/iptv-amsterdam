import { type ReactNode } from "react";
import { PlayCircle, Radio, Sparkles } from "lucide-react";
import { trendingData } from "@/lib/trending-utils";
import { FeaturedCard, ChannelCard } from "./trending/TrendingCards";

export type { TrendingItem as Trending } from "@/lib/trending-utils";

const TrendingSection = () => {
  const { topSeries, topMovies, liveChannels } = trendingData;

  const originalItems = [...topSeries, ...topMovies];
  const channelItems = liveChannels.slice(0, 12);

  return (
    <section
      id="movies"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 700px" }}
    >
      <div className="absolute inset-x-0 top-0 h-72 bg-linear-to-b from-france-500/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-france-500/20 bg-france-500/15 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-france-100">
              <Sparkles size={14} aria-hidden="true" />
              Premium Amsterdam
            </span>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight text-blanc-50 sm:text-5xl">
              Populaire films &amp; series
            </h2>
          </div>
          <p className="max-w-xl text-sm font-medium leading-6 text-blanc-400 sm:text-base">
            Ontdek de meest bekeken series en films zoals Game of Thrones,
            Vikings en The Walking Dead, plus de nieuwste blockbusters.
          </p>
        </div>

        <div className="space-y-14">
          {originalItems.length > 0 && (
            <div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="flex items-center gap-3 text-xl font-black text-blanc-50">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-france-300/20 bg-france-500/15 text-france-300">
                    <PlayCircle size={21} aria-hidden="true" />
                  </span>
                  Meest bekeken series &amp; films
                </h3>
              </div>

              <SliderFrame>
                <div
                  className="overflow-hidden pb-7 pt-2"
                  aria-label="Meest bekeken series en films"
                >
                  <div className="poster-slider-track flex w-max">
                    <div className="flex gap-4 pr-4 sm:gap-5 sm:pr-5">
                      {originalItems.map((item, index) => (
                        <FeaturedCard
                          key={`${item.title}-${index}`}
                          item={item}
                        />
                      ))}
                    </div>
                    <div
                      className="flex gap-4 pr-4 sm:gap-5 sm:pr-5"
                      aria-hidden="true"
                    >
                      {originalItems.map((item, index) => (
                        <FeaturedCard
                          key={`${item.title}-loop-${index}`}
                          item={item}
                          ariaHidden
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SliderFrame>
            </div>
          )}

          {channelItems.length > 0 && (
            <div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-france-100/65">
                  Premium kanalen
                </span>
                <h3 className="flex items-center gap-3 text-xl font-black text-blanc-50">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-rouge-300/15 bg-rouge-400/10 text-rouge-200">
                    <Radio size={21} aria-hidden="true" />
                  </span>
                  Live tv
                </h3>
              </div>

              <SliderFrame compact>
                <div
                  className="overflow-hidden pb-7 pt-2"
                  aria-label="Premium live tv-kanalen"
                >
                  <div className="channel-slider-track flex w-max">
                    <div className="flex gap-4 pr-4">
                      {channelItems.map((item, index) => (
                        <ChannelCard
                          key={`${item.title}-${index}`}
                          item={item}
                        />
                      ))}
                    </div>
                    <div className="flex gap-4 pr-4" aria-hidden="true">
                      {channelItems.map((item, index) => (
                        <ChannelCard
                          key={`${item.title}-loop-${index}`}
                          item={item}
                          ariaHidden
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SliderFrame>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const SliderFrame = ({
  children,
  compact = false,
}: {
  children: ReactNode;
  compact?: boolean;
}) => (
  <div className="relative -mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mask-fade-edges">
    <div
      className={`absolute inset-x-4 top-3 -z-10 rounded-full bg-france-700/10 blur-3xl sm:inset-x-10 ${
        compact ? "h-32" : "h-52"
      }`}
    />
    {children}
  </div>
);

export default TrendingSection;
