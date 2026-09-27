import React from 'react';
import { Button } from './Button.tsx';
import { ScrollReveal } from './ScrollReveal.tsx';
import { LogoIcon } from './Logo.tsx';
import { FaArrowRight, FaShieldHalved, FaCheck } from 'react-icons/fa6';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32">
      {/* Background Soft Ambient Light Blobs */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-[#007986]/10 dark:bg-[#005a64]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[#ea7200]/10 dark:bg-[#ea7200]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <ScrollReveal direction="up" delayMs={50}>
              {/* Unboxed editorial category marker with Zugara Emblem */}
              <div className="flex items-center gap-3 text-xs md:text-sm font-semibold tracking-wide text-[#00656e] dark:text-[#f69147]">
                <LogoIcon size={26} animated />
                <span>ZUGARA · Fachbetrieb für Privathaushalte & Gewerbe</span>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span className="hidden sm:inline text-neutral-500 dark:text-neutral-400">Deutschlandweit</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={120}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#0a2d34] dark:text-[#f0f8fa] leading-[1.12] [text-wrap:balance]">
                Entspannt umziehen.{' '}
                <span className="bg-gradient-to-r from-[#005057] via-[#007986] to-[#228b9f] dark:from-[#b9dee5] dark:via-[#88c4d1] dark:to-[#4da3b7] bg-clip-text text-transparent">
                  Sorgsam auflösen.
                </span>{' '}
                <span className="text-[#ea7200] dark:text-[#f69147]">Besenrein</span> übergeben.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={190}>
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-[#b9dee5]/90 max-w-2xl leading-relaxed [text-wrap:balance]">
                Zugara begleitet Sie bei Umzügen, Haushaltsauflösungen und Entrümpelungen mit
                höchster Diskretion, verbindlicher Festpreisgarantie und voller Haftung.
                Zuverlässig, sauber und menschlich nah.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={260}>
              {/* Primary & Secondary Action Block */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Button
                  href="#kontakt"
                  variant="accent"
                  size="lg"
                  icon={<FaArrowRight className="w-4 h-4" />}
                >
                  Kostenloses Angebot anfordern
                </Button>

                <Button
                  href="#leistungen"
                  variant="outline"
                  size="lg"
                >
                  Unsere Leistungen entdecken
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={330}>
              {/* Quiet Micro Trust Signals */}
              <div className="pt-2 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <FaCheck className="w-3.5 h-3.5 text-[#ea7200]" />
                  <span>Kostenlose & unverbindliche Besichtigung</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCheck className="w-3.5 h-3.5 text-[#ea7200]" />
                  <span>Garantierter Festpreis ohne Nachverhandlung</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCheck className="w-3.5 h-3.5 text-[#ea7200]" />
                  <span>Bis 2,5 Mio. € vollversichert</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3D Animated Logo Ring */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
            <ScrollReveal direction="right" delayMs={150} className="w-full max-w-md lg:max-w-none">
              <div className="relative aspect-square w-full max-w-[440px] mx-auto flex items-center justify-center perspective-1000">
                {/* Outer Glow Halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#005a64]/15 via-transparent to-[#ea7200]/20 blur-2xl" />

                {/* 3D Rotating Ring System */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 transform-style-3d animate-rotate-3d">
                  {/* Main Ring - Teal */}
                  <div className="absolute inset-0 rounded-full border-8 border-[#007986] shadow-[0_0_30px_rgba(0,121,134,0.4)] animate-ring-rotate" />
                  
                  {/* Secondary Ring - Orange (rotating opposite) */}
                  <div className="absolute inset-4 rounded-full border-6 border-[#ea7200] shadow-[0_0_25px_rgba(234,114,0,0.4)] animate-ring-rotate-reverse" />
                  
                  {/* Inner Ring - Light Teal */}
                  <div className="absolute inset-8 rounded-full border-4 border-[#4da3b7] opacity-60 animate-ring-rotate" style={{ animationDuration: '15s' }} />
                  
                  {/* Center Sphere */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#007986] via-[#005a64] to-[#00434a] shadow-[inset_0_-10px_30px_rgba(0,0,0,0.4),0_10px_40px_rgba(0,121,134,0.5)] animate-pulse-slow">
                      <div className="absolute inset-2 rounded-full bg-gradient-to-tl from-transparent via-white/10 to-white/20" />
                    </div>
                  </div>
                </div>

                {/* Floating Trust Badge 1: Top Right */}
                <div className="absolute -top-3 right-0 sm:right-4 bg-white/95 dark:bg-[#0d2328]/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#005057]/10 dark:border-white/10 flex items-center gap-2.5 animate-float-gentle">
                  <div className="w-7 h-7 rounded-lg bg-[#ea7200]/15 text-[#ea7200] flex items-center justify-center shrink-0">
                    <FaCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#005057] dark:text-[#f0f8fa] leading-tight">
                      Festpreisgarantie
                    </div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
                      Keine versteckten Kosten
                    </div>
                  </div>
                </div>

                {/* Floating Trust Badge 2: Bottom Left */}
                <div
                  className="absolute -bottom-4 left-0 sm:left-2 bg-white/95 dark:bg-[#0d2328]/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#005057]/10 dark:border-white/10 flex items-center gap-2.5 animate-float-gentle"
                  style={{ animationDelay: '2s' }}
                >
                  <div className="w-7 h-7 rounded-lg bg-[#005057]/15 dark:bg-[#228b9f]/20 text-[#005057] dark:text-[#4da3b7] flex items-center justify-center shrink-0">
                    <FaShieldHalved className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#005057] dark:text-[#f0f8fa] leading-tight">
                      Vollversichert
                    </div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
                      Bis 2.500.000 € Schutz
                    </div>
                  </div>
                </div>

                {/* Floating Trust Badge 3: Center Bottom Right */}
                <div
                  className="hidden sm:flex absolute top-1/2 -right-6 bg-white/95 dark:bg-[#0d2328]/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-[#005057]/10 dark:border-white/10 items-center gap-2 animate-float-gentle"
                  style={{ animationDelay: '4s' }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-semibold text-[#005057] dark:text-[#dbeef2]">
                    Wunschtermine frei
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
