import React from "react";

interface HeroProps {
  onOpenJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJourney }) => {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px] my-auto">
      {/* H1 Heading with Instrument Serif and contrasting em tags */}
      <h1
        className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground animate-fade-rise"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Where <em className="not-italic text-muted-foreground">dreams</em> rise{" "}
        <em className="not-italic text-muted-foreground">through the silence.</em>
      </h1>

      {/* Subtext */}
      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
        We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos,
        we build digital spaces for sharp focus and inspired work.
      </p>

      {/* Hero CTA Button */}
      <button
        type="button"
        onClick={onOpenJourney}
        className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] cursor-pointer animate-fade-rise-delay-2 select-none"
      >
        Begin Journey
      </button>
    </main>
  );
};
