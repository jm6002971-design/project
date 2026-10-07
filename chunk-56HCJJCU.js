import {
  GameLauncherService
} from "./chunk-E25AOMSZ.js";
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
import "./chunk-YCU5ZQFP.js";
import {
  ResetState
} from "./chunk-HXFVUPJ2.js";
import {
  FormsModule
} from "./chunk-FAEKDNT6.js";
import "./chunk-2Y7B2BAT.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/pages/ballaGames/ballaGames.component.ts
var _c0 = ["alertHost"];
var _c1 = ["gameIframe"];
function BallaGamesComponent_ng_template_0_Template(rf, ctx) {
}
function BallaGamesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "img", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", "/assets/giflogo.gif?" + ctx_r0.loaderKey, \u0275\u0275sanitizeUrl);
  }
}
function BallaGamesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div")(2, "button", 13);
    \u0275\u0275listener("click", function BallaGamesComponent_div_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.subtabClose());
    });
    \u0275\u0275text(3, " \u2715 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "iframe", 14, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275listener("click", function BallaGamesComponent_div_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleFullScreen());
    });
    \u0275\u0275element(7, "i", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.urlSafe, \u0275\u0275sanitizeResourceUrl);
  }
}
function BallaGamesComponent_article_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 17);
    \u0275\u0275element(1, "img", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "h5", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function BallaGamesComponent_article_19_Template_button_click_5_listener() {
      const game_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ballagamesLaunch(game_r4.gameId, game_r4.gameName));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r4 = ctx.$implicit;
    \u0275\u0275property("title", game_r4.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("src", "assets/Balla Games/", game_r4.className, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r4.displayName + " Indian game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r4.displayName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r4.displayName, "");
  }
}
var BallaGamesComponent = class _BallaGamesComponent {
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
  constructor(store, router, GameLauncherService2, GameCmsService2, sanitizer, componentFactoryResolver) {
    this.store = store;
    this.router = router;
    this.GameLauncherService = GameLauncherService2;
    this.GameCmsService = GameCmsService2;
    this.sanitizer = sanitizer;
    this.componentFactoryResolver = componentFactoryResolver;
    this._urlSafe = null;
    this.windows = [];
    this.ProviderName = "habanero";
    this.itemsPerPageCount = 24;
    this.currentPageCount = 1;
    this.playerLoggedIn = false;
    this.loginstate = "";
    this.p = 1;
    this.selectnum = 24;
    this.responseLoader = false;
    this.loaderKey = Date.now();
  }
  ngOnInit() {
    this.moveToTop();
    this.showLoader();
    this.GameCmsService.IndieCasinoJson().subscribe((resData) => {
      console.log(resData);
      this.Games = resData.Games;
      this.hideLoader();
    });
    this.store.select("loginState").subscribe((loginState) => {
      console.log(loginState.playerLoggedIn);
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          let games = sessionStorage.getItem("raj_wSession");
          if (games) {
            this.GameCmsService.indicasino(games).subscribe((response) => {
              this.TokenData = response;
            });
          }
        }
      }
    });
  }
  showLoader() {
    this.loaderKey = Date.now();
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
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
  get totalPages() {
    return Math.ceil(this.Games.length / this.itemsPerPageCount);
  }
  get paginatedGames() {
    if (this.Games) {
      const start = (this.currentPageCount - 1) * this.itemsPerPageCount;
      return this.Games.slice(start, start + this.itemsPerPageCount);
    }
  }
  nextPage() {
    if (this.currentPageCount < this.totalPages)
      this.currentPageCount++;
    document.body.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  prevPage() {
    if (this.currentPageCount > 1)
      this.currentPageCount--;
    document.body.scroll({
      top: 0,
      left: 0,
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
  }
  ballagamesLaunch(id, gameName) {
    console.log(gameName);
    if (this.playerLoggedIn == true) {
      this.gameIdIndie = id;
      let sendToIndie = "gameId=" + id + "&playerToken=" + this.TokenData["token"] + "&site=rajpoker";
      console.log(sendToIndie);
      let indieUrl = this.TokenData["url"] + "/";
      console.log(indieUrl);
      switch (id) {
        case id:
          this.indieUrl_1 = indieUrl + gameName + "?" + sendToIndie;
          console.log(this.indieUrl_1);
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.indieUrl_1);
          break;
      }
      console.log(this.urlSafe);
      if (this.urlSafe) {
        document.body.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }
    } else {
      this.showPopUp("LOGIN");
    }
  }
  ngOnDestroy() {
    window.$crisp?.push(["do", "chat:show"]);
  }
  static {
    this.\u0275fac = function BallaGamesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BallaGamesComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(GameLauncherService), \u0275\u0275directiveInject(GameCmsService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ComponentFactoryResolver$1));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BallaGamesComponent, selectors: [["app-ballaGames"]], viewQuery: function BallaGamesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5, ViewContainerRef);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alertHost = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gameIframe = _t.first);
      }
    }, decls: 20, vars: 3, consts: [["alertHost", ""], ["gameIframe", ""], ["class", "loader-wrapper", "role", "status", "aria-live", "polite", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Breadcrumb", 1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "rightArrow", "width", "15"], ["id", "indian-games-title", 1, "main_heading", "live_casino_title"], [1, "main_para"], [1, "Maingame_row", "trending_scroll_container"], ["class", "Game_box", 3, "title", 4, "ngFor", "ngForOf"], ["role", "status", "aria-live", "polite", 1, "loader-wrapper"], ["width", "280", "alt", "Loading crash game, please wait", 3, "src"], ["type", "button", "aria-label", "Close crash game", 1, "game-close-btn", 3, "click"], ["id", "game_object", "scrolling", "auto", "frameborder", "0", "allowfullscreen", "", "title", "crash game", 1, "game-iframe", 3, "src"], ["type", "button", "aria-label", "Toggle fullscreen mode", 1, "iframe_fullS_icon", "ml-4", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-expand-arrows-alt"], [1, "Game_box", 3, "title"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "game_name_button"], [1, "Game_Name_head"], ["type", "button", 1, "button", "button_game", 3, "click", "aria-label"]], template: function BallaGamesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BallaGamesComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "section");
        \u0275\u0275template(3, BallaGamesComponent_div_3_Template, 2, 1, "div", 2)(4, BallaGamesComponent_div_4_Template, 8, 1, "div", 3);
        \u0275\u0275elementStart(5, "div")(6, "div", 4)(7, "span", 5);
        \u0275\u0275text(8, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "img", 6);
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "Indian Games ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "header")(13, "h2", 7);
        \u0275\u0275text(14, "Indian Games");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 8);
        \u0275\u0275text(16, "At Raj Poker, there are indian games with big prizes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div")(18, "div", 9);
        \u0275\u0275template(19, BallaGamesComponent_article_19_Template, 7, 7, "article", 10);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.responseLoader);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.urlSafe);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.paginatedGames);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, RouterModule, NgxPaginationModule], styles: ['\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 24px;\n}\nheader[_ngcontent-%COMP%]   .live_casino_title[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #dc2626 50%,\n      #fbbf24 100%) !important;\n  -webkit-background-clip: text !important;\n  background-clip: text !important;\n  color: transparent !important;\n  text-shadow: 0 0 25px rgba(245, 158, 11, 0.4);\n}\n.Maingame_row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 18px;\n  width: 100%;\n  padding: 10px 0 30px 0;\n  box-sizing: border-box;\n}\n.Game_box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #241416 0%,\n      #150b0d 100%) !important;\n  border: 1px solid rgba(245, 158, 11, 0.3) !important;\n  border-radius: 16px !important;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6) !important;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) !important;\n}\n.Game_box[_ngcontent-%COMP%]::before {\n  content: "\\1f451  DESI VIP";\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #fbbf24;\n  background: rgba(0, 0, 0, 0.75);\n  border: 1px solid rgba(245, 158, 11, 0.4);\n  padding: 3px 8px;\n  border-radius: 20px;\n  backdrop-filter: blur(8px);\n  z-index: 2;\n  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);\n}\n.Game_box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px) scale(1.02) !important;\n  border-color: rgba(245, 158, 11, 0.7) !important;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 25px rgba(220, 38, 38, 0.4) !important;\n}\n.Game_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  transition: transform 0.4s ease;\n}\n.Game_box[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.button_game[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #f59e0b 100%) !important;\n  box-shadow: 0 4px 14px rgba(220, 38, 38, 0.45) !important;\n  font-weight: 800 !important;\n}\n.button_game[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #fbbf24 100%) !important;\n  box-shadow: 0 6px 20px rgba(220, 38, 38, 0.65), 0 0 14px rgba(245, 158, 11, 0.5) !important;\n  transform: translateY(-2px) !important;\n}\n@media (max-width: 1024px) {\n  .Maingame_row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .Maingame_row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n}\n@media (max-width: 420px) {\n  .Maingame_row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=ballaGames.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BallaGamesComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-ballaGames", imports: [CommonModule, RouterLink, FormsModule, RouterModule, NgxPaginationModule], template: `<ng-template #alertHost></ng-template>\r
<section>\r
    <div class="loader-wrapper" *ngIf="responseLoader" role="status" aria-live="polite">\r
        <img [src]="'/assets/giflogo.gif?' + loaderKey" width="280" alt="Loading crash game, please wait" />\r
    </div>\r
    <div *ngIf="urlSafe">\r
        <div>\r
            <button type="button" class="game-close-btn" aria-label="Close crash game" (click)="subtabClose()"> \u2715\r
            </button>\r
            <iframe #gameIframe id="game_object" class="game-iframe" scrolling="auto" frameborder="0" allowfullscreen\r
                title="crash game" [src]="urlSafe"></iframe>\r
        </div>\r
        <button type="button" class="iframe_fullS_icon ml-4" aria-label="Toggle fullscreen mode"\r
            (click)="toggleFullScreen()">\r
\r
            <i class="fas fa-expand-arrows-alt" aria-hidden="true">\r
            </i>\r
        </button>\r
    </div>\r
    <div  > \r
        <div class="redirectline" aria-label="Breadcrumb"><span routerLink="/home">Home</span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15"> <span>Indian Games </span>  </div>\r
\r
        <header>\r
            <h2 id="indian-games-title" class="main_heading live_casino_title">Indian Games</h2>\r
            <p class="main_para">At Raj Poker, there are indian games with big prizes</p>\r
        </header>\r
\r
        <div>\r
            <div class="Maingame_row trending_scroll_container">\r
\r
                <article  class="Game_box" *ngFor="let game of paginatedGames  " [title]="game.gameName">\r
                    <img src="assets/Balla Games/{{game.className}}.png"  [alt]="game.displayName + ' Indian game'" loading="lazy" decoding="async"/>\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.displayName}}</h5>\r
                        <button type="button"          aria-label="Play {{ game.displayName }}"\r
                        (click)='ballagamesLaunch(game.gameId, game.gameName)'\r
                            class="button button_game">Lets Go!</button>\r
                    </div>\r
                \r
                </article>\r
            </div>\r
        </div> \r
         <!-- <div *ngIf="paginatedGames.length>0">\r
            <pagination-controls class="pagination justify-content-end" (pageChange)="p=$event"\r
                previousLabel="Prev" nextLabel="Next" class="pt-2 page-item">\r
            </pagination-controls>\r
        </div> -->\r
