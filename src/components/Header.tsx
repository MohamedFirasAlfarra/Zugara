import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { ThemeToggle } from './ThemeToggle.tsx';
import { Button } from './Button.tsx';
import { FaPhone, FaBars, FaXmark, FaArrowRight } from 'react-icons/fa6';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once on mount in case page is reloaded scrolled down
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Ablauf', href: '#ablauf' },
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf8f5]/92 dark:bg-[#07171a]/92 backdrop-blur-md shadow-sm border-b border-[#0e3b43]/8 dark:border-white/10 py-3'
          : 'bg-[#faf8f5]/75 dark:bg-[#07171a]/75 backdrop-blur-xs py-4 md:py-5 border-b border-transparent'
      }`}
    >
      {/* Thin Color-Changing Scroll Progress Bar at the very top */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] bg-neutral-200/30 dark:bg-white/5 overflow-hidden z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full transition-all duration-150 ease-out relative"
          style={{
            width: `${scrollProgress}%`,
            background: `linear-gradient(90deg, 
              #134e5b 0%, 
              #228b9f 30%, 
              #e77a28 70%, 
              #f59e0b 90%, 
              #fbbf24 100%)`,
            filter: `hue-rotate(${Math.round(scrollProgress * 0.35)}deg)`,
            boxShadow:
              scrollProgress > 1
                ? '0 0 10px rgba(231, 122, 40, 0.7), 0 0 4px rgba(245, 158, 11, 0.8)'
                : 'none',
          }}
        >
          {/* Glowing pulse bead at the leading tip */}
          {scrollProgress > 0.5 && (
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fbbf24] -mr-1" />
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#"
            className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#e77a28] rounded-lg transition-transform hover:opacity-95"
            aria-label="Zugara Startseite"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#134e5b] dark:text-[#b9dee5] hover:text-[#e77a28] dark:hover:text-[#f59e0b] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#e77a28] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Phone, Theme Toggle, CTA, Mobile Toggle) */}
          <div className="flex items-center space-x-2.5 sm:space-x-3.5">
            {/* Direct Phone Call Affordance */}
            <a
              href="tel:+493089204410"
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#0e3b43] dark:text-[#88c4d1] hover:text-[#e77a28] hover:bg-[#0e3b43]/5 dark:hover:bg-white/5 transition-all duration-200"
              title="Direkt anrufen: +49 (0) 30 8920 4410"
              aria-label="Telefonnummer anrufen"
            >
              <FaPhone className="w-4 h-4 text-[#e77a28]" />
              <span className="hidden xl:inline-block ml-2 text-xs font-semibold text-[#0e3b43] dark:text-[#dbeef2]">
                030 8920 4410
              </span>
            </a>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Free Quote CTA Button (Desktop) */}
            <div className="hidden sm:block">
              <Button
                href="#kontakt"
                variant="accent"
                size="sm"
                icon={<FaArrowRight className="w-3 h-3" />}
              >
                Kostenlose Anfrage
              </Button>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-xl border border-neutral-300/60 dark:border-neutral-700/60 text-[#0e3b43] dark:text-[#e2f1f3] hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#e77a28]"
              aria-expanded={mobileMenuOpen}
              aria-label="Hauptmenü öffnen"
            >
              {mobileMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#0e3b43]/10 dark:border-white/10 bg-[#faf8f5] dark:bg-[#07171a] px-4 pt-4 pb-6 space-y-4 shadow-xl transition-all">
          <div className="pb-3 border-b border-neutral-200/70 dark:border-white/10 flex items-center justify-between">
            <Logo size="sm" hideTextOnMobile={false} />
            <span className="text-[11px] font-semibold text-[#ea7200]">Fachbetrieb</span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#0e3b43] dark:text-[#dbeef2] hover:bg-[#0e3b43]/5 dark:hover:bg-white/5 hover:text-[#e77a28] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2.5">
            <a
              href="tel:+493089204410"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0e3b43] dark:text-[#88c4d1] bg-[#0e3b43]/5 dark:bg-white/5"
            >
              <FaPhone className="w-4 h-4 text-[#e77a28]" />
              <span>Telefon: 030 8920 4410</span>
            </a>

            <Button
              href="#kontakt"
              variant="accent"
              size="md"
              fullWidth
              onClick={handleNavClick}
              icon={<FaArrowRight className="w-3.5 h-3.5" />}
            >
              Kostenlose Anfrage stellen
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
