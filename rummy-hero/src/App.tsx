import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StudioShowcase } from "./components/StudioShowcase";
import { CraftSection } from "./components/CraftSection";
import { JournalSection } from "./components/JournalSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { RummyCardsMotionModal } from "./components/RummyCardsMotionModal";

export function App() {
  const [isRummyModalOpen, setIsRummyModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-background">
      {/* Fullscreen Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-40"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Glassmorphic Navigation Bar */}
      <Navbar onOpenJourney={() => setIsRummyModalOpen(true)} />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col gap-8">
        {/* Cinematic Hero Section */}
        <Hero onOpenJourney={() => setIsRummyModalOpen(true)} />

        {/* Studio Showcase: 4 High-Res Felt Arenas */}
        <StudioShowcase onOpenTable={() => setIsRummyModalOpen(true)} />

        {/* Engineering & Craftsmanship: 3 Macro Tech Cards */}
        <CraftSection />

        {/* The Velorah Journal: 3 High-End Editorial Essays */}
        <JournalSection />

        {/* Player Endorsements: Verified VIP Reviews with Avatars */}
        <TestimonialsSection />
      </div>

      {/* Minimal Footer Signature */}
      <footer id="reach-us" className="relative z-10 px-8 py-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-6 border-t border-white/10 mt-16">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-semibold text-white tracking-wider" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Velorah® Cardwork & Systems Inc.
          </span>
          <span>© {new Date().getFullYear()} All rights reserved. Encrypted 256-bit felt telemetry.</span>
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
            Fair Play & RNG
          </a>
          <span className="opacity-40">·</span>
          <a href="#journal" className="hover:text-foreground transition-colors cursor-pointer">
            Journal
          </a>
          <span className="opacity-40">·</span>
          <span className="hover:text-foreground transition-colors cursor-pointer">
            Responsible Gaming (18+)
          </span>
        </div>
      </footer>

      {/* Interactive Playing Cards Motion Popup for Rummy Project */}
      <RummyCardsMotionModal
        isOpen={isRummyModalOpen}
        onClose={() => setIsRummyModalOpen(false)}
      />
    </div>
  );
}

export default App;
