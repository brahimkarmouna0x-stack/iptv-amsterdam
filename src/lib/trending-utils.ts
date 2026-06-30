import { trendingNow, type Trending as TrendingItem } from "@/constants/trending-data";

export type { TrendingItem };

/** Compile-time filtered trending data. Not a hook — pure utility. */
export const trendingData = {
  topSeries: trendingNow.filter((item) => item.type === "series"),
  topMovies: trendingNow.filter((item) => item.type === "movies"),
  liveChannels: trendingNow.filter((item) => item.type === "lives"),
  liveSports: trendingNow.filter((item) => item.type === "sports"),
};
