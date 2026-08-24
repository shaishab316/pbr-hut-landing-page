'use client';

import React, { useState } from 'react';

import { X, Search, Flame, PartyPopper, ShoppingBag, Clock, Sparkles, Filter, Check } from 'lucide-react';
import { RESTAURANT_MENU, EVENT_SUPPLIES } from '../data/mockData';
import { MenuItem, EventItem } from '../types';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'food' | 'events';
  onDownloadApp: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'food',
  onDownloadApp
}) => {
  const [tab, setTab] = useState<'food' | 'events'>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [foodCategory, setFoodCategory] = useState<string>('all');
  const [eventCategory, setEventCategory] = useState<string>('all');
  const [currency, setCurrency] = useState<'JMD' | 'USD'>('JMD');

  if (!isOpen) return null;

  const filteredFood = RESTAURANT_MENU.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = foodCategory === 'all' || item.category === foodCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredEvents = EVENT_SUPPLIES.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = eventCategory === 'all' || item.category === eventCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF5EC] w-full max-w-4xl max-h-[90vh] rounded-[28px] shadow-2xl flex flex-col overflow-hidden border border-stone-200">
        
        {/* Modal Top Header */}
        <div className="bg-[#0A5C36] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#F5A623] text-stone-950 font-extrabold">
              {tab === 'food' ? <Flame className="w-5 h-5" /> : <PartyPopper className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-white">
                {tab === 'food' ? 'PBR Hut Restaurant Menu' : 'Event Essentials & Wristbands'}
              </h3>
              <p className="text-xs text-emerald-200">
                Order for instant delivery or advance scheduling across Jamaica
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Currency toggle */}
            <div className="bg-black/30 rounded-xl p-1 flex items-center text-xs font-bold text-white">
              <button
                onClick={() => setCurrency('JMD')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${currency === 'JMD' ? 'bg-[#F5A623] text-stone-950' : 'text-emerald-200'}`}
              >
                JMD (J$)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${currency === 'USD' ? 'bg-[#F5A623] text-stone-950' : 'text-emerald-200'}`}
              >
                USD ($)
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Filter & Tab Bar */}
        <div className="bg-white px-5 sm:px-6 py-3.5 border-b border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Main Dual Tab Switcher */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => { setTab('food'); setSearchQuery(''); }}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                tab === 'food'
                  ? 'bg-[#0A5C36] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Kitchen Meals ({RESTAURANT_MENU.length})</span>
            </button>
            <button
              onClick={() => { setTab('events'); setSearchQuery(''); }}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                tab === 'events'
                  ? 'bg-[#C33600] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <PartyPopper className="w-3.5 h-3.5" />
              <span>Event Supplies ({EVENT_SUPPLIES.length})</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${tab === 'food' ? 'jerk ribz, pizza...' : 'armbands, lights...'}`}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-100 border border-stone-200 text-xs font-medium text-stone-800 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#0A5C36]"
            />
          </div>
        </div>

        {/* Scrollable Items Grid */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          
          {tab === 'food' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredFood.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-2xs hover:shadow-md transition-all flex gap-4 items-start"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm font-bold text-stone-900 leading-snug">{item.name}</h4>
                      {item.isPopular && (
                        <span className="text-[10px] font-extrabold bg-[#F5A623]/20 text-[#0A5C36] px-2 py-0.5 rounded-md whitespace-nowrap">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-500 line-clamp-2 mb-2 leading-relaxed">{item.description}</p>
                    
                    <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                      <div className="flex flex-col">
                        <span className="text-sm font-extrabold text-[#0A5C36]">
                          {currency === 'JMD' ? `J$${item.priceJMD.toLocaleString()}` : `$${item.priceUSD.toFixed(2)}`}
                        </span>
                        <span className="text-[10px] text-stone-400">Prep: {item.prepTime}</span>
                      </div>

                      <button
                        onClick={onDownloadApp}
                        className="px-3 py-1.5 rounded-xl bg-[#0A5C36] hover:bg-[#08482a] text-white text-xs font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Order in App</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredEvents.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-2xs hover:shadow-md transition-all flex gap-4 items-start"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm font-bold text-stone-900 leading-snug">{item.name}</h4>
                      <span className="text-[10px] font-bold bg-orange-100 text-[#C33600] px-2 py-0.5 rounded-md whitespace-nowrap">
                        {item.unit}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 line-clamp-2 mb-2 leading-relaxed">{item.description}</p>
                    
                    <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                      <div className="flex flex-col">
                        <span className="text-sm font-extrabold text-[#0A5C36]">
                          {currency === 'JMD' ? `J$${item.priceJMD.toLocaleString()}` : `$${item.priceUSD.toFixed(2)}`}
                        </span>
                        <span className="text-[10px] text-stone-400">Lead time: {item.leadTime}</span>
                      </div>

                      <button
                        onClick={onDownloadApp}
                        className="px-3 py-1.5 rounded-xl bg-[#C33600] hover:bg-[#a82e00] text-white text-xs font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Book in App</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Bottom CTA Footer */}
        <div className="bg-white p-4 sm:p-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <Sparkles className="w-4 h-4 text-[#F5A623]" />
            <span>Install the mobile app to customize spice levels and schedule deliveries.</span>
          </div>

          <button
            onClick={onDownloadApp}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0A5C36] hover:bg-[#08482a] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Download Mobile App for Instant Ordering</span>
          </button>
        </div>

      </div>
    </div>
  );
};
