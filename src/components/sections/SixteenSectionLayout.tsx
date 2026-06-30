import { type ReactNode, Fragment } from "react";
import Link from "next/link";
import type { SixteenSectionContent } from "@/content/sixteen-section";
import type { PageFaq } from "@/content/iptv-german-pages";
import { faqSchema } from "@/lib/structured-data";
import {
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  Star,
  Smartphone,
  Monitor,
  Tv,
  Laptop,
  Award,
  HeartHandshake,
  Radio,
  Signal,
  Globe,
} from "lucide-react";

// ─── Shared sub-components ──────────────────────────────────────────────────
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FaqSection from "@/components/sections/page/FaqSection";
import CTA from "@/components/sections/CTA";

// ─── Section wrapper (consistent spacing + ID) ─────────────────────────────
function SectionWrapper({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

// ─── Section heading helper ─────────────────────────────────────────────────
function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full border border-france-500/20 bg-france-500/15 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-france-100">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-black leading-tight text-blanc-50 lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blanc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Card grid (2/3/4 column responsive) ────────────────────────────────────
function CardGrid({
  items,
  cols = 3,
  icon,
}: {
  items: { title: string; desc: string }[];
  cols?: 2 | 3 | 4;
  icon?: boolean;
}) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "md:grid-cols-3",
    4: "lg:grid-cols-4",
  };
  return (
    <div className={`grid gap-6 ${gridCols[cols]} sm:grid-cols-2`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="group rounded-3xl border border-blanc-50/5 bg-france-900/60 p-6 transition-all hover:-translate-y-1 hover:border-france-500/30"
        >
          {icon && (
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-france-700/25 bg-france-700/15 text-france-400 transition-colors group-hover:border-france-500/45">
              <CheckCircle2 size={24} aria-hidden="true" />
            </div>
          )}
          <h3 className="mb-3 text-lg font-black text-blanc-50">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-blanc-400">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 3 — Problem
// ═══════════════════════════════════════════════════════════════════════════
function ProblemSection({
  eyebrow,
  title,
  subtitle,
  pains,
}: SixteenSectionContent["problem"]) {
  return (
    <SectionWrapper id="probleem">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <CardGrid items={pains} cols={2} icon />
      </div>
    </SectionWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 4 — Solution
// ═══════════════════════════════════════════════════════════════════════════
function SolutionSection({
  eyebrow,
  title,
  subtitle,
  points,
}: SixteenSectionContent["solution"]) {
  return (
    <SectionWrapper id="oplossing" className="bg-france-900/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid gap-6 sm:grid-cols-2">
          {points.map((point, i) => (
            <div
              key={point.title}
              className="flex gap-5 rounded-3xl border border-france-500/10 bg-france-900/70 p-6 transition-all hover:border-france-500/25"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-france-500/15 text-sm font-black text-france-100">
                {i + 1}
              </span>
              <div>
                <h3 className="mb-2 text-lg font-black text-blanc-50">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-blanc-400">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 5 — Features
// ═══════════════════════════════════════════════════════════════════════════
function FeaturesSection({
  eyebrow,
  title,
  subtitle,
  features,
}: SixteenSectionContent["features"]) {
  return (
    <SectionWrapper id="functies">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <CardGrid items={features} cols={3} icon />
      </div>
    </SectionWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 6 — Why Us
// ═══════════════════════════════════════════════════════════════════════════
function WhyUsSection({
  eyebrow,
  title,
  subtitle,
  reasons,
}: SixteenSectionContent["whyUs"]) {
  return (
    <SectionWrapper id="waarom-wij" className="bg-france-900/30">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, i) => {
            const icons = [Award, HeartHandshake, Sparkles];
            const Icon = icons[i] || Sparkles;
            return (
              <div
                key={reason.title}
                className="group rounded-3xl border border-blanc-50/5 bg-france-900 p-8 text-center transition-all hover:-translate-y-1 hover:border-france-500/30"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-france-700/25 bg-france-700/15 text-france-400 transition-colors group-hover:border-france-500/45">
                  <Icon size={32} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-black text-blanc-50">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-blanc-400">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 7 — How It Works
// ═══════════════════════════════════════════════════════════════════════════
function HowSection({
  eyebrow,
  title,
  subtitle,
  steps,
}: SixteenSectionContent["how"]) {
  return (
    <SectionWrapper id="hoe-het-werkt">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-linear-to-r from-transparent via-france-500/30 to-transparent lg:block"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map(({ step, title: stepTitle, desc }) => (
              <div
                key={step}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-france-500/30 bg-france-900 shadow-[0_0_40px_-10px] shadow-france-500/20 transition-shadow group-hover:shadow-france-500/40">
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-rouge-500 text-sm font-black text-blanc-50 shadow-md">
                    {step}
                  </span>
                  <Zap size={36} aria-hidden="true" className="text-france-400" />
                </div>
                <h3 className="mb-3 text-xl font-black text-blanc-50">
                  {stepTitle}
                </h3>
                <p className="text-sm leading-relaxed text-blanc-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 8 — Devices (static grid, no client-side search needed here)
// ═══════════════════════════════════════════════════════════════════════════
function DevicesSection({
  eyebrow,
  title,
  subtitle,
  deviceGroups,
}: SixteenSectionContent["devices"]) {
  const groupIcons = [Tv, Monitor, Smartphone, Laptop];
  return (
    <SectionWrapper id="compatibiliteit" className="bg-france-900/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid gap-6 sm:grid-cols-2">
          {deviceGroups.map((group, i) => {
            const Icon = groupIcons[i] || Tv;
            return (
              <div
                key={group.name}
                className="rounded-2xl border border-blanc-50/10 bg-france-900 p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-france-500/15 text-france-400">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-black text-blanc-50">
                    {group.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-blanc-300"
                    >
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-emerald-400"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 9 — Channels
// ═══════════════════════════════════════════════════════════════════════════
function ChannelsSection({
  eyebrow,
  title,
  subtitle,
  channelGroups,
}: SixteenSectionContent["channels"]) {
  const groupIcons = [Radio, Globe, Star, Signal];
  return (
    <SectionWrapper id="zenders">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2">
          {channelGroups.map((group, i) => {
            const Icon = groupIcons[i] || Radio;
            return (
              <div key={group.name} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-france-500/15 text-france-400">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-black text-blanc-50">
                    {group.name}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-xl bg-france-900/60 px-3 py-2 text-sm text-blanc-300"
                    >
                      <CheckCircle2
                        size={12}
                        className="shrink-0 text-france-400"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 11 — Comparison
// ═══════════════════════════════════════════════════════════════════════════
function ComparisonSection({
  eyebrow,
  title,
  subtitle,
  rows,
}: SixteenSectionContent["comparison"]) {
  return (
    <SectionWrapper id="vergelijking" className="bg-france-900/30">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="overflow-hidden rounded-3xl border border-blanc-50/10">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-sm">
            <div className="border-b border-blanc-50/5 bg-blanc-50/[0.02] p-4 font-bold uppercase tracking-wider text-blanc-500">
              Functie
            </div>
            <div className="border-b border-l border-france-500/20 bg-france-500/10 p-4 text-center font-black uppercase tracking-wider text-france-300">
              IPTV Amsterdam
            </div>
            <div className="border-b border-l border-blanc-50/5 bg-blanc-50/[0.02] p-4 text-center font-black uppercase tracking-wider text-blanc-500">
              Anderen
            </div>
            {rows.map((row, idx) => (
              <Fragment key={idx}>
                <div
                  className={`flex items-center px-4 py-3.5 font-medium text-blanc-300 ${
                    idx < rows.length - 1 ? "border-b border-blanc-50/5" : ""
                  }`}
                >
                  {row.feature}
                </div>
                <div
                  className={`flex items-center justify-center border-l border-france-500/20 bg-france-500/5 px-4 py-3.5 font-bold text-france-100 ${
                    idx < rows.length - 1 ? "border-b border-france-500/10" : ""
                  }`}
                >
                  {row.us}
                </div>
                <div
                  className={`flex items-center justify-center border-l border-blanc-50/5 px-4 py-3.5 text-blanc-400 ${
                    idx < rows.length - 1 ? "border-b border-blanc-50/5" : ""
                  }`}
                >
                  {row.them}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 13 — Security & Reliability
// ═══════════════════════════════════════════════════════════════════════════
function SecuritySection({
  eyebrow,
  title,
  subtitle,
  items,
}: SixteenSectionContent["security"]) {
  return (
    <SectionWrapper id="veiligheid">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <CardGrid items={items} cols={2} icon />
      </div>
    </SectionWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 15 — Internal Linking Hub
// ═══════════════════════════════════════════════════════════════════════════
function InternalLinksSection({
  eyebrow,
  title,
  subtitle,
  links,
}: SixteenSectionContent["internalLinks"]) {
  return (
    <SectionWrapper id="ontdek-meer" className="bg-france-900/30">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col gap-2 rounded-2xl border border-blanc-50/5 bg-france-900 p-6 transition-all hover:-translate-y-1 hover:border-france-500/30"
            >
              <span className="flex items-center gap-2 text-lg font-black text-blanc-50 transition-colors group-hover:text-france-100">
                {link.label}
                <ChevronRight
                  size={16}
                  className="text-france-400 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
              {link.description && (
                <span className="text-sm text-blanc-400">
                  {link.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT — renders exactly 16 sections + optional extra sections
// ══════════════════════════════════════════════════════════════════════════════
export default function SixteenSectionLayout({
  content,
  extraSections,
}: {
  content: SixteenSectionContent;
  extraSections?: ReactNode;
}) {
  const {
    hero,
    trustBar,
    problem,
    solution,
    features,
    whyUs,
    how,
    devices,
    channels,
    pricing,
    comparison,
    testimonials,
    security,
    faq,
    internalLinks,
    finalCta,
  } = content;

  // Map FAQ entries to PageFaq type
  const faqEntries: PageFaq[] = faq.faqs;

  return (
    <main className="flex-1">
      {/* FAQPage JSON-LD — server-side, not affected by client filtering */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faq.faqs)).replace(/</g, "\\u003c"),
        }}
      />

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 1 — Hero (H1 + brand + dual CTA + social proof)            */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <Hero
        pillText={hero.pill}
        bgImage={hero.bg}
        title={
          <span className="mt-2 block">
            {hero.title}
          </span>
        }
        subtitle={hero.subtitle}
      />

      <div className="space-y-0 pb-28 sm:pb-32">
        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 2 — Trust Bar (social proof stats)                      */}
        {/* ════════════════════════════════════════════════════════════════ */}
        {trustBar.items.length > 0 && (
          <SectionWrapper
            id="vertrouwen"
            className="pt-8 sm:pt-12 pb-0 -mt-8 sm:-mt-12"
          >
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {trustBar.items.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-blanc-50/5 bg-france-900/80 p-4 text-center backdrop-blur-sm"
                  >
                    <div className="text-xl font-black text-france-100 sm:text-2xl">
                      {item.value}
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-blanc-500">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        )}

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 3 — Problem (pain points)                               */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <ProblemSection {...problem} />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 4 — Solution                                            */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <SolutionSection {...solution} />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 5 — Features (SEO keyword-optimized cards)              */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <FeaturesSection {...features} />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 6 — Why Us (differentiation)                            */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <WhyUsSection {...whyUs} />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 7 — How It Works (3 steps)                              */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <HowSection {...how} />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 8 — Device Compatibility                                */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <DevicesSection {...devices} />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 9 — Channels Overview                                   */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <ChannelsSection {...channels} />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 10 — Pricing (conversion-focused)                       */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <SectionWrapper id="pakketten">
          <Pricing
            pillText={pricing.pillText}
            title={pricing.title}
            subtitle={pricing.subtitle}
          />
        </SectionWrapper>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 11 — Comparison vs Competitors                          */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <ComparisonSection {...comparison} />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 12 — Testimonials (Google reviews carousel)             */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <SectionWrapper id="beoordelingen">
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
            subtitle={testimonials.subtitle}
          />
          <Testimonials />
        </SectionWrapper>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 13 — Security & Reliability                             */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <SecuritySection {...security} />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 14 — FAQ (exactly 8)                                    */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <SectionWrapper id="faq">
          <SectionHeading
            eyebrow={faq.eyebrow}
            title={faq.title}
            subtitle={faq.subtitle}
          />
          <div className="mx-auto max-w-3xl">
            <FaqSection faqs={faqEntries} />
          </div>
        </SectionWrapper>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 15 — Internal Linking Hub (links to 5 other pages)      */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <InternalLinksSection {...internalLinks} />

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* EXTRA — page-specific + professional sections (optional slot)   */}
        {/* ════════════════════════════════════════════════════════════════ */}
        {extraSections}

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION 16 — Final CTA                                          */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CTA title={finalCta.title} description={finalCta.description} />
      </div>
    </main>
  );
}
