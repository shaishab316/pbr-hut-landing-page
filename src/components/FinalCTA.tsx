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

        {/* QR Code & SMS Link Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* QR Code Column */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-[#FAF7F2] border border-stone-200/70 rounded-2xl text-stone-900 shadow-xs">
              {/* Stylized QR Code */}
              <div className="p-2 bg-white rounded-xl shadow-xs">
                <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
                  {/* Outer corner squares */}
                  <rect x="5" y="5" width="28" height="28" rx="4" fill="#0A5C36" />
                  <rect x="9" y="9" width="20" height="20" rx="2" fill="white" />
                  <rect x="13" y="13" width="12" height="12" rx="1" fill="#0A5C36" />

                  <rect x="67" y="5" width="28" height="28" rx="4" fill="#0A5C36" />
                  <rect x="71" y="9" width="20" height="20" rx="2" fill="white" />
                  <rect x="75" y="13" width="12" height="12" rx="1" fill="#0A5C36" />

                  <rect x="5" y="67" width="28" height="28" rx="4" fill="#0A5C36" />
                  <rect x="9" y="71" width="20" height="20" rx="2" fill="white" />
                  <rect x="13" y="75" width="12" height="12" rx="1" fill="#0A5C36" />

                  {/* QR Pattern Data Dots */}
                  <rect x="38" y="8" width="6" height="6" fill="#0A5C36" />
                  <rect x="48" y="14" width="6" height="6" fill="#C33600" />
                  <rect x="56" y="8" width="6" height="6" fill="#0A5C36" />
                  <rect x="40" y="24" width="8" height="6" fill="#F5A623" />
                  <rect x="52" y="24" width="6" height="6" fill="#0A5C36" />

                  <rect x="8" y="38" width="6" height="6" fill="#0A5C36" />
                  <rect x="18" y="44" width="6" height="8" fill="#0A5C36" />
                  <rect x="28" y="38" width="6" height="6" fill="#C33600" />

                  <rect x="38" y="38" width="8" height="8" fill="#0A5C36" />
                  <rect x="50" y="42" width="10" height="6" fill="#F5A623" />
                  <rect x="64" y="38" width="8" height="8" fill="#0A5C36" />
                  <rect x="76" y="44" width="6" height="6" fill="#0A5C36" />
                  <rect x="86" y="38" width="6" height="6" fill="#C33600" />

                  <rect x="38" y="52" width="6" height="10" fill="#0A5C36" />
                  <rect x="48" y="56" width="8" height="6" fill="#0A5C36" />
                  <rect x="60" y="52" width="6" height="10" fill="#0A5C36" />

                  <rect x="38" y="68" width="8" height="8" fill="#F5A623" />
                  <rect x="50" y="72" width="12" height="6" fill="#0A5C36" />
                  <rect x="66" y="68" width="8" height="8" fill="#0A5C36" />
                  <rect x="78" y="74" width="6" height="6" fill="#C33600" />
                  <rect x="88" y="68" width="6" height="10" fill="#0A5C36" />

                  <rect x="44" y="82" width="8" height="8" fill="#0A5C36" />
                  <rect x="56" y="86" width="6" height="6" fill="#0A5C36" />
                  <rect x="66" y="82" width="10" height="8" fill="#F5A623" />
                  <rect x="80" y="86" width="6" height="6" fill="#0A5C36" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-stone-800 mt-2 flex items-center gap-1">
                <QrCode className="w-3.5 h-3.5 text-[#0A5C36]" />
                Scan to Download Instant
              </span>
            </div>

            {/* SMS Link Column */}
            <div className="md:col-span-7 text-left space-y-3">
              <h4 className="text-lg font-bold text-stone-900 flex items-center gap-2 font-display">
                <Smartphone className="w-5 h-5 text-[#C33600]" />
                Or text the app link to your phone
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Enter your mobile number and we’ll SMS you a direct link to install the app with a J$500 welcome discount on your first meal.
              </p>

              <form onSubmit={handleSendSms} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-500">
                      🇯🇲 +1 (876)
                    </span>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="555-0199"
                      className="w-full pl-24 pr-4 py-3 rounded-xl bg-[#FAF7F2] border border-stone-300 text-stone-900 placeholder:text-stone-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-[#F5A623]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-[#C33600] hover:bg-[#a82e00] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-sm hover:shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Link</span>
                  </button>
                </div>

                {smsSent && (
                  <div className="text-xs font-bold text-[#0A5C36] flex items-center gap-1.5 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C36]" />
                    Link sent! Check your phone messages to download.
                  </div>
                )}
              </form>

              <div className="pt-2 flex items-center gap-4 text-[11px] text-stone-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0A5C36]" /> No spam, instant delivery
                </span>
                <span>•</span>
                <span>iOS 14+ &amp; Android 9+</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
