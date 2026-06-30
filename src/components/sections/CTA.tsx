import Link from "next/link";
import { type ReactNode } from "react";
import { MessageCircle, Rocket } from "lucide-react";
import { getPhoneNumber, whatsappUrl } from "@/lib/settings";

const CTA = async ({
  title,
  description,
}: {
  title?: ReactNode;
  description?: string;
}) => {
  const phone = await getPhoneNumber();
  const whatsapp = phone ? whatsappUrl(phone) : "#";
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 550px" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in glass-strong rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden border border-france-400/15 glow-gold before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-96 before:h-96 before:bg-france-400/10 before:rounded-full before:blur-3xl after:content-[''] after:absolute after:bottom-0 after:right-1/4 after:w-64 after:h-64 after:bg-rouge-500/12 after:rounded-full after:blur-3xl">
          <div className="relative z-10">
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-blanc-50 leading-tight">
              {title || (
                <>
                  Klaar voor{" "}
                  <span className="text-gradient">
                    grenzeloos entertainment
                  </span>
                  <br />?
                </>
              )}
            </h2>
            <p className="text-blanc-400 text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              {description ||
                "Word onderdeel van meer dan 500.000 tevreden abonnees wereldwijd. Begin vandaag nog met streamen dankzij onze risicovrije proef."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#pakketten"
                className="btn-shine px-10 py-5 rounded-full bg-rouge-500 text-blanc-50 font-bold text-lg shadow-[0_18px_50px_-12px_rgba(174,28,40,0.5)] hover:bg-rouge-600 hover:shadow-[0_22px_60px_-12px_rgba(174,28,40,0.6)] hover:-translate-y-0.5 transition-all active:translate-y-0 active:scale-[0.98] flex items-center gap-3 will-change-transform"
              >
                <Rocket
                  size={21}
                  className="text-france-300"
                  aria-hidden="true"
                />
                Start gratis proef
              </Link>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-full glass text-blanc-50 font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3 border border-blanc-50/10 active:scale-95"
              >
                <MessageCircle size={21} aria-hidden="true" />
                Chat met ons
              </a>
            </div>
            <p className="text-xs text-blanc-500 mt-6 font-bold tracking-wider uppercase">
              Geen creditcard nodig. Altijd opzegbaar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
