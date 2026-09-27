import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-xs py-2 px-3.5 gap-1.5 rounded-lg',
    md: 'text-sm py-2.5 px-5 gap-2 rounded-xl font-semibold',
    lg: 'text-base py-3.5 px-7 gap-2.5 rounded-xl font-bold tracking-tight',
  }[size];

  // Specific bespoke styling & unique hover effects for each variant
  const variantClasses = {
    // Warm Amber / Orange CTA with high-energy radiant glow & shine sweep
    accent: `
      bg-gradient-to-r from-[#e77a28] via-[#f59e0b] to-[#d15f1b]
      text-white
      shadow-[0_4px_14px_0_rgba(231,122,40,0.35)]
      hover:shadow-[0_14px_30px_-4px_rgba(231,122,40,0.55)]
      hover:-translate-y-0.5 hover:scale-[1.015]
      active:translate-y-0 active:scale-[0.98]
      focus-visible:ring-2 focus-visible:ring-[#e77a28] focus-visible:ring-offset-2
    `,
    // Deep Teal Primary button with calm, solid authority and smooth luminous teal lift
    primary: `
      bg-gradient-to-r from-[#0e3b43] to-[#134e5b]
      dark:from-[#134e5b] dark:to-[#1a6e7e]
      text-white
      shadow-[0_4px_14px_0_rgba(14,59,67,0.3)]
      hover:shadow-[0_14px_28px_-4px_rgba(14,59,67,0.45)]
      dark:hover:shadow-[0_14px_28px_-4px_rgba(34,139,159,0.35)]
      hover:-translate-y-0.5 hover:scale-[1.015]
      active:translate-y-0 active:scale-[0.98]
      focus-visible:ring-2 focus-visible:ring-[#134e5b] focus-visible:ring-offset-2
    `,
    // Outline with crisp border, illuminated fill on hover, and light sweep
    outline: `
      border-2 border-[#0e3b43]/20 dark:border-[#88c4d1]/30
      text-[#0e3b43] dark:text-[#f0f8fa]
      bg-transparent
      hover:bg-[#0e3b43]/5 dark:hover:bg-white/5
      hover:border-[#0e3b43] dark:hover:border-[#88c4d1]
      hover:shadow-[0_8px_20px_-4px_rgba(14,59,67,0.15)]
      hover:-translate-y-0.5
      active:translate-y-0 active:scale-[0.98]
      focus-visible:ring-2 focus-visible:ring-[#0e3b43]
    `,
    // Translucent glass on dark or light backgrounds
    glass: `
      bg-white/70 dark:bg-[#0e3b43]/40 backdrop-blur-md
      border border-black/5 dark:border-white/10
      text-[#0e3b43] dark:text-[#e0f2f5]
      hover:bg-white/90 dark:hover:bg-[#0e3b43]/70
      hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)]
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    // Clean quiet link/ghost button
    ghost: `
      text-[#134e5b] dark:text-[#88c4d1]
      hover:bg-[#0e3b43]/8 dark:hover:bg-white/8
      hover:text-[#0e3b43] dark:hover:text-white
      hover:-translate-y-0.5
      active:translate-y-0
    `,
  }[variant];

  const baseClasses = `
    relative inline-flex items-center justify-center
    cursor-pointer overflow-hidden
    select-none transition-all duration-300 ease-out
    whitespace-nowrap shrink-0
    ${fullWidth ? 'w-full' : ''}
    ${sizeClasses}
    ${variantClasses}
    ${className}
  `;

  // Inner element containing the shine beam
  const shineSweepOverlay = (
    <span
      className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-22deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[250%]"
      aria-hidden="true"
    />
  );

  const content = (
    <>
      {shineSweepOverlay}
      {icon && iconPosition === 'left' && <span className="relative z-10 shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`group ${baseClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`group ${baseClasses}`} {...props}>
      {content}
    </button>
  );
};
