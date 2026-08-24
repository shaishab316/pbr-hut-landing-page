'use client';

import React from 'react';

import { Flame, PartyPopper, Clock, ShieldCheck, Sparkles, Check } from 'lucide-react';

interface DualOfferingProps {
  onOpenMenu?: () => void;
  onOpenEvents?: () => void;
}

export const DualOffering: React.FC<DualOfferingProps> = ({ onOpenMenu, onOpenEvents }) => {
  return (
    <section id="offerings" className="py-20 bg-[#FDF8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5A623]/15 text-[#0A5C36] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C33600]" />
            What We Deliver
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-extrabold font-display text-stone-900 tracking-tight mb-4">
            One App. Two Ways to Celebrate &amp; Eat Well.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Whether it’s dinner for the family tonight or 500 VIP guests for the weekend festival, PBR Hut delivers authentic quality without compromise.
          </p>
        </div>

        {/* Two Large Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Restaurant Meals */}
          <div 
            id="offering-card-restaurant"
            className="group bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#C33600] to-[#F5A623]" />

            <div>
              {/* Image with Tag */}
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-16/10 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                  alt="Authentic Jamaican BBQ Jerk Ribs & Rotisserie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Floating Category Pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0A5C36] text-white text-xs font-bold shadow-md">
                  <Flame className="w-3.5 h-3.5 text-[#F5A623]" />
                  Hot Kitchen &amp; Grill
                </div>

                {/* Speed Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-[#F5A623]" />
                    <span>Average Delivery: 25-35 Mins</span>
                  </div>
                  <span className="bg-[#C33600] font-bold px-2.5 py-1 rounded-lg">Piping Hot</span>
                </div>
              </div>

              {/* Text Information */}
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-stone-900 mb-3">
                Restaurant Meals
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Freshly smoked Caribbean jerk ribs, 48-hour rotisserie chicken, crispy wood-fired jerk pizzas, gourmet pepper jack burgers, and traditional Jamaican sides like golden festival and sweet plantains.
              </p>

              {/* Highlights list */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0A5C36]/10 text-[#0A5C36] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-3" />
                  </span>
                  <span>Cooked to order with authentic Jamaican Scotch bonnet &amp; pimento</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0A5C36]/10 text-[#0A5C36] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-3" />
                  </span>
                  <span>Delivered in thermal insulation warmers to protect crispness</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0A5C36]/10 text-[#0A5C36] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-3" />
                  </span>
                  <span>Instant courier dispatch or advance family dinner bookings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Event Supplies */}
          <div 
            id="offering-card-events"
            className="group bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#F5A623] to-[#0A5C36]" />

            <div>
              {/* Image with Tag */}
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-16/10 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80"
                  alt="Festival Event Supplies, VIP Armbands & Party Lights"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Floating Category Pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5A623] text-stone-950 text-xs font-bold shadow-md">
                  <PartyPopper className="w-3.5 h-3.5" />
                  Event Party Essentials
                </div>

                {/* Lead Time Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F5A623]" />
                    <span>Commercial &amp; Private Events</span>
                  </div>
                  <span className="bg-[#0A5C36] font-bold px-2.5 py-1 rounded-lg">Same-Day / Reserve</span>
                </div>
              </div>

              {/* Text Information */}
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-stone-900 mb-3">
                Event Supplies &amp; Wristbands
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Everything for parties, clubs, weddings &amp; corporate gatherings. Order custom holographic VIP armbands, balloon arches, catering chafing dishes, and party lighting for express drop-off or scheduled reservation.
              </p>

              {/* Highlights list */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#F5A623]/20 text-[#0A5C36] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-3" />
                  </span>
                  <span>Waterproof, tamper-proof Tyvek &amp; vinyl event wristbands in bulk</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#F5A623]/20 text-[#0A5C36] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-3" />
                  </span>
                  <span>Complete buffet chafing dish sets, burners &amp; palm-leaf tableware</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#F5A623]/20 text-[#0A5C36] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-3" />
                  </span>
                  <span>Book delivery up to 60 days ahead with guaranteed date holds</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
