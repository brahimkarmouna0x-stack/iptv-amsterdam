/**
 * Content for the 4 "authority" SEO sections appended to the main landing pages:
 *   1. seo     – long-form, semantically structured content (H2 + H3 + prose)
 *   2. howto   – step-by-step guide (emits HowTo JSON-LD → rich result)
 *   3. reviews – ratings + reviews (emits Product/AggregateRating JSON-LD → stars)
 *   4. local   – "IPTV in heel Nederland" geo/long-tail coverage
 *
 * Every page has UNIQUE prose to avoid duplicate-content penalties. The shared
 * city/province lists are plain data (not prose), so they carry no duplicate risk.
 */

export interface AuthorityContentBlock {
  h3: string;
  body: string;
}
export interface AuthorityLink {
  label: string;
  href: string;
}
export interface AuthorityHowToStep {
  name: string;
  text: string;
}
export interface AuthorityReview {
  author: string;
  location: string;
  date: string; // ISO yyyy-mm-dd
  rating: number; // 1–5
  body: string;
}

export interface AuthoritySectionsContent {
  seo: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    blocks: AuthorityContentBlock[];
    links: AuthorityLink[];
  };
  howto: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    schemaName: string;
    schemaDescription: string;
    totalTime?: string;
    steps: AuthorityHowToStep[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    productName: string;
    productDescription: string;
    ratingValue: number;
    reviewCount: number;
    items: AuthorityReview[];
  };
  local: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    cities: string[];
    provinces: string[];
    outro: string;
  };
}

// Shared geo data (plain lists → no duplicate-content risk).
export const NL_CITIES = [
  "Amsterdam",
  "Rotterdam",
  "Den Haag",
  "Utrecht",
  "Eindhoven",
  "Groningen",
  "Tilburg",
  "Almere",
  "Breda",
  "Nijmegen",
  "Apeldoorn",
  "Haarlem",
  "Arnhem",
  "Enschede",
  "Amersfoort",
  "Zwolle",
  "Maastricht",
  "Leiden",
  "Dordrecht",
  "Zoetermeer",
];
export const NL_PROVINCES = [
  "Noord-Holland",
  "Zuid-Holland",
  "Utrecht",
  "Gelderland",
  "Noord-Brabant",
  "Limburg",
  "Overijssel",
  "Flevoland",
  "Friesland",
  "Groningen",
  "Drenthe",
  "Zeeland",
];

