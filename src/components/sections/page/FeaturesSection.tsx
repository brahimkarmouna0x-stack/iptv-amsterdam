import type { PageSection } from "@/content/iptv-german-pages";
import { getIcon } from "./icons";

type Props = Extract<PageSection, { type: "features" }>;

export default function FeaturesSection({ heading, subheading, items }: Props) {
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((feature) => {
            const Icon = getIcon(feature.icon);
            return (
              <div
                key={feature.title}
                className="card-lift rounded-2xl border border-blanc-50/5 bg-blanc-50/[0.03] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-france-500/15 text-france-400">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-black text-blanc-50">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-blanc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
