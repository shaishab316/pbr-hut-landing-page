import React from 'react';
import { 
  ZoomIn, 
  CalendarCheck, 
  MapPinCheckInside, 
  CreditCard, 
  History, 
  UserCheck,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { KEY_FEATURES } from '../data/mockData';

export const KeyFeatures: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ZoomIn: <ZoomIn className="w-6 h-6 text-[#0A5C36]" />,
    CalendarCheck: <CalendarCheck className="w-6 h-6 text-[#F5A623]" />,
    MapPinCheckInside: <MapPinCheckInside className="w-6 h-6 text-[#C33600]" />,
    CreditCard: <CreditCard className="w-6 h-6 text-[#0A5C36]" />,
    History: <History className="w-6 h-6 text-[#F5A623]" />,
    UserCheck: <UserCheck className="w-6 h-6 text-[#C33600]" />
  };

  return (
    <section id="features" className="py-20 bg-[#FDF8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A5C36]/10 text-[#0A5C36] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C33600]" />
            Engineered For Speed &amp; Convenience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-extrabold font-display text-stone-900 tracking-tight mb-4">
            Powerful Features at Your Fingertips
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Everything designed to make island food cravings and party logistics seamless, transparent, and enjoyable.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {KEY_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              id={`feature-card-${idx}`}
              className="group bg-white rounded-[24px] p-7 sm:p-8 border border-stone-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0A5C36]/5 transition-all duration-300">
                    {iconMap[feature.iconName] || <CheckCircle2 className="w-6 h-6 text-[#0A5C36]" />}
                  </div>
                  {feature.highlightTag && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 group-hover:bg-[#0A5C36]/10 group-hover:text-[#0A5C36] transition-colors">
                      {feature.highlightTag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold font-display text-stone-900 mb-2.5 group-hover:text-[#0A5C36] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs font-semibold text-[#0A5C36]">
                <span>App Feature</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">✓ Included</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
