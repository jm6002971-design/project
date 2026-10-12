import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { GameModesSection } from "./components/GameModesSection";
import { StudioShowcase } from "./components/StudioShowcase";
import { VipRewardsSection } from "./components/VipRewardsSection";
import { CraftSection } from "./components/CraftSection";
import { MobileAppSection } from "./components/MobileAppSection";
import { JournalSection } from "./components/JournalSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TrustSecurityFooter } from "./components/TrustSecurityFooter";
import { RummyCardsMotionModal } from "./components/RummyCardsMotionModal";
import { IMAGES } from "./assets/images";

export function App() {
  const [isRummyModalOpen, setIsRummyModalOpen] = useState(false);
  const [activeModalMode, setActiveModalMode] = useState<string>("points");

  const handleOpenMode = (mode: string) => {
    setActiveModalMode(mode);
    setIsRummyModalOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-background">
      {/* Fullscreen Video Background with Cinematic Felt Poster Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={IMAGES.heroPoster.src}
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-35"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Glassmorphic Navigation Bar with Brand Emblem */}
      <Navbar onOpenJourney={() => setIsRummyModalOpen(true)} />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col gap-12 sm:gap-16">
        {/* Cinematic Hero Section */}
        <Hero onOpenJourney={() => setIsRummyModalOpen(true)} />

        {/* 1. Game Modes Arena (Points, Pool, Deals, Salon Privé) */}
        <GameModesSection onSelectMode={handleOpenMode} />

        {/* 2. Studio Showcase: 4 High-Res Felt Arenas */}
        <StudioShowcase onOpenTable={() => setIsRummyModalOpen(true)} />

        {/* 3. Velorah Club Privé - Loyalty Tiers */}
        <VipRewardsSection />

        {/* 4. Engineering & Craftsmanship: 3 Macro Tech Cards */}
        <CraftSection />

        {/* 5. Mobile App Experience (iOS & Android Native) */}
        <MobileAppSection />

        {/* 6. The Velorah Journal: 3 High-End Editorial Essays */}
        <JournalSection />

        {/* 7. Player Endorsements: Verified VIP Reviews with Avatars */}
        <TestimonialsSection />
      </div>

      {/* Trust, Fair Play Certification, and Payment Strip */}
      <TrustSecurityFooter />

      {/* Minimal Footer Signature */}
      <footer id="reach-us" className="relative z-10 px-6 sm:px-8 py-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <img
            src={IMAGES.brandLogo.src}
            alt="Velorah Emblem"
            className="w-6 h-6 object-contain opacity-80"
          />
          <div className="flex flex-col items-center md:items-start gap-0.5">
            <span className="text-sm font-semibold text-white tracking-wider" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Velorah® Cardwork &amp; Systems Inc.
            </span>
            <span>© {new Date().getFullYear()} All rights reserved. 256-bit encrypted felt telemetry.</span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button
            type="button"
            onClick={() => setIsRummyModalOpen(true)}
            className="hover:text-amber-400 transition-colors cursor-pointer font-medium"
          >
            Launch Rummy Arena
          </button>
          <span className="opacity-40">·</span>
          <a href="#about" className="hover:text-foreground transition-colors cursor-pointer">
            Fair Play &amp; RNG
          </a>
          <span className="opacity-40">·</span>
          <a href="#vip" className="hover:text-foreground transition-colors cursor-pointer">
            VIP Privé
          </a>
          <span className="opacity-40">·</span>
          <a href="#journal" className="hover:text-foreground transition-colors cursor-pointer">
            Journal
          </a>
          <span className="opacity-40">·</span>
          <span className="hover:text-foreground transition-colors cursor-pointer text-rose-300">
            Responsible Gaming (18+)
          </span>
        </div>
      </footer>

      {/* Interactive Playing Cards Motion Popup with Real Card Art & Chips */}
      <RummyCardsMotionModal
        isOpen={isRummyModalOpen}
        onClose={() => setIsRummyModalOpen(false)}
        initialMode={activeModalMode}
      />
    </div>
  );
}

export default App;
