import {
  LoginComponent
} from "./chunk-RMSRX2PI.js";
import {
  GameCmsService
} from "./chunk-YQS7B7N5.js";
import {
  NgxPaginationModule
} from "./chunk-IMYJ7Z7K.js";
import "./chunk-QSOTGL7G.js";
import "./chunk-PYDFV3LO.js";
import {
  CommonUtilService
} from "./chunk-BI23JTGF.js";
import {
  MessageService
} from "./chunk-YCU5ZQFP.js";
import {
  PlayerService,
  ResetState
} from "./chunk-HXFVUPJ2.js";
import {
  FormsModule
} from "./chunk-FAEKDNT6.js";
import {
  environment
} from "./chunk-2Y7B2BAT.js";
import {
  Store
} from "./chunk-V7ZNEVP2.js";
import {
  DomSanitizer,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S5ZOBF7L.js";
import {
  Component,
  ComponentFactoryResolver$1,
  ViewChild,
  ViewContainerRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/pages/live-casino-page/live-casino-page.ts
var _c0 = ["alertHost"];
var _c1 = ["gameIframe"];
function LiveCasinoPage_ng_template_0_Template(rf, ctx) {
}
function LiveCasinoPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "button", 16);
    \u0275\u0275listener("click", function LiveCasinoPage_ng_container_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.subtabClose());
    });
    \u0275\u0275text(3, " \u2715 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "iframe", 17, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 18);
    \u0275\u0275listener("click", function LiveCasinoPage_ng_container_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFullScreen());
    });
    \u0275\u0275element(7, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r2.urlSafe, \u0275\u0275sanitizeResourceUrl);
  }
}
function LiveCasinoPage_div_28_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 22);
    \u0275\u0275listener("click", function LiveCasinoPage_div_28_article_1_Template_article_click_0_listener() {
      const game_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.gvproviderapi(game_r5));
    });
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275elementStart(2, "div", 24)(3, "button", 25);
    \u0275\u0275element(4, "img", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.getGameImage(game_r5, i_r6), \u0275\u0275sanitizeUrl)("alt", game_r5.title + " live casino game");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r5.title, "");
  }
}
function LiveCasinoPage_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, LiveCasinoPage_div_28_article_1_Template, 5, 4, "article", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.torrogames);
  }
}
function LiveCasinoPage_div_29_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 22);
    \u0275\u0275listener("click", function LiveCasinoPage_div_29_article_1_Template_article_click_0_listener() {
      const game_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vivogameLaunch(game_r8));
    });
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementStart(2, "div", 24)(3, "button", 25);
    \u0275\u0275element(4, "img", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("src", "assets/games/vivogaming/", game_r8.gameId, "_230.webp", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r8.title + " live casino game");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r8.title, "");
  }
}
function LiveCasinoPage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, LiveCasinoPage_div_29_article_1_Template, 5, 5, "article", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.torrogames);
  }
}
function LiveCasinoPage_div_30_ng_container_1_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 22);
    \u0275\u0275listener("click", function LiveCasinoPage_div_30_ng_container_1_article_1_Template_article_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const game_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.Pragmaticgamesres(game_r10.tableName, game_r10.tableId));
    });
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32)(5, "button", 33);
    \u0275\u0275element(6, "img", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", game_r10.tableImage, \u0275\u0275sanitizeUrl)("alt", game_r10.title + " live casino game");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", game_r10.tableName, " ");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r10.title, "");
  }
}
function LiveCasinoPage_div_30_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LiveCasinoPage_div_30_ng_container_1_article_1_Template, 7, 5, "article", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const game_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r10.tableName !== "BACCARAT_MULTIPLAY");
  }
}
function LiveCasinoPage_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, LiveCasinoPage_div_30_ng_container_1_Template, 2, 1, "ng-container", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pragmaticLivecasino);
  }
}
var LiveCasinoPage = class _LiveCasinoPage {
  get urlSafe() {
    return this._urlSafe;
  }
  set urlSafe(value) {
    this._urlSafe = value;
    if (value) {
      window.$crisp?.push(["do", "chat:hide"]);
    } else {
      window.$crisp?.push(["do", "chat:show"]);
    }
  }
  constructor(store, router, playerserive, messageservice, GameCmsService2, sanitizer, componentFactoryResolver, commonUtilSvc) {
    this.store = store;
    this.router = router;
    this.playerserive = playerserive;
    this.messageservice = messageservice;
    this.GameCmsService = GameCmsService2;
    this.sanitizer = sanitizer;
    this.componentFactoryResolver = componentFactoryResolver;
    this.commonUtilSvc = commonUtilSvc;
    this._urlSafe = null;
    this.windows = [];
    this.ProviderName = "Ezugi";
    this.playerLoggedIn = false;
    this.loginstate = "";
    this.p = 1;
    this.selectnum = 24;
  }
  ngOnInit() {
    this.moveToTop();
    this.torrobtn("Evolution");
    this.store.select("loginState").subscribe((loginState) => {
      console.log(loginState.playerLoggedIn);
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
      }
    });
    this.connect();
  }
  connect() {
    const bodydata = [];
    const ws = new WebSocket("wss://dga.pragmaticplaylive.net/ws");
    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "available",
        casinoId: "ppcda00000006808",
        lobbyId: "103"
      }));
    };
    const tableIds = [];
    const handleTrade = (trade) => {
      if (trade.hasOwnProperty("tableKey")) {
        trade.tableKey.forEach((key) => {
          ws.send(JSON.stringify({
            type: "subscribe",
            key,
            currency: "USD",
            casinoId: "ppcda00000006808",
            lobbyId: "103"
          }));
        });
      }
      if (trade.hasOwnProperty("tableId") && !tableIds.includes(trade.tableId)) {
        tableIds.push(trade.tableId);
        bodydata.push(trade);
        this.pragmaticLivecasino = bodydata;
      }
    };
    ws.onmessage = (e) => {
      const trade = JSON.parse(e.data);
      handleTrade(trade);
    };
    ws.onclose = (e) => {
      console.log("Socket closed, reconnect in 1 min", e.reason);
    };
    ws.onerror = (err) => {
      console.error("Socket error:", err);
      ws.close();
    };
  }
  showPopUp(value) {
    this.store.dispatch(new ResetState());
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(LoginComponent);
    const hostViewContainerRef = this.alertHost;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.formState = value;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
  get paginatedGames() {
    return this.Games;
  }
  torrobtn(providerName) {
    this.ProviderName = providerName;
    this.torrogames = [];
    this.playerserive.torrogames().subscribe((data) => {
      this.torrogames = data.filter((game) => game.provider == providerName);
    });
  }
  getGameImage(game, i) {
    if (game.provider === "Evolution" && i < 9) {
      return `assets/GameImgs/evolution_new_games/${game.id}.jpg`;
    }
    return game.images;
  }
  moveToTop() {
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  navigates(route) {
    this.router.navigate([route]);
  }
  toggleFullScreen() {
    console.log(this.gameIframe);
    if (!this.gameIframe) {
      console.warn("iframe is not yet available");
      return;
    }
    const iframe = this.gameIframe.nativeElement;
    if (!document.fullscreenElement) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  }
  subtabClose() {
    this.urlSafe = null;
    var session = sessionStorage.getItem("closeGameSession");
    if (session) {
      let body = {
        gameSession: session
      };
      this.playerserive.closesession(body).subscribe((data) => {
        console.log(data);
      });
      this.playerserive.gameclose(session).subscribe((data) => {
        console.log(data);
      });
    }
  }
  providerChange(Provider) {
    this.ProviderName = Provider;
    this.p = 1;
    if (Provider == "Ezugi") {
      this.Games = this.EzugiGm;
    } else {
      this.Games = this.EvoGm;
    }
  }
  liveDealer(gname, gameName) {
    if (this.playerLoggedIn == true) {
      let wsessionId = sessionStorage.getItem("raj_wSession");
      this.GameCmsService.getEzugi(wsessionId).subscribe((liveDealerdata) => {
        if (liveDealerdata.EZUGI_TOKEN) {
          let ezugiLunch = liveDealerdata.EZUGI_GAME_URL + "token=" + liveDealerdata.EZUGI_TOKEN + "&operatorId=" + liveDealerdata.EZUGI_OPERATOR_ID + "&clientType=html5&language=en&selectGame=" + gname;
          console.log(ezugiLunch);
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(ezugiLunch);
          if (this.urlSafe) {
            this.moveToTop();
          }
        }
      });
    } else if (this.playerLoggedIn == false) {
      this.showPopUp("LOGIN");
    }
  }
  evogamesin(gameId, gameName) {
    if (this.playerLoggedIn == true) {
      let wesessioid = sessionStorage.getItem("raj_wSession");
      this.GameCmsService.getEzugi(wesessioid).subscribe((data) => {
        if (data.EZUGI_TOKEN) {
          let evourl = `${data.EZUGI_GAME_URL}token=${data.EZUGI_TOKEN}&operatorId=${data.EZUGI_OPERATOR_ID}&[language=en&clientType=html5&openTable=${gameId}&homeUrl=${environment.baseUrl}]`;
          console.log(evourl);
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(evourl);
          if (this.urlSafe) {
            this.moveToTop();
          }
        }
      });
    } else {
      this.showPopUp("LOGIN");
    }
  }
  torromethod(game) {
    if (this.playerLoggedIn) {
      const data = localStorage.getItem("providerStatus");
      if (data) {
        const providerData = JSON.parse(data);
        if (providerData.status == false) {
          this.messageservice.success("Success", providerData.message);
          return;
        }
      }
      let body = {
        "gameId": game.game_code,
        "provider": game.provider
      };
      this.playerserive.torrolaunch(body).subscribe((data2) => {
        if (data2) {
          sessionStorage.setItem("closeGameSession", data2.token);
          if (data2.url) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data2.url);
            if (this.urlSafe) {
              this.moveToTop();
            }
          } else {
            this.messageservice.error("Failed", data2.message);
          }
        }
      });
    } else {
      this.showPopUp("LOGIN");
    }
  }
  Pragmaticgamesres(name, id) {
    if (this.playerLoggedIn == true) {
      this.playerserive.getPragmaticHit(id).subscribe((data) => this.pragmaticres12(data));
    } else if (this.playerLoggedIn == false) {
      this.showPopUp("LOGIN");
    }
  }
  pragmaticres12(data) {
    console.log(data);
    if (data) {
      let url = data.gameURL;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      if (this.urlSafe) {
        this.moveToTop();
      }
    }
  }
  gvproviderapi(data) {
    if (!this.playerLoggedIn)
      return this.showPopUp("LOGIN");
    let body = {
      "gameId": data.id,
      "provider": data.provider + "GV",
      "language": "en"
    };
    this.playerserive.gvproviderapi(body).subscribe((data2) => {
      if (data2) {
        sessionStorage.setItem("closeGameSession", data2.token);
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data2.url);
        if (this.urlSafe) {
          this.moveToTop();
        }
      }
    });
  }
  vivogameLaunch(game) {
    if (this.playerLoggedIn) {
      this.playerserive.gamelunallvivogaming().subscribe((response) => {
        const launchUrl = response.VIVO_GAME_LAUNCH_URL.split("selectedGame=")[0] + `selectedGame=${game.gameId}` + response.VIVO_GAME_LAUNCH_URL.split("selectedGame=All")[1];
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(launchUrl);
        if (this.urlSafe) {
          this.moveToTop();
        }
      });
    } else {
      this.showPopUp("LOGIN");
    }
  }
  ngOnDestroy() {
    window.$crisp?.push(["do", "chat:show"]);
  }
  static {
    this.\u0275fac = function LiveCasinoPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LiveCasinoPage)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PlayerService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(GameCmsService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(CommonUtilService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveCasinoPage, selectors: [["app-live-casino-page"]], viewQuery: function LiveCasinoPage_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5, ViewContainerRef);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alertHost = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gameIframe = _t.first);
      }
    }, decls: 31, vars: 13, consts: [["alertHost", ""], ["gameIframe", ""], ["aria-labelledby", "live-casino-title"], [4, "ngIf"], ["aria-label", "Breadcrumb", 1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", " ", "loading", "lazy", "aria-hidden", "true", "width", "15", "height", "15"], [1, "home_live_casino_head"], ["id", "live-casino-title-compo", 1, "main_heading", "live_casino_title"], [1, "main_para"], ["role", "tablist", "aria-label", "Casino providers", 1, "dis_flex_main"], ["type", "button", "role", "tab", 1, "main_provider_div", 3, "click"], [1, "radio_btn"], [1, "mt-4"], ["class", "Maingame_row_live trending_scroll_container", "aria-label", "Ezugi live casino games", 4, "ngIf"], ["class", "Maingame_row_live trending_scroll_container", 4, "ngIf"], ["type", "button", "aria-label", "Close game", 1, "game-close-btn", 3, "click"], ["scrolling", "auto", "frameborder", "0", "allowfullscreen", "", "title", "Live casino game", 1, "game-iframe", 3, "src"], ["type", "button", "aria-label", "Toggle fullscreen", 1, "iframe_fullS_icon", "ml-4", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-expand-arrows-alt", "iframe_fullS_icon", "ml-4"], ["aria-label", "Ezugi live casino games", 1, "Maingame_row_live", "trending_scroll_container"], ["class", "Games_image_box", 3, "click", 4, "ngFor", "ngForOf"], [1, "Games_image_box", 3, "click"], ["loading", "lazy", 1, "img_w", 2, "aspect-ratio", "2/2", 3, "src", "alt"], [1, "play_container"], ["type", "button", 3, "aria-label"], ["src", "assets/home_icons/live_casino/play_icon.png", "alt", "", "aria-hidden", "true", "loading", "lazy"], ["loading", "lazy", 1, "img_w", 3, "src", "alt"], [1, "Maingame_row_live", "trending_scroll_container"], [4, "ngFor", "ngForOf"], ["class", "Games_image_box", 3, "click", 4, "ngIf"], [1, "game_titles"], [1, "play_container", 3, "aria-label"], ["type", "button"]], template: function LiveCasinoPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275template(0, LiveCasinoPage_ng_template_0_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "section", 2);
        \u0275\u0275template(3, LiveCasinoPage_ng_container_3_Template, 8, 1, "ng-container", 3);
        \u0275\u0275elementStart(4, "div")(5, "div", 4)(6, "span", 5);
        \u0275\u0275text(7, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "img", 6);
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10, "Live Casino ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div")(12, "div", 7)(13, "h2", 8);
        \u0275\u0275text(14, "Live Casino");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "p", 9);
        \u0275\u0275text(16, "At Raj Poker, there are live casino with big prizes ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 10)(18, "button", 11);
        \u0275\u0275listener("click", function LiveCasinoPage_Template_button_click_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.torrobtn("Evolution"));
        });
        \u0275\u0275element(19, "span", 12);
        \u0275\u0275text(20, " EVOLUTION ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 11);
        \u0275\u0275listener("click", function LiveCasinoPage_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.torrobtn("Ezugi"));
        });
        \u0275\u0275element(22, "span", 12);
        \u0275\u0275text(23, " EZUGI ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 11);
        \u0275\u0275listener("click", function LiveCasinoPage_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.torrobtn("vivogaming"));
        });
        \u0275\u0275element(25, "span", 12);
        \u0275\u0275text(26, " VIVOGAMING ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 13);
        \u0275\u0275template(28, LiveCasinoPage_div_28_Template, 2, 1, "div", 14)(29, LiveCasinoPage_div_29_Template, 2, 1, "div", 14)(30, LiveCasinoPage_div_30_Template, 2, 1, "div", 15);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.urlSafe);
        \u0275\u0275advance(15);
        \u0275\u0275attribute("aria-selected", ctx.ProviderName === "Evolution");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.ProviderName === "Evolution");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-selected", ctx.ProviderName === "Ezugi");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.ProviderName === "Ezugi");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-selected", ctx.ProviderName === "vivogaming");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.ProviderName === "vivogaming");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.ProviderName == "Ezugi" || ctx.ProviderName == "Evolution");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "vivogaming");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "PragmaticPlay");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, RouterModule, NgxPaginationModule], styles: ['\n\n.dis_flex_main[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 8px 12px;\n  margin: 18px 0 24px 0;\n  background: rgba(16, 24, 20, 0.75);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 50px;\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  scrollbar-width: thin;\n  scrollbar-color: #10b981 #062b1e;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08);\n}\n.dis_flex_main[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.dis_flex_main[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #f59e0b);\n  border-radius: 10px;\n}\n.main_provider_div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.04);\n  color: #94a3b8;\n  font-size: 0.92rem;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  padding: 8px 22px;\n  border-radius: 50px;\n  white-space: nowrap;\n  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);\n  text-transform: uppercase;\n}\n.main_provider_div[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.15);\n  color: #ffffff;\n  border-color: rgba(16, 185, 129, 0.4);\n  transform: translateY(-2px);\n}\n.main_provider_div[aria-selected=true][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #047857 50%,\n      #f59e0b 100%);\n  border-color: rgba(245, 158, 11, 0.6);\n  color: #ffffff;\n  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.45), 0 0 10px rgba(245, 158, 11, 0.3);\n  transform: translateY(-2px);\n}\n.radio_btn[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #64748b;\n  display: inline-block;\n  transition: all 0.3s ease;\n}\n.radio_btn.active[_ngcontent-%COMP%] {\n  background: #34d399;\n  box-shadow: 0 0 10px #34d399, 0 0 18px #10b981;\n  animation: _ngcontent-%COMP%_livePillGlow 1.8s infinite;\n}\n@keyframes _ngcontent-%COMP%_livePillGlow {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 0.8;\n  }\n}\n.Maingame_row_live[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 16px;\n  width: 100%;\n  padding: 10px 0 30px 0;\n  box-sizing: border-box;\n}\n.Games_image_box[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      #121f19 0%,\n      #0b120f 100%);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);\n  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);\n  cursor: pointer;\n  aspect-ratio: 1 / 1;\n}\n.Games_image_box[_ngcontent-%COMP%]::before {\n  content: "\\1f534  LIVE HD";\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.78);\n  border: 1px solid rgba(239, 68, 68, 0.6);\n  padding: 3px 9px;\n  border-radius: 20px;\n  backdrop-filter: blur(8px);\n  z-index: 2;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8), 0 0 10px rgba(239, 68, 68, 0.35);\n  pointer-events: none;\n}\n.Games_image_box[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(8, 12, 16, 0.95) 0%,\n      rgba(8, 12, 16, 0.4) 60%,\n      transparent 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n.Games_image_box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px) scale(1.02);\n  border-color: rgba(245, 158, 11, 0.6);\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.75), 0 0 24px rgba(16, 185, 129, 0.35);\n}\n.img_w[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.Games_image_box[_ngcontent-%COMP%]:hover   .img_w[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.play_container[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(6, 43, 30, 0.5) 0%,\n      rgba(0, 0, 0, 0.85) 100%);\n  opacity: 0;\n  backdrop-filter: blur(4px);\n  transition: opacity 0.3s ease;\n  cursor: pointer;\n  z-index: 3;\n}\n.Games_image_box[_ngcontent-%COMP%]:hover   .play_container[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.play_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 2px solid rgba(245, 158, 11, 0.7);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.9) 0%,\n      rgba(245, 158, 11, 0.9) 100%);\n  border-radius: 50%;\n  width: 54px;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 25px rgba(245, 158, 11, 0.6);\n  transition: transform 0.25s ease;\n}\n.play_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.play_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  filter: brightness(0) invert(1);\n}\n@media (max-width: 1024px) {\n  .Maingame_row_live[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    gap: 12px;\n  }\n}\n@media (max-width: 768px) {\n  .Maingame_row_live[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .main_provider_div[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n    padding: 7px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .Maingame_row_live[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=live-casino-page.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveCasinoPage, [{
    type: Component,
    args: [{ standalone: true, selector: "app-live-casino-page", imports: [CommonModule, RouterLink, FormsModule, RouterModule, NgxPaginationModule], template: `<ng-template #alertHost></ng-template>\r
<section aria-labelledby="live-casino-title">\r
    <ng-container *ngIf="urlSafe">\r
        <div>\r
            <button class="game-close-btn" type="button" aria-label="Close game" (click)="subtabClose()"> \u2715 </button>\r
            <iframe #gameIframe class="game-iframe" scrolling="auto" frameborder="0" allowfullscreen\r
                title="Live casino game" [src]="urlSafe"></iframe>\r
        </div>\r
        <button type="button" class="iframe_fullS_icon ml-4" aria-label="Toggle fullscreen"\r
            (click)="toggleFullScreen()"><i class="fas fa-expand-arrows-alt iframe_fullS_icon ml-4"\r
                aria-hidden="true"></i></button>\r
    </ng-container>\r
    <div>\r
        <div class="redirectline" aria-label="Breadcrumb"><span routerLink="/home">Home</span> <img\r
                src="assets/home_icons/arrow_right.png" alt=" " loading="lazy" aria-hidden="true" width="15"\r
                height="15"> <span>Live Casino </span> </div>\r
\r
        <div>\r
            <div class="home_live_casino_head">\r
                <h2 id="live-casino-title-compo" class="main_heading live_casino_title">Live Casino</h2>\r
            </div>\r
            <p class="main_para">At Raj Poker, there are live casino with big prizes </p>\r
        </div>\r
\r
        <div class="dis_flex_main" role="tablist" aria-label="Casino providers">\r
            <!-- <button type="button" class="main_provider_div" role="tab" [attr.aria-selected]="ProviderName === 'Ezugi'"\r
                (click)="torrobtn('Ezugi')">\r
              \r
                <span class="radio_btn" [class.active]="ProviderName === 'Ezugi'"></span>\r
                EZUGI\r
            </button> -->\r
            <button type="button" class="main_provider_div" role="tab"\r
                [attr.aria-selected]="ProviderName === 'Evolution'" (click)="torrobtn('Evolution')">\r
                <!-- <button *ngIf="commonUtilSvc.hasPermission('evolutiongv')" type="button" class="main_provider_div" role="tab"\r
                [attr.aria-selected]="ProviderName === 'Evolution'" (click)="torrobtn('Evolution')"> -->\r
\r
                <span class="radio_btn" [class.active]="ProviderName === 'Evolution'"></span>\r
                EVOLUTION\r
            </button>\r
            <button type="button" class="main_provider_div" role="tab" [attr.aria-selected]="ProviderName === 'Ezugi'"\r
                (click)="torrobtn('Ezugi')">\r
                <!-- <button  *ngIf="commonUtilSvc.hasPermission('ezugigv')" type="button" class="main_provider_div" role="tab" [attr.aria-selected]="ProviderName === 'Ezugi'"\r
                (click)="torrobtn('Ezugi')"> -->\r
                <span class="radio_btn" [class.active]="ProviderName === 'Ezugi'"></span>\r
                EZUGI\r
            </button>\r
            <button type="button" class="main_provider_div" role="tab"\r
                [attr.aria-selected]="ProviderName === 'vivogaming'" (click)="torrobtn('vivogaming')">\r
                <!-- <button *ngIf="commonUtilSvc.hasPermission('vivogaming')" type="button" class="main_provider_div" role="tab"\r
                [attr.aria-selected]="ProviderName === 'vivogaming'" (click)="torrobtn('vivogaming')"> -->\r
\r
                <span class="radio_btn" [class.active]="ProviderName === 'vivogaming'"></span>\r
                VIVOGAMING\r
            </button>\r
            <!-- <button  *ngIf="commonUtilSvc.hasPermission('pragmaticplaylivecasino')" type="button" class="main_provider_div" role="tab"\r
                [attr.aria-selected]="ProviderName === 'PragmaticPlay'" (click)="torrobtn('PragmaticPlay')"> -->\r
            <!-- (click)="providerChange('Evolution')"> -->\r
            <!-- <button   type="button" class="main_provider_div" role="tab"\r
                [attr.aria-selected]="ProviderName === 'PragmaticPlay'" (click)="torrobtn('PragmaticPlay')">\r
                <span class="radio_btn" [class.active]="ProviderName === 'PragmaticPlay'"></span>\r
                PRAGMATICPLAY\r
            </button> -->\r
        </div>\r
\r
        <div class="mt-4">\r
            <div class="Maingame_row_live trending_scroll_container"\r
                *ngIf="ProviderName == 'Ezugi'  || ProviderName == 'Evolution'" aria-label="Ezugi live casino games">\r
                <article class="Games_image_box" (click)="gvproviderapi(game)"\r
                    *ngFor="let game of torrogames; let i = index  ">\r
                    <img class="img_w" [src]="getGameImage(game, i)" [alt]="game.title + ' live casino game'"\r
                        loading="lazy" style="aspect-ratio: 2/2;" />\r
                    <!-- <div class="game_titles">    {{ game.title }} </div> -->\r
\r
                    <div class="play_container">\r
                        <button type="button" aria-label="Play {{ game.title }}">\r
                            <img src="assets/home_icons/live_casino/play_icon.png" alt="" aria-hidden="true"\r
                                loading="lazy" />\r
                        </button>\r
                    </div>\r
                </article>\r
\r
            </div>\r
            <div class="Maingame_row_live trending_scroll_container" *ngIf="ProviderName == 'vivogaming' "\r
                aria-label="Ezugi live casino games">\r
                <article class="Games_image_box" (click)="vivogameLaunch(game)" *ngFor="let game of torrogames  ">\r
                    <img class="img_w" src="assets/games/vivogaming/{{game.gameId}}_230.webp"\r
                        [alt]="game.title + ' live casino game'" loading="lazy" />\r
                    <div class="play_container">\r
                        <button type="button" aria-label="Play {{ game.title }}">\r
                            <img src="assets/home_icons/live_casino/play_icon.png" alt="" aria-hidden="true"\r
                                loading="lazy" />\r
                        </button>\r
                    </div>\r
                </article>\r
\r
            </div>\r
\r
            <div class="Maingame_row_live trending_scroll_container" *ngIf="ProviderName == 'PragmaticPlay' ">\r
                <ng-container *ngFor="let game of pragmaticLivecasino  ">\r
                    <article class="Games_image_box" *ngIf="game.tableName !== 'BACCARAT_MULTIPLAY'"\r
                        (click)="Pragmaticgamesres(game.tableName, game.tableId)">\r
                        <img class="img_w" [src]="game.tableImage" [alt]="game.title + ' live casino game'"\r
                            loading="lazy" style="aspect-ratio: 2/2;" />\r
                        <div class="game_titles">\r
                            {{ game.tableName }}\r
                        </div>\r
\r
                        <div class="play_container" aria-label="Play {{ game.title }}">\r
                            <button type="button">\r
                                <img src="assets/home_icons/live_casino/play_icon.png" alt=""\r
                                    aria-hidden="true" loading="lazy" />\r
                            </button>\r
                        </div>\r
                    </article>\r
                </ng-container>\r
\r
            </div>\r
        </div>\r
\r
    </div>\r
</section>`, styles: ['/* src/app/pages/live-casino-page/live-casino-page.css */\n.dis_flex_main {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 8px 12px;\n  margin: 18px 0 24px 0;\n  background: rgba(16, 24, 20, 0.75);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 50px;\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  scrollbar-width: thin;\n  scrollbar-color: #10b981 #062b1e;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08);\n}\n.dis_flex_main::-webkit-scrollbar {\n  height: 4px;\n}\n.dis_flex_main::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #f59e0b);\n  border-radius: 10px;\n}\n.main_provider_div {\n  display: inline-flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.04);\n  color: #94a3b8;\n  font-size: 0.92rem;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  padding: 8px 22px;\n  border-radius: 50px;\n  white-space: nowrap;\n  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);\n  text-transform: uppercase;\n}\n.main_provider_div:hover {\n  background: rgba(16, 185, 129, 0.15);\n  color: #ffffff;\n  border-color: rgba(16, 185, 129, 0.4);\n  transform: translateY(-2px);\n}\n.main_provider_div[aria-selected=true] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #047857 50%,\n      #f59e0b 100%);\n  border-color: rgba(245, 158, 11, 0.6);\n  color: #ffffff;\n  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.45), 0 0 10px rgba(245, 158, 11, 0.3);\n  transform: translateY(-2px);\n}\n.radio_btn {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #64748b;\n  display: inline-block;\n  transition: all 0.3s ease;\n}\n.radio_btn.active {\n  background: #34d399;\n  box-shadow: 0 0 10px #34d399, 0 0 18px #10b981;\n  animation: livePillGlow 1.8s infinite;\n}\n@keyframes livePillGlow {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 0.8;\n  }\n}\n.Maingame_row_live {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 16px;\n  width: 100%;\n  padding: 10px 0 30px 0;\n  box-sizing: border-box;\n}\n.Games_image_box {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      #121f19 0%,\n      #0b120f 100%);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);\n  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);\n  cursor: pointer;\n  aspect-ratio: 1 / 1;\n}\n.Games_image_box::before {\n  content: "\\1f534  LIVE HD";\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.78);\n  border: 1px solid rgba(239, 68, 68, 0.6);\n  padding: 3px 9px;\n  border-radius: 20px;\n  backdrop-filter: blur(8px);\n  z-index: 2;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8), 0 0 10px rgba(239, 68, 68, 0.35);\n  pointer-events: none;\n}\n.Games_image_box::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(8, 12, 16, 0.95) 0%,\n      rgba(8, 12, 16, 0.4) 60%,\n      transparent 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n.Games_image_box:hover {\n  transform: translateY(-8px) scale(1.02);\n  border-color: rgba(245, 158, 11, 0.6);\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.75), 0 0 24px rgba(16, 185, 129, 0.35);\n}\n.img_w {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.Games_image_box:hover .img_w {\n  transform: scale(1.06);\n}\n.play_container {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(6, 43, 30, 0.5) 0%,\n      rgba(0, 0, 0, 0.85) 100%);\n  opacity: 0;\n  backdrop-filter: blur(4px);\n  transition: opacity 0.3s ease;\n  cursor: pointer;\n  z-index: 3;\n}\n.Games_image_box:hover .play_container {\n  opacity: 1;\n}\n.play_container button {\n  border: 2px solid rgba(245, 158, 11, 0.7);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.9) 0%,\n      rgba(245, 158, 11, 0.9) 100%);\n  border-radius: 50%;\n  width: 54px;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 25px rgba(245, 158, 11, 0.6);\n  transition: transform 0.25s ease;\n}\n.play_container button:hover {\n  transform: scale(1.15);\n}\n.play_container button img {\n  width: 20px;\n  height: 20px;\n  filter: brightness(0) invert(1);\n}\n@media (max-width: 1024px) {\n  .Maingame_row_live {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    gap: 12px;\n  }\n}\n@media (max-width: 768px) {\n  .Maingame_row_live {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .main_provider_div {\n    font-size: 0.82rem;\n    padding: 7px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .Maingame_row_live {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=live-casino-page.css.map */\n'] }]
  }], () => [{ type: Store }, { type: Router }, { type: PlayerService }, { type: MessageService }, { type: GameCmsService }, { type: DomSanitizer }, { type: ComponentFactoryResolver$1 }, { type: CommonUtilService }], { alertHost: [{
    type: ViewChild,
    args: ["alertHost", { read: ViewContainerRef }]
  }], gameIframe: [{
    type: ViewChild,
    args: ["gameIframe", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveCasinoPage, { className: "LiveCasinoPage", filePath: "src/app/pages/live-casino-page/live-casino-page.ts", lineNumber: 28 });
})();
export {
  LiveCasinoPage
};
//# sourceMappingURL=chunk-WFLMCXDT.js.map
