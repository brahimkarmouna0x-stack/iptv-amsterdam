const dutchChannels = [
  { name: "NPO 1", tag: "Publiek" },
  { name: "NPO 2", tag: "Publiek" },
  { name: "NPO 3", tag: "Publiek" },
  { name: "RTL 4", tag: "Entertainment" },
  { name: "RTL 5", tag: "Entertainment" },
  { name: "RTL 7", tag: "Sport & Film" },
  { name: "RTL 8", tag: "Lifestyle" },
  { name: "SBS6", tag: "Entertainment" },
  { name: "Net5", tag: "Lifestyle" },
  { name: "Veronica", tag: "Film & TV" },
  { name: "Ziggo Sport", tag: "Sport" },
  { name: "ESPN", tag: "Sport" },
];

const internationalChannels = [
  { name: "BBC One", tag: "VK" },
  { name: "CNN", tag: "Nieuws" },
  { name: "Discovery", tag: "Documentaire" },
  { name: "National Geographic", tag: "Documentaire" },
  { name: "Fox Sports", tag: "Sport" },
  { name: "beIN Sports", tag: "Sport" },
  { name: "Eurosport", tag: "Sport" },
  { name: "Al Jazeera", tag: "Nieuws" },
  { name: "TV5 Monde", tag: "Frans" },
  { name: "Sky Sports", tag: "Sport" },
  { name: "DAZN", tag: "Sport" },
  { name: "Arte", tag: "Cultuur" },
];

interface ChannelPillProps {
  name: string;
  tag: string;
  variant?: "primary" | "secondary";
}

const ChannelPill = ({ name, tag, variant = "primary" }: ChannelPillProps) => (
  <div
    className={`flex items-center gap-3 rounded-2xl px-4 py-3 border transition-all duration-200 hover:-translate-y-0.5 cursor-default ${
      variant === "primary"
        ? "glass border-france-400/15 hover:border-france-400/30"
        : "glass border-blanc-50/5 hover:border-blanc-50/10"
    }`}
  >
    <div
      className={`w-2 h-2 rounded-full shrink-0 ${
        variant === "primary" ? "bg-france-400" : "bg-blanc-500"
      }`}
    />
    <span className="font-bold text-blanc-50 text-sm whitespace-nowrap">{name}</span>
    <span
      className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
        variant === "primary"
          ? "bg-france-500/15 text-france-300"
          : "bg-blanc-50/5 text-blanc-500"
      }`}
    >
      {tag}
    </span>
  </div>
);

const ChannelShowcase = () => {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Zenderaanbod
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Populaire <span className="text-gradient">zenders & kanalen</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Van alle Nederlandse publieke zenders tot internationale sportkampioen­ schappen
            — alles op één abonnement.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px flex-1 bg-blanc-50/5" />
              <span className="text-xs font-black uppercase tracking-widest text-france-400">
                Nederlandse Zenders
              </span>
              <span className="h-px flex-1 bg-blanc-50/5" />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {dutchChannels.map((ch) => (
                <ChannelPill key={ch.name} {...ch} variant="primary" />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px flex-1 bg-blanc-50/5" />
              <span className="text-xs font-black uppercase tracking-widest text-blanc-500">
                Internationale Zenders
              </span>
              <span className="h-px flex-1 bg-blanc-50/5" />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {internationalChannels.map((ch) => (
                <ChannelPill key={ch.name} {...ch} variant="secondary" />
              ))}
            </div>
          </div>

          <p className="text-center text-blanc-500 text-sm font-medium">
            + <span className="text-blanc-300 font-bold">30.976 andere zenders</span> uit
            meer dan 190 landen
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChannelShowcase;
