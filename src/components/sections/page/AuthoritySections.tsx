import Link from "next/link";
import { ArrowRight, MapPin, Star, BookOpen, ListChecks } from "lucide-react";
import {
  AUTHORITY_SECTIONS,
  type AuthoritySectionsContent,
} from "@/content/authority-sections";
import { howToSchema, productReviewSchema } from "@/lib/structured-data";

// ─── Shared bits ────────────────────────────────────────────────────────────
function Eyebrow({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "red";
}) {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full glass text-sm font-bold mb-4 uppercase tracking-wider ${
        tone === "red" ? "text-rouge-400 glow-red" : "text-france-400 glow-gold"
      }`}
    >
      {children}
    </span>
  );
}

function Heading({
  title,
  accent,
  size = "lg",
}: {
  title: string;
  accent: string;
  size?: "md" | "lg";
}) {
  const cls =
    size === "lg"
      ? "text-3xl sm:text-4xl lg:text-5xl"
      : "text-3xl sm:text-4xl";
  return (
    <h2 className={`font-display font-bold ${cls} mb-4 text-blanc-50`}>
      {title} <span className="text-gradient">{accent}</span>
    </h2>
  );
}

const MONTHS_NL = [
  "jan.", "feb.", "mrt.", "apr.", "mei", "jun.",
  "jul.", "aug.", "sep.", "okt.", "nov.", "dec.",
];
function formatDateNl(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS_NL[m - 1]} ${y}`;
}

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  const rounded = Math.round(rating);
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rounded ? "fill-france-400 text-france-400" : "text-blanc-700"
          }
        />
      ))}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 1 — Long-form SEO content (H2 + H3 + prose + internal links)
