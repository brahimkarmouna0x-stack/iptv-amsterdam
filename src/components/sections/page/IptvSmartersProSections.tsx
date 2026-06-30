import { Download, List, Play, Settings, Smartphone } from "lucide-react";

const smartersFeatures = [
  {
    title: "M3U playlist-ondersteuning",
    desc: "IPTV Smarters Pro laadt elke M3U-link direct in. Plak uw afspeellijst-URL en alle kanalen verschijnen meteen gesorteerd in de app.",
  },
  {
    title: "Xtream Codes API",
    desc: "Log in met uw gebruikersnaam, wachtwoord en serveradres van IPTV Amsterdam. De app haalt automatisch uw kanalen, VOD en EPG op.",
  },
  {
    title: "Live tv, VOD en series",
    desc: "Eén app voor alles: live kanalen, films on demand en series in aparte tabbladen. Naadloos wisselen tussen content.",
  },
  {
    title: "Electronic Program Guide (EPG)",
    desc: "IPTV Smarters Pro toont de volledige EPG-programmagids. Zie wat er nu en later speelt op elk kanaal.",
  },
  {
    title: "Multi-screen & parental lock",
    desc: "Stel meerdere profielen in voor elk gezinslid met eigen favorieten en kinderbescherming per profiel.",
  },
  {
    title: "4K & HDR Amsterdam",
    desc: "De app ondersteunt 4K UHD en HDR-content volledig. Koppel met uw IPTV Amsterdam account voor maximale beeldkwaliteit.",
  },
];

export function IptvSmartersAbout() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 680px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            De app uitgelegd
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Wat is <span className="text-gradient">IPTV Smarters Pro</span>?
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            IPTV Smarters Pro is een van de populairste IPTV-apps ter wereld. De
            app werkt perfect samen met uw IPTV Amsterdam-abonnement op Android,
            iOS, Fire TV Stick en meer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {smartersFeatures.map((item, idx) => (
            <div
              key={idx}
              className="animate-slide-up glass rounded-2xl p-6 border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300 group"
              style={{ animationDelay: `${0.07 * idx}s` }}
            >
              <h3 className="font-display font-bold text-base mb-2 text-blanc-50">
                {item.title}
              </h3>
              <p className="text-blanc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const installSteps = [
  {
    step: "01",
    icon: Download,
    title: "Download IPTV Smarters Pro",
    desc: 'Zoek "IPTV Smarters Pro" in de Google Play Store, Apple App Store of Amazon Appstore. Download en installeer de gratis app op uw apparaat.',
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
  },
  {
    step: "02",
    icon: Settings,
    title: "Kies uw inlogmethode",
    desc: 'Open de app en kies "Login with Xtream Codes API" voor de eenvoudigste instelling, of kies "Add URL/M3U" als u een afspeellijst-link van IPTV Amsterdam heeft ontvangen.',
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
  },
  {
    step: "03",
    icon: List,
    title: "Voer uw IPTV Amsterdam-gegevens in",
    desc: "Vul uw gebruikersnaam, wachtwoord en server-URL in die u na aankoop per e-mail heeft ontvangen. Tik op Toevoegen — de app laadt uw kanalen automatisch.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
  },
  {
    step: "04",
    icon: Smartphone,
    title: "Stel uw voorkeuren in",
    desc: "Voeg favoriete kanalen toe, stel de EPG in voor de programmagids en activeer kindervergrendeling indien gewenst. De interface is volledig in het Engels maar intuïtief.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
  },
  {
    step: "05",
    icon: Play,
    title: "Begin met streamen",
    desc: "Selecteer Live TV, VOD of Series en kies een kanaal of film. IPTV Smarters Pro verbindt direct met de IPTV Amsterdam-servers voor een stabiele 4K-stream.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
  },
];

export function IptvSmartersInstall() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-black/25"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 680px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            Stap voor stap
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            <span className="text-gradient">IPTV Smarters Pro</span> installeren
            met IPTV Amsterdam
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Van download tot live tv in minder dan 5 minuten — volg deze
            eenvoudige stappen voor IPTV Smarters Pro.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-10 top-10 bottom-10 w-px bg-linear-to-b from-france-500/30 via-rouge-500/20 to-transparent"
          />

          <div className="space-y-6">
            {installSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="animate-slide-up glass rounded-3xl p-6 lg:p-7 border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300 flex gap-5 lg:gap-7 items-start group"
                  style={{ animationDelay: `${0.1 * idx}s` }}
                >
                  <div className="relative shrink-0">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center border ${item.border} group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon
                        size={24}
                        className={item.color}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-france-500 text-blanc-50 text-[10px] font-black flex items-center justify-center shadow-md">
                      {idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2 text-blanc-50">
                      {item.title}
                    </h3>
                    <p className="text-blanc-400 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
