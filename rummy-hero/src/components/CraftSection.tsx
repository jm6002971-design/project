import React from "react";
import { ShieldCheck, Cpu, Layers } from "lucide-react";
import craftCardsImg from "../assets/images/craft_cards.jpg";
import digitalFeltImg from "../assets/images/digital_felt.jpg";
import rngSecurityImg from "../assets/images/rng_security.jpg";

export const CraftSection: React.FC = () => {
  const pillars = [
    {
      title: "Micro-Embossed Card Tactility",
      description: "Custom physics engine simulating card flex, air cushion sliding, and crisp snap mechanics down to 120 FPS.",
      image: craftCardsImg,
      icon: Layers,
      highlight: "120 FPS Fluidity"
    },
    {
      title: "Tactile Digital Felt Simulation",
      description: "Sub-millisecond haptic responses and acoustic spatial audio capturing the authentic rhythm of casino cardplay.",
      image: digitalFeltImg,
      icon: Cpu,
      highlight: "< 1ms Response"
    },
    {
      title: "Quantum Cryptographic RNG",
      description: "Hardware-level random number generation certified by leading audit boards for absolute fairness and zero manipulation.",
      image: rngSecurityImg,
      icon: ShieldCheck,
      highlight: "100% Certified"
    }
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/25">
          Engineering & Craft
        </span>
        <h2
          className="text-4xl sm:text-6xl text-foreground font-normal tracking-tight mt-4"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Precision in every draw.
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
          We treat digital cardplay as an architectural discipline. Behind the minimalist obsidian design lies a powerhouse of low-latency math and haptic feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="liquid-glass rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300 flex flex-col group"
            >
              {/* Photo Header */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 border border-cyan-400/25 flex items-center gap-1.5">
                  <Icon size={13} />
                  <span>{item.highlight}</span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
