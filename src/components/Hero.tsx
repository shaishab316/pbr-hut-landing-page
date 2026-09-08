'use client';
import React from 'react';
import { Apple, Play, ShieldCheck, Navigation, Star, Zap } from 'lucide-react';

const heroAppMockupImg = '/images/hero_app_mockup_1787543128778.jpg';


interface HeroProps {
  onOpenDownload: () => void;
  onOpenMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-linear-to-b from-[#FDF8F0] via-[#FAF1E3] to-[#FDF8F0]"
    >
      {/* Subtle Caribbean decorative background accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0A5C36]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline, Subheadline, CTAs, Delivery Parish Selector */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Top Badge: Jamaican Island Pride */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A5C36]/10 border border-[#0A5C36]/20 text-[#0A5C36] text-xs sm:text-sm font-bold mb-6">
              <span className="font-semibold">St. Thomas and Kingston’s Premier Food & Event App</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C33600] animate-ping" />
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-heading"
              className="text-3.5xl sm:text-4.5xl md:text-5xl lg:text-5.5xl font-extrabold font-display text-stone-900 tracking-tight leading-[1.12] mb-6"
            >
              Real Jamaican Food &amp; Event Essentials,{' '}
              <span className="text-[#0A5C36] relative inline-block">
                Delivered
                <svg className="absolute -bottom-1.5 left-0 w-full h-3 text-[#F5A623]" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{' '}
              to Your Door.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-stone-700 font-normal leading-relaxed max-w-2xl mb-8">
              Order authentic meals or event supplies instantly, or schedule ahead — track your delivery live, right from your phone.
            </p>

            {/* Store Badges CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              {/* iOS Button */}
              <button
                id="hero-ios-download-btn"
                onClick={onOpenDownload}
                className="group inline-flex items-center justify-center gap-3.5 px-6 py-3.5 rounded-2xl bg-stone-900 text-white hover:bg-stone-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Apple className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium leading-none">
                    Download on the
                  </span>
                  <span className="text-base font-bold font-display leading-tight">
                    Apple App Store
                  </span>
                </div>
              </button>

              {/* Android Button */}
              <button
                id="hero-android-download-btn"
                onClick={onOpenDownload}
                className="group inline-flex items-center justify-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[#0A5C36] text-white hover:bg-[#08482a] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <div className="p-1 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current text-[#F5A623]" />
                </div>
                <div className="text-left flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-200 font-medium leading-none">
                    Get it on
                  </span>
                  <span className="text-base font-bold font-display leading-tight">
                    Google Play
                  </span>
                </div>
              </button>
            </div>

            {/* Trust, Rating & Guarantee Highlights */}
            <div className="w-full max-w-xl p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
              {/* Customer Rating & Avatars */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex -space-x-2 overflow-hidden shrink-0">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Customer" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Customer" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" alt="Customer" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-[#F5A623]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-stone-900">4.9 / 5</span>
                  </div>
                  <span className="text-[11px] text-stone-500 font-medium">3,400+ Happy Foodies in Jamaica</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-start sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-200/60">
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#0A5C36]/10 text-[#0A5C36] text-[11px] font-bold">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>~35 Min Delivery</span>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#F5A623]/20 text-stone-900 text-[11px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C33600]" />
                  <span>Live GPS</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Dual Phone Mockup Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">

            {/* Ambient decorative glow around phone */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#0A5C36]/20 via-[#F5A623]/25 to-[#C33600]/20 rounded-[48px] blur-3xl transform scale-95 pointer-events-none" />

            {/* Floating Live Dispatch Card on the Left */}
            <div className="hidden sm:flex absolute -left-6 top-12 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-stone-200/90 items-center gap-3 animate-float-slow">
              <div className="w-10 h-10 rounded-full bg-[#0A5C36] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Navigation className="w-5 h-5 text-[#F5A623] animate-pulse" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-stone-900">Marcus (Driver)</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold">4 min</span>
                </div>
                <span className="text-[11px] text-stone-500">Approaching Waterloo Rd</span>
              </div>
            </div>

            {/* Floating Trust Pill on Bottom Right */}
            <div className="hidden sm:flex absolute -right-2 bottom-8 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-stone-200/90 items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F5A623] text-white flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-stone-950" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-stone-900">100% Guaranteed</p>
                <p className="text-[10px] text-stone-500">Fresh Hot &amp; On Time</p>
              </div>
            </div>

            {/* Dual Phone App Mockup Image Container */}
            <div
              id="hero-phone-mockup"
              onClick={onOpenDownload}
              className="relative z-10 cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
              title="Click to Download App"
            >
              <img
                src={heroAppMockupImg}
                alt="PBR Hut Mobile Ordering App Interface Mockup"
                className="w-full max-w-85 sm:max-w-105 lg:max-w-115 h-auto object-contain drop-shadow-2xl rounded-3xl"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>

        {/* Trust Indicator Row Below Hero */}
        <div
          id="hero-trust-indicators"
          className="mt-16 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/60 border border-stone-200/40">
            <span className="text-lg sm:text-xl font-extrabold font-display text-[#0A5C36]">Family-Owned</span>
            <span className="text-xs text-stone-600 font-semibold mt-0.5">Family-Owned Serving Jamaica</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/60 border border-stone-200/40">
            <span className="text-lg sm:text-xl font-extrabold font-display text-[#0A5C36]">Dual Marketplace</span>
            <span className="text-xs text-stone-600 font-semibold mt-0.5">Marketplace Food & Party Supplies</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/60 border border-stone-200/40">
            <span className="text-lg sm:text-xl font-extrabold font-display text-[#0A5C36]">Live GPS Radar</span>
            <span className="text-xs text-stone-600 font-semibold mt-0.5">Real-Time Driver Tracking</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/60 border border-stone-200/40">
            <span className="text-lg sm:text-xl font-extrabold font-display text-[#0A5C36]">Secure Checkout</span>
            <span className="text-xs text-stone-600 font-semibold mt-0.5">Cards &amp; PayPal Protected</span>
          </div>
        </div>

      </div>
    </section>
  );
};
