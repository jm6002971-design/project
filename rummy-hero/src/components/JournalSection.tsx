import React from "react";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import journalCardsImg from "../assets/images/journal_art_of_cards.jpg";
import journalFlowImg from "../assets/images/journal_psychology_flow.jpg";
import journalTactileImg from "../assets/images/journal_tactile_design.jpg";

export const JournalSection: React.FC = () => {
  const articles = [
    {
      title: "The Geometry of Pure Sequences: Statistical Edge in 13-Card Formations",
      category: "Strategy & Theory",
      readTime: "5 min read",
      date: "October 2026",
      image: journalCardsImg,
      summary: "An exploration into hand probability distributions, discard psychology, and minimizing deadwood in high-velocity rounds."
    },
    {
      title: "Flow State at High Stakes: Cognitive Calm Under Time Pressure",
      category: "Mental Mastery",
      readTime: "7 min read",
      date: "September 2026",
      image: journalFlowImg,
      summary: "How minimalist UI and ambient sound design reduce decision fatigue during intensive multi-table tournaments."
    },
    {
      title: "Digital Materiality: Translating Tactile Card Finishes to the Screen",
      category: "Design Notes",
      readTime: "4 min read",
      date: "August 2026",
      image: journalTactileImg,
      summary: "Why linen textures, micro-bevels, and soft specular highlights ground digital gaming in authentic tactile comfort."
    }
  ];

  return (
    <section id="journal" className="relative z-10 py-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 mb-4">
            <BookOpen size={13} />
            <span>The Velorah Journal</span>
          </div>
          <h2
            className="text-4xl sm:text-6xl text-foreground font-normal tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Insights & Strategy.
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mt-3">
            Essays on game theory, tactile design, and the cognitive architecture of elite card play.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((art, idx) => (
          <article
            key={idx}
            className="liquid-glass rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-400/30 transition-all duration-300 flex flex-col group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-emerald-300 border border-emerald-400/20">
                {art.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span>{art.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {art.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-snug group-hover:text-emerald-300 transition-colors mb-3">
                  {art.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Read Full Essay</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
