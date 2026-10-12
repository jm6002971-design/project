const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE = path.resolve('c:/Users/sai/Downloads/game/rummy-hero');
const SRC_IMG_DIR = path.join(BASE, 'src', 'assets', 'images');
const PUB_IMG_DIR = path.join(BASE, 'public', 'images');
const FFMPEG = path.resolve('c:/Users/sai/Downloads/game/node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');

fs.mkdirSync(SRC_IMG_DIR, { recursive: true });
fs.mkdirSync(PUB_IMG_DIR, { recursive: true });

const newImages = [
  // Game Modes
  {
    id: 'mode_points_rummy',
    url: 'https://images.unsplash.com/photo-1541278107931-e006523892df?w=1000&q=85',
    w: 1000, h: 650
  },
  {
    id: 'mode_deals_rummy',
    url: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1000&q=650',
    w: 1000, h: 650
  },
  {
    id: 'mode_pool_rummy',
    url: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=1000&q=85',
    w: 1000, h: 650
  },
  {
    id: 'mode_vip_salon',
    url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000&q=85',
    w: 1000, h: 650
  },

  // Modal Cards & Playing Card Art
  {
    id: 'card_ace_spades',
    url: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=600&q=85',
    w: 600, h: 840
  },
  {
    id: 'card_king_spades',
    url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&q=85',
    w: 600, h: 840
  },
  {
    id: 'card_back_pattern',
    url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=85',
    w: 600, h: 840
  },
  {
    id: 'chips_gold_stack',
    url: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&q=85',
    w: 600, h: 600
  },

  // Hero Background Poster
  {
    id: 'hero_felt_poster',
    url: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=1920&q=85',
    w: 1920, h: 1080
  },

  // Mobile App Experience Mockup
  {
    id: 'mobile_app_mockup',
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=85',
    w: 1000, h: 700
  },

  // VIP Loyalty Club Tiers
  {
    id: 'vip_tier_obsidian',
    url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=85',
    w: 800, h: 500
  },
  {
    id: 'vip_tier_platinum',
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=85',
    w: 800, h: 500
  },
  {
    id: 'vip_tier_gold',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=85',
    w: 800, h: 500
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

// Generate luxury SVG badges & icons
function createSvgBadges() {
  // 1. Brand Logo: Crown + Spade Emblem
  const brandLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE599"/>
      <stop offset="40%" stop-color="#F5B838"/>
      <stop offset="70%" stop-color="#D99B26"/>
      <stop offset="100%" stop-color="#996515"/>
    </linearGradient>
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <circle cx="100" cy="100" r="92" fill="#0C1322" stroke="url(#goldGrad)" stroke-width="3" filter="url(#goldGlow)"/>
  <circle cx="100" cy="100" r="82" fill="none" stroke="rgba(245, 184, 56, 0.25)" stroke-width="1.5" stroke-dasharray="4,4"/>
  <!-- Crown Top -->
  <path d="M72 70 L80 84 L100 66 L120 84 L128 70 L124 92 L76 92 Z" fill="url(#goldGrad)"/>
  <!-- Royal Spade Center -->
  <path d="M100 86 C86 112 68 126 68 140 C68 153 79 160 91 160 C97 160 100 157 100 157 C100 157 103 160 109 160 C121 160 132 153 132 140 C132 126 114 112 100 86 Z" fill="url(#goldGrad)"/>
  <!-- Spade Stem -->
  <path d="M96 154 L92 174 L108 174 L104 154 Z" fill="url(#goldGrad)"/>
</svg>`;

  // 2. iTech Labs RNG Certified Seal
  const rngSealSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34D399"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="24" fill="#061A14" stroke="url(#emeraldGrad)" stroke-width="2"/>
  <circle cx="80" cy="62" r="32" fill="none" stroke="#34D399" stroke-width="3"/>
  <path d="M68 62 L76 70 L92 52" fill="none" stroke="#34D399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="80" y="112" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#34D399" text-anchor="middle" letter-spacing="1.5">iTech Labs</text>
  <text x="80" y="130" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#A7F3D0" text-anchor="middle" letter-spacing="1">100% RNG CERTIFIED</text>
</svg>`;

  // 3. 256-Bit SSL Security Seal
  const sslSealSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="24" fill="#081726" stroke="url(#cyanGrad)" stroke-width="2"/>
  <!-- Shield and Lock -->
  <path d="M80 32 L106 44 C106 72 96 92 80 102 C64 92 54 72 54 44 Z" fill="none" stroke="#38BDF8" stroke-width="3"/>
  <rect x="72" y="60" width="16" height="14" rx="3" fill="#38BDF8"/>
  <path d="M75 60 V53 A5 5 0 0 1 85 53 V60" fill="none" stroke="#38BDF8" stroke-width="2.5"/>
  <text x="80" y="122" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#38BDF8" text-anchor="middle" letter-spacing="1">256-BIT SSL</text>
  <text x="80" y="138" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#BAE6FD" text-anchor="middle">BANK GRADE ENCRYPTION</text>
</svg>`;

  // 4. Responsible Gaming 18+ Seal
  const rep18Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <rect width="160" height="160" rx="24" fill="#1C1014" stroke="#F43F5E" stroke-width="2"/>
  <circle cx="80" cy="62" r="30" fill="none" stroke="#F43F5E" stroke-width="3"/>
  <text x="80" y="73" font-family="Inter, sans-serif" font-size="28" font-weight="800" fill="#F43F5E" text-anchor="middle">18+</text>
  <text x="80" y="112" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#F43F5E" text-anchor="middle" letter-spacing="1">RESPONSIBLE</text>
  <text x="80" y="128" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#FECDD3" text-anchor="middle">PLAY SMART &amp; SAFE</text>
</svg>`;

  // 5. UPI Logo Vector
  const upiSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 50" width="140" height="50">
  <rect width="140" height="50" rx="10" fill="#FFFFFF"/>
  <text x="70" y="32" font-family="'Arial Black', Impact, sans-serif" font-size="22" font-weight="900" fill="#000000" text-anchor="middle" letter-spacing="2">UPI</text>
  <path d="M106 14 L122 25 L106 36 Z" fill="#097939"/>
  <path d="M100 14 L116 25 L100 36 Z" fill="#ED7524"/>
</svg>`;

  // 6. RuPay Logo Vector
  const rupaySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 50" width="140" height="50">
  <rect width="140" height="50" rx="10" fill="#FFFFFF"/>
  <text x="64" y="32" font-family="'Arial Black', Impact, sans-serif" font-size="20" font-weight="900" fill="#172F75" text-anchor="middle">RuPay</text>
  <path d="M108 14 L120 25 L108 36 Z" fill="#F26522"/>
  <path d="M116 14 L128 25 L116 36 Z" fill="#008FD5"/>
</svg>`;

  // 7. Instant Payout Seal
  const instantPayoutSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <defs>
    <linearGradient id="goldBadgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="24" fill="#1A1308" stroke="url(#goldBadgeGrad)" stroke-width="2"/>
  <circle cx="80" cy="58" r="28" fill="none" stroke="#FBBF24" stroke-width="2.5"/>
  <path d="M80 40 V58 L92 66" fill="none" stroke="#FBBF24" stroke-width="3" stroke-linecap="round"/>
  <text x="80" y="106" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#FBBF24" text-anchor="middle" letter-spacing="1">48s INSTANT</text>
  <text x="80" y="124" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#FDE68A" text-anchor="middle">WITHDRAWAL SPEED</text>
</svg>`;

  const svgs = [
    { name: 'brand_logo_gold.svg', content: brandLogoSvg },
    { name: 'trust_rng_certified.svg', content: rngSealSvg },
    { name: 'trust_security_ssl.svg', content: sslSealSvg },
    { name: 'trust_18plus.svg', content: rep18Svg },
    { name: 'trust_instant_payout.svg', content: instantPayoutSvg },
    { name: 'payment_upi.svg', content: upiSvg },
    { name: 'payment_rupay.svg', content: rupaySvg }
  ];

  for (const item of svgs) {
    fs.writeFileSync(path.join(SRC_IMG_DIR, item.name), item.content, 'utf8');
    fs.writeFileSync(path.join(PUB_IMG_DIR, item.name), item.content, 'utf8');
    console.log(`  ✓ Generated SVG: ${item.name}`);
  }
}

async function main() {
  console.log(`Processing new images & SVGs for Lovable project...`);
  
  // 1. Create luxury vectors
  createSvgBadges();

  // 2. Download and optimize new photographic assets
  for (const item of newImages) {
    const rawPath = path.join(SRC_IMG_DIR, `raw_${item.id}.jpg`);
    const finalSrcPath = path.join(SRC_IMG_DIR, `${item.id}.jpg`);
    const finalPubPath = path.join(PUB_IMG_DIR, `${item.id}.jpg`);

    console.log(`Downloading ${item.id}...`);
    try {
      await downloadFile(item.url, rawPath);
      execSync(`"${FFMPEG}" -y -i "${rawPath}" -vf "scale=${item.w}:${item.h}:force_original_aspect_ratio=increase,crop=${item.w}:${item.h}" -q:v 2 "${finalSrcPath}"`, { stdio: 'pipe' });
      // Also copy to public/images for instant Lovable and direct URL support
      fs.copyFileSync(finalSrcPath, finalPubPath);
      try { fs.unlinkSync(rawPath); } catch(e){}
      console.log(`  ✓ Processed ${item.id}.jpg (${(fs.statSync(finalSrcPath).size/1024).toFixed(1)} KB)`);
    } catch(err) {
      console.error(`  ✗ Error downloading ${item.id}:`, err.message);
    }
  }

  // 3. Ensure all previous 14 images are also copied to public/images/
  const existingFiles = fs.readdirSync(SRC_IMG_DIR);
  for (const file of existingFiles) {
    const src = path.join(SRC_IMG_DIR, file);
    const dest = path.join(PUB_IMG_DIR, file);
    if (!fs.existsSync(dest) && fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dest);
      console.log(`  ✓ Mirrored ${file} -> public/images/`);
    }
  }

  console.log(`\nAll images processed and mirrored in both src/assets/images and public/images!`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
