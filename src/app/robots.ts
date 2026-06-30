import { MetadataRoute } from "next";

const baseUrl = "https://iptv-amsterdam.store";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Primary rule — allow all legitimate bots to crawl content pages.
        // Technical artifacts, API endpoints, and admin paths are excluded
        // to preserve crawl budget for content that ranks.
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          // Generated image routes (opengraph / app icon API)
          "/icon.png",
          "/apple-icon.png",
          // Next.js internal not-found page
          "/_not-found",
        ],
      },
      // Block high-volume scrapers that waste crawl budget without indexing.
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
      {
        userAgent: "DotBot",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
      {
        userAgent: "BLEXBot",
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
