import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  hideTextOnMobile?: boolean;
  variant?: 'light' | 'dark' | 'auto';
}

/**
 * Pure Vector SVG Emblem extracted directly from the uploaded Zugara logo:
 * - Upper golden-orange beak / wing swoosh
 * - Dynamic deep teal outer circular ribbon
 * - Inner depth crescent curve
 * - 100% transparent background (no white box)
 */
export const LogoIcon: React.FC<{
  size?: number;
  className?: string;
  animated?: boolean;
}> = ({ size = 42, className = '', animated = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${
        animated ? 'hover:rotate-12 transition-transform duration-500' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Teal Gradient: Main outer circular loop */}
        <linearGradient
          id="zugaraLogoTeal"
          x1="25"
          y1="25"
          x2="175"
          y2="175"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#007986" />
          <stop offset="50%" stopColor="#005d66" />
          <stop offset="100%" stopColor="#00434a" />
        </linearGradient>

        {/* Teal Gradient 2: Inner crescent flow */}
        <linearGradient
          id="zugaraLogoTealInner"
          x1="160"
          y1="170"
          x2="50"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#004d55" />
          <stop offset="50%" stopColor="#006c77" />
          <stop offset="100%" stopColor="#008a98" />
        </linearGradient>

        {/* Golden Orange Gradient: Dynamic upper wing swoosh */}
        <linearGradient
          id="zugaraLogoOrange"
          x1="90"
          y1="20"
          x2="180"
          y2="105"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="45%" stopColor="#ea7200" />
          <stop offset="100%" stopColor="#d96600" />
        </linearGradient>

        {/* Soft shadow for depth between layers */}
        <filter
          id="zugaraLayerShadow"
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
          filterUnits="userSpaceOnUse"
        >
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#00262b" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* 1. Golden Amber/Orange Top-Right Wing Swoosh */}
      <path
        d="M 98,22
           C 126,23 151,36 167,56
           C 181,73 186,96 182,118
           C 180,105 174,93 164,83
           C 152,71 136,63 118,60
           C 106,58 95,60 84,65
           C 91,51 100,37 106,23
           C 103,22 100,22 98,22 Z"
        fill="url(#zugaraLogoOrange)"
      />

      {/* 2. Main Teal Outer Circle Loop */}
      <path
        d="M 98,22
           C 54,23 18,59 18,103
           C 18,147 54,183 98,183
           C 142,183 178,147 178,103
           C 178,98 177,93 176,88
           C 172,99 164,109 154,117
           C 140,128 122,135 103,135
           C 76,135 53,119 46,95
           C 41,78 47,60 59,47
           C 70,35 86,26 103,24
           C 101,23 99,22 98,22 Z"
        fill="url(#zugaraLogoTeal)"
      />

      {/* 3. Layered Inner Swoosh / Crescent */}
      <path
        d="M 46,95
           C 53,119 76,135 103,135
           C 122,135 140,128 154,117
           C 165,108 173,96 177,83
           C 174,103 165,121 150,135
           C 134,149 113,158 91,158
           C 57,158 29,132 26,98
           C 25,87 28,76 33,66
           C 33,76 39,87 46,95 Z"
        fill="url(#zugaraLogoTealInner)"
        opacity="0.95"
      />

      {/* 4. Upper Teal Fold Tip Overlap */}
      <path
        d="M 98,22
           C 104,22 110,23 116,25
           C 111,36 103,48 95,60
           C 87,55 79,53 71,53
           C 66,53 61,54 57,56
           C 68,40 82,28 98,22 Z"
        fill="url(#zugaraLogoTeal)"
        filter="url(#zugaraLayerShadow)"
      />
    </svg>
  );
};

/**
 * Complete Zugara Logo with Emblem and Authentic Typography:
 * Matching the exact structure of ZugaraLogo.png
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  hideTextOnMobile = false,
  variant = 'auto',
}) => {
  const iconDimensions = {
    sm: 34,
    md: 44,
    lg: 56,
    xl: 72,
  }[size];

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  }[size];

  const subtitleSizes = {
    sm: 'text-[7.5px] tracking-[0.14em]',
    md: 'text-[9.5px] tracking-[0.16em]',
    lg: 'text-[11.5px] tracking-[0.18em]',
    xl: 'text-[13.5px] tracking-[0.2em]',
  }[size];

  // Text color based on variant
  const titleColor = {
    light: 'text-[#004f58]',
    dark: 'text-[#ffffff]',
    auto: 'text-[#004f58] dark:text-[#f0f8fa]',
  }[variant];

  const subtitleColor = {
    light: 'text-[#005a64]',
    dark: 'text-[#b9dee5]',
    auto: 'text-[#005a64] dark:text-[#b9dee5]',
  }[variant];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* 1. The Circular Ring Emblem */}
      <LogoIcon size={iconDimensions} animated />

      {/* 2. Brand Wordmark & Two-Line Subtitle (matching ZugaraLogo.png) */}
      <div
        className={`flex-col leading-none ${
          hideTextOnMobile ? 'hidden sm:flex' : 'flex'
        }`}
      >
        <span
          className={`font-display font-black tracking-tight ${titleSizes} ${titleColor}`}
        >
          ZUGARA
        </span>

        {showSubtitle && (
          <div className={`flex flex-col font-sans font-semibold uppercase ${subtitleSizes} ${subtitleColor} mt-0.5`}>
            <span>UMZÜGE • HAUSHALTSAUFLÖSUNGEN</span>
            <span className="tracking-[0.22em]">ENTRÜMPELUNGEN</span>
          </div>
        )}
      </div>
    </div>
  );
};
