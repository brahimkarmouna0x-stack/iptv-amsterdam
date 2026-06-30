import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema } from "@/lib/structured-data";
import type { Breadcrumb } from "@/content/iptv-german-pages";

const serialize = (data: unknown): string =>
  JSON.stringify(data).replace(/</g, "\\u003c");

/**
 * Accessible breadcrumb trail (nav > ol) with co-located BreadcrumbList JSON-LD.
 */
export default function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  if (!items.length) return null;

  const schema = breadcrumbSchema(
    items.map((item) => ({ name: item.label, url: item.href })),
  );

  return (
    <nav aria-label="Brotkrümelnavigation">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-blanc-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight
                  size={12}
                  aria-hidden="true"
                  className="text-blanc-600"
                />
              )}
              {isLast ? (
                <span aria-current="page" className="text-blanc-300">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-france-400"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(schema) }}
      />
    </nav>
  );
}
