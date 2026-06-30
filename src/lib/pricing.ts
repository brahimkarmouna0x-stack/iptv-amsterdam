import { PRICING_DATA } from "@/constants/pricing-data";

/** Parse a Dutch-formatted price string ("42,99") to a number (42.99). */
const toNum = (s: string): number => parseFloat(s.replace(",", "."));

/**
 * Lowest & highest *total* subscription price (EUR) across every connection
 * tier and term in `PRICING_DATA`. Single source of truth for JSON-LD
 * `AggregateOffer` blocks so structured-data prices can never drift from the
 * prices actually shown in the pricing table (Google validates offer prices
 * against visible content).
 */
export function offerRange(): {
  lowPrice: string;
  highPrice: string;
  offerCount: number;
} {
  const totals = Object.values(PRICING_DATA)
    .flatMap((tier) => [tier.monthly, tier.quarterly, tier.halfYear, tier.yearly, tier.biyearly])
    .map(toNum);

  return {
    lowPrice: Math.min(...totals).toFixed(2),
    highPrice: Math.max(...totals).toFixed(2),
    offerCount: totals.length,
  };
}
