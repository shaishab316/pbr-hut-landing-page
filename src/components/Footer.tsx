'use client';
import React, { useState } from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Share2, ShieldCheck, Send, CheckCircle2, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenMenu: () => void;
  onOpenEvents: () => void;
  onOpenDriverApp: () => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMenu, onOpenEvents, onOpenDriverApp, onOpenDownload }) => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    setIsJoined(true);
    setTimeout(() => {
    }, 3000);
  };
  return (
    <footer id="contact" className="bg-[#101412] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-stone-800/80">

          {/* Brand Info & Physical Location */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" showSubtitle={true} size="md" />

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Authentic Jamaican and International Cuisine meals. Smoked Jerk Ribs, Jerk Pork, Pizzas, Rotisserie Chicken, and party event supplies delivered right to your gate with real-time GPS courier tracking.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <span>Albion, St. Thomas, Jamaica</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>+1 (876) 531-1946</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>orders@pbrhut.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-stone-800/80 hover:bg-[#F5A623] hover:text-stone-950 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-stone-800/80 hover:bg-[#F5A623] hover:text-stone-950 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-stone-800/80 hover:bg-[#F5A623] hover:text-stone-950 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Community"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-stone-800/80 hover:bg-[#F5A623] hover:text-stone-950 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#community" className="hover:text-[#F5A623] transition-colors">About Our Story</a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-[#F5A623] transition-colors">Catering Inquiries</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#F5A623] transition-colors">Press &amp; Media</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5A623] transition-colors">Physical Kitchen</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Customer Hub
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={onOpenDriverApp} className="hover:text-[#F5A623] transition-colors text-left flex items-center gap-1 cursor-pointer">
                  <span>Become a Driver</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenDriverApp} className="hover:text-[#F5A623] transition-colors text-left cursor-pointer">
                  Become a Rider
                </button>
              </li>
              <li>
                <a href="#community" className="hover:text-[#F5A623] transition-colors text-left flex items-center gap-1">
                  <span>Our Story</span>
                </a>
              </li>
              <li>
                <button onClick={onOpenMenu} className="hover:text-[#F5A623] transition-colors text-left flex items-center gap-1 cursor-pointer">
                  <span>Browse Food Menu</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenEvents} className="hover:text-[#F5A623] transition-colors text-left flex items-center gap-1 cursor-pointer">
                  <span>Party Wristbands &amp; Decor</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenDownload} className="hover:text-[#F5A623] transition-colors text-left cursor-pointer">
                  Download iOS / Android App
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Early Access Waitlist */}
          <div className="lg:col-span-4 space-y-3 bg-stone-900/90 p-4 sm:p-5 rounded-2xl border border-stone-800 shadow-xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F5A623]" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
                Join Waitlist
              </h4>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Be the first to get exclusive discount drops, seasonal Jerk deals &amp; VIP event armbands.
            </p>

            {isJoined ? (
              <div className="p-3 bg-stone-800 border border-[#F5A623]/40 rounded-xl flex items-center gap-2.5 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">You&apos;re on the VIP list!</p>
                  <p className="text-[10px] text-stone-400">Check your inbox for J$500 off coupon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-2.5">
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl bg-stone-950 border border-stone-700 text-white placeholder:text-stone-500 focus:outline-none focus:border-[#F5A623] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#C33600] hover:bg-[#a82e00] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join Waitlist</span>
                </button>
              </form>
            )}

            <div className="pt-1 flex items-center justify-between text-[10px] text-stone-500">
              <span>⚡ Instant coupon on launch</span>
              <span>🔒 No spam guarantee</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Jamaican Pride */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span>🇯🇲 Made with pride in Kingston, Jamaica</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} PBR Hut Marketplace. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-[#F5A623]">
              <ShieldCheck className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted
            </span>
            <span>•</span>
            <span>All major cards &amp; PayPal accepted</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
