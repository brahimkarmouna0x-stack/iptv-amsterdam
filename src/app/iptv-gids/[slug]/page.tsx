import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getIptvGermanPageV2,
  IPTV_GERMAN_PAGES_V2,
  PROMOTED_TO_ROOT,
} from "@/content/iptv-german-pages";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageHero from "@/components/sections/page/PageHero";
import PageRenderer from "@/components/sections/page/PageRenderer";
import FaqSection from "@/components/sections/page/FaqSection";
import InternalLinksSection from "@/components/sections/page/InternalLinksSection";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Unknown slugs automatically 404 via notFound() in the page component.
export function generateStaticParams() {
  // Skip slugs promoted to root-level pages — they 308-redirect via next.config,
  // so generating them here would only produce unreachable duplicate routes.
  return IPTV_GERMAN_PAGES_V2.filter(
    (page) => !PROMOTED_TO_ROOT[page.slug],
  ).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getIptvGermanPageV2(slug);

  if (!page) {
    return {
      title: "Pagina niet gevonden | IPTV Amsterdam",
      robots: { index: false, follow: false },
    };
  }

  const languages: Record<string, string> = {
    "nl-NL": page.hreflang.nl,
    "x-default": page.hreflang.nl,
  };
  if (page.hreflang.en) languages["en"] = page.hreflang.en;

  return {
    // `absolute` bypasses the root layout's "%s | IPTV Amsterdam" template so the
    // brand isn't appended twice (metaTitle already includes it).
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: {
      canonical: page.canonicalUrl,
      languages,
    },
    openGraph: {
      type: page.structuredData === "Product" ? "website" : "article",
      url: page.canonicalUrl,
      siteName: "IPTV Amsterdam",
      title: page.metaTitle,
      description: page.metaDescription,
      locale: "nl_NL",
      images: [page.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.ogImage],
    },
  };
}

export default async function IptvGermanSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getIptvGermanPageV2(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-france-950">
      <JsonLd page={page} />

      <PageHero hero={page.hero}>
        <Breadcrumbs items={page.breadcrumbs} />
      </PageHero>

      <PageRenderer sections={page.sections} />

      <FaqSection faqs={page.faq} />

      <InternalLinksSection links={page.internalLinks} />

      <div className="border-t border-blanc-50/5 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Link
            href="/iptv-gids"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blanc-500 transition-colors hover:text-blanc-50"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Terug naar de kennisbank
          </Link>
        </div>
      </div>
    </div>
  );
}
