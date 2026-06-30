import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV Nederland — alle zenders, sport & 4K — IPTV Amsterdam";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV Nederland · Amsterdam",
    title: "IPTV Nederland",
    subtitle: "Alle Nederlandse zenders, Eredivisie en sport in 4K.",
  });
}
