import { CommonModule, DatePipe } from '@angular/common';
import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, HostListener, NgModule, SecurityContext, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { GameLauncherService } from '../../core/services/gameLauncher/game-launcher.service';
import { GameCmsService } from '../../core/services/games_cms/game-cms.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Subscription, debounceTime, forkJoin, fromEvent, timer } from 'rxjs';
import * as loginActions from '../../core/appstates/loginstates/loginActions'
import { LoginComponent } from '../../auth/login/login';
import { AppState } from '../../core/appstates/appState';
import { Store } from '@ngrx/store';
import { LoginState } from '../../core/appstates/loginstates/loginState';
import { PlayerService } from '../../core/services/player/player.service';
import { environment } from '../../../environments/environment';
import { MessageService } from '../../reusables/message/message.service';
import { CashierService } from '../../core/services/cashier/cashier.service';
import { CommonUtilService } from '../../core/services/common/commonutil.service';
import { Testimonials } from '../testimonials/testimonials';

declare var bootstrap: any;
@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule, RouterModule, Testimonials],
  providers: [DatePipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements AfterViewInit {
  instruction: boolean = false;

  private storeSub!: Subscription;
  private closeSub!: Subscription;
  playerLoggedIn: boolean = false;
  LiveCasinoGames: any = [];
  BallaGames: any = [];
  HabenaroGames: any = [];
  visibleImages: any = [];
  eventsRes: any = [];
  cricketEventsRes: any = [];
  soccerEventsRes: any = [];
  private _urlSafe: SafeResourceUrl | null = null;
  get urlSafe(): SafeResourceUrl | null {
    return this._urlSafe;
  }
  set urlSafe(value: SafeResourceUrl | null) {
    this._urlSafe = value;
    if (value) {
      (window as any).$crisp?.push(["do", "chat:hide"]);
    } else {
      (window as any).$crisp?.push(["do", "chat:show"]);
    }
  }
  iosDownloadLink = '';
  loadedImages: Record<string, boolean> = {};
  loadedImages1: Record<string, boolean> = {};
  loadedImages2: Record<string, boolean> = {};
  loadedImagesmain: Record<string, boolean> = {};
  loadedImageslive: Record<string, boolean> = {};
  isMobile: boolean = false;
  isIosSafari: boolean = false;
  isWindows1: boolean = false;
  isAndroid: boolean = false;
  currentSlide: number = 0;
  bannerCurrentIndex: number = 0;
  private bannerAutoTimer: any = null;
  private bannerTouchStartX: number = 0;

  TokenData: any = null;
  HBslotsdata: any = null;
  tokendata: any = null;
  keyname: any = null;
  gameIdIndie: any = null;
  indieUrl_1 = '';
  eventsList: any = [];
  activeLiveCasino = 1;
  activeBestgame = 1;
  eventID: any;
  leagueName: any;
  showPromotion: boolean = true;
  heroRevealed: boolean = false;
  jackpotAmount: number = 58439210;
  private jackpotInterval: any;

  fallbackBanners: any[] = [
    {
      id: 'fb-rakeback-1',
      title: "30% All Players Rake Back",
      subtitle: "Weekly Rakeback for all cash and tournament poker players",
      image: "bannerD3.jpg",
      media: "assets/homebanner/bannerD3.jpg",
      tag: "🎁 30% RAKEBACK",
      badge: "ALL PLAYERS",
      routerLink: "/promotion",
      desktop: true,
      mobile: true,
      ImageStatus: "active"
    },
    {
      id: 'fb-poker-1',
      title: "Biggest Indian Poker Room",
      subtitle: "Compete against India's top poker pros with guaranteed daily prize pools",
      image: "bannerD1.jpg",
      media: "assets/homebanner/bannerD1.jpg",
      tag: "🔥 HIGH STAKES",
      badge: "MEGA GTD",
      routerLink: "/tournaments",
      desktop: true,
      mobile: true,
      ImageStatus: "active"
    },
    {
      id: 'fb-casino-slots',
      title: "Live Casino and Slots",
      subtitle: "Real professional dealers & 1000+ top slot jackpot games",
      image: "bannerD4.jpg",
      media: "assets/homebanner/bannerD4.jpg",
      tag: "⚡ LIVE 24/7",
      badge: "REAL DEALERS",
      routerLink: "/live-casino",
      desktop: true,
      mobile: true,
      ImageStatus: "active"
    },
    {
      id: 'fb-sports-1',
      title: "Sports Bet High Limits",
      subtitle: "In-Play Cricket, Football & Mega Odds with instant settlements",
      image: "bannerD5.jpg",
      media: "assets/homebanner/bannerD5.jpg",
      tag: "🏏 LIVE SPORTS",
      badge: "HIGH LIMITS",
      routerLink: "/sports",
      desktop: true,
      mobile: true,
      ImageStatus: "active"
    },
    {
      id: 'fb-deposit-1',
      title: "Fast Deposit & Withdrawals",
      subtitle: "Lightning-fast 60s UPI payouts with 0 deduction",
      image: "bannerD6.jpg",
      media: "assets/homebanner/bannerD6.jpg",
      tag: "⚡ 60s UPI",
      badge: "INSTANT PAY",
      routerLink: "/promotion",
      desktop: true,
      mobile: true,
      ImageStatus: "active"
    },
    {
      id: 'fb-tournaments-1',
      title: "Tournaments & Freerolls Daily",
      subtitle: "Daily guaranteed prize pools, freerolls, and mega series",
      image: "bannerD2.jpg",
      media: "assets/homebanner/bannerD2.jpg",
      tag: "🏆 FREEROLLS",
      badge: "DAILY GTD",
      routerLink: "/tournaments",
      desktop: true,
      mobile: true,
      ImageStatus: "active"
    },
    {
      id: 'fb-vip-1',
      title: "RajPoker High-Limit VIP Tables",
      subtitle: "India's premier high-stakes online poker room · Certified fair RNG",
      image: "rajpoker_vip_master.jpg",
      media: "assets/homebanner/rajpoker_vip_master.jpg",
      tag: "👑 OFFICIAL VIP",
      badge: "₹10 CR GTD",
      routerLink: "/tournaments",
      desktop: true,
      mobile: true,
      ImageStatus: "active"
    },
    {
      id: 'fb-vip-2',
      title: "Live European VIP Casino Lounge",
      subtitle: "Real professional dealers · 4K live streaming Roulette & Blackjack",
      image: "rajpoker_live_casino_vip.jpg",
      media: "assets/homebanner/rajpoker_live_casino_vip.jpg",
      tag: "⚡ LIVE 24/7",
      badge: "REAL DEALERS",
      routerLink: "/live-casino",
      desktop: true,
      mobile: true,
      ImageStatus: "active"
    }
  ];

  get formattedJackpot(): string {
    return '₹ ' + this.jackpotAmount.toLocaleString('en-IN');
  }

  getBannerMedia(img: any): string {
    if (!img) return 'assets/homebanner/bannerD1.jpg';
    let media = img.media || img.image || '';
    if (typeof window !== 'undefined' && window.innerWidth <= 767) {
      media = media.replace(/bannerD([1-6])\.jpg/g, 'bannerM$1.jpg');
    } else if (typeof window !== 'undefined' && window.innerWidth <= 992 && window.innerWidth > 767) {
      media = media.replace(/bannerD([1-6])\.jpg/g, 'bannerT$1.jpg');
    }
    if (media.startsWith('http://') || media.startsWith('https://') || media.startsWith('assets/')) {
      return media;
    }
    if (media.startsWith('/')) {
      return 'https://cms.rajpoker.com' + media;
    }
    return 'assets/homebanner/' + media;
  }

  claimWelcomeBonus(): void {
    this.closePopup();
    if (!this.playerLoggedIn) {
      this.showPopUp('REGISTER');
    } else {
      this.router.navigate(['/promotion']);
    }
  }

  instantPlayLink(): void {
    if (typeof window !== 'undefined') {
      window.location.href = '/pokerh5?instant-play=true';
    }
  }

  loadFallbackBanners(): void {
    this.selectVisibleImages(this.fallbackBanners, window.innerWidth, true);
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKeyHandler(event: KeyboardEvent): void {
    if (this.showPromotion) {
      this.closePopup();
    }
  }

  private subs: Subscription[] = [];
  @ViewChild('alertHost', { read: ViewContainerRef }) alertHost!: ViewContainerRef;
  @ViewChild('scrollContainer') scrollContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('sportsScroller') sportsScroller?: ElementRef<HTMLDivElement>;
  @ViewChild('scrollContainerLiveCasino') scrollContainerLiveCasino?: ElementRef<HTMLDivElement>;
  @ViewChild('scrollContainerFeatured') scrollContainerFeatured?: ElementRef<HTMLDivElement>;
  @ViewChild('scrollContainerSlots') scrollContainerSlots?: ElementRef<HTMLDivElement>;
  @ViewChild('gameIframe', { static: false }) gameIframe?: ElementRef<HTMLIFrameElement>;
  @ViewChild('gifImg') gifImg!: ElementRef;
  liveInterval: any;
  isLiveRunning: boolean = false;
  isWindows = false;
  isWindowsmac = false;
  urlTokenForgot: string | null;
  urlEventTypeForgot: string | null;
  images = [
    { src: "assets/instractions/1.jpg", alt: 'Frist' },
    { src: "assets/instractions/2.jpg", alt: 'Second' },
    { src: "assets/instractions/3.jpg", alt: 'Third' },
    { src: "assets/instractions/4.jpg", alt: 'Four' },
    { src: "assets/instractions/5.jpg", alt: 'five' },
    { src: "assets/instractions/6.jpg", alt: 'six' },
    { src: "assets/instractions/7.jpg", alt: 'seven' },
    { src: "assets/instractions/8.jpg", alt: 'Final' },
  ]
  touchStartX = 0;
  touchEndX = 0;
  isSwiping = false;
  url: any;
  downloadList: any[] = [];
  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router, private GameCmsService: GameCmsService, private cashir: CashierService, private playerservies: PlayerService, private datePipe: DatePipe,
    private sanitizer: DomSanitizer, private messageservice: MessageService, private componentFactoryResolver: ComponentFactoryResolver, public commonUtilSvc: CommonUtilService) {

    const params1 = new URLSearchParams(window.location.search);
    this.urlTokenForgot = params1.get('token');
    this.urlEventTypeForgot = params1.get('eventType');
  }

  private elNative(el?: ElementRef) {
    return el && el.nativeElement ? el.nativeElement : null;
  }

  private safeCall<T>(fn: () => T) {
    try {
      return fn();
    } catch {
      return null as unknown as T;
    }
  }
  ngOnInit() {
    this.moveToTop();
    this.loadAllGames();
    this.detectDevice();
    this.loadFallbackBanners();
    this.startBannerAutoSlide();

    this.jackpotInterval = setInterval(() => {
      this.jackpotAmount += Math.floor(Math.random() * 55) + 15;
    }, 2800);

    const bannersSub = this.GameCmsService.BannersHome().subscribe({
      next: (data: any) => {
        const list = Array.isArray(data) ? data : (Array.isArray(data?.data) ? data.data : []);
        if (list && list.length > 0) {
          this.selectVisibleImages(list, window.innerWidth);
        }
      },
      error: (err: any) => {
        console.warn('CMS banners failed, keeping fallback banners:', err);
      }
    });
    this.subs.push(bannersSub);


    // subscribe to game lists (parallel)

    const loginSub = this.store.select('loginState').subscribe((loginState: LoginState) => {
      this.playerLoggedIn = !!loginState?.playerLoggedIn?.loggedIn;
      if (this.playerLoggedIn) {
        const games = sessionStorage.getItem('raj_wSession');
        if (games) {
          const s = this.GameCmsService.indicasino(games).subscribe((response: any) => {
            this.TokenData = response;
          });
          this.subs.push(s);
        }
      }
    });
    this.subs.push(loginSub);


    // resize handling: debounce to avoid thrashing
    const resize$ = fromEvent(window, 'resize').pipe(debounceTime(200)).subscribe((_: Event) => {
      this.selectVisibleImages(this.visibleImages.length ? this.visibleImages : this.fallbackBanners, window.innerWidth, true);
    });
    this.subs.push(resize$);
    this.sportsevent();
    this.url = window.location.hostname

    if (this.router.url === '/register') {
      this.showPromotion = false;
      this.heroRevealed = true;
    } else {
      // First display RajPoker popup; hero page is revealed after interaction
      this.showPromotion = true;
      this.heroRevealed = false;
    }
    this.setDownloadOrder();
  }
  setDownloadOrder() {

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    this.url = window.location.hostname

    const baseList = [
      { name: 'Windows', icon: 'fa-brands fa-windows', link: '/download/setup.exe' },

      // { name: 'Mac', icon: 'fa-brands fa-apple', isMac: true }, // ✅ NO link

      { name: 'Instant_Play', icon: 'fa-solid fa-bolt', link: '/pokerh5?instant-play=true' },

      { name: 'Android', icon: 'fa-brands fa-android', link: 'https://app.rajpoker.com/download/mobile/pokermobile.apk' },

      { name: 'ios', icon: 'fa-brands fa-apple', link: `itms-services://?action=download-manifest&url=https://${this.url}/download/mobile/ios/manifest.plist` }
    ];

    if (isIOS) {
      // 🍎 iPhone → iOS 4th
      this.downloadList = [
        baseList[0],
        baseList[3],  // Android
        baseList[1]
        ,      // baseList[4], // iOS
        baseList[2],
      ];
    }
    else if (isAndroid) {
      // 🤖 Android → Android 4th
      this.downloadList = [
        baseList[0],
        baseList[2],  // Android
        baseList[1]
        ,      // baseList[4], // iOS
        baseList[3],
      ];
    }
    else {
      // 💻 Desktop → default
      this.downloadList = baseList;
    }
  }
  sportsevent() {
    this.playerservies.getCombinedEvents().subscribe((data: any) => {
      this.processEvents(data);
    });
  }
  changeSlide(direction: string) {
    if (direction === 'left') {
      this.currentSlide = Math.max(0, this.currentSlide - 1);
    } else if (direction === 'right') {
      this.currentSlide = Math.min(this.images.length - 1, this.currentSlide + 1);
    }
  }
  detectDevice() {
    const width = window.innerWidth;
    const ua = navigator.userAgent.toLowerCase();

    this.isMobile = width <= 767;
    this.isAndroid = /android/.test(ua);
    this.isIosSafari = /iphone|ipad|ipod/.test(ua);
    this.isWindows = (/windows|macintosh|mac os x/.test(ua)) &&
      !this.isAndroid &&
      !this.isIosSafari;
    this.isWindowsmac = (/macintosh|mac os x/.test(ua)) &&
      !this.isAndroid &&
      !this.isIosSafari;
    this.isWindows1 = /windows nt/.test(ua);
  }
  loadAllGames() {
    this.GameCmsService.getHabaneroGamesJson().subscribe({
      next: (res: any) => {
        const list = Array.isArray(res) ? res : [];
        this.HabenaroGames = list.slice(0, 24).map((g: any) => ({
          ...g,
          gameName: g.gameName || g.Name || g.KeyName
        }));
      },
      error: (err: any) => {
        console.warn('Error loading Habanero slots:', err);
      }
    });

    this.playerservies.torrogames().subscribe({
      next: (res: any) => {
        this.LiveCasinoGames = Array.isArray(res) ? res : [];
      },
      error: (err: any) => {
        console.warn('Error loading live casino games:', err);
      }
    });
  }



  ngAfterViewInit(): void {
    // initialize bootstrap carousel safely if present
    const carouselEl = document.getElementById('carouselExampleIndicators');
    if (carouselEl && typeof bootstrap !== 'undefined') {
      // init only once
      try {
        // create only if not already initialised
        if (!carouselEl.getAttribute('data-bs-initialized')) {
          const carousel = new bootstrap.Carousel(carouselEl, {
            interval: 3800,
            ride: 'carousel',
            pause: false
          });
          carouselEl.setAttribute('data-bs-initialized', 'true');
        }
      } catch {
        // swallow bootstrap init errors
      }
    }

    timer(50).subscribe(() => this.scrollingActiveBtn());
  }
  openInstagram(): void {
    if (typeof window !== 'undefined') {
      window.open('https://www.instagram.com/raj_poker_casino?igsh=ZDRkaWRrNDhicHlu', '_blank', 'noopener,noreferrer');
    }
  }

  closePopup() {
    this.showPromotion = false;
    this.heroRevealed = true;
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }

  startBannerAutoSlide(): void {
    this.stopBannerAutoSlide();
    this.bannerAutoTimer = setInterval(() => {
      this.nextBannerSlide();
    }, 4000);
  }

  stopBannerAutoSlide(): void {
    if (this.bannerAutoTimer) {
      clearInterval(this.bannerAutoTimer);
      this.bannerAutoTimer = null;
    }
  }

  nextBannerSlide(): void {
    if (!this.visibleImages || this.visibleImages.length <= 1) return;
    this.bannerCurrentIndex = (this.bannerCurrentIndex + 1) % this.visibleImages.length;
  }

  prevBannerSlide(): void {
    if (!this.visibleImages || this.visibleImages.length <= 1) return;
    this.bannerCurrentIndex = (this.bannerCurrentIndex - 1 + this.visibleImages.length) % this.visibleImages.length;
  }

  goToBannerSlide(index: number): void {
    this.bannerCurrentIndex = index;
    this.startBannerAutoSlide();
  }

  onBannerTouchStart(e: TouchEvent): void {
    if (e.touches && e.touches.length > 0) {
      this.bannerTouchStartX = e.touches[0].clientX;
    }
  }

  onBannerTouchEnd(e: TouchEvent): void {
    if (e.changedTouches && e.changedTouches.length > 0) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = this.bannerTouchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          this.nextBannerSlide();
        } else {
          this.prevBannerSlide();
        }
        this.startBannerAutoSlide();
      }
    }
  }

  ngOnDestroy(): void {
    this.stopBannerAutoSlide();
    if (this.jackpotInterval) {
      clearInterval(this.jackpotInterval);
    }
    this.subs.forEach(s => s.unsubscribe());
    this.subs = [];
    this.subtabClose();
  }
  private selectVisibleImages(all: any[], width: number, forceRefresh = false) {
    if (!Array.isArray(all) || all.length === 0) return;

    all.forEach((b: any) => {
      if (!b.media && b.image) b.media = b.image;
      if (!b.media && b.heroBanner?.url) b.media = b.heroBanner.url;
      if (!b.media && b.heroBanner?.data?.attributes?.url) b.media = b.heroBanner.data.attributes.url;
    });

    const prev = JSON.stringify(
      this.visibleImages.map((i: any) => i.documentId || i.image || i.id)
    );

    let selected: any[] = [];

    if (width <= 767) {
      selected = all.filter((b: any) =>
        b.ImageStatus === 'active' &&
        (b.mobile === true || b.mobile === 'true')
      );
    }
    else {
      selected = all.filter((b: any) =>
        b.ImageStatus === 'active' &&
        (b.desktop === true || b.desktop === 'true' || b.tablet === true || b.tab === true || b.tablet === 'true' || b.tab === 'true')
      );
    }

    if (selected.length === 0) {
      selected = all;
    }

    const next = JSON.stringify(
      selected.map(i => i.documentId || i.image || i.id)
    );

    if (forceRefresh || prev !== next) {
      this.visibleImages = selected;
      if (this.bannerCurrentIndex >= this.visibleImages.length) {
        this.bannerCurrentIndex = 0;
      }
      setTimeout(() => this.scrollingActiveBtn(), 50);
    }
  }

  isToday(dateString: string): boolean {
    if (!dateString) return false;
    const eventDate = new Date(dateString);
    const today = new Date();
    return (
      eventDate.getFullYear() === today.getFullYear() &&
      eventDate.getMonth() === today.getMonth() &&
      eventDate.getDate() === today.getDate()
    );
  }

  isTomorrow(dateString: string): boolean {
    if (!dateString) return false;
    const eventDate = new Date(dateString);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return (
      eventDate.getFullYear() === tomorrow.getFullYear() &&
      eventDate.getMonth() === tomorrow.getMonth() &&
      eventDate.getDate() === tomorrow.getDate()
    );
  }

  private getEventTag(event: any): string {
    if (!event) return 'Upcoming';
    if (event.isLive) return 'Live';
    if (this.isToday(event.startEventDate || event.startDate)) return 'Today';
    if (this.isTomorrow(event.startEventDate || event.startDate)) return 'Tomorrow';
    return 'Upcoming';
  }
  processEvents(data: any) {
    if (!data) return;

    this.eventsRes = [];
    this.cricketEventsRes = [];
    this.soccerEventsRes = [];

    const eventsList = Array.isArray(data.events) ? data.events : [];

    // Cricket or Football valid selection checker
    const isValidMarket = (market: any) => {
      if (!market || !Array.isArray(market.selections)) return false;
      const types = market.selections.map((s: any) => (s && s.outcomeType) || '');
      return types.includes('Home') && types.includes('Away');
    };

    for (const event of eventsList) {
      const sportName = (event.sportName || '').toLowerCase();

      if (!Array.isArray(event.markets)) continue;

      for (const market of event.markets) {

        /** ---------------------------------------------------
         * 1️⃣ Filter: FOOTBALL + FT Spread Only
         * ---------------------------------------------------- */
        if (sportName === 'american football' || sportName === 'football') {
          if (market?.marketType?.name !== 'FT Spread') continue; // Only FT Spread
          if (!isValidMarket(market)) continue;
        }

        /** ---------------------------------------------------
         * 2️⃣ Filter: Cricket (your existing logic)
         * ---------------------------------------------------- */
        else if (sportName === 'cricket') {
          if (!isValidMarket(market)) continue;
        }

        /** ---------------------------------------------------
         * 3️⃣ Skip all other sports
         * ---------------------------------------------------- */
        else {
          continue;
        }

        /** ---------------------------------------------------
         * 4️⃣ Prepare cleaned market object
         * ---------------------------------------------------- */
        market.leagueName = event.leagueName || '';
        market.eventLeagId = event._id;
        market.sportName = event.sportName;
        market.score = event.score || null;
        market.formattedDate =
          this.datePipe.transform(market.startDate || event.startDate, 'EEE, MMM d, hh:mm a') || '';
        market.eventTag = this.getEventTag(event);

        // Home / Away / Tie
        if (Array.isArray(market.selections)) {
          for (const sel of market.selections) {
            if (!sel || !sel.outcomeType) continue;

            const t = sel.outcomeType;
            if (t === 'Home') market.homeValuddde = sel;
            else if (t === 'Away') market.awayValue = sel;
            else if (t === 'Tie' || t === 'Draw') market.tieValue = sel;
          }
        }

        /** ---------------------------------------------------
         * 5️⃣ Push without duplicates
         * ---------------------------------------------------- */
        if (!this.eventsRes.some((e: any) => e._id === market._id)) {
          this.eventsRes.push(market);
        }

        // Separate arrays
        if (sportName === 'cricket') this.cricketEventsRes.push(market);
        else this.soccerEventsRes.push(market);
      }
    }

    /** ---------------------------------------------------
     * 6️⃣ Check if any event is LIVE → auto-refresh API
     * ---------------------------------------------------- */
    const liveEvents = this.eventsRes.some((e: any) => e.eventTag === 'Live');
    this.manageLiveInterval(liveEvents);

    this.scrollingActiveBtn();
    console.log(this.eventsRes);
  }

  manageLiveInterval(hasLive: boolean) {
    if (hasLive && !this.isLiveRunning) {
      this.isLiveRunning = true;
      this.liveInterval = setInterval(() => {
        this.sportsevent();
      }, 60000);
    }

    if (!hasLive && this.isLiveRunning) {
      // stop if no more live events
      clearInterval(this.liveInterval);
      this.isLiveRunning = false;
    }
  }
  scrollingActiveBtn() {
    // check each container safely
    this.safeCall(() => this.checkOverflow());
    this.safeCall(() => this.checkFeaturedOverflow());
    this.safeCall(() => this.checkSlotsOverflow());
    this.safeCall(() => this.checkNavigationButtonsliveCasino());
    this.safeCall(() => this.updateShadowEffectsliveCasino());
    // schedule an extra-check after DOM settle
    setTimeout(() => {
      this.safeCall(() => this.checkOverflow());
      this.safeCall(() => this.checkFeaturedOverflow());
      this.safeCall(() => this.checkSlotsOverflow());
      this.safeCall(() => this.checkNavigationButtonsliveCasino());
      this.safeCall(() => this.updateShadowEffectsliveCasino());
    }, 300);
  }
  moveToTop() {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  }
  private scrollByElement(el?: ElementRef, amount = 300) {
    const native = this.elNative(el);
    if (!native) return;
    native.scrollBy({ left: amount, behavior: 'smooth' });
  }
  scrollRight() {
    this.scrollByElement(this.scrollContainerFeatured, 300);
    setTimeout(() => this.safeCall(() => this.checkNavigationButtons()), 300);
  }
  scrollLeft() {
    this.scrollByElement(this.scrollContainerFeatured, -300);
    setTimeout(() => this.safeCall(() => this.checkNavigationButtons()), 300);
  }
  scrollRightSlots() {
    this.scrollByElement(this.scrollContainerSlots, 300);
    setTimeout(() => this.safeCall(() => this.checkNavigationButtons()), 300);
  }
  scrollLeftSlots() {
    this.scrollByElement(this.scrollContainerSlots, -300);
    setTimeout(() => this.safeCall(() => this.checkNavigationButtons()), 300);
  }

  scrollNext() {
    const amount = 350 + parseFloat(getComputedStyle(document.documentElement).fontSize || '16');
    const native = this.elNative(this.sportsScroller);
    if (!native) return;
    native.scrollBy({ left: amount, behavior: 'smooth' });
  }

  scrollPrev() {
    const amount = 350 + parseFloat(getComputedStyle(document.documentElement).fontSize || '16');
    const native = this.elNative(this.sportsScroller);
    if (!native) return;
    native.scrollBy({ left: -amount, behavior: 'smooth' });
  }

  scrollLeftliveCasino() {
    this.scrollByElement(this.scrollContainerLiveCasino, -300);
    setTimeout(() => {
      this.safeCall(() => this.checkNavigationButtonsliveCasino());
      this.safeCall(() => this.updateShadowEffectsliveCasino());
    }, 300);
  }
  scrollRightliveCasino() {
    this.scrollByElement(this.scrollContainerLiveCasino, 300);
    setTimeout(() => {
      this.safeCall(() => this.checkNavigationButtonsliveCasino());
      this.safeCall(() => this.updateShadowEffectsliveCasino());
    }, 300);
  }

  // Check overflow for sports scroller
  checkOverflow() {
    const container: HTMLElement | null = this.elNative(this.sportsScroller);
    if (!container) return;

    const prevBtn = document.querySelector('.sports_btn_prev') as HTMLButtonElement | null;
    const nextBtn = document.querySelector('.sports_btn_next') as HTMLButtonElement | null;

    if (!prevBtn || !nextBtn) return;

    const isOverflowing = container.scrollWidth > container.clientWidth;
    prevBtn.disabled = container.scrollLeft <= 0;
    nextBtn.disabled = !isOverflowing || container.scrollLeft + container.clientWidth >= container.scrollWidth;

    // ensure listener only attached once
    if (!container.hasAttribute('data-sports-listener')) {
      container.setAttribute('data-sports-listener', 'true');
      container.addEventListener('scroll', () => {
        prevBtn.disabled = container.scrollLeft <= 0;
        nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
      });
    }
  }

  checkFeaturedOverflow() {
    const container: HTMLElement | null = this.elNative(this.scrollContainerFeatured);
    if (!container) return;

    const prevBtn = document.querySelector('.featured_btn_prev') as HTMLButtonElement | null;
    const nextBtn = document.querySelector('.featured_btn_next') as HTMLButtonElement | null;

    if (!prevBtn || !nextBtn) return;

    const isOverflowing = container.scrollWidth > container.clientWidth;
    prevBtn.disabled = container.scrollLeft <= 0;
    nextBtn.disabled = !isOverflowing || container.scrollLeft + container.clientWidth >= container.scrollWidth;

    if (!container.hasAttribute('data-featured-listener')) {
      container.setAttribute('data-featured-listener', 'true');
      container.addEventListener('scroll', () => {
        prevBtn.disabled = container.scrollLeft <= 0;
        nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
      });
    }
  }

  checkSlotsOverflow() {
    const container: HTMLElement | null = this.elNative(this.scrollContainerSlots);
    if (!container) return;

    const prevBtn = document.querySelector('.slots_btn_prev') as HTMLButtonElement | null;
    const nextBtn = document.querySelector('.slots_btn_next') as HTMLButtonElement | null;

    if (!prevBtn || !nextBtn) return;

    const isOverflowing = container.scrollWidth > container.clientWidth;
    prevBtn.disabled = container.scrollLeft <= 0;
    nextBtn.disabled = !isOverflowing || container.scrollLeft + container.clientWidth >= container.scrollWidth;

    if (!container.hasAttribute('data-slots-listener')) {
      container.setAttribute('data-slots-listener', 'true');
      container.addEventListener('scroll', () => {
        prevBtn.disabled = container.scrollLeft <= 0;
        nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
      });
    }
  }

  private checkNavigationButtons() {
    const container = this.elNative(this.scrollContainer);
    const prevBtn = document.querySelector('.prev_btn') as HTMLButtonElement | null;
    const nextBtn = document.querySelector('.next_btn') as HTMLButtonElement | null;
    if (!container || !prevBtn || !nextBtn) return;
    prevBtn.disabled = container.scrollLeft <= 10;
    nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
  }

  private checkNavigationButtonsliveCasino() {
    const container = this.elNative(this.scrollContainerLiveCasino);
    const prevBtn = document.querySelector('.prev_btnLive') as HTMLButtonElement | null;
    const nextBtn = document.querySelector('.next_btnLive') as HTMLButtonElement | null;
    if (!container || !prevBtn || !nextBtn) return;
    prevBtn.disabled = container.scrollLeft <= 10;
    nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
  }

  private updateShadowEffectsliveCasino() {
    const container = this.elNative(this.scrollContainerLiveCasino);
    if (!container) return;
    const wrapper = container.parentElement as HTMLElement | null;
    if (!wrapper) return;
    const hasLeft = container.scrollLeft > 10;
    const hasRight = container.scrollLeft + container.clientWidth < container.scrollWidth - 10;
    wrapper.classList.toggle('has-left', hasLeft);
    wrapper.classList.toggle('has-right', hasRight);
  }

  onScroll() {
    this.safeCall(() => this.checkNavigationButtons());
  }
  onScrollliveCasino() {
    this.safeCall(() => this.checkNavigationButtonsliveCasino());
    this.safeCall(() => this.updateShadowEffectsliveCasino());
  }

  showPopUp(value: string) {
    this.store.dispatch(new loginActions.ResetState());
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      LoginComponent
    );
    // this.alertHost.createComponent(LoginComponent)


    const hostViewContainerRef = this.alertHost;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.formState = value;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }


  navigates(route: any) {
    this.router.navigate([route])
  }
  subtabClose() {
    this.urlSafe = null;
    var session = sessionStorage.getItem('closeGameSession');
    if (session) {
      let body = {
        gameSession: session
      }
      this.playerservies.closesession(body).subscribe((data: any) => {
        console.log(data);
      })
      this.playerservies.gameclose(session).subscribe((data: any) => {
        console.log(data)
      })
    }
  }

  toggleFullScreen(): void {
    if (!this.gameIframe || !this.gameIframe.nativeElement) {
      console.warn('iframe not available');
      return;
    }
    const iframe = this.gameIframe.nativeElement as any;
    if (!document.fullscreenElement) {
      if (iframe.requestFullscreen) iframe.requestFullscreen();
      else if (iframe.mozRequestFullScreen) iframe.mozRequestFullScreen();
      else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
      else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  liveDealerMain(gameId: any, gameName: any, provider: any) {
    if (provider === 'Evolution') this.evogamesin(gameId, gameName);
    else this.liveDealer(gameId, gameName);
  }
  liveDealer(gname: any, gameName: any) {
    if (!this.playerLoggedIn) {
      this.showPopUp('LOGIN');
      return;
    }
    const wsessionId = sessionStorage.getItem('raj_wSession');
    const sub = this.GameCmsService.getEzugi(wsessionId).subscribe((liveDealerdata: any) => {
      if (liveDealerdata?.EZUGI_TOKEN) {
        const ezugiLunch =
          liveDealerdata.EZUGI_GAME_URL +
          'token=' +
          liveDealerdata.EZUGI_TOKEN +
          '&operatorId=' +
          liveDealerdata.EZUGI_OPERATOR_ID +
          '&clientType=html5&language=en&selectGame=' +
          gname;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(ezugiLunch);
        this.moveToTop();
      }
    });
    this.subs.push(sub);
  }

  evogamesin(gameId: any, gameName: any) {
    if (!this.playerLoggedIn) {
      this.showPopUp('LOGIN');
      return;
    }
    const wesessioid = sessionStorage.getItem('raj_wSession');
    const sub = this.GameCmsService.getEzugi(wesessioid).subscribe((data: any) => {
      if (data?.EZUGI_TOKEN) {
        const evourl = `${data.EZUGI_GAME_URL}token=${data.EZUGI_TOKEN}&operatorId=${data.EZUGI_OPERATOR_ID}&language=en&clientType=html5&openTable=${gameId}&homeUrl=${window.location.origin}/home`;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(evourl);
        this.moveToTop();
      }
    });
    this.subs.push(sub);
  }

  habanaroGm(gameName: any, gameType: any) {
    if (!this.playerLoggedIn) {
      this.showPopUp('LOGIN');
      return;
    }
    this.keyname = gameType;
    const profile = sessionStorage.getItem('raj_wSession');
    const sub = this.GameCmsService.heblounchSession(profile, this.keyname).subscribe(
      (data: any) => {
        if (data.STATUS == 'SUCCESS') {
          const gamelunchurl = data?.URL;
          if (gamelunchurl) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(gamelunchurl);
            this.moveToTop();
          }
        } else {
          this.messageservice.error('Failed',
            data.Message)
        }
      },
      () => {
      }
    );
    this.subs.push(sub);
  }


  ballagamesLaunch(id: any, gameName: any) {
    if (!this.playerLoggedIn) {
      this.showPopUp('LOGIN');

      return;
    }
    this.gameIdIndie = id;
    const token = this.TokenData;
    if (!token) {
      const ses = sessionStorage.getItem('raj_wSession');
      const s = this.GameCmsService.indicasino(ses || '').subscribe((response: any) => {
        this.TokenData = response;
        this._openIndieGame(id, gameName);
      });
      this.subs.push(s);
      return;
    }
    this._openIndieGame(id, gameName);
  }

  private _openIndieGame(id: any, gameName: any) {
    try {
      const sendToIndie = `gameId=${id}&playerToken=${encodeURIComponent(this.TokenData?.token || '')}&site=rajpoker`;
      const indieUrlBase = this.TokenData?.url || '';
      this.indieUrl_1 = indieUrlBase.endsWith('/') ? indieUrlBase + gameName + '?' + sendToIndie : indieUrlBase + '/' + gameName + '?' + sendToIndie;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.indieUrl_1);
      this.moveToTop();
    } catch {
      // ignore
    }
  }

  navigateSport() {
    this.router.navigate(['/sports']);
  }
  onImageLoad(key: number | string) {
    this.loadedImages[String(key)] = true;
    this.loadedImages1[String(key)] = true;
    this.loadedImages2[String(key)] = true;
  }

  tieleagId(seleId: any, eventId: any) {
    localStorage.setItem('selectionsId', seleId);
    localStorage.setItem('EventId', eventId);
    if (this.playerLoggedIn) this.router.navigate(['/sports']);
    else this.showPopUp('LOGIN');
  }
  onImageLoadHome(key: number | string) {
    this.loadedImagesmain[String(key)] = true;
  }

  onImageLoadlive(key: string | number) {
    this.loadedImageslive[String(key)] = true;
  }
  onChangeActive(num: number) {
    this.activeLiveCasino = num;
  }
  onChangeActiveBestGame(num: number) {
    this.activeBestgame = num;
  }
  stopGif() {
    const img = this.gifImg.nativeElement;
    const src = img.src;
    setTimeout(() => {
      img.src = src.replace('.gif', '.png'); // Replace with first frame as PNG
    }, 1000); // duration of GIF
  }
  routerLinks(data: any) {
    const link = data?.routerLink;

    if (!link) return;

    const isDashboardLink = link.startsWith('/dashboard');

    if (isDashboardLink && !this.playerLoggedIn) {
      this.showPopUp('LOGIN');
      return;
    }

    this.router.navigate([link]);
  }
  macInstruction(event: Event, data: any) {

    event.preventDefault(); // 🔥 stop page reload
    console.log(data)
    if (data === 'open') {
      console.log(data)
      this.instruction = true;
    } else {
      this.instruction = false;
    }
  }
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.isSwiping = true;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isSwiping) return;
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {
    if (!this.isSwiping) return;

    const swipeDistance = this.touchStartX - this.touchEndX;
    const minSwipeDistance = 50; // 👈 important for iOS

    if (swipeDistance > minSwipeDistance) {
      // swipe LEFT → next
      this.changeSlide('right');
    } else if (swipeDistance < -minSwipeDistance) {
      // swipe RIGHT → previous
      this.changeSlide('left');
    }

    this.isSwiping = false;
  }

  torromethod(game: any) {
    console.log(game)
    if (this.playerLoggedIn) {
      const data = localStorage.getItem('providerStatus');

      if (data) {
        const providerData = JSON.parse(data);
        if (providerData.status == false) {
          this.messageservice.success("Success", providerData.message)
          return;
        }
      }
      let body = {
        "gameId": game.game_code,
        "provider": game.provider
      }
      this.playerservies.torrolaunch(body).subscribe((data: any) => {
        if (data) {
          sessionStorage.setItem('closeGameSession', data.token);
          if (data.url) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
            if (this.urlSafe) {
              this.moveToTop()
            }

          } else {
            this.messageservice.error("Failed", data.message)
          }
        }
      })
    } else {
      this.showPopUp('LOGIN');
    }


  }

  getGameImage(game: any, i: number): string {
    return i < 9
      ? `assets/GameImgs/evolution_new_games/${game.id}.jpg`
      : game.images;
  }
  gvproviderapi(data: any) {
    if (this.playerLoggedIn) {
      let body = {
        "gameId": data.id,
        "provider": data.provider + "GV",
        "language": "en"
      }
      this.playerservies.gvproviderapi(body).subscribe((data: any) => {
        if (data) {
          sessionStorage.setItem('closeGameSession', data.token);
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
          if (this.urlSafe) {
            this.moveToTop()
          }
        }
      })
    } else {
      this.showPopUp('LOGIN');

    }
  }

  vivogameLaunch(game: any) {
    if (this.playerLoggedIn) {
      if (game.provider == 'vivogaming') {
        this.playerservies.gamelunallvivogaming().subscribe((response: any) => {
          const launchUrl = response.VIVO_GAME_LAUNCH_URL.split("selectedGame=")[0] + `selectedGame=${game.gameId}` + response.VIVO_GAME_LAUNCH_URL.split("selectedGame=All")[1];
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(launchUrl);
          if (this.urlSafe) {
            this.moveToTop()
          }

        })
      } else {
        this.playerservies.gamelunallproviders(game).subscribe((response: any) => {
          if (response) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(response.url);
            if (this.urlSafe) {
              this.moveToTop()
            }
          }
          console.log(response)
        })
      }
    } else {
      this.showPopUp('LOGIN');

    }
  }
}