import { faqSchema } from "@/lib/structured-data";
import { offerRange } from "@/lib/pricing";
import { SITE } from "@/lib/seo";
import type { IPTVPage } from "@/content/iptv-german-pages";

/** Escape "<" so a stray HTML tag in content can't break out of the script tag. */
const serialize = (data: unknown): string =>
  JSON.stringify(data).replace(/</g, "\\u003c");

/**
 * Emits the page's primary schema.org type (driven by `page.structuredData`)
 * plus a FAQPage block. BreadcrumbList is emitted by the `Breadcrumbs` component
 * so it stays co-located with the visible breadcrumb markup.
 */
export default function JsonLd({ page }: { page: IPTVPage }) {
  const primary = buildPrimarySchema(page);
  const faq = page.faq.length ? faqSchema(page.faq) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(primary) }}
      />
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(faq) }}
        />
      )}
    </>
  );
}

function buildPrimarySchema(page: IPTVPage): Record<string, unknown> {
  const base = {
    "@context": "https://schema.org",
    name: page.metaTitle,
    description: page.metaDescription,
    url: page.canonicalUrl,
    // Match the document language (site is Dutch; a few pages are English).
    inLanguage: page.lang === "en" ? "en" : "nl",
    image: page.ogImage,
  };

  switch (page.structuredData) {
    case "Product":
      return {
        ...base,
        "@type": "Product",
        brand: { "@type": "Brand", name: SITE.name },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          // Derived from PRICING_DATA so schema prices always match the pricing table.
          ...offerRange(),
          url: page.canonicalUrl,
        },
      };
    case "Article":
      return {
        ...base,
        "@type": "Article",
        headline: page.hero.headline,
        datePublished: page.updatedAt,
        dateModified: page.updatedAt,
        author: { "@type": "Organization", name: SITE.name },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          logo: {
            "@type": "ImageObject",
            url: `${SITE.url}/images/logo-iptv-Amsterdam.png`,
          },
        },
      };
    case "WebPage":
    case "FAQPage":
    case "BreadcrumbList":
    default:
      return { ...base, "@type": "WebPage" };
  }
}