// ═══════════════════════════════════════════════════════════════════════════
function SeoContentSection({ seo }: { seo: AuthoritySectionsContent["seo"] }) {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 720px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow>{seo.eyebrow}</Eyebrow>
            <Heading title={seo.title} accent={seo.titleAccent} />
            <p className="text-blanc-400 max-w-2xl mx-auto font-medium leading-relaxed">
              {seo.intro}
            </p>
          </div>

          <div className="space-y-5">
            {seo.blocks.map((block, idx) => (
              <article
                key={idx}
                className="glass rounded-3xl p-6 sm:p-8 border border-blanc-50/5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-2xl bg-france-500/15 border border-france-500/25 flex items-center justify-center text-france-400">
                    <BookOpen size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2 text-blanc-50">
                      {block.h3}
                    </h3>
                    <p className="text-blanc-400 text-sm sm:text-base leading-relaxed font-medium">
                      {block.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {seo.links.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {seo.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 rounded-full glass border border-blanc-50/5 px-4 py-2 text-sm font-bold text-blanc-200 transition-colors hover:text-france-300 hover:border-france-400/30"
                >
                  {link.label}
                  <ArrowRight
                    size={14}
                    className="text-france-400 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 2 — HowTo (rich result via HowTo JSON-LD)
// ═══════════════════════════════════════════════════════════════════════════
function HowToSection({ howto }: { howto: AuthoritySectionsContent["howto"] }) {
  return (
    <section
      className="py-24 relative overflow-hidden bg-black/20"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 640px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Eyebrow tone="red">{howto.eyebrow}</Eyebrow>
          <Heading title={howto.title} accent={howto.titleAccent} size="md" />
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            {howto.intro}
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {howto.steps.map((step, idx) => (
            <li
              key={idx}
              className="relative glass rounded-3xl p-6 border border-blanc-50/5 transition-all duration-300 hover:border-rouge-400/30 flex flex-col"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rouge-500/15 border border-rouge-500/25 text-rouge-400 font-display font-black text-lg">
                {idx + 1}
              </span>
              <h3 className="font-display font-bold text-lg mb-2 text-blanc-50">
                {step.name}
              </h3>
              <p className="text-blanc-400 text-sm leading-relaxed font-medium">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 3 — Reviews + AggregateRating (rich result via Product JSON-LD)
// ═══════════════════════════════════════════════════════════════════════════
function ReviewsSection({
  reviews,
}: {
  reviews: AuthoritySectionsContent["reviews"];
}) {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 720px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow>{reviews.eyebrow}</Eyebrow>
          <Heading title={reviews.title} accent={reviews.titleAccent} size="md" />

          {/* Aggregate rating summary (matches the schema for compliance) */}
          <div className="mt-6 inline-flex items-center gap-4 rounded-2xl glass border border-blanc-50/5 px-6 py-4">
            <span className="font-display font-black text-4xl text-blanc-50">
              {reviews.ratingValue.toFixed(1)}
            </span>
            <span className="flex flex-col items-start">
              <Stars rating={reviews.ratingValue} size={18} />
              <span className="mt-1 text-xs font-bold uppercase tracking-wider text-blanc-500">
                {reviews.reviewCount.toLocaleString("nl-NL")} beoordelingen
              </span>
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {reviews.items.map((review, idx) => (
            <figure
              key={idx}
              className="glass rounded-3xl p-6 border border-blanc-50/5 flex flex-col"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-4 flex-1 text-blanc-300 text-sm leading-relaxed font-medium">
                “{review.body}”
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-blanc-50/5">
                <span className="block font-bold text-blanc-50 text-sm">
                  {review.author}
                </span>
                <span className="block text-xs text-blanc-500">
                  {review.location} · {formatDateNl(review.date)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 4 — Local / geo coverage ("IPTV in heel Nederland")
// ═══════════════════════════════════════════════════════════════════════════
function LocalCoverageSection({
  local,
}: {
  local: AuthoritySectionsContent["local"];
}) {
  return (
    <section
      className="py-24 relative overflow-hidden bg-black/20"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 640px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow>{local.eyebrow}</Eyebrow>
            <Heading title={local.title} accent={local.titleAccent} size="md" />
            <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
              {local.intro}
            </p>
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8 border border-blanc-50/5">
            <h3 className="flex items-center gap-2 font-display font-bold text-lg mb-4 text-blanc-50">
              <MapPin size={18} className="text-france-400" aria-hidden="true" />
              Beschikbaar in o.a. deze steden
            </h3>
            <ul className="flex flex-wrap gap-2.5 mb-8">
              {local.cities.map((city) => (
                <li
                  key={city}
                  className="rounded-full bg-france-500/10 border border-france-500/15 px-3.5 py-1.5 text-sm font-medium text-blanc-200"
                >
                  IPTV {city}
                </li>
              ))}
            </ul>

            <h3 className="flex items-center gap-2 font-display font-bold text-lg mb-4 text-blanc-50">
              <ListChecks size={18} className="text-rouge-400" aria-hidden="true" />
              In alle provincies
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {local.provinces.map((province) => (
                <li
                  key={province}
                  className="rounded-full bg-blanc-50/[0.03] border border-blanc-50/5 px-3.5 py-1.5 text-sm font-medium text-blanc-300"
                >
                  {province}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-center text-sm text-blanc-500 font-medium">
            {local.outro}
          </p>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// Wrapper — renders the 4 sections + their JSON-LD for a given page slug.
// ═══════════════════════════════════════════════════════════════════════════
export default function AuthoritySections({ slug }: { slug: string }) {
  const content = AUTHORITY_SECTIONS[slug];
  if (!content) return null;

  const howToLd = howToSchema({
    name: content.howto.schemaName,
    description: content.howto.schemaDescription,
    totalTime: content.howto.totalTime,
    steps: content.howto.steps.map((s) => ({ name: s.name, text: s.text })),
  });

  const productLd = productReviewSchema({
    name: content.reviews.productName,
    description: content.reviews.productDescription,
    ratingValue: content.reviews.ratingValue,
    reviewCount: content.reviews.reviewCount,
    reviews: content.reviews.items.map((r) => ({
      author: r.author,
      rating: r.rating,
      date: r.date,
      body: r.body,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productLd).replace(/</g, "\\u003c"),
        }}
      />
      <SeoContentSection seo={content.seo} />
      <HowToSection howto={content.howto} />
      <ReviewsSection reviews={content.reviews} />
      <LocalCoverageSection local={content.local} />
    </>
  );
}
