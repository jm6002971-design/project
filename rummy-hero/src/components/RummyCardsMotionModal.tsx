import React, { useState } from "react";
import { X, Sparkles, RefreshCw, Trophy, Users, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { IMAGES, handleImageFallback } from "../assets/images";

interface RummyCardsMotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: string;
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
  imageArt?: string;
  imageFile?: string;
}

const initialCards: CardData[] = [
  { id: 1, rank: "10", suit: "spades", symbol: "♠", color: "text-slate-100", rotation: -16, translateX: -120, translateY: 14, imageArt: IMAGES.cardBackPattern.src, imageFile: IMAGES.cardBackPattern.file },
  { id: 2, rank: "J", suit: "spades", symbol: "♠", color: "text-slate-100", rotation: -8, translateX: -60, translateY: 4, imageArt: IMAGES.cardKingSpades.src, imageFile: IMAGES.cardKingSpades.file },
  { id: 3, rank: "Q", suit: "spades", symbol: "♠", color: "text-slate-100", rotation: 0, translateX: 0, translateY: 0, imageArt: IMAGES.cardKingSpades.src, imageFile: IMAGES.cardKingSpades.file },
  { id: 4, rank: "K", suit: "spades", symbol: "♠", color: "text-slate-100", rotation: 8, translateX: 60, translateY: 4, imageArt: IMAGES.cardKingSpades.src, imageFile: IMAGES.cardKingSpades.file },
  { id: 5, rank: "A", suit: "spades", symbol: "♠", color: "text-amber-300", rotation: 16, translateX: 120, translateY: 14, imageArt: IMAGES.cardAceSpades.src, imageFile: IMAGES.cardAceSpades.file },
];

export const RummyCardsMotionModal: React.FC<RummyCardsMotionModalProps> = ({
  isOpen,
  onClose,
  initialMode = "points",
}) => {
  const [dealKey, setDealKey] = useState(0);
  const [selectedMode, setSelectedMode] = useState<string>(initialMode);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [joinedTable, setJoinedTable] = useState(false);

  if (!isOpen) return null;

  const handleShuffle = () => {
    setDealKey((prev) => prev + 1);
  };

  const handleJoinTable = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#ffe082", "#ffc107", "#38bdf8", "#34d399", "#ffffff"],
    });
    setJoinedTable(true);
    setTimeout(() => {
      setJoinedTable(false);
    }, 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-rise"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="liquid-glass-modal relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 overflow-hidden text-foreground border border-amber-400/25 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Felt Background Pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url(${IMAGES.cardBackPattern.src})`,
            backgroundSize: "240px 240px",
          }}
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors z-20 cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-amber-400/10 text-amber-300 border border-amber-400/25 mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>Velorah Live 13-Card Felt</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl text-foreground tracking-tight font-normal"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where mastery meets the felt.
          </h2>
          <p className="text-muted-foreground text-sm mt-1.5">
            Experience realistic tactile cards physics, verified RNG dealing, and instant multiplier tables.
          </p>
        </div>

        {/* ── PLAYING CARDS MOTION FAN (THE POP ANIMATION WITH REAL TEXTURES) ── */}
        <div className="my-8 py-4 relative flex flex-col items-center justify-center z-10">
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
                  className={`absolute w-24 h-36 sm:w-28 sm:h-44 rounded-xl cursor-pointer transition-all duration-300 shadow-2xl overflow-hidden group ${
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
                    border: isAce ? "1.5px solid rgba(251, 191, 36, 0.7)" : "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                >
                  {/* Subtle Background Card Art Texture */}
                  {card.imageArt && (
                    <img
                      src={card.imageArt}
                      alt={card.rank}
                      onError={(e) => card.imageFile && handleImageFallback(e, card.imageFile)}
                      className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity"
                    />
                  )}

                  {/* Card Inner Filigree Border */}
                  <div className="absolute inset-1.5 rounded-lg border border-white/15 p-2 flex flex-col justify-between pointer-events-none z-10 backdrop-blur-[1px]">
                    {/* Top Corner */}
                    <div className="flex flex-col items-start leading-none">
                      <span className={`text-base font-bold drop-shadow ${isAce ? "text-amber-400" : "text-white"}`}>
                        {card.rank}
                      </span>
                      <span className={`text-xs ${card.color}`}>{card.symbol}</span>
                    </div>

                    {/* Card Center Symbol with Ornate Glow */}
                    <div className="self-center text-center">
                      <span className={`text-3xl sm:text-4xl ${isAce ? "text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]" : "text-white/90 drop-shadow-md"}`}>
                        {card.symbol}
                      </span>
                    </div>

                    {/* Bottom Corner Inverted */}
                    <div className="flex flex-col items-end leading-none rotate-180">
                      <span className={`text-base font-bold drop-shadow ${isAce ? "text-amber-400" : "text-white"}`}>
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
          <div className="flex items-center gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3.5 py-1 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Pure Royal Sequence Declared (0 Deadwood)
            </span>

            <button
              type="button"
              onClick={handleShuffle}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/10"
              title="Shuffle & Re-deal Cards Motion"
            >
              <RefreshCw size={12} />
              <span>Shuffle &amp; Deal</span>
            </button>
          </div>
        </div>

        {/* ── GAME MODE TABS WITH PHOTOGRAPHIC THUMBNAILS ── */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6 relative z-10">
          {[
            { id: "points", label: "Points Rummy", desc: "Fast Deals · High Speed", img: IMAGES.modePoints },
            { id: "pool", label: "Pool 101 / 201", desc: "Elimination Showdown", img: IMAGES.modePool },
            { id: "deals", label: "Deals Rummy", desc: "Best of 2 or 3 Deals", img: IMAGES.modeDeals },
          ].map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setSelectedMode(mode.id)}
              className={`p-3 rounded-2xl text-left transition-all cursor-pointer flex items-center gap-3 ${
                selectedMode === mode.id
                  ? "bg-amber-400/15 border border-amber-400/40 shadow-lg"
                  : "bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10"
              }`}
            >
              <img
                src={mode.img.src}
                alt={mode.label}
                onError={(e) => handleImageFallback(e, mode.img.file)}
                className="w-11 h-11 rounded-xl object-cover shrink-0 border border-white/15"
              />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-medium text-foreground truncate">{mode.label}</div>
                <div className="text-[11px] text-muted-foreground truncate">{mode.desc}</div>
              </div>
            </button>
          ))}
        </div>

        {/* ── TRUST & STATS STRIP ── */}
        <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/5 text-center text-xs text-muted-foreground mb-6 relative z-10">
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
        <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10">
          <button
            type="button"
            onClick={handleJoinTable}
            className="w-full sm:flex-1 rounded-full py-3.5 px-6 text-sm text-black font-bold hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
            style={{
              background: "linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%)",
            }}
          >
            <Trophy size={16} className="text-black" />
            <span>{joinedTable ? "Table Connected! Entering Felt..." : "Enter Rummy Arena Now"}</span>
            <ArrowRight size={15} />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors cursor-pointer border border-white/10"
          >
            Explore More Tables First
          </button>
        </div>
      </div>
    </div>
  );
};
