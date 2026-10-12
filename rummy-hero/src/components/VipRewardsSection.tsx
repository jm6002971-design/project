import React from "react";
import { Crown, CheckCircle2, ArrowUpRight } from "lucide-react";
import { IMAGES, handleImageFallback } from "../assets/images";

export const VipRewardsSection: React.FC = () => {
  const tiers = [
    {
      name: "Gold Member",
      tagline: "The Foundation of Privilege",
      image: IMAGES.vipTierGold,
      accentBorder: "border-amber-400/30 hover:border-amber-400/60",
      accentGlow: "from-amber-500/10 to-transparent",
      perks: [
        "10% Weekly Net Rakeback",
        "Express 2-Hour UPI Withdrawals",
        "Access to Weekend ₹5 Lakh Freerolls",
        "Dedicated VIP Chat Support"
      ]
    },
    {
      name: "Platinum Elite",
      tagline: "For Disciplined High-Rollers",
      image: IMAGES.vipTierPlatinum,
      accentBorder: "border-sky-400/40 hover:border-sky-400/70",
      accentGlow: "from-sky-500/15 to-transparent",
      badge: "Most Popular",
      perks: [
        "15% Unlimited Rakeback Daily",
        "Instant 48-Second Payouts",
        "Invites to ₹50 Lakh Private Tourneys",
        "Bespoke High-Stakes Table Limits",
        "Personal Account Concierge"
      ]
    },
    {
      name: "Obsidian Crown",
      tagline: "The Pinnacle of Luxury Gaming",
      image: IMAGES.vipTierObsidian,
      accentBorder: "border-amber-300/50 hover:border-amber-300/80 shadow-2xl shadow-amber-950/40",
      accentGlow: "from-amber-400/20 to-transparent",
      badge: "By Invitation Only",
      perks: [
        "25% Zero-Limit Instant Rakeback",
        "Dedicated WhatsApp & Phone Concierge 24/7",
        "All-Expenses Paid Real-World Poker Tour Packages",
        "Zero Table Rake on Salon Privé Felt",
        "Custom Felt & Hand Avatar Minting"
      ]
    }
  ];

  return (
    <section id="vip" className="relative z-10 py-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/25 mb-4">
          <Crown size={13} />
          <span>Velorah Club Privé</span>
        </div>
        <h2
          className="text-4xl sm:text-6xl text-foreground font-normal tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Elevated tiers for master cardists.
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
          Every deal, discard, and victory compounds your status. Enjoy zero-friction settlements, bespoke table limits, and unprecedented hospitality.
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`liquid-glass rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col group relative ${tier.accentBorder}`}
          >
            {/* Top Photo Header */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={tier.image.src}
                alt={tier.name}
                onError={(e) => handleImageFallback(e, tier.image.file)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${tier.accentGlow} to-background/95`} />

              {tier.badge && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-400 text-black shadow-lg">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="absolute bottom-4 left-6">
                <h3
                  className="text-3xl text-white font-normal tracking-tight"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {tier.name}
                </h3>
                <span className="text-xs text-amber-200/80 font-medium">{tier.tagline}</span>
              </div>
            </div>

            {/* Perks List */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <ul className="space-y-3.5 mb-8">
                {tier.perks.map((perk, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="w-full py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-400/40 text-xs sm:text-sm font-semibold text-white hover:text-amber-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Unlock Privilege</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
