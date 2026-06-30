import type { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import PageHero from "@/components/sections/page/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Over Ons | IPTV Amsterdam — De IPTV Provider van Nederland",
  description:
    "Leer meer over IPTV Amsterdam, de meest betrouwbare premium IPTV provider in Amsterdam en heel Nederland. Wij bieden 24/7 support en 99,9% uptime.",
  path: "/over-ons",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl("/") },
              { name: "Over Ons", url: absoluteUrl("/over-ons") },
            ]),
          ),
        }}
      />
      <main className="flex-1 bg-france-950">
        <PageHero
          hero={{
            headline: "Over IPTV Amsterdam",
            subheadline:
              "De meest betrouwbare Premium IPTV Provider in Amsterdam en heel Nederland. Wij geloven in kwaliteit, stabiliteit en 24/7 klanttevredenheid.",
            cta: { label: "Bekijk Abonnementen", href: "/#pakketten" },
            badgeTags: ["Betrouwbaar", "24/7 Support", "Premium 4K"],
          }}
        >
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Over Ons", href: "/over-ons" },
            ]}
          />
        </PageHero>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-blanc-50">
            <div className="prose prose-invert lg:prose-lg mx-auto prose-a:text-france-400 hover:prose-a:text-france-300">
              <h2>Wie Wij Zijn</h2>
              <p>
                Bij <strong>IPTV Amsterdam</strong> zijn wij toegewijd aan het
                leveren van de ultieme tv-kijkervaring voor de Nederlandse
                markt. Als toonaangevende IPTV-provider in Amsterdam en heel
                Nederland combineren wij geavanceerde Amsterdamechnologie met
                ongeëvenaarde klantenservice.
              </p>

              <h2>Onze Missie</h2>
              <p>
                Onze missie is simpel: grenzeloos entertainment toegankelijk
                maken voor iedereen, zonder haperingen, zonder verborgen kosten
                en met de hoogste beeldkwaliteit (4K en 8K HDR).
              </p>

              <h2>Waarom Kiezen Voor IPTV Amsterdam?</h2>
              <ul>
                <li>
                  <strong>Betrouwbaarheid:</strong> Onze servers bieden een
                  gegarandeerde uptime van 99,9%.
                </li>
                <li>
                  <strong>Kwaliteit:</strong> We leveren duizenden live kanalen
                  en een uitgebreide VOD-bibliotheek in kristalheldere
                  4K-kwaliteit.
                </li>
                <li>
                  <strong>Klantenservice:</strong> Ons team staat 24/7 voor u
                  klaar via WhatsApp om u te helpen bij installatie of
                  technische vragen.
                </li>
              </ul>

              <h2>Neem Contact Op</h2>
              <p>
                Heeft u vragen of wilt u meer weten over onze diensten? Bezoek
                dan onze <a href="/support">Support pagina</a> of neem direct
                contact met ons op via WhatsApp.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
