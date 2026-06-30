import type { PageSection } from "@/content/iptv-german-pages";

type Props = Extract<PageSection, { type: "howItWorks" }>;

export default function HowItWorksSection({ heading, subheading, steps }: Props) {
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

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-blanc-50/5 bg-blanc-50/[0.03] p-6"
            >
              <span
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-rouge-500/15 text-lg font-black text-rouge-400"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-lg font-black text-blanc-50">
                {step.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-blanc-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
