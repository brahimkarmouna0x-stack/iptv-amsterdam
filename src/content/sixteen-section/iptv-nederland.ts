import type { SixteenSectionContent } from "./types";

const LINK = {
  home: { label: "IPTV Amsterdam Home", href: "/", description: "De beste IPTV-dienst van Nederland met 31.000+ kanalen en 4K." },
  kopen: { label: "IPTV Kopen", href: "/iptv-kopen", description: "Veilig IPTV kopen met directe activering en gratis proef." },
  abonnement: { label: "IPTV Abonnement", href: "/iptv-abonnement", description: "Vergelijk IPTV-abonnementen met flexibele looptijden." },
  aanbieder: { label: "IPTV Aanbieder", href: "/iptv-aanbieder", description: "Vergelijk IPTV aanbieders en ontdek de beste keuze." },
  smarters: { label: "IPTV Smarters Pro", href: "/iptv-smarters-pro", description: "IPTV Smarters Pro installatiegids voor al uw apparaten." },
};

const nederland: SixteenSectionContent = {
  slug: "iptv-nederland",
  path: "/iptv-nederland",
  meta: {
    title: "IPTV Nederland ✓ Complete Gids voor Nederlandse Zenders & Sport 2026",
    description: "IPTV Nederland: alle Nederlandse zenders, live Eredivisie, Champions League, Formule 1 en 4K-sport. Beste IPTV voor Nederlanders met 31.000+ kanalen. Probeer gratis.",
    h1: "IPTV Nederland – de ultieme gids voor Nederlandse kijkers",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Nederland · 100% Nederlands aanbod",
    title: "IPTV Nederland: het beste van Nederlandse tv, sport en films",
    subtitle: "Bent u op zoek naar IPTV met volledig Nederlands zenderaanbod, Eredivisie en alle Nederlandse sportkanalen? Bij IPTV Amsterdam ontvangt u alle Nederlandse zenders in 4K.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Bekijk het Nederlandse aanbod",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Gratis proef starten",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "Nederlandse zenders", value: "200+" },
      { label: "Nederlands supportteam", value: "24/7" },
      { label: "Serverlocatie", value: "Nederland" },
      { label: "Televreden NL'ers", value: "10.000+" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Het gemis",
    title: "Waarom Nederlandse kijkers ontevreden zijn met hun huidige tv",
    subtitle: "U woont in Nederland en wilt gewoon Nederlandse tv kijken. Maar uw huidige provider maakt het duur en ingewikkeld.",
    pains: [
      { title: "IPTV Nederland: Nederlandse zenders maar beperkt beschikbaar", desc: "Buitenlandse IPTV-aanbieders hebben vaak geen of slechte Nederlandse zenders. NPO, RTL en SBS zijn niet of in lage kwaliteit beschikbaar." },
      { title: "IPTV Nederland: Eredivisie en Champions League duur", desc: "Via de traditionele weg betaalt u tientallen euro's extra voor sportkanalen zoals ESPN en Ziggo Sport. Een duur themapakket bovenop uw basisabonnement." },
      { title: "IPTV Nederland: Nederlandstalige support ontbreekt", desc: "Bij problemen moet u uw Engels bovenhalen of wachten op een moeizame e-mailwisseling. Geen Nederlandse helpdesk die u snel en goed begrijpt." },
      { title: "IPTV Nederland: Geen regionale omroepen in het buitenland", desc: "Woont u tijdelijk in het buitenland, dan kunt u vaak geen Nederlandse zenders ontvangen. Geen Omroep Brabant, RTV Utrecht of L1." },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "De oplossing voor Nederlandse kijkers",
    title: "IPTV Nederland bij IPTV Amsterdam — alle Nederlandse kanalen op één plek",
    subtitle: "Speciaal voor Nederlandse kijkers. Ontvang alle publieke, commerciële en regionale zenders zonder gedoe.",
    points: [
      { title: "IPTV Nederland: NPO, RTL, SBS, ESPN — alles compleet", desc: "Volledig Nederlands zenderpakket: NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, Net5, ESPN 1-4, Ziggo Sport, Discovery, National Geographic en alle regionale omroepen." },
      { title: "IPTV Nederland: Eredivisie en Champions League in 4K", desc: "Iedere Eredivisie-wedstrijd, Champions League, Europa League, Formule 1, MotoGP en NBA — allemaal inbegrepen in uw abonnement. Geen extra sportpakketten." },
      { title: "IPTV Nederland: Nederlandse support van echte Nederlanders", desc: "Ons team spreekt Nederlands, woont in Nederland en begrijpt uw vragen. Bereikbaar via WhatsApp met een reactietijd van maximaal 5 minuten." },
      { title: "IPTV Nederland: Overal ter wereld Nederlandse tv", desc: "Op vakantie of wonend in het buitenland? Met IPTV Nederland ontvangt u overal ter wereld alle Nederlandse zenders. Alleen een internetverbinding nodig." },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Nederlands aanbod in detail",
    title: "IPTV Nederland: Speciale functies voor Nederlandse IPTV-gebruikers",
    subtitle: "Onze dienst is speciaal ontworpen met het oog op de Nederlandse kijker.",
    features: [
      { title: "IPTV Nederland: Volledige Nederlandse programmagids (EPG)", desc: "Nederlandstalige elektronische programmagids met alle uitzendtijden, beschrijvingen en genre-indeling. Weten wat er op NPO 3 speelt? Het staat in de gids." },
      { title: "IPTV Nederland: Dutch Catch-up TV", desc: "Gemiste aflevering van RTL Boulevard of EenVandaag? Met catch-up tv kijkt u programma's tot 7 dagen terug. Speciaal voor Nederlandse zenders." },
      { title: "IPTV Nederland: Nederlandse ondertiteling", desc: "Al onze VOD-content en geselecteerde live zenders bieden Nederlandse ondertiteling. Films, series en documentaires met NL-ondertiteling." },
      { title: "IPTV Nederland: 4K Nederlandse sportstreams", desc: "Eredivisie, Champions League, Formule 1 en het Nederlands elftal in Ultra HD. Speciaal geoptimaliseerd voor Nederlandse sportliefhebbers." },
      { title: "IPTV Nederland: Regionale omroepen compleet", desc: "Alle 13 regionale omroepen: Omroep Brabant, RTV Oost, Omroep Gelderland, RTV Noord, Omrop Fryslân, L1, RTV Rijnmond, Omroep West, NH Nieuws, Omroep Zeeland en meer." },
      { title: "IPTV Nederland: Nederlandse themakanalen", desc: "Speciale Nederlandse themakanalen zoals RTL 8, SBS9, Spike, Dog TV, 24Kitchen, en meer. Ontdek nieuwe favoriete Nederlandse zenders." },
    ],
  },

  // ── Section 6: Why Us ────────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Waarom voor ons kiezen?",
    title: "Daarom is IPTV Amsterdam de beste keuze voor IPTV in Nederland",
    subtitle: "Onze dienst is speciaal geoptimaliseerd voor de Nederlandse markt.",
    reasons: [
      { title: "IPTV Nederland: Nederlandse servers voor Nederlandse kijkers", desc: "Onze servers staan in Amsterdam en België. Hierdoor is de verbinding razendsnel, starten zenders direct en is buffering verleden tijd. Inclusief optimale ondersteuning van Nederlandse providers." },
      { title: "IPTV Nederland: Alles in het Nederlands", desc: "Nederlandstalige website, Nederlandstalige support, Nederlandstalige programmagids. Geen vertalingen of internationale rompslomp. Wij spreken uw taal." },
      { title: "IPTV Nederland: Bekend met Nederlandse tv-cultuur", desc: "Wij weten wat Nederlandse kijkers belangrijk vinden: Eredivisie, Sinterklaasjournaal, Opsporing Verzocht, DWDD, Boer Zoekt Vrouw en Koningsdag — allemaal in topkwaliteit." },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Aan de slag",
    title: "IPTV Nederland: Zo kijkt u in 3 stappen IPTV in Nederland",
    subtitle: "Van registratie tot streamen van uw favoriete Nederlandse zenders.",
    steps: [
      { step: "01", title: "IPTV Nederland: Kies een Nederlands IPTV-pakket", desc: "Selecteer het aantal verbindingen en de gewenste looptijd. Alle pakketten bevatten het volledige Nederlandse zenderaanbod en alle sportzonder meerprijs." },
      { step: "02", title: "IPTV Nederland: Installeer op uw apparaat", desc: "Download IPTV Smarters Pro, TiviMate of VLC op uw televisie, telefoon of tablet. Voer uw M3U-link of Xtream Codes in en de Nederlandse zenders verschijnen." },
      { step: "03", title: "IPTV Nederland: Kijk Nederlandse tv in 4K", desc: "Zap direct naar NPO 1, RTL 4, ESPN of uw regionale omroep. Geniet van haarscherpe beeldkwaliteit en vloeiende streams — waar u ook bent." },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Nederlandse apparaten",
    title: "IPTV Nederland: Werkt op alle apparaten die Nederlanders gebruiken",
    subtitle: "Onze dienst is getest en geoptimaliseerd voor de populairste apparaten in Nederlandse huishoudens.",
    deviceGroups: [
      { name: "Populaire Smart TV's in NL", items: ["Samsung (marktleider NL)", "LG OLED tv's", "Philips Ambilight TV", "Sony Bravia", "Panasonic", "Hisense"] },
      { name: "Meest gebruikt in Nederland", items: ["KPN Ziggo Mediabox Next", "Amazon Fire TV Stick", "Google Chromecast", "Apple TV 4K", "Nvidia Shield", "Formuler Z11"] },
      { name: "Mobiel in NL", items: ["Samsung Galaxy S-serie", "iPhone meest gebruikt", "OnePlus", "Motorola", "Fairphone", "iPad meest gebruikt"] },
      { name: "IPTV apps voor NL-markt", items: ["IPTV Smarters Pro", "TiviMate", "VLC Media Player", "Kodi", "GSE Smart IPTV", "IPTX"] },
    ],
    ctaText: "Installatiegidsen voor elk apparaat",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Het Nederlandse aanbod",
    title: "IPTV Nederland: Het complete Nederlandse kanaalaanbod",
    subtitle: "IPTV Nederland: Alle Nederlandse zenders die u verwacht — en meer.",
    channelGroups: [
      { name: "Publieke omroep", items: ["NPO 1 HD", "NPO 2 HD", "NPO 3 HD", "NPO Politiek", "NPO Zapp", "NPO Extra", "BVN"] },
      { name: "Commerciële zenders", items: ["RTL 4 HD", "RTL 5 HD", "RTL 7 HD", "RTL 8 HD", "SBS6 HD", "Veronica HD", "Net5 HD", "SBS9"] },
      { name: "Live sport", items: ["ESPN 1 HD", "ESPN 2 HD", "ESPN 3 HD", "ESPN 4 HD", "Ziggo Sport Select", "Ziggo Sport Docu", "Ziggo Sport Golf", "FOX Sports"] },
      { name: "Regionaal & thema", items: ["Omroep Brabant", "RTV Oost", "L1", "NH Nieuws", "Omroep West", "24Kitchen", "MTV", "Comedy Central"] },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Nederlandse tarieven",
    title: "IPTV Nederland — kies uw pakket",
    subtitle: "Bekijk de prijzen. Alle Nederlandse zenders, sport en films inbegrepen. Geen verborgen kosten.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "Nederlands aanbod vergeleken",
    title: "IPTV Amsterdam vs traditionele Nederlandse tv-aanbieders",
    subtitle: "Ziggo, KPN en T-Mobile vs IPTV Amsterdam — de verschillen zijn groot.",
    rows: [
      { feature: "Maandprijs basis", us: "Vanaf €7,99/maand", them: "€55 - €80/maand" },
      { feature: "Nederlandse zenders", us: "200+ in HD/4K", them: "50-60 in HD" },
      { feature: "Eredivisie & CL", us: "Inbegrepen", them: "Extra sportpakket €15-30" },
      { feature: "4K beeldkwaliteit", us: "Standaard", them: "Beperkt HD" },
      { feature: "Regionale omroepen", us: "Alle 13", them: "Alleen digitale TV" },
      { feature: "Kanaalwissel snelheid", us: "<1 seconde", them: "1-3 seconden" },
      { feature: "Opzegtermijn", us: "Geen", them: "1 maand + boete" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Nederlandse ervaringen",
    title: "Wat Nederlanders zeggen over IPTV Nederland",
    subtitle: "Duizenden Nederlandse kijkers deelden hun ervaring.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Nederlandse veiligheid",
    title: "IPTV Nederland: Zo zit IPTV in Nederland veilig bij ons",
    subtitle: "Wij voldoen aan de hoogste Nederlandse en Europese veiligheidsnormen.",
    items: [
      { title: "IPTV Nederland: Nederlandse privacywet (AVG)", desc: "Wij voldoen aan de Algemene Verordening Gegevensbescherming. Uw persoonsgegevens worden verwerkt volgens Nederlandse en Europese regelgeving." },
      { title: "IPTV Nederland: Nederlandse serverlocatie", desc: "Onze servers staan fysiek in Amsterdam. Dit betekent dat uw data binnen Nederland blijft en onder Nederlands recht valt. Maximale privacy en controle." },
      { title: "IPTV Nederland: Nederlandse betaalprovider", desc: "Wij werken samen met Mollie en iDEAL — beide Nederlands. U betaalt veilig via uw eigen bankomgeving, precies zoals u gewend bent in Nederland." },
      { title: "IPTV Nederland: Klachtenservice volgens NL-normen", desc: "Bij klachten hanteren wij dezelfde procedure als Nederlandse telecomproviders. Duidelijke afhandeling, vaste contactpersonen en escalatiemogelijkheden." },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen over IPTV in Nederland",
    subtitle: "IPTV Nederland: Dit vragen Nederlandse kijkers het vaakst.",
    faqs: [
      {
        question: "Wat is IPTV in Nederland precies?",
        answer: "IPTV (Internet Protocol Television) is televisie via uw internetverbinding in plaats van via de kabel of satelliet. U streamt live tv, sport en films direct naar uw apparaat. Voor IPTV in Nederland heeft u alleen een internetabonnement en een geschikt apparaat nodig."
      },
      {
        question: "Welke Nederlandse zenders kan ik ontvangen met IPTV?",
        answer: "Met IPTV Amsterdam ontvangt u alle Nederlandse zenders: NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, Net5, ESPN 1-4, Ziggo Sport, Discovery, National Geographic, Comedy Central, MTV en alle 13 regionale omroepen in HD en 4K."
      },
      {
        question: "Kan ik de Eredivisie en Champions League kijken met IPTV?",
        answer: "Ja, alle Eredivisie-wedstrijden en de Champions League zijn inbegrepen in uw abonnement. U ontvangt ESPN 1-4 en Ziggo Sport Totaal zonder extra kosten. Ook de Formule 1, MotoGP, NBA en vele andere sporten zijn beschikbaar in 4K."
      },
      {
        question: "Is IPTV in Nederland legaal?",
        answer: "Ja, het gebruik van IPTV is legaal in Nederland. Het is een technologie om televisie te leveren via internet. De legaliteit hangt af van of de aanbieder de juiste rechten heeft. IPTV Amsterdam werkt alleen met officiële contentlicenties."
      },
      {
        question: "Heb ik een speciale internetverbinding nodig voor IPTV?",
        answer: "Een standaard Nederlands internetabonnement met minimaal 25 Mbps is voldoende voor HD-streams. Voor 4K-streams adviseren wij 50 Mbps of hoger. De meeste Nederlandse huishoudens hebben ruim voldoende snelheid. Onze adaptieve bitrate past zich aan uw verbinding aan."
      },
      {
        question: "Werkt IPTV Nederland ook in het buitenland?",
        answer: "Ja, u kunt overal ter wereld naar Nederlandse zenders kijken zolang u een internetverbinding heeft. Ideaal voor vakantie of als u in het buitenland woont. Ook de Nederlandse sportkanalen en regionale omroepen zijn wereldwijd beschikbaar."
      },
      {
        question: "Hoe installeer ik IPTV op mijn Samsung of LG TV?",
        answer: "Op Samsung en LG Smart TV's installeert u eenvoudig de IPTV Smarters Pro app via de app store. Na installatie voert u uw M3U-link en Xtream Codes in. Uw Nederlandse zenders worden automatisch geladen inclusief programmagids. Stap-voor-stap handleidingen zijn beschikbaar."
      },
      {
        question: "Kan ik Nederlandse tv kijken zonder schotel of kabel?",
        answer: "Ja, dat is precies wat IPTV Nederland mogelijk maakt. U heeft geen schotel, kabelaansluiting of coaxkabel nodig. Alleen een internetverbinding en een geschikt apparaat. Dit bespaart installatiekosten en maakt televisie kijken overal mogelijk."
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Ontdek meer over IPTV",
    title: "IPTV Nederland: Verdiep u in onze andere Nederlandse pagina's",
    subtitle: "Lees alles over IPTV, speciaal voor Nederlandse kijkers.",
    links: [LINK.home, LINK.kopen, LINK.abonnement, LINK.aanbieder, LINK.smarters],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Kijk Nederlandse tv zoals het hoort — in 4K en zonder gedoe",
    description: "Sluit u aan bij duizenden Nederlandse kijkers. Alle zenders, alle sport, alles inbegrepen. Geen jaarcontract, geen verborgen kosten.",
  },
};

export default nederland;
