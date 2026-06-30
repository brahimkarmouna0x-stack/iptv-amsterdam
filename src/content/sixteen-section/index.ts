import type { SixteenSectionContent } from "./types";
import home from "./home";
import iptvKopen from "./iptv-kopen";
import iptvAbonnement from "./iptv-abonnement";
import iptvAanbieder from "./iptv-aanbieder";
import iptvNederland from "./iptv-nederland";
import iptvSmartersPro from "./iptv-smarters-pro";

export const SIXTEEN_SECTION_PAGES: Record<string, SixteenSectionContent> = {
  "": home,
  "iptv-kopen": iptvKopen,
  "iptv-abonnement": iptvAbonnement,
  "iptv-aanbieder": iptvAanbieder,
  "iptv-nederland": iptvNederland,
  "iptv-smarters-pro": iptvSmartersPro,
} as const;

export type { SixteenSectionContent } from "./types";
export * from "./types";
