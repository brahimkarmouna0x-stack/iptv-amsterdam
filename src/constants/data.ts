import { Link } from ".";
import {
  getIptvGermanPath,
  IPTV_GERMAN_PAGES,
} from "@/content/iptv-german-pages";

export const NAV_LINKS: Link[] = [
  {
    label: "IPTV Amsterdam",
    href: "/",
  },
  {
    label: "Prijzen",
    href: "#prijzen",
  },
  {
    label: "IPTV Kopen",
    href: "/iptv-kopen",
  },
  {
    label: "IPTV Abonnement",
    href: "/iptv-abonnement",
  },
  {
    label: "IPTV Aanbieder",
    href: "/iptv-aanbieder",
  },
  {
    label: "IPTV Nederland",
    href: "/iptv-nederland",
  },
  {
    label: "IPTV Smarters Pro",
    href: "/iptv-smarters-pro",
  },
  {
    label: "Contact",
    href: "/support/contact",
  },
];
export const productsFooterLinks: Link[] = [
  {
    label: "Voordelen",
    href: "/#voordelen",
  },
  {
    label: "Prijzen",
    href: "/#prijzen",
  },
  {
    label: "Kanalen",
    href: "/#kanalen",
  },
  {
    label: "Pakketten",
    href: "/#pakketten",
  },
];

export const supportFooterLinks: Link[] = [
  {
    label: "Helpcentrum",
    href: "/support",
  },
  {
    label: "Installatiehandleidingen",
    href: "/support/guides",
  },
  {
    label: "Contact",
    href: "/support/contact",
  },
  {
    label: "Systeemstatus",
    href: "/support/status",
  },
  {
    label: "Over Ons",
    href: "/over-ons",
  },
];

