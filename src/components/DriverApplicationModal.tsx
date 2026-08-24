'use client';

import React, { useState } from 'react';

import { X, CheckCircle2, ShieldCheck, DollarSign, Clock, Send, Sparkles } from 'lucide-react';

interface DriverApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DriverApplicationModal: React.FC<DriverApplicationModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [parish, setParish] = useState('Kingston & St. Andrew');
  const [vehicleType, setVehicleType] = useState('Motorcycle / Scooter');
  const [experience, setExperience] = useState('1-3 years');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-[28px] shadow-2xl overflow-hidden border border-stone-200 text-stone-900">
        
        {/* Header */}
        <div className="bg-[#0A5C36] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#F5A623] text-stone-950 font-extrabold">
              🛵
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-white">Driver Partner Application</h3>
              <p className="text-xs text-emerald-200">Earn with PBR Hut across Jamaica</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0A5C36] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold font-display text-stone-900">Application Received!</h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              Thank you, <span className="font-bold text-stone-900">{fullName}</span>! Our driver onboarding manager in Kingston will call you at <span className="font-bold text-stone-900">+1 (876) {phoneNumber}</span> within 24 hours to verify your documents.
            </p>
            <div className="p-4 rounded-2xl bg-[#FAF5EC] border border-stone-200 text-left text-xs space-y-1.5 text-stone-700">
              <p className="font-bold text-[#0A5C36]">Next Steps:</p>
              <p>• Have your valid Jamaican Driver&apos;s License ready</p>
              <p>• Prepare vehicle registration &amp; valid fitness certificate</p>
              <p>• Download the PBR Hut Driver Companion App</p>
            </div>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="w-full py-3 rounded-xl bg-[#0A5C36] text-white font-bold text-sm cursor-pointer"
            >
              Done &amp; Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Marcus Wright"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0A5C36]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Mobile Phone (WhatsApp) *</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400">
                    +1 (876)
                  </span>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="555-0144"
                    className="w-full pl-20 pr-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0A5C36]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Primary Driving Parish</label>
                <select
                  value={parish}
                  onChange={(e) => setParish(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0A5C36]"
                >
                  <option value="Kingston & St. Andrew">Kingston &amp; St. Andrew</option>
                  <option value="Portmore & St. Catherine">Portmore &amp; St. Catherine</option>
                  <option value="Ocho Rios / St. Ann">Ocho Rios / St. Ann</option>
                  <option value="Montego Bay / St. James">Montego Bay / St. James</option>
                  <option value="Mandeville / Manchester">Mandeville / Manchester</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Delivery Vehicle Type</label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0A5C36]"
                >
                  <option value="Motorcycle / Scooter">Motorcycle / Scooter (Fast Delivery)</option>
                  <option value="Motor Car / Sedan">Motor Car / Sedan</option>
                  <option value="Station Wagon / Probox">Station Wagon / Probox</option>
                  <option value="Small Van / Pickup (Events)">Small Van / Pickup (Event Catering)</option>
                </select>
              </div>
            </div>

            <div className="text-left">
              <label className="block text-xs font-bold text-stone-700 mb-1">Driving Experience</label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#0A5C36]"
              >
                <option value="Under 1 year">Under 1 year</option>
                <option value="1-3 years">1 - 3 years</option>
                <option value="3-5 years">3 - 5 years</option>
                <option value="5+ years">5+ years (Experienced Island Courier)</option>
              </select>
            </div>

            {/* Guaranteed Perks */}
            <div className="p-3.5 rounded-xl bg-[#0A5C36]/5 border border-[#0A5C36]/15 flex items-center justify-between text-xs text-[#0A5C36] font-semibold">
              <span>💰 Keep 100% Tips</span>
              <span>•</span>
              <span>⚡ Weekly Direct Deposit</span>
              <span>•</span>
              <span>🕒 Flexible Shifts</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#F5A623] hover:bg-[#e09418] text-stone-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Driver Application</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
