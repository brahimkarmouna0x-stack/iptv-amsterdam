import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SixteenSectionLayout from "@/components/sections/SixteenSectionLayout";
import { SIXTEEN_SECTION_PAGES } from "@/content/sixteen-section";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { IptvAanbiederCriteria, IptvAanbiederFaq } from "@/components/sections/page/IptvAanbiederSections";
import AuthoritySections from "@/components/sections/page/AuthoritySections";

const content = SIXTEEN_SECTION_PAGES["iptv-aanbieder"];

export const metadata: Metadata = buildMetadata({
  title: content.meta.title,
  description: content.meta.description,
  path: content.path,
  ogImage: false,
});

const Stats = dynamic(() => import("@/components/sections/Stats"), { ssr: true });
const ChannelShowcase = dynamic(() => import("@/components/sections/ChannelShowcase"), { ssr: true });
const Guarantee = dynamic(() => import("@/components/sections/Guarantee"), { ssr: true });
const ContentHighlights = dynamic(() => import("@/components/sections/ContentHighlights"), { ssr: true });
const TrustBadges = dynamic(() => import("@/components/sections/TrustBadges"), { ssr: true });
const Partners = dynamic(() => import("@/components/sections/Partners"), { ssr: true });

export default function IptvAanbiederPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: absoluteUrl("/") },
            { name: "IPTV Aanbieder", url: absoluteUrl("/iptv-aanbieder") },
          ])),
        }}
      />
      <SixteenSectionLayout
        content={content}
        extraSections={
          <>
            <AuthoritySections slug="iptv-aanbieder" />
            <IptvAanbiederCriteria />
            <IptvAanbiederFaq />
            <Stats />
            <ChannelShowcase />
            <Guarantee />
            <ContentHighlights />
            <TrustBadges />
            <Partners />
          </>
        }
      />
    </>
  );
}
