import {
  LoginComponent,
  RegisterComponent
} from "./chunk-RMSRX2PI.js";
import {
  GameCmsService
} from "./chunk-YQS7B7N5.js";
import {
  DashboardRoutingModule
} from "./chunk-UHGQF5EV.js";
import "./chunk-QSOTGL7G.js";
import {
  CashierService
} from "./chunk-FQIESEDM.js";
import "./chunk-PYDFV3LO.js";
import {
  CommonUtilService
} from "./chunk-BI23JTGF.js";
import {
  MessageService
} from "./chunk-YCU5ZQFP.js";
import {
  CashierGetBalanceStart
} from "./chunk-PDHHGWHH.js";
import {
  LoginSuccess,
  LogoutStart,
  PlayerService,
  ResetState
} from "./chunk-HXFVUPJ2.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-FAEKDNT6.js";
import {
  environment
} from "./chunk-2Y7B2BAT.js";
import {
  Store
} from "./chunk-V7ZNEVP2.js";
import {
  ActivatedRoute,
  DomSanitizer,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-S5ZOBF7L.js";
import {
  Component,
  ComponentFactoryResolver$1,
  ViewChild,
  ViewContainerRef,
  distinctUntilChanged,
  filter,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/components/footer-component/footer-component.ts
var FooterComponent = class _FooterComponent {
  constructor() {
    this.Domain = environment.Domain;
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
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer-component"]], decls: 43, vars: 4, consts: [[1, "BG1"], [1, "flash_border"], [1, "Pard_10"], [1, "row", "footerMain"], [1, "col-12", "col-lg-4"], [1, "dis_flex", "footer_title"], ["height", "100px", "src", "assets/logos/footer_logo.webp", "alt", "footer logo", "loading", "lazy", "decoding", "async"], [1, "col-8", "col-lg-4"], [1, "footer_lnr_color", "pagesTitle"], [1, "pagesList"], ["href", "https://t.me/RAJPOKER", "aria-label", "Go to Contact us", "target", "_blank"], ["routerLink", "/terms-and-conditions", "aria-label", "Go to Privacy policy"], [1, "col-12", "col-lg-4", "footer_last_sec"], [1, "afflicate_btns"], ["type", "button", "title", "Agent Backoffice Portal", 1, "agent_Btn"], ["target", "_blank", "aria-label", "Go to Agent", 3, "href"], [1, "btn-top-tag"], ["id", "agent", 1, "agent_text"], [1, "backofc_text"], ["type", "button", "title", "Affiliate Partner Portal", 1, "affiliate_btn"], ["aria-label", "affiliate", "target", "_blank", 3, "href"], ["id", "affiliate", 1, "agent_text"], ["role", "button", "tabindex", "0", "aria-label", "move top", 1, "main_IconScn", 3, "click"], ["role", "button", "tabindex", "0", "aria-label", "move top", 1, "up_section", "primary_button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 -960 960 960", "width", "24px"], ["d", "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z", "aria-hidden", "true"], [1, "dis_flex", "social-icons"], ["href", "https://t.me/RAJPOKER", "target", "_blank", "aria-label", "telegram"], [1, "fa-brands", "fa-telegram"], ["href", "https://www.instagram.com/raj_poker_casino?igsh=ZDRkaWRrNDhicHlu", "aria-label", "instagram", "target", "_blank"], [1, "fa-brands", "fa-instagram"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "span", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275element(6, "img", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 7)(8, "h6", 8);
        \u0275\u0275text(9, "Pages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "ul", 9)(11, "li")(12, "a", 10);
        \u0275\u0275text(13, " Contact us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "li", 11);
        \u0275\u0275text(15, "Terms and Conditions ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 12)(17, "div", 13)(18, "button", 14)(19, "a", 15)(20, "span", 16);
        \u0275\u0275text(21, "\u{1F451} VIP AGENT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "h2", 17);
        \u0275\u0275text(23, "AGENT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 18);
        \u0275\u0275text(25, "backoffice");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "button", 19)(27, "a", 20)(28, "span", 16);
        \u0275\u0275text(29, "\u{1F4BC} PARTNER");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h2", 21);
        \u0275\u0275text(31, "AFFILIATE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 18);
        \u0275\u0275text(33, "portal");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 22);
        \u0275\u0275listener("click", function FooterComponent_Template_div_click_34_listener() {
          return ctx.moveToTop();
        });
        \u0275\u0275elementStart(35, "div", 23);
        \u0275\u0275listener("click", function FooterComponent_Template_div_click_35_listener() {
          return ctx.moveToTop();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 24);
        \u0275\u0275element(37, "path", 25);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(38, "div", 26)(39, "a", 27);
        \u0275\u0275element(40, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "a", 29);
        \u0275\u0275element(42, "i", 30);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275propertyInterpolate1("href", "", ctx.Domain, "/agent/#", \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(8);
        \u0275\u0275propertyInterpolate1("href", "", ctx.Domain, "/newaffiliate/#/login", \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [CommonModule, DashboardRoutingModule, RouterLink], styles: ['\n\n.footer_lnr_color[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background:\n    linear-gradient(\n      95.42deg,\n      #CC0000 4.33%,\n      #FF9D00 131.46%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  margin: 0;\n}\n.pagesTitle[_ngcontent-%COMP%] {\n  font-size: calc(1.375rem + 1vw);\n}\n.footer_title[_ngcontent-%COMP%]   .footer_lnr_color[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.footer_title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dis_flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.footer_title[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 10px;\n}\n.social-icons[_ngcontent-%COMP%] {\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: transparent;\n  background: var(--text-muted);\n  background-clip: text;\n  cursor: pointer;\n}\n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, \n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:active {\n  background: var(--gradient-primary);\n  color: transparent;\n  background-clip: text;\n}\n.pagesList[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin: 0;\n  height: calc(100% - 50px);\n  font-size: 20px;\n  max-height: 175px;\n}\n.pagesList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.pagesList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  color: #fff;\n}\n.pagesList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, \n.pagesList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #CC0000 -8%,\n      #e13917 12%,\n      #f37a23 20%,\n      #fff 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.flash_border[_ngcontent-%COMP%] {\n  position: relative;\n  width: 649.5px;\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      #66000000,\n      #CC0000,\n      #ffbf00,\n      #CC0000,\n      #66000000);\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 1;\n  opacity: 0.6;\n  display: block;\n}\n.up_section[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: _ngcontent-%COMP%_moveGotoTop 1s ease-in-out infinite;\n  cursor: pointer;\n}\n.up_section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scale(1.5) rotate(-90deg);\n  fill: #fff;\n}\n.footer_para[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  text-align: justify;\n}\n.Pard_10[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n.head_mini[_ngcontent-%COMP%] {\n  margin: 20px 0px 5px 0px;\n}\n.head_mini[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.afflicate_btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.agent_Btn[_ngcontent-%COMP%], \n.affiliate_btn[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1.5px solid transparent;\n  outline: 0;\n  min-width: 135px;\n  height: 52px;\n  padding: 6px 14px;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n  overflow: hidden;\n  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);\n}\n.agent_Btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1c1507 0%,\n      #2b1d06 50%,\n      #3d2a08 100%);\n  border-color: rgba(245, 158, 11, 0.5);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5), 0 0 14px rgba(245, 158, 11, 0.25);\n}\n.agent_Btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.03);\n  border-color: #f59e0b;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 24px rgba(245, 158, 11, 0.6);\n}\n.affiliate_btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #041a14 0%,\n      #08291f 50%,\n      #0d3b2d 100%);\n  border-color: rgba(5, 150, 105, 0.5);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5), 0 0 14px rgba(5, 150, 105, 0.25);\n}\n.affiliate_btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.03);\n  border-color: #10b981;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 24px rgba(16, 185, 129, 0.6);\n}\n.btn-top-tag[_ngcontent-%COMP%] {\n  font-size: 8.5px;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  display: block;\n  margin-bottom: 2px;\n}\n.agent_Btn[_ngcontent-%COMP%]   .btn-top-tag[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.affiliate_btn[_ngcontent-%COMP%]   .btn-top-tag[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.agent_text[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: "Poppins", sans-serif;\n  font-size: 16px;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  line-height: 1.1;\n  color: #ffffff;\n}\n.backofc_text[_ngcontent-%COMP%] {\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  opacity: 0.8;\n  color: #94a3b8;\n}\n.afflicate_btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: none !important;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n}\n.afflicate_btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.main_IconScn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n}\n.footer_last_sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 992px) {\n  .footerMain[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n}\n@keyframes _ngcontent-%COMP%_moveGotoTop {\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n}\n.modern-btn[_ngcontent-%COMP%] {\n  padding: 12px 22px;\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  color: #fff;\n  background:\n    linear-gradient(\n      90deg,\n      #ff3c3c,\n      #ff9f30);\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  transition: 0.25s ease-in-out;\n  box-shadow: 0 4px 12px rgba(255, 100, 50, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.modern-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 200%;\n  height: 100%;\n  background:\n    linear-gradient(\n      120deg,\n      rgba(255, 255, 255, 0.2),\n      rgba(255, 255, 255, 0.05),\n      transparent);\n  transition: 0.4s;\n}\n.modern-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.modern-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(255, 100, 50, 0.55);\n  transform: translateY(-2px);\n}\n.modern-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.8;\n}\n.agent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ff2e2e,\n      #ff9330);\n}\n.affiliate[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ff5f5f,\n      #ffa63c);\n}\n/*# sourceMappingURL=footer-component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer-component", imports: [CommonModule, DashboardRoutingModule], template: '<section class="BG1">\r\n    <span class="flash_border"></span>\r\n    <div class="Pard_10">\r\n        <div class="row footerMain">\r\n            <div class="col-12 col-lg-4">\r\n                <div class="dis_flex footer_title">\r\n                    <img height="100px" src="assets/logos/footer_logo.webp" alt="footer logo" loading="lazy"\r\n                        decoding="async" />\r\n                </div>\r\n            </div>\r\n            <div class="col-8 col-lg-4">\r\n                <h6 class="footer_lnr_color pagesTitle">Pages</h6>\r\n                <ul class="pagesList">\r\n                    <li> <a href="https://t.me/RAJPOKER" aria-label="Go to Contact us" target="_blank"> Contact us</a>\r\n                    </li>\r\n                    <li routerLink="/terms-and-conditions" aria-label="Go to Privacy policy">Terms and Conditions </li>\r\n                </ul>\r\n            </div>\r\n            <div class="col-12 col-lg-4 footer_last_sec">\r\n                <div class="afflicate_btns">\r\n                    <button class="agent_Btn" type="button" title="Agent Backoffice Portal">\r\n                        <a href="{{Domain}}/agent/#" target="_blank" aria-label="Go to Agent">\r\n                            <span class="btn-top-tag">\u{1F451} VIP AGENT</span>\r\n                            <h2 id="agent" class="agent_text">AGENT</h2>\r\n                            <span class="backofc_text">backoffice</span>\r\n                        </a>\r\n                    </button>\r\n                    <button class="affiliate_btn" type="button" title="Affiliate Partner Portal">\r\n                        <a href="{{Domain}}/newaffiliate/#/login" aria-label="affiliate" target="_blank">\r\n                            <span class="btn-top-tag">\u{1F4BC} PARTNER</span>\r\n                            <h2 id="affiliate" class="agent_text">AFFILIATE</h2>\r\n                            <span class="backofc_text">portal</span>\r\n                        </a>\r\n                    </button>\r\n                </div>\r\n                <div class="main_IconScn" role="button" tabindex="0" aria-label="move top" (click)="moveToTop()">\r\n                    <div class="up_section primary_button" role="button" tabindex="0" aria-label="move top"\r\n                        (click)="moveToTop()">\r\n                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">\r\n                            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" aria-hidden="true" />\r\n                        </svg>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="dis_flex social-icons">\r\n            <!-- <a href="https://web.telegram.org/a/#-1003447935593" target="_blank"  aria-label="telegram"> -->\r\n            <a href="https://t.me/RAJPOKER" target="_blank" aria-label="telegram">\r\n                <i class="fa-brands fa-telegram"></i>\r\n            </a>\r\n            <a href="https://www.instagram.com/raj_poker_casino?igsh=ZDRkaWRrNDhicHlu" aria-label="instagram"\r\n                target="_blank">\r\n                <i class="fa-brands fa-instagram"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</section>', styles: ['/* src/app/components/footer-component/footer-component.css */\n.footer_lnr_color {\n  font-weight: 500;\n  background:\n    linear-gradient(\n      95.42deg,\n      #CC0000 4.33%,\n      #FF9D00 131.46%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  margin: 0;\n}\n.pagesTitle {\n  font-size: calc(1.375rem + 1vw);\n}\n.footer_title .footer_lnr_color {\n  font-size: 20px;\n}\n.footer_title img {\n  width: 100%;\n}\n.dis_flex {\n  display: flex;\n}\n.footer_title {\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 10px;\n}\n.social-icons {\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.social-icons i {\n  font-size: 30px;\n  color: transparent;\n  background: var(--text-muted);\n  background-clip: text;\n  cursor: pointer;\n}\n.social-icons i:hover,\n.social-icons i:active {\n  background: var(--gradient-primary);\n  color: transparent;\n  background-clip: text;\n}\n.pagesList {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin: 0;\n  height: calc(100% - 50px);\n  font-size: 20px;\n  max-height: 175px;\n}\n.pagesList li,\n.pagesList li a {\n  cursor: pointer;\n  text-decoration: none;\n  color: #fff;\n}\n.pagesList li:hover,\n.pagesList li a:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #CC0000 -8%,\n      #e13917 12%,\n      #f37a23 20%,\n      #fff 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.flash_border {\n  position: relative;\n  width: 649.5px;\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      #66000000,\n      #CC0000,\n      #ffbf00,\n      #CC0000,\n      #66000000);\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 1;\n  opacity: 0.6;\n  display: block;\n}\n.up_section {\n  width: 40px;\n  height: 40px;\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: moveGotoTop 1s ease-in-out infinite;\n  cursor: pointer;\n}\n.up_section svg {\n  transform: scale(1.5) rotate(-90deg);\n  fill: #fff;\n}\n.footer_para {\n  color: var(--text-secondary);\n  font-size: 14px;\n  text-align: justify;\n}\n.Pard_10 {\n  padding: 35px;\n}\n.head_mini {\n  margin: 20px 0px 5px 0px;\n}\n.head_mini h1 {\n  margin: 0;\n}\n.afflicate_btns {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.agent_Btn,\n.affiliate_btn {\n  position: relative;\n  border: 1.5px solid transparent;\n  outline: 0;\n  min-width: 135px;\n  height: 52px;\n  padding: 6px 14px;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n  overflow: hidden;\n  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);\n}\n.agent_Btn {\n  background:\n    linear-gradient(\n      135deg,\n      #1c1507 0%,\n      #2b1d06 50%,\n      #3d2a08 100%);\n  border-color: rgba(245, 158, 11, 0.5);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5), 0 0 14px rgba(245, 158, 11, 0.25);\n}\n.agent_Btn:hover {\n  transform: translateY(-3px) scale(1.03);\n  border-color: #f59e0b;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 24px rgba(245, 158, 11, 0.6);\n}\n.affiliate_btn {\n  background:\n    linear-gradient(\n      135deg,\n      #041a14 0%,\n      #08291f 50%,\n      #0d3b2d 100%);\n  border-color: rgba(5, 150, 105, 0.5);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5), 0 0 14px rgba(5, 150, 105, 0.25);\n}\n.affiliate_btn:hover {\n  transform: translateY(-3px) scale(1.03);\n  border-color: #10b981;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 24px rgba(16, 185, 129, 0.6);\n}\n.btn-top-tag {\n  font-size: 8.5px;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  display: block;\n  margin-bottom: 2px;\n}\n.agent_Btn .btn-top-tag {\n  color: #fbbf24;\n}\n.affiliate_btn .btn-top-tag {\n  color: #34d399;\n}\n.agent_text {\n  margin: 0px;\n  font-family: "Poppins", sans-serif;\n  font-size: 16px;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  line-height: 1.1;\n  color: #ffffff;\n}\n.backofc_text {\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  opacity: 0.8;\n  color: #94a3b8;\n}\n.afflicate_btns button a {\n  color: #ffffff;\n  text-decoration: none !important;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n}\n.afflicate_btns button:active {\n  transform: scale(0.96);\n}\n.main_IconScn {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n}\n.footer_last_sec {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 992px) {\n  .footerMain {\n    gap: 20px;\n  }\n}\n@keyframes moveGotoTop {\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n}\n.modern-btn {\n  padding: 12px 22px;\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  color: #fff;\n  background:\n    linear-gradient(\n      90deg,\n      #ff3c3c,\n      #ff9f30);\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  transition: 0.25s ease-in-out;\n  box-shadow: 0 4px 12px rgba(255, 100, 50, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.modern-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 200%;\n  height: 100%;\n  background:\n    linear-gradient(\n      120deg,\n      rgba(255, 255, 255, 0.2),\n      rgba(255, 255, 255, 0.05),\n      transparent);\n  transition: 0.4s;\n}\n.modern-btn:hover::before {\n  left: 100%;\n}\n.modern-btn:hover {\n  box-shadow: 0 6px 20px rgba(255, 100, 50, 0.55);\n  transform: translateY(-2px);\n}\n.modern-btn span {\n  font-size: 10px;\n  opacity: 0.8;\n}\n.agent {\n  background:\n    linear-gradient(\n      90deg,\n      #ff2e2e,\n      #ff9330);\n}\n.affiliate {\n  background:\n    linear-gradient(\n      90deg,\n      #ff5f5f,\n      #ffa63c);\n}\n/*# sourceMappingURL=footer-component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer-component/footer-component.ts", lineNumber: 12 });
})();

// src/app/components/main-component/main-component.ts
var _c0 = ["alertHost"];
var _c1 = (a0, a1) => ({ "sidenav": a0, "sideMobile": a1 });
var _c2 = (a0) => ({ "sidenav_content": a0 });
var _c3 = (a0, a1) => ({ "logged-in": a0, "logged-out": a1 });
var _c4 = (a0, a1) => ({ "logged-in-content": a0, "logged-out-content": a1 });
var _c5 = () => ({ exact: true });
function MainComponent_ng_template_0_Template(rf, ctx) {
}
function MainComponent_img_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 41);
  }
}
function MainComponent_li_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.name);
  }
}
function MainComponent_li_13_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 46);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r3.showHistoryMenu ? "fa-angle-up" : "fa-angle-down");
  }
}
function MainComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 42);
    \u0275\u0275listener("click", function MainComponent_li_13_Template_li_click_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      item_r3.isHistoryToggle ? ctx_r3.toggleHistory() : null;
      return \u0275\u0275resetView(ctx_r3.navigateMain(item_r3.route));
    });
    \u0275\u0275elementStart(1, "span", 43);
    \u0275\u0275element(2, "img", 44);
    \u0275\u0275template(3, MainComponent_li_13_span_3_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MainComponent_li_13_i_4_Template, 1, 1, "i", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("clickable", item_r3.route || item_r3.isHistoryToggle);
    \u0275\u0275property("routerLink", item_r3.route)("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c5));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "assets/sidemenu_icons/" + item_r3.icon, \u0275\u0275sanitizeUrl)("alt", item_r3.alt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.menuNames);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.isHistoryToggle);
  }
}
function MainComponent_ng_container_14_li_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r6.name);
  }
}
function MainComponent_ng_container_14_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 48);
    \u0275\u0275listener("click", function MainComponent_ng_container_14_li_1_Template_li_click_0_listener() {
      const h_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.navigateMain(h_r6.route));
    });
    \u0275\u0275elementStart(1, "span", 43);
    \u0275\u0275element(2, "img", 49);
    \u0275\u0275template(3, MainComponent_ng_container_14_li_1_span_3_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "assets/sidemenu_icons/" + h_r6.icon, \u0275\u0275sanitizeUrl)("alt", h_r6.alt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.menuNames);
  }
}
function MainComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MainComponent_ng_container_14_li_1_Template, 4, 3, "li", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.historyMenu);
  }
}
function MainComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 50);
    \u0275\u0275listener("click", function MainComponent_li_15_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clickOnlogOut());
    });
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, " Logout");
    \u0275\u0275elementEnd();
  }
}
function MainComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function MainComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.MenuCloseCover());
    });
    \u0275\u0275elementEnd();
  }
}
function MainComponent_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 68);
  }
}
function MainComponent_div_20_i_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 69);
    \u0275\u0275listener("click", function MainComponent_div_20_i_3_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAvatarList());
    });
    \u0275\u0275elementEnd();
  }
}
function MainComponent_div_20_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 70);
    \u0275\u0275listener("click", function MainComponent_div_20_img_4_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAvatarList());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.playerAvatar, \u0275\u0275sanitizeUrl);
  }
}
function MainComponent_div_20_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 68);
  }
}
function MainComponent_div_20_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71)(1, "span");
    \u0275\u0275text(2, " INR: ");
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "USD: ");
    \u0275\u0275elementStart(7, "span", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\xA0\u20B9 ", ctx_r3.INRBalance, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$ ", ctx_r3.USDBalance, "");
  }
}
function MainComponent_div_20_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 68);
  }
}
function MainComponent_div_20_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73)(1, "span", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.vipPoints);
  }
}
function MainComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275template(2, MainComponent_div_20_div_2_Template, 1, 0, "div", 55)(3, MainComponent_div_20_i_3_Template, 1, 0, "i", 56)(4, MainComponent_div_20_img_4_Template, 1, 1, "img", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 58)(6, "div", 59)(7, "div", 60)(8, "span", 61);
    \u0275\u0275text(9, "Nickname");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 62)(13, "span", 61);
    \u0275\u0275text(14, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, MainComponent_div_20_div_15_Template, 1, 0, "div", 55)(16, MainComponent_div_20_span_16_Template, 9, 2, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 64)(18, "span", 61);
    \u0275\u0275text(19, "Rake Back");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, MainComponent_div_20_div_20_Template, 1, 0, "div", 55)(21, MainComponent_div_20_span_21_Template, 3, 1, "span", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 66);
    \u0275\u0275text(23, "Deposit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 67);
    \u0275\u0275listener("click", function MainComponent_div_20_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clickOnlogOut());
    });
    \u0275\u0275text(25, "Logout");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.loginloader1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loginloader1 && !ctx_r3.playerAvatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loginloader1 && ctx_r3.playerAvatar);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.ProfileName);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.responseloader);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.responseloader);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.responseloader);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.responseloader);
  }
}
function MainComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "div", 77);
    \u0275\u0275listener("click", function MainComponent_div_21_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.mobileMenu());
    });
    \u0275\u0275element(3, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "img", 79);
    \u0275\u0275elementEnd()();
  }
}
function MainComponent_div_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 90);
  }
}
function MainComponent_div_22_i_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 69);
    \u0275\u0275listener("click", function MainComponent_div_22_i_8_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAvatarList());
    });
    \u0275\u0275elementEnd();
  }
}
function MainComponent_div_22_img_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 91);
    \u0275\u0275listener("click", function MainComponent_div_22_img_9_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAvatarList());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.playerAvatar, \u0275\u0275sanitizeUrl);
  }
}
function MainComponent_div_22_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 68);
  }
}
function MainComponent_div_22_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.ProfileName);
  }
}
function MainComponent_div_22_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 68);
  }
}
function MainComponent_div_22_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, " INR: ");
    \u0275\u0275elementStart(2, "span", 92);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\xA0\u20B9 ", ctx_r3.INRBalance, "");
  }
}
function MainComponent_div_22_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, " USD: ");
    \u0275\u0275elementStart(2, "span", 72);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$ ", ctx_r3.USDBalance, "");
  }
}
function MainComponent_div_22_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 68);
  }
}
function MainComponent_div_22_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.vipPoints);
  }
}
function MainComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 80)(2, "div", 76)(3, "div", 77);
    \u0275\u0275listener("click", function MainComponent_div_22_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.mobileMenu());
    });
    \u0275\u0275element(4, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "img", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 54);
    \u0275\u0275template(7, MainComponent_div_22_div_7_Template, 1, 0, "div", 82)(8, MainComponent_div_22_i_8_Template, 1, 0, "i", 56)(9, MainComponent_div_22_img_9_Template, 1, 1, "img", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 66);
    \u0275\u0275text(11, "Deposit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 84)(14, "div", 85)(15, "span", 86);
    \u0275\u0275text(16, "Nickname");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MainComponent_div_22_div_17_Template, 1, 0, "div", 55)(18, MainComponent_div_22_p_18_Template, 2, 1, "p", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 87)(20, "span", 86);
    \u0275\u0275text(21, " Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 88);
    \u0275\u0275template(23, MainComponent_div_22_div_23_Template, 1, 0, "div", 55)(24, MainComponent_div_22_span_24_Template, 4, 1, "span", 63)(25, MainComponent_div_22_span_25_Template, 4, 1, "span", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 89)(27, "span", 86);
    \u0275\u0275text(28, "Rake Back");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, MainComponent_div_22_div_29_Template, 1, 0, "div", 55)(30, MainComponent_div_22_span_30_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r3.loginloader1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loginloader1 && !ctx_r3.playerAvatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loginloader1 && ctx_r3.playerAvatar);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r3.responseloader);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.responseloader);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.responseloader);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.responseloader);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.responseloader);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.responseloader);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.responseloader);
  }
}
function MainComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 93)(2, "button", 94);
    \u0275\u0275listener("click", function MainComponent_div_23_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showPopUp("REGISTER"));
    });
    \u0275\u0275text(3, "Register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 95);
    \u0275\u0275listener("click", function MainComponent_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showPopUp("LOGIN"));
    });
    \u0275\u0275text(5, "Login");
    \u0275\u0275elementEnd()()();
  }
}
function MainComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275listener("click", function MainComponent_div_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAvatarList());
    });
    \u0275\u0275elementEnd();
  }
}
function MainComponent_div_29_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "img", 109);
    \u0275\u0275listener("click", function MainComponent_div_29_div_6_div_2_Template_img_click_1_listener() {
      const avatar_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setAvatar(avatar_r20.id));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const avatar_r20 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r3.selectedAvatarId === avatar_r20.id);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.getSanitizedImageUrl(avatar_r20.imageData), \u0275\u0275sanitizeUrl);
  }
}
function MainComponent_div_29_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106);
    \u0275\u0275template(2, MainComponent_div_29_div_6_div_2_Template, 2, 3, "div", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.avatars);
  }
}
function MainComponent_div_29__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 110);
    \u0275\u0275element(1, "circle", 111);
    \u0275\u0275elementEnd();
  }
}
function MainComponent_div_29_div_8_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 117);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r3.getPlayersAvatars(), \u0275\u0275sanitizeUrl);
  }
}
function MainComponent_div_29_div_8_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 118);
  }
}
function MainComponent_div_29_div_8_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 119);
  }
}
function MainComponent_div_29_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div")(2, "b");
    \u0275\u0275text(3, "Preview:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MainComponent_div_29_div_8_img_4_Template, 1, 1, "img", 113)(5, MainComponent_div_29_div_8_i_5_Template, 1, 0, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 115);
    \u0275\u0275listener("click", function MainComponent_div_29_div_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setSelectedAvatar());
    });
    \u0275\u0275text(7, " Set Avatar ");
    \u0275\u0275template(8, MainComponent_div_29_div_8_span_8_Template, 1, 0, "span", 116);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.playerAvatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loginloader1 && !ctx_r3.playerAvatar);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.loginloader);
  }
}
function MainComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275listener("click", function MainComponent_div_29_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 98)(2, "h3", 99);
    \u0275\u0275text(3, "Select Avatar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 100);
    \u0275\u0275listener("click", function MainComponent_div_29_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAvatarList());
    });
    \u0275\u0275element(5, "i", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MainComponent_div_29_div_6_Template, 3, 1, "div", 102)(7, MainComponent_div_29__svg_svg_7_Template, 2, 0, "svg", 103)(8, MainComponent_div_29_div_8_Template, 9, 3, "div", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r3.avatars);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.avatars);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.avatars);
  }
}
function MainComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275listener("click", function MainComponent_div_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeNewpopup());
    });
    \u0275\u0275elementEnd();
  }
}
function MainComponent__svg_svg_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 121);
    \u0275\u0275element(1, "path", 122)(2, "path", 123);
    \u0275\u0275elementEnd();
  }
}
function MainComponent__svg_svg_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 121);
    \u0275\u0275element(1, "path", 124)(2, "path", 125);
    \u0275\u0275elementEnd();
  }
}
function MainComponent_div_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function MainComponent_div_51_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Password must be min 6 characters max 15 characters ");
    \u0275\u0275elementEnd();
  }
}
function MainComponent_div_51_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Password must be min 6 characters max 15 characters ");
    \u0275\u0275elementEnd();
  }
}
function MainComponent_div_51_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Enter alphabets and numeric only ");
    \u0275\u0275elementEnd();
  }
}
function MainComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275template(1, MainComponent_div_51_div_1_Template, 2, 0, "div", 7)(2, MainComponent_div_51_div_2_Template, 2, 0, "div", 7)(3, MainComponent_div_51_div_3_Template, 2, 0, "div", 7)(4, MainComponent_div_51_div_4_Template, 2, 0, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.passwordOne == null ? null : ctx_r3.passwordOne.errors == null ? null : ctx_r3.passwordOne.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.passwordOne == null ? null : ctx_r3.passwordOne.errors == null ? null : ctx_r3.passwordOne.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.passwordOne == null ? null : ctx_r3.passwordOne.errors == null ? null : ctx_r3.passwordOne.errors["maxlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r3.passwordOne == null ? null : ctx_r3.passwordOne.errors == null ? null : ctx_r3.passwordOne.errors["minlength"]) && !(ctx_r3.passwordOne == null ? null : ctx_r3.passwordOne.errors == null ? null : ctx_r3.passwordOne.errors["maxlength"]) && (ctx_r3.passwordOne == null ? null : ctx_r3.passwordOne.errors == null ? null : ctx_r3.passwordOne.errors["pattern"]));
  }
}
var MainComponent = class _MainComponent {
  constructor(store, router, route, fb, componentFactoryResolver, commonUtilSer, sanitizer, PlayerService2, CashierService2, messageService, cmsgameservice) {
    this.store = store;
    this.router = router;
    this.route = route;
    this.fb = fb;
    this.componentFactoryResolver = componentFactoryResolver;
    this.commonUtilSer = commonUtilSer;
    this.sanitizer = sanitizer;
    this.PlayerService = PlayerService2;
    this.CashierService = CashierService2;
    this.messageService = messageService;
    this.cmsgameservice = cmsgameservice;
    this.isLoading = false;
    this.currentRoute = "";
    this.mainMenu = [
      // { name: 'VIP Point', icon: 'vip_points_icon.svg', alt: 'VIP', route: null },
      { name: "Home", icon: "home_icon.svg", alt: "Home", route: "home" },
      { name: "My Account", icon: "dashboard_icon.svg", alt: "My Account", route: "myaccount" },
      { name: "Tournaments", icon: "tournaments_icon.svg", alt: "Tournaments", route: "tournaments" },
      { name: "Live Casino", icon: "Live-casino-icon.png", alt: "Live Casino", route: "live-casino", providers: ["evolutiongv", "ezugigv", "pragmaticplaylivecasino", "vivogaming"] },
      { name: "Sports", icon: "Sports-icon.png", alt: "Sports", route: "sports", providers: ["bti"] },
      { name: "Slots", icon: "slot-icon.png", alt: "Slots", route: "slots" },
      { name: "Crash", icon: "crash-icon.png", alt: "Crash", route: "crash", providers: ["aviatrix", "spribe"] },
      // { name: 'Crash Games', icon: 'featured.svg', alt: 'Indian Games', route: 'indiangames', providers: ['ballagames'] },
      { name: "Promotions", icon: "promotion.svg", alt: "promotion", route: "promotion" },
      { name: "Leaderboards", icon: "vip_points_icon.svg", alt: "Leaderboards", route: "leaderboard" }
    ];
    this.dashboardMenu = [
      { name: "Home", icon: "home_icon.svg", alt: "Home", route: "home" },
      { name: "Profile", icon: "user-tick.svg", alt: "profile", route: "myaccount/profile" },
      { name: "Bank", icon: "bank.svg", alt: "bank", route: "myaccount/bank" },
      { name: "Cashier", icon: "card-pos.svg", alt: "cashier", route: "myaccount/payments" },
      { name: "Balance", icon: "balance.svg", alt: "Balance", route: "myaccount/balance" },
      { name: "Currency Exchange", icon: "exchange.svg", alt: "currency", route: "myaccount/exchange" },
      { name: "Rake Back", icon: "rakeback.svg", alt: "rakeback", route: "myaccount/rakeback" },
      // { name: 'Poker History', icon: 'poker.svg', alt: 'Poker', route: 'myaccount/pokerhistory' },
      // { name: 'Casino History', icon: 'casino_history.svg', alt: 'Casino', route: 'myaccount/casinohistory' },
      // { name: 'Transactions', icon: 'transaction.svg', alt: 'transactions', route: 'myaccount/transaction' },
      // { name: 'PtoP Transfer', icon: 'ptop.svg', alt: 'PtoP', route: 'myaccount/ptoptransfer' },
      { name: "History", icon: "history.svg", alt: "history", isHistoryToggle: true }
    ];
    this.historyMenu = [
      { name: "Poker History", icon: "poker.svg", alt: "Poker", route: "myaccount/pokerhistory" },
      { name: "Casino History", icon: "casino_history.svg", alt: "Casino", route: "myaccount/casinohistory" },
      { name: "Transactions", icon: "transaction.svg", alt: "transactions", route: "myaccount/transaction" },
      { name: "PtoP Transfer", icon: "ptop.svg", alt: "PtoP", route: "myaccount/ptoptransfer" }
    ];
    this.showHistoryMenu = false;
    this.menuItems = [];
    this.menuNames = false;
    this.menuMobile = false;
    this.playerLoggedIn = false;
    this.loginstate = "";
    this.INRBalance = 0;
    this.USDBalance = 0;
    this.responseloader = false;
    this.showAvatarList = false;
    this.loginloader = false;
    this.loginloader1 = false;
    this.avtarNotset = "assets/profile_imgs/default_profile.svg";
    this.showNewpopup = false;
    this.fieldTextType = false;
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.currentRoute = this.router.url.replace("/", "");
      this.menuItems = this.router.url.startsWith("/myaccount") ? this.dashboardMenu : this.mainMenu;
    });
  }
  ngOnInit() {
    this.store.select("loginState").pipe(map((state) => state.playerLoggedIn?.loggedIn), distinctUntilChanged()).subscribe((loggedIn) => {
      if (loggedIn) {
        this.commonUtilSer.clearPermission();
        this.playerLoggedIn = true;
        this.ProfileCall();
        this.BalanceCall();
        setInterval(() => {
          this.BalanceCall();
        }, 5e3);
        this.responseloader = true;
        this.getPlayerAvatar();
      } else {
        this.playerLoggedIn = false;
        this.commonUtilSer.getPlayerProviderList(false).subscribe();
        this.commonUtilSer.getPermission$().subscribe((res) => {
        });
      }
    });
    this.storeSub = this.store.select("cashierState").subscribe((cashierState) => {
      if (cashierState.balance) {
        if (cashierState.balance.success == true) {
          this.responseloader = false;
          this.walleteInfo = cashierState.balance.values;
          this.USDBalance = cashierState.balance.values.find((ele) => ele.wallet.name === "USD")?.cash.value ?? 0;
          this.INRBalance = Number(cashierState.balance.values.find((ele) => ele.wallet.name === "INR")?.cash.value).toFixed(2) ?? 0;
          let vipPointsblc = this.commonUtilSer.loadCashbalanceBasedOnCurrency(this.walleteInfo, "COMPPOINTS", "cash");
          this.vipPoints = vipPointsblc.toString().split(".")[0];
        } else if (cashierState.balance.success == false) {
        }
      }
    });
    const url = new URL(window.location.href);
    this.urlTokenForgot = url.searchParams.get("token");
    this.urlEventTypeForgot = url.searchParams.get("eventType");
    this.urlTokenForgot = sessionStorage.getItem("TokenForgo");
    this.urlEventTypeForgot = sessionStorage.getItem("EventTypeForgot");
    if (url.pathname == "/referrer") {
      setTimeout(() => {
        this.router.navigate(["/home"]);
        this.showPopUp("REGISTER");
      }, 1e3);
    } else {
      localStorage.removeItem("Referrer");
    }
    if (this.router.url == "/register") {
      setTimeout(() => {
        if (this.playerLoggedIn == false) {
          this.showPopUp("REGISTER");
        } else {
        }
      }, 500);
    }
    if (window.location.pathname == "/activate") {
      if (this.urlEventTypeForgot == "twoFactor") {
        let payload = {
          "twoFactorToken": this.urlTokenForgot
        };
        this.PlayerService.twofactorOptin(payload).subscribe((data) => {
          this.router.navigate(["/home"]);
          if (data["success"]) {
            this.errorMessage = "E-mail verified successfully. Happy Playing !!!";
            this.messageService.success("Success", "E-mail verified successfully. Happy Playing !!!");
          } else if (data["success"] == false) {
            this.messageService.error("Failed", data.description);
          }
        });
      }
      if (this.urlEventTypeForgot == "registration") {
        let payload = {
          "token": this.urlTokenForgot,
          "face": "rajpoker",
          "language": "en"
        };
        this.PlayerService.verifyAccount(payload).subscribe((data) => {
          this.router.navigate(["/home"]);
          if (data.description == "INVALID_INPUT_DATA" || data["success"] == true) {
            this.messageService.success("Success", "E-mail verified successfully. Happy Playing !!!");
          } else if (data["success"] == false) {
            this.messageService.error("Failed", data.description);
          }
        });
      }
      if (this.urlEventTypeForgot === "forgotPassword") {
        this.showNewpopup = true;
      }
    }
    if (environment.skinId === "rajpoker") {
      const wsessiontab = sessionStorage.getItem("raj_wSession");
      if (!this.playerLoggedIn && wsessiontab) {
        const bodyPayload = {
          success: true,
          sessionId: wsessiontab
        };
        this.store.dispatch(new LoginSuccess(bodyPayload));
      }
    }
    this.newForm1 = this.fb.group({
      "passwordOne": new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern(/^\S*$/)])
    });
  }
  filterMenu(permissionMap) {
    this.menuItems = this.menuItems.filter((item) => {
      if (!item.providers || item.providers.length == 0) {
        return true;
      }
      return item.providers.some((pro) => {
        return permissionMap[pro];
      });
    });
  }
  BalanceCall() {
    this.store.dispatch(new CashierGetBalanceStart());
  }
  get passwordOne() {
    return this.newForm1?.get("passwordOne");
  }
  forgotPassword() {
    let body = {
      "token": this.urlTokenForgot,
      "password": this.newForm1.value.passwordOne,
      "eventType": this.urlEventTypeForgot
    };
    this.loginloader = true;
    if (sessionStorage.getItem("redirect") == "/activate") {
      sessionStorage.setItem("redirect", "/home");
    }
    this.PlayerService.resetpasswordNew(body).subscribe((data) => {
      if (data) {
        this.router.navigate(["/"]);
        if (data.success) {
          if (data.sessionId) {
            this.loginloader = false;
            this.showNewpopup = false;
            let bodyPayload = {
              showTwoFactorPopup: data.showTwoFactorPopup,
              success: data.success,
              sessionId: data.sessionId,
              twoFAFeature: data.twoFAFeature,
              twoFactor: data.twoFactor
            };
            this.store.dispatch(new ResetState());
            this.store.dispatch(new LoginSuccess(bodyPayload));
            this.messageService.success("Success", data.description + ". Happy Playing !!!");
          }
        } else {
          this.loginloader = false;
          this.showNewpopup = false;
          this.messageService.success("Success", data.description);
        }
      }
    });
  }
  ProfileCall() {
    this.PlayerService.onPlayerGetProfile().subscribe((resData) => {
      if (resData.success) {
        this.ProfileName = resData.nickname;
        let body = {
          "role": 0,
          "loginName": resData?.login || ""
        };
        this.commonUtilSer.getPermission$().subscribe((res) => {
        });
        this.messageService.nickname$.subscribe((name) => {
          if (name) {
            this.ProfileName = name;
          }
        });
        getUsername(this.ProfileName);
      }
    });
  }
  isActiveRoute(route) {
    return route ? this.currentRoute === route : false;
  }
  checklogin(name) {
    if (this.playerLoggedIn) {
    } else {
      if (name == "My Account") {
        this.showPopUp("LOGIN");
      }
    }
  }
  closeNewpopup() {
    this.showNewpopup = false;
  }
  MenuClose() {
    if (!this.menuMobile) {
      this.menuNames = !this.menuNames;
    }
  }
  mobileMenu() {
    this.menuMobile = !this.menuMobile;
  }
  MenuCloseCover() {
    this.menuMobile = false;
  }
  clickOnlogOut() {
    this.router.navigate(["/"]);
    this.store.dispatch(new ResetState());
    this.store.dispatch(new LogoutStart());
    setTimeout(() => {
      sessionStorage.clear();
      window.location.reload();
    }, 800);
  }
  showPopUp(value) {
    if (value === "LOGIN") {
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
    } else if (value === "REGISTER") {
      this.store.dispatch(new ResetState());
      const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(RegisterComponent);
      const hostViewContainerRef = this.alertHost;
      hostViewContainerRef.clear();
      const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
      componentRef.instance.formState = value;
      this.closeSub = componentRef.instance.close.subscribe(() => {
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
      });
    }
  }
  isMobile() {
    return window.innerWidth <= 768;
  }
  navigateMain(route) {
    if (route === "myaccount") {
      if (this.playerLoggedIn) {
        this.router.navigate([route]);
        if (this.isMobile()) {
          this.menuMobile = true;
        } else {
          this.menuMobile = false;
        }
      } else {
        this.showPopUp("LOGIN");
      }
    } else {
      this.router.navigate([route]);
      this.menuMobile = false;
    }
    this.moveToTop();
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
  getSanitizedImageUrl(imageData) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64," + imageData);
  }
  getPlayerAvatar() {
    this.loginloader1 = true;
    this.PlayerService.getPlayerAvatar().subscribe((response) => {
      if (response.success && response.imageData) {
        this.playerAvatar = `data:image/png;base64,${response.imageData}`;
      } else {
        this.playerAvatar = null;
      }
      this.loginloader1 = false;
    }, (error) => {
      this.playerAvatar = null;
      this.loginloader1 = false;
    });
  }
  setSelectedAvatar() {
    this.loginloader = true;
    let payload = {
      "avatar_id": this.selectedAvatarId
    };
    this.PlayerService.setAvatarListApi(payload).subscribe((data) => {
      if (data["status"] === "avatar set successfully") {
        this.getPlayerAvatar();
        this.loginloader = false;
        this.showAvatarList = false;
      } else {
        this.loginloader = false;
      }
    });
  }
  openAvatarList() {
    this.showAvatarList = !this.showAvatarList;
    if (this.showAvatarList) {
      this.getAvatarList();
    }
  }
  closeAvatarList() {
    this.showAvatarList = false;
  }
  getAvatarList() {
    this.PlayerService.getAvatarListApi().subscribe((data) => {
      this.avatarList(data);
    });
  }
  avatarList(avatars) {
    this.avatars = avatars;
  }
  setAvatar(avatarId) {
    this.selectedAvatarId = avatarId;
  }
  getPlayersAvatars() {
    if (this.selectedAvatarId) {
      const lastThreeChars = this.selectedAvatarId.slice(-3);
      const totalAvatars = this.avatars;
      for (let avatar of totalAvatars) {
        if (avatar?.id.endsWith(lastThreeChars)) {
          return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64," + avatar?.imageData);
        }
      }
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.playerAvatar);
  }
  ngAfterViewChecked() {
  }
  togglePasswordVisibility() {
    this.fieldTextType = !this.fieldTextType;
  }
  removeSpaces(event) {
    const input = event.target;
    input.value = input.value.replace(/\s/g, "");
  }
  trackByRoute(index, item) {
    return item.route;
  }
  toggleHistory() {
    this.showHistoryMenu = !this.showHistoryMenu;
  }
  static {
    this.\u0275fac = function MainComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MainComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(CommonUtilService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(PlayerService), \u0275\u0275directiveInject(CashierService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(GameCmsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainComponent, selectors: [["app-main-component"]], viewQuery: function MainComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alertHost = _t.first);
      }
    }, decls: 56, vars: 40, consts: [["alertHost", ""], ["id", "nav-bar-main"], [1, "main-container", 3, "ngClass"], [1, "header_banner"], ["role", "button", 1, "tool-tip-grid", 3, "click"], ["class", "curser_pointer", "routerLink", "/home", "loading", "eager", "src", "assets/logos/logo.png", "alt", "Logo", 4, "ngIf"], ["routerLinkActive", "active-menu", 3, "routerLink", "routerLinkActiveOptions", "clickable", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["class", "mobile_section_pb logutSection", 3, "click", 4, "ngIf"], ["class", "mainCover", 3, "click", 4, "ngIf"], [1, "main_content_container", 3, "ngClass"], [1, "header-container", 3, "ngClass"], [1, "header-sub-container"], ["class", "header_right_section desktopverion", 4, "ngIf"], ["class", "mobile_section_pb header_right_section  ", 4, "ngIf"], ["class", "mobile_section_pb header_right_section ", 4, "ngIf"], [1, "fd", "p_"], [1, "main_center_width", 3, "ngClass"], ["class", "modal-backdrop", "role", "button", 3, "click", 4, "ngIf"], ["class", "modal-container", "role", "dialog", "aria-modal", "true", "aria-labelledby", "avatarTitle", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal"], [1, "modal__content-container"], [1, "sign-in-destktop-form_cover"], [1, "sign-in-desktop__cross"], [1, "fa-solid", "fa-circle-xmark", 3, "click"], [1, "form-slider-container"], [1, "sign-in-desktop__form", "login-form", 3, "ngSubmit", "formGroup"], ["src", "assets/login_banners/Login_Title.webp ", 1, "sign-in-desktop__title"], [1, "sign-in-Login-title"], [1, "sign-in-desktop__fields"], [1, "sign-in-desktop__input"], [1, "input-desktop"], ["type", "button", 1, "SVGInline", "input-desktop__password", 3, "click"], ["width", "20", "height", "20", "class", "SVGInline-svg", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["for", "password", 1, "login_labels"], ["id", "one-timepassword", "name", "password", "formControlName", "passwordOne", 1, "input-desktop__native", "input-desktop__native_color_default", "input-desktop__native_type_password", 3, "input", "type"], [1, "fa-solid", "fa-lock", "login_icons"], ["id", "passwordError", "class", "sign-in-desktop__validation-error", 4, "ngIf"], ["type", "submit", 1, "sign-in-desktop__button", "primary_button", "button-desktop", "button-desktop_color_default", 3, "disabled"], [1, "sign-in-desktop__button-text"], ["routerLink", "/home", "loading", "eager", "src", "assets/logos/logo.png", "alt", "Logo", 1, "curser_pointer"], ["routerLinkActive", "active-menu", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "name_container"], ["width", "20", "height", "20", 3, "src", "alt"], ["class", "fas", 3, "ngClass", 4, "ngIf"], [1, "fas", 3, "ngClass"], ["routerLinkActive", "active-menu", "class", "submenu-item", 3, "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active-menu", 1, "submenu-item", 3, "click"], ["width", "18", "height", "18", 3, "src", "alt"], [1, "mobile_section_pb", "logutSection", 3, "click"], [1, "fa-solid", "fa-power-off", 2, "color", "#f00", "margin-right", "15px"], [1, "mainCover", 3, "click"], [1, "header_right_section", "desktopverion"], ["routerLink", "myaccount/profile", 1, "user_profile"], ["class", "loader dual-ring", "aria-hidden", "true", 4, "ngIf"], ["class", "fas fa-user-plus", "style", "\n     font-size: 29px;\n     padding: 3px;\n     background: #242323;\n     border-radius: 50px;\n     border: 1px solid #464444;\n     cursor: pointer;", 3, "click", 4, "ngIf"], ["ngOptimizedImage", "", "alt", "User profile avatar", "loading", "lazy", 3, "src", "click", 4, "ngIf"], [1, "flexclass"], ["routerLink", "myaccount/profile", "role", "link", "tabindex", "0", 1, "balance_container"], [1, "user_details"], [1, "desktop"], ["routerLink", "myaccount/balance", "role", "link", "tabindex", "0", 1, "balance_container"], ["class", "amount_sep", 4, "ngIf"], ["routerLink", "myaccount/rakeback", "role", "link", "tabindex", "0", 1, "balance_container"], ["class", "amount_sep_rake", 4, "ngIf"], ["routerLink", "myaccount/payments", "type", "button", 1, "button", "primary_button"], ["type", "button", 1, "button", "logout_btn", 3, "click"], ["aria-hidden", "true", 1, "loader", "dual-ring"], [1, "fas", "fa-user-plus", 2, "font-size", "29px", "padding", "3px", "background", "#242323", "border-radius", "50px", "border", "1px solid #464444", "cursor", "pointer", 3, "click"], ["ngOptimizedImage", "", "alt", "User profile avatar", "loading", "lazy", 3, "click", "src"], [1, "amount_sep"], [1, "primary_balance"], [1, "amount_sep_rake"], [1, "primary_balance", 2, "text-align", "center"], [1, "mobile_section_pb", "header_right_section"], [1, "header_left_section"], [1, "mini_Logo", "menu", 3, "click"], [1, "fa-solid", "fa-bars", 2, "font-size", "25px"], ["src", "assets/logos/miniLogo.webp", "routerLink", "/", "alt", "RajPoker mini logo", "width", "65", "loading", "lazy", 1, "mini_Logo"], [1, "user_details_container"], ["src", "assets/logos/miniLogo.webp", "routerLink", "/", 1, "mini_Logo"], ["class", "loader dual-ring", 4, "ngIf"], ["alt", "Profile", "loading", "lazy", 3, "src", "click", 4, "ngIf"], [1, "m_b_view", "flebuly_header"], ["routerLink", "myaccount/profile", 1, "user_details", 2, "margin-right", "3px"], [1, "borderspeace"], ["routerLink", "myaccount/balance", 1, "balance_grid", 2, "margin-right", "3px"], [1, "balance_grid"], ["routerLink", "myaccount/rakeback", 1, "balance_grid", 2, "margin-right", "3px"], [1, "loader", "dual-ring"], ["alt", "Profile", "loading", "lazy", 3, "click", "src"], [1, "secondary_balance"], [1, "loginBtn_main_div"], [1, "Reg_logBtn", "mobile_width", 3, "click"], [1, "button", "primary_button", "mobile_width", 3, "click"], ["role", "button", 1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "avatarTitle", 1, "modal-container", 3, "click"], [1, "modal-header"], ["id", "avatarTitle", 1, "live_casino_title"], ["type", "button", "aria-label", "Close avatar selection", 1, "sign-in-desktop__cross", 3, "click"], [1, "fa-solid", "fa-circle-xmark"], ["class", "modal-body", 4, "ngIf"], ["width", "150", "height", "150", "viewBox", "0 0 150 150", "class", " modal-body", "aria-hidden", "true", 4, "ngIf"], ["class", "avatar-preview", 4, "ngIf"], [1, "modal-body"], [1, "avatar-list"], ["class", "avatar-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "avatar-item"], ["width", "64", "height", "64", "loading", "lazy", "decoding", "async", "alt", "Select avatar", 3, "click", "src"], ["width", "150", "height", "150", "viewBox", "0 0 150 150", "aria-hidden", "true", 1, "modal-body"], ["cx", "80", "cy", "80", "r", "45", "stroke", "#e65000", "stroke-width", "8", "fill", "none", "stroke-dasharray", "10", "stroke-dashoffset", "0", 1, "animation"], [1, "avatar-preview"], ["class", "preview-img", "loading", "lazy", 3, "src", 4, "ngIf"], ["class", "fas fa-user-plus", "style", "\n     font-size: 35px;margin-left: 5px;\n     padding: 3px;\n     background: #242323;\n     border-radius: 50px;\n     border: 1px solid #464444;\n     cursor: pointer;", 4, "ngIf"], [1, "btn-set", 3, "click"], ["class", "small-loader", 4, "ngIf"], ["loading", "lazy", 1, "preview-img", 3, "src"], [1, "fas", "fa-user-plus", 2, "font-size", "35px", "margin-left", "5px", "padding", "3px", "background", "#242323", "border-radius", "50px", "border", "1px solid #464444", "cursor", "pointer"], [1, "small-loader"], [1, "modal-overlay", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "SVGInline-svg"], ["d", "M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6.87301 17.129C5.02801 15.819 3.56801 14.115 2.74301 13.039C2.51231 12.742 2.38708 12.3766 2.38708 12.0005C2.38708 11.6244 2.51231 11.259 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C13.876 5 15.63 5.807 17.13 6.874", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10 18.704C10.6492 18.8972 11.3227 18.9969 12 19C16.182 19 19.764 14.987 21.257 13.038C21.4876 12.7407 21.6127 12.3751 21.6125 11.9988C21.6124 11.6226 21.4869 11.2571 21.256 10.96C20.7313 10.2755 20.1684 9.62112 19.57 9M14.13 9.887C13.8523 9.60467 13.5214 9.38011 13.1565 9.22629C12.7916 9.07246 12.3998 8.99241 12.0038 8.99075C11.6078 8.98909 11.2154 9.06586 10.8491 9.21662C10.4829 9.36738 10.1502 9.58916 9.87016 9.86915C9.5901 10.1492 9.36824 10.4818 9.21739 10.848C9.06654 11.2142 8.98969 11.6066 8.99125 12.0026C8.99282 12.3986 9.07278 12.7904 9.22652 13.1554C9.38026 13.5203 9.60473 13.8512 9.887 14.129L14.13 9.887ZM4 20L20 4L4 20Z", "stroke", "#FFFFFF", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "passwordError", 1, "sign-in-desktop__validation-error"]], template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275template(0, MainComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "main", 1)(3, "nav", 2)(4, "div", 3)(5, "div", 4);
        \u0275\u0275listener("click", function MainComponent_Template_div_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.MenuClose());
        });
        \u0275\u0275element(6, "span")(7, "span")(8, "span")(9, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, MainComponent_img_10_Template, 1, 0, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "aside")(12, "ul");
        \u0275\u0275template(13, MainComponent_li_13_Template, 5, 9, "li", 6)(14, MainComponent_ng_container_14_Template, 2, 1, "ng-container", 7)(15, MainComponent_li_15_Template, 3, 0, "li", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, MainComponent_div_16_Template, 1, 0, "div", 9);
        \u0275\u0275elementStart(17, "main", 10)(18, "header", 11)(19, "div", 12);
        \u0275\u0275template(20, MainComponent_div_20_Template, 26, 8, "div", 13)(21, MainComponent_div_21_Template, 5, 0, "div", 14)(22, MainComponent_div_22_Template, 31, 10, "div", 15)(23, MainComponent_div_23_Template, 6, 0, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 16)(25, "div", 17);
        \u0275\u0275element(26, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(27, "app-footer-component");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, MainComponent_div_28_Template, 1, 0, "div", 18)(29, MainComponent_div_29_Template, 9, 3, "div", 19)(30, MainComponent_div_30_Template, 1, 0, "div", 20);
        \u0275\u0275elementStart(31, "div", 21)(32, "div", 22)(33, "div", 23)(34, "span", 24)(35, "i", 25);
        \u0275\u0275listener("click", function MainComponent_Template_i_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeNewpopup());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 26)(37, "form", 27);
        \u0275\u0275listener("ngSubmit", function MainComponent_Template_form_ngSubmit_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.forgotPassword());
        });
        \u0275\u0275element(38, "img", 28);
        \u0275\u0275elementStart(39, "div", 29);
        \u0275\u0275text(40, "Forgot / Reset Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 30)(42, "div", 31)(43, "div", 32)(44, "button", 33);
        \u0275\u0275listener("click", function MainComponent_Template_button_click_44_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.togglePasswordVisibility());
        });
        \u0275\u0275template(45, MainComponent__svg_svg_45_Template, 3, 0, "svg", 34)(46, MainComponent__svg_svg_46_Template, 3, 0, "svg", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "label", 35);
        \u0275\u0275text(48, "Password :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "input", 36);
        \u0275\u0275listener("input", function MainComponent_Template_input_input_49_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.removeSpaces($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "i", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275template(51, MainComponent_div_51_Template, 5, 4, "div", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "button", 39);
        \u0275\u0275element(53, "i");
        \u0275\u0275elementStart(54, "span", 40);
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(29, _c1, ctx.menuNames, ctx.menuMobile));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", !ctx.menuNames);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.menuItems)("ngForTrackBy", ctx.trackByRoute);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showHistoryMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.playerLoggedIn);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.menuMobile);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c2, ctx.menuNames));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(34, _c3, ctx.playerLoggedIn, !ctx.playerLoggedIn));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.playerLoggedIn);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.playerLoggedIn);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.playerLoggedIn);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.playerLoggedIn);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(37, _c4, ctx.playerLoggedIn, !ctx.playerLoggedIn));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.showAvatarList);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAvatarList);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNewpopup);
        \u0275\u0275advance();
        \u0275\u0275classProp("visible", ctx.showNewpopup);
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.newForm1);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.fieldTextType);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fieldTextType);
        \u0275\u0275advance(3);
        \u0275\u0275property("type", ctx.fieldTextType ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.passwordOne == null ? null : ctx.passwordOne.invalid) && ((ctx.passwordOne == null ? null : ctx.passwordOne.dirty) || (ctx.passwordOne == null ? null : ctx.passwordOne.touched)));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.newForm1.invalid);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.isLoading ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Loading..." : "SUBMIT", " ");
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FooterComponent, FormsModule, RouterModule], styles: ['\n\n#nav-bar-main[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--primary-bg);\n}\n.main-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 10009;\n  height: 100vh;\n  width: var(--sidebar-width);\n  display: flex;\n  flex-direction: column;\n  transition: all 0.2s;\n  overflow: hidden;\n}\n.sidenav[_ngcontent-%COMP%] {\n  width: var(--Sidebar-miniwidth) !important;\n}\n.header_banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: var(--header-height);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: var(--space-sm);\n  background: var(--secondary-bg);\n  padding: var(--space-sm);\n  position: relative;\n}\n.header_banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 190px;\n  height: 52px;\n  object-fit: contain;\n  filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 6px rgba(225, 29, 72, 0.3));\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.header_banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.04);\n}\n.tool-tip-grid[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  background: #ffffff40;\n  border-radius: var(--border-radius);\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding: var(--space-sm);\n  align-items: center;\n  justify-content: center;\n  gap: 0.2rem;\n  margin-left: var(--space-xs);\n}\n.tool-tip-grid[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 8.6px;\n  height: 8.6px;\n  background: #FFFFFF;\n  display: block;\n}\n.tool-tip-grid[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(1), \n.tool-tip-grid[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(4) {\n  border-radius: 50%;\n}\n.tool-tip-grid[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2), \n.tool-tip-grid[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(3) {\n  border-radius: 25%;\n  opacity: 0.5;\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  background: var(--secondary-bg);\n  width: 100%;\n  height: calc(100vh - var(--header-height));\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: 4.5rem;\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-sm);\n  margin: var(--space-sm) var(--space-lg);\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: var(--space-xs) var(--space-sm);\n  background: var(--accent-bg);\n  border-radius: var(--border-radius);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 55px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-wrap: nowrap;\n}\n.sidenav[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: var(--Sidebar-miniIconwidth) !important;\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: var(--gradient-primary) !important;\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .name_container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  font-weight: 500;\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .name_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  object-fit: contain;\n  flex-shrink: 0;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));\n  transition: transform 0.25s ease;\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .name_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.14);\n}\n.arrow_container[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #3131316e;\n  border-radius: var(--border-radius);\n  transition: all 0.3s ease;\n}\n.arrow_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #E8E8E8;\n  opacity: 0.6;\n  rotate: 90deg;\n  transition: rotate 0.3s ease;\n}\n.arrow_container.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  box-shadow: var(--primary-box-shadow);\n}\n.arrow_container.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  rotate: 0deg;\n  opacity: 1;\n}\n.main_content_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - var(--sidebar-width));\n  margin-left: var(--sidebar-width);\n  min-height: 100vh;\n  transition: all 0.5s;\n}\n.sidenav_content[_ngcontent-%COMP%] {\n  width: calc(100% - var(--Sidebar-miniwidth)) !important;\n  margin-left: var(--Sidebar-miniwidth) !important;\n}\n.header-container[_ngcontent-%COMP%] {\n  background: var(--secondary-bg);\n  width: calc(100% - var(--sidebar-width));\n  height: var(--header-height);\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 999;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  transition: all 0.5s;\n}\n.sidenav_content[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  width: calc(100% - var(--Sidebar-miniwidth)) !important;\n}\n.main_content_container[_ngcontent-%COMP%]    > .fd.p_[_ngcontent-%COMP%] {\n  margin-top: var(--header-height);\n}\n.header-sub-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--space-md);\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-md);\n}\n.header-theme-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 4px;\n}\n.header_left_section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-md);\n}\n.notification_box[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  background: var(--accent-bg);\n  border-radius: var(--border-radius);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n.notification_box[_ngcontent-%COMP%]:hover {\n  background: #2A2A2A;\n}\n.notication_count[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  border: 2px solid #000;\n  background: #FF9D00;\n  color: #fff;\n  font-family: "Roboto", sans-serif;\n  font-weight: 900;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: -5px;\n  right: -5px;\n}\n.notification_icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.header_search_box[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 235px;\n  background: var(--accent-bg);\n  border-radius: var(--border-radius);\n  display: flex;\n  align-items: center;\n  gap: var(--space-xs);\n  padding: var(--space-xs) var(--space-sm);\n  transition: background 0.3s ease;\n}\n.header_search_box[_ngcontent-%COMP%]:focus-within {\n  background: #2A2A2A;\n}\n.header_search_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\nspan.devider[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 2px;\n  background: #E8E8E8;\n  opacity: .1;\n}\n.header_search_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 100%;\n  height: 100%;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.header_search_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.header_search_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.header_right_section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  flex-wrap: wrap;\n  justify-content: end;\n}\n.user_details_container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  margin-right: var(--space-xs);\n}\n.user_profile[_ngcontent-%COMP%] {\n  background: #161616;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n  padding: 5px;\n}\n.user_profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  height: 50px;\n}\n.user_details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user_details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  margin: 0;\n}\n.user_details[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 12px;\n  cursor: pointer;\n}\n.user_details[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.desktop[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background: var(--gradient-primary);\n  font-size: 13px;\n  padding: 1px 3px;\n  font-weight: 600;\n  border-radius: 5px;\n}\n.balance_container[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: flex-start;\n  margin: 0px 2px;\n  cursor: pointer;\n}\n.amount_sep_rake[_ngcontent-%COMP%] {\n  display: grid;\n}\n.amount_sep[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  display: grid;\n  line-height: 1.2;\n  text-align: center;\n}\n.flexclass[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: flex-start;\n}\n.balance_container[_ngcontent-%COMP%]   .primary_balance[_ngcontent-%COMP%] {\n  background: var(--gradient-text);\n  background-clip: text;\n  color: transparent;\n  font-size: 16px;\n}\n.balance_container[_ngcontent-%COMP%]   .secondary_balance[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to right,\n      #ff9500,\n      #FF9D00);\n  background-clip: text;\n  color: transparent;\n  font-size: 16px;\n}\n.fd[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.p_[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 120px);\n  padding: var(--space-sm) var(--space-lg);\n}\n.mini_Logo[_ngcontent-%COMP%] {\n  display: none;\n}\n.mainCover[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #181b1ee0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n}\n.loginBtn_main_div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.desktopverion[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: flex-start;\n}\n.mobile_section_pb[_ngcontent-%COMP%] {\n  display: none !important;\n}\nli.clickable.active-menu[_ngcontent-%COMP%] {\n  background: var(--gradient-primary) !important;\n}\n@media (max-width: 1200px) {\n  .balance_container[_ngcontent-%COMP%] {\n    padding: 0 var(--space-xs);\n  }\n  .header_right_section[_ngcontent-%COMP%] {\n    display: none;\n    gap: 0;\n  }\n  .m_b_view[_ngcontent-%COMP%] {\n    display: grid;\n    align-items: center;\n    border: 1px solid #e4561b;\n    border-radius: 5px;\n    padding: 3px;\n    width: 100%;\n    max-width: 250px;\n  }\n}\n@media (max-width: 768px) {\n  .user_details_container[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n  .mobile_section_pb[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .header-sub-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--space-md);\n    height: auto;\n  }\n  .desktopverion[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .balance_grid[_ngcontent-%COMP%] {\n  }\n  .m_b_view[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    border: none;\n    border-radius: 5px;\n    padding: 4px;\n    max-width: 500px;\n    text-align: center;\n    align-items: flex-start;\n    margin: auto;\n  }\n  .m_b_view[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    min-width: 110px;\n    font-size: 12px !important;\n  }\n  .borderspeace[_ngcontent-%COMP%] {\n    font-size: 11px;\n    font-weight: 600;\n  }\n  .balance_grid[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n  }\n  .amount_sep[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .secondary_balance[_ngcontent-%COMP%] {\n    font-weight: 500;\n  }\n  .primary_balance[_ngcontent-%COMP%] {\n    font-weight: 500;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n  }\n  .main-container.sideMobile[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .main-container.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .main_content_container[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-left: 0 !important;\n  }\n  .header_left_section[_ngcontent-%COMP%], \n   .header_right_section[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n    gap: 0;\n  }\n  li.mobile_section_pb.logutSection[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-start !important;\n    align-items: center;\n  }\n  .header-container[_ngcontent-%COMP%] {\n    width: 100%;\n    transition: height 0.25s ease;\n  }\n  .header-container.logged-in[_ngcontent-%COMP%] {\n    height: 113px;\n  }\n  .header-container.logged-out[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n  .mini_Logo.menu[_ngcontent-%COMP%] {\n    width: 25px;\n    font-size: 5px;\n  }\n  .mini_Logo[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    max-width: 65px;\n  }\n  img.mini_Logo[_ngcontent-%COMP%] {\n    margin-left: 8px;\n  }\n  .header_search_box[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .p_[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n  }\n  .sidenav_content[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .amount_sep[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: 500;\n  }\n  .user_profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 40px;\n  }\n  .logout_icon[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n  .user_details_container[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: end;\n  }\n  .main_center_width[_ngcontent-%COMP%] {\n    transition: margin-top 0.25s ease;\n  }\n  .user_profile[_ngcontent-%COMP%] {\n    background: #252525;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50px;\n    overflow: hidden;\n    cursor: pointer;\n    width: 100px;\n  }\n}\n@media (max-width: 450px) {\n  .mobile_width[_ngcontent-%COMP%] {\n    width: 100px;\n    min-width: 100px;\n  }\n}\n.mobile_section_pb[_ngcontent-%COMP%]   .button.primary_button[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 98px;\n  border-radius: 4PX;\n  padding: 5px;\n  border: none;\n  max-width: fit-content;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-xs);\n}\nspan.borderspeace[_ngcontent-%COMP%] {\n  text-align: center;\n  flex-grow: 1;\n  font-weight: 500;\n  background: var(--gradient-primary);\n  padding: 2px 4px;\n}\nspan.secondary_balance[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.logout_icon[_ngcontent-%COMP%] {\n  color: #e4561b;\n  font-size: 20px;\n  cursor: pointer;\n}\n.logout_icon[_ngcontent-%COMP%]:hover {\n  color: #f00;\n}\n.main_center_width[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1500px;\n  margin: auto;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 999;\n}\n.modal-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 380px;\n  background: #1e1e1e;\n  border-radius: 10px;\n  padding: 20px;\n  z-index: 1000;\n  color: #fff;\n  animation: _ngcontent-ng-c3430717442_popupOpen 0.2s ease-out;\n  height: 100%;\n  max-height: 500px;\n  overflow-y: scroll;\n}\n@keyframes _ngcontent-%COMP%_popupOpen {\n  from {\n    transform: translate(-50%, -45%);\n    opacity: 0;\n  }\n  to {\n    transform: translate(-50%, -50%);\n    opacity: 1;\n  }\n}\n.modal-body[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 300px;\n  margin: auto;\n  display: flex;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.close-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 22px;\n  font-weight: bold;\n}\n.avatar-loader[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      90deg,\n      #2a2a2a 25%,\n      #3a3a3a 37%,\n      #2a2a2a 63%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_avatarShimmer 1.4s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_avatarShimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n.animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dash 4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_dash {\n  0% {\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dashoffset: 100;\n  }\n}\n.avatar-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  margin-top: 15px;\n  max-height: 380px;\n  height: 100%;\n  overflow-y: scroll;\n}\n.avatar-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: 0.3s;\n}\n.avatar-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n}\n.avatar-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, \n.avatar-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #CC0000,\n      #FF9D00);\n  border-radius: 50%;\n}\n.avatar-preview[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  display: flex;\n  justify-content: space-around;\n  align-content: center;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 13px;\n}\n.avatar-preview[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.preview-img[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n.sign-in-desktop__cross[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  cursor: pointer;\n  font-size: 32px;\n  position: absolute;\n  top: 0;\n  right: 5px;\n  z-index: 10;\n  border: none;\n  background: none;\n}\n.sign-in-desktop__cross[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #9583A0;\n}\n.sign-in-desktop__cross[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: var(--error-validation-clr);\n  background: var(--gradient-primary);\n}\n.btn-set[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: #fff;\n  padding: 8px 20px;\n  border-radius: 5px;\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  margin-top: 15px;\n}\n.sign-in-desktop__error[_ngcontent-%COMP%] {\n  color: var(--error-validation-clr);\n  padding: 0 2rem;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  font-size: 14px;\n  margin: 1rem 2rem;\n  margin-top: 0;\n}\n.sign-in-desktop__validation-error[_ngcontent-%COMP%] {\n  color: var(--error-validation-clr);\n  font-size: 15px;\n  font-weight: 600;\n}\n.input-desktop__password[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 45%;\n  transform: translateY(-50%);\n  z-index: 2;\n  transition: all 0.3s ease;\n}\n.input-desktop__password[_ngcontent-%COMP%]:hover {\n  transform: translateY(-50%) scale(1.1);\n}\n.input-desktop[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-desktop__native[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #000 !important;\n  border: 0;\n  outline: 0;\n  border-radius: 10px;\n  padding: 5px 35px 5px 130px;\n  height: 45px;\n  font-family: "Poppins";\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 10%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10015;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(4px);\n}\n.modal.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.sign-in-desktop__background[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  max-width: 800px;\n  height: 100%;\n  max-height: 650px;\n  object-fit: 100%;\n  border-radius: 20px;\n}\n.deskBackLoginImage[_ngcontent-%COMP%] {\n  display: block;\n}\n.mobileBackLoginImage[_ngcontent-%COMP%] {\n  display: none;\n}\n.sign-in-destktop-form_cover[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%;\n  float: right;\n  background: #0c0c0c45;\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  height: auto;\n  height: 252px;\n  border-radius: 10px;\n  padding: 20px;\n  min-width: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.sign-in-Login-title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: 500;\n  line-height: 1em;\n  margin-top: 20px;\n  text-align: center;\n}\n.sign-in-desktop__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n.sign-in-desktop__title[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-left: 10%;\n  display: none;\n}\n.sign-in-desktop__fields[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@keyframes _ngcontent-%COMP%_modalBounce {\n  0% {\n    transform: translate(-50%, -50%) scale(0.95);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.02);\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.sign-in-desktop__cross[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  cursor: pointer;\n  font-size: 32px;\n  position: absolute;\n  top: 0;\n  right: 5px;\n  z-index: 10;\n}\n.sign-in-desktop__cross[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #9583A0;\n}\n.sign-in-desktop__cross[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: var(--error-validation-clr);\n}\n.sign-in-desktop__input[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.sign-in-desktop__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(149, 131, 160, 0.2);\n  transition: all 0.3s ease;\n  outline: 1px solid #cc0000;\n}\n.login_alert-error[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.1rem;\n  text-align: center;\n  margin-top: 5px;\n}\n.sign-in-desktop__button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px;\n  border: 0px;\n  outline: 0px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: none;\n}\n.sign-in-desktop__button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.remember-me-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: var(--text-xl);\n}\n.remember-me-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  padding-left: 30px;\n  font-size: 14px;\n  color: #5a4b66;\n  transition: all 0.3s ease;\n}\n.remember-me-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #000000;\n  border: 2px solid #000000;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.remember-me-checkbox[_ngcontent-%COMP%]:hover   .checkmark[_ngcontent-%COMP%] {\n  border-color: #000000;\n  transform: scale(1.05);\n}\n.remember-me-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #000;\n  border-color: #000;\n  animation: _ngcontent-%COMP%_checkmarkPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.checkmark-svg[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 8px;\n  fill: none;\n  stroke: #e72e16;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 16;\n  stroke-dashoffset: 16;\n  transition: stroke-dashoffset 0.3s ease;\n}\n.remember-me-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]   .checkmark-svg[_ngcontent-%COMP%] {\n  stroke-dashoffset: 0;\n  transition: stroke-dashoffset 0.3s ease 0.2s;\n}\n@keyframes _ngcontent-%COMP%_checkmarkPop {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.remember-me-text[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  transition: color 0.3s ease;\n}\n.remember-me-checkbox[_ngcontent-%COMP%]:hover   .remember-me-text[_ngcontent-%COMP%] {\n  color: var(--color-purple-light);\n}\n.input-desktop__password[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transition: all 0.3s ease;\n}\n.input-desktop__password[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: translateY(-50%) scale(1.2);\n}\n.input-desktop__password_active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.input-desktop__password[_ngcontent-%COMP%] {\n  transform-origin: center;\n}\n.input-desktop__password.animate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_eyeBlink 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_eyeBlink {\n  0% {\n    transform: translateY(-50%) scale(1);\n  }\n  50% {\n    transform: translateY(-50%) scale(0.8);\n  }\n  100% {\n    transform: translateY(-50%) scale(1);\n  }\n}\n@media (max-width: 768px) {\n  @keyframes mobileModalBounce {\n    0% {\n      transform: translateY(30px) scale(0.95);\n    }\n    100% {\n      transform: translateY(0) scale(1);\n    }\n  }\n  .remember-me-checkbox[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.form-slider-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}\n.login-form[_ngcontent-%COMP%], \n.forget-form[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  position: relative;\n  transition: transform 0.6s ease;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: block;\n}\n.forget-form[_ngcontent-%COMP%] {\n  display: none;\n}\n.form-slider-container.showForget[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  display: none;\n}\n.form-slider-container.showForget[_ngcontent-%COMP%]   .forget-form[_ngcontent-%COMP%] {\n  display: block;\n}\n.login_icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  position: absolute;\n  top: 45%;\n  transform: translateY(-50%);\n  left: 5px;\n  z-index: 10;\n  color: transparent;\n  background: var(--text-primary);\n  background-clip: text;\n}\n.input-desktop__native[_ngcontent-%COMP%]:focus    ~ .login_icons[_ngcontent-%COMP%], \n.input-desktop__native[_ngcontent-%COMP%]:active    ~ .login_icons[_ngcontent-%COMP%] {\n  color: transparent;\n  background: var(--gradient-primary);\n  background-clip: text;\n}\n.login_labels[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 0.95rem;\n  top: 45%;\n  transform: translateY(-50%);\n  left: 40px;\n  z-index: 10;\n  font-family: "Poppins";\n  color: var(--text-primary);\n  background: #000000;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  }\n  50% {\n    box-shadow: 0 20px 40px rgba(149, 131, 160, 0.2);\n  }\n  100% {\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  }\n}\n@media screen and (max-width: 576px) {\n  .deskBackLoginImage[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobileBackLoginImage[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .sign-in-desktop__background[_ngcontent-%COMP%] {\n    width: 100dvw;\n    height: 100dvh;\n    max-width: 100dvw;\n    max-height: 100dvh;\n    border-radius: 0;\n  }\n  .sign-in-destktop-form_cover[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 30px 30px 0 0;\n  }\n  .input-desktop[_ngcontent-%COMP%] {\n    height: 3.2rem;\n  }\n  .sign-in-desktop__label[_ngcontent-%COMP%] {\n    margin-bottom: var(--spacing-sm);\n  }\n  .sign-in-desktop__input[_ngcontent-%COMP%] {\n    margin-bottom: var(--spacing-xxl);\n  }\n  .sign-in-desktop__form[_ngcontent-%COMP%] {\n    border-radius: 1rem;\n    width: 100%;\n    font-size: 1rem;\n    max-width: 550px;\n  }\n}\ninput.input-desktop__native[_ngcontent-%COMP%]:-webkit-autofill, \ninput.input-desktop__native[_ngcontent-%COMP%]:-webkit-autofill:hover, \ninput.input-desktop__native[_ngcontent-%COMP%]:-webkit-autofill:focus, \ninput.input-desktop__native[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 1000px #000000 inset !important;\n  box-shadow: 0 0 0 1000px #000000 inset !important;\n  -webkit-text-fill-color: #ffffff !important;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.submenu[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.submenu-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.9;\n}\n.history-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 12px;\n  color: #999;\n}\n/*# sourceMappingURL=main-component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainComponent, [{
    type: Component,
    args: [{ selector: "app-main-component", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule, FooterComponent, FormsModule, RouterModule], template: `<ng-template #alertHost></ng-template>\r
\r
<!-- <a class="skip-link" href="#main-content">Skip to main content</a>  -->\r
<main id="nav-bar-main">\r
    <nav class="main-container" [ngClass]="{'sidenav': menuNames, 'sideMobile':menuMobile}">\r
        <div class="header_banner">\r
            <div class="tool-tip-grid" role="button" (click)="MenuClose()">\r
                <span></span>\r
                <span></span>\r
                <span></span>\r
                <span></span>\r
            </div>\r
            <img class="curser_pointer" routerLink="/home" loading="eager" *ngIf="!menuNames"\r
                src="assets/logos/logo.png" alt="Logo" />\r
        </div>\r
        <aside>\r
            <ul>\r
                <!-- <li *ngFor="let item of menuItems; trackBy: trackByRoute"  \r
                [routerLink]="item.route"\r
                    routerLinkActive="active-menu"\r
                    [class.clickable]="item.route"\r
                  (click)="navigateMain(item.route)"  (keydown.enter)="navigateMain(item.route)"  (keydown.space)="navigateMain(item.route)">                              \r
                    <span class="name_container">\r
                      <img [src]="'assets/sidemenu_icons/' + item.icon" [alt]="item.alt" width="20" height="20"/>\r
                      <span *ngIf="!menuNames">{{ item.name }}</span>\r
                    </span>\r
              \r
                </li> -->\r
                <!-- <li *ngFor="let item of menuItems; trackBy: trackByRoute"\r
                [class.clickable]="item.route || item.isHistoryToggle"\r
                (click)="item.isHistoryToggle ? toggleHistory() : navigateMain(item.route)"\r
                (keydown.enter)="item.isHistoryToggle ? toggleHistory() : navigateMain(item.route)"\r
                (keydown.space)="item.isHistoryToggle ? toggleHistory() : navigateMain(item.route)">\r
            \r
              <span class="name_container">\r
                <img [src]="'assets/sidemenu_icons/' + item.icon"\r
                     [alt]="item.alt" width="20" height="20" />\r
            \r
                <span *ngIf="!menuNames">{{ item.name }}</span>\r
              </span>\r
            \r
              <i *ngIf="item.isHistoryToggle"\r
                 class="fas"\r
                 [ngClass]="showHistoryMenu ? 'fa-angle-up' : 'fa-angle-down'"\r
                 >\r
              </i>\r
                        </li> -->\r
                <li *ngFor="let item of menuItems; trackBy: trackByRoute" [routerLink]="item.route"\r
                    routerLinkActive="active-menu" [routerLinkActiveOptions]="{ exact: true }"\r
                    [class.clickable]="item.route || item.isHistoryToggle"\r
                    (click)="item.isHistoryToggle ? toggleHistory() : null;navigateMain(item.route)">\r
\r
                    <span class="name_container">\r
                        <img [src]="'assets/sidemenu_icons/' + item.icon" [alt]="item.alt" width="20" height="20" />\r
                        <span *ngIf="!menuNames">{{ item.name }}</span>\r
                    </span>\r
\r
                    <i *ngIf="item.isHistoryToggle" class="fas"\r
                        [ngClass]="showHistoryMenu ? 'fa-angle-up' : 'fa-angle-down'">\r
                    </i>\r
                </li>\r
\r
\r
                <ng-container *ngIf="showHistoryMenu">\r
                    <li *ngFor="let h of historyMenu" routerLinkActive="active-menu" (click)="navigateMain(h.route)"\r
                        class="submenu-item">\r
\r
                        <span class="name_container">\r
                            <img [src]="'assets/sidemenu_icons/' + h.icon" [alt]="h.alt" width="18" height="18" />\r
                            <span *ngIf="!menuNames">{{ h.name }}</span>\r
                        </span>\r
                    </li>\r
                </ng-container>\r
                <li *ngIf="playerLoggedIn" class="mobile_section_pb logutSection" (click)="clickOnlogOut()"> <i\r
                        class="fa-solid fa-power-off " style="color: #f00; margin-right: 15px;"></i> Logout</li>\r
            </ul>\r
        </aside>\r
    </nav>\r
    <div *ngIf="menuMobile" class="mainCover" (click)="MenuCloseCover()"></div>\r
    <main class="main_content_container" [ngClass]="{'sidenav_content': menuNames}">\r
        <header class="header-container" [ngClass]="{ 'logged-in': playerLoggedIn, 'logged-out': !playerLoggedIn }">\r
            <div class="header-sub-container">\r
\r
                <div class="header_right_section desktopverion" *ngIf="playerLoggedIn">\r
                    <div class="user_profile" routerLink="myaccount/profile">\r
                        <!-- \u{1F504} Loader -->\r
                        <div *ngIf="loginloader1" class="loader dual-ring" aria-hidden="true"></div>\r
                        <i *ngIf="!loginloader1 && !playerAvatar" class="fas fa-user-plus" style="\r
     font-size: 29px;\r
     padding: 3px;\r
     background: #242323;\r
     border-radius: 50px;\r
     border: 1px solid #464444;\r
     cursor: pointer;" (click)="openAvatarList()">\r
                        </i>\r
                        <!-- \u{1F5BC} Avatar Image -->\r
                        <img *ngIf="!loginloader1 && playerAvatar" ngOptimizedImage [src]="playerAvatar"\r
                            alt="User profile avatar" (click)="openAvatarList()" loading="lazy" />\r
                    </div>\r
                    <div class="flexclass">\r
                        <div class="balance_container" routerLink="myaccount/profile" role="link" tabindex="0">\r
                            <div class="user_details">\r
                                <span class="desktop">Nickname</span>\r
                                <p>{{ProfileName}}</p>\r
                            </div>\r
                        </div>\r
                        <div class="  balance_container" routerLink="myaccount/balance" role="link" tabindex="0">\r
                            <span class="desktop">Balance</span>\r
                            <div *ngIf="responseloader" class="loader dual-ring" aria-hidden="true"></div>\r
                            <span *ngIf="!responseloader" class="amount_sep">\r
                                <span> INR: <span class="primary_balance">&nbsp;\u20B9 {{INRBalance}}</span></span>\r
                                <!-- </span>\r
                           \r
                            <span *ngIf="!responseloader" class="devider"></span>\r
                             <span *ngIf="!responseloader" class="amount_sep"> -->\r
                                <span>USD: <span class="primary_balance">$ {{USDBalance}}</span></span>\r
                            </span>\r
                        </div>\r
                        <div class="balance_container" routerLink="myaccount/rakeback" role="link" tabindex="0">\r
                            <span class="desktop">Rake Back</span>\r
                            <div *ngIf="responseloader" class="loader dual-ring" aria-hidden="true"></div>\r
                            <span *ngIf="!responseloader" class="amount_sep_rake">\r
\r
                                <span class="primary_balance" style="text-align: center;">{{vipPoints}}</span>\r
                            </span>\r
\r
                        </div>\r
\r
                    </div>\r
\r
                    <button routerLink="myaccount/payments" type="button" class="button primary_button">Deposit</button>\r
                    <button type="button" class="button logout_btn" (click)="clickOnlogOut()">Logout</button>\r
                </div>\r
\r
                <div class="mobile_section_pb header_right_section  " *ngIf="!playerLoggedIn">\r
                    <div class="header_left_section ">\r
                        <div class="mini_Logo menu" (click)="mobileMenu()">\r
                            <i class="fa-solid fa-bars" style="font-size: 25px;"></i>\r
                        </div>\r
                        <img class="mini_Logo" src="assets/logos/miniLogo.webp" routerLink="/"\r
                            alt="RajPoker mini logo" width="65" loading="lazy" />\r
                    </div>\r
                </div>\r
                <div class="mobile_section_pb header_right_section " *ngIf="playerLoggedIn">\r
                    <div class="user_details_container">\r
                        <div class="header_left_section ">\r
                            <div class="mini_Logo menu" (click)="mobileMenu()">\r
                                <i class="fa-solid fa-bars" style="font-size: 25px;"></i>\r
                            </div>\r
                            <img class="mini_Logo" src="assets/logos/miniLogo.webp" routerLink="/" />\r
                        </div>\r
\r
                        <div class="user_profile" routerLink="myaccount/profile">\r
                            <!-- \u{1F504} Loader -->\r
                            <div *ngIf="loginloader1" class="loader dual-ring"></div>\r
\r
                            <!-- \u2795 Plus Icon (NO avatar) -->\r
                            <i *ngIf="!loginloader1 && !playerAvatar" class="fas fa-user-plus" style="\r
     font-size: 29px;\r
     padding: 3px;\r
     background: #242323;\r
     border-radius: 50px;\r
     border: 1px solid #464444;\r
     cursor: pointer;" (click)="openAvatarList()">\r
                            </i>\r
\r
                            <!-- \u{1F5BC} Avatar Image -->\r
                            <img *ngIf="!loginloader1 && playerAvatar" [src]="playerAvatar" alt="Profile"\r
                                (click)="openAvatarList()" loading="lazy" />\r
\r
\r
                        </div>\r
                        <button routerLink="myaccount/payments" type="button"\r
                            class="button primary_button">Deposit</button>\r
                        <div>\r
\r
                        </div>\r
\r
                    </div>\r
\r
                    <div class="m_b_view flebuly_header">\r
                        <div class="user_details" style="margin-right: 3px;" routerLink="myaccount/profile">\r
                            <span class="borderspeace">Nickname</span>\r
                            <div *ngIf="responseloader" class="loader dual-ring" aria-hidden="true"></div>\r
\r
                            <p *ngIf="!responseloader">{{ProfileName}}</p>\r
                        </div>\r
                        <div class="balance_grid" style="margin-right: 3px;" routerLink="myaccount/balance">\r
                            <span class="borderspeace"> Balance</span>\r
                            <div class="balance_grid">\r
                                <div *ngIf="responseloader" class="loader dual-ring" aria-hidden="true"></div>\r
                                <span *ngIf="!responseloader" class="amount_sep">\r
                                    INR: <span class="secondary_balance">&nbsp;\u20B9 {{INRBalance}}</span>\r
                                </span>\r
                                <span *ngIf="!responseloader" class="amount_sep">\r
                                    USD: <span class="primary_balance">$ {{USDBalance}}</span>\r
                                </span>\r
\r
                            </div>\r
\r
                        </div>\r
                        <div class="balance_grid" style="margin-right: 3px;" routerLink="myaccount/rakeback">\r
                            <span class="borderspeace">Rake Back</span>\r
                            <div *ngIf="responseloader" class="loader dual-ring" aria-hidden="true"></div>\r
\r
                            <span *ngIf="!responseloader">{{vipPoints}}</span>\r
\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div *ngIf="!playerLoggedIn">\r
                    <div class="loginBtn_main_div">\r
                        <button class="Reg_logBtn mobile_width" (click)="showPopUp('REGISTER')">Register</button>\r
                        <button class=" button primary_button mobile_width" (click)="showPopUp('LOGIN')">Login</button>\r
                    </div>\r
                </div>\r
            </div>\r
        </header>\r
        <div class="fd p_">\r
            <div class="main_center_width"\r
                [ngClass]="{ 'logged-in-content': playerLoggedIn, 'logged-out-content': !playerLoggedIn }">\r
                <router-outlet></router-outlet>\r
            </div>\r
        </div>\r
        <app-footer-component />\r
    </main>\r
</main>\r
<div class="modal-backdrop" role="button" *ngIf="showAvatarList" (click)="closeAvatarList()"></div>\r
\r
<div class="modal-container" *ngIf="showAvatarList" role="dialog" aria-modal="true" aria-labelledby="avatarTitle"\r
    (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
        <h3 id="avatarTitle" class="live_casino_title">Select Avatar</h3>\r
        <!-- <span class="close-btn" >\xD7</span> -->\r
        <button class="sign-in-desktop__cross" type="button" aria-label="Close avatar selection"\r
            (click)="closeAvatarList()">\r
            <i class="fa-solid fa-circle-xmark"></i>\r
        </button>\r
    </div>\r
    <div class="modal-body" *ngIf="avatars">\r
        <div class="avatar-list">\r
            <div *ngFor="let avatar of avatars" class="avatar-item" [class.active]="selectedAvatarId === avatar.id">\r
                <img [src]="getSanitizedImageUrl(avatar.imageData)" (click)="setAvatar(avatar.id)" width="64"\r
                    height="64" loading="lazy" decoding="async" alt="Select avatar" />\r
            </div>\r
        </div>\r
    </div>\r
    <!-- <div class="avatar-loader modal-body" *ngIf="avatars"></div> -->\r
    <svg *ngIf="!avatars" width="150" height="150" viewBox="0 0 150 150" class=" modal-body" aria-hidden="true">\r
        <circle cx="80" cy="80" r="45" stroke="#e65000" stroke-width="8" fill="none" stroke-dasharray="10"\r
            stroke-dashoffset="0" class="animation" />\r
    </svg>\r
\r
    <div class="avatar-preview" *ngIf="avatars">\r
        <div>\r
            <b>Preview:</b>\r
            <img *ngIf="playerAvatar" [src]="getPlayersAvatars()" class="preview-img" loading="lazy" />\r
            <i *ngIf="!loginloader1 && !playerAvatar" class="fas fa-user-plus" style="\r
     font-size: 35px;margin-left: 5px;\r
     padding: 3px;\r
     background: #242323;\r
     border-radius: 50px;\r
     border: 1px solid #464444;\r
     cursor: pointer;">\r
            </i>\r
        </div>\r
\r
        <button class="btn-set" (click)="setSelectedAvatar()">\r
            Set Avatar\r
            <span *ngIf="loginloader" class="small-loader"></span>\r
        </button>\r
    </div>\r
</div>\r
\r
<div class="modal-overlay" *ngIf="showNewpopup" (click)="closeNewpopup()">\r
</div>\r
\r
<div class="modal" [class.visible]="showNewpopup">\r
    <div class="modal__content-container">\r
        <div class="sign-in-destktop-form_cover">\r
            <span class="sign-in-desktop__cross">\r
                <i class="fa-solid fa-circle-xmark" (click)="closeNewpopup()"></i>\r
            </span>\r
            <div class="form-slider-container">\r
                <form class="sign-in-desktop__form login-form" [formGroup]="newForm1" (ngSubmit)="forgotPassword()">\r
                    <img src="assets/login_banners/Login_Title.webp " class="sign-in-desktop__title" />\r
                    <div class="sign-in-Login-title">Forgot / Reset Password</div>\r
                    <div class="sign-in-desktop__fields">\r
\r
                        <div class="sign-in-desktop__input">\r
                            <div class="input-desktop">\r
                                <button type="button" class="SVGInline input-desktop__password"\r
                                    (click)="togglePasswordVisibility()">\r
                                    <svg *ngIf="fieldTextType" width="20" height="20" class="SVGInline-svg"\r
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                        <path\r
                                            d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"\r
                                            stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"\r
                                            stroke-linejoin="round"></path>\r
                                        <path\r
                                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"\r
                                            stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"\r
                                            stroke-linejoin="round"></path>\r
                                    </svg>\r
\r
                                    <svg *ngIf="!fieldTextType" width="20" height="20" class="SVGInline-svg"\r
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                                        <path\r
                                            d="M6.87301 17.129C5.02801 15.819 3.56801 14.115 2.74301 13.039C2.51231 12.742 2.38708 12.3766 2.38708 12.0005C2.38708 11.6244 2.51231 11.259 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C13.876 5 15.63 5.807 17.13 6.874"\r
                                            stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"\r
                                            stroke-linejoin="round"></path>\r
                                        <path\r
                                            d="M10 18.704C10.6492 18.8972 11.3227 18.9969 12 19C16.182 19 19.764 14.987 21.257 13.038C21.4876 12.7407 21.6127 12.3751 21.6125 11.9988C21.6124 11.6226 21.4869 11.2571 21.256 10.96C20.7313 10.2755 20.1684 9.62112 19.57 9M14.13 9.887C13.8523 9.60467 13.5214 9.38011 13.1565 9.22629C12.7916 9.07246 12.3998 8.99241 12.0038 8.99075C11.6078 8.98909 11.2154 9.06586 10.8491 9.21662C10.4829 9.36738 10.1502 9.58916 9.87016 9.86915C9.5901 10.1492 9.36824 10.4818 9.21739 10.848C9.06654 11.2142 8.98969 11.6066 8.99125 12.0026C8.99282 12.3986 9.07278 12.7904 9.22652 13.1554C9.38026 13.5203 9.60473 13.8512 9.887 14.129L14.13 9.887ZM4 20L20 4L4 20Z"\r
                                            stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"\r
                                            stroke-linejoin="round"></path>\r
                                    </svg>\r
\r
                                </button>\r
                                <label for="password" class="login_labels">Password :</label>\r
                                <input id="one-timepassword" name="password"\r
                                    class="input-desktop__native input-desktop__native_color_default input-desktop__native_type_password"\r
                                    [type]="fieldTextType ? 'text' : 'password'" formControlName="passwordOne"\r
                                    (input)="removeSpaces($event)" />\r
                                <i class="fa-solid fa-lock login_icons"></i>\r
                            </div>\r
                            <div id="passwordError"\r
                                *ngIf="passwordOne?.invalid && (passwordOne?.dirty || passwordOne?.touched)"\r
                                class="sign-in-desktop__validation-error">\r
                                <div *ngIf="passwordOne?.errors?.['required']">\r
                                    Password is required\r
                                </div>\r
                                <div *ngIf="passwordOne?.errors?.['minlength']">\r
                                    Password must be min 6 characters max 15 characters\r
                                </div>\r
                                <div *ngIf="passwordOne?.errors?.['maxlength']">\r
                                    Password must be min 6 characters max 15 characters\r
                                </div>\r
                                <div\r
                                    *ngIf="!passwordOne?.errors?.['minlength'] && !passwordOne?.errors?.['maxlength'] && passwordOne?.errors?.['pattern']">\r
                                    Enter alphabets and numeric only\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                    </div>\r
\r
                    <button type="submit"\r
                        class="sign-in-desktop__button primary_button button-desktop button-desktop_color_default"\r
                        [disabled]=" newForm1.invalid">\r
                        <i class="{{ isLoading ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i>\r
                        <span class="sign-in-desktop__button-text">\r
                            {{ isLoading ? 'Loading...' : 'SUBMIT' }}\r
                        </span>\r
                    </button>\r
\r
\r
                </form>\r
\r
            </div>\r
\r
\r
        </div>\r
    </div>\r
</div>`, styles: ['/* src/app/components/main-component/main-component.css */\n#nav-bar-main {\n  display: flex;\n  min-height: 100vh;\n  background: var(--primary-bg);\n}\n.main-container {\n  position: fixed;\n  z-index: 10009;\n  height: 100vh;\n  width: var(--sidebar-width);\n  display: flex;\n  flex-direction: column;\n  transition: all 0.2s;\n  overflow: hidden;\n}\n.sidenav {\n  width: var(--Sidebar-miniwidth) !important;\n}\n.header_banner {\n  width: 100%;\n  height: var(--header-height);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: var(--space-sm);\n  background: var(--secondary-bg);\n  padding: var(--space-sm);\n  position: relative;\n}\n.header_banner img {\n  width: auto;\n  max-width: 190px;\n  height: 52px;\n  object-fit: contain;\n  filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 6px rgba(225, 29, 72, 0.3));\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.header_banner img:hover {\n  transform: scale(1.04);\n}\n.tool-tip-grid {\n  width: 55px;\n  height: 55px;\n  background: #ffffff40;\n  border-radius: var(--border-radius);\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding: var(--space-sm);\n  align-items: center;\n  justify-content: center;\n  gap: 0.2rem;\n  margin-left: var(--space-xs);\n}\n.tool-tip-grid > span {\n  width: 8.6px;\n  height: 8.6px;\n  background: #FFFFFF;\n  display: block;\n}\n.tool-tip-grid > span:nth-child(1),\n.tool-tip-grid > span:nth-child(4) {\n  border-radius: 50%;\n}\n.tool-tip-grid > span:nth-child(2),\n.tool-tip-grid > span:nth-child(3) {\n  border-radius: 25%;\n  opacity: 0.5;\n}\n.main-container aside {\n  background: var(--secondary-bg);\n  width: 100%;\n  height: calc(100vh - var(--header-height));\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: 4.5rem;\n}\n.main-container aside ul {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-sm);\n  margin: var(--space-sm) var(--space-lg);\n}\n.main-container aside ul li {\n  padding: var(--space-xs) var(--space-sm);\n  background: var(--accent-bg);\n  border-radius: var(--border-radius);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 55px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-wrap: nowrap;\n}\n.sidenav aside ul li {\n  width: var(--Sidebar-miniIconwidth) !important;\n}\n.main-container aside ul li:hover {\n  background: var(--gradient-primary) !important;\n}\n.main-container aside ul li .name_container {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  font-weight: 500;\n}\n.main-container aside ul li .name_container img {\n  width: 22px;\n  height: 22px;\n  object-fit: contain;\n  flex-shrink: 0;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));\n  transition: transform 0.25s ease;\n}\n.main-container aside ul li:hover .name_container img {\n  transform: scale(1.14);\n}\n.arrow_container {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #3131316e;\n  border-radius: var(--border-radius);\n  transition: all 0.3s ease;\n}\n.arrow_container svg {\n  fill: #E8E8E8;\n  opacity: 0.6;\n  rotate: 90deg;\n  transition: rotate 0.3s ease;\n}\n.arrow_container.active {\n  background: var(--gradient-primary);\n  box-shadow: var(--primary-box-shadow);\n}\n.arrow_container.active svg {\n  rotate: 0deg;\n  opacity: 1;\n}\n.main_content_container {\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - var(--sidebar-width));\n  margin-left: var(--sidebar-width);\n  min-height: 100vh;\n  transition: all 0.5s;\n}\n.sidenav_content {\n  width: calc(100% - var(--Sidebar-miniwidth)) !important;\n  margin-left: var(--Sidebar-miniwidth) !important;\n}\n.header-container {\n  background: var(--secondary-bg);\n  width: calc(100% - var(--sidebar-width));\n  height: var(--header-height);\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 999;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  transition: all 0.5s;\n}\n.sidenav_content .header-container {\n  width: calc(100% - var(--Sidebar-miniwidth)) !important;\n}\n.main_content_container > .fd.p_ {\n  margin-top: var(--header-height);\n}\n.header-sub-container {\n  width: 100%;\n  padding: var(--space-md);\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-md);\n}\n.header-theme-section {\n  display: flex;\n  align-items: center;\n  margin-right: 4px;\n}\n.header_left_section {\n  display: flex;\n  align-items: center;\n  gap: var(--space-md);\n}\n.notification_box {\n  height: 40px;\n  width: 40px;\n  background: var(--accent-bg);\n  border-radius: var(--border-radius);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n.notification_box:hover {\n  background: #2A2A2A;\n}\n.notication_count {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  border: 2px solid #000;\n  background: #FF9D00;\n  color: #fff;\n  font-family: "Roboto", sans-serif;\n  font-weight: 900;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: -5px;\n  right: -5px;\n}\n.notification_icon {\n  width: 18px;\n  height: 18px;\n}\n.header_search_box {\n  height: 40px;\n  width: 235px;\n  background: var(--accent-bg);\n  border-radius: var(--border-radius);\n  display: flex;\n  align-items: center;\n  gap: var(--space-xs);\n  padding: var(--space-xs) var(--space-sm);\n  transition: background 0.3s ease;\n}\n.header_search_box:focus-within {\n  background: #2A2A2A;\n}\n.header_search_box img {\n  width: 15px;\n  height: 15px;\n}\nspan.devider {\n  height: 18px;\n  width: 2px;\n  background: #E8E8E8;\n  opacity: .1;\n}\n.header_search_box input {\n  background: none;\n  border: none;\n  width: 100%;\n  height: 100%;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.header_search_box input::placeholder {\n  color: var(--text-muted);\n}\n.header_search_box input:focus {\n  outline: none;\n}\n.header_right_section {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  flex-wrap: wrap;\n  justify-content: end;\n}\n.user_details_container {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  margin-right: var(--space-xs);\n}\n.user_profile {\n  background: #161616;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n  padding: 5px;\n}\n.user_profile img {\n  width: 50px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  height: 50px;\n}\n.user_details {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user_details p {\n  font-weight: 500;\n  font-size: 14px;\n  margin: 0;\n}\n.user_details select {\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 12px;\n  cursor: pointer;\n}\n.user_details select:focus {\n  outline: none;\n}\n.desktop {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background: var(--gradient-primary);\n  font-size: 13px;\n  padding: 1px 3px;\n  font-weight: 600;\n  border-radius: 5px;\n}\n.balance_container {\n  display: grid;\n  align-items: flex-start;\n  margin: 0px 2px;\n  cursor: pointer;\n}\n.amount_sep_rake {\n  display: grid;\n}\n.amount_sep {\n  font-size: 14px;\n  font-weight: 600;\n  display: grid;\n  line-height: 1.2;\n  text-align: center;\n}\n.flexclass {\n  display: flex;\n  justify-content: end;\n  align-items: flex-start;\n}\n.balance_container .primary_balance {\n  background: var(--gradient-text);\n  background-clip: text;\n  color: transparent;\n  font-size: 16px;\n}\n.balance_container .secondary_balance {\n  background:\n    linear-gradient(\n      to right,\n      #ff9500,\n      #FF9D00);\n  background-clip: text;\n  color: transparent;\n  font-size: 16px;\n}\n.fd {\n  width: 100%;\n}\n.p_ {\n  min-height: calc(100vh - 120px);\n  padding: var(--space-sm) var(--space-lg);\n}\n.mini_Logo {\n  display: none;\n}\n.mainCover {\n  position: fixed;\n  background: #181b1ee0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n}\n.loginBtn_main_div {\n  display: flex;\n  gap: 12px;\n}\n.desktopverion {\n  display: flex !important;\n  align-items: flex-start;\n}\n.mobile_section_pb {\n  display: none !important;\n}\nli.clickable.active-menu {\n  background: var(--gradient-primary) !important;\n}\n@media (max-width: 1200px) {\n  .balance_container {\n    padding: 0 var(--space-xs);\n  }\n  .header_right_section {\n    display: none;\n    gap: 0;\n  }\n  .m_b_view {\n    display: grid;\n    align-items: center;\n    border: 1px solid #e4561b;\n    border-radius: 5px;\n    padding: 3px;\n    width: 100%;\n    max-width: 250px;\n  }\n}\n@media (max-width: 768px) {\n  .user_details_container {\n    margin-right: 0;\n  }\n  .mobile_section_pb {\n    display: flex !important;\n  }\n  .header-sub-container {\n    width: 100%;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--space-md);\n    height: auto;\n  }\n  .desktopverion {\n    display: none !important;\n  }\n  .balance_grid {\n  }\n  .m_b_view {\n    display: flex;\n    justify-content: center;\n    border: none;\n    border-radius: 5px;\n    padding: 4px;\n    max-width: 500px;\n    text-align: center;\n    align-items: flex-start;\n    margin: auto;\n  }\n  .m_b_view > div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    min-width: 110px;\n    font-size: 12px !important;\n  }\n  .borderspeace {\n    font-size: 11px;\n    font-weight: 600;\n  }\n  .balance_grid {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n  }\n  .amount_sep {\n    display: flex;\n    justify-content: center;\n  }\n  .secondary_balance {\n    font-weight: 500;\n  }\n  .primary_balance {\n    font-weight: 500;\n  }\n  .main-container {\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n  }\n  .main-container.sideMobile {\n    transform: translateX(0);\n  }\n  .main-container.mobile-open {\n    transform: translateX(0);\n  }\n  .main_content_container {\n    width: 100% !important;\n    margin-left: 0 !important;\n  }\n  .header_left_section,\n  .header_right_section {\n    width: 100%;\n    justify-content: flex-start;\n    gap: 0;\n  }\n  li.mobile_section_pb.logutSection {\n    display: flex;\n    justify-content: flex-start !important;\n    align-items: center;\n  }\n  .header-container {\n    width: 100%;\n    transition: height 0.25s ease;\n  }\n  .header-container.logged-in {\n    height: 113px;\n  }\n  .header-container.logged-out {\n    height: 80px;\n  }\n  .mini_Logo.menu {\n    width: 25px;\n    font-size: 5px;\n  }\n  .mini_Logo {\n    display: block;\n    width: 100%;\n    max-width: 65px;\n  }\n  img.mini_Logo {\n    margin-left: 8px;\n  }\n  .header_search_box {\n    display: none;\n  }\n  .p_ {\n    padding: 15px 10px;\n  }\n  .sidenav_content .header-container {\n    width: 100% !important;\n  }\n  .amount_sep {\n    font-size: 12px;\n    font-weight: 500;\n  }\n  .user_profile img {\n    width: 80px;\n    height: 40px;\n  }\n  .logout_icon {\n    font-size: 15px !important;\n  }\n  .user_details_container {\n    width: 100%;\n    justify-content: end;\n  }\n  .main_center_width {\n    transition: margin-top 0.25s ease;\n  }\n  .user_profile {\n    background: #252525;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50px;\n    overflow: hidden;\n    cursor: pointer;\n    width: 100px;\n  }\n}\n@media (max-width: 450px) {\n  .mobile_width {\n    width: 100px;\n    min-width: 100px;\n  }\n}\n.mobile_section_pb .button.primary_button {\n  width: 100%;\n  min-width: 98px;\n  border-radius: 4PX;\n  padding: 5px;\n  border: none;\n  max-width: fit-content;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-xs);\n}\nspan.borderspeace {\n  text-align: center;\n  flex-grow: 1;\n  font-weight: 500;\n  background: var(--gradient-primary);\n  padding: 2px 4px;\n}\nspan.secondary_balance {\n  font-size: 12px;\n}\n.logout_icon {\n  color: #e4561b;\n  font-size: 20px;\n  cursor: pointer;\n}\n.logout_icon:hover {\n  color: #f00;\n}\n.main_center_width {\n  width: 100%;\n  max-width: 1500px;\n  margin: auto;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 999;\n}\n.modal-container {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 380px;\n  background: #1e1e1e;\n  border-radius: 10px;\n  padding: 20px;\n  z-index: 1000;\n  color: #fff;\n  animation: _ngcontent-ng-c3430717442_popupOpen 0.2s ease-out;\n  height: 100%;\n  max-height: 500px;\n  overflow-y: scroll;\n}\n@keyframes popupOpen {\n  from {\n    transform: translate(-50%, -45%);\n    opacity: 0;\n  }\n  to {\n    transform: translate(-50%, -50%);\n    opacity: 1;\n  }\n}\n.modal-body {\n  height: 100%;\n  max-height: 300px;\n  margin: auto;\n  display: flex;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.close-btn {\n  cursor: pointer;\n  font-size: 22px;\n  font-weight: bold;\n}\n.avatar-loader {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      90deg,\n      #2a2a2a 25%,\n      #3a3a3a 37%,\n      #2a2a2a 63%);\n  background-size: 400% 100%;\n  animation: avatarShimmer 1.4s ease infinite;\n}\n@keyframes avatarShimmer {\n  0% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n.animation {\n  animation: dash 4s ease-in-out infinite;\n}\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dashoffset: 100;\n  }\n}\n.avatar-list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  margin-top: 15px;\n  max-height: 380px;\n  height: 100%;\n  overflow-y: scroll;\n}\n.avatar-item img {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: 0.3s;\n}\n.avatar-item img {\n  border: 2px solid transparent;\n}\n.avatar-item img:hover,\n.avatar-item.active {\n  background:\n    linear-gradient(\n      90deg,\n      #CC0000,\n      #FF9D00);\n  border-radius: 50%;\n}\n.avatar-preview {\n  margin-top: 20px;\n  text-align: center;\n  display: flex;\n  justify-content: space-around;\n  align-content: center;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 13px;\n}\n.avatar-preview > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.preview-img {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n.sign-in-desktop__cross {\n  transition: all 0.3s ease;\n  cursor: pointer;\n  font-size: 32px;\n  position: absolute;\n  top: 0;\n  right: 5px;\n  z-index: 10;\n  border: none;\n  background: none;\n}\n.sign-in-desktop__cross svg {\n  fill: #9583A0;\n}\n.sign-in-desktop__cross:hover svg {\n  fill: var(--error-validation-clr);\n  background: var(--gradient-primary);\n}\n.btn-set {\n  background: var(--gradient-primary);\n  color: #fff;\n  padding: 8px 20px;\n  border-radius: 5px;\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  margin-top: 15px;\n}\n.sign-in-desktop__error {\n  color: var(--error-validation-clr);\n  padding: 0 2rem;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  font-size: 14px;\n  margin: 1rem 2rem;\n  margin-top: 0;\n}\n.sign-in-desktop__validation-error {\n  color: var(--error-validation-clr);\n  font-size: 15px;\n  font-weight: 600;\n}\n.input-desktop__password {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 45%;\n  transform: translateY(-50%);\n  z-index: 2;\n  transition: all 0.3s ease;\n}\n.input-desktop__password:hover {\n  transform: translateY(-50%) scale(1.1);\n}\n.input-desktop {\n  position: relative;\n}\n.input-desktop__native {\n  width: 100%;\n  background: #000 !important;\n  border: 0;\n  outline: 0;\n  border-radius: 10px;\n  padding: 5px 35px 5px 130px;\n  height: 45px;\n  font-family: "Poppins";\n}\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 10%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10015;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(4px);\n}\n.modal.visible {\n  opacity: 1;\n  visibility: visible;\n}\n.sign-in-desktop__background {\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  max-width: 800px;\n  height: 100%;\n  max-height: 650px;\n  object-fit: 100%;\n  border-radius: 20px;\n}\n.deskBackLoginImage {\n  display: block;\n}\n.mobileBackLoginImage {\n  display: none;\n}\n.sign-in-destktop-form_cover {\n  position: relative;\n  width: 50%;\n  float: right;\n  background: #0c0c0c45;\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  height: auto;\n  height: 252px;\n  border-radius: 10px;\n  padding: 20px;\n  min-width: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.sign-in-Login-title {\n  font-size: 1.5em;\n  font-weight: 500;\n  line-height: 1em;\n  margin-top: 20px;\n  text-align: center;\n}\n.sign-in-desktop__form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n.sign-in-desktop__title {\n  width: 95%;\n  margin-left: 10%;\n  display: none;\n}\n.sign-in-desktop__fields {\n  width: 100%;\n}\n@keyframes modalBounce {\n  0% {\n    transform: translate(-50%, -50%) scale(0.95);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.02);\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.sign-in-desktop__cross {\n  transition: all 0.3s ease;\n  cursor: pointer;\n  font-size: 32px;\n  position: absolute;\n  top: 0;\n  right: 5px;\n  z-index: 10;\n}\n.sign-in-desktop__cross svg {\n  fill: #9583A0;\n}\n.sign-in-desktop__cross:hover svg {\n  fill: var(--error-validation-clr);\n}\n.sign-in-desktop__input {\n  margin: 20px 0;\n}\n.sign-in-desktop__input input:focus {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(149, 131, 160, 0.2);\n  transition: all 0.3s ease;\n  outline: 1px solid #cc0000;\n}\n.login_alert-error {\n  width: 100%;\n  padding: 0.1rem;\n  text-align: center;\n  margin-top: 5px;\n}\n.sign-in-desktop__button {\n  width: 100%;\n  padding: 5px;\n  border: 0px;\n  outline: 0px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: none;\n}\n.sign-in-desktop__button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.remember-me-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: var(--text-xl);\n}\n.remember-me-checkbox {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  padding-left: 30px;\n  font-size: 14px;\n  color: #5a4b66;\n  transition: all 0.3s ease;\n}\n.remember-me-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkmark {\n  position: absolute;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #000000;\n  border: 2px solid #000000;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.remember-me-checkbox:hover .checkmark {\n  border-color: #000000;\n  transform: scale(1.05);\n}\n.remember-me-checkbox input:checked ~ .checkmark {\n  background-color: #000;\n  border-color: #000;\n  animation: checkmarkPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.checkmark-svg {\n  width: 10px;\n  height: 8px;\n  fill: none;\n  stroke: #e72e16;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 16;\n  stroke-dashoffset: 16;\n  transition: stroke-dashoffset 0.3s ease;\n}\n.remember-me-checkbox input:checked ~ .checkmark .checkmark-svg {\n  stroke-dashoffset: 0;\n  transition: stroke-dashoffset 0.3s ease 0.2s;\n}\n@keyframes checkmarkPop {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.remember-me-text {\n  margin-left: 8px;\n  transition: color 0.3s ease;\n}\n.remember-me-checkbox:hover .remember-me-text {\n  color: var(--color-purple-light);\n}\n.input-desktop__password {\n  opacity: 0.7;\n  transition: all 0.3s ease;\n}\n.input-desktop__password:hover {\n  opacity: 1;\n  transform: translateY(-50%) scale(1.2);\n}\n.input-desktop__password_active {\n  opacity: 1;\n}\n.input-desktop__password {\n  transform-origin: center;\n}\n.input-desktop__password.animate {\n  animation: eyeBlink 0.5s ease;\n}\n@keyframes eyeBlink {\n  0% {\n    transform: translateY(-50%) scale(1);\n  }\n  50% {\n    transform: translateY(-50%) scale(0.8);\n  }\n  100% {\n    transform: translateY(-50%) scale(1);\n  }\n}\n@media (max-width: 768px) {\n  @keyframes mobileModalBounce {\n    0% {\n      transform: translateY(30px) scale(0.95);\n    }\n    100% {\n      transform: translateY(0) scale(1);\n    }\n  }\n  .remember-me-checkbox {\n    font-size: 13px;\n  }\n}\n.form-slider-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}\n.login-form,\n.forget-form {\n  flex: 0 0 100%;\n  position: relative;\n  transition: transform 0.6s ease;\n}\n.login-form {\n  display: block;\n}\n.forget-form {\n  display: none;\n}\n.form-slider-container.showForget .login-form {\n  display: none;\n}\n.form-slider-container.showForget .forget-form {\n  display: block;\n}\n.login_icons {\n  font-size: 22px;\n  position: absolute;\n  top: 45%;\n  transform: translateY(-50%);\n  left: 5px;\n  z-index: 10;\n  color: transparent;\n  background: var(--text-primary);\n  background-clip: text;\n}\n.input-desktop__native:focus ~ .login_icons,\n.input-desktop__native:active ~ .login_icons {\n  color: transparent;\n  background: var(--gradient-primary);\n  background-clip: text;\n}\n.login_labels {\n  position: absolute;\n  font-size: 0.95rem;\n  top: 45%;\n  transform: translateY(-50%);\n  left: 40px;\n  z-index: 10;\n  font-family: "Poppins";\n  color: var(--text-primary);\n  background: #000000;\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  }\n  50% {\n    box-shadow: 0 20px 40px rgba(149, 131, 160, 0.2);\n  }\n  100% {\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  }\n}\n@media screen and (max-width: 576px) {\n  .deskBackLoginImage {\n    display: none;\n  }\n  .mobileBackLoginImage {\n    display: block;\n  }\n  .sign-in-desktop__background {\n    width: 100dvw;\n    height: 100dvh;\n    max-width: 100dvw;\n    max-height: 100dvh;\n    border-radius: 0;\n  }\n  .sign-in-destktop-form_cover {\n    width: 100%;\n    border-radius: 30px 30px 0 0;\n  }\n  .input-desktop {\n    height: 3.2rem;\n  }\n  .sign-in-desktop__label {\n    margin-bottom: var(--spacing-sm);\n  }\n  .sign-in-desktop__input {\n    margin-bottom: var(--spacing-xxl);\n  }\n  .sign-in-desktop__form {\n    border-radius: 1rem;\n    width: 100%;\n    font-size: 1rem;\n    max-width: 550px;\n  }\n}\ninput.input-desktop__native:-webkit-autofill,\ninput.input-desktop__native:-webkit-autofill:hover,\ninput.input-desktop__native:-webkit-autofill:focus,\ninput.input-desktop__native:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 1000px #000000 inset !important;\n  box-shadow: 0 0 0 1000px #000000 inset !important;\n  -webkit-text-fill-color: #ffffff !important;\n  transition: background-color 5000s ease-in-out 0s;\n}\n.submenu {\n  padding-left: 20px;\n}\n.submenu-item {\n  font-size: 14px;\n  opacity: 0.9;\n}\n.history-arrow {\n  margin-left: auto;\n  font-size: 12px;\n  color: #999;\n}\n/*# sourceMappingURL=main-component.css.map */\n'] }]
  }], () => [{ type: Store }, { type: Router }, { type: ActivatedRoute }, { type: FormBuilder }, { type: ComponentFactoryResolver$1 }, { type: CommonUtilService }, { type: DomSanitizer }, { type: PlayerService }, { type: CashierService }, { type: MessageService }, { type: GameCmsService }], { alertHost: [{
    type: ViewChild,
    args: ["alertHost", { read: ViewContainerRef }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "src/app/components/main-component/main-component.ts", lineNumber: 30 });
})();
export {
  MainComponent
};
//# sourceMappingURL=chunk-T2NNTT2U.js.map