export const categories = [
  {
    name: "Sport",
    count: "Honderden sportkanalen",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Films",
    count: "Duizenden films",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Series",
    count: "Duizenden shows",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Documentaires",
    count: "Breed aanbod",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Kinderkanalen",
    count: "Veilig & gevarieerd",
    image:
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Internationale Kanalen",
    count: "190+ landen",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
];

export const features = [
  {
    title: "Ultra HD 4K Amsterdam",
    description:
      "Kristalheldere 4K-resolutie met HDR-ondersteuning. Beleef elk beeld met adembenemende details.",
    icon: "tv",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "Supersnelle Servers",
    description:
      "Wereldwijd CDN-netwerk met 99,9% beschikbaarheid. Content wordt geleverd vanaf de dichtstbijzijnde server.",
    icon: "server",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
  {
    title: "Nul Buffering",
    description:
      "Adaptieve bitrate-Amsterdam zorgt voor vloeiende weergave, zelfs bij een tragere internetverbinding.",
    icon: "bolt",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "Meerdere Apparaten",
    description:
      "Stream op Smart TV, telefoon, tablet of laptop. Naadloze synchronisatie tussen al uw apparaten.",
    icon: "mobile",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
  {
    title: "Wereldwijde Kanalen",
    description:
      "Toegang tot content uit 190+ landen. Lokale en internationale kanalen op één plek.",
    icon: "globe",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "24/7 Klantenservice",
    description:
      "Deskundige hulp dag en nacht. Gemiddelde reactietijd onder de 5 minuten.",
    icon: "headset",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
];

export const faqs = [
  {
    question: "Wat is een IPTV abonnement precies?",
    answer:
      "Een IPTV abonnement (Internet Protocol Television) laat u live tv-kanalen, films en series streamen via uw internetverbinding in plaats van via een traditionele kabel of schotel. Met IPTV Amsterdam kijkt u op elk apparaat, waar u ook bent, met duizenden kanalen en een uitgebreide VOD-bibliotheek in 4K.",
  },
  {
    question: "Welke apparaten worden ondersteund?",
    answer:
      "IPTV Amsterdam werkt op vrijwel alle moderne apparaten: Smart TV's (Samsung, LG, Sony), Android-telefoons en -tablets, iPhones en iPads, Windows- en Mac-computers, Amazon Fire TV Stick, Android TV-boxen, Chromecast en MAG-apparaten. We ondersteunen ook populaire IPTV-apps zoals IPTV Smarters Pro, TiviMate en VLC.",
  },
  {
    question: "Hoe stel ik mijn IPTV abonnement in?",
    answer:
      "De installatie duurt minder dan 5 minuten. Na uw bestelling ontvangt u direct een e-mail met uw M3U-playlist-URL en Xtream Codes API-gegevens. Voer deze gegevens in uw favoriete IPTV-app in en u kunt meteen kijken. Ons supportteam helpt u 24/7 bij de installatie.",
  },
  {
    question: "Is er een gratis proef beschikbaar?",
    answer:
      "Ja! We bieden een gratis IPTV proef aan zodat u onze dienst kunt testen voordat u een keuze maakt. De proefperiode geeft volledige toegang tot alle kanalen en VOD-content. Neem contact op met ons supportteam via WhatsApp om uw gratis proef aan te vragen.",
  },
  {
    question: "Kan ik op meerdere apparaten tegelijk kijken?",
    answer:
      "Ja! Afhankelijk van uw abonnement kunt u op 1 tot 4 apparaten tegelijk streamen. Zo kan het hele gezin tegelijkertijd verschillende programma's bekijken op verschillende apparaten, zonder onderbrekingen.",
  },
  {
    question: "Welke internetsnelheid heb ik nodig voor IPTV?",
    answer:
      "Voor optimaal streamen adviseren wij: SD-kwaliteit (10 Mbps), HD-kwaliteit (15 Mbps) en 4K Ultra HD (25 Mbps). Onze adaptieve Amsterdamtechnologie past de kwaliteit automatisch aan uw verbinding aan om buffering te voorkomen.",
  },
  {
    question: "Welke IPTV aanbieder is het beste in Nederland?",
    answer:
      "De beste IPTV aanbieder biedt een stabiele verbinding, 4K-kwaliteit, een groot aanbod Nederlandse en internationale kanalen, snelle servers en betrouwbare 24/7 klantenservice. IPTV Amsterdam combineert dit alles met scherpe prijzen en een gratis proef, waardoor wij tot de beste premium IPTV providers van Nederland behoren.",
  },
  {
    question: "Is IPTV legaal in Nederland?",
    answer:
      "Het kijken van content via IPTV is een grijs gebied. Wij raden u aan altijd te kiezen voor diensten die de juiste rechten hebben. IPTV Amsterdam levert een technische Amsterdamdienst; controleer altijd de lokale wet- en regelgeving voor uw situatie.",
  },
  {
    question: "Welke Nederlandse kanalen zijn beschikbaar?",
    answer:
      "Ons aanbod bevat alle populaire Nederlandse kanalen, waaronder NPO 1, 2 en 3, RTL 4, 5, 7 en 8, SBS6, Net5, Veronica, Ziggo Sport en ESPN. Daarnaast krijgt u toegang tot duizenden internationale kanalen uit meer dan 190 landen.",
  },
  {
    question: "Kan ik live sport zoals de Eredivisie kijken?",
    answer:
      "Absoluut. U kunt live sport volgen via onder andere ESPN, Ziggo Sport en internationale sportkanalen. Eredivisie, Champions League, Formule 1, tennis en meer worden in HD en 4K aangeboden, zodat u geen wedstrijd hoeft te missen.",
  },
  {
    question: "Wat is het verschil tussen IPTV en gewone kabel-tv?",
    answer:
      "Bij gewone kabel-tv betaalt u een vast pakket via een coaxkabel of schotel. IPTV streamt content via internet, waardoor u veel meer kanalen, films en series krijgt voor een lagere prijs, zonder vaste contracten en bruikbaar op al uw apparaten.",
  },
  {
    question: "Hoe kan ik een IPTV abonnement bestellen?",
    answer:
      "U kiest eenvoudig een pakket op onze prijzenpagina, selecteert het aantal verbindingen en de looptijd, en rondt de bestelling af. Direct daarna ontvangt u uw inloggegevens per e-mail. IPTV bestellen bij IPTV Amsterdam is binnen enkele minuten geregeld.",
  },
  {
    question: "Welke IPTV speler of app raden jullie aan?",
    answer:
      "Populaire IPTV spelers zijn IPTV Smarters Pro, TiviMate en VLC. Op de Fire TV Stick werkt IPTV Smarters Pro uitstekend, terwijl TiviMate favoriet is op Android TV. U ontvangt bij ons een duidelijke handleiding voor elke app.",
  },
  {
    question: "Ondersteunen jullie 4K en 8K Amsterdam?",
    answer:
      "Ja. Een groot deel van ons aanbod is beschikbaar in 4K Ultra HD met HDR, en geselecteerde content zelfs in 8K. Voor 4K adviseren wij een internetsnelheid van minimaal 25 Mbps voor een vloeiende kijkervaring zonder buffering.",
  },
  {
    question: "Is IPTV Amsterdam een goedkoop IPTV abonnement?",
    answer:
      "Wij bieden premium IPTV tegen een scherpe prijs. Hoe langer de looptijd die u kiest, hoe lager de maandprijs. Daarmee bieden wij een van de meest voordelige en betrouwbare IPTV abonnementen van Nederland, zonder in te leveren op kwaliteit.",
  },
  {
    question: "Hoe kan ik verschillende IPTV abonnementen vergelijken?",
    answer:
      "Let bij het vergelijken van IPTV abonnementen op de beeldkwaliteit (HD/4K), het aantal kanalen, de stabiliteit van de servers, het aantal gelijktijdige verbindingen, de klantenservice en de prijs. Op onze prijzenpagina ziet u alles overzichtelijk naast elkaar.",
  },
  {
    question: "Werkt IPTV ook met een VPN?",
    answer:
      "Ja, onze dienst werkt prima in combinatie met een VPN. Een VPN kan zelfs nuttig zijn als uw internetprovider bepaalde streams beperkt. De streamkwaliteit kan licht variëren afhankelijk van de gekozen VPN-server.",
  },
  {
    question: "Krijg ik ook films en series on demand (VOD)?",
    answer:
      "Zeker. Naast live tv krijgt u toegang tot een uitgebreide VOD-bibliotheek met films en series, inclusief de nieuwste releases. U kijkt wanneer het u uitkomt, met ondertiteling waar beschikbaar.",
  },
  {
    question: "Wat gebeurt er als een kanaal niet werkt?",
    answer:
      "Onze servers worden 24/7 gemonitord en problemen worden meestal binnen enkele minuten opgelost. Werkt een kanaal toch niet? Neem dan contact op via WhatsApp of e-mail; ons supportteam staat dag en nacht voor u klaar.",
  },
  {
    question: "Hoe veilig is mijn betaling?",
    answer:
      "Alle betalingen verlopen via een beveiligde verbinding. Wij gaan zorgvuldig om met uw gegevens en delen deze nooit met derden. Raadpleeg ons privacybeleid voor meer informatie over hoe wij uw gegevens beschermen.",
  },
  {
    question: "Kan ik mijn IPTV abonnement verlengen of upgraden?",
    answer:
      "Ja, u kunt uw abonnement op elk moment verlengen of upgraden naar meer verbindingen of een langere looptijd. Neem contact op met ons supportteam en wij regelen de wijziging zonder onderbreking van uw service.",
  },
  {
    question: "Hoe kan ik mijn abonnement opzeggen?",
    answer:
      "U kunt op elk moment opzeggen door contact op te nemen met ons supportteam. Er zijn geen opzegkosten of verborgen kosten. Uw service blijft actief tot het einde van uw huidige factuurperiode.",
  },
];
export const FOOTER_PAGES: Link[] = IPTV_GERMAN_PAGES.map((page) => ({
  label: page.keyword.toLowerCase(),
  href: getIptvGermanPath(page.slug),
}));
