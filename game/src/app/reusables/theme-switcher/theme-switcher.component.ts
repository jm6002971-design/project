import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkinOption {
  id: string;
  name: string;
  badge: string;
  primary: string;
  secondary: string;
  gradient: string;
  icon: string;
  tag?: string;
}

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent implements OnInit {
  isOpen = signal<boolean>(false);
  activeSkin = signal<string>('crimson');
  isDarkMode = signal<boolean>(true);
  toastMessage = signal<string | null>(null);

  skins: SkinOption[] = [
    {
      id: 'agent-gold',
      name: 'Agent VIP Gold',
      badge: 'Executive High-Roller Gold',
      primary: '#f59e0b',
      secondary: '#d97706',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      icon: '👑',
      tag: 'AGENT'
    },
    {
      id: 'affiliate-emerald',
      name: 'Affiliate Partner Jade',
      badge: 'Matrix Cyber Mint & Emerald',
      primary: '#059669',
      secondary: '#06b6d4',
      gradient: 'linear-gradient(135deg, #059669, #06b6d4)',
      icon: '💼',
      tag: 'AFFILIATE'
    },
    {
      id: 'crimson',
      name: 'Royale Crimson',
      badge: 'Classic Red & Amber Flame',
      primary: '#e11d48',
      secondary: '#f59e0b',
      gradient: 'linear-gradient(135deg, #e11d48, #f59e0b)',
      icon: '♠️'
    },
    {
      id: 'cyberpunk',
      name: 'Cyberpunk Neon',
      badge: 'Violet & Cyan Glow',
      primary: '#a855f7',
      secondary: '#06b6d4',
      gradient: 'linear-gradient(135deg, #a855f7, #06b6d4)',
      icon: '⚡'
    },
    {
      id: 'emerald',
      name: 'Emerald Casino',
      badge: 'High Roller Jade Felt',
      primary: '#10b981',
      secondary: '#fbbf24',
      gradient: 'linear-gradient(135deg, #10b981, #fbbf24)',
      icon: '💎'
    },
    {
      id: 'sapphire',
      name: 'Electric Sapphire',
      badge: 'Ocean & Ice Cyan',
      primary: '#0284c7',
      secondary: '#38bdf8',
      gradient: 'linear-gradient(135deg, #0284c7, #38bdf8)',
      icon: '🌊'
    },
    {
      id: 'gold',
      name: 'Imperial Gold',
      badge: 'VIP Amber Luxury',
      primary: '#f59e0b',
      secondary: '#ea580c',
      gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)',
      icon: '🏆'
    }
  ];

  ngOnInit(): void {
    // 1. Initialize Skin
    const savedSkin = localStorage.getItem('rajpoker_skin');
    if (savedSkin && this.skins.some((s) => s.id === savedSkin)) {
      this.applySkin(savedSkin, false);
    } else {
      this.applySkin('crimson', false);
    }

    // 2. Initialize Dark / Light Mode
    const savedMode = localStorage.getItem('rajpoker_mode');
    if (savedMode === 'light') {
      this.setMode('light', false);
    } else {
      this.setMode('dark', false);
    }

    // 3. Listen to external skin switch events (e.g. from Agent & Affiliate buttons)
    if (typeof window !== 'undefined') {
      window.addEventListener('rajpoker-skin-changed', (event: any) => {
        const newSkin = event?.detail?.skin;
        if (newSkin && this.skins.some((s) => s.id === newSkin)) {
          this.applySkin(newSkin, true);
        }
      });
    }
  }

  togglePanel(): void {
    this.isOpen.update((v) => !v);
  }

  selectSkin(skinId: string): void {
    this.applySkin(skinId, true);
    this.isOpen.set(false);
  }

  toggleMode(): void {
    const nextMode = this.isDarkMode() ? 'light' : 'dark';
    this.setMode(nextMode, true);
  }

  setMode(mode: 'light' | 'dark', showToast: boolean): void {
    const isDark = mode === 'dark';
    this.isDarkMode.set(isDark);
    document.documentElement.setAttribute('data-mode', mode);
    localStorage.setItem('rajpoker_mode', mode);

    if (showToast) {
      this.showToast(`Switched to ${isDark ? 'Dark Mode 🌙' : 'Light Mode ☀️'}!`);
    }
  }

  applySkin(skinId: string, showToast: boolean): void {
    this.activeSkin.set(skinId);
    document.documentElement.setAttribute('data-skin', skinId);
    localStorage.setItem('rajpoker_skin', skinId);

    if (showToast) {
      const selected = this.skins.find((s) => s.id === skinId);
      const name = selected ? selected.name : skinId;
      this.showToast(`Applied ${name} Theme! (Visual skin updated, functionality 100% intact)`);
    }
  }

  getActiveSkinName(): string {
    const s = this.skins.find((item) => item.id === this.activeSkin());
    return s ? s.name : 'Theme';
  }

  getActiveSkinGradient(): string {
    const s = this.skins.find((item) => item.id === this.activeSkin());
    return s ? s.gradient : 'linear-gradient(135deg, #e11d48, #f59e0b)';
  }

  private showToast(msg: string): void {
    this.toastMessage.set(msg);
    setTimeout(() => {
      this.toastMessage.set(null);
    }, 3200);
  }
}