\r
    </div>\r
</section>`, styles: ['/* src/app/pages/ballaGames/ballaGames.component.css */\nheader {\n  position: relative;\n  margin-bottom: 24px;\n}\nheader .live_casino_title {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #dc2626 50%,\n      #fbbf24 100%) !important;\n  -webkit-background-clip: text !important;\n  background-clip: text !important;\n  color: transparent !important;\n  text-shadow: 0 0 25px rgba(245, 158, 11, 0.4);\n}\n.Maingame_row {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 18px;\n  width: 100%;\n  padding: 10px 0 30px 0;\n  box-sizing: border-box;\n}\n.Game_box {\n  background:\n    linear-gradient(\n      180deg,\n      #241416 0%,\n      #150b0d 100%) !important;\n  border: 1px solid rgba(245, 158, 11, 0.3) !important;\n  border-radius: 16px !important;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6) !important;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) !important;\n}\n.Game_box::before {\n  content: "\\1f451  DESI VIP";\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #fbbf24;\n  background: rgba(0, 0, 0, 0.75);\n  border: 1px solid rgba(245, 158, 11, 0.4);\n  padding: 3px 8px;\n  border-radius: 20px;\n  backdrop-filter: blur(8px);\n  z-index: 2;\n  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);\n}\n.Game_box:hover {\n  transform: translateY(-8px) scale(1.02) !important;\n  border-color: rgba(245, 158, 11, 0.7) !important;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 25px rgba(220, 38, 38, 0.4) !important;\n}\n.Game_box img {\n  border-radius: 12px;\n  transition: transform 0.4s ease;\n}\n.Game_box:hover img {\n  transform: scale(1.06);\n}\n.button_game {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #f59e0b 100%) !important;\n  box-shadow: 0 4px 14px rgba(220, 38, 38, 0.45) !important;\n  font-weight: 800 !important;\n}\n.button_game:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #fbbf24 100%) !important;\n  box-shadow: 0 6px 20px rgba(220, 38, 38, 0.65), 0 0 14px rgba(245, 158, 11, 0.5) !important;\n  transform: translateY(-2px) !important;\n}\n@media (max-width: 1024px) {\n  .Maingame_row {\n    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .Maingame_row {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n}\n@media (max-width: 420px) {\n  .Maingame_row {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=ballaGames.component.css.map */\n'] }]
  }], () => [{ type: Store }, { type: Router }, { type: GameLauncherService }, { type: GameCmsService }, { type: DomSanitizer }, { type: ComponentFactoryResolver$1 }], { alertHost: [{
    type: ViewChild,
    args: ["alertHost", { read: ViewContainerRef }]
  }], gameIframe: [{
    type: ViewChild,
    args: ["gameIframe", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BallaGamesComponent, { className: "BallaGamesComponent", filePath: "src/app/pages/ballagames/ballagames.component.ts", lineNumber: 24 });
})();
export {
  BallaGamesComponent
};
//# sourceMappingURL=chunk-56HCJJCU.js.map
