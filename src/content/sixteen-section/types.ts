import type { ReactNode } from "react";

// ─── Reusable item types ───────────────────────────────────────────────────
export type TextItem = { title: string; desc: string };
export type FaqEntry = { question: string; answer: string };
export type Step3 = { step: string; title: string; desc: string };
export type InternalLink = { label: string; href: string; description?: string };

// ─── Page metadata ─────────────────────────────────────────────────────────
export type PageMeta = {
  title: string;
  description: string;
  h1: string;
};

// ─── Section 1: Hero ───────────────────────────────────────────────────────
export type SectionHero = {
  pill: string;
  title: string;       // full H1 with keyword branding
  subtitle: string;
  bg?: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
};

// ─── Section 2: Trust bar ──────────────────────────────────────────────────
export type SectionTrustBar = {
  items: { label: string; value: string }[];
};

// ─── Section 3: Problem ────────────────────────────────────────────────────
export type SectionProblem = {
  eyebrow: string;
  title: string;
  subtitle: string;
  pains: TextItem[];
};

// ─── Section 4: Solution ───────────────────────────────────────────────────
export type SectionSolution = {
  eyebrow: string;
  title: string;
  subtitle: string;
  points: TextItem[];
};

// ─── Section 5: Features ───────────────────────────────────────────────────
export type SectionFeatures = {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: TextItem[];
};

// ─── Section 6: Why Us ─────────────────────────────────────────────────────
export type SectionWhyUs = {
  eyebrow: string;
  title: string;
  subtitle: string;
  reasons: TextItem[];
};

// ─── Section 7: How It Works ───────────────────────────────────────────────
export type SectionHow = {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: Step3[];
};

// ─── Section 8: Device Compatibility ───────────────────────────────────────
export type SectionDevices = {
  eyebrow: string;
  title: string;
  subtitle: string;
  deviceGroups: { name: string; items: string[] }[];
  ctaText: string;
};

// ─── Section 9: Channels ───────────────────────────────────────────────────
export type SectionChannels = {
  eyebrow: string;
  title: string;
  subtitle: string;
  channelGroups: { name: string; items: string[] }[];
};

// ─── Section 10: Pricing ───────────────────────────────────────────────────
export type SectionPricing = {
  pillText?: string;
  title?: ReactNode;
  subtitle?: string;
};

// ─── Section 11: Comparison ────────────────────────────────────────────────
export type ComparisonRow = {
  feature: string;
  us: string;
  them: string;
};
export type SectionComparison = {
  eyebrow: string;
  title: string;
  subtitle: string;
  rows: ComparisonRow[];
};

// ─── Section 12: Testimonials ──────────────────────────────────────────────
export type SectionTestimonials = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

// ─── Section 13: Security & Reliability ─────────────────────────────────────
export type SectionSecurity = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: TextItem[];
};

// ─── Section 14: FAQ ───────────────────────────────────────────────────────
export type SectionFaq = {
  eyebrow: string;
  title: string;
  subtitle: string;
  faqs: FaqEntry[];  // exactly 8
};

// ─── Section 15: Internal Linking Hub ──────────────────────────────────────
export type SectionInternalLinks = {
  eyebrow: string;
  title: string;
  subtitle: string;
  links: InternalLink[];
};

// ─── Section 16: Final CTA ─────────────────────────────────────────────────
export type SectionFinalCta = {
  title: ReactNode;
  description: string;
};

// ─── Full 16-section page content model ─────────────────────────────────────
export type SixteenSectionContent = {
  slug: string;
  path: string;
  meta: PageMeta;

  // The 16 sections
  hero: SectionHero;
  trustBar: SectionTrustBar;
  problem: SectionProblem;
  solution: SectionSolution;
  features: SectionFeatures;
  whyUs: SectionWhyUs;
  how: SectionHow;
  devices: SectionDevices;
  channels: SectionChannels;
  pricing: SectionPricing;
  comparison: SectionComparison;
  testimonials: SectionTestimonials;
  security: SectionSecurity;
  faq: SectionFaq;
  internalLinks: SectionInternalLinks;
  finalCta: SectionFinalCta;
};
