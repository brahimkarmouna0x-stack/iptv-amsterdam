/** Shared TMDB API types and constants for client-side fetching. */

export interface TMDBItem {
  id: number;
  title?: string;
  name?: string;
  genre_ids?: number[];
  vote_average?: number;
  popularity?: number;
  release_date?: string;
  first_air_date?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string;
  media_type?: string;
}

export interface ChannelLogo {
  channel: string;
  url?: string;
}

export interface SportsEvent {
  idEvent: string;
  strEvent: string;
  strStatus?: string;
  strSport?: string;
  dateEvent?: string;
  strThumb?: string;
}

export const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const SPORTSDB_API_KEY = process.env.NEXT_PUBLIC_SPORTSDB_API_KEY ?? "123";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=500";
