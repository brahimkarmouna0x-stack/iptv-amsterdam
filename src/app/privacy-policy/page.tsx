import type { Metadata } from "next";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { getPhoneNumber, whatsappUrl } from "@/lib/settings";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacybeleid — Hoe Wij Uw Gegevens Beschermen | IPTV Amsterdam",
  description:
    "Lees het privacybeleid van IPTV Amsterdam: welke gegevens wij verzamelen, hoe wij ze gebruiken en hoe wij uw privacy beschermen conform de AVG.",
  path: "/privacy-policy",
  noIndex: false,
});

const PrivacyPolicyPage = async () => {
  const phone = await getPhoneNumber();
  const whatsapp = phone ? whatsappUrl(phone) : "#";
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Juridisch
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            <span className="text-gradient">Privacybeleid</span>
          </h1>
          <p className="text-blanc-400 text-lg">
            Laatst bijgewerkt: 6 mei 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Inleiding</h2>
            <p className="text-blanc-300 leading-relaxed">
              Bij IPTV Amsterdam nemen wij uw privacy serieus. Dit privacybeleid
              legt uit hoe wij uw persoonlijke gegevens verzamelen, gebruiken en
              beschermen wanneer u onze IPTV-diensten gebruikt. Door IPTV
              Amsterdam te gebruiken, gaat u akkoord met de voorwaarden in dit
              document.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">
              Welke gegevens wij verzamelen
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-blanc-50/5 border border-blanc-50/10">
                <h3 className="text-france-500 font-bold mb-2">
                  Persoonsgegevens
                </h3>
                <p className="text-blanc-400 text-sm">
                  Dit omvat uw naam, e-mailadres en factuurgegevens die tijdens
                  het abonnementsproces worden gebruikt.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-blanc-50/5 border border-blanc-50/10">
                <h3 className="text-rouge-500 font-bold mb-2">
                  Gebruiksgegevens
                </h3>
                <p className="text-blanc-400 text-sm">
                  Wij verzamelen informatie over hoe u met onze dienst omgaat,
                  waaronder het apparaattype envoorkeuren.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">
              Hoe wij uw gegevens gebruiken
            </h2>
            <ul className="space-y-4">
              {[
                "Om onze dienst te leveren en te onderhouden",
                "Om uw betalingen te verwerken en abonnementen te beheren",
                "Om u te informeren over wijzigingen in onze dienst",
                "Om klantenservice en technische ondersteuning te bieden",
                "Om analyses of nuttige informatie te verzamelen ter verbetering van onze dienst",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-blanc-300">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-france-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">
              Gegevensbeveiliging
            </h2>
            <p className="text-blanc-300 leading-relaxed">
              Wij hanteren standaard beveiligingsmaatregelen om de veiligheid
              van uw persoonlijke gegevens te waarborgen. Alle
              betalingstransacties verlopen via beveiligde gateways en worden
              niet op onze servers opgeslagen. Wij gebruiken versleuteling (SSL)
              om uw gegevens tijdens de overdracht te beschermen.
            </p>
          </section>

          <section className="pt-8 border-t border-blanc-50/10 text-center">
            <p className="text-blanc-400 mb-6 font-medium">
              Vragen over ons privacybeleid?
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-rouge-500 text-blanc-50 font-bold hover:bg-rouge-600 hover:-translate-y-0.5 transition-all glow-red"
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

export default PrivacyPolicyPage;
