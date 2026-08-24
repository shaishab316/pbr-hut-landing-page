import React from 'react';
import { Star, Heart, MapPin, CheckCircle2, Quote, Sparkles, UtensilsCrossed, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TrustCommunity: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-[#FDF8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Block: Family-Owned Roots in Jamaica */}
        <div className="bg-white rounded-4xl p-8 sm:p-12 border border-stone-200/80 shadow-md mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Story Text */}
            <div className="lg:col-span-7 text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A5C36]/10 text-[#0A5C36] text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-[#C33600] fill-[#C33600]" />
                Our Jamaican Heritage
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-stone-900 tracking-tight leading-tight">
                A Family Business Serving Kingston &amp; St. Andrew, Jamaica
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                What began as a family roadside smokehouse and neighborhood party supply depot in Kingston has blossomed into Jamaica&apos;s most reliable dual-purpose mobile marketplace.
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                We believe that great food and great celebrations belong together. Every slab of jerk ribs is smoked with allspice pimento wood, every pizza crust is stone-baked fresh, and every event delivery is handled by vetted community drivers who treat your party like their own family gathering.
              </p>

              {/* Stats Bar */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-stone-100 text-center sm:text-left">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#0A5C36]">28,000+</span>
                  <p className="text-xs text-stone-500 font-semibold">Meals Delivered</p>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#F5A623]">2,400+</span>
                  <p className="text-xs text-stone-500 font-semibold">Events Powered</p>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#C33600]">4.9 / 5</span>
                  <p className="text-xs text-stone-500 font-semibold">Customer Rating</p>
                </div>
              </div>
            </div>

            {/* Right Story Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 sm:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Family kitchen and Caribbean cooking team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">🇯🇲</span>
                    <span className="text-sm font-bold">Rooted in Kingston 10</span>
                  </div>
                  <p className="text-xs text-stone-200">Bringing neighbors together through hot food &amp; island hospitality.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5A623]/15 text-[#0A5C36] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            What Our Customers Say
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-stone-900 tracking-tight mb-4">
            Loved by Foodies &amp; Event Planners
          </h2>
          <p className="text-base text-stone-600 font-normal leading-relaxed">
            Real feedback from island hosts, corporate organizers, and regular dinner lovers.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left relative"
            >
              <div className="space-y-4">
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#F5A623]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700">
                    {t.tag}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-stone-700 text-sm leading-relaxed italic font-normal">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#0A5C36]/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-stone-900 flex items-center gap-1">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5C36]" />
                  </h4>
                  <p className="text-xs text-stone-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C33600]" />
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
