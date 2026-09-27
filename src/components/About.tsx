import React from 'react';
import { ScrollReveal } from './ScrollReveal.tsx';
import { LogoIcon } from './Logo.tsx';
import { FaShieldHalved, FaHandshakeSimple, FaHeart } from 'react-icons/fa6';
import teamImg from '../assets/images/about_team_zugara_1790428172819.jpg';

export const About: React.FC = () => {
  return (
    <section id="ueber-uns" className="py-16 md:py-24 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authentic Team Photography */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delayMs={100}>
              <div className="relative">
                {/* Decorative Offset Glow & Frame */}
                <div
                  className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#134e5b]/20 via-[#e77a28]/15 to-transparent blur-xl"
                  aria-hidden="true"
                />

                <div className="relative rounded-2xl overflow-hidden border border-[#0e3b43]/15 dark:border-white/10 shadow-xl bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={teamImg}
                    alt="Das Zugara Team vor dem Einsatzfahrzeug"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover aspect-[16/10] hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Logo Seal on Team Picture */}
                  <div className="absolute top-4 left-4 bg-white/95 dark:bg-[#07171a]/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-white/20 flex items-center gap-2">
                    <LogoIcon size={20} />
                    <span className="text-[11px] font-bold text-[#005057] dark:text-white">Zugara Fachbetrieb</span>
                  </div>

                  {/* Clean unboxed image overlay caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium">
                    <span>Ihr eingespieltes Zugara-Team — Persönlich, sorgsam und verlässlich.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="up" delayMs={50}>
              <div className="flex items-center gap-2.5 text-xs md:text-sm font-semibold tracking-wide text-[#00656e] dark:text-[#f69147]">
                <LogoIcon size={22} animated />
                <span>Über das Unternehmen Zugara</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={120}>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#0a2d34] dark:text-[#f0f8fa] leading-tight [text-wrap:balance]">
                Handwerkliche Sorgfalt mit menschlicher Empathie
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={190}>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-[#b9dee5]/85 leading-relaxed">
                <p>
                  Ein Umzug oder die Auflösung eines Haushalts ist weit mehr als eine logistische
                  Aufgabe — oft steht ein bedeutsamer Neubeginn oder ein emotionaler Abschied
                  dahinter. Bei <strong className="text-[#0e3b43] dark:text-[#f0f8fa] font-semibold">Zugara</strong> begegnen wir jedem Auftrag mit dem nötigen Respekt,
                  höchster Diskretion und tatkräftiger Professionalität.
                </p>
                <p>
                  Gegründet mit dem festen Grundsatz, Dienstleistungen rund ums Wohnen und Räumen
                  wieder transparent und vertrauensvoll zu gestalten, setzen wir auf geschulte
                  Fachkräfte, moderne Ausrüstung und verbindliche Festpreise. Wir hinterlassen nicht
                  nur besenreine Räume, sondern zufriedene Kunden mit freiem Kopf.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={260}>
              {/* Three Value Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white dark:bg-[#0d2328] border border-[#0e3b43]/8 dark:border-white/5 space-y-2">
                  <div className="text-[#e77a28]">
                    <FaShieldHalved className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-bold text-[#0a2d34] dark:text-[#f0f8fa]">
                    100% Haftung
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    Vollumfängliche Absicherung bis 2,5 Mio. € für Ihr Mobiliar.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0d2328] border border-[#0e3b43]/8 dark:border-white/5 space-y-2">
                  <div className="text-[#e77a28]">
                    <FaHandshakeSimple className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-bold text-[#0a2d34] dark:text-[#f0f8fa]">
                    Handschlagqualität
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    Verbindliche Zusagen, transparente Festpreise ohne Sternchen.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0d2328] border border-[#0e3b43]/8 dark:border-white/5 space-y-2">
                  <div className="text-[#e77a28]">
                    <FaHeart className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-bold text-[#0a2d34] dark:text-[#f0f8fa]">
                    Wertschätzung
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    Rücksichtsvoller Umgang mit Erinnerungsstücken & Antiquitäten.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
