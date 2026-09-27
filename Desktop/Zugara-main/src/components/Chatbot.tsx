import React, { useState, useRef, useEffect } from 'react';
import { LogoIcon } from './Logo.tsx';
import {
  FaXmark,
  FaPaperPlane,
  FaPhone,
  FaRotateRight,
  FaUser,
} from 'react-icons/fa6';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

/**
 * Pure, high-clarity Chat + AI Sparkle Icon
 * Represents both a friendly modern chat bubble and smart AI capabilities.
 */
const AiChatBubbleIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Speech Bubble Contour */}
    <path
      d="M12 3C6.75 3 2.5 6.8 2.5 11.5C2.5 13.8 3.5 15.9 5.2 17.4C5.0 18.7 4.3 19.9 3.5 20.6C3.3 20.8 3.4 21.2 3.7 21.2C5.7 21.2 7.7 20.1 8.9 19.3C9.9 19.8 10.9 20 12 20C17.25 20 21.5 16.2 21.5 11.5C21.5 6.8 17.25 3 12 3Z"
      fill="currentColor"
    />
    {/* Central Radiant AI Sparkle inside the Chat Bubble */}
    <path
      d="M12 6.8C12.15 8.2 13 9.05 14.4 9.2C13 9.35 12.15 10.2 12 11.6C11.85 10.2 11 9.35 9.6 9.2C11 9.05 11.85 8.2 12 6.8Z"
      fill="#ffffff"
    />
    {/* Secondary Accent Chat Dots in Zugara Gold */}
    <circle cx="8" cy="14.2" r="1.1" fill="#fcd34d" />
    <circle cx="12" cy="14.2" r="1.1" fill="#ffffff" />
    <circle cx="16" cy="14.2" r="1.1" fill="#fcd34d" />
  </svg>
);

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      text: 'Guten Tag! Ich bin Ihr persönlicher Zugara KI-Assistent. Wie kann ich Ihnen heute bei Ihrem Umzug, Ihrer Haushaltsauflösung oder Entrümpelung helfen?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    }
  }, [isOpen, messages]);

  const handleSend = async (userText?: string) => {
    const textToSend = (userText || input).trim();
    if (!textToSend || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Netzwerkfehler');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        text: data.reply || 'Entschuldigung, ich konnte keine Antwort verarbeiten.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        text: 'Es gab ein kurzes Verbindungsproblem. Sie erreichen unser Team auch direkt telefonisch unter 030 8920 4410!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        text: 'Unterhaltung zurückgesetzt. Wie kann ich Ihnen behilflich sein?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const quickPrompts = [
    'Was kostet ein Umzug?',
    'Wie läuft eine Haushaltsauflösung ab?',
    'Was bedeutet besenrein?',
    'Termin kurzfristig möglich?',
  ];

  return (
    <>
      {/* 1. Chat Dialog Window with Smooth Fluid Animation */}
      <div
        className={`fixed bottom-22 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[560px] max-h-[82vh] flex flex-col rounded-3xl bg-white/95 dark:bg-[#091f24]/95 backdrop-blur-xl border border-[#005057]/15 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden origin-bottom-right transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none invisible'
        }`}
        role="dialog"
        aria-label="Zugara KI-Berater Chat"
        aria-hidden={!isOpen}
      >
          {/* Chat Header */}
          <div className="relative px-5 py-4 bg-gradient-to-r from-[#005057] via-[#00656e] to-[#007986] text-white flex items-center justify-between shadow-sm select-none">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 p-1 flex items-center justify-center border border-white/20">
                  <LogoIcon size={30} />
                </div>
                {/* Online pulse indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#005057] animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold tracking-tight">Zugara KI-Berater</h3>
                  <span className="px-1.5 py-0.5 text-[9px] font-semibold tracking-wider uppercase bg-[#ea7200] text-white rounded-md">
                    Gemini AI
                  </span>
                </div>
                <p className="text-[11px] text-white/80">Support für Umzüge & Räumungen</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                type="button"
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                title="Unterhaltung neu starten"
                aria-label="Chat zurücksetzen"
              >
                <FaRotateRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                title="Chat schließen"
                aria-label="Chat schließen"
              >
                <FaXmark className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Direct Call Info Strip */}
          <div className="bg-[#f0f8fa] dark:bg-[#07171a] px-4 py-2 border-b border-neutral-200/70 dark:border-white/5 flex items-center justify-between text-xs">
            <span className="text-[11px] text-neutral-600 dark:text-[#b9dee5]/80">
              Dringende Termine?
            </span>
            <a
              href="tel:+493089204410"
              className="inline-flex items-center gap-1.5 font-bold text-[#ea7200] hover:underline"
            >
              <FaPhone className="w-3 h-3" />
              <span>030 8920 4410</span>
            </a>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin text-xs sm:text-sm">
            {messages.map((message) => {
              const isAssistant = message.role === 'assistant';

              return (
                <div
                  key={message.id}
                  className={`flex items-start gap-2.5 ${
                    isAssistant ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {isAssistant && (
                    <div className="w-7 h-7 rounded-full bg-[#005057] flex items-center justify-center shrink-0 mt-0.5 shadow-xs p-0.5 border border-white/10">
                      <LogoIcon size={18} />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 shadow-xs space-y-1 ${
                      isAssistant
                        ? 'bg-neutral-100 dark:bg-[#0e2a30] text-[#0a2d34] dark:text-[#f0f8fa] rounded-tl-xs border border-neutral-200/70 dark:border-white/5'
                        : 'bg-gradient-to-r from-[#ea7200] to-[#d96600] text-white rounded-tr-xs font-medium'
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <div
                      className={`text-[9.5px] text-right ${
                        isAssistant ? 'text-neutral-400 dark:text-neutral-500' : 'text-white/70'
                      }`}
                    >
                      {message.timestamp}
                    </div>
                  </div>

                  {!isAssistant && (
                    <div className="w-7 h-7 rounded-full bg-[#ea7200] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <FaUser className="w-3 h-3" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2.5 text-xs text-neutral-500 dark:text-neutral-400">
                <div className="w-7 h-7 rounded-full bg-[#005057] flex items-center justify-center shrink-0 p-0.5 border border-white/10">
                  <LogoIcon size={18} className="animate-spin-slow" />
                </div>
                <div className="px-4 py-2.5 rounded-2xl rounded-tl-xs bg-neutral-100 dark:bg-[#0e2a30] border border-neutral-200/70 dark:border-white/5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ea7200] animate-bounce" />
                  <span
                    className="w-2 h-2 rounded-full bg-[#007986] animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-[#ea7200] animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  />
                  <span className="ml-1 text-[11px] text-neutral-500 dark:text-neutral-400">
                    Zugara KI tippt...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips (when few messages) */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar border-t border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-white/[0.02]">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  type="button"
                  className="px-2.5 py-1 text-[11px] font-medium text-[#005057] dark:text-[#b9dee5] bg-white dark:bg-[#0d2328] border border-neutral-200 dark:border-white/10 rounded-lg hover:border-[#ea7200] hover:text-[#ea7200] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-2xs"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Form */}
          <div className="p-3 bg-white dark:bg-[#091f24] border-t border-neutral-200/80 dark:border-white/10 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Schreiben Sie Ihre Frage (Deutsch oder العربية)..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-neutral-100 dark:bg-[#061619] border border-neutral-200 dark:border-white/10 text-[#0a2d34] dark:text-[#f0f8fa] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#ea7200] transition-all disabled:opacity-50"
            />

            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              type="button"
              className="w-10 h-10 rounded-xl bg-[#ea7200] hover:bg-[#d15f1b] disabled:bg-neutral-300 dark:disabled:bg-neutral-800 text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shrink-0 cursor-pointer"
              title="Nachricht senden"
              aria-label="Nachricht senden"
            >
              <FaPaperPlane className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>

      {/* 2. Floating Action Button (FAB) - Perfectly Round Chat Shape, Matching Zugara Colors */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center group">
        {/* Subtle Tooltip on Hover */}
        <div
          className={`hidden sm:flex items-center gap-2 mr-3 px-3.5 py-1.5 rounded-full bg-[#005057] dark:bg-[#0d2328] text-white text-xs font-semibold shadow-lg border border-white/10 pointer-events-none transition-all duration-300 ${
            isOpen ? 'opacity-0 translate-x-2' : 'opacity-0 group-hover:opacity-100 translate-x-0'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#ea7200] animate-ping" />
          <span>Zugara KI-Chat</span>
        </div>

        {/* The Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Chatbot schließen' : 'Zugara KI-Chat öffnen'}
          className="relative group/btn w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#004d54] via-[#00606a] to-[#ea7200] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(0,77,84,0.38)] hover:shadow-[0_12px_32px_rgba(234,114,0,0.55)] hover:-translate-y-1 hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border-2 border-white/30 dark:border-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ea7200]/50"
        >
          {/* Ambient Inner Gloss & Shine Sweep Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {/* Morphing Icons with buttery smooth cross-fade rotation */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isOpen
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-90 scale-0 pointer-events-none'
              }`}
              aria-hidden={!isOpen}
            >
              <FaXmark className="w-5 h-5 text-white transition-transform duration-200 hover:rotate-90" />
            </span>

            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                !isOpen
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 rotate-90 scale-0 pointer-events-none'
              }`}
              aria-hidden={isOpen}
            >
              <AiChatBubbleIcon className="w-6 h-6 text-white transition-transform duration-300 group-hover/btn:scale-110" />
            </span>
          </div>

          {/* Online Indicator Badge on the edge */}
          {!isOpen && (
            <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#004d54] shadow-xs" />
          )}
        </button>
      </div>
    </>
  );
};
