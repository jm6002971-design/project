import React from "react";
import { Users, Sparkles, ArrowUpRight } from "lucide-react";
import rummyTableImg from "../assets/images/studio_rummy_table.jpg";
import pokerArenaImg from "../assets/images/studio_poker_arena.jpg";
import tournamentImg from "../assets/images/studio_tournament.jpg";
import vipLoungeImg from "../assets/images/studio_vip_lounge.jpg";

interface StudioShowcaseProps {
  onOpenTable: () => void;
}

export const StudioShowcase: React.FC<StudioShowcaseProps> = ({ onOpenTable }) => {
  const rooms = [
    {
      id: "rummy-classic",
      title: "Obsidian 13-Card Rummy",
      category: "Point & Pool Arena",
      image: rummyTableImg,
      players: "1,420 Active",
      multiplier: "10x - 50x",
      tag: "Signature Table"
    },
    {
      id: "poker-highroller",
      title: "Emerald High-Stakes Suite",
      category: "No-Limit Texas Hold'em",
      image: pokerArenaImg,
      players: "860 Active",
      multiplier: "VIP Exclusive",
      tag: "High Roller"
    },
    {
      id: "grand-tournament",
      title: "Championship Coliseum",
      category: "Multi-Table Knockout",
      image: tournamentImg,
      players: "4,200 Registered",
      multiplier: "₹2.5 Crore Pool",
      tag: "Live Tournament"
    },
    {
      id: "velvet-lounge",
      title: "The Velvet Salon Privé",
      category: "Deals Rummy & Private Felt",
      image: vipLoungeImg,
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
          className="liquid-glass rounded-full px-8 py-3.5 text-sm text-foreground hover:scale-105 transition-transform flex items-center gap-2 self-start md:self-auto cursor-pointer"
        >
          <span>Explore All Tables</span>
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Grid of 4 Cinematic Showcase Rooms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            onClick={onOpenTable}
            className="group relative rounded-3xl overflow-hidden liquid-glass border border-white/10 hover:border-amber-400/40 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8 min-h-[380px]"
          >
            {/* Background Image with Dark Vignette */}
            <img
              src={room.image}
              alt={room.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out z-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />

            {/* Top Tag */}
            <div className="absolute top-6 left-6 z-20">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/30">
                {room.tag}
              </span>
            </div>

            {/* Top Right Live Stats */}
            <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-black/60 backdrop-blur-md text-slate-300 border border-white/10">
              <Users size={12} className="text-emerald-400" />
              <span>{room.players}</span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-20 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {room.category}
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {room.title}
                </h3>
                <span className="text-sm font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/20">
                  {room.multiplier}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
