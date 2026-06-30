"use client";
import { useState, useEffect, useCallback } from "react";
import { type Trending, trendingNow } from "@/constants/trending-data";
import {
  type TMDBItem,
  type ChannelLogo,
  type SportsEvent,
  TMDB_API_KEY,
  SPORTSDB_API_KEY,
  TMDB_BASE_URL,
  IMAGE_BASE_URL,
  FALLBACK_IMAGE,
} from "@/lib/tmdb";

const genreMap = new Map<number, string>();

const fetchGenres = async () => {
  if (genreMap.size > 0 || !TMDB_API_KEY) return;
  try {
    const [mG, sG] = await Promise.all([
      fetch(
          `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=nl-NL`,
        ),
        fetch(
          `${TMDB_BASE_URL}/genre/tv/list?api_key=${TMDB_API_KEY}&language=nl-NL`,
      ),
    ]);

    const movieGenres = mG.ok ? await mG.json() : { genres: [] };
    const tvGenres = sG.ok ? await sG.json() : { genres: [] };

    const allGenres = [
      ...(movieGenres.genres || []),
      ...(tvGenres.genres || []),
    ];
    allGenres.forEach((g: { id: number; name: string }) => {
      if (g && g.id && g.name) genreMap.set(g.id, g.name);
    });
  } catch {
    // Genre fetch is non-critical — fall through
  }
};

const mapTMDBItem = (item: TMDBItem, type: "movies" | "series") => ({
  id: item.id,
  title: item.title || item.name || "Unbekannt",
  quality: "4K",
  genre:
    genreMap.get(item.genre_ids?.[0] ?? -1) ||
    (type === "movies" ? "Film" : "Serie"),
  rating: item.vote_average ?? 0,
  popularity: item.popularity,
  date: item.release_date || item.first_air_date
    ? new Date(item.release_date || item.first_air_date!).getTime()
    : 0,
  image: item.poster_path
    ? `${IMAGE_BASE_URL}${item.poster_path}`
    : FALLBACK_IMAGE,
  backdrop: item.backdrop_path
    ? `${IMAGE_BASE_URL.replace("w500", "original")}${item.backdrop_path}`
    : "",
  overview: item.overview,
  type,
});

const mapSportsItem = (event: SportsEvent) => ({
  id: event.idEvent,
  title: event.strEvent,
  quality: event.strStatus === "Started" ? "LIVE" : "HD",
  genre: event.strSport,
  rating: 8.0,
  popularity: 80,
  date: event.dateEvent
    ? new Date(event.dateEvent).getTime()
    : Date.now(),
  image: event.strThumb,
  type: "sports" as const,
});

export const usePopularContent = () => {
  const [trendingContent, setTrendingContent] = useState<Trending[]>([]);
  const [liveContent, setLiveContent] = useState<Trending[]>([]);
  const [sportsContent, setSportsContent] = useState<Trending[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [moviePage, setMoviePage] = useState(1);
  const [tvPage, setTvPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Initial Fetch
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        await fetchGenres();

        const [mRes, sRes, lRes, sportsRes] = await Promise.all([
          fetch(
            `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=nl-NL&sort_by=popularity.desc&page=1`,
            { signal: controller.signal },
          ),
          fetch(
            `${TMDB_BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&language=nl-NL&sort_by=popularity.desc&page=1`,
            { signal: controller.signal },
          ),
          fetch("https://iptv-org.github.io/api/logos.json", {
            signal: controller.signal,
          }),
          fetch(
            `https://www.thesportsdb.com/api/v1/json/${SPORTSDB_API_KEY}/eventslive.php`,
            { signal: controller.signal },
          ),
        ]);

        const movies = mRes.ok ? await mRes.json() : { results: [] };
        const series = sRes.ok ? await sRes.json() : { results: [] };
        const logos = lRes.ok ? await lRes.json() : [];

        let sportsData: { events: SportsEvent[] } = { events: [] };
        if (sportsRes.ok) {
          const text = await sportsRes.text();
          try {
            sportsData = JSON.parse(text);
          } catch {
            console.warn("Sports API returned invalid JSON, skipping...");
          }
        }

        const mappedMovies = (movies.results || []).map((item: TMDBItem) =>
          mapTMDBItem(item, "movies"),
        );
        const mappedSeries = (series.results || []).map((item: TMDBItem) =>
          mapTMDBItem(item, "series"),
        );

        const mappedLives = (Array.isArray(logos) ? logos : [])
          .filter(
            (item: ChannelLogo) => item && item.channel,
          )
          .slice(0, 500)
          .map((item: ChannelLogo) => {
            const cleanTitle = item.channel
              .split(".")[0]
              .replace(/([A-Z])/g, " $1")
              .trim();
            return {
              title: cleanTitle,
              quality: "LIVE",
              genre: "Live TV",
              rating: 8.5,
              popularity: 90,
              date: Date.now(),
              image: item.url || FALLBACK_IMAGE,
              type: "lives" as const,
            };
          });

        const mappedSports = (sportsData.events || [])
          .filter(
            (event: SportsEvent) => event && event.strThumb,
          )
          .map((event: SportsEvent) => mapSportsItem(event)) as Trending[];

        setTrendingContent([...mappedMovies, ...mappedSeries] as Trending[]);
        setLiveContent(mappedLives as Trending[]);
        setSportsContent(mappedSports);
        setMoviePage(2);
        setTvPage(2);
      } catch (error) {
        if (
          error instanceof DOMException &&
          error.name === "AbortError"
        )
          return;

        console.error("Initial fetch failed", error);
        // Fall back to static trending data
        setTrendingContent(
          trendingNow
            .filter((i) => i.type !== "lives")
            .map((i) => ({
              ...i,
              rating: Number(i.rating) || 8.0,
              popularity: 50,
              date: Date.now(),
            })) as Trending[],
        );
        setLiveContent(
          trendingNow
            .filter((i) => i.type === "lives")
            .map((i) => ({
              ...i,
              rating: 8.5,
              popularity: 10,
              date: Date.now(),
            })) as Trending[],
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    try {
      const [mRes, sRes] = await Promise.all([
        fetch(
          `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=nl-NL&sort_by=popularity.desc&page=${moviePage}`,
        ),
        fetch(
          `${TMDB_BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&language=nl-NL&sort_by=popularity.desc&page=${tvPage}`,
        ),
      ]);

      const movies = mRes.ok ? await mRes.json() : { results: [] };
      const series = sRes.ok ? await sRes.json() : { results: [] };

      if (
        (!movies.results || movies.results.length === 0) &&
        (!series.results || series.results.length === 0)
      ) {
        setHasMore(false);
        return;
      }

      const mappedMovies = (movies.results || []).map((item: TMDBItem) =>
        mapTMDBItem(item, "movies"),
      );
      const mappedSeries = (series.results || []).map((item: TMDBItem) =>
        mapTMDBItem(item, "series"),
      );

      setTrendingContent(
        (prev) =>
          [...prev, ...mappedMovies, ...mappedSeries] as Trending[],
      );
      setMoviePage((prev) => prev + 1);
      setTvPage((prev) => prev + 1);
    } catch (error) {
      console.error("Load more failed", error);
    } finally {
      setLoadingMore(false);
    }
  }, [moviePage, tvPage, loadingMore, hasMore]);

  return {
    trendingContent,
    liveContent,
    sportsContent,
    loading,
    loadingMore,
    loadMore,
    hasMore,
  };
};
