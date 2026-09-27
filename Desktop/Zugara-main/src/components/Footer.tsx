import React, { useState } from 'react';
import { Logo, LogoIcon } from './Logo.tsx';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaShieldHalved,
  FaXmark,
} from 'react-icons/fa6';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | 'agb' | null>(null);

  return (
    <footer className="bg-[#07171a] text-neutral-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient teal glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-[#134e5b]/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block" aria-label="Zur Startseite">
              <Logo size="lg" variant="dark" hideTextOnMobile={false} />
            </a>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Zugara ist Ihr verlässlicher deutscher Fachbetrieb für stressfreie Umzüge, diskrete
              Haushaltsauflösungen und besenreine Entrümpelungen. Mit Festpreisgarantie und
              voller Haftpflichtdeckung.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/493089204410"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#25D366] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Zugara auf WhatsApp kontaktieren"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#E4405F] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Zugara auf Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1877F2] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Zugara auf Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0A66C2] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Zugara auf LinkedIn"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#leistungen" className="hover:text-[#e77a28] transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#ablauf" className="hover:text-[#e77a28] transition-colors">
                  Ablauf & Schritte
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="hover:text-[#e77a28] transition-colors">
                  Über Zugara
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#e77a28] transition-colors">
                  Häufige Fragen (FAQ)
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-[#e77a28] transition-colors">
                  Kostenlose Anfrage
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Dienstleistungen
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#leistungen" className="hover:text-[#e77a28] transition-colors">
                  Privat- & Büroumzüge
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-[#e77a28] transition-colors">
                  Haushalts- & Nachlassauflösungen
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-[#e77a28] transition-colors">
                  Keller- & Dachbodenentrümpelung
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-[#e77a28] transition-colors">
                  Möbelmontage & Halteverbotszonen
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-[#e77a28] transition-colors">
                  Umweltgerechte Entsorgung mit Nachweis
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kontakt & Notdienst
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <a
                href="tel:+493089204410"
                className="flex items-center gap-2.5 hover:text-[#e77a28] transition-colors"
              >
                <FaPhone className="w-3.5 h-3.5 text-[#e77a28] shrink-0" />
                <span>+49 (0) 30 8920 4410</span>
              </a>
              <a
                href="mailto:kontakt@zugara.de"
                className="flex items-center gap-2.5 hover:text-[#e77a28] transition-colors"
              >
                <FaEnvelope className="w-3.5 h-3.5 text-[#e77a28] shrink-0" />
                <span>kontakt@zugara.de</span>
              </a>
              <div className="flex items-start gap-2.5">
                <FaLocationDot className="w-3.5 h-3.5 text-[#e77a28] shrink-0 mt-0.5" />
                <span>Bundesweiter Service · Zentrale: Hauptstraße 42, 10827 Berlin</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaClock className="w-3.5 h-3.5 text-[#e77a28] shrink-0" />
                <span>Mo – Sa: 07:00 – 19:00 Uhr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2.5">
            <LogoIcon size={18} />
            <span>© {new Date().getFullYear()} Zugara Umzüge & Haushaltsauflösungen. Alle Rechte vorbehalten.</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setLegalModal('impressum')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <button
              onClick={() => setLegalModal('datenschutz')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
            <button
              onClick={() => setLegalModal('agb')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              AGB
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog Modal for Impressum / Datenschutz / AGB */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0e2a30] text-neutral-200 border border-white/20 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <Logo size="sm" variant="dark" hideTextOnMobile={false} />
              <button
                onClick={() => setLegalModal(null)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <FaXmark className="w-5 h-5" />
              </button>
            </div>

            {legalModal === 'impressum' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Impressum</h3>
                <div className="text-xs space-y-2 text-neutral-300 leading-relaxed">
                  <p>
                    <strong>Zugara Dienstleistungs GmbH i.G.</strong>
                    <br />
                    Hauptstraße 42, 10827 Berlin
                    <br />
                    Deutschland
                  </p>
                  <p>
                    <strong>Vertreten durch:</strong> Die Geschäftsführung
                    <br />
                    <strong>Telefon:</strong> +49 (0) 30 8920 4410
                    <br />
                    <strong>E-Mail:</strong> kontakt@zugara.de
                  </p>
                  <p>
                    <strong>Registergericht:</strong> Amtsgericht Charlottenburg (Berlin)
                    <br />
                    <strong>Umsatzsteuer-ID:</strong> DE 348 291 042
                  </p>
                  <p>
                    <strong>Betriebshaftpflicht:</strong> Allianz Versicherungs-AG, Deckungssumme 2.500.000 € für Personen-, Sach- und Vermögensschäden.
                  </p>
                </div>
              </div>
            )}

            {legalModal === 'datenschutz' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Datenschutzerklärung</h3>
                <div className="text-xs space-y-2 text-neutral-300 leading-relaxed">
                  <p>
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten, die Sie über das Anfrageformular übermitteln (Name, Telefonnummer, E-Mail-Adresse, Objektdetails), werden ausschließlich zur Bearbeitung Ihrer konkreten Anfrage und zur Erstellung eines verbindlichen Angebots verwendet.
                  </p>
                  <p>
                    Es erfolgt keinerlei Weitergabe Ihrer Daten an unbefugte Dritte oder zu Werbezwecken. Nach Abschluss der Auftragsabwicklung bzw. auf Ihren schriftlichen Wunsch werden alle Daten datenschutzkonform gelöscht.
                  </p>
                </div>
              </div>
            )}

            {legalModal === 'agb' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Allgemeine Geschäftsbedingungen (AGB)</h3>
                <div className="text-xs space-y-2 text-neutral-300 leading-relaxed">
                  <p>
                    1. <strong>Geltungsbereich:</strong> Diese AGB gelten für sämtliche Verträge über Umzugsdienstleistungen, Haushaltsauflösungen und Entrümpelungen der Zugara.
                  </p>
                  <p>
                    2. <strong>Festpreisgarantie:</strong> Sofern schriftlich vereinbart, gilt der im Kostenvoranschlag ausgewiesene Betrag als verbindlicher Festpreis für den vereinbarten Leistungsumfang.
                  </p>
                  <p>
                    3. <strong>Haftung & Versicherung:</strong> Es gelten die gesetzlichen Bestimmungen nach § 451 HGB. Ergänzend besteht für jeden Auftrag eine Transport- und Haftpflichtversicherung.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 text-xs font-semibold bg-[#e77a28] hover:bg-[#d15f1b] text-white rounded-lg transition-colors cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
