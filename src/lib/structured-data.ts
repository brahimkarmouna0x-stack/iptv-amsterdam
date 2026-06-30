import { SITE } from "./seo";
import { offerRange } from "./pricing";

// ─── Organization Schema ───────────────────────────────────────────────────
export function organizationSchema(phoneNumber?: string) {
  const contactPoint: Record<string, string> = {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE.url}/support/contact`,
  };

  // Include phone in schema when available (improves SEO/local search)
  if (phoneNumber) {
    contactPoint.telephone = `+${phoneNumber}`;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo-iptv-streaming.png`,
    "@id": `${SITE.url}/#organization`,
    description: SITE.description,
    contactPoint,
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
    sameAs: [] as string[],
  };
}

// ─── Website Schema ────────────────────────────────────────────────────────
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "nl",
  };
}

// ─── WebPage Schema ────────────────────────────────────────────────────────
export function webPageSchema(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: path.startsWith("http") ? path : `${SITE.url}${path}`,
    inLanguage: "nl",
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
    },
  };
}

// ─── BreadcrumbList Schema ─────────────────────────────────────────────────
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE.url}${item.url}`,
    })),
  };
}

// ─── FAQPage Schema ────────────────────────────────────────────────────────
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── HowTo Schema (rich result: step-by-step) ──────────────────────────────
export function howToSchema({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  /** ISO-8601 duration, e.g. "PT5M". */
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    image: `${SITE.url}/images/logo-iptv-streaming.png`,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((s, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

// ─── Product + Review Schema (rich result: star ratings) ───────────────────
// Marks the IPTV subscription as a Product carrying an aggregateRating and a
// sample of reviews. The rating/reviews MUST also be visible on the page
// (the Reviews section renders them) to comply with Google's guidelines.
export function productReviewSchema({
  name,
  description,
  ratingValue,
  reviewCount,
  reviews,
}: {
  name: string;
  description: string;
  ratingValue: number;
  reviewCount: number;
  reviews: { author: string; rating: number; date: string; body: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `${SITE.url}/images/logo-iptv-streaming.png`,
    brand: { "@type": "Brand", name: SITE.name },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      reviewCount: String(reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewBody: r.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
    })),
    offers: {
      "@type": "AggregateOffer",
      url: `${SITE.url}/#pakketten`,
      priceCurrency: "EUR",
      // Derived from PRICING_DATA so schema prices always match the pricing table.
      ...offerRange(),
      availability: "https://schema.org/InStock",
    },
  };
}

// ─── Service Schema ────────────────────────────────────────────────────────
export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IPTV Amsterdam Streaming Service",
    provider: {
      "@type": "Organization",
      name: SITE.name,
    },
    name: "Premium IPTV Amsterdam Abonnement",
    image: `${SITE.url}/images/logo-iptv-streaming.png`,
    description: "Het beste premium IPTV abonnement in Amsterdam en heel Nederland met duizenden kanalen en een uitgebreide VOD-bibliotheek in 4K/8K.",
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    offers: {
      "@type": "AggregateOffer",
      url: `${SITE.url}/#pakketten`,
      priceCurrency: "EUR",
      // Derived from PRICING_DATA so schema prices always match the pricing table.
      ...offerRange(),
      availability: "https://schema.org/InStock"
    },
  };
}
