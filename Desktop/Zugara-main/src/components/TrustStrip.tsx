import React from 'react';
import { ScrollReveal } from './ScrollReveal.tsx';
import { FaShieldHalved, FaClock, FaTags, FaRecycle } from 'react-icons/fa6';

export const TrustStrip: React.FC = () => {
  const trustPoints = [
    {
      icon: <FaShieldHalved className="w-5 h-5" />,
      title: 'Vollversichert',
      description: 'Haftpflicht- & Transportschutz bis 2.500.000 € für maximales Vertrauen',
    },
    {
      icon: <FaClock className="w-5 h-5" />,
      title: 'Termingenau',
      description: 'Verbindliche Zeitfenster und 100% garantierte Pünktlichkeit bei jedem Auftrag',
    },
    {
      icon: <FaTags className="w-5 h-5" />,
      title: 'Transparente Preise',
      description: 'Verbindliche Festpreisangebote ohne versteckte Kosten oder böse Überraschungen',
    },
    {
      icon: <FaRecycle className="w-5 h-5" />,
      title: 'Umweltgerechte Entsorgung',
      description: 'Zertifizierte Mülltrennung, Recycling & Weitergabe von gut Erhaltenem',
    },
  ];

  return (
    <section className="relative z-20 -mt-6 md:-mt-10 mb-16 md:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delayMs={100}>
          <div className="bg-white/90 dark:bg-[#0d2328]/90 backdrop-blur-md rounded-2xl border border-[#0e3b43]/10 dark:border-white/10 shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-neutral-200/80 dark:divide-white/10">
              {trustPoints.map((point, index) => (
                <div
                  key={point.title}
                  className={`flex items-start gap-4 ${
                    index > 0 ? 'pt-5 sm:pt-0 lg:pl-6' : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0e3b43]/8 dark:bg-[#228b9f]/20 text-[#0e3b43] dark:text-[#88c4d1] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <span className="text-[#e77a28] dark:text-[#f59e0b]">{point.icon}</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#0a2d34] dark:text-[#f0f8fa]">
                      {point.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-[#b9dee5]/80 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
