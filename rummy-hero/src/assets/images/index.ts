// Central Image Registry with Local Imports & CDN Fallbacks
// Ensures 100% reliable rendering in local Vite, Lovable.dev, and GitHub Pages.

const GITHUB_CDN = "https://raw.githubusercontent.com/jm6002971-design/project/main/rummy-hero/public/images";

export function getImageUrl(name: string): string {
  // Try local public folder first; Vite resolves /images/ correctly
  return `/images/${name}`;
}

export function handleImageFallback(e: React.SyntheticEvent<HTMLImageElement, Event>, filename: string) {
  const target = e.currentTarget;
  if (!target.dataset.triedFallback) {
    target.dataset.triedFallback = "true";
    target.src = `${GITHUB_CDN}/${filename}`;
  }
}

export const IMAGES = {
  // Brand
  brandLogo: {
    src: "/images/brand_logo_gold.svg",
    fallback: `${GITHUB_CDN}/brand_logo_gold.svg`,
    file: "brand_logo_gold.svg"
  },
  heroPoster: {
    src: "/images/hero_felt_poster.jpg",
    fallback: `${GITHUB_CDN}/hero_felt_poster.jpg`,
    file: "hero_felt_poster.jpg"
  },
  
  // Game Modes
  modePoints: {
    src: "/images/mode_points_rummy.jpg",
    fallback: `${GITHUB_CDN}/mode_points_rummy.jpg`,
    file: "mode_points_rummy.jpg"
  },
  modeDeals: {
    src: "/images/mode_deals_rummy.jpg",
    fallback: `${GITHUB_CDN}/mode_deals_rummy.jpg`,
    file: "mode_deals_rummy.jpg"
  },
  modePool: {
    src: "/images/mode_pool_rummy.jpg",
    fallback: `${GITHUB_CDN}/mode_pool_rummy.jpg`,
    file: "mode_pool_rummy.jpg"
  },
  modeVip: {
    src: "/images/mode_vip_salon.jpg",
    fallback: `${GITHUB_CDN}/mode_vip_salon.jpg`,
    file: "mode_vip_salon.jpg"
  },

  // Playing Cards & Chips
  cardAceSpades: {
    src: "/images/card_ace_spades.jpg",
    fallback: `${GITHUB_CDN}/card_ace_spades.jpg`,
    file: "card_ace_spades.jpg"
  },
  cardKingSpades: {
    src: "/images/card_king_spades.jpg",
    fallback: `${GITHUB_CDN}/card_king_spades.jpg`,
    file: "card_king_spades.jpg"
  },
  cardBackPattern: {
    src: "/images/card_back_pattern.jpg",
    fallback: `${GITHUB_CDN}/card_back_pattern.jpg`,
    file: "card_back_pattern.jpg"
  },
  chipsGoldStack: {
    src: "/images/chips_gold_stack.jpg",
    fallback: `${GITHUB_CDN}/chips_gold_stack.jpg`,
    file: "chips_gold_stack.jpg"
  },

  // Studio Tables
  studioRummyTable: {
    src: "/images/studio_rummy_table.jpg",
    fallback: `${GITHUB_CDN}/studio_rummy_table.jpg`,
    file: "studio_rummy_table.jpg"
  },
  studioPokerArena: {
    src: "/images/studio_poker_arena.jpg",
    fallback: `${GITHUB_CDN}/studio_poker_arena.jpg`,
    file: "studio_poker_arena.jpg"
  },
  studioTournament: {
    src: "/images/studio_tournament.jpg",
    fallback: `${GITHUB_CDN}/studio_tournament.jpg`,
    file: "studio_tournament.jpg"
  },
  studioVipLounge: {
    src: "/images/studio_vip_lounge.jpg",
    fallback: `${GITHUB_CDN}/studio_vip_lounge.jpg`,
    file: "studio_vip_lounge.jpg"
  },

  // Craft & Tech
  craftCards: {
    src: "/images/craft_cards.jpg",
    fallback: `${GITHUB_CDN}/craft_cards.jpg`,
    file: "craft_cards.jpg"
  },
  digitalFelt: {
    src: "/images/digital_felt.jpg",
    fallback: `${GITHUB_CDN}/digital_felt.jpg`,
    file: "digital_felt.jpg"
  },
  rngSecurity: {
    src: "/images/rng_security.jpg",
    fallback: `${GITHUB_CDN}/rng_security.jpg`,
    file: "rng_security.jpg"
  },

  // Journal
  journalCards: {
    src: "/images/journal_art_of_cards.jpg",
    fallback: `${GITHUB_CDN}/journal_art_of_cards.jpg`,
    file: "journal_art_of_cards.jpg"
  },
  journalFlow: {
    src: "/images/journal_psychology_flow.jpg",
    fallback: `${GITHUB_CDN}/journal_psychology_flow.jpg`,
    file: "journal_psychology_flow.jpg"
  },
  journalTactile: {
    src: "/images/journal_tactile_design.jpg",
    fallback: `${GITHUB_CDN}/journal_tactile_design.jpg`,
    file: "journal_tactile_design.jpg"
  },

  // Avatars
  avatarAlex: {
    src: "/images/avatar_alex.jpg",
    fallback: `${GITHUB_CDN}/avatar_alex.jpg`,
    file: "avatar_alex.jpg"
  },
  avatarSophia: {
    src: "/images/avatar_sophia.jpg",
    fallback: `${GITHUB_CDN}/avatar_sophia.jpg`,
    file: "avatar_sophia.jpg"
  },
  avatarMarcus: {
    src: "/images/avatar_marcus.jpg",
    fallback: `${GITHUB_CDN}/avatar_marcus.jpg`,
    file: "avatar_marcus.jpg"
  },
  avatarElena: {
    src: "/images/avatar_elena.jpg",
    fallback: `${GITHUB_CDN}/avatar_elena.jpg`,
    file: "avatar_elena.jpg"
  },

  // Mobile App
  mobileAppMockup: {
    src: "/images/mobile_app_mockup.jpg",
    fallback: `${GITHUB_CDN}/mobile_app_mockup.jpg`,
    file: "mobile_app_mockup.jpg"
  },

  // VIP Tiers
  vipTierObsidian: {
    src: "/images/vip_tier_obsidian.jpg",
    fallback: `${GITHUB_CDN}/vip_tier_obsidian.jpg`,
    file: "vip_tier_obsidian.jpg"
  },
  vipTierPlatinum: {
    src: "/images/vip_tier_platinum.jpg",
    fallback: `${GITHUB_CDN}/vip_tier_platinum.jpg`,
    file: "vip_tier_platinum.jpg"
  },
  vipTierGold: {
    src: "/images/vip_tier_gold.jpg",
    fallback: `${GITHUB_CDN}/vip_tier_gold.jpg`,
    file: "vip_tier_gold.jpg"
  },

  // Trust Badges
  trustRng: {
    src: "/images/trust_rng_certified.svg",
    fallback: `${GITHUB_CDN}/trust_rng_certified.svg`,
    file: "trust_rng_certified.svg"
  },
  trustSsl: {
    src: "/images/trust_security_ssl.svg",
    fallback: `${GITHUB_CDN}/trust_security_ssl.svg`,
    file: "trust_security_ssl.svg"
  },
  trust18Plus: {
    src: "/images/trust_18plus.svg",
    fallback: `${GITHUB_CDN}/trust_18plus.svg`,
    file: "trust_18plus.svg"
  },
  trustInstantPayout: {
    src: "/images/trust_instant_payout.svg",
    fallback: `${GITHUB_CDN}/trust_instant_payout.svg`,
    file: "trust_instant_payout.svg"
  },

  // Payments
  paymentUpi: {
    src: "/images/payment_upi.svg",
    fallback: `${GITHUB_CDN}/payment_upi.svg`,
    file: "payment_upi.svg"
  },
  paymentRupay: {
    src: "/images/payment_rupay.svg",
    fallback: `${GITHUB_CDN}/payment_rupay.svg`,
    file: "payment_rupay.svg"
  }
};
