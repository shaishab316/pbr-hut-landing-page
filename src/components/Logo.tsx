import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'stacked';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  showSubtitle = true,
  className = '',
  size = 'md',
  layout = 'horizontal'
}) => {
  const isDarkBg = variant === 'dark';

  const sizeScales = {
    sm: 'scale-90',
    md: 'scale-100',
    lg: 'scale-110 sm:scale-125',
    xl: 'scale-125 sm:scale-150'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${sizeScales[size]} ${className}`}>
      {/* SVG Hut Icon exactly matching the brand logo */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 120 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm transition-transform duration-300 hover:scale-105"
        >
          {/* Wispy smoke puff rising from chimney */}
          <path
            d="M68 20 C64 15, 74 12, 70 6 C66 1, 74 0, 72 -3"
            stroke={isDarkBg ? '#E2E8F0' : '#64748B'}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
            className="animate-pulse"
          />
          {/* Blue Chimney with cap */}
          <rect x="62" y="14" width="12" height="18" rx="2" fill="#0EA5E9" stroke="#0284C7" strokeWidth="1.5" />
          <rect x="60" y="12" width="16" height="5" rx="2" fill="#0284C7" />

          {/* Red Roof Triangles & Overhang */}
          <path
            d="M58 8 L104 46 L94 46 L58 18 L22 46 L12 46 Z"
            fill="#E11D48"
            stroke="#BE123C"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Blue Hut Main Body with Horizontal Slats */}
          <path
            d="M26 44 L90 44 L90 78 C90 78, 58 84, 26 78 Z"
            fill="#0284C7"
          />
          {/* Slat Lines */}
          <line x1="28" y1="51" x2="88" y2="51" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="30" y1="58" x2="86" y2="58" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="65" x2="84" y2="65" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="35" y1="72" x2="81" y2="72" stroke="#7DD3FC" strokeWidth="2" strokeLinecap="round" />

          {/* Hut Arch Doorway */}
          <path
            d="M44 79 C44 64, 72 64, 72 79 Z"
            fill={isDarkBg ? '#0A5C36' : '#FAF5EC'}
            stroke="#0284C7"
            strokeWidth="1.5"
          />

          {/* Red Foundation Base Bars */}
          <rect x="14" y="78" width="28" height="5.5" rx="2.5" fill="#E11D48" />
          <rect x="74" y="78" width="28" height="5.5" rx="2.5" fill="#E11D48" />
        </svg>
      </div>

      {/* Brand Text Content matching uploaded logo */}
      <div className={`flex flex-col ${layout === 'stacked' ? 'items-center text-center' : 'items-start text-left'}`}>
        {/* Main "PBR Hut" Line with 3D Embossed Styling */}
        <div className="flex items-baseline gap-1.5 leading-none">
          {/* Orange 3D PBR */}
          <span
            className="text-2xl sm:text-[28px] font-black tracking-tight font-sans text-[#F97316]"
            style={{
              textShadow: '0 2px 0 #C2410C, 0 3px 2px rgba(0,0,0,0.25)',
              filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.15))'
            }}
          >
            PBR
          </span>
          {/* Vibrant Lemon Lime / Yellow Hut */}
          <span
            className="text-2xl sm:text-[28px] font-black tracking-tight font-sans text-[#EAB308]"
            style={{
              textShadow: '0 2px 0 #A16207, 0 3px 2px rgba(0,0,0,0.25)',
              filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.15))'
            }}
          >
            Hut
          </span>
        </div>

        {/* Subtitles */}
        {showSubtitle && (
          <div className="flex flex-col mt-0.5 space-y-0.5">
            {/* Navy Subtitle: Pizzas, Burgers & Ribz */}
            <span className={`text-[11px] font-extrabold tracking-tight leading-tight ${
              isDarkBg ? 'text-cyan-200' : 'text-[#0F2D59]'
            }`}>
              Pizzas, Burgers &amp; Ribz
            </span>
            {/* Script Subtitle: Rotisserie Chicken */}
            <span
              className="text-sm font-bold tracking-normal leading-none font-script text-[#D97706] italic"
              style={{
                textShadow: isDarkBg ? '0 1px 2px rgba(0,0,0,0.6)' : 'none'
              }}
            >
              Rotisserie Chicken &amp; Party Supplies
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

