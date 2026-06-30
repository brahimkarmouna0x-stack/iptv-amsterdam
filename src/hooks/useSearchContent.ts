"use client";
import { useState, useEffect, useRef } from "react";
import { type Trending } from "@/constants/trending-data";
import {
  type TMDBItem,
  TMDB_API_KEY,
  TMDB_BASE_URL,
  IMAGE_BASE_URL,
  FALLBACK_IMAGE,
} from "@/lib/tmdb";

const mapSearchItem = (item: TMDBItem, type: "movies" | "series") => ({
  id: item.id,
  title: item.title || item.name || "Unbekannt",
  quality: "4K",
  genre: type === "movies" ? "Film" : "Serie",
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

/**
 * Debounced TMDB multi-search hook.
 * Uses AbortController to cancel in-flight requests on query change.
 * Returns empty results when searchQuery is empty.
 * Fully independent — no coupling to trending/live/sports data.
 */
export const useSearchContent = () => {
  const [internalSearchContent, setInternalSearchContent] = useState<
    Trending[]
  >([]);
  const [internalIsSearching, setInternalIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchContent = searchQuery.trim() ? internalSearchContent : [];
  const isSearching = searchQuery.trim() ? internalIsSearching : false;

  // Track mounted state to prevent state updates after unmount
  const mountedRef = useRef(true);

  // Search Logic (Debounced + AbortController)
  useEffect(() => {
    mountedRef.current = true;

    if (!searchQuery.trim()) {
      return;
    }

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      setInternalIsSearching(true);
      try {
        const res = await fetch(
          `${TMDB_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(searchQuery)}&language=nl-NL`,
          { signal: controller.signal },
        );
        const data = (await res.json()) as { results: TMDBItem[] };
        const mappedResults = (data.results || [])
          .filter(
            (item: TMDBItem) =>
              item.media_type !== "person" && item.poster_path,
          )
          .map((item: TMDBItem) =>
            mapSearchItem(
              item,
              item.media_type === "movie" ? "movies" : "series",
            ),
          );
        if (mountedRef.current) {
          setInternalSearchContent(mappedResults as Trending[]);
        }
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        console.error("Search failed:", err);
      } finally {
        if (mountedRef.current) {
          setInternalIsSearching(false);
        }
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [searchQuery]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return {
    searchContent,
    isSearching,
    searchQuery,
    setSearchQuery,
  };
};
