"use client";
import Link from "next/link";
import Logo from "../shared/Logo";
import { NAV_LINKS } from "@/constants/data";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { scrollToHashId } from "@/lib/scroll";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  // Scroll-spy sets a transient hash-based active link (homepage only).
  // null = fall back to the pathname-derived active link.
  const [scrollActive, setScrollActive] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Track previous pathname to reset scroll-spy when navigating away.
  // Calling setState during render (prev !== current) is the React-approved
  // pattern for resetting derived state on value change — not an effect.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setScrollActive(null);
  }

  // Derive the active link from the current pathname during render — no effect needed.
  const pathnameActive = useMemo(() => {
    const pageLink = NAV_LINKS.find((link) => {
      if (link.href.includes("#")) return false;
      if (link.href === "/") return pathname === "/";
      return pathname === link.href || pathname.startsWith(link.href + "/");
    });
    return pageLink ? pageLink.href : NAV_LINKS[0].href;
  }, [pathname]);

  // Scroll-spy takes precedence on the homepage; other routes use pathname.
  const activeLink = scrollActive ?? pathnameActive;

  // Scroll-spy: observe in-page hash sections — homepage only.
  // Landing pages keep their own page link highlighted regardless of scroll.
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionLinks = NAV_LINKS.filter((l) => l.href.includes("#"));
    const visibleRatios = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(entry.target.id, entry.intersectionRatio);
        });

        let bestId = "";
        let bestRatio = 0;
        visibleRatios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        // No tracked section visible — fall back to the pathname-derived link.
        if (bestRatio < 0.05) {
          setScrollActive(null);
          return;
        }

        const matched = sectionLinks.find(
          (l) => l.href.split("#")[1] === bestId,
        );
        setScrollActive(matched ? matched.href : null);
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.8, 1.0],
        rootMargin: "-80px 0px 0px 0px",
      },
    );

    sectionLinks.forEach((link) => {
      const id = link.href.split("#")[1];
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [pathname]);

  // Keyboard focus trap when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
        return;
      }

      if (e.key !== "Tab" || !mobileMenuRef.current) return;

      const focusableEls = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusableEls.length === 0) return;

      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => {
      const first = mobileMenuRef.current?.querySelector<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      first?.focus();
    });

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const goToPricing = useCallback(() => {
    setMenuOpen(false);
    scrollToHashId("pakketten");
  }, []);

  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className="fixed left-0 right-0 z-50 top-0 px-0 border-b border-blanc-800/20 bg-france-950/95 backdrop-blur-sm">
      <div className="mx-auto flex justify-between items-center container px-4 sm:px-6 lg:px-8 py-3.5 md:py-4">
        <Logo className="h-10 w-auto sm:h-11 lg:h-12" preload />

        <nav
          className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-6 2xl:gap-8"
          aria-label="Hoofdnavigatie"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-[11px] font-bold relative group uppercase tracking-[0.12em] transition-colors duration-300 ${
                  isActive
                    ? "text-france-300"
                    : "text-blanc-400 hover:text-blanc-50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-france-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2 sm:gap-3">
          <button
            onClick={goToPricing}
            type="button"
            className="hidden lg:inline-flex whitespace-nowrap btn-shine items-center justify-center px-5 py-2.5 rounded-full bg-rouge-500 text-blanc-50 text-xs font-black uppercase tracking-[0.12em] shadow-lg shadow-rouge-500/20 hover:bg-rouge-600 active:scale-[0.98] transition-all duration-200"
          >
            Kies abonnement
          </button>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            ref={menuToggleRef}
            type="button"
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blanc-800/20 bg-blanc-50/5 text-blanc-50 transition-colors hover:bg-blanc-50/10"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigatiemenu"
        className={`lg:hidden overflow-hidden border-t border-blanc-800/20 bg-france-950/98 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${
          menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
          aria-label="Mobiele navigatie"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={`rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "bg-france-500/15 text-france-100"
                    : "text-blanc-400 hover:bg-blanc-50/5 hover:text-blanc-50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={goToPricing}
            className="mt-2 rounded-xl bg-rouge-500 px-4 py-3 text-sm font-black text-blanc-50 shadow-[0_12px_30px_rgba(220,38,38,0.18)] hover:bg-rouge-600 transition-colors"
          >
            Kies abonnement
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
