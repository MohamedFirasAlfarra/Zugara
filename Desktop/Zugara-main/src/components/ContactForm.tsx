import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal.tsx';
import { Button } from './Button.tsx';
import { Logo, LogoIcon } from './Logo.tsx';
import {
  FaCheck,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCircleCheck,
  FaXmark,
  FaCalendarDays,
  FaLocationDot,
} from 'react-icons/fa6';

interface ContactFormProps {
  selectedService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Umzug',
    date: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [showToast, setShowToast] = useState(false);

  // Sync selectedService prop with state if changed
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceType: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen an.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Bitte geben Sie Ihre Telefonnummer für Rückfragen an.';
    } else if (!/^[0-9+/\s\-()]{6,25}$/.test(formData.phone)) {
      newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Bitte wählen Sie die Art der Dienstleistung aus.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic front-end processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setShowToast(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'Umzug',
        date: '',
        location: '',
        message: '',
      });
      setErrors({});
    }, 700);
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 relative scroll-mt-24">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 rounded-full bg-[#228b9f]/5 dark:bg-[#134e5b]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <ScrollReveal direction="up" delayMs={50}>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-[#d15f1b] dark:text-[#f69147] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#e77a28]" />
              <span>Unverbindliche Anfrage</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={120}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-[#0a2d34] dark:text-[#f0f8fa] leading-tight [text-wrap:balance]">
              Jetzt kostenloses Festpreisangebot erhalten
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={190}>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-[#b9dee5]/80 [text-wrap:balance]">
              Füllen Sie das Formular kurz aus oder rufen Sie uns an. Wir melden uns verlässlich
              innerhalb von 24 Stunden bei Ihnen.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" delayMs={100}>
              <div className="bg-white dark:bg-[#0d2328] rounded-2xl p-6 sm:p-8 border border-[#0e3b43]/10 dark:border-white/10 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-[#0a2d34] dark:text-[#f0f8fa]">
                  Persönliche Sofort-Beratung
                </h3>
                <p className="text-sm text-neutral-600 dark:text-[#b9dee5]/80 leading-relaxed">
                  Sie möchten nicht tippen oder haben eine eilige Anfrage? Unser Kundenservice berät
                  Sie gerne persönlich am Telefon:
                </p>

                <div className="space-y-4 pt-2">
                  <a
                    href="tel:+493089204410"
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-[#0e3b43]/5 dark:bg-[#228b9f]/10 text-[#0e3b43] dark:text-[#e0f2f5] hover:bg-[#e77a28]/10 hover:text-[#e77a28] dark:hover:text-[#f69147] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#e77a28] text-white flex items-center justify-center shrink-0">
                      <FaPhone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">Telefonische Zentrale</div>
                      <div className="text-base font-bold">030 8920 4410</div>
                    </div>
                  </a>

                  <a
                    href="mailto:kontakt@zugara.de"
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-[#0e3b43]/5 dark:bg-[#228b9f]/10 text-[#0e3b43] dark:text-[#e0f2f5] hover:bg-[#e77a28]/10 hover:text-[#e77a28] dark:hover:text-[#f69147] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#134e5b] dark:bg-[#228b9f] text-white flex items-center justify-center shrink-0">
                      <FaEnvelope className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">E-Mail für Angebote</div>
                      <div className="text-base font-bold">kontakt@zugara.de</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 text-neutral-700 dark:text-[#dbeef2]">
                    <div className="w-10 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 flex items-center justify-center shrink-0">
                      <FaClock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">Erreichbarkeit</div>
                      <div className="text-xs font-semibold">Mo – Sa: 07:00 – 19:00 Uhr</div>
                    </div>
                  </div>
                </div>

                {/* Benefits bullets */}
                <div className="pt-4 border-t border-neutral-100 dark:border-white/5 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-[#b9dee5]/90">
                    <FaCheck className="w-3.5 h-3.5 text-[#e77a28]" />
                    <span>Garantiert keine Weitergabe Ihrer Kontaktdaten</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-[#b9dee5]/90">
                    <FaCheck className="w-3.5 h-3.5 text-[#e77a28]" />
                    <span>Verbindlicher Festpreis nach kurzer Besichtigung</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-[#b9dee5]/90">
                    <FaCheck className="w-3.5 h-3.5 text-[#e77a28]" />
                    <span>Schnelle Besichtigungstermine auch kurzfristig</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delayMs={150}>
              <div className="bg-white dark:bg-[#0d2328] rounded-2xl p-6 sm:p-9 border border-[#0e3b43]/10 dark:border-white/10 shadow-lg relative">
                {/* Official Brand Header inside Form */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-200/80 dark:border-white/10">
                  <Logo size="sm" hideTextOnMobile={false} />
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#ea7200]/10 text-[#ea7200] border border-[#ea7200]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ea7200] animate-pulse" />
                    Festpreisgarantie
                  </span>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="zugara-name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0e3b43] dark:text-[#dbeef2] mb-1.5"
                    >
                      Ihr Name <span className="text-[#e77a28]">*</span>
                    </label>
                    <input
                      id="zugara-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="z. B. Martina Becker"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-neutral-50/50 dark:bg-[#081b1f] text-[#0a2d34] dark:text-[#f0f8fa] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e77a28] transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-neutral-300 dark:border-neutral-700'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* 2-Column: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="zugara-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0e3b43] dark:text-[#dbeef2] mb-1.5"
                      >
                        Telefonnummer <span className="text-[#e77a28]">*</span>
                      </label>
                      <input
                        id="zugara-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="z. B. 0170 1234567"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-neutral-50/50 dark:bg-[#081b1f] text-[#0a2d34] dark:text-[#f0f8fa] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e77a28] transition-all ${
                          errors.phone
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-neutral-300 dark:border-neutral-700'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="zugara-email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0e3b43] dark:text-[#dbeef2] mb-1.5"
                      >
                        E-Mail-Adresse <span className="text-[#e77a28]">*</span>
                      </label>
                      <input
                        id="zugara-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="beispiel@mail.de"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-neutral-50/50 dark:bg-[#081b1f] text-[#0a2d34] dark:text-[#f0f8fa] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e77a28] transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-neutral-300 dark:border-neutral-700'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* 2-Column: Service Type & Desired Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="zugara-service"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0e3b43] dark:text-[#dbeef2] mb-1.5"
                      >
                        Art der Dienstleistung <span className="text-[#e77a28]">*</span>
                      </label>
                      <select
                        id="zugara-service"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-sm bg-neutral-50/50 dark:bg-[#081b1f] text-[#0a2d34] dark:text-[#f0f8fa] focus:outline-none focus:ring-2 focus:ring-[#e77a28] transition-all cursor-pointer"
                      >
                        <option value="Umzug">Umzug (Privat oder Gewerbe)</option>
                        <option value="Haushaltsauflösung">Haushaltsauflösung</option>
                        <option value="Entrümpelung">Entrümpelung (Keller, Dach, etc.)</option>
                        <option value="Kombination">Kombination (z. B. Umzug & Entrümpelung)</option>
                        <option value="Sonstiges">Sonstige Anfrage</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="zugara-date"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0e3b43] dark:text-[#dbeef2] mb-1.5 flex items-center justify-between"
                      >
                        <span>Wunschtermin</span>
                        <span className="text-[10px] font-normal text-neutral-400 lowercase">optional</span>
                      </label>
                      <div className="relative">
                        <input
                          id="zugara-date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-sm bg-neutral-50/50 dark:bg-[#081b1f] text-[#0a2d34] dark:text-[#f0f8fa] focus:outline-none focus:ring-2 focus:ring-[#e77a28] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location or Postal Code */}
                  <div>
                    <label
                      htmlFor="zugara-location"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0e3b43] dark:text-[#dbeef2] mb-1.5 flex items-center justify-between"
                    >
                      <span>Einsatzort / Postleitzahl</span>
                      <span className="text-[10px] font-normal text-neutral-400 lowercase">optional</span>
                    </label>
                    <div className="relative">
                      <input
                        id="zugara-location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="z. B. 10115 Berlin oder Von Berlin nach Leipzig"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-sm bg-neutral-50/50 dark:bg-[#081b1f] text-[#0a2d34] dark:text-[#f0f8fa] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e77a28] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="zugara-message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0e3b43] dark:text-[#dbeef2] mb-1.5"
                    >
                      Nachricht / Details zum Objekt
                    </label>
                    <textarea
                      id="zugara-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Beschreiben Sie kurz Ihr Vorhaben (z. B. 3-Zimmer-Wohnung, 2. OG ohne Fahrstuhl, ca. 75 m², schwere Möbel wie Klavier vorhanden, etc.)..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-sm bg-neutral-50/50 dark:bg-[#081b1f] text-[#0a2d34] dark:text-[#f0f8fa] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e77a28] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      icon={
                        isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <FaPaperPlane className="w-4 h-4" />
                        )
                      }
                    >
                      {isSubmitting ? 'Anfrage wird übertragen...' : 'Kostenlose Anfrage absenden'}
                    </Button>
                  </div>

                  <p className="text-center text-[11px] text-neutral-500 dark:text-neutral-400">
                    Ihre Daten werden vertraulich behandelt und ausschließlich zur Angebotserstellung verwendet.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Success Toast Notification */}
      {showToast && submittedData && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100%-3rem)] bg-white dark:bg-[#0d2328] rounded-2xl shadow-2xl border-2 border-[#e77a28] p-5 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <LogoIcon size={32} />
            </div>
            <div className="flex-grow space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#0a2d34] dark:text-[#f0f8fa]">
                  Anfrage erfolgreich gesendet!
                </h4>
                <button
                  onClick={() => setShowToast(false)}
                  className="text-neutral-400 hover:text-neutral-600 dark:hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                  aria-label="Benachrichtigung schließen"
                >
                  <FaXmark className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-neutral-600 dark:text-[#b9dee5]/90 leading-relaxed">
                Vielen Dank, <strong>{submittedData.name}</strong>. Wir haben Ihre Anfrage für{' '}
                <strong className="text-[#e77a28]">{submittedData.serviceType}</strong> erhalten und
                melden uns innerhalb von 24 Stunden mit einem individuellen Festpreisangebot.
              </p>
              <div className="pt-2 text-[11px] text-neutral-500 dark:text-neutral-400">
                Telefonischer Rückruf an: <span className="font-mono">{submittedData.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
