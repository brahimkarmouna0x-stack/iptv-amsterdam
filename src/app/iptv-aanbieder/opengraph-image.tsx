import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Uw betrouwbare IPTV aanbieder in Nederland — IPTV Amsterdam";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV aanbieder · Amsterdam",
    title: "Uw betrouwbare IPTV aanbieder",
    subtitle: "99,9% uptime, 4K-kwaliteit en 24/7 Nederlandse support.",
  });
}
