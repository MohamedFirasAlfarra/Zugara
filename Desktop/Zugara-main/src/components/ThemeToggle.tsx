import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext.tsx';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`group relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-300/70 dark:border-white/10 bg-white/90 dark:bg-[#0d2328]/90 text-[#0e3b43] dark:text-[#fcd34d] hover:bg-neutral-100 dark:hover:bg-[#134e5b]/40 hover:border-[#e77a28]/40 dark:hover:border-[#e77a28]/40 active:scale-90 transition-all duration-300 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e77a28] overflow-hidden ${className}`}
      aria-label={isDark ? 'Zu hellem Design wechseln' : 'Zu dunklem Design wechseln'}
      title={isDark ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren'}
    >
      {/* Ambient background hover glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          isDark
            ? 'bg-amber-400/10 group-hover:bg-amber-400/20'
            : 'bg-[#134e5b]/10 group-hover:bg-[#134e5b]/15'
        }`}
      />

      {/* Animated Icon Container */}
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon (shown in dark mode) */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isDark
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0 pointer-events-none'
          }`}
          aria-hidden={!isDark}
        >
          <FaSun className="w-4 h-4 text-[#fbbf24] drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] transition-transform duration-300 group-hover:rotate-45" />
        </span>

        {/* Moon Icon (shown in light mode) */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            !isDark
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-90 scale-0 pointer-events-none'
          }`}
          aria-hidden={isDark}
        >
          <FaMoon className="w-4 h-4 text-[#0e3b43] transition-transform duration-300 group-hover:-rotate-12" />
        </span>
      </div>
    </button>
  );
};
