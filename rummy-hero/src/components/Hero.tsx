import React from "react";
import { Sparkles, Trophy, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { IMAGES, handleImageFallback } from "../assets/images";

interface HeroProps {
  onOpenJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJourney }) => {
  return (
    <main id="home" className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 sm:pt-32 pb-20 my-auto">
      {/* Top Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-400/10 text-amber-300 border border-amber-400/25 mb-8 animate-fade-rise">
        <Sparkles size={13} className="text-amber-400" />
        <span>Velorah® Elite Rummy &amp; Cardwork</span>
      </div>

      {/* H1 Heading with Instrument Serif and contrasting em tags */}
      <h1
        className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-6xl font-normal text-foreground animate-fade-rise"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Where <em className="not-italic text-muted-foreground">dreams</em> rise{" "}
        <em className="not-italic text-muted-foreground">through the silence.</em>
      </h1>

      {/* Subtext */}
      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
        The definitive digital arena for tactile 13-card rummy, high-velocity tournaments, and mathematically verified fair felt play.
      </p>

      {/* Hero CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 animate-fade-rise-delay-2">
        <button
          type="button"
          onClick={onOpenJourney}
          className="liquid-glass rounded-full px-12 py-4 text-base text-foreground font-semibold hover:scale-[1.03] cursor-pointer select-none flex items-center gap-2.5 shadow-xl shadow-black/40 border border-amber-400/35"
        >
          <span>Enter Rummy Arena</span>
          <ArrowRight size={17} className="text-amber-400" />
        </button>

        <a
          href="#modes"
          className="px-8 py-4 rounded-full text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
        >
          Explore Game Modes
        </a>
      </div>

      {/* Live Felt Highlights Bar with Images */}
      <div className="mt-16 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-left animate-fade-rise-delay-2">
        <a
          href="#studio"
          className="liquid-glass p-4 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all flex items-center gap-3.5 group cursor-pointer"
        >
          <img
            src={IMAGES.studioRummyTable.src}
            alt="13-Card Rummy Table"
            onError={(e) => handleImageFallback(e, IMAGES.studioRummyTable.file)}
            className="w-14 h-14 rounded-xl object-cover border border-white/20 group-hover:scale-105 transition-transform shrink-0"
          />
          <div>
            <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
              <Trophy size={11} />
              <span>Classic Points &amp; Pool</span>
            </div>
            <div className="text-sm font-medium text-white">Obsidian 13-Card</div>
            <div className="text-[11px] text-muted-foreground">Instant UPI Settlements</div>
          </div>
        </a>

        <a
          href="#studio"
          className="liquid-glass p-4 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all flex items-center gap-3.5 group cursor-pointer"
        >
          <img
            src={IMAGES.studioPokerArena.src}
            alt="VIP Poker Suite"
            onError={(e) => handleImageFallback(e, IMAGES.studioPokerArena.file)}
            className="w-14 h-14 rounded-xl object-cover border border-white/20 group-hover:scale-105 transition-transform shrink-0"
          />
          <div>
            <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-semibold">
              <Users size={11} />
              <span>Salon Privé</span>
            </div>
            <div className="text-sm font-medium text-white">Emerald VIP Suite</div>
            <div className="text-[11px] text-muted-foreground">High Roller Invitation Tables</div>
          </div>
        </a>

        <a
          href="#studio"
          className="liquid-glass p-4 rounded-2xl border border-white/10 hover:border-emerald-400/30 transition-all flex items-center gap-3.5 group cursor-pointer"
        >
          <img
            src={IMAGES.studioTournament.src}
            alt="Coliseum Tournaments"
            onError={(e) => handleImageFallback(e, IMAGES.studioTournament.file)}
            className="w-14 h-14 rounded-xl object-cover border border-white/20 group-hover:scale-105 transition-transform shrink-0"
          />
          <div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
              <ShieldCheck size={11} />
              <span>Championships</span>
            </div>
            <div className="text-sm font-medium text-white">₹2.5 Crore Coliseum</div>
            <div className="text-[11px] text-muted-foreground">100% Certified RNG Dealing</div>
          </div>
        </a>
      </div>
    </main>
  );
};
