import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import AuthoritySections from "@/components/sections/page/AuthoritySections";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "IPTV Amsterdam — Beste IPTV Abonnement van Nederland",
  description:
    "Premium IPTV abonnement in Amsterdam en heel Nederland: 25.000+ kanalen, 140.000+ films & series in 4K, nul buffering. Directe activering, geen contracten.",
  path: "/",
  // The root `opengraph-image.tsx` supplies the branded 1200×630 social card.
  ogImage: false,
});

// Above-fold: Hero is static (LCP element)
// Below-fold sections: dynamically imported with SSR enabled
const FeatureMarquee = dynamic(() => import("@/components/ui/FeatureMarquee"), {
  ssr: true,
});
const WhyChooseAmsterdam = dynamic(
  () => import("@/components/sections/WhyChooseAmsterdam"),
  { ssr: true },
);
const HowItWorksSteps = dynamic(
  () => import("@/components/sections/HowItWorksSteps"),
  { ssr: true },
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: true },
);
const SubscriptionPlans = dynamic(
  () => import("@/components/sections/SubscriptionPlans"),
  { ssr: true },
);
const Categories = dynamic(() => import("@/components/sections/Categories"), {
  ssr: true,
});
const ChannelShowcase = dynamic(
  () => import("@/components/sections/ChannelShowcase"),
  { ssr: true },
);
const Trending = dynamic(() => import("@/components/sections/Trending"), {
  ssr: true,
});
const Partners = dynamic(() => import("@/components/sections/Partners"), {
  ssr: true,
});
const Features = dynamic(() => import("@/components/sections/Features"), {
  ssr: true,
});
const WhyIPTVAmsterdam = dynamic(
  () => import("@/components/sections/WhyIPTVStreaming"),
  { ssr: true },
);
const ComparisonTable = dynamic(
  () => import("@/components/sections/ComparisonTable"),
  { ssr: true },
);
const Guide = dynamic(() => import("@/components/sections/Guide"), {
  ssr: true,
});
const Guarantee = dynamic(() => import("@/components/sections/Guarantee"), {
  ssr: true,
});
const Pricing = dynamic(() => import("@/components/sections/Pricing"), {
  ssr: true,
});
const Compatibility = dynamic(
  () => import("@/components/sections/Compatibility"),
  { ssr: true },
);
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const ContentHighlights = dynamic(
  () => import("@/components/sections/ContentHighlights"),
  { ssr: true },
);
const Stats = dynamic(() => import("@/components/sections/Stats"), {
  ssr: true,
});
const TrustBadges = dynamic(() => import("@/components/sections/TrustBadges"), {
  ssr: true,
});
const CustomerTrust = dynamic(
  () => import("@/components/sections/CustomerTrust"),
  { ssr: true },
);
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: true });

export default function Home() {
  return (
    <main className="home-page flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema()),
        }}
      />

      {/* Hero — above fold, static LCP element */}
      <Hero />

      {/* Feature strip */}
      <FeatureMarquee />

      {/* SECTION 1: Why Choose IPTV Amsterdam */}
      <WhyChooseAmsterdam />

      {/* SECTION 3: How It Works — 4-step premium timeline */}
      <HowItWorksSteps />

      {/* Social proof */}
      <Testimonials />

      {/* SECTION 2: Subscription Plans overview (Monthly/Quarterly/Semi/Annual) */}
      <SubscriptionPlans />

      {/* Content categories */}
      <Categories />
      <ChannelShowcase />
      <Trending />
      <Partners />

      {/* Feature grid */}
      <Features />

      {/* Existing Why section (detailed reasons) */}
      <WhyIPTVAmsterdam />

      {/* Comparison & guides */}
      <ComparisonTable />
      <Guide />
      <Guarantee />

      {/* Interactive pricing with device selector */}
      <Pricing />

      <Compatibility />
      <FAQ />
      <ContentHighlights />
      <Stats />
      <TrustBadges />

      {/* SECTION 4: Why Customers Choose Us — reviews + metrics + FAQ + CTA */}
      <CustomerTrust />

      <AuthoritySections slug="home" />
      <CTA />
    </main>
  );
}
