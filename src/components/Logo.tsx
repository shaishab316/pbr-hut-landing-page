import React from 'react';
import Image from 'next/image';
import logoImg from '../assets/images/logo.png';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'stacked';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-18 sm:h-20',
    xl: 'h-24 sm:h-28',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={logoImg}
        alt="PBR Hut & Events Logo"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 hover:scale-105`}
        priority
      />
    </div>
  );
};


