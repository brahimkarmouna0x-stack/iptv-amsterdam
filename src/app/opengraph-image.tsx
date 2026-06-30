import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV Amsterdam — Beste IPTV abonnement van Nederland";

export default function Image() {
  return renderOgImage({
    eyebrow: "Premium IPTV · Amsterdam",
    title: "Beste IPTV abonnement van Nederland",
    subtitle: "Duizenden kanalen & films in 4K/8K. Directe activering.",
  });
}
