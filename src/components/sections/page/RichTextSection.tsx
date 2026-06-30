import type { PageSection } from "@/content/iptv-german-pages";

type Props = Extract<PageSection, { type: "richText" }>;

/**
 * Author-controlled rich text. Content originates from our own content module
 * (no user input), so dangerouslySetInnerHTML is safe here. Nested <p>/<strong>
 * are styled via arbitrary variants (no typography plugin required).
 */
export default function RichTextSection({ heading, html }: Props) {
  return (
    <section className="section-contain py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="mb-6 text-2xl font-black tracking-tight text-blanc-50 sm:text-3xl">
            {heading}
          </h2>
        )}
        <div
          className="space-y-4 text-lg font-medium leading-relaxed text-blanc-400 [&_strong]:font-bold [&_strong]:text-blanc-100"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
}
