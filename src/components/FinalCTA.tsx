'use client';

import React, { useState } from 'react';

import { Apple, Play, QrCode, Smartphone, Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenDownload: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDownload }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [smsSent, setSmsSent] = useState(false);

  const handleSendSms = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setSmsSent(true);
    setTimeout(() => {
      setSmsSent(false);
      setPhoneNumber('');
    }, 4000);
  };

  return (
    <section id="download" className="py-20 bg-[#FAF7F2] text-stone-900 relative overflow-hidden border-t border-stone-200/80">
      {/* Decorative Caribbean accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0A5C36]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5A623]/15 border border-[#F5A623]/40 text-[#965A00] text-xs font-bold uppercase tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
          Available Now on iOS &amp; Android
        </div>

        {/* Main Headline */}
        <h2 className="text-3.5xl sm:text-4.5xl md:text-5xl font-extrabold font-display text-stone-900 tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
          Get the App and Taste the Difference
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-stone-600 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Order steaming hot Jamaican meals or reserve event party supplies in seconds. Real-time GPS driver tracking, secure checkout, and island-wide reliability.
        </p>

        {/* Download Badges Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          
          {/* iOS App Store Badge */}
          <button
            id="final-cta-ios-btn"
            onClick={onOpenDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-7 py-4 rounded-2xl bg-stone-900 text-white hover:bg-stone-800 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer group"
          >
            <Apple className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            <div className="text-left flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium leading-none">
                Download on the
              </span>
              <span className="text-lg font-bold font-display leading-tight">
                Apple App Store
              </span>
            </div>
          </button>

          {/* Google Play Store Badge */}
          <button
            id="final-cta-android-btn"
            onClick={onOpenDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-7 py-4 rounded-2xl bg-[#F5A623] text-stone-950 hover:bg-[#e09418] shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer group"
          >
            <div className="p-1.5 bg-stone-950/10 rounded-lg group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-stone-950 text-stone-950" />
            </div>
            <div className="text-left flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-stone-800 font-medium leading-none">
                Get it on
              </span>
              <span className="text-lg font-bold font-display leading-tight">
                Google Play
              </span>
            </div>
          </button>

        </div>


      </div>
    </section>
  );
};