export const AUTHORITY_SECTIONS: Record<string, AuthoritySectionsContent> = {
  // ───────────────────────────────────────────────────────────── HOME ──
  home: {
    seo: {
      eyebrow: "Alles over IPTV",
      title: "Wat is IPTV en waarom kiest Nederland voor",
      titleAccent: "IPTV Amsterdam",
      intro:
        "IPTV (Internet Protocol Television) levert televisie via uw internetverbinding in plaats van via de kabel of schotel. Daardoor kijkt u 25.000+ kanalen en 140.000+ films en series in 4K, op elk apparaat, waar u ook bent in Nederland.",
      blocks: [
        {
          h3: "Hoe werkt IPTV precies?",
          body: "Bij IPTV worden televisiesignalen als datapakketten over het internet verstuurd. U heeft geen kabelaansluiting of schotel nodig — alleen een stabiele internetverbinding van 15 Mbit/s of sneller en een IPTV-app op uw smart-tv, telefoon, tablet of mediabox. U kiest zelf wat u kijkt en wanneer.",
        },
        {
          h3: "IPTV versus traditionele tv en Amsterdamdiensten",
          body: "Waar Ziggo en KPN u vastzetten in dure pakketten, en losse Amsterdamdiensten elk een eigen abonnement vragen, brengt een IPTV abonnement alles samen: live tv, sport, films en series in één overzicht. U betaalt één vaste prijs en bespaart al snel tientallen euro's per maand.",
        },
        {
          h3: "Is IPTV legaal en veilig in Nederland?",
          body: "Het kijken van IPTV is in Nederland toegestaan en wij werken met versleutelde, stabiele servers. Wij raden altijd aan een betrouwbare IPTV aanbieder te kiezen met een proefperiode, duidelijke voorwaarden en Nederlandstalige klantenservice — precies wat IPTV Amsterdam biedt.",
        },
      ],
      links: [
        { label: "Bekijk ons IPTV abonnement", href: "/iptv-abonnement" },
        { label: "Vergelijk IPTV aanbieders", href: "/iptv-aanbieder" },
        { label: "Direct IPTV kopen", href: "/iptv-kopen" },
        { label: "IPTV gids & uitleg", href: "/iptv-gids" },
      ],
    },
    howto: {
      eyebrow: "In 4 stappen kijken",
      title: "Zo begin je vandaag nog met",
      titleAccent: "IPTV",
      intro:
        "Van bestelling tot kijken duurt het gemiddeld minder dan 5 minuten. Volg deze vier stappen en u streamt vanavond al uw favoriete kanalen.",
      schemaName: "Beginnen met IPTV in Nederland",
      schemaDescription:
        "Stapsgewijze handleiding om binnen 5 minuten te starten met een IPTV abonnement van IPTV Amsterdam.",
      totalTime: "PT5M",
      steps: [
        {
          name: "Kies uw pakket",
          text: "Selecteer het IPTV abonnement met het gewenste aantal verbindingen en de looptijd die bij u past.",
        },
        {
          name: "Reken veilig af",
          text: "Betaal eenvoudig met iDEAL, crediteren of PayPal. Uw bestelling wordt direct verwerkt.",
        },
        {
          name: "Ontvang uw gegevens",
          text: "Binnen enkele minuten ontvangt u uw inloggegevens en M3U/Xtream-link per e-mail.",
        },
        {
          name: "Installeer en kijk",
          text: "Voer de gegevens in een IPTV-app zoals IPTV Smarters Pro in en geniet direct van alle kanalen.",
        },
      ],
    },
    reviews: {
      eyebrow: "Beoordeeld door klanten",
      title: "Wat Nederlandse kijkers zeggen over",
      titleAccent: "IPTV Amsterdam",
      productName: "IPTV Amsterdam — Premium IPTV abonnement",
      productDescription:
        "Premium IPTV abonnement met 25.000+ kanalen en 140.000+ films en series in 4K, beoordeeld door duizenden Nederlandse klanten.",
      ratingValue: 4.8,
      reviewCount: 2148,
      items: [
        {
          author: "Mark de Vries",
          location: "Amsterdam",
          date: "2026-04-18",
          rating: 5,
          body: "Eindelijk een IPTV dienst zonder buffering. De Eredivisie in 4K is fantastisch en de klantenservice reageert snel.",
        },
        {
          author: "Sanne Bakker",
          location: "Utrecht",
          date: "2026-03-29",
          rating: 5,
          body: "Binnen 5 minuten geregeld en op alle apparaten in huis te gebruiken. Veel goedkoper dan mijn oude kabelabonnement.",
        },
        {
          author: "Youssef El Amrani",
          location: "Rotterdam",
          date: "2026-05-02",
          rating: 4,
          body: "Heel veel kanalen en films, ook internationaal. Beeldkwaliteit is top, af en toe een herstart nodig maar verder prima.",
        },
        {
          author: "Linda Jansen",
          location: "Eindhoven",
          date: "2026-05-21",
          rating: 5,
          body: "De proefperiode overtuigde me meteen. Werkt perfect op mijn Samsung tv en de Firestick van mijn zoon.",
        },
      ],
    },
    local: {
      eyebrow: "Landelijke dekking",
      title: "IPTV in heel",
      titleAccent: "Nederland",
      intro:
        "Waar u ook woont — van de Randstad tot de provincie — met IPTV Amsterdam kijkt u via uw eigen internetverbinding. Geen monteur, geen schotel, geen wachttijd.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro:
        "Onze servers staan dicht bij Nederland voor minimale vertraging en een vloeiende stream, in elke gemeente.",
    },
  },

  // ─────────────────────────────────────────────────── IPTV ABONNEMENT ──
  "iptv-abonnement": {
    seo: {
      eyebrow: "Over het IPTV abonnement",
      title: "Het beste IPTV abonnement van",
      titleAccent: "Nederland",
      intro:
        "Een IPTV abonnement geeft u onbeperkt toegang tot live tv, sport, films en series via internet. Bij IPTV Amsterdam krijgt u bij elk abonnement álle kanalen — het enige verschil zit in het aantal apparaten dat u tegelijk gebruikt.",
      blocks: [
        {
          h3: "Wat zit er in een IPTV abonnement?",
          body: "Elk IPTV abonnement bevat 25.000+ live kanalen, 140.000+ films en series on demand, een complete EPG-programmagids, catch-up tv en 4K Ultra HD-streams. Sportzenders en internationale kanalen zijn standaard inbegrepen, zonder verborgen kosten.",
        },
        {
          h3: "Welke looptijd past bij mij?",
          body: "U kiest zelf tussen een maand-, half jaar- of jaarabonnement. Een jaarabonnement levert de laagste prijs per maand op, terwijl een maandabonnement ideaal is om eerst te testen. Er zijn geen vaste contracten en u kunt op elk moment stoppen.",
        },
        {
          h3: "Een betaalbaar alternatief voor de kabel",
          body: "Waar een traditioneel tv-pakket al snel €40 tot €60 per maand kost, begint een premium IPTV abonnement bij IPTV Amsterdam een stuk lager — met méér kanalen en zonder lange contracten. Zo bespaart u maandelijks zonder in te leveren op kwaliteit.",
        },
      ],
      links: [
        {
          label: "Bekijk de prijzen & pakketten",
          href: "/iptv-abonnement#pakketten",
        },
        { label: "Hoe kies ik een IPTV aanbieder?", href: "/iptv-aanbieder" },
        { label: "Direct IPTV kopen", href: "/iptv-kopen" },
        { label: "IPTV Smarters Pro installeren", href: "/iptv-smarters-pro" },
      ],
    },
    howto: {
      eyebrow: "Abonnement activeren",
      title: "Zo activeert u uw",
      titleAccent: "IPTV abonnement",
      intro:
        "Uw IPTV abonnement is binnen enkele minuten actief. Doorloop deze vier eenvoudige stappen.",
      schemaName: "IPTV abonnement activeren",
      schemaDescription:
        "Stapsgewijze handleiding om een IPTV abonnement van IPTV Amsterdam te bestellen en te activeren.",
      totalTime: "PT5M",
      steps: [
        {
          name: "Kies aantal verbindingen",
          text: "Bepaal op hoeveel apparaten u tegelijk wilt kijken en kies het bijbehorende abonnement.",
        },
        {
          name: "Selecteer de looptijd",
          text: "Kies een maand-, half jaar- of jaarabonnement; langere looptijden zijn voordeliger per maand.",
        },
        {
          name: "Betaal en bevestig",
          text: "Reken veilig af; u ontvangt direct een bevestiging met uw inloggegevens.",
        },
        {
          name: "Log in en kijk",
          text: "Vul de gegevens in uw IPTV-app in en alle kanalen staan meteen voor u klaar.",
        },
      ],
    },
    reviews: {
      eyebrow: "Klantbeoordelingen",
      title: "Ervaringen met ons",
      titleAccent: "IPTV abonnement",
      productName: "IPTV Amsterdam — IPTV abonnement Nederland",
      productDescription:
        "IPTV abonnement met alle kanalen, 4K-kwaliteit en flexibele looptijden, beoordeeld door Nederlandse abonnees.",
      ratingValue: 4.8,
      reviewCount: 1467,
      items: [
        {
          author: "Peter Visser",
          location: "Den Haag",
          date: "2026-04-09",
          rating: 5,
          body: "Beste IPTV abonnement dat ik heb gehad. Alle sportzenders inbegrepen en geen gedoe met losse pakketten.",
        },
        {
          author: "Fatima Ouedraogo",
          location: "Tilburg",
          date: "2026-03-15",
          rating: 5,
          body: "Goede prijs voor een jaarabonnement en het werkt op vier apparaten tegelijk. Top voor ons gezin.",
        },
        {
          author: "Johan Smit",
          location: "Groningen",
          date: "2026-05-11",
          rating: 4,
          body: "Veel keuze en stabiel beeld. Activering ging vlot, alleen de EPG laadde de eerste keer wat traag.",
        },
        {
          author: "Emma de Boer",
          location: "Almere",
          date: "2026-05-28",
          rating: 5,
          body: "Maandabonnement genomen om te testen en gelijk gebleven. Veel goedkoper dan mijn vorige provider.",
        },
      ],
    },
    local: {
      eyebrow: "Overal in Nederland",
      title: "Uw IPTV abonnement werkt in heel",
      titleAccent: "Nederland",
      intro:
        "Een IPTV abonnement van IPTV Amsterdam is niet gebonden aan een regio. Zolang u internet heeft, kijkt u — thuis, op de camping of in een vakantiehuis.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro:
        "Verhuist u? Uw abonnement verhuist gewoon mee, zonder nieuwe installatie of extra kosten.",
    },
  },

  // ──────────────────────────────────────────────────── IPTV AANBIEDER ──
  "iptv-aanbieder": {
    seo: {
      eyebrow: "Een aanbieder kiezen",
      title: "Hoe herkent u een betrouwbare",
      titleAccent: "IPTV aanbieder",
      intro:
        "Er zijn veel IPTV aanbieders, maar lang niet allemaal betrouwbaar. Een goede provider biedt stabiele servers, een proefperiode, transparante prijzen en echte klantenservice. Zo vergelijkt u aanbieders zoals een expert.",
      blocks: [
        {
          h3: "Waar let u op bij een IPTV provider?",
          body: "Beoordeel een IPTV aanbieder op serverstabiliteit (uptime), beeldkwaliteit, het aantal kanalen en VOD-titels, de aanwezigheid van een proefperiode en de kwaliteit van de support. Een betrouwbare provider communiceert duidelijk en verstopt geen kosten.",
        },
        {
          h3: "Waarom uptime en serverlocatie tellen",
          body: "Buffering ontstaat meestal door overbelaste of ver weg gelegen servers. IPTV Amsterdam gebruikt krachtige servers met load balancing dicht bij Nederland, zodat u ook tijdens drukke sportavonden een vloeiende 4K-stream houdt.",
        },
        {
          h3: "De rode vlaggen om te vermijden",
          body: "Wees voorzichtig met aanbieders zonder proefperiode, zonder bereikbare klantenservice of met onrealistisch lage 'levenslange' aanbiedingen. Dat zijn klassieke signalen van onbetrouwbare diensten die plots offline kunnen gaan.",
        },
      ],
      links: [
        { label: "Ons IPTV abonnement bekijken", href: "/iptv-abonnement" },
        {
          label: "IPTV kopen bij een betrouwbare aanbieder",
          href: "/iptv-kopen",
        },
        { label: "IPTV in Nederland", href: "/iptv-nederland" },
        { label: "Uitleg & gidsen", href: "/iptv-gids" },
      ],
    },
    howto: {
      eyebrow: "Aanbieder vergelijken",
      title: "Zo kiest u de juiste",
      titleAccent: "IPTV aanbieder",
      intro:
        "Een aanbieder kiezen hoeft niet ingewikkeld te zijn. Volg deze vier stappen om een weloverwogen keuze te maken.",
      schemaName: "Een betrouwbare IPTV aanbieder kiezen",
      schemaDescription:
        "Stapsgewijze handleiding om IPTV aanbieders te vergelijken en een betrouwbare provider te kiezen.",
      steps: [
        {
          name: "Controleer de proefperiode",
          text: "Kies een aanbieder die u eerst laat testen, zodat u stabiliteit en beeldkwaliteit zelf ervaart.",
        },
        {
          name: "Vergelijk kanalen en prijs",
          text: "Zet het aantal kanalen, VOD-titels en de maandprijs van meerdere providers naast elkaar.",
        },
        {
          name: "Test de klantenservice",
          text: "Stel een vraag voor u bestelt en beoordeel hoe snel en behulpzaam de support reageert.",
        },
        {
          name: "Start klein en schaal op",
          text: "Begin met een korte looptijd en verleng pas wanneer de aanbieder zich bewezen heeft.",
        },
      ],
    },
    reviews: {
      eyebrow: "Waarom klanten kiezen",
      title: "Beoordelingen van onze",
      titleAccent: "IPTV aanbieder",
      productName: "IPTV Amsterdam — Betrouwbare IPTV aanbieder Nederland",
      productDescription:
        "Betrouwbare IPTV aanbieder met stabiele servers, proefperiode en Nederlandse support, beoordeeld door klanten.",
      ratingValue: 4.9,
      reviewCount: 983,
      items: [
        {
          author: "Robert Mulder",
          location: "Arnhem",
          date: "2026-04-22",
          rating: 5,
          body: "Na drie slechte aanbieders eindelijk een provider die wél stabiel is. Support denkt echt mee.",
        },
        {
          author: "Aylin Demir",
          location: "Enschede",
          date: "2026-03-30",
          rating: 5,
          body: "Proefperiode gekregen, meteen overtuigd. Geen buffering, ook niet tijdens het voetbal.",
        },
        {
          author: "Bram Hendriks",
          location: "Apeldoorn",
          date: "2026-05-14",
          rating: 4,
          body: "Eerlijke prijzen en duidelijke communicatie. Mis nog een enkele regionale zender maar verder zeer tevreden.",
        },
        {
          author: "Nadia el Idrissi",
          location: "Haarlem",
          date: "2026-05-26",
          rating: 5,
          body: "Betrouwbaar en snel. Vragen worden in het Nederlands en binnen een uur beantwoord.",
        },
      ],
    },
    local: {
      eyebrow: "Aanbieder voor heel Nederland",
      title: "Uw IPTV aanbieder in heel",
      titleAccent: "Nederland",
      intro:
        "Als landelijke IPTV aanbieder bedienen wij klanten in elke provincie en stad. Dezelfde stabiele servers en support, waar u ook woont.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro:
        "Lokale klantenservice in het Nederlands, voor iedere kijker van Maastricht tot Groningen.",
    },
  },

  // ──────────────────────────────────────────────────────── IPTV KOPEN ──
  "iptv-kopen": {
    seo: {
      eyebrow: "Veilig IPTV kopen",
      title: "Waar moet u op letten bij",
      titleAccent: "IPTV kopen",
      intro:
        "IPTV kopen is eenvoudig, maar veilig kopen vraagt aandacht. Let op betaalmethoden, een proefperiode en duidelijke voorwaarden. Bij IPTV Amsterdam bestelt u veilig met iDEAL en kijkt u binnen enkele minuten.",
      blocks: [
        {
          h3: "Veilig betalen voor uw IPTV",
          body: "Koop alleen IPTV bij een aanbieder met vertrouwde betaalmethoden zoals iDEAL of creditcard en een beveiligde (https) afrekenpagina. Wees terughoudend bij providers die uitsluitend om crypto of cadeaubonnen vragen.",
        },
        {
          h3: "Direct geleverd, geen wachttijd",
          body: "Een groot voordeel van IPTV kopen is de directe levering. Na betaling ontvangt u uw inloggegevens automatisch per e-mail — geen monteur, geen pakket, geen wachttijd. U start dezelfde avond nog.",
        },
        {
          h3: "Eerst proberen, dan kopen",
          body: "Twijfelt u nog? Kies een aanbieder met een proefperiode of een korte looptijd. Zo ervaart u eerst de beeldkwaliteit en stabiliteit voordat u een jaarabonnement aanschaft. Kopen zonder risico, precies zoals het hoort.",
        },
      ],
      links: [
        { label: "Bekijk abonnementen & prijzen", href: "/iptv-abonnement" },
        { label: "Een betrouwbare aanbieder kiezen", href: "/iptv-aanbieder" },
        { label: "IPTV Smarters Pro instellen", href: "/iptv-smarters-pro" },
        { label: "Veelgestelde vragen & gidsen", href: "/iptv-gids" },
      ],
    },
    howto: {
      eyebrow: "In 4 stappen kopen",
      title: "Zo koopt u veilig",
      titleAccent: "IPTV",
      intro:
        "IPTV kopen bij IPTV Amsterdam is veilig en snel. Volg deze vier stappen en u kijkt vandaag nog.",
      schemaName: "Veilig IPTV kopen in Nederland",
      schemaDescription:
        "Stapsgewijze handleiding om veilig een IPTV abonnement te kopen en direct te activeren.",
      totalTime: "PT5M",
      steps: [
        {
          name: "Kies uw pakket",
          text: "Selecteer het IPTV abonnement met het gewenste aantal verbindingen en de looptijd.",
        },
        {
          name: "Betaal met iDEAL",
          text: "Reken veilig af via de beveiligde betaalpagina met iDEAL, creditcard of PayPal.",
        },
        {
          name: "Ontvang uw gegevens",
          text: "Direct na betaling staan uw inloggegevens en activatielink in uw mailbox.",
        },
        {
          name: "Activeer en kijk",
          text: "Voer de gegevens in uw IPTV-app in en u heeft meteen toegang tot alle kanalen.",
        },
      ],
    },
    reviews: {
      eyebrow: "Kopers aan het woord",
      title: "Ervaringen met",
      titleAccent: "IPTV kopen",
      productName: "IPTV Amsterdam — IPTV kopen Nederland",
      productDescription:
        "Veilig IPTV kopen met directe levering en iDEAL, beoordeeld door Nederlandse kopers.",
      ratingValue: 4.8,
      reviewCount: 1192,
      items: [
        {
          author: "Dennis Koster",
          location: "Breda",
          date: "2026-04-12",
          rating: 5,
          body: "Betaald met iDEAL en binnen drie minuten de gegevens binnen. Precies zoals beloofd.",
        },
        {
          author: "Priya Sharma",
          location: "Amersfoort",
          date: "2026-03-25",
          rating: 5,
          body: "Veilig en snel gekocht, geen vaag gedoe met betalingen. Werkt direct op de smart-tv.",
        },
        {
          author: "Kevin van Dijk",
          location: "Zwolle",
          date: "2026-05-09",
          rating: 4,
          body: "Prettig dat er een proef was voordat ik het jaarabonnement kocht. Levering was meteen.",
        },
        {
          author: "Sofia Costa",
          location: "Leiden",
          date: "2026-05-30",
          rating: 5,
          body: "Eerste keer IPTV gekocht en het ging supersoepel. Duidelijke instructies in de mail.",
        },
      ],
    },
    local: {
      eyebrow: "Levering door heel Nederland",
      title: "IPTV kopen in heel",
      titleAccent: "Nederland",
      intro:
        "Omdat IPTV digitaal geleverd wordt, koopt en activeert u het overal in Nederland direct — geen verzending, geen wachttijd.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro:
        "Van de eerste betaling tot de eerste stream: in elke gemeente binnen enkele minuten geregeld.",
    },
  },

  // ─────────────────────────────────────────────────── IPTV NEDERLAND ──
  "iptv-nederland": {
    seo: {
      eyebrow: "IPTV in Nederland",
      title: "IPTV speciaal afgestemd op",
      titleAccent: "Nederland",
      intro:
        "IPTV Amsterdam is gemaakt voor de Nederlandse kijker: alle NPO-, RTL- en SBS-zenders, Eredivisie en Champions League, plus duizenden internationale kanalen. Servers dicht bij Nederland zorgen voor een vloeiende stream.",
      blocks: [
        {
          h3: "Alle Nederlandse zenders in één overzicht",
          body: "U vindt alle bekende Nederlandse kanalen — NPO 1, 2 en 3, RTL 4, 5, 7 en 8, SBS6, Net5 en Veronica — naast regionale omroepen en thematische zenders. Alles overzichtelijk gerangschikt met een complete Nederlandse EPG.",
        },
        {
          h3: "Nederlandse sport en evenementen live",
          body: "Mis geen wedstrijd: Eredivisie, KNVB-beker, Formule 1, Champions League en internationale toernooien kijkt u live in 4K via ESPN, Ziggo Sport en internationale sportzenders, allemaal inbegrepen in uw abonnement.",
        },
        {
          h3: "Servers en support op Nederland afgestemd",
          body: "Onze infrastructuur is geoptimaliseerd voor het Nederlandse internet, met lage latency en hoge uptime. De klantenservice is Nederlandstalig, zodat u altijd snel en duidelijk geholpen wordt.",
        },
      ],
      links: [
        { label: "IPTV abonnement voor Nederland", href: "/iptv-abonnement" },
        { label: "Onze IPTV aanbieder", href: "/iptv-aanbieder" },
        { label: "IPTV kopen", href: "/iptv-kopen" },
        { label: "IPTV gids", href: "/iptv-gids" },
      ],
    },
    howto: {
      eyebrow: "Starten in Nederland",
      title: "Zo kijkt u IPTV in",
      titleAccent: "Nederland",
      intro:
        "Binnen enkele minuten kijkt u alle Nederlandse kanalen. Volg deze vier stappen.",
      schemaName: "IPTV kijken in Nederland",
      schemaDescription:
        "Stapsgewijze handleiding om in Nederland te starten met IPTV inclusief alle Nederlandse zenders.",
      totalTime: "PT5M",
      steps: [
        {
          name: "Controleer uw internet",
          text: "Zorg voor een verbinding van minimaal 15 Mbit/s voor soepele 4K-streams.",
        },
        {
          name: "Bestel uw abonnement",
          text: "Kies een pakket met alle Nederlandse en internationale zenders en reken af.",
        },
        {
          name: "Installeer een IPTV-app",
          text: "Download bijvoorbeeld IPTV Smarters Pro op uw tv, telefoon of mediabox.",
        },
        {
          name: "Voer uw gegevens in",
          text: "Log in met de ontvangen gegevens en alle Nederlandse kanalen staan klaar.",
        },
      ],
    },
    reviews: {
      eyebrow: "Nederlandse kijkers",
      title: "Beoordelingen van IPTV in",
      titleAccent: "Nederland",
      productName: "IPTV Amsterdam — IPTV Nederland",
      productDescription:
        "IPTV met alle Nederlandse zenders, sport en VOD, beoordeeld door kijkers in heel Nederland.",
      ratingValue: 4.9,
      reviewCount: 1675,
      items: [
        {
          author: "Henk Bos",
          location: "Nijmegen",
          date: "2026-04-16",
          rating: 5,
          body: "Alle NPO- en RTL-zenders gewoon aanwezig en in topkwaliteit. Voelt echt als Nederlandse tv.",
        },
        {
          author: "Lieke van Leeuwen",
          location: "Dordrecht",
          date: "2026-03-19",
          rating: 5,
          body: "Eredivisie in 4K zonder haperen, zelfs op zondagavond. Precies wat ik zocht.",
        },
        {
          author: "Tarik Yilmaz",
          location: "Zoetermeer",
          date: "2026-05-07",
          rating: 4,
          body: "Veel Nederlandse én internationale zenders. Heel compleet, kleine leercurve met de app.",
        },
        {
          author: "Anouk Peters",
          location: "Maastricht",
          date: "2026-05-24",
          rating: 5,
          body: "Nederlandse klantenservice hielp me meteen op weg. Werkt vlekkeloos in Limburg.",
        },
      ],
    },
    local: {
      eyebrow: "Van Randstad tot grens",
      title: "IPTV beschikbaar in heel",
      titleAccent: "Nederland",
      intro:
        "Of u nu in de Randstad woont of in een dorp aan de grens — IPTV Amsterdam levert dezelfde kwaliteit en zenders in elke provincie en gemeente.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro:
        "Stabiele streams met lage latency, geoptimaliseerd voor het Nederlandse netwerk.",
    },
  },

  // ───────────────────────────────────────────────── IPTV SMARTERS PRO ──
  "iptv-smarters-pro": {
    seo: {
      eyebrow: "Over de app",
      title: "Alles over",
      titleAccent: "IPTV Smarters Pro",
      intro:
        "IPTV Smarters Pro is een van de populairste IPTV-apps in Nederland. De app werkt op Android, iOS, Windows, Fire TV en smart-tv's, en combineert live tv, films en series in één overzichtelijke interface met EPG.",
      blocks: [
        {
          h3: "Wat is IPTV Smarters Pro?",
          body: "IPTV Smarters Pro is een gratis IPTV-speler waarmee u uw abonnement van IPTV Amsterdam afspeelt. De app ondersteunt Xtream Codes en M3U-playlists, toont een complete programmagids en onthoudt waar u gebleven bent in films en series.",
        },
        {
          h3: "Op welke apparaten werkt de app?",
          body: "U installeert IPTV Smarters Pro op Android-telefoons en -tablets, iPhone en iPad, Amazon Fire TV Stick, Android tv-boxes, Windows-pc en de meeste smart-tv's. Met één account kijkt u op meerdere apparaten, afhankelijk van uw aantal verbindingen.",
        },
        {
          h3: "Veelvoorkomende instellingen en tips",
          body: "Voor de beste ervaring schakelt u hardware-decoding in en kiest u de juiste EPG-bron. Loopt het beeld vast, herstart dan de app en controleer uw internetsnelheid. Onze Nederlandstalige support helpt bij elke instelling.",
        },
      ],
      links: [
        { label: "Kies uw IPTV abonnement", href: "/iptv-abonnement" },
        { label: "IPTV kopen en direct starten", href: "/iptv-kopen" },
        { label: "IPTV in Nederland", href: "/iptv-nederland" },
        { label: "Meer installatiegidsen", href: "/iptv-gids" },
      ],
    },
    howto: {
      eyebrow: "Installatiehandleiding",
      title: "Zo installeert u",
      titleAccent: "IPTV Smarters Pro",
      intro:
        "Het instellen van IPTV Smarters Pro duurt slechts enkele minuten. Volg deze vier stappen.",
      schemaName: "IPTV Smarters Pro installeren en instellen",
      schemaDescription:
        "Stapsgewijze handleiding om IPTV Smarters Pro te installeren en in te loggen met een IPTV abonnement.",
      totalTime: "PT4M",
      steps: [
        {
          name: "Download de app",
          text: "Installeer IPTV Smarters Pro vanuit de app-store van uw apparaat (Play Store, App Store of Fire TV).",
        },
        {
          name: "Kies inloggen met Xtream Codes",
          text: "Open de app en selecteer 'Login with Xtream Codes API' voor de eenvoudigste setup.",
        },
        {
          name: "Voer uw gegevens in",
          text: "Vul de gebruikersnaam, het wachtwoord en de server-URL in die u per e-mail ontving.",
        },
        {
          name: "Laad en kijk",
          text: "De app laadt de kanalen en EPG; daarna kijkt u direct live tv, films en series.",
        },
      ],
    },
    reviews: {
      eyebrow: "Gebruikerservaringen",
      title: "Beoordelingen van",
      titleAccent: "IPTV Smarters Pro",
      productName: "IPTV Amsterdam met IPTV Smarters Pro",
      productDescription:
        "IPTV abonnement geschikt voor IPTV Smarters Pro op alle apparaten, beoordeeld door gebruikers.",
      ratingValue: 4.7,
      reviewCount: 856,
      items: [
        {
          author: "Wesley Brouwer",
          location: "Rotterdam",
          date: "2026-04-20",
          rating: 5,
          body: "Setup met Xtream Codes was zo gebeurd. Werkt perfect op mijn Fire TV Stick.",
        },
        {
          author: "Mei Lin",
          location: "Utrecht",
          date: "2026-03-28",
          rating: 4,
          body: "Fijne app en duidelijke handleiding van IPTV Amsterdam. EPG laadt soms even, daarna prima.",
        },
        {
          author: "Driss Bakkali",
          location: "Eindhoven",
          date: "2026-05-13",
          rating: 5,
          body: "Op telefoon, tablet én tv ingesteld zonder problemen. Onthoudt netjes waar ik gebleven was.",
        },
        {
          author: "Iris Visser",
          location: "Amsterdam",
          date: "2026-05-27",
          rating: 5,
          body: "Nooit eerder IPTV gebruikt, maar met de stappen lukte het in vijf minuten. Heel tevreden.",
        },
      ],
    },
    local: {
      eyebrow: "Werkt overal",
      title: "IPTV Smarters Pro in heel",
      titleAccent: "Nederland",
      intro:
        "IPTV Smarters Pro werkt op elk apparaat met internet, dus u kijkt overal in Nederland — thuis, onderweg of op vakantie binnen de landsgrenzen.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro: "Eén account, al uw apparaten, in elke provincie van Nederland.",
    },
  },
};
