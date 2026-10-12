import React from "react";
import { Sparkles, ArrowRight, Zap, Users, Flame, Crown } from "lucide-react";
import { IMAGES, handleImageFallback } from "../assets/images";

interface GameModesSectionProps {
  onSelectMode: (mode: string) => void;
}

export const GameModesSection: React.FC<GameModesSectionProps> = ({ onSelectMode }) => {
  const modes = [
    {
      id: "points",
      title: "Points Rummy",
      badge: "Fastest Deals",
      icon: Zap,
      accent: "text-amber-400 bg-amber-400/10 border-amber-400/25",
      image: IMAGES.modePoints,
      description: "Point-based rapid gameplay where every point has a pre-decided rupee value. One round per deal with instantaneous chip settlement.",
      players: "12,480 Active",
      stakes: "₹0.05 to ₹250 / pt"
    },
    {
      id: "pool",
      title: "Pool 101 / 201 Rummy",
      badge: "Elimination Tournament",
      icon: Flame,
      accent: "text-rose-400 bg-rose-400/10 border-rose-400/25",
      image: IMAGES.modePool,
      description: "Classic knockout challenge. Players accumulating 101 or 201 penalty points are eliminated until the last remaining master takes the pool.",
      players: "5,820 Active",
      stakes: "₹25 to ₹10,000 buy-in"
    },
    {
      id: "deals",
      title: "Deals Rummy",
      badge: "Fixed Rounds Showdown",
      icon: Users,
      accent: "text-cyan-400 bg-cyan-400/10 border-cyan-400/25",
      image: IMAGES.modeDeals,
      description: "Played for a fixed number of deals (Best of 2 or Best of 3). Chips are distributed equally and the player with the highest chip count triumphs.",
      players: "3,940 Active",
      stakes: "2 / 3 Deals Arena"
    },
    {
      id: "vip",
      title: "The Salon Privé",
      badge: "High Roller Exclusive",
      icon: Crown,
      accent: "text-amber-300 bg-amber-300/10 border-amber-300/25",
      image: IMAGES.modeVip,
      description: "Invitation-only obsidian felt tables for high-stakes card connoisseurs. Dedicated dealer concierge, custom stake limits, and zero rake.",
      players: "890 VIPs Online",
      stakes: "Exclusive High Stakes"
    }
  ];

  return (
    <section id="modes" className="relative z-10 py-20 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 mb-4">
            <Sparkles size={13} />
            <span>Versatile Felt Disciplines</span>
          </div>
          <h2
            className="text-4xl sm:text-6xl text-foreground font-normal tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Game modes tailored for every edge.
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mt-3 leading-relaxed">
            Choose your arena: fast point multipliers, grueling tournament elimination pools, or private high-roller salons.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modes.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="liquid-glass rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/35 transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => onSelectMode(item.id)}
            >
              {/* Photo Box */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={item.image.src}
                  alt={item.title}
                  onError={(e) => handleImageFallback(e, item.image.file)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/30" />
                
                {/* Badge top-left */}
                <div className="absolute top-3.5 left-3.5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md ${item.accent}`}>
                    <Icon size={12} />
                    <span>{item.badge}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-2xl text-foreground font-normal tracking-tight"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mt-2.5 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Activity</span>
                    <span className="text-slate-200 font-medium">{item.players}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-wider text-right">Stakes</span>
                    <span className="text-amber-300 font-semibold">{item.stakes}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectMode(item.id);
                  }}
                  className="mt-4 w-full py-2.5 rounded-full bg-white/5 hover:bg-amber-400/15 border border-white/10 hover:border-amber-400/40 text-xs font-semibold text-white hover:text-amber-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Play This Mode</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
