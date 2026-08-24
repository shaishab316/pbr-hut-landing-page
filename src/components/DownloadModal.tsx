'use client';
import { X, Apple, Play, Sparkles } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-[28px] shadow-2xl overflow-hidden border border-stone-200 text-stone-900">
        
        {/* Header */}
        <div className="bg-[#0A5C36] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#F5A623] text-stone-950 font-extrabold">
              📱
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-white">Download PBR Hut App</h3>
              <p className="text-xs text-emerald-200">Real Jamaican Food &amp; Event Essentials</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-center">
          
          {/* Welcome Promo Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#0A5C36] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            Get J$500 OFF your 1st meal order!
          </div>

          {/* App Store Buttons */}
          <div className="space-y-3">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Redirecting to Apple App Store for PBR Hut App..."); }}
              className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-md transition-all"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-wider text-stone-400 block leading-none">Download on</span>
                <span className="text-sm font-bold font-display">Apple App Store (iOS)</span>
              </div>
            </a>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Redirecting to Google Play Store for PBR Hut App..."); }}
              className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-[#0A5C36] hover:bg-[#08482a] text-white font-bold text-sm shadow-md transition-all"
            >
              <div className="p-1 bg-white/20 rounded-lg">
                <Play className="w-4 h-4 fill-current text-[#F5A623]" />
              </div>
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-wider text-emerald-200 block leading-none">Get it on</span>
                <span className="text-sm font-bold font-display">Google Play (Android)</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
