import React from "react";
import { Users, Sparkles, ArrowUpRight } from "lucide-react";
import { IMAGES, handleImageFallback } from "../assets/images";

interface StudioShowcaseProps {
  onOpenTable: () => void;
}

export const StudioShowcase: React.FC<StudioShowcaseProps> = ({ onOpenTable }) => {
  const rooms = [
    {
      id: "rummy-classic",
      title: "Obsidian 13-Card Rummy",
      category: "Point & Pool Arena",
      image: IMAGES.studioRummyTable,
      players: "1,420 Active",
      multiplier: "10x - 50x",
      tag: "Signature Table"
    },
    {
      id: "poker-highroller",
      title: "Emerald High-Stakes Suite",
      category: "No-Limit Texas Hold'em",
      image: IMAGES.studioPokerArena,
      players: "860 Active",
      multiplier: "VIP Exclusive",
      tag: "High Roller"
    },
    {
      id: "grand-tournament",
      title: "Championship Coliseum",
      category: "Multi-Table Knockout",
      image: IMAGES.studioTournament,
      players: "4,200 Registered",
      multiplier: "₹2.5 Crore Pool",
      tag: "Live Tournament"
    },
    {
      id: "velvet-lounge",
      title: "The Velvet Salon Privé",
      category: "Deals Rummy & Private Felt",
      image: IMAGES.studioVipLounge,
      players: "Invitation Only",
      multiplier: "Bespoke Stakes",
      tag: "Private Salon"
    }
  ];

  return (
    <section id="studio" className="relative z-10 py-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 mb-4">
            <Sparkles size={13} />
            <span>Curated Felt Arenas</span>
          </div>
          <h2
            className="text-4xl sm:text-6xl text-foreground font-normal tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Crafted for pure mastery.
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mt-3">
            Every table is rendered with hyper-realistic card physics, low-latency state synchronization, and bespoke luxury felt palettes.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenTable}
          className="liquid-glass rounded-full px-8 py-3.5 text-sm text-foreground hover:scale-105 transition-transform flex items-center gap-2 self-start md:self-auto cursor-pointer border border-amber-400/20"
        >
          <span>Explore All Tables</span>
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Grid of Felt Arenas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="liquid-glass rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col group cursor-pointer"
            onClick={onOpenTable}
          >
            {/* Visual Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={room.image.src}
                alt={room.title}
                onError={(e) => handleImageFallback(e, room.image.file)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-transparent" />
              
              {/* Badge top-left */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium text-amber-300 bg-black/60 backdrop-blur-md border border-amber-400/30">
                  {room.tag}
                </span>
              </div>

              {/* Multiplier top-right */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20">
                  {room.multiplier}
                </span>
              </div>

              {/* Bottom Info overlay */}
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-medium">
                    {room.category}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl text-white font-normal mt-0.5 tracking-tight"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {room.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Footer Bar inside card */}
            <div className="px-6 py-4 flex items-center justify-between text-xs text-muted-foreground border-t border-white/10">
              <div className="flex items-center gap-2">
                <Users size={14} className="text-emerald-400" />
                <span className="text-foreground font-medium">{room.players}</span>
              </div>

              <div className="flex items-center gap-1.5 text-amber-300 group-hover:translate-x-1 transition-transform font-medium">
                <span>Enter Table</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
