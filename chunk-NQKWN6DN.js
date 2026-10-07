import {
  GameCmsService
} from "./chunk-YQS7B7N5.js";
import "./chunk-2Y7B2BAT.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S5ZOBF7L.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-J735AYEO.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EAJ6W5YO.js";

// src/app/promotion/promotion.ts
var _c0 = ["contentSection"];
function Promotion_ng_template_1_Template(rf, ctx) {
}
function Promotion_div_9_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function Promotion_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, Promotion_div_9_div_1_div_1_Template, 1, 0, "div", 12);
    \u0275\u0275elementStart(2, "img", 13);
    \u0275\u0275listener("load", function Promotion_div_9_div_1_Template_img_load_2_listener() {
      const img_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImageLoad(img_r2));
    })("click", function Promotion_div_9_div_1_Template_img_click_2_listener() {
      const ctx_r3 = \u0275\u0275restoreView(_r1);
      const img_r2 = ctx_r3.$implicit;
      const i_r5 = ctx_r3.index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectPromotion(img_r2, i_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !img_r2.loaded);
    \u0275\u0275advance();
    \u0275\u0275property("src", "https://cms.rajpoker.com" + img_r2.media, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(img_r2.promotionName);
  }
}
function Promotion_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, Promotion_div_9_div_1_Template, 5, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.banners);
  }
}
function Promotion_div_10_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", i_r8)("selected", ctx_r2.selectedPromotion === item_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.promotionName, " ");
  }
}
function Promotion_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function Promotion_div_10_div_5_Template_div_click_0_listener() {
      const ctx_r9 = \u0275\u0275restoreView(_r9);
      const item_r11 = ctx_r9.$implicit;
      const i_r12 = ctx_r9.index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectPromotion(item_r11, i_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.selectedPromotion === item_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r11.promotionName, " ");
  }
}
function Promotion_div_10_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function Promotion_div_10_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.selectedPromotionContent.termsAndConditions, \u0275\u0275sanitizeHtml);
  }
}
function Promotion_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25, 0)(2, "div", 26);
    \u0275\u0275template(3, Promotion_div_10_div_6_div_3_Template, 1, 0, "div", 12);
    \u0275\u0275elementStart(4, "img", 27);
    \u0275\u0275listener("load", function Promotion_div_10_div_6_Template_img_load_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.bannerLoaded = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function Promotion_div_10_div_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closepopup());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, Promotion_div_10_div_6_div_7_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.bannerLoaded);
    \u0275\u0275advance();
    \u0275\u0275classProp("hide", !ctx_r2.bannerLoaded);
    \u0275\u0275property("src", "https://cms.rajpoker.com" + (ctx_r2.selectedPromotion == null ? null : ctx_r2.selectedPromotion.media), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.selectedPromotionContent);
  }
}
function Promotion_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "select", 18);
    \u0275\u0275listener("change", function Promotion_div_10_Template_select_change_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSelectChange($event));
    });
    \u0275\u0275template(3, Promotion_div_10_option_3_Template, 2, 3, "option", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275template(5, Promotion_div_10_div_5_Template, 2, 3, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Promotion_div_10_div_6_Template, 8, 5, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.banners);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.banners);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.bannersgamecontent && ctx_r2.selectedPromotion);
  }
}
var Promotion = class _Promotion {
  constructor(gamecms) {
    this.gamecms = gamecms;
    this.bannerLoaded = false;
    this.loading = true;
    this.banners = [];
    this.bannersShow = false;
    this.selectedPromotionContent = null;
    this.bannersgamecontent = [];
  }
  ngOnInit() {
    this.gamecms.promotionBanners().subscribe((images) => {
      if (images) {
        this.banners = images.filter((data) => data.ImageStatus === "active").map((item) => __spreadProps(__spreadValues({}, item), {
          loaded: false
        }));
      }
      ;
    });
    this.gamecms.promotionGames().subscribe((games) => {
      if (games) {
        this.bannersgamecontent = games;
      }
    });
  }
  selectPromotion(item, index) {
    this.selectedPromotion = item;
    this.selectedPromotionContent = this.bannersgamecontent.find((promo) => promo.name === item.promotionName) || null;
    this.bannersShow = true;
    this.bannerLoaded = false;
    this.selectedIndex = index;
    if (window.innerWidth < 768) {
      setTimeout(() => {
        if (this.contentSection) {
          window.scrollTo({
            top: this.contentSection.nativeElement.offsetTop - 80,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }
  onSelectChange(event) {
    const index = event.target.value;
    const item = this.banners[index];
    this.selectPromotion(item, index);
  }
  closepopup() {
    this.bannersShow = false;
  }
  onImageLoad(img) {
    img.loaded = true;
  }
  static {
    this.\u0275fac = function Promotion_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Promotion)(\u0275\u0275directiveInject(GameCmsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Promotion, selectors: [["app-promotion"]], viewQuery: function Promotion_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentSection = _t.first);
      }
    }, decls: 11, vars: 2, consts: [["contentSection", ""], [1, "fd"], ["appPlaceholder", ""], [1, "container"], ["aria-label", "Breadcrumb", 1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "", "aria-hidden", "true", "width", "15"], ["class", "promo-container", 4, "ngIf"], ["class", "layout", 4, "ngIf"], [1, "promo-container"], ["class", "image-card", 4, "ngFor", "ngForOf"], [1, "image-card"], ["class", "skeleton", 4, "ngIf"], [3, "load", "click", "src"], [1, "title"], [1, "skeleton"], [1, "layout"], [1, "mobile-dropdown"], [3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "side-menu"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "content", 4, "ngIf"], [3, "value", "selected"], [3, "click"], [1, "content"], [1, "banner-wrapper"], [1, "main-banner", 3, "load", "src"], [1, "close", 3, "click"], [4, "ngIf"], [1, "promotion-content", 3, "innerHTML"]], template: function Promotion_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, Promotion_ng_template_1_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 3)(3, "nav", 4)(4, "span", 5);
        \u0275\u0275text(5, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "img", 6);
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "Promotions ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, Promotion_div_9_Template, 2, 1, "div", 7)(10, Promotion_div_10_Template, 7, 3, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", !ctx.bannersShow);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.bannersShow);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.promo-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 15px;\n  padding: 10px;\n}\nh6.heading[_ngcontent-%COMP%] {\n  font-size: 27px;\n  padding: 10px;\n  color: #e7aa04;\n}\n.promo-card[_ngcontent-%COMP%] {\n  background: #222;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: pointer;\n}\np[_ngcontent-%COMP%], \nli[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 17px;\n  margin: 0;\n  line-height: 1.8;\n}\n.promo-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.promo-card.active[_ngcontent-%COMP%] {\n  border: 2px solid #00ff9c;\n  box-shadow: 0 0 10px rgba(0, 255, 156, 0.5);\n}\nbutton.close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 10px 0px #e7aa04;\n}\nbutton.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: var(--gradient-primary);\n  border: none;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  font-size: 15px;\n  cursor: pointer;\n}\n.title[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: var(--gradient-primary);\n  text-transform: capitalize;\n  color: #fff;\n  padding: 5px;\n  font-size: 18px;\n  text-align: center;\n  z-index: 5;\n}\n.loaderPromotion[_ngcontent-%COMP%] {\n  width: 50px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      farthest-side,\n      #ffa516 94%,\n      #0000) top/8px 8px no-repeat,\n    conic-gradient(#0000 30%, #ffa516);\n  -webkit-mask:\n    radial-gradient(\n      farthest-side,\n      #0000 calc(100% - 8px),\n      #000 0);\n  animation: _ngcontent-%COMP%_l13 1s infinite linear;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n}\n[_nghost-%COMP%]     th, \ntd[_ngcontent-%COMP%] {\n  border: 1px solid #514c4c;\n  padding: 5px;\n  background: fixed;\n}\n[_nghost-%COMP%]     tr.bg_cl {\n  background: var(--gradient-primary) !important;\n}\n[_nghost-%COMP%]     tr td {\n  background: #1e1e1e !important;\n  color: #fff !important;\n  border: 1px solid #514c4c !important;\n}\n@keyframes _ngcontent-%COMP%_l13 {\n  100% {\n    transform: rotate(1turn);\n  }\n}\n@media (max-width: 767px) {\n  .promo-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 768px) and (max-width: 1023px) {\n  .promo-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .promo-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 2rem;\n}\nli[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  color: #999999;\n  font-size: 1rem;\n}\nh2[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  font-size: 1.5rem;\n}\n.layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding: 10px;\n}\n.mobile-dropdown[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 767px) {\n  .layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .side-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-dropdown[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px;\n  }\n  .mobile-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    font-size: 16px;\n    border-radius: 6px;\n  }\n  .main-banner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n  .title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 6px;\n  }\n}\n.side-menu[_ngcontent-%COMP%] {\n  width: 250px;\n  background: #1e1e1e;\n  border-radius: 6px;\n  border: 1px solid #303030;\n}\n.side-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #fff;\n  cursor: pointer;\n  border-bottom: 1px solid #333;\n  font-size: 18px;\n  text-transform: capitalize;\n}\n.side-menu[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  border-radius: 6px;\n  color: #fff;\n}\nselect[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  text-transform: capitalize;\n}\noption[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #ddd;\n}\n.main-banner[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  margin-bottom: 15px;\n}\n.highlight[_ngcontent-%COMP%] {\n  color: #00ff9c;\n  font-weight: bold;\n  font-size: 18px;\n  position: relative;\n}\n.image-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  width: 100%;\n  aspect-ratio: 490 / 280;\n  overflow: hidden;\n  border-radius: 10px;\n  max-width: 850px;\n  cursor: pointer;\n}\n.skeleton[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #2a2a2a;\n  z-index: 10;\n}\n.skeleton[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  transform: translateX(-100%);\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.5),\n      transparent);\n  animation: _ngcontent-%COMP%_shimmer 1.2s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\nimg.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.image-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  inset: 0;\n}\n[_nghost-%COMP%]     ul {\n  list-style: none;\n  padding-left: 0;\n}\n[_nghost-%COMP%]     ul li {\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]     ul li::before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: #fbc233;\n  font-size: 18px;\n}\n.banner-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  background: #1a1a1a;\n  overflow: hidden;\n  border-radius: 8px;\n}\n.main-banner[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.banner-wrapper[_ngcontent-%COMP%]   .skeleton[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #2a2a2a;\n  z-index: 10;\n}\n.banner-wrapper[_ngcontent-%COMP%]   .skeleton[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  transform: translateX(-100%);\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.5),\n      transparent);\n  animation: _ngcontent-%COMP%_shimmer 1.2s infinite;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=promotion.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Promotion, [{
    type: Component,
    args: [{ selector: "app-promotion", imports: [CommonModule], template: `<div class="fd">\r
  <ng-template appPlaceholder></ng-template>\r
</div>\r
<div class="container">\r
  <nav class="redirectline" aria-label="Breadcrumb"><span routerLink="/home">Home</span> <img\r
      src="assets/home_icons/arrow_right.png" alt="" aria-hidden="true" width="15"> <span>Promotions\r
    </span> </nav>\r
  <div class="promo-container" *ngIf="!bannersShow">\r
    <div *ngFor="let img of banners ; let i = index" class="image-card">\r
      <div class="skeleton" *ngIf="!img.loaded"></div>\r
      <img [src]="'https://cms.rajpoker.com' +img.media" (load)="onImageLoad(img)" (click)="selectPromotion(img,i)" />\r
      <div class="title">{{img.promotionName\r
        }}</div>\r
    </div>\r
  </div>\r
\r
  <div class="layout" *ngIf="bannersShow">\r
    <!-- \u{1F53D} MOBILE DROPDOWN -->\r
    <div class="mobile-dropdown">\r
      <select (change)="onSelectChange($event)">\r
        <option *ngFor="let item of banners; let i = index" [value]="i" [selected]="selectedPromotion === item">\r
          {{ item.promotionName }}\r
        </option>\r
      </select>\r
    </div>\r
    <!-- \u{1F5A5}\uFE0F DESKTOP SIDE MENU -->\r
    <div class="side-menu">\r
      <div *ngFor="let item of banners; let i = index" (click)="selectPromotion(item,i)"\r
        [class.active]="selectedPromotion === item">\r
        {{ item.promotionName }}\r
      </div>\r
    </div>\r
    <!-- CONTENT -->\r
    <div class="content" *ngIf="bannersgamecontent && selectedPromotion" #contentSection>\r
      <div class="banner-wrapper">\r
        <!-- Skeleton -->\r
        <div class="skeleton" *ngIf="!bannerLoaded"></div>\r
        <!-- Image -->\r
        <img [src]="'https://cms.rajpoker.com' + selectedPromotion?.media" class="main-banner"\r
          (load)="bannerLoaded = true" [class.hide]="!bannerLoaded" />\r
        <button class="close" (click)="closepopup()">\u2715</button>\r
      </div>\r
      <div *ngIf="selectedPromotionContent">\r
        <div class="promotion-content" [innerHTML]="selectedPromotionContent.termsAndConditions"></div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/promotion/promotion.css */\n.promo-container {\n  display: grid;\n  gap: 15px;\n  padding: 10px;\n}\nh6.heading {\n  font-size: 27px;\n  padding: 10px;\n  color: #e7aa04;\n}\n.promo-card {\n  background: #222;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: pointer;\n}\np,\nli {\n  color: #fff;\n  font-size: 17px;\n  margin: 0;\n  line-height: 1.8;\n}\n.promo-card img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.promo-card.active {\n  border: 2px solid #00ff9c;\n  box-shadow: 0 0 10px rgba(0, 255, 156, 0.5);\n}\nbutton.close:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 10px 0px #e7aa04;\n}\nbutton.close {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: var(--gradient-primary);\n  border: none;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  font-size: 15px;\n  cursor: pointer;\n}\n.title {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: var(--gradient-primary);\n  text-transform: capitalize;\n  color: #fff;\n  padding: 5px;\n  font-size: 18px;\n  text-align: center;\n  z-index: 5;\n}\n.loaderPromotion {\n  width: 50px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      farthest-side,\n      #ffa516 94%,\n      #0000) top/8px 8px no-repeat,\n    conic-gradient(#0000 30%, #ffa516);\n  -webkit-mask:\n    radial-gradient(\n      farthest-side,\n      #0000 calc(100% - 8px),\n      #000 0);\n  animation: l13 1s infinite linear;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n}\n:host ::ng-deep th,\ntd {\n  border: 1px solid #514c4c;\n  padding: 5px;\n  background: fixed;\n}\n:host ::ng-deep tr.bg_cl {\n  background: var(--gradient-primary) !important;\n}\n:host ::ng-deep tr td {\n  background: #1e1e1e !important;\n  color: #fff !important;\n  border: 1px solid #514c4c !important;\n}\n@keyframes l13 {\n  100% {\n    transform: rotate(1turn);\n  }\n}\n@media (max-width: 767px) {\n  .promo-container {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 768px) and (max-width: 1023px) {\n  .promo-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .promo-container {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\nh1 {\n  margin-bottom: 20px;\n  font-size: 2rem;\n}\nli,\np {\n  color: #999999;\n  font-size: 1rem;\n}\nh2 {\n  margin-top: 22px;\n  font-size: 1.5rem;\n}\n.layout {\n  display: flex;\n  gap: 20px;\n  padding: 10px;\n}\n.mobile-dropdown {\n  display: none;\n}\n@media (max-width: 767px) {\n  .layout {\n    flex-direction: column;\n  }\n  .side-menu {\n    display: none;\n  }\n  .mobile-dropdown {\n    display: block;\n    padding: 10px;\n  }\n  .mobile-dropdown select {\n    width: 100%;\n    padding: 10px;\n    font-size: 16px;\n    border-radius: 6px;\n  }\n  .main-banner {\n    width: 100%;\n    height: auto;\n  }\n  .title {\n    font-size: 16px;\n    padding: 6px;\n  }\n}\n.side-menu {\n  width: 250px;\n  background: #1e1e1e;\n  border-radius: 6px;\n  border: 1px solid #303030;\n}\n.side-menu div {\n  padding: 12px;\n  color: #fff;\n  cursor: pointer;\n  border-bottom: 1px solid #333;\n  font-size: 18px;\n  text-transform: capitalize;\n}\n.side-menu div.active {\n  background: var(--gradient-primary);\n  border-radius: 6px;\n  color: #fff;\n}\nselect {\n  background: var(--gradient-primary);\n  text-transform: capitalize;\n}\noption {\n  text-transform: capitalize;\n}\n.content {\n  flex: 1;\n  color: #ddd;\n}\n.main-banner {\n  width: 100%;\n  border-radius: 8px;\n  margin-bottom: 15px;\n}\n.highlight {\n  color: #00ff9c;\n  font-weight: bold;\n  font-size: 18px;\n  position: relative;\n}\n.image-card {\n  position: relative;\n  width: 100%;\n  width: 100%;\n  aspect-ratio: 490 / 280;\n  overflow: hidden;\n  border-radius: 10px;\n  max-width: 850px;\n  cursor: pointer;\n}\n.skeleton {\n  position: absolute;\n  inset: 0;\n  background: #2a2a2a;\n  z-index: 10;\n}\n.skeleton::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  transform: translateX(-100%);\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.5),\n      transparent);\n  animation: shimmer 1.2s infinite;\n}\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\nimg.hide {\n  display: none;\n}\n.image-card img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  inset: 0;\n}\n:host ::ng-deep ul {\n  list-style: none;\n  padding-left: 0;\n}\n:host ::ng-deep ul li {\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n:host ::ng-deep ul li::before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: #fbc233;\n  font-size: 18px;\n}\n.banner-wrapper {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  background: #1a1a1a;\n  overflow: hidden;\n  border-radius: 8px;\n}\n.main-banner {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.banner-wrapper .skeleton {\n  position: absolute;\n  inset: 0;\n  background: #2a2a2a;\n  z-index: 10;\n}\n.banner-wrapper .skeleton::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  transform: translateX(-100%);\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.5),\n      transparent);\n  animation: shimmer 1.2s infinite;\n}\n.hide {\n  display: none;\n}\n/*# sourceMappingURL=promotion.css.map */\n'] }]
  }], () => [{ type: GameCmsService }], { contentSection: [{
    type: ViewChild,
    args: ["contentSection"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Promotion, { className: "Promotion", filePath: "src/app/promotion/promotion.ts", lineNumber: 11 });
})();
export {
  Promotion
};
//# sourceMappingURL=chunk-NQKWN6DN.js.map
