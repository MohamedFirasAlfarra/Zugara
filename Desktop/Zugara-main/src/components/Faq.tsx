import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal.tsx';
import { FaChevronDown, FaPhone, FaArrowRight } from 'react-icons/fa6';
import { Button } from './Button.tsx';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const Faq: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'Was kostet ein Umzug oder eine Entrümpelung bei Zugara?',
      answer:
        'Die Kosten hängen maßgeblich vom Volumen (Kubikmeter), der Etagenlage, dem Vorhandensein eines Aufzugs und den gewünschten Zusatzleistungen (z. B. Einpackservice oder Möbelmontage) ab. Nach einer kurzen, kostenlosen Vor-Ort- oder Video-Besichtigung erhalten Sie von uns ein verbindliches Festpreisangebot mit Bestpreis-Garantie — ohne versteckte Gebühren oder Nachforderungen.',
      category: 'Preise & Angebote',
    },
    {
      id: 'faq-2',
      question: 'Wie läuft eine Haushaltsauflösung konkret ab?',
      answer:
        'Zunächst besichtigen wir das Objekt diskret und unverbindlich. Dabei identifizieren wir gemeinsam mit Ihnen persönliche Erinnerungsstücke und prüfen verwertbare Gegenstände für eine faire Wertanrechnung auf den Endpreis. Am Einsatztag demontiert und räumt unser geschultes Team alle Räume inklusive Keller und Dachboden und übergibt die Immobilie termingerecht und zu 100 % besenrein.',
      category: 'Ablauf',
    },
    {
      id: 'faq-3',
      question: 'Sind meine Möbel und Einrichtungsgegenstände während des Transports versichert?',
      answer:
        'Ja, selbstverständlich. Jeder Auftrag bei Zugara ist durch eine umfassende Betriebs- und Güterschadenhaftpflichtversicherung bis zu einer Deckungssumme von 2.500.000 € abgesichert. Dies gilt sowohl während des Be- und Entladens als auch auf der gesamten Transportstrecke gem. den gesetzlichen Vorschriften des § 451 HGB.',
      category: 'Sicherheit & Schutz',
    },
    {
      id: 'faq-4',
      question: 'Muss ich während der Entrümpelung oder des Umzugs selbst anwesend sein?',
      answer:
        'Nein, Ihre persönliche Anwesenheit ist nicht zwingend erforderlich. Viele unserer Kunden übergeben uns am Vortag oder Morgen die Schlüssel und wir übernehmen die gesamte Abwicklung eigenständig. Nach Abschluss führen wir gemeinsam die Abnahme durch oder senden Ihnen eine ausführliche Fotodokumentation der geräumten Räume.',
      category: 'Ablauf',
    },
    {
      id: 'faq-5',
      question: 'Was bedeutet die garantierte „besenreine Übergabe“?',
      answer:
        'Besenrein bedeutet für uns: Alle vereinbarten Gegenstände und Altlasten sind rückstandslos entfernt, sämtliche Böden sind sauber gefegt, und auf Wunsch entfernen wir auch alte Nägel, Dübel, Vorhangstangen oder Teppichböden. Sie erhalten die Räumlichkeiten in einem Zustand, der eine direkte Übergabe an den Vermieter oder Notar ohne Nacharbeiten ermöglicht.',
      category: 'Qualitätsversprechen',
    },
    {
      id: 'faq-6',
      question: 'Wie kurzfristig kann ein Termin vereinbart werden?',
      answer:
        'In der Regel können wir Aufträge mit einer Vorlaufzeit von 3 bis 7 Werktagen einplanen. Bei dringenden Fällen (z. B. plötzlicher Wohnungswechsel, Fristabläufe oder Nachlassräumungen) halten wir flexible Notfall- und Expresskapazitäten bereit, um auch innerhalb von 24 bis 48 Stunden vor Ort tätig zu werden.',
      category: 'Termine & Express',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#f0f8fa]/50 dark:bg-[#091e23]/50 relative scroll-mt-24 border-y border-[#0e3b43]/5 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal direction="up" delayMs={50}>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-[#d15f1b] dark:text-[#f69147] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#e77a28]" />
              <span>Antworten auf Ihre Fragen</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={120}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-[#0a2d34] dark:text-[#f0f8fa] leading-tight [text-wrap:balance]">
              Häufig gestellte Fragen (FAQ)
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={190}>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-[#b9dee5]/80 [text-wrap:balance]">
              Transparenz steht bei uns an erster Stelle. Hier finden Sie klare Antworten zu Kosten,
              Versicherungsschutz und dem Ablauf unserer Dienstleistungen.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <ScrollReveal
                key={faq.id}
                direction="up"
                delayMs={100 + index * 60}
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white dark:bg-[#0d2328] border-[#e77a28]/40 dark:border-[#e77a28]/40 shadow-md'
                      : 'bg-white/80 dark:bg-[#0d2328]/70 border-[#0e3b43]/10 dark:border-white/10 hover:border-[#0e3b43]/25 dark:hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    type="button"
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e77a28]"
                  >
                    <div className="space-y-1">
                      {faq.category && (
                        <div className="text-[11px] font-semibold tracking-wider uppercase text-[#d15f1b] dark:text-[#f69147]">
                          {faq.category}
                        </div>
                      )}
                      <h3 className="text-base sm:text-lg font-bold text-[#0a2d34] dark:text-[#f0f8fa] leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-[#e77a28] text-white rotate-180'
                          : 'bg-[#0e3b43]/8 dark:bg-[#228b9f]/20 text-[#0e3b43] dark:text-[#88c4d1]'
                      }`}
                    >
                      <FaChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 border-t border-neutral-100 dark:border-white/5 text-sm sm:text-base text-neutral-600 dark:text-[#b9dee5]/85 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Quiet Bottom Help Box */}
        <ScrollReveal direction="up" delayMs={300} className="mt-12">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0d2328] border border-[#0e3b43]/10 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#0a2d34] dark:text-[#f0f8fa]">
                Ihre Frage war nicht dabei?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#b9dee5]/80">
                Wir beraten Sie jederzeit gerne telefonisch oder per Nachricht unverbindlich und kostenfrei.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+493089204410"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#0e3b43]/8 dark:bg-white/10 text-[#0e3b43] dark:text-white hover:bg-[#e77a28]/15 hover:text-[#e77a28] transition-colors"
              >
                <FaPhone className="w-3.5 h-3.5 text-[#e77a28]" />
                <span>030 8920 4410</span>
              </a>

              <Button
                href="#kontakt"
                variant="accent"
                size="sm"
                icon={<FaArrowRight className="w-3 h-3" />}
              >
                Frage stellen
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
