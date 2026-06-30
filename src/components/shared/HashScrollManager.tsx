"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHashId, smoothScrollToElement } from "@/lib/scroll";

/**
 * Centralizes in-page anchor navigation so every `#section` trigger (navbar
 * links, hero/CTA buttons, footer links) scrolls accurately, regardless of the
 * `content-visibility: auto` sections in between. Mounted once in the root
 * layout — individual links/buttons need no special handling.
 */
const SKIP_LINK_ID = "skip-to-content";

export default function HashScrollManager() {
  const pathname = usePathname();

  // Intercept clicks on same-page hash links and route them through the
  // corrective scroll helper. Capture phase + preventDefault runs before any
  // React onClick handlers fire; Next's <Link> skips navigation when the event
  // is already default-prevented (link.js checks e.defaultPrevented), so we do
  // NOT stop propagation — component onClick handlers (e.g. closing the mobile
  // menu, updating the active link) still run.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.id === SKIP_LINK_ID // keep native focus behavior for the skip link
      ) {
        return;
      }

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (!url.hash || url.hash === "#") return;
      // Only handle in-page hashes; cross-page links are handled on arrival.
      if (url.pathname !== window.location.pathname) return;

      const id = decodeURIComponent(url.hash.slice(1));
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      smoothScrollToElement(target);

      // Reflect the section in the URL without triggering a native jump.
      if (url.hash !== window.location.hash) {
        history.pushState(null, "", url.hash);
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Handle arrival on a page with a hash (e.g. navigating from another page to
  // "/#pricing"), once dynamic sections have mounted and laid out.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === "#") return;

    const id = decodeURIComponent(hash.slice(1));
    let raf1 = 0;
    let raf2 = 0;
    // Two frames so SSR/dynamic sections are mounted and measured before scroll.
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        scrollToHashId(id);
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [pathname]);

  return null;
}
