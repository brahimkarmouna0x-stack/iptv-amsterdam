import { absoluteUrl, OG_IMAGE } from "@/lib/seo";

// ═════════════════════════════════════════════════════════════════════════════
//  PHASE 2 — RICH PAGE SCHEMA
//  ---------------------------------------------------------------------------
//  This is the new type system that the rebuilt dynamic route + PageRenderer
//  (Phase 4) and the section component library (Phase 6) consume. It is added
//  ALONGSIDE the legacy `IptvGermanPage`/`Vault*` types so the app keeps
//  compiling during the migration; the legacy types below are removed once the
//  route is switched over to `IPTV_GERMAN_PAGES` of type `IPTVPage[]`.
//
//  Design notes:
//   • `metaTitle` is the FINAL <title> string (keyword-first, brand included,
//     ≤60 chars) and is emitted via `title.absolute` to avoid the root layout's
//     `%s | IPTV Amsterdam` template double-suffixing the brand.
//   • URL-bearing fields (`canonicalUrl`, `ogImage`, hreflang values) are
//     absolute and built from `SITE.url` in `@/lib/seo`.
//   • `sections` is a discriminated union rendered by a switch in PageRenderer;
//     each `type` maps to one lazy-loaded section component.
// ═════════════════════════════════════════════════════════════════════════════

export type PageLanguage = "nl" | "en";

/** Search intent — drives the section mix and copy a page receives. */
export type PageIntent =
  | "general" // broad informational ("was ist iptv")
  | "guide" // how-to / informational deep-dive
  | "app" // player / app pages (smarters, tivimate, …)
  | "device" // boxes, smart TV, receivers
  | "subscription" // commercial: abos, prices, buying
  | "provider" // choosing/comparing providers
  | "legal" // legality, fines, risks
  | "playlist" // m3u / playlist / free
  | "quality" // 4K / bitrate / performance
  | "landing"; // high-intent commercial landing

/** schema.org type a page emits as JSON-LD (see Phase 4 `JsonLd`). */
export type StructuredDataType =
  | "FAQPage"
  | "Article"
  | "Product"
  | "BreadcrumbList"
  | "WebPage";

export type Breadcrumb = { label: string; href: string };

export type CTAButton = { label: string; href: string };

export type PageFaq = { question: string; answer: string };

export type InternalLink = {
  label: string;
  href: string;
  description?: string;
};

// ── Section payload sub-types ────────────────────────────────────────────────

/** A single feature card. `icon` is a lucide-react icon name. */
export type Feature = {
  icon?: string;
  title: string;
  description: string;
};

export type PricingTier = {
  name: string;
  price: string; // formatted incl. currency, e.g. "12,99 €"
  period?: string; // e.g. "/ Monat"
  description?: string;
  features: string[];
  cta: CTAButton;
  highlighted?: boolean; // "Beliebteste" tier
  badge?: string;
};

/** A comparison row. Each value lines up with `ComparisonSection.columns`. */
export type ComparisonRow = {
  label: string;
  values: (boolean | string)[];
};

export type DevicePlatform =
  | "android"
  | "ios"
  | "smart-tv"
  | "browser"
  | "box"
  | "windows"
  | "other";

