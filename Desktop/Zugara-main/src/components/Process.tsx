import React from 'react';
import { ScrollReveal } from './ScrollReveal.tsx';
import { FaCalendarCheck, FaClipboardCheck, FaTruckFast, FaCheck } from 'react-icons/fa6';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Anfrage stellen',
      subtitle: 'In unter 2 Minuten',
      description:
        'Senden Sie uns Ihre Eckdaten bequem über unser Formular oder rufen Sie uns direkt an. Wir erfassen unverbindlich Art, Umfang und Ihren Wunschzeitraum.',
      icon: <FaCalendarCheck className="w-5 h-5" />,
    },
    {
      number: '02',
      title: 'Kostenvoranschlag',
      subtitle: 'Kostenlose Besichtigung',
      description:
        'Vor Ort oder flexibel per Video prüfen wir das Objekt und erstellen Ihnen ein transparentes, verbindliches Festpreisangebot mit Bestpreis-Sicherheit.',
      icon: <FaClipboardCheck className="w-5 h-5" />,
    },
    {
      number: '03',
      title: 'Durchführung',
      subtitle: 'Pünktlich & sorgfältig',
      description:
        'Unser festangestelltes Fachpersonal erscheint pünktlich mit passendem Fuhrpark. Wir packen an, demontieren fachgerecht und räumen strukturiert.',
      icon: <FaTruckFast className="w-5 h-5" />,
    },
    {
      number: '04',
      title: 'Übergabe',
      subtitle: '100% besenrein',
      description:
        'Abschließende gemeinsame Abnahme des Objekts. Sie erhalten alle Räume termingerecht, makellos und besenrein übergeben — bereit für Vermieter oder Käufer.',
      icon: <FaCheck className="w-5 h-5" />,
    },
  ];

  return (
    <section id="ablauf" className="py-16 md:py-24 bg-[#f0f8fa]/60 dark:bg-[#091e23]/60 relative scroll-mt-24 border-y border-[#0e3b43]/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <ScrollReveal direction="up" delayMs={50}>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-[#d15f1b] dark:text-[#f69147] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#e77a28]" />
              <span>Transparenter Ablauf</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={120}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-[#0a2d34] dark:text-[#f0f8fa] leading-tight [text-wrap:balance]">
              In vier einfachen Schritten zu Ihrem Ziel
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={190}>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-[#b9dee5]/80 [text-wrap:balance]">
              Kein bürokratischer Aufwand, keine bösen Überraschungen. Wir machen den gesamten Ablauf
              für Sie so einfach, berechenbar und stressfrei wie möglich.
            </p>
          </ScrollReveal>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="relative">
          {/* Desktop Connecting Line behind steps */}
          <div
            className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#134e5b]/20 via-[#e77a28]/40 to-[#134e5b]/20 dark:from-white/10 dark:via-[#e77a28]/40 dark:to-white/10 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                direction="up"
                delayMs={100 + index * 100}
                className="flex flex-col"
              >
                <div className="h-full flex flex-col bg-white dark:bg-[#0d2328] rounded-2xl p-6 sm:p-7 border border-[#0e3b43]/10 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 relative group">
                  {/* Step Number Top Flag */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display font-black text-3xl sm:text-4xl text-[#0e3b43]/20 dark:text-[#88c4d1]/25 group-hover:text-[#e77a28] transition-colors duration-300">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#0e3b43]/8 dark:bg-[#228b9f]/20 text-[#0e3b43] dark:text-[#88c4d1] flex items-center justify-center group-hover:bg-[#e77a28] group-hover:text-white transition-all duration-300 shadow-xs">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-3">
                    <h3 className="text-xl font-bold text-[#0a2d34] dark:text-[#f0f8fa]">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#e77a28] dark:text-[#f69147]">
                      {step.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#b9dee5]/80 leading-relaxed mt-auto">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
