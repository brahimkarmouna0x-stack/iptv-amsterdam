import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV Smarters Pro instellen — IPTV Amsterdam";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV Smarters Pro · Amsterdam",
    title: "IPTV Smarters Pro instellen",
    subtitle: "Inloggen met M3U of Xtream Codes — stap voor stap.",
  });
}
