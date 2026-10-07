import {
  LoginComponent
} from "./chunk-RMSRX2PI.js";
import {
  GameCmsService
} from "./chunk-YQS7B7N5.js";
import "./chunk-QSOTGL7G.js";
import "./chunk-PYDFV3LO.js";
import "./chunk-YCU5ZQFP.js";
import {
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
  RouterModule
} from "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/pages/sports-page/sports-page.ts
var _c0 = ["alertHost"];
var _c1 = ["gameIframe"];
function SportsPage_ng_template_0_Template(rf, ctx) {
}
function SportsPage_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", "/assets/giflogo.gif?" + ctx_r0.loaderKey, \u0275\u0275sanitizeUrl);
  }
}
function SportsPage_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div")(2, "button", 7);
    \u0275\u0275listener("click", function SportsPage_div_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.subtabClose());
    });
    \u0275\u0275text(3, " \u2715 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "iframe", 8, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 9);
    \u0275\u0275listener("click", function SportsPage_div_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleFullScreen());
    });
    \u0275\u0275element(7, "i", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.urlSafe, \u0275\u0275sanitizeResourceUrl);
  }
}
var SportsPage = class _SportsPage {
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
  constructor(store, router, GameCmsService2, sanitizer, componentFactoryResolver) {
    this.store = store;
    this.router = router;
    this.GameCmsService = GameCmsService2;
    this.sanitizer = sanitizer;
    this.componentFactoryResolver = componentFactoryResolver;
    this._urlSafe = null;
    this.playerLoggedIn = false;
    this.loginstate = "";
    this.responseLoader = false;
    this.loaderKey = Date.now();
    this.SportUrl = "https://prod20278-inr-143521651.442hattrick.com";
    this.domainName = environment.Domain;
  }
  ngOnInit() {
    this.showLoader();
    this.moveToTop();
    setTimeout(() => {
      this.store.select("loginState").subscribe((loginState) => {
        console.log(loginState.playerLoggedIn);
        if (loginState.playerLoggedIn) {
          this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
          if (this.playerLoggedIn) {
            this.SportLauchGame();
          } else {
            let url = `${this.SportUrl}/en/spbk?api=${this.domainName}/assets/js/btisports.js?v=2&operatorToken=logout`;
            console.log(url);
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            if (this.urlSafe) {
              this.moveToTop();
            }
          }
        }
      });
    }, 1500);
  }
  showLoader() {
    this.loaderKey = Date.now();
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
  }
  SportLauchGame() {
    let wSession = sessionStorage.getItem("raj_wSession");
    this.GameCmsService.SportToken(wSession).subscribe((data) => {
      console.log(data);
      this.hideLoader();
      let preloader = document.getElementById("loadernone");
      if (preloader) {
        preloader.style.display = "none";
      }
      var EventId = localStorage.getItem("EventId");
      var selectionId = localStorage.getItem("selectionsId");
      var url;
      if (EventId && selectionId) {
        url = `${this.SportUrl}/en/spbk?api=${this.domainName}/assets/js/btisports.js?v=2&eventId=${EventId}&selectionId=${selectionId}&operatorToken=${data.token}`;
      } else {
        url = `${this.SportUrl}/en/spbk?api=${this.domainName}/assets/js/btisports.js?v=2&operatorToken=${data.token}`;
      }
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      if (this.urlSafe) {
        this.moveToTop();
      }
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
  navigates(route) {
    this.router.navigate([route]);
  }
  toggleFullScreen() {
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
    this.router.navigate(["/home"]);
  }
  ngOnDestroy() {
    window.$crisp?.push(["do", "chat:show"]);
  }
  static {
    this.\u0275fac = function SportsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SportsPage)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(GameCmsService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ComponentFactoryResolver$1));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SportsPage, selectors: [["app-sports-page"]], viewQuery: function SportsPage_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5, ViewContainerRef);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alertHost = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gameIframe = _t.first);
      }
    }, decls: 5, vars: 2, consts: [["alertHost", ""], ["gameIframe", ""], ["aria-labelledby", "sports-title"], ["class", "loader-wrapper", "role", "status", "aria-live", "polite", 4, "ngIf"], [4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "loader-wrapper"], ["width", "280", "alt", "Loading sports game, please wait", 3, "src"], ["type", "button", "aria-label", "Close sports game", 1, "game-close-btn", 3, "click"], ["id", "game_object", "scrolling", "auto", "frameborder", "0", "allowfullscreen", "", "title", "Sports betting game", 1, "game-iframe", 3, "src"], ["type", "button", "aria-label", "Toggle fullscreen mode", 1, "iframe_fullS_icon", "ml-4", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-expand-arrows-alt"]], template: function SportsPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SportsPage_ng_template_0_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "section", 2);
        \u0275\u0275template(3, SportsPage_div_3_Template, 2, 1, "div", 3)(4, SportsPage_div_4_Template, 8, 1, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.responseLoader);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.urlSafe);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, RouterModule], styles: ["\n\nsection[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: calc(100vh - 120px);\n  display: flex;\n  flex-direction: column;\n}\n.game-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 120px);\n  min-height: 720px;\n  border: 1px solid rgba(6, 182, 212, 0.3);\n  border-radius: 20px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(6, 182, 212, 0.2);\n  background: #090e17;\n  transition: all 0.3s ease;\n}\n.game-close-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 90px;\n  right: 24px;\n  background: rgba(15, 23, 42, 0.85);\n  border: 1.5px solid rgba(239, 68, 68, 0.5);\n  color: #ffffff;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 9999;\n  backdrop-filter: blur(12px);\n  transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);\n}\n.game-close-btn[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  border-color: #ffffff;\n  transform: rotate(90deg) scale(1.1);\n  box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);\n}\n.iframe_fullS_icon[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4 0%,\n      #10b981 100%);\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  color: #ffffff;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 9999;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 6px 20px rgba(6, 182, 212, 0.45);\n  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n.iframe_fullS_icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.12);\n  box-shadow: 0 8px 30px rgba(6, 182, 212, 0.7);\n}\n.loader-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 500px;\n  width: 100%;\n}\n/*# sourceMappingURL=sports-page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SportsPage, [{
    type: Component,
    args: [{ standalone: true, selector: "app-sports-page", imports: [CommonModule, FormsModule, RouterModule], template: `\r
<ng-template #alertHost></ng-template>\r
<section aria-labelledby="sports-title">\r
  <div class="loader-wrapper" *ngIf="responseLoader"  role="status" aria-live="polite">\r
        <img [src]="'/assets/giflogo.gif?' + loaderKey" width="280" alt="Loading sports game, please wait"/>\r
  </div>\r
      <div *ngIf="urlSafe">\r
        <div >\r
          <button type="button" class="game-close-btn" aria-label="Close sports game" (click)="subtabClose()"> \u2715 </button>\r
            <iframe #gameIframe id="game_object" class="game-iframe" scrolling="auto" frameborder="0" allowfullscreen  title="Sports betting game"\r
              [src]="urlSafe"></iframe>\r
        </div>\r
        <button\r
      type="button"\r
      class="iframe_fullS_icon ml-4"\r
      aria-label="Toggle fullscreen mode"\r
      (click)="toggleFullScreen()">\r
\r
      <i\r
        class="fas fa-expand-arrows-alt"\r
        aria-hidden="true">\r
      </i>\r
\r
    </button>\r
    </div>\r
 </section>`, styles: ["/* src/app/pages/sports-page/sports-page.css */\nsection {\n  position: relative;\n  width: 100%;\n  min-height: calc(100vh - 120px);\n  display: flex;\n  flex-direction: column;\n}\n.game-iframe {\n  width: 100%;\n  height: calc(100vh - 120px);\n  min-height: 720px;\n  border: 1px solid rgba(6, 182, 212, 0.3);\n  border-radius: 20px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(6, 182, 212, 0.2);\n  background: #090e17;\n  transition: all 0.3s ease;\n}\n.game-close-btn {\n  position: fixed;\n  top: 90px;\n  right: 24px;\n  background: rgba(15, 23, 42, 0.85);\n  border: 1.5px solid rgba(239, 68, 68, 0.5);\n  color: #ffffff;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 9999;\n  backdrop-filter: blur(12px);\n  transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);\n}\n.game-close-btn:hover {\n  background: #ef4444;\n  border-color: #ffffff;\n  transform: rotate(90deg) scale(1.1);\n  box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);\n}\n.iframe_fullS_icon {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4 0%,\n      #10b981 100%);\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  color: #ffffff;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 9999;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 6px 20px rgba(6, 182, 212, 0.45);\n  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n.iframe_fullS_icon:hover {\n  transform: scale(1.12);\n  box-shadow: 0 8px 30px rgba(6, 182, 212, 0.7);\n}\n.loader-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 500px;\n  width: 100%;\n}\n/*# sourceMappingURL=sports-page.css.map */\n"] }]
  }], () => [{ type: Store }, { type: Router }, { type: GameCmsService }, { type: DomSanitizer }, { type: ComponentFactoryResolver$1 }], { alertHost: [{
    type: ViewChild,
    args: ["alertHost", { read: ViewContainerRef }]
  }], gameIframe: [{
    type: ViewChild,
    args: ["gameIframe", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SportsPage, { className: "SportsPage", filePath: "src/app/pages/sports-page/sports-page.ts", lineNumber: 22 });
})();
export {
  SportsPage
};
//# sourceMappingURL=chunk-DXFD5CSK.js.map
