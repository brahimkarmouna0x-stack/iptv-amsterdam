import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV kopen in Amsterdam — IPTV Amsterdam";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV kopen · Amsterdam",
    title: "IPTV kopen in Amsterdam",
    subtitle: "Veilig bestellen, directe activering en stream binnen 5 minuten.",
  });
}
