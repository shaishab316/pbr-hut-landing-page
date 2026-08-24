'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { DualOffering } from '../components/DualOffering';
import { HowItWorks } from '../components/HowItWorks';
import { KeyFeatures } from '../components/KeyFeatures';
import { AppScreenshots } from '../components/AppScreenshots';
import { BecomeDriver } from '../components/BecomeDriver';
import { TrustCommunity } from '../components/TrustCommunity';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { MenuModal } from '../components/MenuModal';
import { DownloadModal } from '../components/DownloadModal';

export default function Home() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
  const [menuInitialTab, setMenuInitialTab] = useState<'food' | 'events'>('food');

  const handleOpenFoodMenu = () => {
    setMenuInitialTab('food');
    setIsMenuModalOpen(true);
  };

  const handleOpenEventSupplies = () => {
    setMenuInitialTab('events');
    setIsMenuModalOpen(true);
  };

  const handleOpenDownload = () => {
    setIsDownloadModalOpen(true);
  };

  const handleOpenDriverApp = () => {
    setIsDriverModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F0] text-stone-800 flex flex-col selection:bg-[#F5A623]/30 selection:text-[#0A5C36]">
      
      {/* 1. Navigation Bar */}
      <Navbar
        onOpenDownload={handleOpenDownload}
        onOpenMenu={handleOpenFoodMenu}
        onOpenDriverApp={handleOpenDriverApp}
      />

      <main className="grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenDownload={handleOpenDownload}
          onOpenMenu={handleOpenFoodMenu}
        />

        {/* 3. Dual Offering Section ("What We Deliver") */}
        <DualOffering
          onOpenMenu={handleOpenFoodMenu}
          onOpenEvents={handleOpenEventSupplies}
        />

        {/* 4. How It Works (4-Step Process) */}
        <HowItWorks />

        {/* 5. Key Features Grid (3x2) */}
        <KeyFeatures />

        {/* 6. App Screenshots Showcase ("See It In Action") */}
        <AppScreenshots />

        {/* 7. Become a Driver Section */}
        <BecomeDriver
          onOpenDriverApp={handleOpenDriverApp}
        />

        {/* 8. Trust & Community Section */}
        <TrustCommunity />

        {/* 9. Final CTA / Download Band */}
        <FinalCTA
          onOpenDownload={handleOpenDownload}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenMenu={handleOpenFoodMenu}
        onOpenEvents={handleOpenEventSupplies}
        onOpenDriverApp={handleOpenDriverApp}
        onOpenDownload={handleOpenDownload}
      />

      {/* Interactive Modals */}
      <MenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
        initialTab={menuInitialTab}
        onDownloadApp={() => {
          setIsMenuModalOpen(false);
          setIsDownloadModalOpen(true);
        }}
      />

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

    </div>
  );
}
