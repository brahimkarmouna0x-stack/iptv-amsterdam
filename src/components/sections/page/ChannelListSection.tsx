import type { PageSection } from "@/content/iptv-german-pages";

type Props = Extract<PageSection, { type: "channelList" }>;

const fmt = (value: number) => value.toLocaleString("nl-NL");

export default function ChannelListSection({
  heading,
  subheading,
  categories,
}: Props) {
  return (
    <section className="section-contain py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(heading || subheading) && (
          <div className="mb-14 text-center">
            {subheading && (
              <span className="mb-4 inline-block rounded-full glass px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-france-400 glow-gold">
                {subheading}
              </span>
            )}
            {heading && (
              <h2 className="font-display text-3xl font-bold text-blanc-50 sm:text-4xl">
                {heading}
              </h2>
            )}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="card-lift rounded-2xl border border-blanc-50/5 bg-blanc-50/[0.03] p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-black text-blanc-50">
                  {category.name}
                </h3>
                {typeof category.count === "number" && (
                  <span className="rounded-full bg-france-500/15 px-3 py-1 text-xs font-black text-france-300">
                    {fmt(category.count)}+
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-lg border border-blanc-50/5 bg-blanc-50/[0.04] px-2.5 py-1 text-xs font-medium text-blanc-300"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
