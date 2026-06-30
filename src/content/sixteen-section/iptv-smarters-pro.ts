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
    description:
      "Direct IPTV kopen met veilige betaling en directe activering.",
  },
  abonnement: {
    label: "IPTV Abonnement",
    href: "/iptv-abonnement",
    description: "Vergelijk IPTV-abonnementen met flexibele looptijden.",
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
};

const smartersPro: SixteenSectionContent = {
  slug: "iptv-smarters-pro",
  path: "/iptv-smarters-pro",
  meta: {
    title: "IPTV Smarters Pro ✓ Installatie & Setup Gids 2026",
    description:
      "IPTV Smarters Pro installatiegids voor Smart TV, Fire TV Stick, Android en iOS. Ontvang uw M3U-links en Xtream Codes voor directe activering.",
    h1: "IPTV Smarters Pro – installatiegids en setup voor elk apparaat",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Smarters Pro · Stap-voor-stap",
    title: "IPTV Smarters Pro installeren in enkele minuten",
    subtitle:
      "Volg onze duidelijke handleiding om IPTV Smarters Pro te installeren op uw Smart TV, Fire TV Stick, telefoon of tablet. Inclusief M3U en Xtream Codes uitleg.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Installatiegids bekijken",
    ctaPrimaryHref: "#installatie",
    ctaSecondary: "M3U & Xtream Codes",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "apparaathandleidingen", value: "10+" },
      { label: "app-rating", value: "4,5/5" },
      { label: "activeringen per dag", value: "100+" },
      { label: "NL helderheid", value: "24/7" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Herkenbare problemen",
    title: "Waarom IPTV Smarters Pro installatie soms mislukt",
    subtitle:
      "Veel gebruikers lopen vast bij het instellen van IPTV Smarters Pro. Dit zijn de meest voorkomende obstakels.",
    pains: [
      {
        title: "IPTV Smarters Pro: Apparaat werkt niet met de app",
        desc: "Niet alle apparaten ondersteunen IPTV Smarters Pro. Of de app is beschikbaar maar werkt niet correct door verouderde firmware of ontbrekende codecs.",
      },
      {
        title: "IPTV Smarters Pro: M3U-link of Xtream Codes werken niet",
        desc: "De ontvangen gegevens worden verkeerd ingevoerd, bevatten een typfout of de aanbieder heeft onduidelijke instructies gegeven. Het resultaat: een zwart scherm.",
      },
      {
        title: "IPTV Smarters Pro: EPG (programmagids) laadt niet",
        desc: "Zonder werkende elektronische programmagids mist u essentiële functies. U ziet alleen kanaalnummers zonder programmainformatie.",
      },
      {
        title: "IPTV Smarters Pro: Geen Nederlandstalige installatiehulp",
        desc: "Bij problemen staat u er alleen voor. YouTube video's zijn in het Engels of verouderd. Nederlandse stap-voor-stap handleidingen ontbreken.",
      },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "Onze aanpak",
    title: "Zo installeert u IPTV Smarters Pro foutloos",
    subtitle:
      "Met deze gestructureerde aanpak werkt IPTV Smarters Pro binnen 5 minuten op elk apparaat.",
    points: [
      {
        title: "IPTV Smarters Pro: Kies de juiste app-versie per apparaat",
        desc: "IPTV Smarters Pro is beschikbaar voor Smart TV (Samsung, LG, Android TV), Fire TV Stick, iOS en Android. Download altijd de officiële versie uit de app store van uw apparaat.",
      },
      {
        title: "IPTV Smarters Pro: Voer uw gegevens correct in",
        desc: "U ontvangt van ons een M3U-link en Xtream Codes. Kopieer deze exact — hoofdlettergevoelig — en plak ze in de app. Wij leveren duidelijke voorbeelden.",
      },
      {
        title: "IPTV Smarters Pro: Activeer de EPG-gids",
        desc: "Na het invoeren van uw gegevens laadt de app automatisch de programmagids. Controleer of u de EPG-URL correct heeft ingevoerd voor volledige programmainformatie.",
      },
      {
        title: "IPTV Smarters Pro: Nederlandse hulp bij elke stap",
        desc: "Ons supportteam helpt u via WhatsApp met elke stap van de installatie. Stuur een foto van het probleem en wij lossen het binnen 5 minuten op.",
      },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "App-functies",
    title: "Waarom IPTV Smarters Pro de beste IPTV-app is",
    subtitle:
      "Ontdek de functies die IPTV Smarters Pro tot de populairste IPTV-applicatie maken.",
    features: [
      {
        title: "IPTV Smarters Pro: Gebruiksvriendelijke interface",
        desc: "Een overzichtelijke en intuïtieve interface die direct duidelijk maakt hoe u zenders, films en de programmagids gebruikt. Geschikt voor alle leeftijden.",
      },
      {
        title: "IPTV Smarters Pro: Ondersteuning voor M3U en Xtream Codes",
        desc: "Twee manieren om uw IPTV-abonnement te koppelen. M3U voor eenvoudige afspeellijsten, Xtream Codes voor geavanceerdere functionaliteit zoals EPG en VOD.",
      },
      {
        title: "IPTV Smarters Pro: Volledige EPG-integratie",
        desc: "Een complete programmagids met programmanamen, beschrijvingen, tijden en genre-indeling. Zoekt, filtert en ontdekt nieuwe programma's.",
      },
      {
        title: "IPTV Smarters Pro: Multi-screen ondersteuning",
        desc: "Bekijk live tv en films op meerdere schermen tegelijk. Ideaal voor gezinnen waarbij iedereen zijn eigen programma wil kijken op een eigen apparaat.",
      },
      {
        title: "IPTV Smarters Pro: Catch-up en timeshift",
        desc: "Kijk gemiste programma's terug met catch-up tv. Pauzeer en spoel live televisie met timeshift. Ook beschikbaar voor Nederlandse zenders.",
      },
      {
        title: "IPTV Smarters Pro: Favorieten en ouderlijk toezicht",
        desc: "Maak een eigen favorietenlijst met uw meest bekeken zenders. Stel ouderlijk toezicht in voor specifieke kanalen of inhoud.",
      },
    ],
  },

  // ── Section 6: Why Us ───────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Waarom wij",
    title: "Daarom werken wij het beste samen met IPTV Smarters Pro",
    subtitle: "Onze dienst is volledig geoptimaliseerd voor IPTV Smarters Pro.",
    reasons: [
      {
        title: "IPTV Smarters Pro: Vooraf geteste M3U & Xtream Codes",
        desc: "Wij testen elke M3U-link en Xtream Code voordat u deze ontvangt. Garantie dat het direct werkt in IPTV Smarters Pro op elk apparaat.",
      },
      {
        title: "IPTV Smarters Pro: Nederlandse installatiehandleidingen",
        desc: "Geen Engelse YouTube video's of verouderde forums. Wij bieden actuele, Nederlandstalige stap-voor-stap handleidingen met screenshots per apparaat.",
      },
      {
        title: "IPTV Smarters Pro: 24/7 WhatsApp hulp bij installatie",
        desc: "Lukt het niet? Stuur een berichtje en ons team helpt u op afstand met de installatie van IPTV Smarters Pro. Binnen 5 minuten reactie.",
      },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Installatie in 3 stappen",
    title: "Zo installeert u IPTV Smarters Pro met IPTV Amsterdam",
    subtitle:
      "Volg deze 3 stappen en u kijkt binnen 5 minuten naar duizenden kanalen.",
    steps: [
      {
        step: "01",
        title: "Download IPTV Smarters Pro",
        desc: "Ga naar de app store van uw apparaat (Samsung Smart Hub, LG Content Store, Google Play, Apple App Store of Amazon Appstore) en installeer de officiële IPTV Smarters Pro app.",
      },
      {
        step: "02",
        title: "IPTV Smarters Pro: Voer uw login-gegevens in",
        desc: "Open de app en kies voor 'Login with Xtream Codes' of 'Load Your Playlist via M3U URL'. Voer de door ons verstrekte gegevens exact in zoals ontvangen via e-mail of WhatsApp.",
      },
      {
        step: "03",
        title: "IPTV Smarters Pro: Begin met streamen",
        desc: "Na het laden van de afspeellijst verschijnen alle zenders, de EPG en de VOD-bibliotheek. Kies een zender en begin direct met kijken in 4K-kwaliteit.",
      },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Ondersteunde apparaten",
    title: "Op deze apparaten werkt IPTV Smarters Pro het beste",
    subtitle:
      "IPTV Smarters Pro is beschikbaar voor de meeste moderne apparaten.",
    deviceGroups: [
      {
        name: "Smart TV",
        items: [
          "Samsung Smart TV (2017+)",
          "LG webOS (2018+)",
          "Android TV (Sony, Philips, TCL)",
          "Hisense VIDAA",
          "Panasonic",
        ],
      },
      {
        name: "Amsterdamapparaten",
        items: [
          "Amazon Fire TV Stick 4K Max",
          "Google Chromecast with Google TV",
          "Nvidia Shield TV Pro",
          "Formuler Z11",
          "Dune HD",
          "MAG 524",
        ],
      },
      {
        name: "Mobiele apparaten",
        items: [
          "iPhone 12-16 (iOS 15+)",
          "iPad Pro/Air/Mini (iPadOS)",
          "Samsung Galaxy S23-25",
          "Google Pixel 7-9",
          "OnePlus 12/13",
          "Xiaomi 14T",
        ],
      },
      {
        name: "Andere platforms",
        items: [
          "Windows PC (via BlueStacks)",
          "Mac (via Android emulator)",
          "Linux (via Android emulator)",
          "IPTV Smarters PC Edition",
        ],
      },
    ],
    ctaText: "Bekijk volledige installatiegids per apparaat",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Zenders in de app",
    title: "Deze zenders bekijkt u via IPTV Smarters Pro",
    subtitle:
      "Een greep uit het aanbod dat in de app verschijnt na het invoeren van uw gegevens.",
    channelGroups: [
      {
        name: "Nederlands aanbod",
        items: [
          "NPO 1 HD",
          "RTL 4 HD",
          "SBS6 HD",
          "ESPN HD",
          "Ziggo Sport HD",
          "Veronica HD",
          "Discovery HD",
          "Comedy Central HD",
        ],
      },
      {
        name: "Films & Series (VOD)",
        items: [
          "Nieuwste bioscoopfilms",
          "Netflix-stijl originals",
          "Complete series",
          "IMDb top 250",
          "Documentaires",
          "Kinderprogramma's",
        ],
      },
      {
        name: "Internationale sport",
        items: [
          "Sky Sports UK",
          "DAZN",
          "ESPN USA",
          "FOX Sports",
          "Eleven Sports",
          "SuperSport",
          "Optus Sport",
        ],
      },
      {
        name: "Nieuws & informatie",
        items: [
          "CNN US/International",
          "BBC World News",
          "Sky News",
          "France 24",
          "Euronews",
          "Al Jazeera",
        ],
      },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Abonnementen",
    title: "Start met IPTV Smarters Pro",
    subtitle:
      "Kies een abonnement en ontvang direct uw M3U-link en Xtream Codes voor IPTV Smarters Pro.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "M3U Instellen",
    title: "IPTV Smarters Pro vs andere IPTV-apps",
    subtitle:
      "Waarom IPTV Smarters Pro de beste keuze is voor uw IPTV-abonnement.",
    rows: [
      {
        feature: "Gebruiksgemak",
        us: "Zeer eenvoudig",
        them: "Gemiddeld tot moeilijk",
      },
      {
        feature: "Ondersteunde apparaten",
        us: "Smart TV, Fire Stick, iOS, Android",
        them: "Beperkt tot 1-2 platformen",
      },
      { feature: "M3U-ondersteuning", us: "Ja, volledig", them: "Wisselend" },
      { feature: "Xtream Codes API", us: "Ja", them: "Niet altijd" },
      {
        feature: "EPG-integratie",
        us: "Volledig automatisch",
        them: "Handmatig of niet",
      },
      { feature: "VOD-ondersteuning", us: "Ja, met zoeken", them: "Beperkt" },
      {
        feature: "Multi-screen",
        us: "Ja, onbeperkt",
        them: "Beperkt tot 1 scherm",
      },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Reviews",
    title: "Wat gebruikers zeggen over IPTV Smarters Pro + IPTV Amsterdam",
    subtitle: "Duizenden gebruikers installeren de app met onze hulp.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Ondersteuning",
    title: "Veilig gebruik van IPTV Smarters Pro",
    subtitle: "Wij zorgen dat uw gegevens en apparaten veilig blijven.",
    items: [
      {
        title: "IPTV Smarters Pro: Officiële app, geen APK's",
        desc: "Download IPTV Smarters Pro altijd uit de officiële app store van uw apparaat. Vermijd APK-bestanden van onbekende bronnen die malware kunnen bevatten.",
      },
      {
        title: "IPTV Smarters Pro: Beveiligde M3U-links",
        desc: "Uw persoonlijke M3U-link is uniek en mag niet worden gedeeld. Bij verdachte activiteit kunt u een nieuwe link aanvragen via ons supportteam.",
      },
      {
        title: "IPTV Smarters Pro: Geen opgeslagen wachtwoorden",
        desc: "Uw login-gegevens worden alleen lokaal op uw apparaat opgeslagen. Wij slaan geen wachtwoorden op en delen geen gegevens met derden.",
      },
      {
        title: "IPTV Smarters Pro: Automatische app-updates",
        desc: "Houd IPTV Smarters Pro up-to-date voor de beste beveiliging en nieuwste functies. Updates worden automatisch geïnstalleerd via de app store.",
      },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen over IPTV Smarters Pro",
    subtitle:
      "Antwoorden op de meest gestelde vragen over installatie en gebruik.",
    faqs: [
      {
        question: "Wat is IPTV Smarters Pro precies?",
        answer:
          "IPTV Smarters Pro is een populaire applicatie waarmee u IPTV kunt kijken op verschillende apparaten. De app ondersteunt M3U-afspeellijsten en Xtream Codes API. Hij is beschikbaar voor Smart TV's, Fire TV Stick, iOS, Android en andere platformen.",
      },
      {
        question:
          "Hoe installeer ik IPTV Smarters Pro op mijn Samsung Smart TV?",
        answer:
          "Ga naar de Samsung Smart Hub, zoek naar 'IPTV Smarters Pro' in de app store en installeer de app. Open de app, kies voor 'Login with Xtream Codes' en voer uw gegevens in. Uw zenders worden automatisch geladen met programmagids.",
      },
      {
        question: "Wat is het verschil tussen M3U en Xtream Codes?",
        answer:
          "M3U is een afspeellijst-link met al uw kanalen. U plakt de URL in de app en de kanalen worden geladen. Xtream Codes is een API-methode waarbij u gebruikersnaam, wachtwoord en server-URL invoert voor een completere ervaring met EPG en VOD.",
      },
      {
        question: "Waarom werkt IPTV Smarters Pro niet op mijn apparaat?",
        answer:
          "Dit kan komen door een verouderde firmware, onvoldoende geheugen of een incompatibele OS-versie. Controleer of uw apparaat minimaal Android 7.0 of iOS 14 ondersteunt. Voor Smart TV's moet de app beschikbaar zijn in de officiële app store.",
      },
      {
        question: "Hoe voeg ik mijn IPTV-abonnement toe aan IPTV Smarters Pro?",
        answer:
          "Open de app, klik op 'Login' en kies voor 'Xtream Codes API' of 'M3U URL'. Voer uw gegevens in (server-URL, gebruikersnaam, wachtwoord of M3U-link). Na het laden verschijnt uw volledige kanaallijst met EPG en VOD.",
      },
      {
        question:
          "Hoe krijg ik de EPG-programmagids aan het werk in IPTV Smarters Pro?",
        answer:
          "De EPG wordt automatisch geladen nadat u uw Xtream Codes of M3U-link heeft ingevoerd. Als de gids niet verschijnt, controleer dan of de EPG-URL correct is. Bij IPTV Amsterdam ontvangt u de juiste EPG-URL als onderdeel van uw setup.",
      },
      {
        question:
          "Kan ik IPTV Smarters Pro op meerdere apparaten tegelijk gebruiken?",
        answer:
          "Ja, u kunt IPTV Smarters Pro installeren op al uw apparaten. Afhankelijk van uw abonnement kunt u tegelijk streamen op 1, 2, 3 of 4 apparaten. De app synchroniseert uw favorieten niet tussen apparaten.",
      },
      {
        question: "Wat moet ik doen als IPTV Smarters Pro blijft bufferen?",
        answer:
          "Controleer eerst uw internetverbinding (minimaal 25 Mbps voor HD, 50 Mbps voor 4K). Sluit andere bandbreedte-intensieve applicaties. Schakel in de app-instellingen 'Hardware Decoding' in. Als het probleem aanhoudt, neem dan contact op met ons supportteam.",
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Meer IPTV-hulppagina's",
    title: "IPTV Smarters Pro: Ontdek meer over IPTV en onze diensten",
    subtitle:
      "Bekijk onze andere pagina's voor een compleet beeld van ons aanbod.",
    links: [
      LINK.home,
      LINK.kopen,
      LINK.abonnement,
      LINK.aanbieder,
      LINK.nederland,
    ],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Klaar om IPTV Smarters Pro te installeren?",
    description:
      "Kies een abonnement, ontvang direct uw M3U-link en Xtream Codes, en stream binnen 5 minuten duizenden kanalen op uw favoriete apparaat.",
  },
};

export default smartersPro;
