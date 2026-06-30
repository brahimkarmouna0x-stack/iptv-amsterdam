import type { Metadata } from "next";
import PopularContent from "@/components/sections/PopularContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Populaire IPTV Content — Films, Series & Live TV | IPTV Amsterdam",
  description:
    "Ontdek de meest bekeken films, series en live tv-kanalen via IPTV Amsterdam. 140.000+ titels in 4K beschikbaar voor alle abonnees.",
  path: "/popular",
});

export default function PopularPage() {
  return (
    <main className="min-h-screen">
      <PopularContent />
    </main>
  );
}
