'use client';

import React, { useState } from 'react';

import { 
  Sparkles, 
  MapPin, 
  Clock, 
  CreditCard, 
  CheckCircle2, 
  Navigation, 
  ShoppingBag, 
  Search,
  Flame,
  PartyPopper,
  Calendar,
  FileText,
  Repeat,
  Phone
} from 'lucide-react';
import { APP_SCREENS } from '../data/mockData';

export const AppScreenshots: React.FC = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-b from-[#FDF8F0] via-[#FAF1E3] to-[#FDF8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C33600]/10 text-[#C33600] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Intuitive Mobile Interface
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-extrabold font-display text-stone-900 tracking-tight mb-4">
            See It In Action
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Designed for effortless ordering on both iOS and Android. Take a tour through our core application screens.
          </p>
        </div>

        {/* Screen Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {APP_SCREENS.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => setActiveScreenIndex(idx)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeScreenIndex === idx
                  ? 'bg-[#0A5C36] text-white shadow-md scale-105'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80 shadow-xs'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeScreenIndex === idx ? 'bg-[#F5A623]' : 'bg-stone-300'}`} />
              <span>{screen.badge}: {screen.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* 4 Phone Mockups Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          
          {/* SCREEN 1: Product Browsing */}
          <div className={`relative flex flex-col items-center transition-all duration-300 ${
            activeScreenIndex === 0 ? 'scale-105 ring-4 ring-[#0A5C36]/30 rounded-[44px]' : 'opacity-90 hover:opacity-100'
          }`}>
            <div className="w-[260px] sm:w-[270px] h-[540px] bg-stone-900 rounded-[40px] p-2.5 shadow-2xl border-4 border-stone-800 flex flex-col overflow-hidden">
              {/* Notch */}
              <div className="w-20 h-4 bg-stone-950 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              
              {/* Screen Body */}
              <div className="flex-1 bg-[#FAF5EC] rounded-[30px] overflow-hidden flex flex-col text-left font-sans text-stone-800 text-xs">
                {/* Header */}
                <div className="bg-[#0A5C36] text-white p-3 pt-2">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-bold text-[11px]">🇯🇲 PBR Hut Menu</span>
                    <span className="bg-[#F5A623] text-stone-950 font-bold px-1.5 py-0.5 rounded text-[9px]">Open</span>
                  </div>
                  {/* Mock search */}
                  <div className="bg-white/15 rounded-lg px-2 py-1 flex items-center gap-1 text-white/80 text-[10px]">
                    <Search className="w-3 h-3" />
                    <span>Search Jerk Ribs, Armbands...</span>
                  </div>
                </div>

                {/* Items */}
                <div className="p-2 space-y-2 flex-1 overflow-hidden">
                  <div className="bg-white p-2 rounded-xl shadow-2xs border border-stone-100 flex gap-2">
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80" className="w-12 h-12 rounded-lg object-cover" alt="Ribs" referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-bold text-[10px]">PBR Jerk Ribz</p>
                      <p className="text-[8px] text-stone-500">Smoked St. Louis Cut</p>
                      <p className="text-[10px] font-extrabold text-[#0A5C36] mt-0.5">J$2,850</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-xl shadow-2xs border border-stone-100 flex gap-2">
                    <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80" className="w-12 h-12 rounded-lg object-cover" alt="Pizza" referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-bold text-[10px]">Jerk Plantain Pizza</p>
                      <p className="text-[8px] text-stone-500">Wood-Fired Crust</p>
                      <p className="text-[10px] font-extrabold text-[#0A5C36] mt-0.5">J$2,600</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-xl shadow-2xs border border-stone-100 flex gap-2">
                    <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80" className="w-12 h-12 rounded-lg object-cover" alt="Armbands" referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-bold text-[10px]">VIP Event Armbands</p>
                      <p className="text-[8px] text-stone-500">100pc Holographic</p>
                      <p className="text-[10px] font-extrabold text-[#0A5C36] mt-0.5">J$4,500</p>
                    </div>
                  </div>
                </div>

                <div className="p-2 bg-white border-t border-stone-200 text-center">
                  <span className="text-[9px] font-bold text-[#0A5C36]">Screen 1: Product Browsing</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs font-bold text-stone-800">1. Instant Catalog</p>
          </div>

          {/* SCREEN 2: Cart & Schedule */}
          <div className={`relative flex flex-col items-center transition-all duration-300 ${
            activeScreenIndex === 1 ? 'scale-105 ring-4 ring-[#0A5C36]/30 rounded-[44px]' : 'opacity-90 hover:opacity-100'
          }`}>
            <div className="w-[260px] sm:w-[270px] h-[540px] bg-stone-900 rounded-[40px] p-2.5 shadow-2xl border-4 border-stone-800 flex flex-col overflow-hidden">
              <div className="w-20 h-4 bg-stone-950 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>
              
              <div className="flex-1 bg-[#FAF5EC] rounded-[30px] overflow-hidden flex flex-col text-left font-sans text-stone-800 text-xs">
                <div className="bg-[#0A5C36] text-white p-3 pt-2">
                  <span className="font-bold text-[11px]">🛒 Checkout &amp; Scheduling</span>
                </div>

                <div className="p-2.5 space-y-2.5 flex-1 overflow-hidden">
                  {/* Delivery Mode Toggle */}
                  <div className="bg-white p-2 rounded-xl border border-stone-200">
                    <p className="text-[9px] font-bold text-stone-500 mb-1">DELIVERY TIMING</p>
                    <div className="grid grid-cols-2 gap-1 text-[9px] font-bold">
                      <span className="bg-emerald-50 text-[#0A5C36] p-1.5 rounded-lg text-center border border-emerald-200">
                        ⚡ Instant (30m)
                      </span>
                      <span className="bg-[#F5A623] text-stone-950 p-1.5 rounded-lg text-center font-extrabold shadow-2xs">
                        📅 Scheduled
                      </span>
                    </div>
                  </div>

                  {/* Scheduled Date selection */}
                  <div className="bg-white p-2 rounded-xl border border-stone-200 space-y-1">
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="font-bold text-stone-600">Event Date:</span>
                      <span className="text-[#0A5C36] font-bold">Sat, Aug 29</span>
                    </div>
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="font-bold text-stone-600">Time Slot:</span>
                      <span className="text-[#0A5C36] font-bold">4:00 PM - 5:00 PM</span>
                    </div>
                  </div>

                  {/* Order Total */}
                  <div className="bg-stone-50 p-2 rounded-xl border border-stone-200 space-y-1 text-[9px]">
                    <div className="flex justify-between">
                      <span>Subtotal (3 items):</span>
                      <span className="font-bold">J$9,950</span>
                    </div>
                    <div className="flex justify-between text-[#0A5C36] font-extrabold text-[10px]">
                      <span>Total Due:</span>
                      <span>J$10,450 (US$67)</span>
                    </div>
                  </div>

                  <button className="w-full py-2 bg-[#C33600] text-white font-bold rounded-xl text-[10px] text-center">
                    Confirm &amp; Pay via Card / PayPal
                  </button>
                </div>

                <div className="p-2 bg-white border-t border-stone-200 text-center">
                  <span className="text-[9px] font-bold text-[#C33600]">Screen 2: Cart &amp; Booking</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs font-bold text-stone-800">2. Scheduled Booking</p>
          </div>

          {/* SCREEN 3: Live GPS Radar */}
          <div className={`relative flex flex-col items-center transition-all duration-300 ${
            activeScreenIndex === 2 ? 'scale-105 ring-4 ring-[#0A5C36]/30 rounded-[44px]' : 'opacity-90 hover:opacity-100'
          }`}>
            <div className="w-[260px] sm:w-[270px] h-[540px] bg-stone-900 rounded-[40px] p-2.5 shadow-2xl border-4 border-stone-800 flex flex-col overflow-hidden">
              <div className="w-20 h-4 bg-stone-950 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              
              <div className="flex-1 bg-[#FAF5EC] rounded-[30px] overflow-hidden flex flex-col text-left font-sans text-stone-800 text-xs relative">
                {/* Live GPS Map Background simulation */}
                <div className="absolute inset-0 bg-[#E5E9EC] overflow-hidden">
                  {/* Roads & Vector simulation */}
                  <svg className="w-full h-full opacity-60" viewBox="0 0 200 300">
                    <path d="M-10,50 Q100,80 220,60" stroke="#CBD5E1" strokeWidth="12" fill="none" />
                    <path d="M40,0 L70,300" stroke="#CBD5E1" strokeWidth="14" fill="none" />
                    <path d="M150,0 L120,300" stroke="#CBD5E1" strokeWidth="10" fill="none" />
                    <path d="M0,180 Q100,160 200,200" stroke="#38BDF8" strokeWidth="4" strokeDasharray="4 2" fill="none" />
                  </svg>
                  
                  {/* Delivery Route Path */}
                  <div className="absolute top-28 left-16 w-3.5 h-3.5 rounded-full bg-[#0A5C36] ring-4 ring-emerald-300" />
                  <div className="absolute top-44 left-24 w-6 h-6 rounded-full bg-[#C33600] text-white flex items-center justify-center shadow-lg animate-bounce">
                    <Navigation className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="absolute top-52 right-12 w-4 h-4 rounded-full bg-[#F5A623] ring-4 ring-amber-200" />
                </div>

                {/* Top Status Bar */}
                <div className="relative z-10 bg-white/90 backdrop-blur-md m-2 p-2 rounded-xl shadow-sm border border-stone-200">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[10px] text-stone-800">Order #8492</span>
                    <span className="text-[9px] font-extrabold text-[#0A5C36] bg-emerald-100 px-1.5 py-0.5 rounded">
                      ETA: 6 Mins
                    </span>
                  </div>
                </div>

                {/* Bottom Driver Card */}
                <div className="relative z-10 mt-auto bg-white p-3 rounded-t-2xl shadow-lg border-t border-stone-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#0A5C36] text-white flex items-center justify-center font-bold text-xs">
                      M
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[10px]">Marcus (Courier)</p>
                      <p className="text-[8px] text-stone-500">Toyota Probox • 4.98 ★</p>
                    </div>
                    <button className="p-1.5 rounded-lg bg-[#0A5C36] text-white">
                      <Phone className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#0A5C36] h-full w-[78%]" />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs font-bold text-stone-800">3. Live GPS Radar</p>
          </div>

          {/* SCREEN 4: Order History & Receipts */}
          <div className={`relative flex flex-col items-center transition-all duration-300 ${
            activeScreenIndex === 3 ? 'scale-105 ring-4 ring-[#0A5C36]/30 rounded-[44px]' : 'opacity-90 hover:opacity-100'
          }`}>
            <div className="w-[260px] sm:w-[270px] h-[540px] bg-stone-900 rounded-[40px] p-2.5 shadow-2xl border-4 border-stone-800 flex flex-col overflow-hidden">
              <div className="w-20 h-4 bg-stone-950 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              </div>
              
              <div className="flex-1 bg-[#FAF5EC] rounded-[30px] overflow-hidden flex flex-col text-left font-sans text-stone-800 text-xs">
                <div className="bg-[#0A5C36] text-white p-3 pt-2">
                  <span className="font-bold text-[11px]">📜 Order History &amp; Reorder</span>
                </div>

                <div className="p-2 space-y-2 flex-1 overflow-hidden">
                  <div className="bg-white p-2 rounded-xl border border-stone-200 shadow-2xs">
                    <div className="flex justify-between items-center text-[9px] mb-1">
                      <span className="font-bold text-stone-800">Aug 21 • Delivered</span>
                      <span className="text-emerald-700 font-bold">J$7,350</span>
                    </div>
                    <p className="text-[8px] text-stone-500">2x PBR Jerk Ribz + 100 VIP Armbands</p>
                    <button className="mt-2 w-full py-1 bg-stone-100 hover:bg-stone-200 text-[#0A5C36] font-bold rounded text-[8px] flex items-center justify-center gap-1">
                      <Repeat className="w-2.5 h-2.5" /> 1-Tap Reorder
                    </button>
                  </div>

                  <div className="bg-white p-2 rounded-xl border border-stone-200 shadow-2xs">
                    <div className="flex justify-between items-center text-[9px] mb-1">
                      <span className="font-bold text-stone-800">Aug 14 • Delivered</span>
                      <span className="text-emerald-700 font-bold">J$4,200</span>
                    </div>
                    <p className="text-[8px] text-stone-500">1x Rotisserie Chicken &amp; Plantain Pizza</p>
                    <button className="mt-2 w-full py-1 bg-stone-100 hover:bg-stone-200 text-[#0A5C36] font-bold rounded text-[8px] flex items-center justify-center gap-1">
                      <FileText className="w-2.5 h-2.5" /> View Receipt (PDF)
                    </button>
                  </div>
                </div>

                <div className="p-2 bg-white border-t border-stone-200 text-center">
                  <span className="text-[9px] font-bold text-[#0A5C36]">Screen 4: Digital Receipts</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs font-bold text-stone-800">4. Order History</p>
          </div>

        </div>

      </div>
    </section>
  );
};
