import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  hideTextOnMobile?: boolean;
  variant?: 'light' | 'dark' | 'auto';
}

export const LogoIcon: React.FC<{
  size?: number;
  className?: string;
  animated?: boolean;
}> = ({ size = 42, className = '', animated = false }) => {
  return (
    <img
      src="/ZugaraLogo.png"
      alt="Zugara Logo"
      width={size}
      height={size}
      className={`shrink-0 select-none ${
        animated ? 'hover:scale-105 transition-transform duration-500' : ''
      } ${className}`}
    />
  );
};

/**
 * Complete Zugara Logo using the uploaded image
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  hideTextOnMobile = false,
  variant = 'auto',
}) => {
  const logoDimensions = {
    sm: 120,
    md: 180,
    lg: 240,
    xl: 300,
  }[size];

  return (
    <img
      src="/ZugaraLogo.png"
      alt="ZUGARA - UMZÜGE • HAUSHALTSAUFLÖSUNGEN ENTRÜMPELUNGEN"
      width={logoDimensions}
      height={logoDimensions}
      className={`shrink-0 select-none ${className}`}
    />
  );
};
