import type { SixteenSectionContent } from "./types";

const LINK = {
  home: {
    label: "IPTV Amsterdam",
    href: "/",
    description:
      "Het beste IPTV-abonnement van Nederland met 31.000+ kanalen en 4K-kwaliteit.",
  },
  abonnement: {
    label: "IPTV Abonnement",
    href: "/iptv-abonnement",
    description:
      "Bekijk alle abonnementsvormen voor IPTV met eenvoudige vergelijking.",
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
    description:
      "De complete gids voor IPTV in Nederland met alle zenders en sport.",
  },
  smarters: {
    label: "IPTV Smarters Pro",
    href: "/iptv-smarters-pro",
    description:
      "Stel IPTV Smarters Pro eenvoudig in met M3U-links en Xtream Codes.",
  },
};

const iptvKopen: SixteenSectionContent = {
  slug: "iptv-kopen",
  path: "/iptv-kopen",
  meta: {
    title: "IPTV Kopen ✓ Betrouwbare IPTV Koopgids 2026",
    description:
      "IPTV kopen? Vergelijk de beste aanbieders, prijzen en pakketten in Nederland. Direct activeren, 31.000+ kanalen, 4K-kwaliteit en gratis proef. Begin vandaag.",
    h1: "IPTV Kopen in Nederland – Uw complete koopgids",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Kopen · Veilig & snel",
    title: "IPTV Kopen in Nederland – waarmee moet u rekening houden?",
    subtitle:
      "Overweegt u IPTV te kopen? Lees onze gids met aandachtspunten, valkuilen en tips om de beste keuze te maken. U vindt hier alles voor een veilige aankoop.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Vergelijk pakketten",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Gratis proef aanvragen",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "pakketten beschikbaar", value: "2+ mnd" },
      { label: "actieve klanten", value: "10.000+" },
      { label: "tevredenheidsscore", value: "4,9/5" },
      { label: "gratis proef", value: "1 uur" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Valkuilen bij IPTV kopen",
    title: "Voorkom deze fouten bij het kopen van IPTV",
    subtitle:
      "Jaarlijks lopen duizenden Nederlanders tegen dezelfde problemen aan bij het kopen van IPTV. Herkent u deze situaties?",
    pains: [
      {
        title: "Onbetrouwbare aanbieders",
        desc: "Betaalt u voor een goedkoop IPTV-pakket bij een onbekende aanbieder, dan kan de service na een week stoppen. Uw geld bent u kwijt en u staat zonder televisie.",
      },
      {
        title: "Onverwachte extra kosten",
        desc: "Wat lijkt op een scherpe aanbieding blijkt later duurder uit te vallen. Verborgen kosten voor betaling, activatie of bepaalde zenders drijven de prijs op.",
      },
      {
        title: "Slechte beeldkwaliteit en stabiliteit",
        desc: "Goedkope IPTV-diensten gebruiken overbelaste servers waardoor streams haperen, vastlopen of in lage resolutie worden weergegeven. Vooral tijdens sportevenementen en piekuren.",
      },
      {
        title: "Geen Nederlandstalige ondersteuning",
        desc: "Bij problemen staat u er alleen voor. Buitenlandse aanbieders bieden geen Nederlandse support en reageren traag op storingen — of helemaal niet.",
      },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "IPTV Kopen Gids",
    title: "IPTV Kopen Gids: Zo herkent u een betrouwbare IPTV-aanbieder",
    subtitle:
      "Door onze IPTV Kopen Gids te volgen voorkomt u teleurstellingen en kiest u veilig.",
    points: [
      {
        title: "Kijk naar reviews en beoordelingen",
        desc: "Een betrouwbare aanbieder heeft aantoonbare positieve reviews op Google en Trustpilot. Ga niet af op alleen hun eigen website; zoek onafhankelijke meningen.",
      },
      {
        title: "Vraag om een gratis proefperiode",
        desc: "Serieuze aanbieders bieden een proefperiode aan zonder risico. Test de beeldkwaliteit, stabiliteit en het zenderaanbod voordat u betaalt.",
      },
      {
        title: "Let op betalingsmogelijkheden",
        desc: "Betrouwbare aanbieders bieden iDEAL, creditcard of PayPal aan. Vermijd aanbieders die alleen cryptovaluta of ongebruikelijke betaalmethoden accepteren.",
      },
      {
        title: "Controleer de Nederlandse support",
        desc: "Een aanbieder met eigen Nederlandstalige klantenservice en korte reactietijden (bijv. via WhatsApp) staat garant voor betrouwbaarheid bij problemen en vragen.",
      },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Amsterdam Kwaliteit",
    title: "IPTV Kopen: Amsterdam Kwaliteit en Essentiële Functies",
    subtitle:
      "Wanneer u besluit IPTV te kopen, zijn deze functies essentieel voor de beste kijkervaring.",
    features: [
      {
        title: "4K Ultra HD beeldkwaliteit",
        desc: "Een moderne IPTV-dienst levert minimaal HD-beeld, maar bij voorkeur 4K UHD en zelfs 8K. Vraag altijd naar de maximale resolutie voor sport en films.",
      },
      {
        title: "Adaptieve bitrate voor stabiliteit",
        desc: "Deze technologie past de kwaliteit automatisch aan uw internetverbinding aan. Geen buffering meer tijdens sportwedstrijden, zelfs niet bij drukte op het netwerk.",
      },
      {
        title: "Electronic Program Guide (EPG)",
        desc: "Een complete programmagids met informatie over elk kanaal. Zo ziet u wat er nu en later wordt uitgezonden, met filteropties per genre.",
      },
      {
        title: "M3U & Xtream Codes ondersteuning",
        desc: "Het pakket moet M3U-links en Xtream Codes bieden voor eenvoudig gebruik in apps zoals TiviMate, IPTV Smarters Pro, VLC en Perfect Player.",
      },
      {
        title: "Multi-device en multi-room",
        desc: "Een abonnement voor meerdere verbindingen zodat u op verschillende apparaten en in verschillende kamers tegelijk kunt kijken, zonder extra apparatuur.",
      },
      {
        title: "Catch-up en timeshift",
        desc: "Met catch-up kunt u gemiste programma's terugkijken. Timeshift pauzeert en spoelt live televisie terug. Essentieel voor drukke huishoudens.",
      },
    ],
  },

  // ── Section 6: Why Us ────────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Voordelen",
    title: "De Voordelen van IPTV Kopen bij IPTV Amsterdam",
    subtitle:
      "Onze trackrecord spreekt voor zich. Ontdek de voordelen van IPTV kopen bij ons.",
    reasons: [
      {
        title: "Niet-goed-geld-terug",
        desc: "Niet tevreden met uw aankoop? U krijgt uw geld terug zonder gedoe. Wij staan achter onze kwaliteit met een eerlijke garantie die u bij vrijwel geen andere aanbieder vindt.",
      },
      {
        title: "Directe activering na betaling",
        desc: "Geen uren wachten op een e-mail. Na betaling ontvangt u binnen 5 minuten uw inloggegevens, M3U-link en stapsgewijze handleiding. Zo kunt u direct beginnen.",
      },
      {
        title: "Geen verborgen kosten",
        desc: "Wat u ziet, is wat u betaalt. Geen activatiekosten, verzendkosten of extra's voor sport of 4K. Het opgegeven bedrag is het enige dat u betaalt.",
      },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Installatie",
    title: "Installatie: In 3 stappen IPTV kopen en direct genieten",
    subtitle: "De installatie na het IPTV kopen duurt nog geen 10 minuten.",
    steps: [
      {
        step: "01",
        title: "Kies uw pakket",
        desc: "Bekijk de verschillende abonnementen op basis van gewenste looptijd en aantal gelijktijdige verbindingen. Hoe langer de looptijd, hoe voordeliger de maandprijs.",
      },
      {
        step: "02",
        title: "Reken veilig af",
        desc: "Betaal eenvoudig en veilig met iDEAL, creditcard of PayPal. Uw betaling wordt direct verwerkt via een SSL-beveiligde omgeving. Na betaling ontvangt u direct uw gegevens.",
      },
      {
        step: "03",
        title: "Installeren en streamen",
        desc: "Volg de duidelijke handleiding of volg ons installatieadvies per apparaat. Binnen enkele minuten kijkt u op al uw apparaten naar duizenden kanalen in 4K.",
      },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Apparaten & Compatibiliteit",
    title: "Compatibiliteit: Op welke apparaten kunt u IPTV gebruiken?",
    subtitle:
      "Onze dienst is getest op alle gangbare apparaten. Ontdek de compatibiliteit voordat u IPTV gaat kopen.",
    deviceGroups: [
      {
        name: "Smart TV's",
        items: [
          "Samsung Smart Hub",
          "LG webOS tv's",
          "Sony Bravia (Android TV)",
          "Philips Ambilight",
          "Panasonic VIERA",
          "Hisense VIDAA",
          "TCL Android TV",
        ],
      },
      {
        name: "Amsterdam & boxen",
        items: [
          "Amazon Fire TV Stick",
          "Chromecast Ultra",
          "Nvidia Shield TV Pro",
          "Apple TV 4K",
          "Formuler Z11 Pro",
          "MAG 524",
        ],
      },
      {
        name: "Mobiele apparaten",
        items: [
          "iPhone 14/15/16",
          "iPad Pro/Air",
          "Samsung Galaxy S24/S25",
          "Google Pixel 9",
          "Huawei P-series",
          "Xiaomi tablets",
        ],
      },
      {
        name: "Software apps",
        items: [
          "IPTV Smarters Pro",
          "TiviMate",
          "VLC Media Player",
          "Kodi",
          "Perfect Player",
          "GSE Smart IPTV",
        ],
      },
    ],
    ctaText: "Bekijk installatiegids per apparaat",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Zenderaanbod",
    title: "Dit ontvangt u wanneer u IPTV koopt bij IPTV Amsterdam",
    subtitle:
      "Een compleet kanaalaanbod dat u bij geen enkele andere aanbieder in deze samenstelling vindt.",
    channelGroups: [
      {
        name: "Nederlandse zenders",
        items: [
          "NPO 1 HD",
          "RTL 4 HD",
          "SBS6 HD",
          "ESPN 1 HD",
          "Ziggo Sport HD",
          "Veronica HD",
          "Discovery HD",
          "MTV HD",
        ],
      },
      {
        name: "Premium sport",
        items: [
          "Eredivisie Live",
          "Champions League",
          "Premier League",
          "LaLiga",
          "Serie A",
          "UFC Fight Pass",
          "Formule 1",
          "MotoGP",
        ],
      },
      {
        name: "Films & entertainment",
        items: [
          "HBO",
          "FOX",
          "Netflix Channel",
          "National Geographic",
          "BBC Earth",
          "Disney Channel",
          "Cartoon Network",
          "Comedy Central",
        ],
      },
      {
        name: "Nieuws & documentaires",
        items: [
          "CNN",
          "BBC News",
          "Sky News",
          "Euronews",
          "NOS Journaal",
          "Business Insider",
          "History Channel",
          "Animal Planet",
        ],
      },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Pakketten",
    title: "IPTV Kopen — kies uw pakket",
    subtitle:
      "Alle pakketten zijn inclusief sport, 4K en Nederlandse zenders. Hoe langer de looptijd, hoe lager de prijs per maand.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "Abonnement Vergelijken",
    title: "Abonnement Vergelijken: IPTV Kopen met het beste aanbod",
    subtitle:
      "Abonnement vergelijken is belangrijk. Dit is het verschil tussen IPTV Amsterdam en andere aanbieders.",
    rows: [
      { feature: "Prijs per maand", us: "Vanaf €7,99", them: "€15 - €40" },
      { feature: "Gratis proef", us: "Ja, 1 uur", them: "Alleen betalend" },
      {
        feature: "Nederlandse support",
        us: "24/7 via WhatsApp",
        them: "Zeer beperkt",
      },
      { feature: "Serverlocatie", us: "Nederland / België", them: "Buiten EU" },
      {
        feature: "Activeringstijd",
        us: "Binnen 5 minuten",
        them: "Uren tot dagen",
      },
      {
        feature: "Kanaalupdate-frequentie",
        us: "Dagelijks",
        them: "Wekelijks / maandelijks",
      },
      { feature: "Geld-terug-garantie", us: "Ja", them: "Nee" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Reviews",
    title: "Wat anderen zeggen over hun IPTV-aankoop",
    subtitle: "Lees waarom duizenden klanten hun IPTV-pakket bij ons kopen.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Klantenservice",
    title: "Klantenservice en Veiligheid bij IPTV Kopen",
    subtitle:
      "Wij nemen klantenservice en uw veiligheid serieus met deze maatregelen.",
    items: [
      {
        title: "SSL-versleutelde bestelling",
        desc: "Uw bestelling verloopt via een beveiligde verbinding. Alle gegevens worden versleuteld verzonden en nooit opgeslagen op onze servers.",
      },
      {
        title: "Betaalmethode naar keuze",
        desc: "iDEAL (uw eigen bankomgeving), creditcard met 3D Secure, of PayPal kopersbescherming. Kies wat u vertrouwt.",
      },
      {
        title: "Geen datalek risico",
        desc: "Uw persoonsgegevens worden strikt vertrouwelijk behandeld. Geen doorverkoop, geen profilering. Uw privacy staat voorop.",
      },
      {
        title: "Transparante voorwaarden",
        desc: "Geen kleine lettertjes of verborgen clausules. Onze algemene voorwaarden zijn duidelijk: wat u ziet, is wat u krijgt.",
      },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Vragen over IPTV kopen — beantwoord",
    subtitle: "De meest gestelde vragen door kopers.",
    faqs: [
      {
        question: "Is het veilig om IPTV te kopen via een website?",
        answer:
          "Ja, mits u bij een betrouwbare aanbieder koopt. Let op veilige betaalmethoden (iDEAL, creditcard met 3D Secure), duidelijke contactgegevens en Nederlands telefoonnummer of WhatsApp-support. Wij voldoen aan alle veiligheidsnormen.",
      },
      {
        question: "Hoeveel kost een IPTV-abonnement gemiddeld per maand?",
        answer:
          "De prijs varieert van €7 tot €25 per maand, afhankelijk van de looptijd en het aantal gelijktijdige verbindingen. Bij een jaarabonnement betaalt u het minst per maand. Vergelijk altijd de totale kosten en lets op verborgen toeslagen.",
      },
      {
        question: "Kan ik IPTV kopen en direct gebruiken?",
        answer:
          "Bij IPTV Amsterdam wel. Na betaling ontvangt u binnen 5 minuten uw M3U-link, Xtream Codes en installatiehandleiding. U hoeft niet te wachten op handmatige activering. Download de app, voer de gegevens in en u streamt direct.",
      },
      {
        question:
          "Wat is het verschil tussen IPTV kopen of een traditioneel tv-abonnement?",
        answer:
          "Met IPTV koopt u een Amsterdamdienst via internet, zonder kabel, schotel of vastrecht. U heeft vrijwel altijd een groter zenderaanbod (31.000+ kanalen tegenover 50-100), 4K-kwaliteit en VOD, tegen een lagere prijs zonder jaarcontract.",
      },
      {
        question: "Welke IPTV-app heb ik nodig voor het kijken?",
        answer:
          "U kunt IPTV Smarters Pro, TiviMate, VLC Media Player, Kodi of Perfect Player gebruiken. Wij bieden per apparaat een duidelijke installatiegids. De meeste apps zijn gratis en eenvoudig via de app store te installeren.",
      },
      {
        question: "Hoeveel verbindingen heb ik nodig voor IPTV?",
        answer:
          "1 verbinding is voldoende voor één tv tegelijk. Voor een huishouden met 2-3 tv's adviseren wij een pakket met 2 tot 4 gelijktijdige verbindingen. Ook als u op telefoon of tablet kijkt, heeft u een extra verbinding nodig.",
      },
      {
        question: "Wat gebeurt er als IPTV niet werkt na aankoop?",
        answer:
          "Ons supportteam staat 24/7 voor u klaar via WhatsApp. Ook bieden wij een uitgebreide installatiegids per apparaat. Mocht het technisch niet lukken, dan helpen wij u op afstand. In het uiterste geval krijgt u uw geld terug.",
      },
      {
        question: "Kan ik na aankoop upgraden naar een ander pakket?",
        answer:
          "Ja, u kunt op elk moment upgraden naar meer verbindingen of een langer abonnement. Het verschil wordt eenvoudig verrekend. Uw service blijft ononderbroken beschikbaar tijdens de wijziging.",
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Meer informatie",
    title: "Waar wilt u meer over weten?",
    subtitle:
      "Verdiep u in de verschillende IPTV-thema's en ontdek welke dienst het beste bij u past.",
    links: [
      LINK.home,
      LINK.abonnement,
      LINK.aanbieder,
      LINK.nederland,
      LINK.smarters,
    ],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Koop nu uw IPTV-pakket en bespaar direct",
    description:
      "Overstappen op IPTV is eenvoudig, voordelig en veilig. Kies uw abonnement, reken af en stream binnen 5 minuten duizenden kanalen in 4K.",
  },
};

export default iptvKopen;
