export interface Trending {
  title: string;
  quality: string;
  genre: string;
  rating: string | number;
  image: string;
  type: "movies" | "series" | "lives" | "sports";
  popularity?: number;
  date?: Date | number;
  id?: number | string;
  overview?: string;
  backdrop?: string;
}

export const trendingNow: Trending[] = [
  {
    title: "Game of Thrones",
    quality: "4K",
    genre: "Fantasy",
    rating: "9.2",
    type: "series",
    image: "/images-/movies/10.webp",
    backdrop: "/images-/movies/10.webp",
  },
  {
    title: "Vikings",
    quality: "4K",
    genre: "Action",
    rating: "8.5",
    type: "series",
    image: "/images-/movies/11.webp",
    backdrop: "/images-/movies/11.webp",
  },
  {
    title: "The Walking Dead",
    quality: "4K",
    genre: "Horror",
    rating: "8.2",
    type: "series",
    image: "/images-/movies/14.webp",
    backdrop: "/images-/movies/14.webp",
  },
  {
    title: "Dune: Part Two",
    quality: "8K",
    genre: "Sci-Fi",
    rating: "9.0",
    type: "movies",
    image: "/images-/movies/15.webp",
    backdrop: "/images-/movies/15.webp",
  },
  {
    title: "Oppenheimer",
    quality: "4K",
    genre: "Drama",
    rating: "8.9",
    type: "movies",
    image: "/images-/movies/16.webp",
    backdrop: "/images-/movies/16.webp",
  },
  {
    title: "Succession",
    quality: "4K",
    genre: "Drama",
    rating: "8.9",
    type: "series",
    image: "/images-/movies/4-4.webp",
    backdrop: "/images-/movies/4-4.webp",
  },
  {
    title: "John Wick: Chapter 4",
    quality: "4K",
    genre: "Action",
    rating: "8.8",
    type: "movies",
    image: "/images-/movies/4.webp",
    backdrop: "/images-/movies/4.webp",
  },
  {
    title: "The Last of Us",
    quality: "4K",
    genre: "Drama",
    rating: "8.8",
    type: "series",
    image: "/images-/movies/9.webp",
    backdrop: "/images-/movies/9.webp",
  },
  {
    title: "Stranger Things",
    quality: "4K",
    genre: "Sci-Fi",
    rating: "8.7",
    type: "series",
    image: "/images-/movies/6.webp",
    backdrop: "/images-/movies/6.webp",
  },
  {
    title: "Sky Sports 1",
    quality: "4K",
    genre: "Sport",
    rating: "Live",
    type: "lives",
    image: "/images-/sa.webp",
  },
  {
    title: "BBC News",
    quality: "HD",
    genre: "Nieuws",
    rating: "Live",
    type: "lives",
    image: "/images-/bbc.webp",
  },
  {
    title: "HBO Max",
    quality: "4K",
    genre: "Films",
    rating: "Live",
    type: "lives",
    image: "/images-/hbomax.webp",
  },
  {
    title: "Disney+",
    quality: "4K",
    genre: "Familie",
    rating: "Live",
    type: "lives",
    image: "/images-/disney.webp",
  },
  {
    title: "BeIN Sports",
    quality: "4K",
    genre: "Sport",
    rating: "Live",
    type: "lives",
    image: "/images-/bein-sport.webp",
  },
  {
    title: "100 NL TV",
    quality: "HD",
    genre: "Muziek",
    rating: "Live",
    type: "lives",
    image: "/images-/nl.webp",
  },
];
