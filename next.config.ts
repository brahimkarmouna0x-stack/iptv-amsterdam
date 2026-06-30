import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable the Next.js 16 Cache Components system — replaces unstable_cache +
  // route-segment `revalidate` with the `use cache` / cacheLife / cacheTag API.
  cacheComponents: true,
  // Optimize images with AVIF and WebP formats
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Quality values used across components (next/image only generates these)
    qualities: [45, 50, 55, 60, 62, 68, 70, 72, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "api.themoviedb.org",
      },
    ],
  },

  // Enable React strict mode for development
  reactStrictMode: true,

  // Compress responses with gzip
  compress: true,

  // Remove console.log in production
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },

  // Consolidate legacy /iptv-gids/* paths onto the primary root landing pages
  // (canonical de-duplication — 308 so search engines transfer ranking signals).
  async redirects() {
    return [
      {
        source: "/iptv-gids/iptv-nederland",
        destination: "/iptv-nederland",
        permanent: true,
      },
      {
        source: "/iptv-gids/iptv-abonnement",
        destination: "/iptv-abonnement",
        permanent: true,
      },
      {
        source: "/iptv-gids/iptv-smarters-pro",
        destination: "/iptv-smarters-pro",
        permanent: true,
      },
    ];
  },

  // Add security and performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
