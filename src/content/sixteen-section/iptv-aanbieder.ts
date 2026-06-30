import type { SixteenSectionContent } from "./types";

const LINK = {
  home: {
    label: "IPTV Amsterdam Home",
    href: "/",
    description: "Het beste IPTV-abonnement van Nederland met 31.000+ kanalen.",
  },
  kopen: {
    label: "IPTV Kopen",
    href: "/iptv-kopen",
    description: "Veilig IPTV kopen met directe activering en gratis proef.",
  },
  abonnement: {
    label: "IPTV Abonnement",
    href: "/iptv-abonnement",
    description: "Vergelijk IPTV-abonnementen met flexibele looptijden.",
  },
  nederland: {
    label: "IPTV Nederland",
    href: "/iptv-nederland",
    description: "Alles over IPTV in Nederland: zenders, sport en installatie.",
  },
  smarters: {
    label: "IPTV Smarters Pro",
    href: "/iptv-smarters-pro",
    description: "Installatiegids voor IPTV Smarters Pro op elk apparaat.",
  },
};

const aanbieder: SixteenSectionContent = {
  slug: "iptv-aanbieder",
  path: "/iptv-aanbieder",
  meta: {
    title: "IPTV Aanbieder ✓ Beste IPTV Aanbieder Nederland 2026",
    description:
      "Zoek de beste IPTV aanbieder van Nederland? Vergelijk alle aanbieders, prijzen en diensten. IPTV Amsterdam scoort 4,9/5. Ontdek waarom.",
    h1: "De beste IPTV aanbieder van Nederland – volledige vergelijking",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Aanbieder · Vergelijk & kies",
    title: "IPTV Aanbieder: Welke IPTV aanbieder past het beste bij u?",
    subtitle:
      "De Nederlandse IPTV-markt groeit snel. Maar niet elke aanbieder levert dezelfde kwaliteit. Ontdek waar u op moet letten en maak een weloverwogen keuze.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Vergelijk alle aanbieders",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Probeer de beste",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "beoordeling op Google", value: "4,9/5" },
      { label: "actieve verbindingen", value: "10.000+" },
      { label: "server uptime", value: "99,9%" },
      { label: "Nederlandse support", value: "24/7" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Het probleem met IPTV aanbieders",
    title: "Waarom veel IPTV aanbieders niet aan uw verwachtingen voldoen",
    subtitle:
      "De keuze voor een IPTV aanbieder bepaalt uw volledige kijkervaring. Dit zijn de valkuilen.",
    pains: [
      {
        title: "IPTV Aanbieder: Overbelaste servers en slechte prestaties",
        desc: "Veel IPTV aanbieders gebruiken gedeelde, goedkope servers in het buitenland. Het gevolg: lange laadtijden, vastlopers tijdens piekuren en een slechte beeldkwaliteit.",
      },
      {
        title: "IPTV Aanbieder: Geen of trage klantenservice",
        desc: "Bij problemen kunt u vaak alleen mailen en duurt het dagen voordat u antwoord krijgt. Geen telefoonnummer, geen WhatsApp-support, geen Nederlandse hulp.",
      },
      {
        title: "IPTV Aanbieder: Onbetrouwbare betalingssystemen",
        desc: "Sommige aanbieders vragen om Cryptovaluta, bankoverschrijving naar een buitenlandse rekening of bieden geen bekende betaalmethoden aan. Uw geld is niet veilig.",
      },
      {
        title: "IPTV Aanbieder: Kanalen die niet werken",
        desc: "Niets is zo frustrerend als betalen voor een dienst waarbij kanalen offline zijn of een lage kwaliteit hebben. Zonder goede ondersteuning staat u er alleen voor.",
      },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "Waar let u op?",
    title: "IPTV Aanbieder: De kenmerken van een goede IPTV aanbieder",
    subtitle:
      "Met deze checklist herkent u een professionele en betrouwbare IPTV aanbieder in Nederland.",
    points: [
      {
        title: "IPTV Aanbieder: Eigen serverinfrastructuur in Nederland",
        desc: "Een serieuze IPTV aanbieder investeert in eigen servers in Nederland en België. Dit garandeert de laagste latentie, hoogste uptime en snelste kanaalwissels.",
      },
      {
        title: "IPTV Aanbieder: Nederlandstalige support met korte reactietijd",
        desc: "De beste aanbieders bieden ondersteuning in het Nederlands via WhatsApp, telefoon en e-mail. Reactietijd van maximaal 5 minuten bij storingen of vragen.",
      },
      {
        title: "IPTV Aanbieder: Duidelijke prijzen zonder verrassingen",
        desc: "Transparante tarieven zonder activatiekosten, verzendkosten of verplichte maandelijkse toeslagen. Wat wordt beloofd, wordt nagekomen.",
      },
      {
        title: "IPTV Aanbieder: Aantoonbare reviews en tevreden klanten",
        desc: "Een betrouwbare IPTV aanbieder heeft onafhankelijk geverifieerde positieve reviews op Google, Trustpilot of andere reviewplatforms. Vraag ernaar en controleer ze.",
      },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Vergelijk aanbieders",
    title: "Deze eigenschappen onderscheiden goede van slechte IPTV aanbieders",
    subtitle:
      "Let op deze kenmerken wanneer u IPTV aanbieders met elkaar vergelijkt.",
    features: [
      {
        title: "IPTV Aanbieder: Stabiliteit en streamkwaliteit",
        desc: "Een goede aanbieder levert stabiele 4K-streams dankzij eigen premium servers. Vraag altijd naar de serverlocatie, bandbreedte en capaciteit tijdens piekuren.",
      },
      {
        title: "IPTV Aanbieder: Breedte van het kanaalaanbod",
        desc: "31.000+ kanalen uit 190+ landen, met speciale aandacht voor Nederlands aanbod en live sport. Het aanbod moet compleet en actueel zijn.",
      },
      {
        title: "IPTV Aanbieder: Ondersteunde apparaten",
        desc: "Een professionele IPTV aanbieder ondersteunt vrijwel alle apparaten: Smart TV's, Amsterdamboxen, smartphones, tablets en computers. Van Samsung tot Apple TV.",
      },
      {
        title: "IPTV Aanbieder: Installatiegemak en handleidingen",
        desc: "De aanbieder biedt duidelijke, stapsgewijze installatiehandleidingen per apparaat. Ook voor niet-technische gebruikers moet het eenvoudig zijn om te starten.",
      },
      {
        title: "IPTV Aanbieder: Meer dan alleen live tv",
        desc: "Naast live kanalen biedt de beste aanbieder ook een uitgebreide VOD-bibliotheek met films en series, catch-up tv en een EPG-programmagids.",
      },
      {
        title: "IPTV Aanbieder: Gratis proefperiode als kwaliteitsgarantie",
        desc: "Een goede IPTV aanbieder biedt een gratis proefperiode aan, zodat u de dienst kunt testen voordat u een betaald abonnement neemt. Zonder creditcard en zonder risico.",
      },
    ],
  },

  // ── Section 6: Why Us ───────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Waarom Wij",
    title: "IPTV Aanbieder: De beste IPTV aanbieder volgens 4,9/5 beoordeling",
    subtitle: "Dit maakt ons uniek in het Nederlandse IPTV-landschap.",
    reasons: [
      {
        title: "IPTV Aanbieder: Eigen servers in Nederland & België",
        desc: "Andere aanbieders huren gedeelde servers in Frankrijk of Duitsland. Wij hebben eigen dedicated servers in Nederland en België, speciaal geoptimaliseerd voor IPTV-Amsterdam.",
      },
      {
        title:
          "IPTV Aanbieder: Nederlandse klantenservice met hart voor de zaak",
        desc: "Wij beantwoorden elke vraag binnen 5 minuten via WhatsApp. Ons team bestaat uit echte Nederlandse medewerkers, niet uit chatbots of geautomatiseerde systemen.",
      },
      {
        title: "IPTV Aanbieder: Alles inbegrepen, geen themapakketten",
        desc: "Bij veel aanbieders betaalt u extra voor sport, films of 4K. Bij IPTV Amsterdam zit alles in elk abonnement. U betaalt één vast bedrag en krijgt het volledige aanbod.",
      },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Overstappen in 3 stappen",
    title: "IPTV Aanbieder: Zo wordt u klant bij de beste IPTV aanbieder",
    subtitle:
      "Overstappen naar een betere IPTV aanbieder is eenvoudig en snel.",
    steps: [
      {
        step: "01",
        title: "IPTV Aanbieder: Vergelijk en kies",
        desc: "Bekijk onze abonnementen en vergelijk ze met andere aanbieders. Let op prijs, aanbod, support en stabiliteit. U zult zien dat IPTV Amsterdam op elk vlak beter presteert.",
      },
      {
        step: "02",
        title: "IPTV Aanbieder: Meld u aan via WhatsApp",
        desc: "Heeft u vragen? Stel ze direct via WhatsApp. Ons team helpt u met de keuze en beantwoordt al uw vragen voordat u overgaat tot aankoop. Persoonlijk advies zonder verkoopdruk.",
      },
      {
        step: "03",
        title: "IPTV Aanbieder: Kijk direct in 4K",
        desc: "Na aanmelding ontvangt u direct al uw gegevens. Download de app, voer de gegevens in en begin met kijken. NL-support staat klaar als u hulp nodig heeft bij de installatie.",
      },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Apparaatondersteuning",
    title: "Elke goede IPTV aanbieder ondersteunt deze apparaten",
    subtitle:
      "Controleer of uw apparaten worden ondersteund door de IPTV aanbieder van uw keuze.",
    deviceGroups: [
      {
        name: "Smart TV platforms",
        items: [
          "Samsung Tizen",
          "LG webOS",
          "Android TV / Google TV",
          "Apple tvOS",
          "Philips Saphi",
          "Panasonic My Home Screen",
        ],
      },
      {
        name: "Externe Amsterdamapparaten",
        items: [
          "Fire TV Stick Lite/HD/4K",
          "Google Chromecast",
          "Nvidia Shield TV",
          "Apple TV 4K",
          "Formuler GTV/Z11",
          "MAG 520/524",
        ],
      },
      {
        name: "Smartphones en tablets",
        items: [
          "iPhone en iPad (iOS)",
          "Samsung Galaxy (Android)",
          "Google Pixel",
          "Huawei P-serie",
          "Xiaomi-tablets",
          "OnePlus / Oppo",
        ],
      },
      {
        name: "Software / apps",
        items: [
          "TiviMate",
          "IPTV Smarters Pro",
          "VLC",
          "Kodi",
          "Perfect Player",
          "IMPlayer",
        ],
      },
    ],
    ctaText: "Bekijk de installatiegids",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Het aanbod van de beste IPTV aanbieder",
    title: "IPTV Aanbieder: Welk aanbod mag u verwachten?",
    subtitle: "Als IPTV aanbieder met eigen servers garanderen wij dit aanbod.",
    channelGroups: [
      {
        name: "Nederlands",
        items: [
          "NPO 1 HD",
          "RTL 5 HD",
          "SBS6 HD",
          "ESPN HD",
          "Ziggo Sport HD",
          "Veronica/Disney XD",
          "Comedy Central HD",
          "National Geographic HD",
        ],
      },
      {
        name: "Sport (internationaal)",
        items: [
          "Sky Sports UK",
          "DAZN Italië/Spanje",
          "Eleven Sports",
          "Sport TV Portugal",
          "TSN Canada",
          "SuperSport Zuid-Afrika",
          "Optus Sport Australië",
        ],
      },
      {
        name: "Entertainment",
        items: [
          "AMC",
          "FX",
          "TNT Serie",
          "Comedy Central US",
          "Syfy",
          "E! Entertainment",
          "AXN",
          "13th Street",
        ],
      },
      {
        name: "Documentaires / cultuur",
        items: [
          "History Channel",
          "Discovery Science",
          "Animal Planet",
          "Nat Geo Wild",
          "CBS Reality",
          "BBC Earth",
          "Travel Channel",
        ],
      },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Transparante prijzen",
    title: "IPTV Aanbieder: De tarieven van de beste IPTV aanbieder",
    subtitle:
      "Vergelijk onze prijzen met andere aanbieders. U ziet direct het verschil in kwaliteit en prijs.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "Aanbieders vergeleken",
    title: "IPTV Amsterdam vs andere IPTV aanbieders in Nederland",
    subtitle:
      "Een objectieve vergelijking tussen de meest gebruikte IPTV aanbieders in Nederland.",
    rows: [
      { feature: "Eigen servers NL/BE", us: "Ja", them: "Nee, gedeeld" },
      {
        feature: "Nederlandse support",
        us: "24/7, <5 min reactie",
        them: "Beperkt of geen",
      },
      { feature: "Gratis proef", us: "1 uur, geen creditcard", them: "Nee" },
      {
        feature: "4K streams",
        us: "Inbegrepen",
        them: "Apart betalen of niet",
      },
      { feature: "Geld-terug-garantie", us: "Ja", them: "Nee" },
      { feature: "Activeringstijd", us: "<5 minuten", them: "1-48 uur" },
      {
        feature: "Weergave Google reviews",
        us: "4,9/5 (1.200+ reviews)",
        them: "Geen of <4,0",
      },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Ervaringen",
    title: "IPTV Aanbieder: Waarom klanten ons de beste IPTV aanbieder noemen",
    subtitle:
      "Lees wat onze klanten zeggen over IPTV Amsterdam als IPTV aanbieder.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Veiligheid voorop",
    title: "Een betrouwbare IPTV aanbieder waarborgt uw veiligheid",
    subtitle:
      "Dit zijn de veiligheidsnormen die een goede IPTV aanbieder hanteert.",
    items: [
      {
        title: "IPTV Aanbieder: Bescherming tegen DDoS-aanvallen",
        desc: "Onze servers worden 24/7 beschermd door geavanceerde firewall-systemen die DDoS-aanvallen automatisch detecteren en afweren. Uw stream blijft ononderbroken.",
      },
      {
        title: "IPTV Aanbieder: Veilige betalingsverwerking",
        desc: "Wij gebruiken alleen gecertificeerde betalingsproviders (Mollie, Stripe) met 3D Secure. Uw creditcard- en bankgegevens worden veilig verwerkt.",
      },
      {
        title: "IPTV Aanbieder: Naleving van Nederlandse privacywet",
        desc: "Wij voldoen aan de AVG en hebben een actuele privacyverklaring. Uw gegevens worden niet verhandeld of gebruikt voor commerciële doeleinden.",
      },
      {
        title: "IPTV Aanbieder: Transparante algemene voorwaarden",
        desc: "Geen kleine lettertjes. Onze algemene voorwaarden zijn duidelijk en volledig in het Nederlands. U weet precies waar u aan toe bent.",
      },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    title: "IPTV Aanbieder: Vragen over IPTV aanbieders",
    subtitle:
      "Antwoorden op de meest gestelde vragen over het kiezen van IPTV aanbieders.",
    faqs: [
      {
        question: "Wat is de beste IPTV aanbieder van Nederland?",
        answer:
          "Op basis van onafhankelijke reviews, serverkwaliteit, klantenservice en prijs-kwaliteitverhouding wordt IPTV Amsterdam beschouwd als de beste IPTV aanbieder van Nederland. Met een Google-score van 4,9/5 en eigen servers in Nederland presteren wij beter dan alle andere aanbieders.",
      },
      {
        question:
          "Waar moet ik op letten bij het kiezen van een IPTV aanbieder?",
        answer:
          "Let op serverlocatie (eigen Nederlandse servers zijn beter), klantenservice (24/7 Nederlands), betalingsmogelijkheden (iDEAL, creditcard, PayPal), gratis proefperiode, reviews op onafhankelijke platforms en de transparantie van de algemene voorwaarden.",
      },
      {
        question: "Zijn alle IPTV aanbieders even betrouwbaar?",
        answer:
          "Nee, de betrouwbaarheid verschilt enorm. Sommige aanbieders gebruiken gedeelde servers in het buitenland met overbelasting en uitval als gevolg. Kies altijd voor een aanbieder met eigen Nederlandse servers, bewezen trackrecord en aantoonbare reviews van echte klanten.",
      },
      {
        question: "Hoe herken ik een onbetrouwbare IPTV aanbieder?",
        answer:
          "Rode vlaggen zijn: geen Nederlandse klantenservice, betaling alleen via cryptovaluta, geen reviews op Google/Trustpilot, geen gratis proefperiode, vage algemene voorwaarden en prijzen die veel lager zijn dan de marktconforme tarieven.",
      },
      {
        question: "Biedt IPTV Amsterdam een gratis proefperiode aan?",
        answer:
          "Ja, als beste IPTV aanbieder vinden wij het belangrijk dat u de dienst kunt testen voordat u een abonnement neemt. U ontvangt een gratis proefuur met volledige toegang tot alle kanalen, sport en VOD. Geen creditcard nodig en geen verplichtingen.",
      },
      {
        question: "Kan ik bij IPTV Amsterdam mijn abonnement aanpassen?",
        answer:
          "Ja, u kunt op elk moment upgraden naar meer verbindingen of een ander abonnement. Onze support regelt dit voor u binnen enkele minuten. Ook het wijzigen van uw betalingsgegevens is eenvoudig via uw klantenportaal.",
      },
      {
        question: "Hoe snel wordt mijn account geactiveerd na betaling?",
        answer:
          "Bij IPTV Amsterdam wordt uw account binnen 5 minuten geactiveerd. U ontvangt direct uw M3U-link en Xtream Codes via e-mail en WhatsApp. Dit is aanzienlijk sneller dan het gemiddelde van 1 tot 48 uur bij andere IPTV aanbieders.",
      },
      {
        question: "Wat als ik overstap van een andere IPTV aanbieder?",
        answer:
          "Overstappen is eenvoudig. U kunt uw huidige abonnement opzeggen en direct bij ons starten. Wij helpen u met de overstap en installatie. Zolang uw huidige abonnement nog loopt, kunt u beide diensten naast elkaar gebruiken voor een soepele overgang.",
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Meer informatie",
    title: "IPTV Aanbieder: Verdiep u in IPTV via onze andere pagina's",
    subtitle: "Ontdek meer over onze dienst, abonnementen en installatie.",
    links: [
      LINK.home,
      LINK.kopen,
      LINK.abonnement,
      LINK.nederland,
      LINK.smarters,
    ],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Word klant bij de beste IPTV aanbieder van Nederland",
    description:
      "Waarom genoegen nemen met minder? Kies voor IPTV Amsterdam en ontdek het verschil. 4,9/5 beoordeling, eigen servers en 24/7 Nederlandse support.",
  },
};

export default aanbieder;
