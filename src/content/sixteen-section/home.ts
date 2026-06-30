import type { SixteenSectionContent } from "./types";

const LINK = {
  kopen: {
    label: "IPTV Kopen",
    href: "/iptv-kopen",
    description:
      "Direct IPTV kopen met veilige betaling en directe activering binnen 5 minuten.",
  },
  abonnement: {
    label: "IPTV Abonnement",
    href: "/iptv-abonnement",
    description:
      "Vergelijk alle IPTV abonnementen met flexibele looptijden en 4K-kwaliteit.",
  },
  aanbieder: {
    label: "IPTV Aanbieder",
    href: "/iptv-aanbieder",
    description:
      "Ontdek waarom IPTV Amsterdam de beste IPTV aanbieder van Nederland is.",
  },
  nederland: {
    label: "IPTV Nederland",
    href: "/iptv-nederland",
    description: "Alle Nederlandse zenders, Eredivisie en live sport in 4K.",
  },
  smarters: {
    label: "IPTV Smarters Pro",
    href: "/iptv-smarters-pro",
    description:
      "Stel IPTV Smarters Pro in met M3U of Xtream Codes — stap voor stap.",
  },
};

const home: SixteenSectionContent = {
  slug: "",
  path: "/",
  meta: {
    title: "IPTV Amsterdam – Het Beste IPTV Abonnement van Nederland",
    description:
      "Kies voor de beste IPTV Aanbieder. IPTV Amsterdam Nederland biedt 31.000+ IPTV Kanalen en VOD in 4K. Betrouwbare IPTV Service zonder buffering. Start nu!",
    h1: "IPTV Amsterdam Nederland – Het Premium IPTV Abonnement",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Amsterdam · Premium Amsterdam",
    title: "De Premium IPTV Service voor Nederland en België",
    subtitle:
      "Wilt u betrouwbaar IPTV Kopen? Duizenden Nederlandse kijkers kiezen dagelijks voor onze stabiele IPTV Service. Geniet van alle IPTV Kanalen en 4K-kwaliteit op élk apparaat.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Start gratis proef",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Bekijk pakketten",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "tevreden kijkers", value: "10.000+" },
      { label: "live kanalen", value: "31.000+" },
      { label: "films & series", value: "140.000+" },
      { label: "Amsterdamkwaliteit", value: "99,9%" },
      { label: "Google beoordeling", value: "4,9/5" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Herkent u dit?",
    title: "Genoeg frustraties met uw huidige tv-provider",
    subtitle:
      "U bent niet de enige die vastloopt bij traditionele televisie. Dit zijn de meest voorkomende pijnpunten.",
    pains: [
      {
        title: "Te hoge maandlasten",
        desc: "U betaalt 50 tot 80 euro per maand voor een standaard tv-pakket, maar kijkt slechts een fractie van de zenders. Ondertussen stijgen de prijzen elk jaar.",
      },
      {
        title: "Vaste jaarcontracten",
        desc: "U zit vast aan langdurige contracten met dure opzegboetes. Bij verhuizing of wijziging van wensen bent u duur uit.",
      },
      {
        title: "Beperkt zenderaanbod",
        desc: "U mist zenders die u graag wilt zien. Sport, internationale kanalen of films zijn vaak niet beschikbaar of alleen tegen meerprijs.",
      },
      {
        title: "Bufferen en haperingen",
        desc: "Tijdens een spannende wedstrijd of favoriete serie valt het beeld weg of blijft het laden. De ergernis is groot.",
      },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "De oplossing",
    title: "IPTV Nederland: Meer IPTV Kanalen, Minder Betalen",
    subtitle:
      "Wij lossen al uw tv-frustraties op met onze premium IPTV Service. Geen contracten, geen buffering, wel de beste IPTV Aanbieder ervaring.",
    points: [
      {
        title: "Betaal minder dan de helft",
        desc: "Voor een fractie van de prijs van kabel-tv krijgt u duizenden kanalen, films en series in 4K. Vanaf slechts enkele euro's per maand.",
      },
      {
        title: "Geen contract, volledige vrijheid",
        desc: "Geen jaarcontracten of opzegboetes. Uw abonnement stopt wanneer u wilt. U bent volledig flexibel.",
      },
      {
        title: "Alles inbegrepen, geen extra's",
        desc: "Sport, films, 4K, Nederlandse zenders en internationale kanalen — alles zit in één abonnement zonder verborgen kosten.",
      },
      {
        title: "Stabiele 4K-streams zonder bufferen",
        desc: "Onze Nederlandse servers leveren een vloeiend beeld, ook tijdens piekuren. Geen haperingen meer tijdens uw favoriete programma.",
      },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Wat u krijgt",
    title: "Premium IPTV met unieke voordelen",
    subtitle: "Elk abonnement bevat deze eigenschappen — zonder extra kosten.",
    features: [
      {
        title: "4K & 8K Ultra HD",
        desc: "Messcherpe beeldkwaliteit met HDR. Stream films, sport en series in de hoogste resolutie, zonder haperingen.",
      },
      {
        title: "Nul buffering gegarandeerd",
        desc: "Adaptieve bitrate-technologie past de kwaliteit automatisch aan uw verbinding aan. Geen vastlopers tijdens sport of films.",
      },
      {
        title: "Alle Nederlandse zenders",
        desc: "NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, Net5, ESPN, Ziggo Sport en alle regionale omroepen in HD en 4K.",
      },
      {
        title: "Werkt op elk apparaat",
        desc: "Smart TV, Fire TV Stick, Android TV, Apple TV, iPhone, iPad, Windows, Mac en MAG-boxen. Eén abonnement, al uw schermen.",
      },
      {
        title: "Complete VOD-bibliotheek",
        desc: "140.000+ films en series on demand, met ondertiteling. Altijd iets nieuws om te ontdekken, zonder extra kosten.",
      },
      {
        title: "Gratis proefperiode",
        desc: "Test de volledige dienst een uur gratis — zonder creditcard of risico. Ontdek zelf waarom IPTV Amsterdam de beste keuze is.",
      },
    ],
  },

  // ── Section 6: Why Us ───────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Waarom IPTV Amsterdam",
    title: "Waarom wij de beste IPTV Aanbieder zijn",
    subtitle:
      "Als toonaangevende IPTV Aanbieder voor IPTV Nederland doen wij het anders. Dit maakt het verschil.",
    reasons: [
      {
        title: "Eigen servers in Nederland",
        desc: "Geen gedeelde buitenlandse infrastructuur. Onze servers staan in Nederland en België voor de laagste latentie, snelste kanaalwissels en maximale stabiliteit.",
      },
      {
        title: "Nederlandse support, 24/7",
        desc: "Geen chatbots of gebrekkig Engels. Ons team is dag en nacht bereikbaar via WhatsApp met een reactietijd van onder de 5 minuten. Door mensen, niet door robots.",
      },
      {
        title: "Altijd actueel en compleet",
        desc: "Duizenden kanalen uit 190+ landen, dagelijks bijgewerkt. Nieuwe zenders en VOD worden continu toegevoegd zonder dat u iets hoeft te doen.",
      },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Aan de slag",
    title: "In 3 stappen klaar om te streamen",
    subtitle:
      "Van ontdekking tot kijken in minder dan 10 minuten. Geen installatiekosten of technische kennis vereist.",
    steps: [
      {
        step: "01",
        title: "Vraag gratis proef aan",
        desc: "Neem contact op via WhatsApp en ontvang direct een gratis proefuur. Test alle kanalen, de beeldkwaliteit en stabiliteit op uw eigen apparaat.",
      },
      {
        step: "02",
        title: "Kies uw ideale abonnement",
        desc: "Selecteer de looptijd en het aantal verbindingen. Hoe langer de looptijd, hoe lager de maandprijs — zonder verborgen kosten.",
      },
      {
        step: "03",
        title: "Stream onbeperkt in 4K",
        desc: "Na betaling ontvangt u binnen 5 minuten uw M3U-link en Xtream Codes. Voer ze in uw IPTV-app in en stream direct duizenden kanalen.",
      },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Overal te gebruiken",
    title: "Werkt op vrijwel elk apparaat",
    subtitle:
      "Of u nu een Smart TV, telefoon, tablet of computer gebruikt — ons IPTV-abonnement werkt op al uw apparaten.",
    deviceGroups: [
      {
        name: "Smart TV's",
        items: [
          "Samsung Smart TV",
          "LG webOS",
          "Sony Android TV",
          "Philips Android TV",
          "Panasonic",
          "Hisense",
          "TCL",
        ],
      },
      {
        name: "Amsterdamapparaten",
        items: [
          "Amazon Fire TV Stick",
          "Chromecast met Google TV",
          "Nvidia Shield",
          "Apple TV 4K",
          "Roku",
          "Formuler Z11",
        ],
      },
      {
        name: "Mobiel & Tablet",
        items: [
          "iPhone",
          "iPad",
          "Samsung Galaxy",
          "Google Pixel",
          "Huawei",
          "OnePlus",
          "Xiaomi",
        ],
      },
      {
        name: "Computer",
        items: [
          "Windows PC",
          "MacBook & iMac",
          "Linux",
          "VLC Media Player",
          "IPTV Smarters Pro",
          "TiviMate",
        ],
      },
    ],
    ctaText: "Check de volledige lijst",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Het aanbod",
    title: "31.000+ IPTV Kanalen uit 190+ landen",
    subtitle:
      "Van de beste IPTV Nederland zenders tot internationale sport — alle premium IPTV Kanalen op één plek.",
    channelGroups: [
      {
        name: "Nederlands aanbod",
        items: [
          "NPO 1, 2, 3",
          "RTL 4, 5, 7, 8",
          "SBS6, Veronica, Net5",
          "ESPN 1-4",
          "Ziggo Sport 1-5",
          "Regionale omroepen",
          "MTV, Comedy Central, Discovery",
        ],
      },
      {
        name: "Live sport",
        items: [
          "Eredivisie & KKD",
          "Champions League",
          "Formule 1",
          "MotoGP",
          "UFC & WWE",
          "NBA & NFL",
          "Tennis Grand Slams",
        ],
      },
      {
        name: "Internationale zenders",
        items: [
          "BBC, CNN, Sky News",
          "HBO, FOX, National Geographic",
          "Disney Channel, Nickelodeon",
          "Duitse, Franse, Spaanse zenders",
          "Arabische & Turkse zenders",
          "Afrikaanse & Aziatische zenders",
        ],
      },
      {
        name: "Films & Series (VOD)",
        items: [
          "Nieuwste bioscoopfilms",
          "Netflix-stijl originals",
          "Complete series boxsets",
          "IMDb top 250",
          "Documentaires",
          "Kinderfilms",
        ],
      },
    ],
  },

  // ── Section 10: Pricing (uses existing component) ─────────────────────────
  pricing: {
    pillText: "Onze tarieven",
    title: "Kies het IPTV Abonnement dat bij u past",
    subtitle:
      "Hoe langer de looptijd, hoe voordeliger uw IPTV Abonnement. Alle pakketten van onze IPTV Service zijn inclusief sport, 4K en IPTV Nederland zenders.",
  },

  // ── Section 11: Comparison vs Competitors ────────────────────────────────
  comparison: {
    eyebrow: "Vergelijk",
    title: "IPTV Amsterdam vs traditionele tv-providers",
    subtitle:
      "Zelfs op de hoogste punten scoren wij beter. Dit is waarom steeds meer Nederlanders overstappen.",
    rows: [
      {
        feature: "Maandprijs",
        us: "Vanaf €7,99/maand",
        them: "€50 - €80/maand",
      },
      { feature: "Aantal kanalen", us: "31.000+", them: "50 - 100" },
      {
        feature: "4K & 8K kwaliteit",
        us: "Standaard inbegrepen",
        them: "Niet of tegen meerprijs",
      },
      {
        feature: "VOD-bibliotheek",
        us: "140.000+ titels",
        them: "Beperkt of niet",
      },
      { feature: "Jaarcontract", us: "Niet nodig", them: "Verplicht 1-2 jaar" },
      { feature: "Opzegboete", us: "Geen", them: "Tot €150" },
      {
        feature: "Internationale zenders",
        us: "190+ landen",
        them: "Alleen Nederlands",
      },
      {
        feature: "24/7 support",
        us: "Nederlandstalig",
        them: "Beperkt / Engels",
      },
      { feature: "Gratis proef", us: "Ja, 1 uur", them: "Nee" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Wat klanten zeggen",
    title: "4,9/5 op Google — beoordeeld door duizenden",
    subtitle:
      "Onze klanten waarderen ons met de hoogste score onder IPTV-aanbieders in Nederland.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Veilig & betrouwbaar",
    title: "Uw privacy en stabiliteit zijn onze prioriteit",
    subtitle:
      "Wij nemen beveiliging en betrouwbaarheid serieus — geen uitzonderingen.",
    items: [
      {
        title: "SSL-versleutelde betalingen",
        desc: "Alle transacties verlopen via beveiligde verbindingen met gerenommeerde betaalpartners zoals Mollie en Stripe. Uw betaalgegevens worden nooit opgeslagen.",
      },
      {
        title: "99,9% serveruptime",
        desc: "Onze servers worden 24/7 gemonitord met redundante systemen. Uitval wordt geautomatiseerd gedetecteerd en binnen seconden omgeleid.",
      },
      {
        title: "Privacy by design",
        desc: "Wij hanteren strikte privacynormen en delen uw gegevens nooit met derden. Uw kijkgedrag wordt niet gevolgd of verkocht.",
      },
      {
        title: "Anti-freeze technologie",
        desc: "Slimme load-balancing houdt streams vloeiend, ook tijdens piekuren. Speciaal ontwikkeld voor de Nederlandse markt.",
      },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen over IPTV Amsterdam",
    subtitle: "Alles wat u moet weten over onze dienst.",
    faqs: [
      {
        question: "Wat is IPTV Amsterdam precies?",
        answer:
          "IPTV Amsterdam is een premium IPTV-dienst die live televisie, sport, films en series levert via uw internetverbinding. Geen kabel of schotel nodig. U streamt op elk apparaat met duizenden kanalen in 4K, tegen een vaste prijs zonder jaarcontract.",
      },
      {
        question: "Hoe verschilt IPTV Amsterdam van andere aanbieders?",
        answer:
          "Wij onderscheiden ons met een eigen serverinfrastructuur in Nederland, 24/7 Nederlandstalige support (geen chatbots), een dagelijks bijgewerkt kanaalaanbod en een niet-goed-geld-terug-garantie. Onze 4,9/5 beoordeling op Google bevestigt onze kwaliteit.",
      },
      {
        question: "Op welke apparaten werkt IPTV Amsterdam?",
        answer:
          "Op vrijwel alle moderne apparaten: Samsung, LG en Sony Smart TV's, Amazon Fire TV Stick, Android TV-boxen, Apple TV, iPhone, iPad, Android-telefoons, Windows- en Mac-computers, en MAG/Formuler-boxen. Uw abonnement werkt op meerdere apparaten.",
      },
      {
        question: "Kan ik eerst gratis testen voordat ik een abonnement neem?",
        answer:
          "Ja, u ontvangt een gratis proefuur met volledige toegang tot alle kanalen, sport en de VOD-bibliotheek. Vraag uw proef aan via WhatsApp en ervaar zelf de kwaliteit op uw eigen apparaat — zonder risico.",
      },
      {
        question: "Welke Nederlandse zenders en sport kan ik kijken?",
        answer:
          "Alle populaire Nederlandse zenders: NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, Net5, ESPN, Ziggo Sport en alle regionale omroepen. Daarnaast live Eredivisie, Champions League, Formule 1, MotoGP, NBA, NFL en meer — in HD en 4K.",
      },
      {
        question: "Is IPTV Amsterdam veilig en betrouwbaar?",
        answer:
          "Absoluut. Wij hanteren de hoogste veiligheidsstandaarden met SSL-versleutelde betalingen en strikte privacyrichtlijnen. Onze servers hebben een uptime van 99,9% en worden 24/7 gemonitord. Uw gegevens worden nooit gedeeld met derden.",
      },
      {
        question: "Welke betalingsmethoden worden geaccepteerd?",
        answer:
          "U kunt veilig betalen met iDEAL, creditcard (Visa, Mastercard) en PayPal. Alle betalingen verlopen via een beveiligde, versleutelde omgeving. Na ontvangst wordt uw account binnen enkele minuten geactiveerd.",
      },
      {
        question: "Kan ik mijn abonnement opzeggen of aanpassen?",
        answer:
          "Ja, u kunt op elk moment upgraden naar meer verbindingen of een langere looptijd. Opzeggen kan eenvoudig via ons supportteam — zonder opzegkosten of boetes. Uw service blijft actief tot het einde van de betaalde periode.",
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Ontdek meer",
    title: "Alles over IPTV in Nederland",
    subtitle: "Verdiep u in de verschillende aspecten van onze dienst.",
    links: [
      LINK.kopen,
      LINK.abonnement,
      LINK.aanbieder,
      LINK.nederland,
      LINK.smarters,
    ],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Start vandaag met IPTV Amsterdam",
    description:
      "Sluit u aan bij duizenden tevreden kijkers in Nederland. Ontvang direct toegang tot alle kanalen, sport en films — of begin met een gratis proef.",
  },
};

export default home;
