import type { Metadata } from "next";
import { Info, MessageCircle } from "lucide-react";
import { getPhoneNumber, whatsappUrl } from "@/lib/settings";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Algemene Voorwaarden IPTV Abonnement | IPTV Amsterdam",
  description:
    "Lees de algemene voorwaarden van IPTV Amsterdam voor uw IPTV-abonnement. Duidelijke afspraken over gebruik, betaling en garantie.",
  path: "/terms-of-service",
});

const TermsOfServicePage = async () => {
  const phone = await getPhoneNumber();
  const whatsapp = phone ? whatsappUrl(phone) : "#";
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            Juridisch
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            Algemene <span className="text-gradient">voorwaarden</span>
          </h1>
          <p className="text-blanc-400 text-lg">
            Laatst bijgewerkt: 6 mei 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">1. Aanvaarding van de voorwaarden</h2>
            <p className="text-blanc-300 leading-relaxed">
              Door IPTV Amsterdam te bezoeken of te gebruiken, gaat u akkoord met deze algemene voorwaarden. Als u niet met alle voorwaarden akkoord gaat, mag u de dienst niet gebruiken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">2. Omschrijving van de dienst</h2>
            <p className="text-blanc-300 leading-relaxed">
              IPTV Amsterdam biedt een IPTV-abonnementsdienst die gebruikers toegang geeft tot live tv-kanalen en video-on-demand content via internet. De beschikbaarheid van content kan per regio verschillen en is onderhevig aan wijzigingen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">3. Verplichtingen van de gebruiker</h2>
            <ul className="space-y-4">
              {[
                "U moet minstens 18 jaar oud zijn om deze dienst te gebruiken.",
                "U bent verantwoordelijk voor de vertrouwelijkheid van uw account.",
                "De dienst is uitsluitend bedoeld voor persoonlijk, niet-commercieel gebruik.",
                "U gaat ermee akkoord de aangeboden content niet te verspreiden of te publiceren.",
                "Een abonnement geldt alleen voor het aangegeven aantal apparaatverbindingen."
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-blanc-300">
                  <Info
                    className="mt-1 h-5 w-5 shrink-0 text-rouge-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">4. Betaling en terugbetalingen</h2>
            <p className="text-blanc-300 leading-relaxed">
              Abonnementen worden vooraf op terugkerende basis gefactureerd. Alle betalingen zijn niet-restitueerbaar, tenzij wettelijk verplicht of vastgelegd in ons terugbetalingsbeleid. Wij behouden ons het recht voor om onze prijzen op elk moment met voorafgaande kennisgeving te wijzigen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">5. Beperking van aansprakelijkheid</h2>
            <p className="text-blanc-300 leading-relaxed">
              IPTV Amsterdam is niet aansprakelijk voor indirecte, incidentele, bijzondere of gevolgschade die voortvloeit uit het gebruik of het onvermogen om de dienst te gebruiken.
            </p>
          </section>

          <section className="pt-8 border-t border-blanc-50/10 text-center">
            <p className="text-blanc-400 mb-6 font-medium">
              Heeft u verduidelijking nodig over onze voorwaarden?
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-blanc-50 font-bold hover:bg-blanc-50/10 transition-all border border-blanc-50/10"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Chat
            </a>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
