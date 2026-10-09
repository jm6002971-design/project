import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { RummyCardsMotionModal } from "./components/RummyCardsMotionModal";

export function App() {
  const [isRummyModalOpen, setIsRummyModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-background">
      {/* Fullscreen Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Glassmorphic Navigation Bar */}
      <Navbar onOpenJourney={() => setIsRummyModalOpen(true)} />

      {/* Cinematic Hero Section */}
      <Hero onOpenJourney={() => setIsRummyModalOpen(true)} />

      {/* Minimal Footer Signature (discreet & cinematic) */}
      <footer className="relative z-10 px-8 py-6 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
        <span className="tracking-wide">© {new Date().getFullYear()} Velorah Systems Inc. All rights reserved.</span>
        <div className="flex items-center space-x-6">
          <button
            type="button"
            onClick={() => setIsRummyModalOpen(true)}
            className="hover:text-foreground transition-colors cursor-pointer"
          >
            Rummy Arena
          </button>
          <span className="opacity-40">·</span>
          <span className="hover:text-foreground transition-colors cursor-pointer">Privacy & Focus</span>
          <span className="opacity-40">·</span>
          <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Presence</span>
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
