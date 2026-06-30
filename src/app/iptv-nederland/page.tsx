import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SixteenSectionLayout from "@/components/sections/SixteenSectionLayout";
import { SIXTEEN_SECTION_PAGES } from "@/content/sixteen-section";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { IptvNederlandZenders, IptvNederlandFaq } from "@/components/sections/page/IptvNederlandSections";
import AuthoritySections from "@/components/sections/page/AuthoritySections";

const content = SIXTEEN_SECTION_PAGES["iptv-nederland"];

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

export default function IptvNederlandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: absoluteUrl("/") },
            { name: "IPTV Nederland", url: absoluteUrl("/iptv-nederland") },
          ])),
        }}
      />
      <SixteenSectionLayout
        content={content}
        extraSections={
          <>
            <AuthoritySections slug="iptv-nederland" />
            <IptvNederlandZenders />
            <IptvNederlandFaq />
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
