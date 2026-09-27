import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustStrip } from './components/TrustStrip.tsx';
import { Services } from './components/Services.tsx';
import { Process } from './components/Process.tsx';
import { About } from './components/About.tsx';
import { Faq } from './components/Faq.tsx';
import { ContactForm } from './components/ContactForm.tsx';
import { Footer } from './components/Footer.tsx';
import { Chatbot } from './components/Chatbot.tsx';

function MainApp() {
  const [selectedService, setSelectedService] = useState<string>('Umzug');

  const handleSelectService = (service: string) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] dark:bg-[#07171a] text-[#1a2e33] dark:text-[#e2f1f3] transition-colors duration-300 font-sans selection:bg-[#ea7200] selection:text-white">
      {/* 1. Sticky Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Process Section (Numbered 4-step timeline) */}
        <Process />

        {/* 6. About Section */}
        <About />

        {/* 6.5. FAQ Section (Accordion) */}
        <Faq />

        {/* 7. Contact / Quote Request Form */}
        <ContactForm selectedService={selectedService} />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Floating Gemini AI Support Chatbot */}
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
