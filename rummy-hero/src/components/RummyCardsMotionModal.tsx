import React, { useState } from "react";
import { X, Sparkles, RefreshCw, Trophy, Users, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface RummyCardsMotionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CardData {
  id: number;
  rank: string;
  suit: "spades" | "hearts" | "diamonds" | "clubs";
  symbol: string;
  color: string;
  rotation: number;
  translateX: number;
  translateY: number;
}

const initialCards: CardData[] = [
  { id: 1, rank: "10", suit: "spades", symbol: "♠", color: "text-slate-100", rotation: -16, translateX: -120, translateY: 14 },
  { id: 2, rank: "J", suit: "spades", symbol: "♠", color: "text-slate-100", rotation: -8, translateX: -60, translateY: 4 },
  { id: 3, rank: "Q", suit: "spades", symbol: "♠", color: "text-slate-100", rotation: 0, translateX: 0, translateY: 0 },
  { id: 4, rank: "K", suit: "spades", symbol: "♠", color: "text-slate-100", rotation: 8, translateX: 60, translateY: 4 },
  { id: 5, rank: "A", suit: "spades", symbol: "♠", color: "text-amber-300", rotation: 16, translateX: 120, translateY: 14 },
];

export const RummyCardsMotionModal: React.FC<RummyCardsMotionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [dealKey, setDealKey] = useState(0);
  const [selectedMode, setSelectedMode] = useState<string>("points");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [joinedTable, setJoinedTable] = useState(false);

  if (!isOpen) return null;

  const handleShuffle = () => {
    setDealKey((prev) => prev + 1);
  };

  const handleJoinTable = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ffe082", "#ffc107", "#38bdf8", "#ffffff"],
    });
    setJoinedTable(true);
    setTimeout(() => {
      setJoinedTable(false);
    }, 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-rise"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="liquid-glass-modal relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 overflow-hidden text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-amber-400/10 text-amber-300 border border-amber-400/25 mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>Velorah Rummy Arena</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl text-foreground tracking-tight font-normal"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where mastery meets the felt.
          </h2>
          <p className="text-muted-foreground text-sm mt-1.5">
            Experience realistic cards physics, verified RNG dealing, and instant multiplier tables.
          </p>
        </div>

        {/* ── PLAYING CARDS MOTION FAN (THE POP ANIMATION) ── */}
        <div className="my-8 py-4 relative flex flex-col items-center justify-center">
          {/* Card Fan Display */}
          <div
            key={dealKey}
            className="perspective-card-deck relative w-full h-44 sm:h-52 flex items-center justify-center select-none"
          >
            {initialCards.map((card, index) => {
              const isHovered = hoveredCard === card.id;
              const isAce = card.rank === "A";

              return (
                <div
                  key={`${dealKey}-${card.id}`}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`absolute w-24 h-36 sm:w-28 sm:h-44 rounded-xl cursor-pointer transition-all duration-300 shadow-2xl ${
                    index === 0 ? "animate-deal-1" :
                    index === 1 ? "animate-deal-2" :
                    index === 2 ? "animate-deal-3" :
                    index === 3 ? "animate-deal-4" : "animate-deal-5"
                  } ${isAce ? "card-gold-glow" : ""}`}
                  style={{
                    transform: isHovered
                      ? `translate3d(${card.translateX}px, ${card.translateY - 24}px, 40px) rotate(${card.rotation}deg) scale(1.12)`
                      : `translate3d(${card.translateX}px, ${card.translateY}px, 0) rotate(${card.rotation}deg)`,
                    zIndex: isHovered ? 30 : index + 1,
                    background: "linear-gradient(145deg, #182236 0%, #0d1624 55%, #080d16 100%)",
                    border: isAce ? "1.5px solid rgba(251, 191, 36, 0.6)" : "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {/* Card Inner Filigree Border */}
                  <div className="absolute inset-1.5 rounded-lg border border-white/10 p-2 flex flex-col justify-between pointer-events-none">
                    {/* Top Corner */}
                    <div className="flex flex-col items-start leading-none">
                      <span className={`text-base font-bold ${isAce ? "text-amber-400" : "text-white"}`}>
                        {card.rank}
                      </span>
                      <span className={`text-xs ${card.color}`}>{card.symbol}</span>
                    </div>

                    {/* Card Center Symbol */}
                    <div className="self-center text-center">
                      <span className={`text-3xl sm:text-4xl ${isAce ? "text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]" : "text-white/90 drop-shadow-md"}`}>
                        {card.symbol}
                      </span>
                    </div>

                    {/* Bottom Corner Inverted */}
                    <div className="flex flex-col items-end leading-none rotate-180">
                      <span className={`text-base font-bold ${isAce ? "text-amber-400" : "text-white"}`}>
                        {card.rank}
                      </span>
                      <span className={`text-xs ${card.color}`}>{card.symbol}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hand Badge & Re-Deal Control */}
          <div className="flex items-center gap-3 mt-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Pure Royal Sequence Declared
            </span>

            <button
              type="button"
              onClick={handleShuffle}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              title="Shuffle & Re-deal Cards Motion"
            >
              <RefreshCw size={12} />
              <span>Re-deal Motion</span>
            </button>
          </div>
        </div>

        {/* ── GAME MODE TABS ── */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6">
          {[
            { id: "points", label: "Points Rummy", desc: "Fast Deals · High Speed" },
            { id: "pool", label: "Pool 101 / 201", desc: "Elimination Showdown" },
            { id: "deals", label: "Deals Rummy", desc: "Best of 2 or 3 Deals" },
          ].map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setSelectedMode(mode.id)}
              className={`p-3 rounded-2xl text-left transition-all cursor-pointer ${
                selectedMode === mode.id
                  ? "bg-white/10 border border-white/25 shadow-lg"
                  : "bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10"
              }`}
            >
              <div className="text-xs sm:text-sm font-medium text-foreground">{mode.label}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{mode.desc}</div>
            </button>
          ))}
        </div>

        {/* ── TRUST & STATS STRIP ── */}
        <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/5 text-center text-xs text-muted-foreground mb-6">
          <div className="flex items-center justify-center gap-1.5">
            <Users size={13} className="text-sky-400" />
            <span>18,450+ Online</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Zap size={13} className="text-amber-400" />
            <span>Instant 48s UPI</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck size={13} className="text-emerald-400" />
            <span>100% Certified RNG</span>
          </div>
        </div>

        {/* ── ACTION BUTTONS ── */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={handleJoinTable}
            className="w-full sm:flex-1 liquid-glass rounded-full py-3.5 px-6 text-sm text-foreground hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2 font-semibold cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgba(255, 224, 130, 0.25) 0%, rgba(245, 158, 11, 0.25) 100%)",
              border: "1px solid rgba(255, 235, 150, 0.35)",
            }}
          >
            <Trophy size={16} className="text-amber-400" />
            <span>{joinedTable ? "Joining Table..." : "Enter Rummy Arena"}</span>
            <ArrowRight size={15} />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors cursor-pointer"
          >
            Explore More First
          </button>
        </div>
      </div>
    </div>
  );
};
