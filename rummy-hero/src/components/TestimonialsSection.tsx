import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import avatarAlex from "../assets/images/avatar_alex.jpg";
import avatarSophia from "../assets/images/avatar_sophia.jpg";
import avatarMarcus from "../assets/images/avatar_marcus.jpg";
import avatarElena from "../assets/images/avatar_elena.jpg";

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: "Alex Mercer",
      role: "All-India Rummy Masters finalist",
      avatar: avatarAlex,
      rating: 5,
      review: "The card dragging and discard physics feel identical to high-end casino felt. Zero lag during multi-table finals was the deciding factor for my victory."
    },
    {
      name: "Sophia Chen",
      role: "Pro Series Champion",
      avatar: avatarSophia,
      rating: 5,
      review: "Velorah stripped away all the gaudy carnival flashing lights and focused on what real players want: instant math, verified RNG, and flawless tactile response."
    },
    {
      name: "Marcus Vance",
      role: "High-Stakes VIP Member",
      avatar: avatarMarcus,
      rating: 5,
      review: "The Salon Privé tables are exceptional. Smooth payouts, instantaneous chip balancing, and an atmosphere of quiet luxury that respects your focus."
    },
    {
      name: "Elena Rostova",
      role: "International Tournament Strategist",
      avatar: avatarElena,
      rating: 5,
      review: "Cleanest digital felt in the industry. The sequence formation detection is lightning-quick, letting you execute complex melds without friction."
    }
  ];

  return (
    <section className="relative z-10 py-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/25">
          Verified Player Endorsements
        </span>
        <h2
          className="text-4xl sm:text-6xl text-foreground font-normal tracking-tight mt-4"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Trusted by the elite.
        </h2>
        <p className="text-muted-foreground text-base mt-3">
          Over ₹100 Crore in audited tournament settlements and over 500,000 certified hands dealt daily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="liquid-glass rounded-3xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{rev.review}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
              <img
                src={rev.avatar}
                alt={rev.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/40"
              />
              <div className="overflow-hidden">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-white truncate">{rev.name}</span>
                  <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground truncate">{rev.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
