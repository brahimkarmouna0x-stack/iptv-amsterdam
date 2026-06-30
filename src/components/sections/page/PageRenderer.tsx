import dynamic from "next/dynamic";
import type { PageSection } from "@/content/iptv-german-pages";
import { SectionSkeleton } from "./Skeletons";

// Each section is lazy-loaded in its own chunk with a typed skeleton fallback.
// Interactive sections ('use client') are truly code-split; static server
// sections still SSR for SEO (no ssr:false — disallowed in Server Components).
const RichTextSection = dynamic(() => import("./RichTextSection"), {
  loading: () => <SectionSkeleton kind="richText" />,
});
const FeaturesSection = dynamic(() => import("./FeaturesSection"), {
  loading: () => <SectionSkeleton kind="features" />,
});
const HowItWorksSection = dynamic(() => import("./HowItWorksSection"), {
  loading: () => <SectionSkeleton kind="howItWorks" />,
});
const PricingSection = dynamic(() => import("@/components/sections/Pricing"), {
  loading: () => <SectionSkeleton kind="pricing" />,
});
const ChannelListSection = dynamic(() => import("./ChannelListSection"), {
  loading: () => <SectionSkeleton kind="channelList" />,
});
const CtaSection = dynamic(() => import("./CtaSection"), {
  loading: () => <SectionSkeleton kind="cta" />,
});
const ComparisonSection = dynamic(() => import("./ComparisonSection"), {
  loading: () => <SectionSkeleton kind="comparison" />,
});
const DevicesSection = dynamic(() => import("./DevicesSection"), {
  loading: () => <SectionSkeleton kind="devices" />,
});
const TestimonialsSection = dynamic(
  () => import("@/components/sections/Testimonials"),
  {
    loading: () => <SectionSkeleton kind="testimonials" />,
  },
);
const FaqSection = dynamic(() => import("./FaqSection"), {
  loading: () => <SectionSkeleton kind="faq" />,
});

/** Renders the page's section list by switching on the discriminated `type`. */
export default function PageRenderer({ sections }: { sections: PageSection[] }) {
  return (
    <>
      {sections.map((section, index) => {
        const key = `${section.type}-${index}`;
        switch (section.type) {
          case "richText":
            return <RichTextSection key={key} {...section} />;
          case "features":
            return <FeaturesSection key={key} {...section} />;
          case "howItWorks":
            return <HowItWorksSection key={key} {...section} />;
          case "pricing":
            return (
              <PricingSection
                key={key}
                title={section.heading}
                pillText={section.subheading}
              />
            );
          case "channelList":
            return <ChannelListSection key={key} {...section} />;
          case "comparison":
            return <ComparisonSection key={key} {...section} />;
          case "devices":
            return <DevicesSection key={key} {...section} />;
          case "testimonials":
            return <TestimonialsSection key={key} />;
          case "cta":
            return <CtaSection key={key} {...section} />;
          case "faq":
            return <FaqSection key={key} faqs={section.items} />;
          default:
            return null;
        }
      })}
    </>
  );
}