export type DeviceCard = {
  name: string;
  icon?: string;
  platform: DevicePlatform;
  steps: number; // number of setup steps
  href?: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Review = {
  author: string;
  country?: string; // label or emoji flag, e.g. "🇩🇪"
  rating: number; // 1–5
  text: string;
};

export type ChannelCategory = {
  name: string;
  count?: number;
  examples: string[];
};

// ── Discriminated union of renderable sections ───────────────────────────────
export type PageSection =
  | { type: "richText"; heading?: string; html: string }
  | {
      type: "features";
      heading?: string;
      subheading?: string;
      items: Feature[];
    }
  | {
      type: "pricing";
      heading?: string;
      subheading?: string;
      tiers: PricingTier[];
    }
  | {
      type: "comparison";
      heading?: string;
      subheading?: string;
      columns: string[];
      rows: ComparisonRow[];
    }
  | {
      type: "devices";
      heading?: string;
      subheading?: string;
      list: DeviceCard[];
    }
  | { type: "howItWorks"; heading?: string; subheading?: string; steps: Step[] }
  | {
      type: "testimonials";
      heading?: string;
      subheading?: string;
      reviews: Review[];
    }
  | {
      type: "channelList";
      heading?: string;
      subheading?: string;
      categories: ChannelCategory[];
    }
  | { type: "faq"; heading?: string; items: PageFaq[] }
  | {
      type: "cta";
      heading: string;
      text?: string;
      cta: CTAButton;
      variant: "primary" | "secondary";
    };

export type PageSectionType = PageSection["type"];

export type HeroBlock = {
  headline: string; // H1 — contains the exact-match primary keyword
  subheadline: string;
  cta: CTAButton;
  badgeTags: string[]; // 3–4 trust signals, e.g. ["4K/8K", "7-Tage Test"]
  background?: string; // optional hero background image (absolute or /public)
};

/** The rebuilt page model. Replaces the legacy `IptvGermanPage` after Phase 4. */
export type IPTVPage = {
  slug: string;
  keyword: string; // primary keyword (used for search index + labels)
  lang: PageLanguage;
  intent: PageIntent;
  hreflang: { nl: string; en?: string };
  metaTitle: string; // final <title>, keyword-first, ≤60 chars
  metaDescription: string; // ≤155 chars, action verb + benefit + CTA
  canonicalUrl: string; // absolute
  ogImage: string; // absolute
  structuredData: StructuredDataType;
  breadcrumbs: Breadcrumb[];
  hero: HeroBlock;
  sections: PageSection[]; // ≥5 per page
  faq: PageFaq[]; // ≥5 per page
  internalLinks: InternalLink[]; // ≥4 per page
  updatedAt: string; // ISO date
};

// ═══════════════════════════ LEGACY TYPES (pre-migration) ═══════════════════
// Still consumed by the current route + VaultPageTemplate; removed in Phase 4.

export type VaultFaq = {
  question: string;
  answer: string;
};

export type VaultInternalLink = {
  label: string;
  href: string;
  description: string;
};

export type VaultSection = {
  heading: string;
  body: string;
  points: string[];
};

export type IptvGermanPage = {
  slug: string;
  keyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  introCopy: string;
  benefits: string[];
  sections: VaultSection[];
  faqs: VaultFaq[];
  internalLinks: VaultInternalLink[];
  language: "nl" | "en" | "fr" | "es" | "de";
  intent:
    | "general"
    | "netherlands"
    | "app"
    | "device"
    | "subscription"
    | "legal"
    | "playlist"
    | "quality"
    | "provider"
    | "adult";
  isCentered?: boolean;
  heroBg?: string;
};

const basePath = "/iptv-gids";

/**
 * Slugs that have been promoted to dedicated root-level landing pages. Any
 * internal link to one of these must point straight at the canonical root URL
 * so we never emit a 308 redirect hop (`/iptv-gids/x` → `/x`). External/stale
 * inbound links are still caught by the redirects in `next.config.ts`.
 */
export const PROMOTED_TO_ROOT: Record<string, string> = {
  "iptv-abonnement": "/iptv-abonnement",
  "iptv-smarters-pro": "/iptv-smarters-pro",
  "iptv-nederland": "/iptv-nederland",
  "iptv-kopen": "/iptv-kopen",
  "iptv-aanbieder": "/iptv-aanbieder",
};

/** Canonical in-app path for a vault slug (root URL for promoted slugs). */
export const iptvPath = (slug: string): string =>
  PROMOTED_TO_ROOT[slug] ?? `${basePath}/${slug}`;

export const IPTV_GERMAN_SLUGS = [
  "iptv",
  "iptv-ott-service",
  "iptv-service",
  "service-iptv",
  "meilleur-service-iptv",
  "iptv-services",
  "services-iptv",
  "iptv-smarters-pro",
  "abonnement-iptv",
  "iptv-abonnement",
  "iptv-boitier",
  "iptv-smart-player",
  "iptv-smarters",
  "boitier-iptv",
  "iptv-deutschland",
  "iptv-stream-player",
  "smart-iptv",
  "iptv-premium",
  "free-popular-iptv-playlist",
  "iptv-illegal",
  "iptv-pro",
  "iptv-smarter-pro",
  "iptv-smarters-pro-apk",
  "meilleur-iptv",
  "code-iptv",
  "france-iptv",
  "ip-smart-iptv",
  "iptv-smarters-player",
  "iptv-tv",
  "application-iptv",
  "code-iptv-gratuit-2025",
  "iptv-app",
  "iptv-application",
  "iptv-smarters-pro-gratuit",
  "smart-iptv-ip",
  "app-iptv",
  "code-downloader-iptv-gratuit-2025",
  "french-iptv",
  "iptv-gratuit",
  "iptv-smarter",
  "iptv-smarters-pro-android",
  "iptv-smarters-pro-windows",
  "iron-iptv",
  "setting-iptv",
  "xtream-iptv",
  "zen-iptv",
  "atlas-iptv",
  "comment-avoir-les-codes-iptv-gratuit",
  "telecharger-iptv-gratuit",
  "abonnement-iptv-12-mois-smart-tv",
  "atlas-pro-iptv",
  "decodeur-iptv-avec-code",
  "hot-iptv",
  "iptv-free-trial",
  "iptv-legal",
  "iptv-player",
  "lynk-iptv",
  "m3u-iptv",
  "meilleur-abonnement-iptv",
  "premium-iptv",
  "programme-tv-iptv",
  "pure-iptv",
  "set-iptv",
  "smarters-iptv-pro",
  "smartone-iptv",
  "xenon-iptv",
  "appli-iptv",
  "arcom-iptv",
  "code-iptv-smarters-pro-gratuit-2025",
  "ip-iptv",
  "iptv-4k",
  "iptv-laws",
  "iptv-prix",
  "iptv-smart-player-pro",
  "iptv-ss",
  "premium-iptv-tv",
  "programme-iptv",
  "smarter-iptv",
  "smarters-iptv",
  "test-iptv",
  "telecharger-iptv-smarters-pro-apk",
  "abonnement-iptv-france",
  "agence-iptv",
  "boitier-iptv-amazon",
  "box-iptv",
  "decodeur-iptv",
  "fournisseur-iptv",
  "iptv-amende",
  "iptv-atlas",
  "iptv-az",
  "iptv-box",
  "iptv-code",
  "iptv-gratuit-sans-code",
  "iptv-pas-cher",
  "iptv-smart",
  "iptv-smarter-player-pro",
  "iptv-smarters-lite",
  "iptv-test-gratuit",
  "iptv-with-4k",
  "king-iptv",
  "legality-of-iptv",
  "mario-iptv",
  "meilleur-application-iptv",
  "meilleurs-iptv",
  "net-iptv",
] as const;

type RawSlug = (typeof IPTV_GERMAN_SLUGS)[number];

const titleOverrides: Partial<Record<RawSlug, string>> = {
  iptv: "IPTV-gids voor stabiel en veilig streamen",
  "iptv-illegal": "Illegale IPTV: feiten, risico's en veilige alternatieven",
  "iptv-amende": "IPTV-boetes in Nederland: wat u moet weten",
  "free-popular-iptv-playlist":
    "IPTV-playlist veilig gebruiken: legaal en zonder risico streamen",
};

// Dutch display keywords for slugs whose raw tokens are French/English.
// The URL slug stays untouched (legacy SEO); only the rendered label/title is
// translated so every visible string on the site reads as Dutch.
const KEYWORD_DE: Partial<Record<string, string>> = {
  "iptv-ott-service": "IPTV OTT-diensten",
  "iptv-service": "Premium IPTV-dienst",
  "service-iptv": "Betrouwbare IPTV-dienst",
  "meilleur-service-iptv": "Beste IPTV-dienst Nederland",
  "iptv-services": "Top IPTV-diensten",
  "services-iptv": "IPTV-diensten vergelijken",
  "iptv-boitier": "IPTV-box kopen",
  "boitier-iptv": "Beste IPTV-box",
  "boitier-iptv-amazon": "IPTV-box Amazon",
  "box-iptv": "IPTV Android Box",
  "decodeur-iptv": "IPTV-ontvanger",
  "decodeur-iptv-avec-code": "IPTV-ontvanger inclusief code",
  "meilleur-iptv": "Beste IPTV Provider",
  "meilleurs-iptv": "Beste IPTV-diensten in 2025",
  "meilleur-abonnement-iptv": "Beste IPTV-abonnement 2025",
  "meilleur-application-iptv": "Beste IPTV-app voor Smart TV",
  "fournisseur-iptv": "IPTV-aanbieder Nederland",
  "agence-iptv": "Premium IPTV-bureau",
  "france-iptv": "IPTV Nederland aanbod",
  "french-iptv": "Nederlandstalige IPTV kanalen",
  "abonnement-iptv-france": "IPTV-abonnement Nederland kopen",
  "iptv-gratuit": "IPTV gratis proefperiode",
  "iptv-gratuit-sans-code": "IPTV gratis proberen",
  "iptv-test-gratuit": "IPTV test 24 uur",
  "iptv-free-trial": "IPTV free trial Nederland",
  "iptv-smarters-pro-gratuit": "IPTV Smarters Pro instellen",
  "code-iptv-gratuit-2025": "IPTV-codes 2025 info",
  "code-iptv-smarters-pro-gratuit-2025": "IPTV Smarters Pro activatie",
  "code-downloader-iptv-gratuit-2025": "IPTV downloader codes",
  "comment-avoir-les-codes-iptv-gratuit": "IPTV-codes legaal verkrijgen",
  "telecharger-iptv-gratuit": "IPTV apps downloaden",
  "telecharger-iptv-smarters-pro-apk": "IPTV Smarters Pro APK installatie",
  "iptv-prix": "IPTV prijzen vergelijken",
  "iptv-pas-cher": "Goedkoop IPTV abonnement",
  "programme-tv-iptv": "IPTV tv-gids & EPG",
  "programme-iptv": "IPTV-programma overzicht",
  "application-iptv": "Top IPTV-applicaties",
  "iptv-application": "Beste IPTV-applicatie",
  "appli-iptv": "IPTV-app installeren",
  "setting-iptv": "IPTV-instellingen configureren",
  "free-popular-iptv-playlist": "Populaire M3U IPTV-playlist",
  "iptv-laws": "IPTV-wetgeving in Nederland",
  "legality-of-iptv": "Is IPTV legaal?",
  "iptv-with-4k": "IPTV met 4K Ultra HD",
  "iptv-deutschland": "IPTV Nederland premium",
};

const formatKeyword = (slug: string): string =>
  KEYWORD_DE[slug] ??
  slug
    .replace(/-/g, " ")
    .replace(/\biptv\b/gi, "IPTV")
    .replace(/\b4k\b/gi, "4K")
    .replace(/\bdeutschland\b/gi, "Nederland")
    .replace(/\bnederland\b/gi, "Nederland")
    .replace(/\bkpn\b/gi, "KPN")
    .replace(/\bcz\b/gi, "CZ")
    .replace(/\bss\b/gi, "SS")
    .replace(/\big\b/gi, "IG")
    .replace(/\bm3u\b/gi, "M3U")
    .replace(/\bandroid\b/gi, "Android")
    .replace(/\bwindows\b/gi, "Windows")
    .replace(/\breddit\b/gi, "Reddit")
    .replace(/\bmytvonline\b/gi, "MYTVOnline")
    .replace(/\bswiss\b/gi, "Swiss")
    .replace(/\bosterreich\b/gi, "Österreich");

const titleCase = (value: string) =>
  value.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

const detectLanguage = (slug: string): IptvGermanPage["language"] => {
  if (slug.includes("aplicacion")) return "es";
  if (slug.includes("appli")) return "fr";
  if (
    slug.includes("bestes") ||
    slug.includes("bester") ||
    slug.includes("deutschland") ||
    slug.includes("german")
  )
    return "de";
  if (
    slug.includes("best-") ||
    slug.includes("top-rated") ||
    slug.includes("free")
  ) {
    return "en";
  }
  return "de";
};

const detectIntent = (slug: string): IptvGermanPage["intent"] => {
  if (
    slug.includes("illegaal") ||
    slug.includes("boete") ||
    slug.includes("illegal") ||
    slug.includes("amende") ||
    slug.includes("laws") ||
    slug.includes("legal")
  )
    return "legal";
  if (slug.includes("porn")) return "adult";
  if (
    slug.includes("playlist") ||
    slug.includes("m3u") ||
    slug.includes("gratis") ||
    slug.includes("gratuit") ||
    slug.includes("free")
  ) {
    return "playlist";
  }
  if (
    slug.includes("deutschland") ||
    slug.includes("german") ||
    slug.includes("nederland") ||
    slug.includes("dutch") ||
    slug.includes("kpn") ||
    slug.includes("nederlandse") ||
    slug.includes("france") ||
    slug.includes("french")
  ) {
    return "netherlands";
  }
  if (
    slug.includes("app") ||
    slug.includes("application") ||
    slug.includes("player") ||
    slug.includes("smarters") ||
    slug.includes("tivimate") ||
    slug.includes("smartone") ||
    slug.includes("smart-one") ||
    slug.includes("net-iptv") ||
    slug.includes("set-iptv") ||
    slug.includes("ss-iptv") ||
    slug.includes("flix") ||
    slug.includes("xtream") ||
    slug.includes("appli")
  ) {
    return "app";
  }
  if (
    slug.includes("box") ||
    slug.includes("kastje") ||
    slug.includes("amiko") ||
    slug.includes("boitier") ||
    slug.includes("decodeur")
  )
    return "device";
  if (slug.includes("4k")) return "quality";
  if (
    slug.includes("aanbieder") ||
    slug.includes("aanbieders") ||
    slug.includes("provider") ||
    slug.includes("suppliers") ||
    slug.includes("fournisseur") ||
    slug.includes("agence")
  ) {
    return "provider";
  }
  if (
    slug.includes("abonnement") ||
    slug.includes("abbonement") ||
    slug.includes("kopen") ||
    slug.includes("test") ||
    slug.includes("prix") ||
    slug.includes("pas-cher")
  ) {
    return "subscription";
  }
  return "general";
};

const languageAngle: Record<IptvGermanPage["language"], string> = {
  nl: "voor Nederlandstalige kijkers",
  en: "voor internationale kijkers",
  fr: "voor Nederlandstalige gebruikers",
  es: "voor Nederlandstalige gebruikers",
  de: "voor Nederlandstalige gebruikers",
};

const intentCopy: Record<
  IptvGermanPage["intent"],
  {
    label: string;
    promise: string;
    benefitSeed: string[];
    setup: string;
    safety: string;
  }
> = {
  general: {
    label: "IPTV-oriëntatie",
    promise:
      "een heldere manier om live-tv, films en series via internet te begrijpen",
    benefitSeed: [
      "duidelijke kanaalstructuur",
      "stabiele weergave",
      "snelle start op meerdere apparaten",
    ],
    setup:
      "Begin met uw apparaat, kies een betrouwbare speler en zorg dat uw netwerk stabiel genoeg is voor HD of 4K.",
    safety:
      "Gebruik alleen bronnen waarvoor u toestemming heeft en vermijd onbekende lijsten die rechten of privacy kunnen schenden.",
  },
  netherlands: {
    label: "Beste IPTV Nederland",
    promise:
      "een praktische gids voor lokale kanalen, regionale content en Nederlandstalige televisie",
    benefitSeed: [
      "focus op Nederlandse kanalen",
      "EPG in het Nederlands",
      "support afgestemd op lokale gewoonten",
    ],
    setup:
      "Let op Nederlandse kanaalgroepen, juiste tijdzones in de EPG en apps die goed werken op Smart-tv en Android TV.",
    safety:
      "Controleer altijd de herkomst van de content en kies transparante voorwaarden in plaats van anonieme beloften.",
  },
  app: {
    label: "App en speler",
    promise: "een soepele ervaring met heldere installatie, EPG en playlists",
    benefitSeed: [
      "M3U- en Xtream-ondersteuning",
      "prettige navigatie",
      "compatibel met gangbare spelers",
    ],
    setup:
      "Installeer de speler uit een betrouwbare store, voer uw gegevens zorgvuldig in en test de zaptijd, EPG en ondertiteling.",
    safety:
      "Bewaar uw inloggegevens veilig en download apps alleen uit betrouwbare bronnen.",
  },
  device: {
    label: "Apparaatconfiguratie",
    promise: "een handige oriëntatie voor boxen, ontvangers en tv-toestellen",
    benefitSeed: [
      "geoptimaliseerd voor de afstandsbediening",
      "4K-compatibele hardware",
      "stabiele kabel- of wifi-verbinding",
    ],
    setup:
      "Werk de firmware bij, gebruik indien mogelijk ethernet en kies een lichte speler die past bij de processor van uw apparaat.",
    safety:
      "Vermijd voorgeïnstalleerde boxen met obscure lijsten; dit kan gevaarlijk zijn en juridische risico's met zich meebrengen.",
  },
  subscription: {
    label: "Abonnementskeuze",
    promise:
      "een praktische manier om pakketten, proefperiodes en verwachtingen te vergelijken",
    benefitSeed: [
      "duidelijke looptijd",
      "geen verborgen voorwaarden",
      "hulp bij de activering",
    ],
    setup:
      "Vergelijk pakketlooptijd, gelijktijdige verbindingen, proefmogelijkheden en support voordat u betaalt.",
    safety:
      "Kies aanbieders die transparant zijn over voorwaarden, contactmogelijkheden en verantwoord gebruik.",
  },
  legal: {
    label: "Juridische context",
    promise: "neutrale uitleg over risico's, rechten en verantwoord streamen",
    benefitSeed: [
      "feitelijke uitleg",
      "geen illegale instructies",
      "focus op een veilige keuze",
    ],
    setup:
      "Controleer of een dienst de contentrechten bezit, lees de voorwaarden en wees voorzichtig met extreem goedkope aanbiedingen.",
    safety:
      "Deze pagina bevat algemene informatie en moedigt geen onbevoegde toegang tot kanalen of streams aan.",
  },
  playlist: {
    label: "Playlist-veiligheid",
    promise:
      "veilige informatie over M3U-lijsten zonder gehackte streams of dubieuze downloads",
    benefitSeed: [
      "uitleg over playlist-formaten",
      "privacyvriendelijke controle",
      "geen illegale Amsterdamlinks",
    ],
    setup:
      "Gebruik M3U alleen als formaat voor legitieme bronnen en test lijsten in een speler zonder persoonlijke gegevens te delen.",
    safety:
      "Wij publiceren geen gekraakte playlists en raden af om onbekende Amsterdamlinks te openen.",
  },
  quality: {
    label: "4K Amsterdam",
    promise: "tips over beeldkwaliteit, bitrate en netwerkstabiliteit",
    benefitSeed: [
      "focus op 4K en Full HD",
      "minder buffering",
      "realistische snelheidsverwachtingen",
    ],
    setup:
      "Gebruik een snelle verbinding, geschikte HDMI-kabels en een speler met hardware-decodering.",
    safety:
      "Maak kwaliteit niet tot enige criterium; betrouwbaarheid, rechten en support blijven belangrijk.",
  },
  provider: {
    label: "Aanbieder-oriëntatie",
    promise:
      "een evenwichtige aanpak voor de keuze van een aanbieder, zonder vooringenomenheid of marketing",
    benefitSeed: [
      "neutrale vergelijking",
      "servicecontrole",
      "transparantie van voorwaarden",
    ],
    setup:
      "Controleer de betrouwbaarheid van de aanbieder, contactmogelijkheden, beschikbaarheid van support en klantbeoordelingen voordat u zich abonneert.",
    safety:
      "Wees voorzichtig met aanbieders zonder bedrijfsinformatie, contactkanaal of duidelijke servicevoorwaarden.",
  },
  adult: {
    label: "Inhoud voor volwassenen",
    promise:
      "privacyvriendelijke informatie over filters, leeftijdsinstellingen en verantwoord kijken",
    benefitSeed: ["kinderslot", "privacy-instellingen", "bewuste kanaalkeuze"],
    setup:
      "Controleer of uw speler profielen, pincodebeveiliging en kanaalblokkering ondersteunt.",
    safety:
      "Zorg dat de content legaal beschikbaar is en blokkeer categorieën voor volwassenen voor minderjarigen.",
  },
};

const buildMetaDescription = (
  keyword: string,
  intent: IptvGermanPage["intent"],
  index: number,
) => {
  const copy = intentCopy[intent];
  return `${keyword}: ${copy.label.toLowerCase()} met praktische uitleg over installatie, veiligheid, compatibiliteit en beeldkwaliteit. IPTV Amsterdam gids ${index + 1}.`;
};

const createFaqs = (
  keyword: string,
  intent: IptvGermanPage["intent"],
  _language: IptvGermanPage["language"],
): VaultFaq[] => {
  const copy = intentCopy[intent];
  const localized =
    "De installatie hangt af van uw app, apparaat en de bron van de content.";

  return [
    {
      question: `Waar moet ik op letten bij ${keyword}?`,
      answer: `${copy.setup} Controleer ook de support, updates en of de dienst past bij uw dagelijkse kijkgewoonten.`,
    },
    {
      question: `Is ${keyword} geschikt voor 4K-Amsterdam?`,
      answer: `Ja, zolang uw apparaat, speler en internetverbinding dit ondersteunen. Voor 4K adviseren wij een stabiele verbinding en bij voorkeur ethernet voor vaste tv-installaties.`,
    },
    {
      question: `Hoe gebruik ik ${keyword} veilig?`,
      answer: `${copy.safety} ${localized}`,
    },
  ];
};

const relatedSlugsFor = (slug: string, intent: IptvGermanPage["intent"]) => {
  const preferredByIntent: Record<IptvGermanPage["intent"], RawSlug[]> = {
    general: ["iptv", "meilleur-iptv", "abonnement-iptv", "iptv-abonnement"],
    netherlands: ["france-iptv", "french-iptv", "meilleur-iptv", "agence-iptv"],
    app: [
      "iptv-smarters",
      "iptv-smarters-pro",
      "iptv-player",
      "meilleur-application-iptv",
    ],
    device: ["iptv-box", "boitier-iptv", "box-iptv", "decodeur-iptv"],
    subscription: [
      "iptv-abonnement",
      "abonnement-iptv",
      "iptv-prix",
      "test-iptv",
    ],
    legal: ["iptv-illegal", "iptv-amende", "iptv", "fournisseur-iptv"],
    playlist: [
      "m3u-iptv",
      "iptv-gratuit",
      "free-popular-iptv-playlist",
      "iptv-player",
    ],
    quality: ["iptv-4k", "iptv-with-4k", "meilleur-iptv", "iptv-premium"],
    provider: [
      "fournisseur-iptv",
      "agence-iptv",
      "iptv-atlas",
      "meilleur-iptv",
    ],
    adult: ["iptv-app", "smart-iptv", "iptv-player", "iptv"],
  };

  return preferredByIntent[intent]
    .filter((relatedSlug) => relatedSlug !== slug)
    .slice(0, 4);
};

const createPage = (
  slug: RawSlug,
  index: number,
): Omit<IptvGermanPage, "internalLinks"> => {
  const keyword = formatKeyword(slug);
  const readableKeyword = titleCase(keyword);
  const language = detectLanguage(slug);
  const intent = detectIntent(slug);
  const copy = intentCopy[intent];
  const title =
    titleOverrides[slug] ??
    `${readableKeyword}: praktische IPTV Amsterdam gids`;
  const metaTitle = `${title} | IPTV Amsterdam`;
  const heroHeading =
    slug === "iptv"
      ? "IPTV zonder giswerk: helder kiezen, stabiel kijken"
      : `${readableKeyword} met een pragmatische IPTV Amsterdam aanpak`;

  return {
    slug,
    keyword,
    title,
    metaTitle,
    metaDescription: buildMetaDescription(keyword, intent, index),
    heroHeading,
    language,
    intent,
    introCopy: `${readableKeyword} vraagt om meer dan alleen een zoekterm. Deze pagina helpt u bij ${copy.promise}, met bijzondere aandacht voor prestaties, apparaatkeuze, privacy en verantwoord gebruik ${languageAngle[language]}.`,
    benefits: copy.benefitSeed.map(
      (benefit, benefitIndex) =>
        `${benefit} voor ${keyword} ${benefitIndex + 1}`,
    ),
    sections: [
      {
        heading: `${readableKeyword} in de praktijk`,
        body: `Bij ${keyword} draait alles om de combinatie van contentbron, speler, apparaat en netwerk. IPTV Amsterdam ziet dit als een complete kijkervaring, zodat u niet alleen start, maar ook begrijpt waarom het vloeiend of instabiel loopt.`,
        points: [
          "Controleer de compatibiliteit voordat u een pakket of app kiest.",
          "Gebruik een heldere EPG en logische kanaalgroepen.",
          "Test de kwaliteit op het apparaat waarop u daadwerkelijk gaat kijken.",
        ],
      },
      {
        heading: `Installatie-checklist voor ${readableKeyword}`,
        body: copy.setup,
        points: [
          "Noteer welke app, tv-box of Smart-tv u gebruikt.",
          "Controleer uw internetsnelheid en wifi-dekking op de kijkplek.",
          "Bewaar accountgegevens en playlist op een veilige plek.",
        ],
      },
      {
        heading: `Veilig en verantwoord gebruik van ${readableKeyword}`,
        body: copy.safety,
        points: [
          "Vermijd onbekende downloads, gekraakte apps en anonieme lijsten.",
          "Deel geen persoonlijke gegevens met dubieuze aanbieders.",
          "Kies bronnen met duidelijke voorwaarden en toegankelijke support.",
        ],
      },
    ],
    faqs: createFaqs(keyword, intent, language),
  };
};

const pagesWithoutLinks = IPTV_GERMAN_SLUGS.map(createPage);

export const IPTV_GERMAN_PAGES: IptvGermanPage[] = pagesWithoutLinks.map(
  (page) => {
    const isAbonnement =
      page.slug === "iptv-abonnement" || page.slug === "abonnement-iptv";

    return {
      ...page,
      heroHeading: isAbonnement
        ? "IPTV in Nederland: beleef televisie opnieuw"
        : page.heroHeading,
      metaTitle: isAbonnement
        ? "IPTV Abonnement Nederland – live Amsterdam, Nederlandse kanalen, 4K/8K, VOD | IPTV Amsterdam"
        : page.metaTitle,
      metaDescription: isAbonnement
        ? "IPTV abonnement & Amsterdam Nederland met 31.000+ kanalen en 140.000+ films & series in 4K/8K. Directe activering, stabiele servers, alle apparaten ondersteund en premium IPTV-abonnementen voor heel Nederland en België."
        : page.metaDescription,
      heroBg: isAbonnement ? "/images/abonnement-bg.webp" : undefined,
      internalLinks: relatedSlugsFor(page.slug, page.intent).map(
        (relatedSlug) => {
          const related = pagesWithoutLinks.find(
            (candidate) => candidate.slug === relatedSlug,
          );
          const label = related?.keyword ?? formatKeyword(relatedSlug);

          return {
            label,
            href: iptvPath(relatedSlug),
            description: `Lees meer over ${label} in de IPTV Amsterdam kennisbank.`,
          };
        },
      ),
    };
  },
);

export const IPTV_GERMAN_PAGE_MAP = new Map(
  IPTV_GERMAN_PAGES.map((page) => [page.slug, page]),
);

export const getIptvGermanPage = (slug: string) =>
  IPTV_GERMAN_PAGE_MAP.get(slug);

export const getIptvGermanPath = (slug: string) => iptvPath(slug);

// ═════════════════════════════════════════════════════════════════════════════
//  PHASE 3 — RICH CONTENT ENGINE  (emits IPTVPage[] for all 105 slugs)
//  ---------------------------------------------------------------------------
//  Every page gets ≥5 discriminated-union sections, ≥5 FAQs and ≥4 internal
//  links. Content is differentiated by search intent (no near-duplicate copy).
//  Exported under V2 names; Phase 4 switches the route over, after which the
//  legacy block above is removed and these become canonical.
// ═════════════════════════════════════════════════════════════════════════════

const UPDATED_AT = "2026-05-31";
// Primary CTA target across all vault pages — points at the root money page
// directly (no /iptv-gids redirect hop).
const ORDER_HREF = iptvPath("iptv-abonnement");
const OG = OG_IMAGE.url;

/** Truncate to a hard max length, appending an ellipsis at a word boundary. */
const clamp = (value: string, max: number): string => {
  if (value.length <= max) return value;
  const cut = value.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
};

// ── Intent detection (German-market focused; fixes the legacy FR heuristics) ──
const detectIntentV2 = (slug: string): PageIntent => {
  const has = (...keys: string[]) => keys.some((k) => slug.includes(k));
  if (has("illegal", "amende", "laws", "legal", "arcom", "strafe", "abmahn"))
    return "legal";
  if (
    has(
      "meilleur",
      "meilleurs",
      "beste",
      "bester",
      "fournisseur",
      "agence",
      "anbieter",
      "provider",
      "atlas",
      "king",
      "mario",
      "lynk",
      "iron",
      "zen",
      "xenon",
      "pure",
    )
  )
    return "provider";
  if (
    has(
      "playlist",
      "m3u",
      "gratuit",
      "gratis",
      "kostenlos",
      "code",
      "telecharger",
      "downloader",
      "free",
    )
  )
    return "playlist";
  if (has("4k", "8k", "uhd")) return "quality";
  if (has("boitier", "decodeur", "box", "kastje", "receiver", "stick", "mag"))
    return "device";
  if (
    has(
      "smarters",
      "smarter",
      "smart-player",
      "smart-iptv",
      "tivimate",
      "smartone",
      "smart-one",
      "net-iptv",
      "set-iptv",
      "ss-iptv",
      "iptv-ss",
      "flix",
      "xtream",
      "player",
      "application",
      "appli",
      "app",
      "smart",
    )
  )
    return "app";
  if (
    has(
      "abonnement",
      "abbonement",
      "kaufen",
      "kopen",
      "prix",
      "pas-cher",
      "premium",
      "test",
      "trial",
      "12-mois",
    )
  )
    return "subscription";
  if (
    has(
      "deutschland",
      "german",
      "germany",
      "france",
      "french",
      "swiss",
      "osterreich",
    )
  )
    return "landing";
  if (has("programme", "setting", "comment", "was-ist", "guide"))
    return "guide";
  return "general";
};

// ── Shared content blocks (reused across pages) ──────────────────────────────
const PRICING_TIERS: PricingTier[] = [
  {
    name: "1 maand",
    price: "12,99 €",
    period: "/ maand",
    description: "Flexibel om uit te proberen",
    features: [
      "25.000+ live kanalen",
      "140.000+ films & series",
      "Full HD & 4K",
      "1 apparaat tegelijk",
      "24/7 klantenservice",
    ],
    cta: { label: "Bestel nu", href: ORDER_HREF },
  },
  {
    name: "3 maanden",
    price: "29,99 €",
    period: "/ 3 maanden",
    description: "Beste prijs-kwaliteitverhouding",
    features: [
      "Alles uit het maandpakket",
      "4K / 8K Amsterdam",
      "2 apparaten tegelijk",
      "Anti-buffering servers",
      "Volledige VOD-toegang",
    ],
    cta: { label: "Populairste pakket", href: ORDER_HREF },
    highlighted: true,
    badge: "Populairste",
  },
  {
    name: "12 maanden",
    price: "79,99 €",
    period: "/ jaar",
    description: "Slechts 6,66 € per maand",
    features: [
      "Alles uit het 3-maandenpakket",
      "Tot 5 apparaten",
      "Klantenservice met voorrang",
      "Gratis updates",
      "Geen contract",
    ],
    cta: { label: "Jaarpakket nemen", href: ORDER_HREF },
  },
];

const COMPARISON_COLUMNS = [
  "IPTV Amsterdam",
  "Andere aanbieders",
  "Kabel & Sat",
];
const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Live kanalen", values: ["25.000+", "enkele duizenden", "100–300"] },
  { label: "Films & series (VOD)", values: ["140.000+", "beperkt", false] },
  { label: "4K / 8K kwaliteit", values: [true, "deels", false] },
  { label: "Apparaten tegelijk", values: ["tot 5", "1–2", "1"] },
  { label: "Contract", values: ["geen", "vaak 24 maanden", "12–24 maanden"] },
  { label: "Gratis proef", values: [true, false, false] },
  {
    label: "Prijs per maand vanaf",
    values: ["6,66 €", "15–30 €", "vanaf 40 €"],
  },
  { label: "24/7 klantenservice", values: [true, "wisselend", "Telefoonlijn"] },
];

