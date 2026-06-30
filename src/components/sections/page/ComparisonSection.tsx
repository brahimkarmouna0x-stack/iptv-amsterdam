"use client";

import { useMemo, useState } from "react";
import { Check, X, ArrowUpDown } from "lucide-react";
import type { PageSection } from "@/content/iptv-german-pages";

type Props = Extract<PageSection, { type: "comparison" }>;

const rank = (value: boolean | string): number =>
  typeof value === "boolean" ? (value ? 2 : 0) : 1;

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={18} aria-label="Ja" className="mx-auto text-emerald-400" />
    ) : (
      <X size={18} aria-label="Nein" className="mx-auto text-blanc-600" />
    );
  }
  return <span className="text-sm font-medium text-blanc-200">{value}</span>;
}

export default function ComparisonSection({
  heading,
  subheading,
  columns,
  rows,
}: Props) {
  const [sort, setSort] = useState<{ col: number; dir: 1 | -1 } | null>(null);

  const sortedRows = useMemo(() => {
    if (!sort) return rows;
    return [...rows].sort(
      (a, b) => (rank(a.values[sort.col]) - rank(b.values[sort.col])) * sort.dir,
    );
  }, [rows, sort]);

  const toggleSort = (col: number) =>
    setSort((prev) =>
      prev?.col === col
        ? { col, dir: prev.dir === 1 ? -1 : 1 }
        : { col, dir: -1 },
    );

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

        <div className="overflow-x-auto rounded-3xl border border-blanc-50/8">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-blanc-50/[0.04]">
                <th
                  scope="col"
                  className="sticky left-0 z-10 bg-france-900 px-5 py-4 text-xs font-black uppercase tracking-wider text-blanc-400"
                >
                  Merkmal
                </th>
                {columns.map((col, index) => (
                  <th
                    key={col}
                    scope="col"
                    aria-sort={
                      sort?.col === index
                        ? sort.dir === 1
                          ? "ascending"
                          : "descending"
                        : "none"
                    }
                    className={`px-5 py-4 text-center text-xs font-black uppercase tracking-wider ${
                      index === 0 ? "text-france-300" : "text-blanc-400"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleSort(index)}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-blanc-50"
                    >
                      {col}
                      <ArrowUpDown size={12} aria-hidden="true" />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedRows.map((row) => (
                <tr
                  key={row.label}
                  className="border-t border-blanc-50/5 even:bg-blanc-50/[0.02]"
                >
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-france-950 px-5 py-4 text-sm font-bold text-blanc-200"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      key={index}
                      className={`px-5 py-4 text-center ${
                        index === 0 ? "bg-france-500/[0.05]" : ""
                      }`}
                    >
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
