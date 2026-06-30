import Link from "next/link";
import { FOOTER_PAGES } from "@/constants/data";

/**
 * SEO keyword cloud rendered as glass pill links + HTML <details> disclosure.
 * Uses content-visibility: auto to defer painting until near viewport.
 */
const KeywordCloud = () => {
  return (
    <nav
      aria-label="Populaire onderwerpen en gidsen"
      className="footer-keyword-cloud mb-24 relative"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-france-700/8 blur-[120px] -z-10"
      />

      <div className="text-center mb-10 sm:mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-blanc-50/5 border border-blanc-50/10 text-[10px] font-black uppercase tracking-[0.2em] text-france-400 mb-4">
          Kennisbank &amp; Gidsen
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-blanc-50 tracking-tight">
          Populaire <span className="text-gradient">Onderwerpen</span>
        </h2>
        <p className="mt-3 text-sm font-medium text-blanc-400 max-w-md mx-auto">
          Verken {FOOTER_PAGES.length}+ gidsen over IPTV in Nederland — van
          installatie tot het beste pakket.
        </p>
      </div>

      {/* Top Keywords - Glass Pills (first 16 visible, rest collapsed) */}
      <ul className="flex gap-2.5 sm:gap-3 flex-wrap justify-center mb-8 max-w-6xl mx-auto px-4">
        {FOOTER_PAGES.slice(0, 16).map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group/pill inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2.5 rounded-xl bg-blanc-50/[0.04] border border-blanc-50/[0.08] text-xs font-bold text-blanc-300 hover:text-blanc-50 hover:bg-france-500/10 hover:border-france-500/40 hover:shadow-[0_4px_24px_-6px_rgba(33,70,139,0.45)] focus-visible:text-blanc-50 focus-visible:border-france-500/50 transition-[color,background-color,border-color,box-shadow,transform] duration-200 cursor-pointer active:scale-[0.97]"
            >
              <span
                aria-hidden="true"
                className="text-france-400/70 transition-colors duration-200 group-hover/pill:text-france-300"
              >
                #
              </span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Collapsible remaining links — pure HTML/CSS, zero JS */}
      {FOOTER_PAGES.length > 16 && (
        <details className="group max-w-6xl mx-auto px-4 mb-16">
          <summary className="list-none text-center cursor-pointer mb-8">
            <span className="inline-flex items-center gap-2 min-h-[44px] px-5 py-3 rounded-xl bg-blanc-50/[0.04] border border-blanc-50/[0.08] text-xs font-bold text-blanc-300 hover:text-blanc-50 hover:bg-france-500/10 hover:border-france-500/40 transition-all duration-200 group-open:border-france-500/40 group-open:text-france-300">
              <span className="group-open:hidden">
                Toon alle {FOOTER_PAGES.length} onderwerpen
              </span>
              <span className="hidden group-open:inline">Toon minder</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <ul className="flex gap-x-2 gap-y-1.5 flex-wrap justify-center opacity-70 group-open:opacity-100 transition-opacity duration-500">
            {FOOTER_PAGES.slice(16).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center min-h-[32px] px-2.5 py-1 rounded-lg text-[11px] font-medium text-blanc-400 hover:text-france-300 hover:bg-blanc-50/[0.05] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      )}
    </nav>
  );
};

export default KeywordCloud;