const DEVICE_CARDS: DeviceCard[] = [
  { name: "Amazon Fire TV Stick", platform: "box", steps: 4, icon: "Tv" },
  {
    name: "Android TV & Box",
    platform: "android",
    steps: 4,
    icon: "MonitorSmartphone",
  },
  { name: "Samsung & LG Smart-tv", platform: "smart-tv", steps: 5, icon: "Tv" },
  { name: "iPhone & iPad", platform: "ios", steps: 4, icon: "Smartphone" },
  { name: "MAG Box", platform: "box", steps: 3, icon: "Box" },
  { name: "Windows PC", platform: "windows", steps: 3, icon: "Monitor" },
  { name: "Apple TV", platform: "box", steps: 4, icon: "Tv" },
  { name: "Webbrowser", platform: "browser", steps: 2, icon: "Globe" },
];

const TESTIMONIAL_REVIEWS: Review[] = [
  {
    author: "Sven d.",
    country: "🇳🇱",
    rating: 5,
    text: "Eindelijk geen buffering meer. De Eredivisie loopt in 4K helemaal vloeiend – installatie op de Fire TV Stick was in 5 minuten klaar.",
  },
  {
    author: "Lieke J.",
    country: "🇳🇱",
    rating: 5,
    text: "Enorme keuze aan films en series, plus een klantenservice die echt binnen minuten antwoordt. Een echte aanrader.",
  },
  {
    author: "Bram V.",
    country: "🇧🇪",
    rating: 4,
    text: "Heel stabiel en eerlijke prijzen zonder contract. De gratis proef heeft me overtuigd – gebruik nu het jaarpakket.",
  },
  {
    author: "Sanne K.",
    country: "🇳🇱",
    rating: 5,
    text: "Werkt tegelijk op Smart-tv, telefoon en tablet. De EPG is netjes in het Nederlands en de kanalen zijn top gesorteerd.",
  },
];

