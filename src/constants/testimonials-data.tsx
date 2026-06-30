export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  border: string;
  time: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sven de Vries",
    role: "Premium gebruiker",
    content: "Echt top! In het begin was ik sceptisch over IPTV, maar het werkt perfect. Geen onderbrekingen tijdens de Eredivisie, dat was voor mij het belangrijkst. De installatie op mijn Apple TV was in 5 minuten klaar.",
    time: "2 dagen geleden",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
  {
    name: "Lieke Jansen",
    role: "Geverifieerde klant",
    content: "Eindelijk een aanbieder die alle Nederlandse kanalen probleemloos biedt. De filmkwaliteit is echt ongelofelijk. Alleen het zoeken is soms wat traag op mijn oude Samsung TV, maar verder niets op aan te merken.",
    time: "1 week geleden",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 4.5,
    border: "border-rouge-500/30",
  },
  {
    name: "Daan Bakker",
    role: "Sportliefhebber",
    content: "Uitstekende service. Ik had een vraag over de betaling en kreeg bijna direct antwoord via WhatsApp. Ik gebruik het nu een maand en ben volledig overtuigd. Heb mijn Netflix inmiddels opgezegd.",
    time: "3 weken geleden",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
  {
    name: "Sanne Visser",
    role: "Geverifieerde klant",
    content: "Mijn man kijkt voetbal en ik mijn series - ideaal dat we tegelijk op twee schermen kunnen kijken. De installatie was voor mij als beginner even puzzelen, maar de handleiding hielp enorm.",
    time: "1 maand geleden",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4.5,
    border: "border-france-400/30",
  },
  {
    name: "Thijs Mulder",
    role: "Premium abonnee",
    content: "De beste kwaliteit die ik tot nu toe heb gezien. Ik heb veel andere aanbieders geprobeerd, maar dit is de eerste die echt constant 4K zonder buffering levert. Een aanrader voor alle sportfans.",
    time: "2 maanden geleden",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    border: "border-rouge-500/30",
  },
  {
    name: "Fleur van Dijk",
    role: "Geverifieerde klant",
    content: "Wat een plezier om weer alle Nederlandse kanalen te hebben, nu ik in het buitenland woon. Het werkt perfect op iPad en pc. Geweldig!",
    time: "3 maanden geleden",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 5,
    border: "border-rouge-500/35",
  },
  {
    name: "Bram Smit",
    role: "Geverifieerde klant",
    content: "De klantenservice is echt goud waard. Ze hebben me 's avonds laat nog geholpen met de installatie op mijn Formuler-box. Het wisselen van kanaal gaat ook razendsnel, voelt als echte kabel-tv.",
    time: "4 maanden geleden",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
];
