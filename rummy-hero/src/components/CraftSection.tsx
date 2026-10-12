import React from "react";
import { ShieldCheck, Cpu, Layers } from "lucide-react";
import { IMAGES, handleImageFallback } from "../assets/images";

export const CraftSection: React.FC = () => {
  const pillars = [
    {
      title: "Micro-Embossed Card Tactility",
      description: "Custom physics engine simulating card flex, air cushion sliding, and crisp snap mechanics down to 120 FPS.",
      image: IMAGES.craftCards,
      icon: Layers,
      highlight: "120 FPS Fluidity"
    },
    {
      title: "Tactile Digital Felt Simulation",
      description: "Sub-millisecond haptic responses and acoustic spatial audio capturing the authentic rhythm of casino cardplay.",
      image: IMAGES.digitalFelt,
      icon: Cpu,
      highlight: "< 1ms Response"
    },
    {
      title: "Quantum Cryptographic RNG",
      description: "Hardware-level random number generation certified by leading audit boards for absolute fairness and zero manipulation.",
      image: IMAGES.rngSecurity,
      icon: ShieldCheck,
      highlight: "100% Certified"
    }
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/25">
          Engineering &amp; Craft
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
                  src={item.image.src}
                  alt={item.title}
                  onError={(e) => handleImageFallback(e, item.image.file)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 bg-black/60 backdrop-blur-md border border-cyan-400/30">
                    {item.highlight}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>

                  <h3
                    className="text-2xl text-foreground font-normal tracking-tight mb-3"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
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
