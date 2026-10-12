const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE = path.resolve('c:/Users/sai/Downloads/game/rummy-hero');
const IMG_DIR = path.join(BASE, 'src', 'assets', 'images');
const FFMPEG = path.resolve('c:/Users/sai/Downloads/game/node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');

fs.mkdirSync(IMG_DIR, { recursive: true });

const images = [
  // 1. Studio: Luxury Rummy Felt Table
  {
    id: 'studio_rummy_table',
    url: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=1200&q=85',
    w: 1200, h: 800
  },
  // 2. Studio: High-Stakes VIP Poker Suite
  {
    id: 'studio_poker_arena',
    url: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1200&q=85',
    w: 1200, h: 800
  },
  // 3. Studio: Championship Grand Arena
  {
    id: 'studio_tournament',
    url: 'https://images.unsplash.com/photo-1541278107931-e006523892df?w=1200&q=85',
    w: 1200, h: 800
  },
  // 4. Studio: Private Velvet Lounge
  {
    id: 'studio_vip_lounge',
    url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&q=85',
    w: 1200, h: 800
  },
  // 5. Craft: Tactile Embossed Cards Close-Up
  {
    id: 'craft_cards',
    url: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=1200&q=85',
    w: 1200, h: 800
  },
  // 6. Craft: Digital Tactile Gaming Space
  {
    id: 'digital_felt',
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=85',
    w: 1200, h: 800
  },
  // 7. Craft: Verified Security & Fair Play
  {
    id: 'rng_security',
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=85',
    w: 1200, h: 800
  },
  // 8. Journal: The Mathematics of Pure Sequences
  {
    id: 'journal_art_of_cards',
    url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=1200&q=85',
    w: 1200, h: 800
  },
  // 9. Journal: Achieving Flow State in High-Stakes Games
  {
    id: 'journal_psychology_flow',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=85',
    w: 1200, h: 800
  },
  // 10. Journal: Tactile Materiality in Digital Experiences
  {
    id: 'journal_tactile_design',
    url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&q=85',
    w: 1200, h: 800
  },
  // 11. Avatar: Alex Mercer (Grandmaster)
  {
    id: 'avatar_alex',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=85',
    w: 400, h: 400
  },
  // 12. Avatar: Sophia Chen (National Champion)
  {
    id: 'avatar_sophia',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=85',
    w: 400, h: 400
  },
  // 13. Avatar: Marcus Vance (High-Roller Strategist)
  {
    id: 'avatar_marcus',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85',
    w: 400, h: 400
  },
  // 14. Avatar: Elena Rostova (VIP Club Ambassador)
  {
    id: 'avatar_elena',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=85',
    w: 400, h: 400
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

async function main() {
  console.log(`Downloading ${images.length} premium photographic assets for Rummy Hero...`);

  for (const item of images) {
    const rawPath = path.join(IMG_DIR, `raw_${item.id}.jpg`);
    const finalPath = path.join(IMG_DIR, `${item.id}.jpg`);

    console.log(`Downloading ${item.id}...`);
    try {
      await downloadFile(item.url, rawPath);
      // Scale & crop cleanly
      execSync(`"${FFMPEG}" -y -i "${rawPath}" -vf "scale=${item.w}:${item.h}:force_original_aspect_ratio=increase,crop=${item.w}:${item.h}" -q:v 2 "${finalPath}"`, { stdio: 'pipe' });
      try { fs.unlinkSync(rawPath); } catch(e){}
      console.log(`  ✓ Processed ${item.id}.jpg (${(fs.statSync(finalPath).size/1024).toFixed(1)} KB)`);
    } catch(err) {
      console.error(`  ✗ Error downloading ${item.id}:`, err.message);
    }
  }

  console.log("\nAll images downloaded and processed successfully into src/assets/images/!");
}

main().catch(err => {
  console.error("Download error:", err);
  process.exit(1);
});
