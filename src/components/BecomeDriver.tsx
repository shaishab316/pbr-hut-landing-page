'use client';
import React from 'react';
import { DollarSign, Clock, Navigation, BellRing, ShieldCheck, ArrowRight, TrendingUp } from 'lucide-react';

interface BecomeDriverProps {
  onOpenDriverApp: () => void;
}

export const BecomeDriver: React.FC<BecomeDriverProps> = ({ onOpenDriverApp }) => {
  return (
    <section id="drivers" className="py-20 bg-[#0A5C36] text-white relative overflow-hidden">
      {/* Caribbean decorative ambient accents */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#C33600]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Driver Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/30 text-[#F5A623] text-xs font-bold uppercase tracking-wider mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Delivery Partners Wanted in Jamaica
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-extrabold font-display text-white tracking-tight leading-tight mb-6">
              Earn On Your Own Schedule —{' '}
              <span className="text-[#F5A623]">Become a Delivery Partner</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Deliver hot food and event supplies across Kingston, St. Andrew, and beyond. Keep 100% of your customer tips with weekly direct bank payouts and flexible driving shifts.
            </p>

            {/* 4 Core Driver Perks / Bullet Points with Gold Accents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">

              <div className="bg-black/25 backdrop-blur-xs border border-white/15 rounded-2xl p-4 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#F5A623] text-stone-950 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Flexible Hours</h4>
                  <p className="text-xs text-stone-300">Drive whenever you want. Full-time or weekend side hustle.</p>
                </div>
              </div>

              <div className="bg-black/25 backdrop-blur-xs border border-white/15 rounded-2xl p-4 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#F5A623] text-stone-950 shrink-0">
                  <BellRing className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Instant Order Alerts</h4>
                  <p className="text-xs text-stone-300">See pickup, drop-off, and guaranteed earnings before you accept.</p>
                </div>
              </div>

              <div className="bg-black/25 backdrop-blur-xs border border-white/15 rounded-2xl p-4 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#F5A623] text-stone-950 shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Built-in GPS Navigation</h4>
                  <p className="text-xs text-stone-300">Turn-by-turn routing optimized for Jamaican traffic and parish roads.</p>
                </div>
              </div>

              <div className="bg-black/25 backdrop-blur-xs border border-white/15 rounded-2xl p-4 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#F5A623] text-stone-950 shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Fast Weekly Deposits</h4>
                  <p className="text-xs text-stone-300">Direct deposit to NCB, Scotiabank, JN Bank, or Sagicor every Tuesday.</p>
                </div>
              </div>

            </div>

            {/* CTA Button (Gold / Mango Color) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <span className="text-xs text-stone-300 text-center sm:text-left flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
                Must have valid Jamaican driver’s license &amp; insured vehicle/bike
              </span>
            </div>

          </div>

          {/* Right Column: Driver App Phone & Earnings Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-85">

              {/* Background Glow */}
              <div className="absolute inset-0 bg-[#F5A623]/20 rounded-[44px] blur-2xl transform scale-95" />

              {/* Driver Phone Frame */}
              <div className="relative bg-stone-950 rounded-[40px] p-3 shadow-2xl border-4 border-stone-800 text-stone-900 overflow-hidden font-sans">
                {/* Notch */}
                <div className="w-24 h-4 bg-stone-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                {/* Inner Screen */}
                <div className="bg-[#FAF5EC] rounded-[30px] p-3.5 space-y-3 text-left">

                  {/* Driver Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#0A5C36] text-[#F5A623] font-extrabold flex items-center justify-center text-xs">
                        🇯🇲
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-stone-900">Marcus Wright</p>
                        <p className="text-[9px] text-[#0A5C36] font-bold">● Active Online</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold bg-emerald-100 text-[#0A5C36] px-2 py-0.5 rounded-full">
                      4.98 ★ Driver
                    </span>
                  </div>

                  {/* Today's Earnings Card */}
                  <div className="bg-linear-to-br from-[#0A5C36] to-[#08482A] text-white p-3.5 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center text-[10px] text-emerald-200">
                      <span>Today&apos;s Earnings</span>
                      <span className="text-[#F5A623] font-bold">8 Trips Completed</span>
                    </div>
                    <div className="text-2xl font-extrabold font-display text-white mt-1">
                      J$18,450 <span className="text-xs text-[#F5A623] font-normal">(+$3,200 tips)</span>
                    </div>
                  </div>

                  {/* Incoming Dispatch Request Card */}
                  <div className="bg-white p-3 rounded-2xl border-2 border-[#F5A623] shadow-md space-y-2 relative animate-pulse-slow">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-extrabold text-[#C33600] uppercase tracking-wider bg-orange-100 px-1.5 py-0.5 rounded">
                        New Order Request
                      </span>
                      <span className="text-[11px] font-extrabold text-[#0A5C36]">J$2,400 Pay</span>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-stone-900">PBR Hut Kitchen (Constant Spring Rd)</p>
                      <p className="text-[9px] text-stone-500">→ Dropoff: Barbican, Kingston 6 (3.2 km)</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button className="py-2 rounded-xl bg-stone-100 text-stone-600 text-[10px] font-bold">
                        Decline
                      </button>
                      <button
                        onClick={onOpenDriverApp}
                        className="py-2 rounded-xl bg-[#0A5C36] text-white text-[10px] font-extrabold text-center hover:bg-[#08482a]"
                      >
                        Accept (14s)
                      </button>
                    </div>
                  </div>

                  {/* Quick stats row */}
                  <div className="grid grid-cols-3 gap-1.5 text-center text-[9px] text-stone-600 bg-white p-2 rounded-xl border border-stone-200">
                    <div>
                      <p className="font-bold text-stone-900">99.4%</p>
                      <p>Acceptance</p>
                    </div>
                    <div className="border-x border-stone-200">
                      <p className="font-bold text-stone-900">22 min</p>
                      <p>Avg Delivery</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#0A5C36]">100%</p>
                      <p>Tips Kept</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
