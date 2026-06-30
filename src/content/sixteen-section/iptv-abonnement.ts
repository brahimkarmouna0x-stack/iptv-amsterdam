import type { SixteenSectionContent } from "./types";

const LINK = {
  home: {
    label: "IPTV Amsterdam",
    href: "/",
    description:
      "De beste IPTV-dienst van Nederland met 31.000+ kanalen en 4K.",
  },
  kopen: {
    label: "IPTV Kopen",
    href: "/iptv-kopen",
    description: "Direct een IPTV-abonnement kopen met veilige betaling.",
  },
  aanbieder: {
    label: "IPTV Aanbieder",
    href: "/iptv-aanbieder",
    description: "Vergelijk IPTV aanbieders en ontdek de beste keuze.",
  },
  nederland: {
    label: "IPTV Nederland",
    href: "/iptv-nederland",
    description: "Alles over IPTV in Nederland: zenders, sport en installatie.",
  },
  smarters: {
    label: "IPTV Smarters Pro",
    href: "/iptv-smarters-pro",
    description: "IPTV Smarters Pro installatiegids voor al uw apparaten.",
  },
};

const abonnement: SixteenSectionContent = {
  slug: "iptv-abonnement",
  path: "/iptv-abonnement",
  meta: {
    title: "IPTV Abonnement ☑ Beste Keuze voor Nederlanders",
    description:
      "Het beste IPTV-abonnement voor Nederlanders: 31.000+ kanalen, alle sport & films, 4K-kwaliteit en 24/7 support. Flexibele looptijden zonder jaarcontract. Probeer gratis.",
    h1: "IPTV Abonnement – vergelijk en kies het beste",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Abonnement · Vergelijken loont",
    title: "IPTV Abonnement: Het beste IPTV-abonnement voor uw situatie",
    subtitle:
      "Op zoek naar een IPTV-abonnement? Maak de juiste keuze met ons heldere overzicht van diensten, prijzen en mogelijkheden. Alle pakketten getest op kwaliteit.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Vergelijk abonnementen",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Gratis proef starten",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "abonnementsvormen", value: "3" },
      { label: "Nederlandse servers", value: "99,9%" },
      { label: "Google-score", value: "4,9/5" },
      { label: "tevreden abonnees", value: "10.000+" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Herkenbare frustraties",
    title: "IPTV Abonnement: Waarom uw huidige tv-abonnement niet meer voldoet",
    subtitle:
      "De manier waarop we televisie kijken is veranderd. Toch bieden traditionele aanbieders nog steeds hetzelfde beperkte model.",
    pains: [
      {
        title: "IPTV Abonnement: Vaste lasten die blijven stijgen",
        desc: "Elk jaar verhoogt uw tv-provider de prijzen, terwijl het aanbod gelijk blijft. U betaalt inmiddels 70+ euro voor zenders die u nauwelijks kijkt.",
      },
      {
        title: "IPTV Abonnement: Geen flexibiliteit in looptijd",
        desc: "Een IPTV-abonnement van een traditionele aanbieder dwingt u tot lange contracten. Bij verhuizing of verandering van wensen betaalt u een hoge boete.",
      },
      {
        title: "IPTV Abonnement: Beperking tot één apparaat",
        desc: "Wilt u op meerdere tv's kijken of onderweg op uw telefoon? Bij de meeste providers betaalt u per extra aansluiting apart. Duur en omslachtig.",
      },
      {
        title: "IPTV Abonnement: Gemiste sport en films",
        desc: "Uw abonnement dekt essentiële sportzenders of nieuwe films niet. Voor elke toevoeging betaalt u extra voor een duur themapakket.",
      },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "",
    title: "IPTV Abonnement: Een modern IPTV-abonnement lost deze problemen op",
    subtitle:
      "Een goede IPTV-aanbieder biedt alles in één pakket, zonder uitzonderingen.",
    points: [
      {
        title: "IPTV Abonnement: Alles inclusief, geen themapakketten",
        desc: "Sport, films, 4K, Nederlandse zenders en internationale kanalen — allemaal inbegrepen in de standaardprijs. Geen dure extra's zoals bij kabelaanbieders.",
      },
      {
        title: "IPTV Abonnement: Flexibel opzegbaar zonder boete",
        desc: "Geen jaarcontract. U bepaalt zelf of u maandelijks, per kwartaal of jaarlijks betaalt. Opzeggen kan eenvoudig en kosteloos.",
      },
      {
        title: "IPTV Abonnement: Gelijktijdig kijken op meerdere apparaten",
        desc: "Een IPTV-abonnement met 2, 3 of 4 verbindingen. Iedereen in huis kijkt waar en wanneer hij of zij wil — zonder extra aansluitkosten.",
      },
      {
        title: "IPTV Abonnement: Duizenden kanalen zonder verborgen kosten",
        desc: "Geen extra kosten voor sportzenders, internationale kanalen of 4K. Uw maandbedrag staat vast en dekt het complete aanbod.",
      },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Inbegrepen in elk abonnement",
    title: "Deze functies krijgt u standaard bij elk IPTV-abonnement",
    subtitle:
      "Ongeacht het door u gekozen pakket, deze voordelen zijn altijd inbegrepen.",
    features: [
      {
        title: "IPTV Abonnement: 31.000+ live tv-kanalen",
        desc: "Van Nederlands aanbod tot internationale zenders uit 190+ landen. Altijd iets te kijken, in elke taal en voor elke doelgroep.",
      },
      {
        title: "IPTV Abonnement: 140.000+ films & series (VOD)",
        desc: "Een uitgebreide on-demand bibliotheek die dagelijks wordt aangevuld. Nieuwste releases, klassiekers en complete series — zonder extra kosten.",
      },
      {
        title: "IPTV Abonnement: 4K & Ultra HD streams",
        desc: "De hoogste beeldkwaliteit voor sport, films en documentaires. HDR-ondersteuning voor levensechte kleuren en contrasten.",
      },
      {
        title: "IPTV Abonnement: Elektronische programmagids (EPG)",
        desc: "Een duidelijke gids met programmagegevens voor alle kanalen. Zoekt, filtert en ontdekt wat er nu, straks en morgen op tv is.",
      },
      {
        title: "IPTV Abonnement: Anti-freeze & zero-buffer",
        desc: "Speciale software minimaliseert buffering en stabiliseert de stream. Zelfs tijdens piekuren en live sport kijkt u ongestoord.",
      },
      {
        title: "IPTV Abonnement: 24/7 Nederlandse klantenservice",
        desc: "Ons team staat altijd voor u klaar via WhatsApp, e-mail of telefoon. Binnen 5 minuten reactie, 7 dagen per week.",
      },
    ],
  },

  // ── Section 6: Why Us ───────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Onze belofte",
    title: "Drie redenen voor een IPTV-abonnement bij IPTV Amsterdam",
    subtitle:
      "Waarom kiezen steeds meer Nederlanders voor ons abonnementsmodel?",
    reasons: [
      {
        title: "IPTV Abonnement: Laagste prijs per kanaal",
        desc: "Reken maar mee: voor gemiddeld €10-15 per maand ontvangt u 31.000+ kanalen. Dat is €0,0003 per kanaal. Bij de concurrent betaalt u tot €1 per kanaal per maand.",
      },
      {
        title: "IPTV Abonnement: Geen verschil tussen pakketten",
        desc: "Sommige aanbieders beperken sport of 4K tot duurdere pakketten. Bij ons krijgt u alles in elk abonnement. Het enige verschil is de looptijd en het aantal verbindingen.",
      },
      {
        title: "IPTV Abonnement: Altijd up-to-date",
        desc: "Uw IPTV-abonnement wordt dagelijks vernieuwd met nieuwe kanalen, VOD-toevoegingen en verbeteringen. Nooit meer wachten op updates of handmatig installeren.",
      },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Aanmeldproces",
    title: "IPTV Abonnement: Zo start u uw IPTV-abonnement in 3 stappen",
    subtitle:
      "Van aanmelding tot streamen in minder dan 10 minuten. Geen ingewikkelde installatie.",
    steps: [
      {
        step: "01",
        title: "IPTV Abonnement: Kies uw gewenste looptijd",
        desc: "Bekijk de abonnementen per maand, 3 maanden, 6 maanden of 12 maanden. Hoe langer de looptijd, hoe lager de prijs per maand. U kunt altijd verlengen of opzeggen.",
      },
      {
        step: "02",
        title: "IPTV Abonnement: Selecteer aantal verbindingen",
        desc: "Kies tussen 1, 2, 3 of 4 gelijktijdige streams. Voor een gemiddeld huishouden zijn 2 verbindingen ideaal: één voor de woonkamer en één voor de slaapkamer.",
      },
      {
        step: "03",
        title: "IPTV Abonnement: Betaal en stream direct",
        desc: "Na betaling via iDEAL, creditcard of PayPal ontvangt u uw inloggegevens. Voer de M3U-link of Xtream Codes in uw favoriete IPTV-app en begin met kijken.",
      },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Vrijwel elk apparaat",
    title: "IPTV Abonnement: Uw IPTV-abonnement werkt op al deze apparaten",
    subtitle:
      "IPTV Abonnement: Thuis of onderweg, op elk apparaat van uw keuze.",
    deviceGroups: [
      {
        name: "Smart TV's",
        items: [
          "Samsung Tizen TV",
          "LG ThinQ webOS",
          "Sony Android TV",
          "Philips Smart TV",
          "Panasonic My Home Screen",
          "TCL Roku TV",
        ],
      },
      {
        name: "Amsterdam apparaten",
        items: [
          "Fire TV Stick Max",
          "Apple TV HD/4K",
          "Nvidia Shield Pro",
          "Chromecast Gen 4",
          "Formuler Z11",
          "MAG 524w2",
        ],
      },
      {
        name: "Mobiel & Tablet",
        items: [
          "iPhone 15/16 Pro",
          "iPadAir",
          "Samsung Galaxy S25",
          "Xiaomi 14T",
          "Huawei MatePad",
          "OnePlus 13",
        ],
      },
      {
        name: "Software & apps",
        items: [
          "IPTV Smarters Pro",
          "TiviMate Premium",
          "VLC Media Player",
          "Perfect Player",
          "Kodi Matrix",
          "IPTV Extreme",
        ],
      },
    ],
    ctaText: "Volledige compatibiliteitslijst",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Zenderaanbod",
    title: "IPTV Abonnement: Welke zenders ontvangt u met uw IPTV-abonnement?",
    subtitle:
      "Een greep uit het uitgebreide aanbod dat u met elk pakket ontvangt.",
    channelGroups: [
      {
        name: "Nederlandse tv-zenders",
        items: [
          "NPO 1, 2, 3 HD",
          "RTL 4, 5, 7, 8 HD",
          "SBS6, Veronica, Net5 HD",
          "ESPN 1-4 HD",
          "Ziggo Sport Select + Docu",
          "Discovery, TLC, Comedy Central",
        ],
      },
      {
        name: "Sport kanalen",
        items: [
          "Ziggo Sport Totaal",
          "ESPN Full Access",
          "Fox Sports (VS)",
          "DAZN 1-9",
          "Sky Sports (UK)",
          "BeIN Sports 1-13",
        ],
      },
      {
        name: "Films & series",
        items: [
          "HBO 1-4",
          "Paramount Network",
          "Universal Channel",
          "FOX Entertainment",
          "Sony Movies",
          "FilmBox Arthouse",
        ],
      },
      {
        name: "Internationale zenders",
        items: [
          "BBC One-Click",
          "CNN International",
          "Al Jazeera",
          "Deutsche Welle",
          "France 24",
          "ZDF Neo",
        ],
      },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Onze tarieven",
    title: "IPTV Abonnement: Kies uw IPTV-abonnement",
    subtitle:
      "Alle pakketten zijn volledig inclusief. Geen extra kosten voor sport, 4K of Nederlands zenderaanbod.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "Kosten & Vergelijken",
    title: "IPTV Abonnement: IPTV Amsterdam vs andere IPTV-abonnementen",
    subtitle:
      "Een objectieve vergelijking tussen onze dienst en andere aanbieders.",
    rows: [
      {
        feature: "Maandprijs (kortste looptijd)",
        us: "vanaf €12,99",
        them: "€14,99 - €29,99",
      },
      {
        feature: "Maandprijs (langste looptijd)",
        us: "vanaf €7,99",
        them: "€9,99 - €19,99",
      },
      {
        feature: "Gratis proefperiode",
        us: "Ja, 1 uur",
        them: "Nee / alleen betalend",
      },
      {
        feature: "Serverlocatie",
        us: "NL & BE eigen servers",
        them: "Gedeeld EU / buiten EU",
      },
      {
        feature: "Kanaalupdate-frequentie",
        us: "Dagelijks",
        them: "Wekelijks",
      },
      {
        feature: "Nederlandse klantenservice",
        us: "24/7 WhatsApp, telefoon",
        them: "Beperkt of Engels",
      },
      {
        feature: "Geld-terug-garantie",
        us: "Ja, onvoorwaardelijk",
        them: "Nee",
      },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Ervaringen",
    title: "IPTV Abonnement: Wat abonnees zeggen over hun IPTV-abonnement",
    subtitle: "IPTV Abonnement: Duizenden Nederlanders gingen u voor.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Veilig abonneren",
    title: "IPTV Abonnement: Zo zit uw IPTV-abonnement er veilig bij",
    subtitle:
      "Wij hanteren de strengste normen voor beveiliging en betrouwbaarheid.",
    items: [
      {
        title: "IPTV Abonnement: 99,9% server uptime",
        desc: "Onze servers draaien op een redundant netwerk met geautomatiseerde failover. Mocht een server uitvallen, dan wordt u binnen milliseconden omgeleid naar een backupserver.",
      },
      {
        title: "IPTV Abonnement: Veilige betalingen",
        desc: "Wij werken samen met Mollie en Stripe, twee van de veiligste betalingsverwerkers van Europa. Uw financiële gegevens verlaten nooit hun beveiligde omgeving.",
      },
      {
        title: "IPTV Abonnement: Geen tracking of profilering",
        desc: "Wij slaan geen kijkgeschiedenis op en delen geen gegevens met adverteerders. Uw privacy wordt volledig gerespecteerd.",
      },
      {
        title: "IPTV Abonnement: Naleving AVG-wetgeving",
        desc: "Als Nederlandse aanbieder voldoen wij aan de Algemene Verordening Gegevensbescherming. U heeft altijd inzage in en controle over uw gegevens.",
      },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen over een IPTV-abonnement",
    subtitle: "IPTV Abonnement: Antwoorden op de meest gestelde vragen.",
    faqs: [
      {
        question: "Wat is het beste IPTV-abonnement voor Nederlanders?",
        answer:
          "Het beste abonnement hangt af van uw kijkgedrag. Voor één tv is een 1-verbinding abonnement voldoende. Voor gezinnen adviseren wij 2 à 4 verbindingen zodat iedereen ongestoord op zijn eigen apparaat kan kijken. Alle abonnementen hebben hetzelfde zenderaanbod.",
      },
      {
        question: "Kan ik een IPTV-abonnement afsluiten zonder jaarcontract?",
        answer:
          "Ja, bij IPTV Amsterdam heeft u keuze uit flexibele looptijden: maandelijks opzegbaar, 3 maanden, 6 maanden of 12 maanden. Hoe langer u kiest, hoe lager de prijs per maand. Opzeggen kan altijd zonder boete.",
      },
      {
        question: "Wat kost een IPTV-abonnement per maand in 2026?",
        answer:
          "Een IPTV-abonnement kost tussen €7,99 en €12,99 per maand, afhankelijk van de gekozen looptijd. Dit is inclusief alle zenders, sportkanalen en de VOD-bibliotheek. Geen verborgen kosten voor 4K of extra apparaten.",
      },
      {
        question:
          "Inclusief sport: wat voor sportzenders zitten er in het IPTV-abonnement?",
        answer:
          "Ja, sport is volledig inbegrepen. U ontvangt ESPN 1-4, Ziggo Sport Totaal, alle Eredivisie-wedstrijden, Champions League, Formule 1, MotoGP, NBA, NFL, UFC en internationale sportzenders zoals Sky Sports en DAZN.",
      },
      {
        question: "Hoe zeg ik mijn IPTV-abonnement op?",
        answer:
          "Opzeggen is eenvoudig. Stuur een bericht via WhatsApp of mail naar ons supportteam. Uw abonnement wordt per direct beëindigd en u ontvangt geen verdere kosten. Geen opzegtermijn of boete. U kijkt tot het einde van de betaalde periode.",
      },
      {
        question:
          "Kan ik meerdere IPTV-abonnementen op één apparaat gebruiken?",
        answer:
          "Ja, de meeste IPTV-apps ondersteunen meerdere afspeellijsten. U kunt eenvoudig schakelen tussen verschillende M3U-links of Xtream Codes. Handig als u bijvoorbeeld een apart abonnement voor een vakantiehuis heeft.",
      },
      {
        question: "Wat is het verschil tussen 1, 2, 3 of 4 verbindingen?",
        answer:
          "Het aantal verbindingen bepaalt hoeveel apparaten tegelijk kunnen streamen. Met 1 verbinding kijkt u op één scherm. Met 4 verbindingen kunnen vier verschillende apparaten onafhankelijk van elkaar naar verschillende zenders kijken.",
      },
      {
        question: "Krijg ik een bewijs van aankoop voor mijn IPTV-abonnement?",
        answer:
          "Ja, u ontvangt een betaalbevestiging per e-mail met daarop de details van uw aankoop, de gekozen looptijd en de ingangsdatum. Dit dient tevens als garantiebewijs.",
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Ontdek verder",
    title: "IPTV Abonnement: Alles over IPTV en abonnementen",
    subtitle:
      "Verdiep u in andere pagina's voor een compleet beeld van onze dienst.",
    links: [
      LINK.home,
      LINK.kopen,
      LINK.aanbieder,
      LINK.nederland,
      LINK.smarters,
    ],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "IPTV Abonnement: Kies nu het IPTV-abonnement dat bij u past",
    description:
      "Start vandaag nog met het beste IPTV-abonnement van Nederland. Ontvang direct toegang tot alle kanalen, sport en films — zonder jaarcontract.",
  },
};

export default abonnement;
