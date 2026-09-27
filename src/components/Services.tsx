import React from 'react';
import { ScrollReveal } from './ScrollReveal.tsx';
import { Button } from './Button.tsx';
import { FaTruckFast, FaHouseChimney, FaBoxesPacking, FaCheck, FaArrowRight } from 'react-icons/fa6';

// Generated high-fidelity domain assets
import umzugImg from '../assets/images/service_umzug_1790428136031.jpg';
import haushaltImg from '../assets/images/service_haushalt_1790428147891.jpg';
import entruempelungImg from '../assets/images/service_entruempelung_1790428159944.jpg';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'umzug',
      name: 'Umzüge',
      badge: 'Privat & Gewerbe',
      icon: <FaTruckFast className="w-6 h-6" />,
      image: umzugImg,
      alt: 'Zugara Umzugsservice Möbeltransport',
      lead: 'Sorgsam, termintreu und entspannt in Ihr neues Zuhause oder Büro.',
      description:
        'Vom Einpackservice über Möbelmontage bis zur behördlichen Halteverbotszone: Wir organisieren Ihren Nah- oder Fernumzug bis ins kleinste Detail.',
      features: [
        'Fachgerechte Schutzverpackung & Möbelmontage',
        'Beantragung & Aufstellung von Halteverbotszonen',
        'Einsatz moderner Außenaufzüge bei Bedarf',
        'Vollumfängliche Transport- und Haftpflichtversicherung',
      ],
      serviceValue: 'Umzug',
    },
    {
      id: 'haushaltsaufloesung',
      name: 'Haushaltsauflösungen',
      badge: 'Diskret & Würdevoll',
      icon: <FaHouseChimney className="w-6 h-6" />,
      image: haushaltImg,
      alt: 'Zugara Haushaltsauflösung und Nachlassräumung',
      lead: 'Einfühlsame und strukturierte Nachlass- und Wohnungsauflösung.',
      description:
        'Bei Nachlässen oder Umzügen ins Seniorenheim stehen wir Ihnen mit Respekt und Tatkraft zur Seite — inklusive transparenter Wertanrechnung.',
      features: [
        'Faire & transparente Wertanrechnung verwertbarer Güter',
        'Sorgfältige Trennung von Erinnerungsstücken & Dokumenten',
        'Komplette Räumung aller Nebenräume (Keller, Dachboden)',
        'Garantierte besenreine Übergabe an Vermieter oder Erben',
      ],
      serviceValue: 'Haushaltsauflösung',
    },
    {
      id: 'entruempelung',
      name: 'Entrümpelungen',
      badge: 'Besenrein & Schnell',
      icon: <FaBoxesPacking className="w-6 h-6" />,
      image: entruempelungImg,
      alt: 'Zugara Entrümpelung und fachgerechtes Recycling',
      lead: 'Gründliche Befreiung von Gerümpel und Altlasten aller Art.',
      description:
        'Ob überfüllter Keller, Dachboden, Gewerbefläche oder Messie-Wohnung: Wir schaffen schnell, diskret und umweltgerecht wieder freien Raum.',
      features: [
        'Umweltgerechtes Recycling mit offiziellen Entsorgungsnachweisen',
        'Entrümpelung von Keller, Dachboden, Garage & Garten',
        'Diskrete & professionelle Abwicklung auch schwieriger Fälle',
        'Feste Pauschalpreise ohne unvorhergesehene Aufschläge',
      ],
      serviceValue: 'Entrümpelung',
    },
  ];

  const handleServiceClick = (serviceValue: string) => {
    if (onSelectService) {
      onSelectService(serviceValue);
    }
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="leistungen" className="py-16 md:py-24 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <ScrollReveal direction="up" delayMs={50}>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-[#d15f1b] dark:text-[#f69147] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#e77a28]" />
              <span>Unsere Kernkompetenzen</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={120}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-[#0a2d34] dark:text-[#f0f8fa] leading-tight [text-wrap:balance]">
              Drei Spezialdisziplinen. Ein zuverlässiger Qualitätsstandard.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={190}>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-[#b9dee5]/80 [text-wrap:balance]">
              Wir übernehmen die schwere Arbeit für Sie. Mit professionellem Equipment, geschulten
              Fachkräften und einem klaren Versprechen: sauber, termintreu und besenrein.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Featured Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delayMs={100 + index * 120}
              className="flex flex-col h-full"
            >
              <div className="group h-full flex flex-col bg-white dark:bg-[#0d2328] rounded-2xl border border-[#0e3b43]/10 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-hidden hover:-translate-y-1">
                {/* Image Showcase with Fallback Scrim */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                  <img
                    src={service.image}
                    alt={service.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Category Pill Tag Replacement (Clean unboxed title chip) */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold text-white/95 px-3 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/20">
                      {service.badge}
                    </span>
                  </div>

                  {/* Icon Emblem Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#e77a28] text-white flex items-center justify-center shadow-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-[#134e5b] dark:text-[#88c4d1]">
                      {service.lead}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-[#b9dee5]/80 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="pt-2 space-y-2.5 border-t border-neutral-100 dark:border-white/5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-[#dbeef2]">
                          <FaCheck className="w-3.5 h-3.5 text-[#e77a28] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-white/5">
                    <Button
                      onClick={() => handleServiceClick(service.serviceValue)}
                      variant="outline"
                      size="md"
                      fullWidth
                      icon={<FaArrowRight className="w-3.5 h-3.5" />}
                    >
                      {service.name} anfragen
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
