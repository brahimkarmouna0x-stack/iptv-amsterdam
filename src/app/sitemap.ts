import { MetadataRoute } from "next";
import { IPTV_GERMAN_PAGES_V2, PROMOTED_TO_ROOT } from "@/content/iptv-german-pages";

/** Stable date for legal/about pages that rarely change. */
const LEGAL_LAST_MOD = new Date("2026-01-15");

/**
 * Last-modified date for actively maintained content pages.
 * Using a fixed build date prevents lastModified churn on every request
 * while still signalling to Google that these pages are current.
 */
const CONTENT_LAST_MOD = new Date("2026-07-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iptv-amsterdam.store";

  const staticRoutes: MetadataRoute.Sitemap = [
    // ── Money pages / primary landing pages (highest ranking priority) ──────
    {
      url: `${baseUrl}`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/iptv-kopen`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/iptv-abonnement`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/iptv-aanbieder`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/iptv-nederland`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // ── Hub / guide pages ───────────────────────────────────────────────────
    {
      url: `${baseUrl}/iptv-gids`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iptv-smarters-pro`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // ── Support pages ───────────────────────────────────────────────────────
    {
      url: `${baseUrl}/support`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support/guides`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support/contact`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support/status`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.4,
    },
    // ── Content / showcase pages ────────────────────────────────────────────
    {
      url: `${baseUrl}/popular`,
      lastModified: CONTENT_LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    // ── About / legal pages ─────────────────────────────────────────────────
    {
      url: `${baseUrl}/over-ons`,
      lastModified: LEGAL_LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: LEGAL_LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: LEGAL_LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: LEGAL_LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // Per-slug priority overrides for high-value vault pages.
  const VAULT_PRIORITY: Record<string, number> = {
    "iptv-abonnement": 0.9,
    "abonnement-iptv": 0.9,
    iptv: 0.8,
    "iptv-smarters-pro": 0.8,
  };

  // All IPTV vault pages — skip slugs that 308-redirect to root-level pages.
  const vaultPages: MetadataRoute.Sitemap = IPTV_GERMAN_PAGES_V2.filter(
    (page) => !PROMOTED_TO_ROOT[page.slug],
  ).map((page) => ({
    url: page.canonicalUrl.replace("https://iptv-amsterdam.store", baseUrl),
    lastModified: new Date(page.updatedAt),
    changeFrequency: "weekly",
    priority: VAULT_PRIORITY[page.slug] ?? 0.7,
  }));

  return [...staticRoutes, ...vaultPages];
}
