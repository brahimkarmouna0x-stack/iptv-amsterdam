"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Play, PlayCircle, Star, X } from "lucide-react";
import { type Trending } from "@/constants/trending-data";
import { TMDB_API_KEY, TMDB_BASE_URL } from "@/lib/tmdb";

interface ContentDetailsModalProps {
  item: Trending | null;
  onClose: () => void;
}

export const ContentDetailsModal = ({
  item,
  onClose,
}: ContentDetailsModalProps) => {
  const itemId = item?.id;
  const itemType = item?.type;
  const itemKey = itemId && itemType ? `${itemType}-${itemId}` : null;
  const [trailer, setTrailer] = useState<{
    itemKey: string;
    url: string;
  } | null>(null);
  const trailerUrl = trailer?.itemKey === itemKey ? trailer.url : null;

  // Stable ref for onClose to avoid effect re-registration
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Fetch trailer with AbortController to prevent race conditions
  useEffect(() => {
    // Reset trailer whenever item changes (clean slate before fetching)
    if (!itemId || itemType === "lives" || itemType === "sports") {
      return;
    }

    const controller = new AbortController();
    const currentKey = `${itemType}-${itemId}`;

    const fetchTrailer = async () => {
      try {
        const type = itemType === "movies" ? "movie" : "tv";
        const res = await fetch(
          `${TMDB_BASE_URL}/${type}/${itemId}/videos?api_key=${TMDB_API_KEY}`,
          { signal: controller.signal },
        );
        const data = await res.json();
        const found = data.results?.find(
          (video: { type: string; site: string; key: string }) =>
            video.type === "Trailer" && video.site === "YouTube",
        );

        if (found) {
          setTrailer({
            itemKey: currentKey,
            url: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(found.key)}?autoplay=1`,
          });
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        if (process.env.NODE_ENV !== 'production') console.error("Trailer fetch failed:", err);
      }
    };

    fetchTrailer();

    return () => {
      controller.abort();
    };
  }, [itemId, itemType]);

  // Stable escape-listener: never re-registers, always reads latest onClose
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-france-950/80 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2.5rem] border border-blanc-50/10 glass-strong shadow-2xl animate-modal-enter">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full glass text-blanc-50 transition-colors hover:bg-blanc-50/10"
          aria-label="Details sluiten"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="flex flex-col lg:flex-row">
          <div className="relative aspect-video w-full bg-france-950 lg:w-3/5">
            {trailerUrl ? (
              <iframe
                src={trailerUrl}
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-autoplay allow-presentation"
              />
            ) : (
              <div className="relative h-full w-full">
                <Image
                  src={item.backdrop || item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  quality={55}
                />
                <div className="absolute inset-0 bg-linear-to-t from-france-950 via-france-950/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 text-center text-blanc-50">
                    <PlayCircle
                      size={64}
                      className="mx-auto mb-4 text-france-500/80"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-bold uppercase tracking-widest text-blanc-400">
                      Geen trailer beschikbaar
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex w-full flex-col justify-between p-8 lg:w-2/5 lg:p-10">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-full bg-france-500 px-3 py-1 text-[10px] font-black uppercase text-blanc-50">
                  {item.quality}
                </span>
                <span className="rounded-full bg-blanc-50/10 px-3 py-1 text-[10px] font-black uppercase text-blanc-50">
                  {item.genre}
                </span>
              </div>
              <h2 className="mb-4 font-display text-3xl font-bold leading-tight text-blanc-50 sm:text-4xl">
                {item.title}
              </h2>
              <div className="mb-8 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 font-bold text-[#F4C430]">
                  <Star size={16} fill="currentColor" aria-hidden="true" />
                  <span className="text-blanc-50">{item.rating}</span>
                </div>
                <div className="font-bold text-blanc-400">
                  {item.date ? new Date(item.date).getFullYear() : "2024"}
                </div>
              </div>
              <p className="mb-10 text-base leading-relaxed text-blanc-400">
                {item.overview ||
                  "Geen beschrijving beschikbaar voor deze titel. Geniet van een premium kijkervaring met IPTV Amsterdam."}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-rouge-500 py-4 text-lg font-bold text-blanc-50 shadow-lg shadow-rouge-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play size={20} fill="currentColor" aria-hidden="true" />
                Bekijken
              </button>
              <button
                type="button"
                className="w-full rounded-2xl py-4 glass font-bold text-blanc-50 transition-colors hover:bg-blanc-50/10"
              >
                Toevoegen aan verlanglijst
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
