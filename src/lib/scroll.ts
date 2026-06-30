/**
 * Reusable smooth-scroll helper for in-page anchor navigation.
 *
 * Why this exists: many sections on the site use `content-visibility: auto`
 * with placeholder `contain-intrinsic-size` heights. When the browser scrolls
 * to an anchor far down the page, it computes the destination from those
 * (under-)estimated placeholder heights, so the scroll lands short. As the
 * intermediate sections enter the viewport they render at their real height,
 * shifting the true target downward. We therefore scroll, wait for the scroll
 * to settle, re-measure, and correct — repeating until the element rests at the
 * intended offset.
 */

// Matches `html { scroll-padding-top }` in globals.css and the fixed navbar height.
export const HEADER_OFFSET = 88;

const TOLERANCE_PX = 2;
const MAX_CORRECTIONS = 8;
const SETTLE_FALLBACK_MS = 700;

function waitForScrollEnd(cb: () => void, instant: boolean): void {
  if (instant) {
    // No animation to wait on; let layout settle for a frame, then re-check.
    requestAnimationFrame(() => requestAnimationFrame(cb));
    return;
  }

  let done = false;
  let fallback = 0;
  const finish = () => {
    if (done) return;
    done = true;
    window.removeEventListener("scrollend", finish);
    window.clearTimeout(fallback);
    cb();
  };

  // `scrollend` fires once the programmatic smooth scroll completes.
  window.addEventListener("scrollend", finish, { once: true });
  // Fallback for the rare case `scrollend` never fires (e.g. target already in place).
  fallback = window.setTimeout(finish, SETTLE_FALLBACK_MS);
}

/**
 * Smoothly scroll an element to just below the fixed header, correcting for
 * layout shifts caused by `content-visibility: auto` sections above it.
 */
export function smoothScrollToElement(el: HTMLElement): void {
  if (typeof window === "undefined") return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const behavior: ScrollBehavior = prefersReduced ? "auto" : "smooth";

  const desiredTop = () =>
    Math.max(
      0,
      el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
    );

  window.scrollTo({ top: desiredTop(), behavior });

  let attempts = 0;
  const correct = () => {
    const delta = el.getBoundingClientRect().top - HEADER_OFFSET;
    if (Math.abs(delta) <= TOLERANCE_PX || attempts >= MAX_CORRECTIONS) return;
    attempts += 1;
    window.scrollTo({ top: desiredTop(), behavior });
    waitForScrollEnd(correct, prefersReduced);
  };

  waitForScrollEnd(correct, prefersReduced);
}

/**
 * Resolve a hash id to an element and scroll to it. Returns true if handled.
 */
export function scrollToHashId(id: string): boolean {
  if (typeof document === "undefined" || !id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  smoothScrollToElement(el);
  return true;
}
