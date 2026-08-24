'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

import { Download, Menu as MenuIcon, X, PhoneCall, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenMenu: () => void;
  onOpenDriverApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDownload,
  onOpenMenu,
  onOpenDriverApp
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu & Events', href: '#offerings', onClick: undefined },
    { label: 'How It Works', href: '#how-it-works', onClick: undefined },
    { label: 'Features', href: '#features', onClick: undefined },
    { label: 'App Preview', href: '#screenshots', onClick: undefined },
    { label: 'Contact', href: '#contact', onClick: undefined },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDF8F0]/95 backdrop-blur-md shadow-md py-3 border-b border-[#0A5C36]/10'
          : 'bg-[#FDF8F0]/80 backdrop-blur-xs py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group" id="nav-logo-link">
          <Logo variant="auto" showSubtitle={true} size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" id="desktop-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-semibold text-stone-700 hover:text-[#0A5C36] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C33600] transition-all duration-200 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-download-app-btn"
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold text-white bg-[#C33600] hover:bg-[#a82e00] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download App</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="nav-mobile-toggle-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-200/60 focus:outline-hidden"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-[#FDF8F0] border-b border-[#0A5C36]/15 px-6 pt-4 pb-6 shadow-xl space-y-4 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-stone-800 hover:text-[#0A5C36] py-1.5 border-b border-stone-200/40 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-stone-400">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenMenu();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-sm font-bold text-[#0A5C36] bg-[#0A5C36]/10 text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#F5A623]" />
              Browse Menu & Event Items
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full py-3 px-4 rounded-2xl text-sm font-bold text-white bg-[#C33600] hover:bg-[#a82e00] text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download Mobile App (iOS & Android)
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDriverApp();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#0A5C36] border border-[#0A5C36]/30 text-center"
            >
              🛵 Partner With Us: Apply to Drive
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
