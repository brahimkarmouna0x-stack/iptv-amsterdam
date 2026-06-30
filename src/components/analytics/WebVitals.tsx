"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * Forwards Core Web Vitals (LCP, CLS, INP, FCP, TTFB, FID) to GA4 as events.
 * No-op until GA4 is initialised (window.gtag is undefined otherwise).
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    if (typeof window === "undefined" || !(window as any).gtag) return;
    (window as any).gtag("event", metric.name, {
      event_category: "Web Vitals",
      // GA4 event values must be integers; CLS is scaled up by 1000.
      value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value,
      ),
      event_label: metric.id,
      non_interaction: true,
    });
  });

  return null;
}
