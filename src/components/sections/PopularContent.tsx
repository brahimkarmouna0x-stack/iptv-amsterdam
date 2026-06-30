"use client";
import { useMemo, Suspense, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { usePopularContent } from "@/hooks/usePopularContent";
import { useSearchContent } from "@/hooks/useSearchContent";
import { FilterBar } from "./popular/FilterBar";
import { BrowseCard } from "./popular/BrowseCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { type Trending } from "@/constants/trending-data";

import { ArrowLeft, Search, Loader2 } from "lucide-react";

const ContentDetailsModal = dynamic(
  () =>
    import("./popular/ContentDetailsModal").then(
      (mod) => mod.ContentDetailsModal,
    ),
  { ssr: false },
);

type ContentType = "all" | "movies" | "series" | "lives" | "sports";

const CONTENT_TYPES: ContentType[] = [
  "all",
  "movies",
  "series",
  "lives",
  "sports",
];

const PopularContentInner = () => {
  const searchParams = useSearchParams();
  const {
    trendingContent,
    liveContent,
    sportsContent,
    loading,
    loadingMore,
    loadMore,
    hasMore,
  } = usePopularContent();

  const { searchContent, isSearching, searchQuery, setSearchQuery } =
    useSearchContent();

  const loadMoreRef = useRef<HTMLDivElement>(null);

  const paramType = searchParams.get("type");
  const initialType =
    paramType && CONTENT_TYPES.includes(paramType as ContentType)
      ? (paramType as ContentType)
      : "all";
  const initialGenre = searchParams.get("genre") || "Alle";

  const [activeType, setActiveType] = useState<ContentType>(initialType);
  const [activeGenre, setActiveGenre] = useState(initialGenre);
  const [sortBy, setSortBy] = useState<"popularity" | "rating" | "newest">(
    "popularity",
  );
  const [selectedItem, setSelectedItem] = useState<Trending | null>(null);

  const genres = useMemo(() => {
    const currentData = searchQuery
      ? searchContent
      : [...trendingContent, ...liveContent, ...sportsContent];
    const allGenres = currentData.map((item) => item.genre);
    return ["Alle", ...Array.from(new Set(allGenres))];
  }, [searchQuery, searchContent, trendingContent, liveContent, sportsContent]);

  const filteredContent = useMemo(() => {
    let source: Trending[] = [];

    if (searchQuery.trim().length > 1) {
      const matchedLives = liveContent.filter((i) =>
        i.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      const matchedSports = sportsContent.filter((i) =>
        i.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      source = [...searchContent, ...matchedLives, ...matchedSports];
    } else {
      source = [...trendingContent, ...liveContent, ...sportsContent];
    }

    const result = source.filter((item) => {
      const matchesType = activeType === "all" || item.type === activeType;
      const matchesGenre = activeGenre === "Alle" || item.genre === activeGenre;
      return matchesType && matchesGenre;
    });

    return result.sort((a, b) => {
      if (sortBy === "popularity")
        return (b.popularity || 0) - (a.popularity || 0);
      if (sortBy === "rating")
        return (Number(b.rating) || 0) - (Number(a.rating) || 0);
      if (sortBy === "newest")
        return (Number(b.date) || 0) - (Number(a.date) || 0);
      return 0;
    });
  }, [
    searchQuery,
    activeType,
    activeGenre,
    sortBy,
    trendingContent,
    searchContent,
    liveContent,
    sportsContent,
  ]);

  // Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore && !searchQuery) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore, hasMore, loadingMore, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-12 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blanc-500 hover:text-blanc-50 transition-colors mb-4 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Terug naar de homepagina
            </Link>
            <h1 className="font-display font-black text-4xl sm:text-6xl text-blanc-50 mb-4 leading-tight">
              Populaire <span className="text-gradient">content</span>
            </h1>
            <p className="text-blanc-400 max-w-xl">
              Ontdek onze uitgebreide bibliotheek met premium films, series en
              live tv-kanalen van over de hele wereld.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            {isSearching ? (
              <div className="absolute left-5 top-1/2 -translate-y-1/2">
                <div className="w-5 h-5 border-2 border-france-400/30 border-t-france-400 rounded-full animate-spin"></div>
              </div>
            ) : (
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-blanc-500 group-focus-within:text-france-400 transition-colors"
                size={20}
              />
            )}
            <input
              type="text"
              placeholder="Zoek films, series of genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl glass text-blanc-50 placeholder-blanc-600 border border-blanc-50/10 focus:outline-none focus:border-france-400/50 transition-all outline-hidden"
            />
          </div>
        </div>
      </div>

      <FilterBar
        activeType={activeType}
        setActiveType={setActiveType}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        genres={genres}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {loading ? (
        <PopularContentSkeleton />
      ) : filteredContent.length > 0 ? (
        <>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {filteredContent.map((item, idx) => (
              <BrowseCard
                key={item.id != null ? `${item.id}` : `${item.type}-${item.title}-${idx}`}
                item={item}
                index={idx}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
          
          {/* Infinite Scroll Loader */}
          <div ref={loadMoreRef} className="py-12 flex justify-center">
            {hasMore && !searchQuery && (
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="animate-spin text-france-400" size={32} />
                <p className="text-blanc-500 text-sm font-bold uppercase tracking-widest">Meer content laden...</p>
              </div>
            )}
            {!hasMore && !searchQuery && (
              <p className="text-blanc-600 text-sm font-bold uppercase tracking-widest">U heeft het einde bereikt</p>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-20 sm:py-24 glass rounded-2xl border border-blanc-50/5 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-blanc-50/5 flex items-center justify-center mx-auto mb-6 text-blanc-600">
            <Search size={32} />
          </div>
          <h3 className="text-xl font-bold text-blanc-50 mb-2">
            Geen resultaten gevonden
          </h3>
          <p className="text-blanc-400">
            Probeer een andere zoekterm of pas de filters aan.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveType("all");
              setActiveGenre("Alle");
            }}
            className="mt-6 text-france-400 font-bold hover:underline cursor-pointer"
          >
            Filters resetten
          </button>
        </div>
      )}

      <ContentDetailsModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

const PopularContentSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="aspect-2/3 rounded-2xl border border-blanc-50/5 bg-blanc-50/5 p-4 flex flex-col gap-4"
      >
        <Skeleton className="h-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    ))}
  </div>
);

export default function PopularContent() {
  return (
    <section className="min-h-screen bg-france-950 pt-28 sm:pt-32 pb-20 sm:pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-france-400/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rouge-400/10 blur-[120px] rounded-full -z-10" />
      <Suspense fallback={<PopularContentSkeleton />}>
        <PopularContentInner />
      </Suspense>
    </section>
  );
}
