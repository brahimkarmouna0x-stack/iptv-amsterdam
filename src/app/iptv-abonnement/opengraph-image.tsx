import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Het beste IPTV abonnement van Nederland — IPTV Amsterdam";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV abonnement · Amsterdam",
    title: "Het beste IPTV abonnement",
    subtitle: "Flexibele looptijden, duizenden kanalen en 4K/8K kwaliteit.",
  });
}
