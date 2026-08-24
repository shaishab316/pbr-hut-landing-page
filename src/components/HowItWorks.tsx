import React from 'react';
import { 
  ShoppingBag, 
  CalendarClock, 
  ShieldCheck, 
  Navigation,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Browse & Choose',
      description: 'Explore authentic Caribbean barbecue, wood-fired pizzas, rotisserie chicken, or event party gear in one unified app.',
      icon: ShoppingBag,
      iconBg: 'bg-[#0A5C36]',
      iconColor: 'text-white',
      badge: 'Step 1'
    },
    {
      num: '02',
      title: 'Order Now or Schedule Later',
      description: 'Choose instant 30-minute delivery to your gate or schedule future catering and event armbands for your weekend party.',
      icon: CalendarClock,
      iconBg: 'bg-[#F5A623]',
      iconColor: 'text-stone-950',
      badge: 'Step 2'
    },
    {
      num: '03',
      title: 'Pay Securely',
      description: 'Checkout easily using Apple Pay, Google Pay, local or international credit cards, and PayPal with bank-grade security.',
      icon: ShieldCheck,
      iconBg: 'bg-[#C33600]',
      iconColor: 'text-white',
      badge: 'Step 3'
    },
    {
      num: '04',
      title: 'Track Live to Your Door',
      description: 'Watch your dedicated courier navigate the Kingston map in real time with live GPS updates and exact arrival countdown.',
      icon: Navigation,
      iconBg: 'bg-[#0A5C36]',
      iconColor: 'text-[#F5A623]',
      badge: 'Step 4'
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-linear-to-b from-[#FAF1E3] to-[#FDF8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A5C36]/10 text-[#0A5C36] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            Simple &amp; Seamless Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-extrabold font-display text-stone-900 tracking-tight mb-4">
            How PBR Hut Works
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            From island-cravings to full party production in four effortless steps.
          </p>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="relative">
          
          {/* Subtle Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-0.5 bg-linear-to-r from-[#0A5C36] via-[#F5A623] to-[#C33600] -translate-y-12 z-0 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  id={`how-it-works-step-${step.num}`}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center relative group"
                >
                  {/* Top Step Pill */}
                  <span className="absolute -top-3 px-3 py-0.5 rounded-full bg-stone-900 text-white text-[11px] font-extrabold tracking-wider uppercase shadow-xs">
                    {step.badge}
                  </span>

                  {/* Colored Icon in Circle */}
                  <div className={`w-16 h-16 rounded-2xl ${step.iconBg} ${step.iconColor} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 group-hover:rotate-2 transition-all duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold font-display text-stone-900 mb-2.5">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {/* Flow Arrow for mobile/tablet */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden mt-4 text-[#F5A623] flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
