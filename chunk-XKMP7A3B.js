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
import {
  CommonUtilService
} from "./chunk-BI23JTGF.js";
import "./chunk-YCU5ZQFP.js";
import {
  PlayerService,
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

// src/app/pages/crash-page/crash-page.ts
var _c0 = ["alertHost"];
var _c1 = ["gameIframe"];
function CrashPage_ng_template_0_Template(rf, ctx) {
}
function CrashPage_div_3_Template(rf, ctx) {
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
function CrashPage_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div")(2, "button", 13);
    \u0275\u0275listener("click", function CrashPage_div_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.subtabClose());
    });
    \u0275\u0275text(3, " \u2715 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "iframe", 14, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275listener("click", function CrashPage_div_4_Template_button_click_6_listener() {
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
function CrashPage_div_19_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const game_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate1("src", "assets/GameImgs/crash/", game_r3.imgUrl, ".png", \u0275\u0275sanitizeUrl);
  }
}
function CrashPage_div_19_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const game_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate1("src", "assets/GameImgs/crash/", game_r3.imgUrl, ".png", \u0275\u0275sanitizeUrl);
  }
}
function CrashPage_div_19_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 24);
  }
}
function CrashPage_div_19_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function CrashPage_div_19_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const game_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.zepllienGame(game_r3.gameId, game_r3.gameName));
    });
    \u0275\u0275text(1, "Lets Go!");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r3.gameName, "");
  }
}
function CrashPage_div_19_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function CrashPage_div_19_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const game_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onJDBGames(game_r3.Gtype, game_r3.Mtype));
    });
    \u0275\u0275text(1, "Lets Go!");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r3.gameName, "");
  }
}
function CrashPage_div_19_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function CrashPage_div_19_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const game_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onaviatrix(game_r3));
    });
    \u0275\u0275text(1, "Lets Go!");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r3.gameName, "");
  }
}
function CrashPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, CrashPage_div_19_img_1_Template, 1, 2, "img", 18)(2, CrashPage_div_19_img_2_Template, 1, 2, "img", 18)(3, CrashPage_div_19_img_3_Template, 1, 0, "img", 19);
    \u0275\u0275elementStart(4, "div", 20)(5, "h5", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CrashPage_div_19_button_7_Template, 2, 2, "button", 22)(8, CrashPage_div_19_button_8_Template, 2, 2, "button", 22)(9, CrashPage_div_19_button_9_Template, 2, 2, "button", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const game_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r3.provider == "JDB");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r3.provider == "Spribe");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r3.gameId == "nft-aviatrix");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r3.gameName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r3.provider == "JDB");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r3.provider == "Spribe");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r3.gameId == "nft-aviatrix");
  }
}
var CrashPage = class _CrashPage {
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
  constructor(store, router, GameLauncherService2, GameCmsService2, playerservice, sanitizer, componentFactoryResolver, commonUtilSvc) {
    this.store = store;
    this.router = router;
    this.GameLauncherService = GameLauncherService2;
    this.GameCmsService = GameCmsService2;
    this.playerservice = playerservice;
    this.sanitizer = sanitizer;
    this.componentFactoryResolver = componentFactoryResolver;
    this.commonUtilSvc = commonUtilSvc;
    this._urlSafe = null;
    this.windows = [];
    this.ProviderName = "habanero";
    this.playerLoggedIn = false;
    this.loginstate = "";
    this.responseLoader = false;
    this.loaderKey = Date.now();
    this.p = 1;
    this.selectnum = 24;
  }
  ngOnInit() {
    this.showLoader();
    this.GameCmsService.getCrash().subscribe((resData) => {
      this.Games = resData;
      if (this.Games) {
        this.hideLoader();
      }
    });
    this.store.select("loginState").subscribe((loginState) => {
      console.log(loginState.playerLoggedIn);
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.GameCmsService.gamelunallproviders().subscribe((response) => {
            this.TokenData = response.token;
            this.rocketManGameUrl = response.rocketManGameUrl;
            this.operatorId = response.operatorId;
          });
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
  get paginatedGames() {
    return this.Games;
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
  }
  zepllienGame(game_id, gameName) {
    console.log(game_id);
    if (this.playerLoggedIn) {
      let gameUrl;
      if (gameName == "Zepellin") {
        gameUrl = `https://bscpl1env01.kasoom.com/FlashRunGame/RunGenericGame.aspx?tableguid=8DA5238BE58541838D128466C5A6BF58&gameid=7001&token=${this.TokenData}&operatorID=3006292&language=en`;
        console.log(gameUrl);
      } else {
        gameUrl = this.rocketManGameUrl + "tableguid=71CCEC005BA14E01A426AA1CFC45EAE2&token=" + this.TokenData + "&OperatorId=" + this.operatorId + "&language=en&cashierUrl=&homeUrl=&GameID=" + game_id + "&mode=real&bank=157";
      }
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(gameUrl);
      if (this.urlSafe) {
        this.moveToTop();
      }
    } else {
      this.showPopUp("LOGIN");
    }
  }
  onJDBGames(gType, mType) {
    if (this.playerLoggedIn) {
      this.GameCmsService.jdbLaunch(gType, mType).subscribe(((data) => {
        if (data.path) {
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data.path);
          if (this.urlSafe) {
            this.moveToTop();
          }
        }
      }));
    } else {
      this.showPopUp("LOGIN");
    }
  }
  onaviatrix(data) {
    if (this.playerLoggedIn) {
      let body = {
        "gameId": data.gameId,
        "provider": data.provider
      };
      this.playerservice.aviatrixnew(body).subscribe((data2) => {
        if (data2) {
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data2.url);
          if (this.urlSafe) {
            this.moveToTop();
          }
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
    this.\u0275fac = function CrashPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CrashPage)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(GameLauncherService), \u0275\u0275directiveInject(GameCmsService), \u0275\u0275directiveInject(PlayerService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(CommonUtilService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CrashPage, selectors: [["app-crash-page"]], viewQuery: function CrashPage_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5, ViewContainerRef);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alertHost = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gameIframe = _t.first);
      }
    }, decls: 20, vars: 3, consts: [["alertHost", ""], ["gameIframe", ""], ["class", "loader-wrapper", "role", "status", "aria-live", "polite", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Breadcrumb", 1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "", "aria-hidden", "true", "width", "15"], ["id", "crash-title", 1, "main_heading", "live_casino_title"], [1, "main_para"], [1, "Maingame_row", "trending_scroll_container"], ["class", "Game_box", 4, "ngFor", "ngForOf"], ["role", "status", "aria-live", "polite", 1, "loader-wrapper"], ["width", "280", "alt", "Loading crash game, please wait", 3, "src"], ["type", "button", "aria-label", "Close crash game", 1, "game-close-btn", 3, "click"], ["id", "game_object", "scrolling", "auto", "frameborder", "0", "allowfullscreen", "", "title", "crash game", 1, "game-iframe", 3, "src"], ["type", "button", "aria-label", "Toggle fullscreen mode", 1, "iframe_fullS_icon", "ml-4", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-expand-arrows-alt"], [1, "Game_box"], ["alt", "", "loading", "lazy", "decoding", "async", 3, "src", 4, "ngIf"], ["src", "assets/GameImgs/crash/aviatrix.png", "alt", "", "loading", "lazy", "decoding", "async", 4, "ngIf"], [1, "game_name_button"], [1, "Game_Name_head"], ["type", "button", "class", "button button_game", 3, "aria-label", "click", 4, "ngIf"], ["alt", "", "loading", "lazy", "decoding", "async", 3, "src"], ["src", "assets/GameImgs/crash/aviatrix.png", "alt", "", "loading", "lazy", "decoding", "async"], ["type", "button", 1, "button", "button_game", 3, "click", "aria-label"]], template: function CrashPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CrashPage_ng_template_0_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "section");
        \u0275\u0275template(3, CrashPage_div_3_Template, 2, 1, "div", 2)(4, CrashPage_div_4_Template, 8, 1, "div", 3);
        \u0275\u0275elementStart(5, "div")(6, "div", 4)(7, "span", 5);
        \u0275\u0275text(8, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "img", 6);
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "Crash ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "header")(13, "h2", 7);
        \u0275\u0275text(14, "Crash");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 8);
        \u0275\u0275text(16, "At Raj Poker, there are crash games with big prizes ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div")(18, "div", 9);
        \u0275\u0275template(19, CrashPage_div_19_Template, 10, 7, "div", 10);
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
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, RouterModule, NgxPaginationModule], styles: ['\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 24px;\n}\nheader[_ngcontent-%COMP%]   .live_casino_title[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f97316 0%,\n      #ef4444 50%,\n      #06b6d4 100%) !important;\n  -webkit-background-clip: text !important;\n  background-clip: text !important;\n  color: transparent !important;\n  text-shadow: 0 0 25px rgba(249, 115, 22, 0.4);\n}\n.Maingame_row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 18px;\n  width: 100%;\n  padding: 10px 0 30px 0;\n  box-sizing: border-box;\n}\n.Game_box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #101c2b 0%,\n      #0a111a 100%) !important;\n  border: 1px solid rgba(6, 182, 212, 0.25) !important;\n  border-radius: 16px !important;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6) !important;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) !important;\n}\n.Game_box[_ngcontent-%COMP%]::before {\n  content: "\\1f680  FLY & WIN";\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #67e8f9;\n  background: rgba(0, 0, 0, 0.75);\n  border: 1px solid rgba(6, 182, 212, 0.4);\n  padding: 3px 8px;\n  border-radius: 20px;\n  backdrop-filter: blur(8px);\n  z-index: 2;\n  box-shadow: 0 2px 8px rgba(6, 182, 212, 0.3);\n}\n.Game_box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px) scale(1.02) !important;\n  border-color: rgba(249, 115, 22, 0.6) !important;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 25px rgba(249, 115, 22, 0.35) !important;\n}\n.Game_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  transition: transform 0.4s ease;\n}\n.Game_box[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.button_game[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f97316 0%,\n      #ef4444 50%,\n      #06b6d4 100%) !important;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4) !important;\n  font-weight: 800 !important;\n}\n.button_game[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #fb923c 0%,\n      #f87171 50%,\n      #22d3ee 100%) !important;\n  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.6), 0 0 14px rgba(6, 182, 212, 0.5) !important;\n  transform: translateY(-2px) !important;\n}\n@media (max-width: 1024px) {\n  .Maingame_row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .Maingame_row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n}\n@media (max-width: 420px) {\n  .Maingame_row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=crash-page.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrashPage, [{
    type: Component,
    args: [{ standalone: true, selector: "app-crash-page", imports: [CommonModule, RouterLink, FormsModule, RouterModule, NgxPaginationModule], template: `<ng-template #alertHost></ng-template>\r
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
    <div>\r
\r
        <div class="redirectline" aria-label="Breadcrumb"><span routerLink="/home">Home</span> <img\r
                src="assets/home_icons/arrow_right.png" alt="" aria-hidden="true" width="15"> <span>Crash\r
            </span> </div>\r
\r
        <header>\r
            <h2 class="main_heading live_casino_title" id="crash-title">Crash</h2>\r
            <p class="main_para">At Raj Poker, there are crash games with big prizes </p>\r
        </header>\r
\r
        <div>\r
            <div class="Maingame_row trending_scroll_container">\r
                <div class="Game_box" *ngFor="let game of paginatedGames  ">\r
                    <img *ngIf="game.provider == 'JDB'" src="assets/GameImgs/crash/{{game.imgUrl}}.png" alt=""\r
                        loading="lazy" decoding="async" />\r
                    <img *ngIf="game.provider == 'Spribe' " src="assets/GameImgs/crash/{{game.imgUrl}}.png"\r
                        alt="" loading="lazy" decoding="async" />\r
                    <img *ngIf="game.gameId == 'nft-aviatrix'" src="assets/GameImgs/crash/aviatrix.png" alt=""\r
                        loading="lazy" decoding="async" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button *ngIf="game.provider == 'JDB'" aria-label="Play {{game.gameName}}" type="button"\r
                            (click)='zepllienGame(game.gameId, game.gameName)' class="button button_game">Lets\r
                            Go!</button>\r
                        <button *ngIf="game.provider == 'Spribe' " aria-label="Play {{game.gameName}}" type="button"\r
                            (click)='onJDBGames(game.Gtype, game.Mtype)' class="button button_game">Lets Go!</button>\r
                        <button *ngIf="game.gameId == 'nft-aviatrix'" aria-label="Play {{game.gameName}}" type="button"\r
                            (click)='onaviatrix(game)' class="button button_game">Lets Go!</button>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</section>`, styles: ['/* src/app/pages/crash-page/crash-page.css */\nheader {\n  position: relative;\n  margin-bottom: 24px;\n}\nheader .live_casino_title {\n  background:\n    linear-gradient(\n      90deg,\n      #f97316 0%,\n      #ef4444 50%,\n      #06b6d4 100%) !important;\n  -webkit-background-clip: text !important;\n  background-clip: text !important;\n  color: transparent !important;\n  text-shadow: 0 0 25px rgba(249, 115, 22, 0.4);\n}\n.Maingame_row {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 18px;\n  width: 100%;\n  padding: 10px 0 30px 0;\n  box-sizing: border-box;\n}\n.Game_box {\n  background:\n    linear-gradient(\n      180deg,\n      #101c2b 0%,\n      #0a111a 100%) !important;\n  border: 1px solid rgba(6, 182, 212, 0.25) !important;\n  border-radius: 16px !important;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6) !important;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) !important;\n}\n.Game_box::before {\n  content: "\\1f680  FLY & WIN";\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #67e8f9;\n  background: rgba(0, 0, 0, 0.75);\n  border: 1px solid rgba(6, 182, 212, 0.4);\n  padding: 3px 8px;\n  border-radius: 20px;\n  backdrop-filter: blur(8px);\n  z-index: 2;\n  box-shadow: 0 2px 8px rgba(6, 182, 212, 0.3);\n}\n.Game_box:hover {\n  transform: translateY(-8px) scale(1.02) !important;\n  border-color: rgba(249, 115, 22, 0.6) !important;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 25px rgba(249, 115, 22, 0.35) !important;\n}\n.Game_box img {\n  border-radius: 12px;\n  transition: transform 0.4s ease;\n}\n.Game_box:hover img {\n  transform: scale(1.06);\n}\n.button_game {\n  background:\n    linear-gradient(\n      135deg,\n      #f97316 0%,\n      #ef4444 50%,\n      #06b6d4 100%) !important;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4) !important;\n  font-weight: 800 !important;\n}\n.button_game:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #fb923c 0%,\n      #f87171 50%,\n      #22d3ee 100%) !important;\n  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.6), 0 0 14px rgba(6, 182, 212, 0.5) !important;\n  transform: translateY(-2px) !important;\n}\n@media (max-width: 1024px) {\n  .Maingame_row {\n    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .Maingame_row {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n}\n@media (max-width: 420px) {\n  .Maingame_row {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=crash-page.css.map */\n'] }]
  }], () => [{ type: Store }, { type: Router }, { type: GameLauncherService }, { type: GameCmsService }, { type: PlayerService }, { type: DomSanitizer }, { type: ComponentFactoryResolver$1 }, { type: CommonUtilService }], { alertHost: [{
    type: ViewChild,
    args: ["alertHost", { read: ViewContainerRef }]
  }], gameIframe: [{
    type: ViewChild,
    args: ["gameIframe", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CrashPage, { className: "CrashPage", filePath: "src/app/pages/crash-page/crash-page.ts", lineNumber: 26 });
})();
export {
  CrashPage
};
//# sourceMappingURL=chunk-XKMP7A3B.js.map