const CHANNEL_CATEGORIES: ChannelCategory[] = [
  {
    name: "Sport",
    count: 1200,
    examples: ["ESPN", "Ziggo Sport", "Eredivisie", "Champions League"],
  },
  {
    name: "Films & series",
    count: 140000,
    examples: ["Blockbusters", "Boxsets", "Nieuwe releases", "Klassiekers"],
  },
  { name: "Nieuws", count: 800, examples: ["NPO", "RTL Nieuws", "NOS", "BBC"] },
  {
    name: "Kinderen",
    count: 500,
    examples: ["Zappelin", "Disney", "Nickelodeon", "Cartoon Network"],
  },
  {
    name: "Internationaal",
    count: 20000,
    examples: ["🇹🇷 Türkçe", "🇬🇧 UK", "🇮🇹 IT", "🇪🇸 ES"],
  },
  {
    name: "4K / UHD",
    count: 600,
    examples: ["4K Live", "UHD VOD", "HDR", "8K Demo"],
  },
];

const HOW_STEPS: Step[] = [
  {
    title: "Pakket kiezen",
    description:
      "Kies de passende looptijd (1, 3 of 12 maanden) – helemaal zonder contract.",
  },
  {
    title: "Inloggegevens ontvangen",
    description:
      "Direct na uw bestelling ontvangt u uw login- of M3U-/Xtream-gegevens automatisch per e-mail.",
  },
  {
    title: "App installeren",
    description:
      "Installeer een compatibele speler op uw Smart-tv, Fire TV Stick, smartphone of pc.",
  },
  {
    title: "Inloggen & streamen",
    description:
      "Voer de inloggegevens in, de EPG laadt automatisch – en u streamt direct in tot 4K.",
  },
];

// ── Per-intent profile (label, hero copy, feature cards, deep-dive text) ──────
type IntentProfile = {
  label: string;
  headline: (kw: string) => string;
  subheadline: string;
  badgeTags: string[];
  ctaLabel: string;
  structuredData: StructuredDataType;
  features: Feature[];
  intro: (kw: string) => string;
  deepDive: (kw: string) => { heading: string; html: string };
  metaDescription: (kw: string) => string;
  extraFaqs: (kw: string) => PageFaq[];
};

const F = (icon: string, title: string, description: string): Feature => ({
  icon,
  title,
  description,
});

