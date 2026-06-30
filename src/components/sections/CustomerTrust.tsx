import Image from "next/image";
import Link from "next/link";
import { Star, Play, ChevronDown } from "lucide-react";
import { testimonials } from "@/constants/testimonials-data";

const metrics = [
  { value: "31.000+", label: "Live kanalen", sub: "Nationaal & internationaal" },
  { value: "140.000+", label: "Films & series", sub: "Altijd bijgewerkt" },
  { value: "99,9%", label: "Uptime garantie", sub: "24/7 gemonitord" },
  { value: "<5 min", label: "Reactietijd support", sub: "Via WhatsApp" },
];

const faqHighlights = [
  {
    question: "Is er een gratis proef beschikbaar?",
    answer:
      "Ja! We bieden een gratis IPTV Amsterdam proef aan zodat u onze dienst kunt testen voordat u een keuze maakt. Neem contact op via WhatsApp om uw gratis proef aan te vragen.",
  },
  {
    question: "Welke apparaten worden ondersteund?",
    answer:
      "IPTV Amsterdam werkt op Smart TV, Android, iPhone, iPad, Windows, Mac, Amazon Fire TV Stick, Android TV-boxen en MAG-apparaten.",
  },
  {
    question: "Hoe snel is de activering na betaling?",
    answer:
      "Direct na uw betaling ontvangt u uw inloggegevens per e-mail. De activering duurt gemiddeld minder dan 5 minuten — geen wachten.",
  },
  {
    question: "Kan ik op meerdere apparaten tegelijk kijken?",
    answer:
      "Ja, afhankelijk van uw abonnement kunt u op 1 tot 4 apparaten tegelijk streamen. Ideaal voor het hele gezin.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} uit 5 sterren`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-3.5 h-3.5 fill-current ${s <= Math.floor(rating) ? "text-france-400" : "text-blanc-700"}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border border-blanc-50/8 rounded-2xl overflow-hidden">
      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-blanc-50 font-bold text-sm hover:text-france-300 transition-colors select-none">
        {question}
        <ChevronDown
          size={18}
          className="text-blanc-400 shrink-0 transition-transform duration-300 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="px-6 pb-5">
        <p className="text-blanc-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}

const CustomerTrust = () => {
  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <section
      id="klantervaringen"
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 1000px" }}
    >
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-france-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] bg-rouge-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider">
            Klantervaringen
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Waarom klanten kiezen voor{" "}
            <span className="text-gradient">IPTV Amsterdam</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Meer dan duizenden tevreden klanten in Amsterdam en heel Nederland. Lees hun ervaringen.
          </p>
        </div>

        {/* Performance metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="glass rounded-2xl p-6 text-center border border-blanc-50/5 hover:border-france-400/20 transition-colors duration-300"
            >
              <p className="text-3xl sm:text-4xl font-black text-blanc-50 mb-1 french-num">
                {m.value}
              </p>
              <p className="text-sm font-bold text-france-400 mb-0.5">{m.label}</p>
              <p className="text-xs text-blanc-500">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Customer reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {displayedTestimonials.map((t, idx) => (
            <article
              key={idx}
              className={`glass rounded-3xl p-7 border ${t.border} transition-all duration-300 hover:border-france-400/30 flex flex-col`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-france-500/20 shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-blanc-50 text-sm">{t.name}</p>
                  <p className="text-blanc-500 text-xs">{t.role}</p>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <p className="text-blanc-300 text-sm leading-relaxed mt-4 flex-1 italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <p className="text-blanc-600 text-xs mt-4">{t.time}</p>
            </article>
          ))}
        </div>

        {/* Aggregate rating indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 rounded-full border-2 border-france-950 overflow-hidden bg-blanc-800"
                >
                  <Image src={t.image} alt="" fill sizes="32px" className="object-cover" aria-hidden="true" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={14} className="text-france-400 fill-france-400" aria-hidden="true" />
                ))}
                <span className="text-sm font-black text-blanc-50 ml-1 french-num">4,9/5</span>
              </div>
              <p className="text-xs text-blanc-400">Gebaseerd op honderden beoordelingen</p>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="font-display font-bold text-2xl text-blanc-50 text-center mb-8">
            Veelgestelde vragen
          </h3>
          <div className="space-y-3">
            {faqHighlights.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Strong CTA */}
        <div className="glass rounded-3xl p-10 sm:p-14 text-center border border-blanc-50/8 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-france-400/40 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-rouge-400/20 to-transparent" aria-hidden="true" />

          <span className="inline-block px-4 py-1.5 rounded-full bg-rouge-500/10 text-rouge-400 text-xs font-black uppercase tracking-widest mb-6 border border-rouge-500/20">
            Gratis proef beschikbaar
          </span>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-blanc-50 mb-4">
            Klaar om te beginnen?
          </h3>
          <p className="text-blanc-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Sluit u aan bij duizenden tevreden klanten in Amsterdam en heel Nederland. Start vandaag met uw premium IPTV ervaring.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#pakketten"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-rouge-500 text-blanc-50 font-black text-base uppercase tracking-wide shadow-[0_16px_44px_-12px_rgba(174,28,40,0.55)] hover:bg-rouge-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Play size={18} fill="currentColor" aria-hidden="true" />
              Kies uw abonnement
            </Link>
            <Link
              href="/support/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-blanc-50/8 text-blanc-50 font-bold text-base border border-blanc-50/12 hover:bg-blanc-50/14 hover:border-france-500/30 transition-all duration-200"
            >
              Gratis proef aanvragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTrust;
