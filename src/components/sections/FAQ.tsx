import { faqs } from "@/constants/data";
import { ChevronDown } from "lucide-react";

/**
 * Native HTML <details>/<summary> accordion.
 * Zero JS interaction cost — toggling is handled by the browser.
 * Multiple items can be open simultaneously (native behavior).
 * Server Component — no "use client" needed.
 */
const FAQ = ({
  faqsData,
}: {
  faqsData?: { question: string; answer: string }[];
}) => {
  const displayFaqs = faqsData || faqs.slice(0, 8);

  return (
    <section id="faq" className="py-24 relative overflow-hidden" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 700px" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            FAQ
          </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
              Veelgestelde <span className="text-gradient">Vragen</span>
            </h2>
            <p className="text-blanc-400 font-medium">
              Alles wat u moet weten over IPTV Amsterdam en ons abonnement.
            </p>
        </div>

        <div className="space-y-4">
          {displayFaqs.map((faq, idx) => (
            <details
              key={idx}
              className="group animate-slide-up glass rounded-2xl overflow-hidden border border-blanc-50/5 transition-all duration-300 open:border-france-400/30 open:glow-gold"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <summary className="list-none w-full flex items-center justify-between p-6 text-left cursor-pointer">
                <span className="font-bold text-blanc-50 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className="text-france-400 transition-transform duration-300 shrink-0 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="text-blanc-400 text-sm leading-relaxed font-medium px-6 pb-6">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