const INTENT_PROFILE: Record<PageIntent, IntentProfile> = {
  general: {
    label: "IPTV-basis",
    headline: (kw) => `${kw} eenvoudig uitgelegd`,
    subheadline:
      "Live-tv, films en series via internet – eenvoudig, stabiel en tot in 4K/8K uitgelegd.",
    badgeTags: ["Helder uitgelegd", "Praktisch", "Actueel 2026"],
    ctaLabel: "Bekijk pakketten",
    structuredData: "Article",
    features: [
      F(
        "Tv",
        "25.000+ live kanalen",
        "Volledig Nederlands kanaalaanbod plus internationale programma's op één plek.",
      ),
      F(
        "Film",
        "140.000+ VOD-titels",
        "Films en series on demand – altijd pauzeren, hervatten of opnieuw starten.",
      ),
      F(
        "Wifi",
        "Stabiel & vloeiend",
        "Geoptimaliseerde anti-buffering servers zorgen voor een betrouwbaar beeld zonder haperingen.",
      ),
      F(
        "MonitorSmartphone",
        "Alle apparaten",
        "Smart-tv, Fire TV Stick, smartphone, tablet, box of pc – één toegang voor alles.",
      ),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> betekent televisie via internet: in plaats van via kabel, satelliet of antenne worden kanalen en content als datastroom verzonden. Dat maakt enorme kanaal- en VOD-bibliotheken, uitgesteld kijken en gebruik op vrijwel elk apparaat mogelijk.</p><p>Deze gids legt helder uit hoe ${kw} werkt, waar het op aankomt bij kwaliteit en veiligheid en hoe u binnen enkele minuten klaar bent om te kijken.</p>`,
    deepDive: (kw) => ({
      heading: `Waar het bij ${kw} echt op aankomt`,
      html: `<p>Drie factoren bepalen een goede ervaring: de <strong>bron</strong> van de content, de <strong>speler</strong> en uw <strong>netwerk</strong>. Een betrouwbare bron met een goed onderhouden EPG, een lichte, compatibele speler en een stabiele verbinding (idealiter via LAN) zorgen samen voor een vloeiend beeld – ook in 4K.</p>`,
    }),
    metaDescription: (kw) =>
      `Wat is ${kw}? Helder uitgelegd: 25.000+ kanalen, 140.000+ films & series, 4K/8K, alle apparaten. Ontdek IPTV Amsterdam en probeer 7 dagen.`,
    extraFaqs: (kw) => [
      {
        question: "Wat is het verschil tussen IPTV en klassieke televisie?",
        answer: `Bij ${kw} wordt content via internet verzonden in plaats van via kabel, satelliet of antenne. Dat maakt veel grotere kanaal- en VOD-bibliotheken, uitgesteld kijken en gebruik op meerdere apparaten tegelijk mogelijk.`,
      },
      {
        question: `Heb ik voor ${kw} speciale hardware nodig?`,
        answer:
          "Nee, meestal volstaat een bestaand apparaat zoals een Fire TV Stick, een Smart-tv of een smartphone. Een stabiele internetverbinding is belangrijker dan dure hardware.",
      },
    ],
  },
  guide: {
    label: "IPTV-handleiding",
    headline: (kw) => `${kw}: de complete handleiding`,
    subheadline:
      "Alles wat u nodig heeft voor een soepele start – helder en praktisch.",
    badgeTags: ["Stap voor stap", "Praktisch", "Actueel 2026"],
    ctaLabel: "Direct beginnen",
    structuredData: "Article",
    features: [
      F(
        "ListChecks",
        "Heldere stappen",
        "Van installatie tot het eerste kanaal – uitgelegd zonder vakjargon.",
      ),
      F(
        "Settings",
        "Optimale instellingen",
        "Buffer, EPG, ondertiteling en beeldkwaliteit juist configureren.",
      ),
      F(
        "ShieldCheck",
        "Veilig onderweg",
        "Waar u op moet letten om betrouwbaar en legaal te streamen.",
      ),
      F(
        "Headphones",
        "Hulp bij problemen",
        "Veelvoorkomende fouten en hun snelle oplossingen in één oogopslag.",
      ),
    ],
    intro: (kw) =>
      `<p>Deze handleiding leidt u stap voor stap door <strong>${kw}</strong> – van de keuze van de juiste speler, via de installatie met M3U of Xtream Codes, tot het fijn afstellen van beeldkwaliteit en EPG.</p>`,
    deepDive: (kw) => ({
      heading: `Veelgemaakte fouten bij ${kw} voorkomen`,
      html: `<p>De meeste problemen ontstaan door instabiele wifi, verkeerde bufferinstellingen of onbetrouwbare bronnen. Gebruik waar mogelijk LAN, houd de app up-to-date en kies een aanbieder met transparante voorwaarden en support.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} stap voor stap instellen – met checklist, apparaattips en veiligheidsadviezen. Lees nu, start met IPTV Amsterdam en probeer 7 dagen.`,
    extraFaqs: (kw) => [
      {
        question: `Hoe lang duurt de installatie van ${kw}?`,
        answer:
          "Meestal slechts enkele minuten. Na ontvangst van uw inloggegevens voert u deze in uw speler in, de EPG laadt automatisch en u kunt direct streamen.",
      },
      {
        question: "Wat te doen als een kanaal niet laadt?",
        answer:
          "Controleer uw internetverbinding, herstart de app en wis eventueel de cache. Blijft het probleem bestaan, dan helpt de 24/7-support van IPTV Amsterdam u snel verder.",
      },
    ],
  },
  app: {
    label: "App & speler",
    headline: (kw) => `${kw} instellen & optimaal gebruiken`,
    subheadline:
      "Installatie, EPG en playlists zonder frustratie – compatibel met alle gangbare apparaten.",
    badgeTags: [
      "Eenvoudige installatie",
      "M3U & Xtream",
      "Alle apparaten",
      "24/7 support",
    ],
    ctaLabel: "Toegang nemen",
    structuredData: "Article",
    features: [
      F(
        "Download",
        "M3U & Xtream",
        "Volledige ondersteuning voor M3U-playlists en Xtream Codes – snel ingesteld.",
      ),
      F(
        "CalendarClock",
        "Nette EPG",
        "Nederlandse programmagids met juiste tijdzones en logo's.",
      ),
      F(
        "PlayCircle",
        "Vloeiend zappen",
        "Korte schakeltijden en stabiele weergave dankzij geoptimaliseerde servers.",
      ),
      F(
        "MonitorSmartphone",
        "Op alle apparaten",
        "Eenmaal instellen, gebruiken op Smart-tv, box, telefoon en pc.",
      ),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> is een populaire speler om IPTV-content af te spelen. Deze gids laat zien hoe u ${kw} installeert, verbindt met M3U of Xtream Codes en beeld, EPG en ondertiteling optimaal instelt.</p>`,
    deepDive: (kw) => ({
      heading: `${kw} juist configureren`,
      html: `<p>Voer uw inloggegevens zorgvuldig in (server, gebruikersnaam, wachtwoord of M3U-URL). Activeer hardware-decodering, pas de buffergrootte aan uw netwerk aan en laad de EPG voor een volledig programmaoverzicht.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} installeren & instellen: M3U/Xtream, EPG en alle apparaten. Handleiding van IPTV Amsterdam – start nu en probeer 7 dagen risicovrij.`,
    extraFaqs: (kw) => [
      {
        question: `Hoe stel ik ${kw} in met M3U of Xtream?`,
        answer:
          "Open de app, kies „Playlist toevoegen“ en voer de M3U-URL of uw Xtream Codes (server, gebruikersnaam, wachtwoord) in. Daarna laadt de EPG automatisch.",
      },
      {
        question: `Waarom hapert ${kw} soms?`,
        answer:
          "Veelvoorkomende oorzaken zijn wifi-schommelingen, een overbelast apparaat of een te kleine buffer. Gebruik LAN, sluit achtergrond-apps en verhoog de buffergrootte in de instellingen.",
      },
    ],
  },
  device: {
    label: "Apparaten & installatie",
    headline: (kw) => `${kw}: in enkele minuten ingesteld`,
    subheadline:
      "Zo krijgt u uw apparaat in een paar stappen werkend – stabiel en in de hoogste kwaliteit.",
    badgeTags: [
      "Eenvoudige installatie",
      "Alle apparaten",
      "4K-geschikt",
      "24/7 support",
    ],
    ctaLabel: "Toegang nemen",
    structuredData: "Article",
    features: [
      F(
        "Box",
        "Plug & play",
        "Geschikt voor Fire TV Stick, MAG, Android-box en Smart-tv.",
      ),
      F(
        "Wifi",
        "Stabiel via LAN",
        "Ethernet-advies voor haperingsvrij 4K bij vaste installaties.",
      ),
      F(
        "Cpu",
        "Hardware-decodering",
        "Soepele weergave die past bij de prestaties van uw apparaat.",
      ),
      F(
        "RefreshCw",
        "Altijd actueel",
        "Firmware- en app-updates houden de weergave snel en veilig.",
      ),
    ],
    intro: (kw) =>
      `<p>Met <strong>${kw}</strong> wordt uw televisie een volwaardig Amsterdamcentrum. Wij laten zien welke instellingen zorgen voor een vloeiend beeld en hoe u het apparaat in een paar stappen instelt.</p>`,
    deepDive: (kw) => ({
      heading: `Optimale instellingen voor ${kw}`,
      html: `<p>Werk eerst de firmware bij, verbind het apparaat zo mogelijk via ethernet en kies een lichte speler. Activeer hardware-decodering en stel de resolutie passend bij uw televisie in.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} in enkele minuten instellen: stapsgewijze handleiding, tips & support. Stream nu stabiel in 4K met IPTV Amsterdam.`,
    extraFaqs: (kw) => [
      {
        question: `Welke instellingen zijn optimaal voor ${kw}?`,
        answer:
          "Werk de firmware bij, gebruik indien mogelijk ethernet, activeer hardware-decodering en kies een lichte speler die past bij de prestaties van uw apparaat.",
      },
      {
        question: `Heb ik voor ${kw} snel internet nodig?`,
        answer:
          "Voor Full HD volstaat ongeveer 16 Mbit/s, voor 4K adviseren wij 25 Mbit/s of meer. Doorslaggevend is een stabiele verbinding met lage latentie – LAN heeft de voorkeur boven wifi.",
      },
    ],
  },
  subscription: {
    label: "Abonnement & prijzen",
    headline: (kw) => `${kw} – pakketten, prijzen & proef`,
    subheadline:
      "Transparante pakketten zonder contract – met directe activering en gratis proef.",
    badgeTags: [
      "Vanaf 6,66 €/maand",
      "Gratis proef",
      "Geen contract",
      "Direct actief",
    ],
    ctaLabel: "Probeer gratis",
    structuredData: "Product",
    features: [
      F(
        "CreditCard",
        "Eerlijke prijzen",
        "Duidelijke pakketten vanaf 6,66 €/maand – zonder verborgen kosten of binding.",
      ),
      F(
        "Zap",
        "Direct actief",
        "Activering meestal binnen enkele minuten na de bestelling.",
      ),
      F(
        "ShieldCheck",
        "Gratis proef",
        "Test rustig de stabiliteit, kanalen en beeldkwaliteit voordat u kiest.",
      ),
      F(
        "Server",
        "Premium servers",
        "Anti-buffering infrastructuur voor een vloeiend beeld tijdens primetime.",
      ),
    ],
    intro: (kw) =>
      `<p>Bij <strong>${kw}</strong> telt het geheel: looptijd, aantal gelijktijdige apparaten, beeldkwaliteit, stabiliteit en support. IPTV Amsterdam biedt transparante pakketten zonder contract en met directe activering.</p>`,
    deepDive: (kw) => ({
      heading: `${kw}: zo vergelijkt u goed`,
      html: `<p>Let niet alleen op de prijs, maar op het aantal kanalen en VOD-titels, gelijktijdige verbindingen, serverkwaliteit en de bereikbaarheid van de support. Een proefperiode is het beste middel om de kwaliteit vóór aankoop te beoordelen.</p>`,
    }),
    metaDescription: () =>
      `IPTV abonnement vanaf 6,66 €: 25.000+ kanalen, 140.000+ VOD, 4K/8K, geen contract. Kies nu een pakket, activeer direct en probeer 7 dagen.`,
    extraFaqs: (kw) => [
      {
        question: `Zit er bij ${kw} een contract aan vast?`,
        answer:
          "Nee. U kiest flexibele looptijden (1, 3 of 12 maanden) zonder automatische verlenging en zonder opzegtermijn.",
      },
      {
        question: `Kan ik ${kw} eerst proberen?`,
        answer:
          "Ja, een gratis proef is mogelijk zodat u stabiliteit, kanalen en beeldkwaliteit rustig kunt testen voordat u kiest.",
      },
      {
        question: "Hoe snel wordt mijn toegang geactiveerd?",
        answer:
          "De activering gebeurt meestal direct, oftewel binnen enkele minuten na betaling – de inloggegevens komen automatisch per e-mail.",
      },
    ],
  },
  provider: {
    label: "Aanbiedervergelijking",
    headline: (kw) => `${kw} vergeleken`,
    subheadline:
      "Een neutrale blik op kanalen, prijzen, kwaliteit en service – zodat u goed kiest.",
    badgeTags: ["Neutrale vergelijking", "Transparant", "Gratis proef"],
    ctaLabel: "Probeer IPTV Amsterdam",
    structuredData: "Article",
    features: [
      F(
        "Scale",
        "Neutrale vergelijking",
        "Kanalen, prijzen, kwaliteit en support feitelijk naast elkaar gezet.",
      ),
      F(
        "BadgeCheck",
        "Betrouwbaarheid checken",
        "Transparante voorwaarden, bereikbare support en echte beoordelingen.",
      ),
      F(
        "Wallet",
        "Eerlijke voorwaarden",
        "Duidelijke prijzen zonder dubieuze „lifetime“-beloften.",
      ),
      F(
        "Star",
        "Bewezen kwaliteit",
        "Stabiele servers en een verzorgd aanbod in plaats van loze reclamebeloften.",
      ),
    ],
    intro: (kw) =>
      `<p>Bij het zoeken naar <strong>${kw}</strong> loont een nuchtere vergelijking. Wij laten zien welke criteria echt tellen en waaraan u een betrouwbare dienst herkent – zonder marketingpraat.</p>`,
    deepDive: (kw) => ({
      heading: `${kw}: waar u op moet letten`,
      html: `<p>Betrouwbare aanbieders noemen transparante prijzen, bieden bereikbare support en een proefperiode en doen geen onrealistische beloften. Wees voorzichtig met extreem goedkope lifetime-aanbiedingen zonder bedrijfsgegevens of contactmogelijkheid.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: neutraal vergeleken – kanalen, prijs, kwaliteit & support. Vind de juiste aanbieder en probeer IPTV Amsterdam 7 dagen.`,
    extraFaqs: () => [
      {
        question: "Waaraan herken ik een betrouwbare IPTV-aanbieder?",
        answer:
          "Let op transparante prijzen, bereikbare support, duidelijke voorwaarden, een proefperiode en echte klantbeoordelingen. Wantrouw extreem goedkope „lifetime“-aanbiedingen.",
      },
      {
        question: "Wat kost een goede IPTV-dienst?",
        answer:
          "Betrouwbare diensten liggen meestal tussen 7 en 13 € per maand, met korting op langere looptijden. Opvallend goedkope aanbiedingen zijn vaak instabiel of juridisch problematisch.",
      },
    ],
  },
  legal: {
    label: "Juridisch",
    headline: (kw) => `${kw}: wat is toegestaan?`,
    subheadline:
      "Feitelijke oriëntatie over de wet en risico's – plus veilige, legale alternatieven.",
    badgeTags: ["Feitelijk & neutraal", "Legale alternatieven", "Privacy"],
    ctaLabel: "Bekijk legaal alternatief",
    structuredData: "Article",
    features: [
      F(
        "Scale",
        "Juridisch helder",
        "IPTV als techniek is legaal – bepalend is de licentie van de bron.",
      ),
      F(
        "ShieldAlert",
        "Ken de risico's",
        "Sommaties en boetes dreigen alleen bij duidelijk illegale streams.",
      ),
      F(
        "Lock",
        "Privacy",
        "Geen dubieuze apps, geen delen van persoonlijke gegevens.",
      ),
      F(
        "CheckCircle2",
        "Veilige keuze",
        "Gelicentieerde, transparante diensten in plaats van anonieme koopjes.",
      ),
    ],
    intro: (kw) =>
      `<p>Rond het thema <strong>${kw}</strong> heerst veel onzekerheid. Belangrijk: de IPTV-techniek zelf is volledig legaal. Of een aanbod legaal is, hangt er alleen van af of de aanbieder de benodigde licenties voor de uitgezonden content bezit.</p>`,
    deepDive: () => ({
      heading: "Legaal streamen – zo doet u dat veilig",
      html: `<p>Kies diensten met transparante voorwaarden, bedrijfsgegevens en bereikbare support. Extreem goedkope aanbiedingen met duizenden premium kanalen voor een paar euro zijn een waarschuwingssignaal. Bij twijfel geldt: kies liever een betrouwbare, gelicentieerde aanbieder.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: feitelijke informatie over de wet, risico's & veilige alternatieven in Nederland. Informeer u en stream legaal met IPTV Amsterdam.`,
    extraFaqs: (kw) => [
      {
        question: `Is ${kw} legaal in Nederland?`,
        answer:
          "IPTV als techniek is legaal. Bepalend is de bron: alleen aanbieders met de benodigde licenties zijn legaal. Wij raden gehackte of anonieme streams uitdrukkelijk af.",
      },
      {
        question: "Dreigen er boetes bij illegale IPTV?",
        answer:
          "Bij het gebruik van duidelijk illegale streams kunnen sommaties en geldboetes dreigen. Kies transparante, gelicentieerde diensten om aan de veilige kant te zitten.",
      },
    ],
  },
  playlist: {
    label: "Playlists & M3U",
    headline: (kw) => `${kw} veilig gebruiken`,
    subheadline:
      "Playlists goed begrijpen en veilig gebruiken – zonder dubieuze downloads of links.",
    badgeTags: ["Veilig & betrouwbaar", "M3U / Xtream", "Geen dubieuze links"],
    ctaLabel: "Bekijk veilige bron",
    structuredData: "Article",
    features: [
      F(
        "FileCode",
        "M3U & Xtream",
        "Heldere uitleg van de playlist-formaten en hun installatie.",
      ),
      F(
        "Lock",
        "Privacyvriendelijk",
        "Geen delen van persoonlijke gegevens, geen schimmige downloads.",
      ),
      F(
        "ShieldCheck",
        "Betrouwbare bronnen",
        "Waar u op moet letten om malware en gedoe te vermijden.",
      ),
      F(
        "PlayCircle",
        "Direct bruikbaar",
        "Lijsten direct in de speler testen – snel en eenvoudig.",
      ),
    ],
    intro: (kw) =>
      `<p>Een <strong>${kw}</strong> is uiteindelijk gewoon een formaat (meestal M3U of Xtream) dat kanalen en streams bundelt. Deze gids legt uit hoe playlists werken en hoe u ze veilig en betrouwbaar inzet.</p>`,
    deepDive: () => ({
      heading: "Pas op met gratis lijsten",
      html: `<p>Gratis lijsten uit onbekende bronnen zijn vaak verouderd, instabiel of juridisch problematisch en kunnen malware bevatten. Veiliger is een gelicentieerde dienst met een eigen, verzorgd aanbod en support.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} veilig begrijpen & gebruiken – zonder dubieuze links. M3U/Xtream juist instellen. Lees nu en stream veilig met IPTV Amsterdam.`,
    extraFaqs: (kw) => [
      {
        question: `Zijn gratis ${kw} veilig?`,
        answer:
          "Gratis lijsten uit onbekende bronnen zijn vaak instabiel, verouderd of juridisch problematisch en kunnen malware bevatten. Veiliger is een gelicentieerde dienst met een verzorgd aanbod.",
      },
      {
        question: "Hoe voeg ik een M3U-playlist toe aan de speler?",
        answer:
          "Kies in uw speler „Playlist toevoegen“, voer de M3U-URL in en wacht tot kanalen en EPG geladen zijn. Met Xtream Codes voert u in plaats daarvan server, gebruikersnaam en wachtwoord in.",
      },
    ],
  },
  quality: {
    label: "Beeldkwaliteit & 4K",
    headline: (kw) => `${kw} in 4K & 8K`,
    subheadline:
      "Messcherp beeld zonder buffering – met de juiste instellingen voor 4K en 8K.",
    badgeTags: ["4K / 8K", "Anti-buffering", "Hoge bitrate"],
    ctaLabel: "Stream in 4K",
    structuredData: "Article",
    features: [
      F(
        "Sparkles",
        "Briljant beeld",
        "Native 4K- en 8K-streams met hoge bitrate voor maximale scherpte.",
      ),
      F(
        "Gauge",
        "Weinig buffering",
        "Geoptimaliseerde servers en juiste instellingen verminderen haperingen.",
      ),
      F(
        "Wifi",
        "Netwerktips",
        "Zo stelt u wifi en LAN in voor stabiel high-end streamen.",
      ),
      F(
        "Cpu",
        "Passende hardware",
        "Apparaten met hardware-decodering voor haperingsvrije UHD-weergave.",
      ),
    ],
    intro: (kw) =>
      `<p>Voor <strong>${kw}</strong> komt het aan op het samenspel van bandbreedte, hardware en bron. Wij laten zien welke waarden u nodig heeft en hoe u buffering voorkomt.</p>`,
    deepDive: () => ({
      heading: "Bandbreedte, bitrate & stabiliteit",
      html: `<p>Als richtlijn: ongeveer 16 Mbit/s voor Full HD, 25 Mbit/s voor 4K en meer voor 8K. Belangrijker dan pure snelheid is een stabiele verbinding met lage latentie. Voor vaste tv-installaties is ethernet de beste keuze.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: messcherp streamen zonder buffering – bitrate, hardware & netwerk juist instellen. Start nu met IPTV Amsterdam in 4K/8K.`,
    extraFaqs: (kw) => [
      {
        question: `Welke internetsnelheid heb ik nodig voor ${kw}?`,
        answer:
          "Als richtlijn: ca. 16 Mbit/s voor Full HD, 25 Mbit/s voor 4K en meer voor 8K. Belangrijker dan pure snelheid is een stabiele verbinding met lage latentie.",
      },
      {
        question: "Waarom is er buffering ondanks snel internet?",
        answer:
          "Vaak ligt het aan wifi-schommelingen, een overbelast apparaat of een te kleine buffer. Gebruik LAN, activeer hardware-decodering en verhoog de buffergrootte.",
      },
    ],
  },
  landing: {
    label: "Premium IPTV",
    headline: (kw) => `${kw}: premium Amsterdam zonder limiet`,
    subheadline:
      "25.000+ kanalen, 140.000+ films & series, 4K/8K – op alle apparaten, zonder contract.",
    badgeTags: ["25.000+ kanalen", "4K / 8K", "Gratis proef", "Geen contract"],
    ctaLabel: "Probeer 7 dagen",
    structuredData: "Product",
    features: [
      F(
        "Tv",
        "25.000+ kanalen",
        "Volledig Nederlands kanaalaanbod plus internationale programma's.",
      ),
      F(
        "Film",
        "140.000+ VOD",
        "Enorme film- en seriebibliotheek on demand, altijd beschikbaar.",
      ),
      F(
        "Sparkles",
        "4K / 8K",
        "Messcherp beeld dankzij hoge bitrate en premium servers.",
      ),
      F(
        "MonitorSmartphone",
        "Alle apparaten",
        "Smart-tv, Fire TV Stick, telefoon, tablet, box en pc – één toegang.",
      ),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> staat voor premium Amsterdam zonder compromissen: een enorme kanaal- en VOD-keuze, briljante 4K/8K-kwaliteit en stabiele servers – allemaal zonder contract en met directe activering.</p>`,
    deepDive: () => ({
      heading: "Waarom IPTV Amsterdam?",
      html: `<p>Wij combineren een verzorgd aanbod met anti-buffering infrastructuur, een Nederlandse EPG en snelle support. Dankzij de gratis proef overtuigt u zichzelf van de kwaliteit voordat u kiest.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: premium IPTV met 25.000+ kanalen, 140.000+ films & series in 4K/8K. Geen contract. Probeer nu 7 dagen!`,
    extraFaqs: () => [
      {
        question: "Wat maakt IPTV Amsterdam beter dan andere aanbieders?",
        answer:
          "Een verzorgd aanbod met 25.000+ kanalen, anti-buffering servers, een Nederlandse EPG, eerlijke prijzen zonder contract en een gratis proef waarmee u alles risicovrij kunt testen.",
      },
      {
        question: "Is er een contract of een proefperiode?",
        answer:
          "Er is geen contract – u kiest flexibele looptijden. Een gratis proef maakt het mogelijk om stabiliteit, kanalen en beeldkwaliteit vooraf te testen.",
      },
    ],
  },
};

// ── Why Choose Us — trust-signal features per intent ─────────────────────────
const WHY_CHOOSE_US_FEATURES: Record<PageIntent, Feature[]> = {
  general: [
    F(
      "BadgeCheck",
      "Jarenlange ervaring",
      "Al jaren actief in de IPTV-markt met duizenden tevreden klanten in Nederland en België.",
    ),
    F(
      "Eye",
      "Transparante werkwijze",
      "Geen verborgen kosten, duidelijke informatie en eerlijke voorwaarden – van A tot Z.",
    ),
    F(
      "Server",
      "Premium servers",
      "Anti-buffering infrastructuur voor een stabiele kijkervaring, 24/7.",
    ),
    F(
      "Headphones",
      "Persoonlijke support",
      "Onze klantenservice staat 24/7 voor u klaar – snel, vriendelijk en in het Nederlands.",
    ),
  ],
  guide: [
    F(
      "BookOpen",
      "Expertkennis",
      "Jarenlange ervaring gebundeld in heldere, praktische handleidingen zonder jargon.",
    ),
    F(
      "ListChecks",
      "Stap voor stap",
      "Duidelijke uitleg, geschikt voor beginners met oog voor detail.",
    ),
    F(
      "RefreshCw",
      "Altijd actueel",
      "Up-to-date informatie over de nieuwste apps, apparaten en technieken.",
    ),
    F(
      "Wrench",
      "Probleemoplossing",
      "Veelvoorkomende fouten en direct toepasbare oplossingen in één overzicht.",
    ),
  ],
  app: [
    F(
      "Download",
      "Eenvoudige installatie",
      "In 5 minuten klaar met duidelijke instructies voor elke app en speler.",
    ),
    F(
      "AppWindow",
      "Alle spelers ondersteund",
      "M3U, Xtream Codes – compatibel met Smarters Pro, TiviMate, XCIPTV en meer.",
    ),
    F(
      "RotateCcw",
      "Regelmatige updates",
      "Altijd de nieuwste functies, prestaties en beveiligingsupdates.",
    ),
    F(
      "Navigation",
      "Gebruiksvriendelijk",
      "Nederlandstalige EPG, intuïtieve navigatie en logische kanaalgroepen.",
    ),
  ],
  device: [
    F(
      "MonitorSmartphone",
      "Breedste compatibiliteit",
      "Fire TV Stick, Smart-tv, MAG, Android TV, Apple TV – alles wordt ondersteund.",
    ),
    F(
      "Zap",
      "Geoptimaliseerd",
      "Hardware-decodering voor vloeiende 4K-weergave, afgestemd op uw apparaat.",
    ),
    F(
      "Settings",
      "Eenvoudig in te stellen",
      "Stap-voor-stap gids voor ieder platform – geen technische kennis nodig.",
    ),
    F(
      "Wifi",
      "LAN en wifi",
      "Stabiel streamen via ethernet of optimaal wifi-advies voor draadloze installaties.",
    ),
  ],
  subscription: [
    F(
      "BadgeEuro",
      "Beste prijs-kwaliteit",
      "Premium IPTV vanaf slechts 6,66 € per maand, zonder verborgen kosten.",
    ),
    F(
      "Zap",
      "Directe activering",
      "Na uw bestelling direct toegang – geen installatiekosten, geen gedoe.",
    ),
    F(
      "Gift",
      "Gratis proefperiode",
      "Test 7 dagen risicovrij voordat u een beslissing neemt.",
    ),
    F(
      "FileX",
      "Geen contract",
      "Flexibele looptijden zonder automatische verlenging of opzegtermijn.",
    ),
  ],
  provider: [
    F(
      "Star",
      "Bewezen betrouwbaar",
      "Duizenden klanten beoordelen ons met een gemiddelde van 4,9 sterren.",
    ),
    F(
      "Scale",
      "Eerlijk vergeleken",
      "Geen marketingpraat, maar feitelijke informatie om aanbieders te vergelijken.",
    ),
    F(
      "ShieldCheck",
      "Service met garantie",
      "Niet-goed-geld-terug binnen 30 dagen – uw tevredenheid staat voorop.",
    ),
    F(
      "MessageCircle",
      "Altijd bereikbaar",
      "Via WhatsApp, e-mail en telefoon – 24/7 voor u klaar in het Nederlands.",
    ),
  ],
  legal: [
    F(
      "Scale",
      "Volledig legaal",
      "Wij werken alleen met gelicentieerde content en transparante bronnen.",
    ),
    F(
      "Lock",
      "Privacy eerst",
      "Uw gegevens zijn veilig en worden nooit gedeeld met derden.",
    ),
    F(
      "ShieldCheck",
      "Zonder risico",
      "Geen sommaties of boetes – u kiest voor een legale, veilige dienst.",
    ),
    F(
      "Lightbulb",
      "Helder advies",
      "Eerlijke informatie over rechten, risico's en verantwoord streamen.",
    ),
  ],
  playlist: [
    F(
      "FileCheck",
      "Betrouwbare lijsten",
      "Stabiele M3U- en Xtream-playlists zonder dode links of malware.",
    ),
    F(
      "RefreshCw",
      "Altijd actueel",
      "Playlists worden regelmatig ververst voor een optimale kijkervaring.",
    ),
    F(
      "ShieldCheck",
      "Veilig gebruik",
      "Geen dubieuze bronnen, geen verborgen scripts, geen risico voor uw privacy.",
    ),
    F(
      "MessageCircle",
      "Snelle ondersteuning",
      "Hulp bij het installeren van uw playlist in elke gangbare speler.",
    ),
  ],
  quality: [
    F(
      "Sparkles",
      "Haarscherp beeld",
      "Native 4K- en 8K-streams met hoge bitrate voor maximale scherpte.",
    ),
    F(
      "Gauge",
      "Minimale buffering",
      "Premium anti-buffering servers voor vloeiend beeld, ook tijdens piekuren.",
    ),
    F(
      "SlidersHorizontal",
      "Optimaal afgesteld",
      "Advies over bitrate, hardware en netwerk voor het beste resultaat.",
    ),
    F(
      "Sun",
      "HDR-ondersteuning",
      "HDR10 en Dolby Vision op compatibele apparaten en content.",
    ),
  ],
  landing: [
    F(
      "Gem",
      "Alles-in-één",
      "Premium IPTV met kanalen, VOD, 4K/8K en support in één compleet pakket.",
    ),
    F(
      "Flag",
      "Nederlandstalig",
      "Nederlandse EPG, support in uw eigen taal en lokaal afgestemde diensten.",
    ),
    F(
      "Star",
      "Bewezen kwaliteit",
      "12.000+ tevreden klanten en een gemiddelde beoordeling van 4,9 sterren.",
    ),
    F(
      "Gift",
      "Risicovrij proberen",
      "7 dagen gratis testen, daarna pas betalen – geen enkel risico.",
    ),
  ],
};

// ── IPTV Benefits — cost-savings & convenience features per intent ────────────
const IPTV_BENEFITS_FEATURES: Record<PageIntent, Feature[]> = {
  general: [
    F(
      "Wallet",
      "Bespaar op tv-kosten",
      "IPTV is aanzienlijk voordeliger dan een traditioneel kabel- of satellietabonnement.",
    ),
    F(
      "Tv",
      "Enorme kanaalkeuze",
      "25.000+ kanalen uit binnen- en buitenland – sport, nieuws, films, series en meer.",
    ),
    F(
      "MonitorSmartphone",
      "Kijk op uw eigen apparaat",
      "Smart-tv, smartphone, tablet, laptop of box – u kiest waar en wanneer u kijkt.",
    ),
    F(
      "Sparkles",
      "Stream in topkwaliteit",
      "Full HD, 4K en zelfs 8K – afhankelijk van uw apparaat en internetverbinding.",
    ),
  ],
  guide: [
    F(
      "BookOpen",
      "Leren in uw eigen tempo",
      "Helder uitgelegd met voorbeelden, stappenplannen en praktische tips.",
    ),
    F(
      "Lightbulb",
      "Begrijp de techniek",
      "Geen ingewikkeld jargon, maar heldere uitleg die u direct kunt toepassen.",
    ),
    F(
      "ShieldCheck",
      "Fouten voorkomen",
      "Leer van veelgemaakte fouten en bespaar uzelf tijd en frustratie.",
    ),
    F(
      "Zap",
      "Zelfverzekerd streamen",
      "Na het lezen van deze gids weet u precies hoe alles werkt.",
    ),
  ],
  app: [
    F(
      "AppWindow",
      "Gebruik elke speler",
      "Compatibel met Smarters Pro, TiviMate, IPTV Smarters, XCIPTV en vele anderen.",
    ),
    F(
      "MonitorSmartphone",
      "Eén account, alles toegankelijk",
      "Eenmaal instellen en overal kijken – op al uw apparaten tegelijk.",
    ),
    F(
      "CalendarClock",
      "Nederlandse EPG",
      "Programmagids in het Nederlands met juiste tijdzones en duidelijke info.",
    ),
    F(
      "Zap",
      "Snel schakelen",
      "Korte zaptijden en vloeiende weergave van al uw zenders.",
    ),
  ],
  device: [
    F(
      "MonitorSmartphone",
      "Één apparaat, eindeloos kijken",
      "Smart-tv, Fire TV Stick, Android-box, Apple TV – alle platformen worden ondersteund.",
    ),
    F(
      "Sparkles",
      "Altijd de beste beeldkwaliteit",
      "Automatische aanpassing aan uw apparaat, tot 4K en HDR toe.",
    ),
    F(
      "Wallet",
      "Geen dure hardware nodig",
      "Meestal volstaat uw bestaande apparaat – geen extra investering.",
    ),
    F(
      "Smartphone",
      "Ook onderweg",
      "Mobiel kijken op smartphone en tablet, waar u ook bent.",
    ),
  ],
  subscription: [
    F(
      "Wallet",
      "Geen verborgen kosten",
      "Alles inclusief vanaf 6,66 € per maand – geen installatiekosten of verrassingen.",
    ),
    F(
      "FileX",
      "Flexibel opzeggen",
      "Geen langdurig contract, geen opzegtermijn, volledige vrijheid.",
    ),
    F(
      "Sparkles",
      "Premium kwaliteit",
      "Anti-buffering servers, 4K/8K-beeld, 140.000+ VOD-titels en 25.000+ kanalen.",
    ),
    F(
      "MonitorSmartphone",
      "Meerdere apparaten",
      "Stream op tot 5 apparaten tegelijk, afhankelijk van uw pakket.",
    ),
  ],
  provider: [
    F(
      "Scale",
      "Vergelijk bewust",
      "Krijg helder inzicht in kanalen, prijzen, kwaliteit en echte service.",
    ),
    F(
      "Server",
      "Echte prestaties",
      "Geen loze marketingclaims, maar echte servers en bewezen beeldkwaliteit.",
    ),
    F(
      "BadgeCheck",
      "Transparantie voorop",
      "Duidelijke voorwaarden, eerlijke prijzen en zichtbare klantbeoordelingen.",
    ),
    F(
      "Gift",
      "Proef voor u koopt",
      "Gratis testperiode om alles rustig te beoordelen zonder enig risico.",
    ),
  ],
  legal: [
    F(
      "ShieldCheck",
      "Stream met een gerust hart",
      "Legale IPTV betekent geen risico op boetes of juridische problemen.",
    ),
    F(
      "Server",
      "Stabiel en betrouwbaar",
      "Kwaliteit van een gelicentieerde bron met heldere rechten.",
    ),
    F(
      "Lock",
      "Privacy beschermd",
      "Geen dataverzameling door dubieuze partijen, geen tracking.",
    ),
    F(
      "Wallet",
      "Betaal voor kwaliteit",
      "Een eerlijke prijs voor een eerlijke dienst met echte ondersteuning.",
    ),
  ],
  playlist: [
    F(
      "List",
      "Georganiseerd kijken",
      "M3U-playlists met logische kanaalgroepen en volledige EPG-ondersteuning.",
    ),
    F(
      "Settings",
      "Zelf beheren",
      "Eigen playlist ordenen, kanalen groeperen en favorieten instellen.",
    ),
    F(
      "Zap",
      "Geen dode links",
      "Een betrouwbare dienst met actuele, werkende streams – geen gedoe.",
    ),
    F(
      "ShieldCheck",
      "Veilig en overzichtelijk",
      "Geen malware, geen phishing – alleen werkende en veilige kanalen.",
    ),
  ],
  quality: [
    F(
      "Sparkles",
      "4K zoals het hoort",
      "Echte 4K-streams met hoge bitrate, geen opgeschaald beeld.",
    ),
    F(
      "Gauge",
      "Geen haperingen",
      "Anti-buffering servers voor een vloeiende weergave, ook tijdens piekuren.",
    ),
    F(
      "Sun",
      "HDR10 en Dolby Vision",
      "Ondersteuning voor de nieuwste HDR-standaarden op compatibele apparaten.",
    ),
    F(
      "Cpu",
      "Toekomstbestendig",
      "Naast 4K ook 8K-ready voor de nieuwste televisies en schermen.",
    ),
  ],
  landing: [
    F(
      "Tv",
      "Complete tv-ervaring",
      "25.000+ kanalen, 140.000+ films & series en 4K/8K – alles in één abonnement.",
    ),
    F(
      "Wallet",
      "Aanzienlijke besparing",
      "Tot 80% goedkoper dan een traditioneel kabelabonnement.",
    ),
    F(
      "MonitorSmartphone",
      "Altijd en overal",
      "Kijk thuis op uw tv of onderweg op uw telefoon – waar u ook bent.",
    ),
    F(
      "Gift",
      "Gratis uitproberen",
      "7 dagen gratis, daarna pas betalen – zonder enig risico.",
    ),
  ],
};

// ── Internal-link hubs per intent (all targets exist in IPTV_GERMAN_SLUGS) ────
const INTENT_LINKS: Record<PageIntent, RawSlug[]> = {
  general: [
    "iptv-deutschland",
    "iptv-abonnement",
    "iptv-smarters-pro",
    "iptv-box",
    "m3u-iptv",
    "iptv-illegal",
  ],
  guide: [
    "iptv",
    "iptv-smarters-pro",
    "iptv-player",
    "m3u-iptv",
    "test-iptv",
    "iptv-illegal",
  ],
  app: [
    "iptv-smarters-pro",
    "iptv-player",
    "smart-iptv",
    "iptv-box",
    "m3u-iptv",
    "iptv-abonnement",
  ],
  device: [
    "iptv-box",
    "iptv-smarters-pro",
    "smart-iptv",
    "iptv-abonnement",
    "iptv-4k",
    "iptv-player",
  ],
  subscription: [
    "iptv-abonnement",
    "iptv-deutschland",
    "iptv-4k",
    "test-iptv",
    "iptv-smarters-pro",
    "fournisseur-iptv",
  ],
  provider: [
    "fournisseur-iptv",
    "meilleur-iptv",
    "iptv-abonnement",
    "iptv-deutschland",
    "test-iptv",
    "iptv-illegal",
  ],
  legal: [
    "iptv-illegal",
    "iptv-amende",
    "iptv",
    "iptv-abonnement",
    "fournisseur-iptv",
    "test-iptv",
  ],
  playlist: [
    "m3u-iptv",
    "iptv-player",
    "iptv-smarters-pro",
    "iptv-gratuit",
    "free-popular-iptv-playlist",
    "iptv-abonnement",
  ],
  quality: [
    "iptv-4k",
    "iptv-with-4k",
    "iptv-abonnement",
    "iptv-box",
    "iptv-deutschland",
    "iptv-smarters-pro",
  ],
  landing: [
    "iptv-deutschland",
    "iptv-abonnement",
    "iptv-smarters-pro",
    "iptv-box",
    "iptv-4k",
    "test-iptv",
  ],
};

// ── Section builders ─────────────────────────────────────────────────────────
const featuresSection = (profile: IntentProfile): PageSection => ({
  type: "features",
  heading: "Dit spreekt voor IPTV Amsterdam",
  subheading: profile.label,
  items: profile.features,
});

const howSection = (): PageSection => ({
  type: "howItWorks",
  heading: "In 4 stappen klaar",
  subheading: "Zo eenvoudig is het",
  steps: HOW_STEPS,
});

const pricingSection = (): PageSection => ({
  type: "pricing",
  heading: "Pakketten & prijzen",
  subheading: "Flexibel, eerlijk en zonder contract",
  tiers: PRICING_TIERS,
});

const comparisonSection = (): PageSection => ({
  type: "comparison",
  heading: "IPTV Amsterdam vergeleken",
  subheading: "Zo presteert premium IPTV tegenover alternatieven",
  columns: COMPARISON_COLUMNS,
  rows: COMPARISON_ROWS,
});

const devicesSection = (): PageSection => ({
  type: "devices",
  heading: "Op al uw apparaten",
  subheading: "Compatibel met de populairste platformen",
  list: DEVICE_CARDS,
});

const testimonialsSection = (): PageSection => ({
  type: "testimonials",
  heading: "Dit zeggen onze klanten",
  subheading: "Meer dan 12.000 tevreden kijkers",
  reviews: TESTIMONIAL_REVIEWS,
});

const channelSection = (): PageSection => ({
  type: "channelList",
  heading: "25.000+ kanalen & 140.000+ VOD",
  subheading: "Een overzicht van het aanbod",
  categories: CHANNEL_CATEGORIES,
});

const ctaSection = (kw: string): PageSection => ({
  type: "cta",
  heading: `Klaar voor ${kw} zonder compromissen?`,
  text: "Begin vandaag nog met IPTV Amsterdam – 25.000+ kanalen, 4K/8K en volledige support op alle apparaten.",
  cta: { label: "Probeer 7 dagen", href: ORDER_HREF },
  variant: "primary",
});

const richIntro = (profile: IntentProfile, kw: string): PageSection => ({
  type: "richText",
  heading: `${kw} – het belangrijkste in het kort`,
  html: profile.intro(kw),
});

const richDeep = (profile: IntentProfile, kw: string): PageSection => {
  const { heading, html } = profile.deepDive(kw);
  return { type: "richText", heading, html };
};

const whyChooseUsSection = (intent: PageIntent, _kw: string): PageSection => ({
  type: "features",
  heading: "Waarom kiezen voor IPTV Amsterdam?",
  subheading: INTENT_PROFILE[intent].label,
  items: WHY_CHOOSE_US_FEATURES[intent],
});

const iptvBenefitsSection = (intent: PageIntent, _kw: string): PageSection => ({
  type: "features",
  heading: "De voordelen van IPTV",
  subheading: INTENT_PROFILE[intent].label,
  items: IPTV_BENEFITS_FEATURES[intent],
});

/** Every page gets the full conversion-optimised section flow:
 *  richIntro → features → testimonials → whyChooseUs → iptvBenefits →
 *  devices → howItWorks → [intent-specific extras] → pricing → cta.
 *  No sections are removed from the original intent profiles — the extras
 *  (comparison, channelList, richDeep) are preserved after the core flow.
 */
const buildSectionsFor = (intent: PageIntent, kw: string): PageSection[] => {
  const p = INTENT_PROFILE[intent];

  // ── Core sections (every page gets these in a fixed order) ────────────────
  const sections: PageSection[] = [
    richIntro(p, kw),
    featuresSection(p),
    testimonialsSection(),
    whyChooseUsSection(intent, kw),
    iptvBenefitsSection(intent, kw),
    devicesSection(),
    howSection(),
  ];

  // ── Intent-specific extras (preserves all original differentiating content) ─
  switch (intent) {
    case "subscription":
      sections.push(comparisonSection(), pricingSection(), channelSection());
      break;
    case "landing":
      sections.push(comparisonSection(), channelSection(), pricingSection());
      break;
    case "provider":
      sections.push(comparisonSection(), pricingSection(), richDeep(p, kw));
      break;
    case "device":
      sections.push(comparisonSection(), pricingSection());
      break;
    case "app":
      sections.push(comparisonSection(), pricingSection());
      break;
    case "playlist":
      sections.push(richDeep(p, kw), pricingSection());
      break;
    case "quality":
      sections.push(comparisonSection(), pricingSection());
      break;
    case "legal":
      sections.push(richDeep(p, kw), comparisonSection(), pricingSection());
      break;
    case "guide":
      sections.push(richDeep(p, kw), comparisonSection(), pricingSection());
      break;
    case "general":
    default:
      sections.push(channelSection(), comparisonSection(), pricingSection());
      break;
  }

  // ── Always close with a CTA ──────────────────────────────────────────────
  sections.push(ctaSection(kw));

  return sections;
};

/** Base FAQs shared by every page, plus intent-specific extras (total ≥5). */
const buildFaqsFor = (intent: PageIntent, kw: string): PageFaq[] => {
  const base: PageFaq[] = [
    {
      question: `Wat heb ik nodig om ${kw} te gebruiken?`,
      answer:
        "U heeft een apparaat met internet nodig (Smart-tv, Fire TV Stick, smartphone, box of pc), een stabiele verbinding (min. 16 Mbit/s voor Full HD, 25+ Mbit/s voor 4K) en een compatibele speler. De inloggegevens ontvangt u na de bestelling direct per e-mail.",
    },
    {
      question: `Is ${kw} geschikt voor 4K- en 8K-Amsterdam?`,
      answer: `Ja. Bij voldoende bandbreedte en een krachtig apparaat loopt ${kw} in 4K en deels 8K. Voor vaste installaties adviseren wij LAN/ethernet in plaats van wifi om buffering te voorkomen.`,
    },
    {
      question: `Werkt ${kw} op alle apparaten?`,
      answer:
        "Doorgaans wel – Android, Android TV, Fire TV, Samsung & LG Smart-tv, iPhone/iPad, MAG-boxen en Windows worden ondersteund. Het aantal gelijktijdige streams hangt af van het gekozen pakket.",
    },
  ];
  return [...base, ...INTENT_PROFILE[intent].extraFaqs(kw)];
};

// These three root money pages must appear on every vault page to concentrate
// crawl authority. They are not in IPTV_GERMAN_SLUGS, so they are injected
// as explicit InternalLink objects rather than going through iptvPath().
const MONEY_PAGE_LINKS: InternalLink[] = [
  {
    label: "IPTV Kopen",
    href: "/iptv-kopen",
    description:
      "In 4 stappen IPTV kopen: pakket kiezen, betalen en binnen 5 minuten streamen.",
  },
  {
    label: "IPTV Abonnement",
    href: "/iptv-abonnement",
    description:
      "Vergelijk alle IPTV abonnementen met 25.000+ kanalen en 4K kwaliteit.",
  },
  {
    label: "IPTV Aanbieder",
    href: "/iptv-aanbieder",
    description:
      "Ontdek waarom IPTV Amsterdam de beste IPTV aanbieder van Nederland is.",
  },
];

/** ≥4 contextual internal links — always includes the 3 root money pages. */
const buildLinksFor = (slug: string, intent: PageIntent): InternalLink[] => {
  const fallback: RawSlug[] = [
    "iptv",
    "iptv-deutschland",
    "iptv-smarters-pro",
    "iptv-box",
    "m3u-iptv",
  ];
  const targets = [...INTENT_LINKS[intent], ...fallback]
    .filter((s, i, arr) => s !== slug && arr.indexOf(s) === i)
    .slice(0, 3);
  const vaultLinks: InternalLink[] = targets.map((target) => {
    const label = titleCase(formatKeyword(target));
    return {
      label,
      href: iptvPath(target),
      description: `Meer weten: ${label} in de IPTV Amsterdam kennisbank.`,
    };
  });
  // Money pages first; deduplicate by href so vault links that resolve to the
  // same root path (e.g. iptv-abonnement → /iptv-abonnement) don't appear twice.
  const seen = new Set<string>();
  return [...MONEY_PAGE_LINKS, ...vaultLinks]
    .filter(
      (l) => !seen.has(l.href) && (seen.add(l.href) as unknown as boolean),
    )
    .slice(0, 6);
};

// ── Per-page bespoke overrides for the highest-value pages ────────────────────
const PAGE_OVERRIDES: Partial<Record<RawSlug, Partial<IPTVPage>>> = {
  "iptv-abonnement": {
    metaTitle: "IPTV Abonnement Nederland vanaf 6,66 € | IPTV Amsterdam",
    metaDescription:
      "IPTV abonnement Nederland: 25.000+ kanalen, 140.000+ films & series in 4K/8K, geen contract, direct actief. Probeer nu 7 dagen!",
    hero: {
      headline: "IPTV Abonnement Nederland: beleef televisie opnieuw",
      subheadline:
        "25.000+ kanalen, 140.000+ films & series in 4K/8K – zonder contract, direct geactiveerd en op elk apparaat.",
      cta: { label: "Probeer 7 dagen", href: ORDER_HREF },
      badgeTags: [
        "25.000+ kanalen",
        "4K / 8K",
        "Geen contract",
        "Direct actief",
      ],
      background: "/images/abonnement-bg.webp",
    },
  },
  "abonnement-iptv": {
    metaTitle: "IPTV abonnement kopen – Premium IPTV | IPTV Amsterdam",
    hero: {
      headline: "Abonnement IPTV: premium Amsterdam voor Nederland",
      subheadline:
        "Flexibele pakketten vanaf 6,66 €/maand met 25.000+ kanalen, 4K/8K en directe activering – helemaal zonder contract.",
      cta: { label: "Probeer 7 dagen", href: ORDER_HREF },
      badgeTags: [
        "Vanaf 6,66 €/maand",
        "Gratis proef",
        "Geen contract",
        "4K / 8K",
      ],
      background: "/images/abonnement-bg.webp",
    },
  },
  "iptv-deutschland": {
    metaTitle: "Beste IPTV Nederland – 25.000+ kanalen in 4K | IPTV Amsterdam",
    metaDescription:
      "Beste IPTV Nederland met alle Nederlandse kanalen, 140.000+ VOD-titels in 4K/8K en Nederlandse EPG. Geen contract. Probeer nu 7 dagen!",
  },
  iptv: {
    metaTitle: "Wat is IPTV? Gids voor stabiel streamen | IPTV Amsterdam",
    metaDescription:
      "IPTV eenvoudig uitgelegd: zo werkt televisie via internet – apparaten, installatie, veiligheid & 4K. Begrijp het nu en start met IPTV Amsterdam.",
  },
  "iptv-smarters-pro": {
    metaTitle: "IPTV Smarters Pro instellen (handleiding) | IPTV Amsterdam",
    metaDescription:
      "IPTV Smarters Pro installeren & instellen: M3U/Xtream, EPG, ondertiteling op alle apparaten. Stapsgewijze handleiding van IPTV Amsterdam.",
  },
};

// ── Assemble one IPTVPage from a slug ────────────────────────────────────────
const buildIptvPage = (slug: RawSlug): IPTVPage => {
  const keyword = formatKeyword(slug);
  const kw = titleCase(keyword);
  const intent = detectIntentV2(slug);
  const profile = INTENT_PROFILE[intent];
  const path = `${basePath}/${slug}`;
  const canonicalUrl = absoluteUrl(path);
  const lang: PageLanguage = "nl";

  const metaTitle = clamp(`${kw} | IPTV Amsterdam`, 60);

  const base: IPTVPage = {
    slug,
    keyword,
    lang,
    intent,
    hreflang: { nl: canonicalUrl },
    metaTitle,
    metaDescription: clamp(profile.metaDescription(kw), 155),
    canonicalUrl,
    ogImage: OG,
    structuredData: profile.structuredData,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "IPTV Gids", href: basePath },
      { label: kw, href: path },
    ],
    hero: {
      headline: profile.headline(kw),
      subheadline: profile.subheadline,
      cta: { label: profile.ctaLabel, href: ORDER_HREF },
      badgeTags: profile.badgeTags,
    },
    sections: buildSectionsFor(intent, kw),
    faq: buildFaqsFor(intent, kw),
    internalLinks: buildLinksFor(slug, intent),
    updatedAt: UPDATED_AT,
  };

  const override = PAGE_OVERRIDES[slug];
  if (!override) return base;
  return {
    ...base,
    ...override,
    hero: { ...base.hero, ...(override.hero ?? {}) },
  };
};

export const IPTV_GERMAN_PAGES_V2: IPTVPage[] =
  IPTV_GERMAN_SLUGS.map(buildIptvPage);

export const IPTV_GERMAN_PAGE_MAP_V2 = new Map(
  IPTV_GERMAN_PAGES_V2.map((page) => [page.slug, page]),
);

export const getIptvGermanPageV2 = (slug: string): IPTVPage | undefined =>
  IPTV_GERMAN_PAGE_MAP_V2.get(slug);
