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
  NgClass,
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
  ɵɵpropertyInterpolate2,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/pages/slot-machine-page/slot-machine-page.ts
var _c0 = ["alertHost"];
var _c1 = ["gameIframe"];
var _c2 = (a0) => ({ Active: a0 });
function SlotMachinePage_ng_template_0_Template(rf, ctx) {
}
function SlotMachinePage_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", "/assets/giflogo.gif?" + ctx_r0.loaderKey, \u0275\u0275sanitizeUrl);
  }
}
function SlotMachinePage_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div")(2, "button", 17);
    \u0275\u0275listener("click", function SlotMachinePage_div_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.subtabClose());
    });
    \u0275\u0275text(3, " \u2715 ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "iframe", 18, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 19);
    \u0275\u0275listener("click", function SlotMachinePage_div_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleFullScreen());
    });
    \u0275\u0275element(7, "i", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.urlSafe, \u0275\u0275sanitizeResourceUrl);
  }
}
function SlotMachinePage_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function SlotMachinePage_button_19_Template_button_click_0_listener() {
      const Provider_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.providerChange(Provider_r4.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const Provider_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c2, ctx_r0.ProviderName === Provider_r4.name));
    \u0275\u0275attribute("aria-pressed", ctx_r0.ProviderName === Provider_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", Provider_r4.name, " ");
  }
}
function SlotMachinePage_div_21_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_21_article_1_Template_button_click_5_listener() {
      const game_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.FivemenLauch(game_r6.gameId));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", game_r6.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("src", "", ctx_r0.CurrentDomain, "/slotimages/vivo/vivo_slots/", game_r6.gameName, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r6.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r6.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r6.gameName, "");
  }
}
function SlotMachinePage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_21_article_1_Template, 7, 8, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_22_article_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_22_article_1_ng_container_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const game_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.habanaroGm(game_r8.gameName, game_r8.KeyName));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const game_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("src", "assets/games/habanero/", game_r8.KeyName, "_230.webp", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r8.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r8.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r8.gameName, "");
  }
}
function SlotMachinePage_div_22_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275template(1, SlotMachinePage_div_22_article_1_ng_container_1_Template, 7, 6, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r8 = ctx.$implicit;
    \u0275\u0275property("title", game_r8.gameName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r8.BrandGameId);
  }
}
function SlotMachinePage_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_22_article_1_Template, 2, 2, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_23_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_23_article_1_Template_button_click_5_listener() {
      const game_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onJDBGames(game_r10.Gtype, game_r10.Mtype));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", game_r10.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("src", "", ctx_r0.CurrentDomain, "/slotimages/JDB/", game_r10.gameName, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r10.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r10.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r10.gameName, "");
  }
}
function SlotMachinePage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_23_article_1_Template, 7, 8, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_24_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_24_article_1_Template_button_click_5_listener() {
      const game_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onJDBGames(game_r12.Gtype, game_r12.Mtype));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", game_r12.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("src", "", ctx_r0.CurrentDomain, "/slotimages/Spribe/", game_r12.gameName, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r12.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r12.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r12.gameName, "");
  }
}
function SlotMachinePage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_24_article_1_Template, 7, 8, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_25_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_25_article_1_Template_button_click_5_listener() {
      const game_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.gvproviderapi(game_r14));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", game_r14.gameName);
    \u0275\u0275advance();
    \u0275\u0275property("src", "assets/GameImgs/" + ctx_r0.ProviderName + "/" + game_r14.gameId + "_230.webp", \u0275\u0275sanitizeUrl)("alt", game_r14.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r14.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r14.title, "");
  }
}
function SlotMachinePage_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_25_article_1_Template, 7, 6, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_26_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_26_article_1_Template_button_click_5_listener() {
      const game_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.on18Peaches(game_r16));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r16 = ctx.$implicit;
    \u0275\u0275property("title", game_r16.gameName);
    \u0275\u0275advance();
    \u0275\u0275property("src", game_r16.image, \u0275\u0275sanitizeUrl)("alt", game_r16.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r16.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r16.gameName, "");
  }
}
function SlotMachinePage_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_26_article_1_Template, 7, 6, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_27_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_27_article_1_Template_button_click_5_listener() {
      const game_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.evolutiongms(game_r18.openTable, game_r18));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", game_r18.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("src", "", ctx_r0.CurrentDomain, "/slotimages/Redtiger/", game_r18.gameName, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r18.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r18.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r18.gameName, "");
  }
}
function SlotMachinePage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_27_article_1_Template, 7, 8, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_28_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_28_article_1_Template_button_click_5_listener() {
      const game_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.kingmidasmethod(game_r20));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r20 = ctx.$implicit;
    \u0275\u0275property("title", game_r20.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("src", "assets/GameImgs/kingmidas/", game_r20.gameName, ".jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r20.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r20.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r20.gameName, "");
  }
}
function SlotMachinePage_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_28_article_1_Template, 7, 7, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_29_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_29_article_1_Template_button_click_5_listener() {
      const game_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onJDBGames(game_r22.Gtype, game_r22.Mtype));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r22 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", game_r22.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("src", "", ctx_r0.CurrentDomain, "/slotimages/Injoy/", game_r22.gameName, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r22.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r22.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r22.gameName, "");
  }
}
function SlotMachinePage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, SlotMachinePage_div_29_article_1_Template, 7, 8, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_30_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_30_article_1_Template_button_click_5_listener() {
      const game_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onJDBGames(game_r24.Gtype, game_r24.Mtype));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r24 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", game_r24.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("src", "", ctx_r0.CurrentDomain, "/slotimages/HGR/", game_r24.gameName, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r24.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r24.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r24.gameName, "");
  }
}
function SlotMachinePage_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_30_article_1_Template, 7, 8, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_31_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_31_article_1_Template_button_click_5_listener() {
      const game_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onJDBGames(game_r26.Gtype, game_r26.Mtype));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r26 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", game_r26.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("src", "", ctx_r0.CurrentDomain, "/slotimages/YB/", game_r26.gameName, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r26.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r26.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r26.gameName, "");
  }
}
function SlotMachinePage_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_31_article_1_Template, 7, 8, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_32_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_32_article_1_Template_button_click_5_listener() {
      const game_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onJDBGames(game_r28.Gtype, game_r28.Mtype));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r28 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", game_r28.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("src", "", ctx_r0.CurrentDomain, "/slotimages/GTF/", game_r28.gameName, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r28.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r28.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r28.gameName, "");
  }
}
function SlotMachinePage_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_32_article_1_Template, 7, 8, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_33_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_33_article_1_Template_button_click_5_listener() {
      const game_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onJDBGames(game_r30.Gtype, game_r30.Mtype));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r30 = ctx.$implicit;
    \u0275\u0275property("title", game_r30.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("src", "assets/GameImgs/AMB/", game_r30.gameName, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r30.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r30.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r30.gameName, "");
  }
}
function SlotMachinePage_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_33_article_1_Template, 7, 7, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_34_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_34_article_1_Template_button_click_5_listener() {
      const game_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.endrophinaLunchreal(game_r32.gameId, game_r32.gameName));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r32 = ctx.$implicit;
    \u0275\u0275property("title", game_r32.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("src", "https://luckhunter.prep4.live/slotimages/Endophina/", game_r32.gameName, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r32.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r32.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r32.gameName, "");
  }
}
function SlotMachinePage_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_34_article_1_Template, 7, 7, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_35_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_35_article_1_Template_button_click_5_listener() {
      const game_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onLaunchPragmatic(game_r34.gameId, game_r34.gameName));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r34 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", game_r34.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("src", "", ctx_r0.CurrentDomain, "/slotimages/pragmaticplay/", game_r34.gameName, ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r34.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r34.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r34.gameName, "");
  }
}
function SlotMachinePage_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_35_article_1_Template, 7, 8, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_36_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 32);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_36_article_1_Template_button_click_5_listener() {
      const game_r36 = \u0275\u0275restoreView(_r35).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vivogameLaunch(game_r36));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r36 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", game_r36.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("src", "assets/GameImgs/vivogaming/", ctx_r0.ProviderName, "/", game_r36.gameId, ".jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275property("alt", game_r36.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r36.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r36.gameName, "");
  }
}
function SlotMachinePage_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, SlotMachinePage_div_36_article_1_Template, 7, 8, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_37_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24);
    \u0275\u0275element(1, "img", 33);
    \u0275\u0275elementStart(2, "div", 26)(3, "h5", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SlotMachinePage_div_37_article_1_Template_button_click_5_listener() {
      const game_r38 = \u0275\u0275restoreView(_r37).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onaviatrix(game_r38));
    });
    \u0275\u0275text(6, "Lets Go!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r38 = ctx.$implicit;
    \u0275\u0275property("title", game_r38.gameName);
    \u0275\u0275advance();
    \u0275\u0275property("alt", game_r38.gameName + " slot game");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r38.gameName);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("aria-label", "Play ", game_r38.gameName, "");
  }
}
function SlotMachinePage_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, SlotMachinePage_div_37_article_1_Template, 7, 5, "article", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.loadedGames);
  }
}
function SlotMachinePage_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 34);
  }
}
var SlotMachinePage = class _SlotMachinePage {
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
  constructor(store, router, GameLauncherService2, playerservice, messageservice, GameCmsService2, sanitizer, componentFactoryResolver, commonUtilSvc) {
    this.store = store;
    this.router = router;
    this.GameLauncherService = GameLauncherService2;
    this.playerservice = playerservice;
    this.messageservice = messageservice;
    this.GameCmsService = GameCmsService2;
    this.sanitizer = sanitizer;
    this.componentFactoryResolver = componentFactoryResolver;
    this.commonUtilSvc = commonUtilSvc;
    this._urlSafe = null;
    this.windows = [];
    this.ProviderName = "habanero";
    this.itemsPerPageCount = 24;
    this.currentPageCount = 1;
    this.playerLoggedIn = false;
    this.loginstate = "";
    this.Gameloader = true;
    this.responseLoader = false;
    this.loaderKey = Date.now();
    this.loadedGames = [];
    this.initialLoad = 40;
    this.loadBatch = 20;
    this.isLoadingMore = false;
    this.CurrentDomain = environment.Domain;
  }
  ngOnInit() {
    this.showLoader();
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
        this.loadMoreGames();
      }
    });
    this.moveToTop();
    this.store.select("loginState").subscribe((loginState) => {
      console.log(loginState.playerLoggedIn);
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.GameCmsService.gamelunallproviders().subscribe((response) => {
            this.vivoSession(response);
          });
        }
      }
    });
    this.GameCmsService.getproviderList().subscribe((resData) => {
      console.log(resData);
      this.ProviderList = resData ? resData.filter((provider) => provider.status === true) : [];
      this.GameCmsService.AllSlotGames().subscribe((resDataGames) => {
        console.log(resDataGames);
        this.AllSlotGames = resDataGames;
        if (this.ProviderList.length > 0) {
          this.ProviderName = this.ProviderList[0].name;
          this.Games = this.AllSlotGames[this.ProviderList[0]?.name] || [];
        } else {
          this.ProviderName = "";
          this.Games = [];
        }
        console.log(this.Games);
        this.loadInitialGames();
        if (this.Games) {
          this.hideLoader();
        }
      });
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
  get totalPages() {
    return Math.ceil(this.Games.length / this.itemsPerPageCount);
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
  providerChange(provider) {
    this.showLoader();
    this.ProviderName = provider;
    console.log(this.ProviderName);
    this.Games = this.AllSlotGames?.[provider] ?? [];
    console.log(this.Games);
    this.loadedGames = [];
    this.loadInitialGames();
    this.hideLoader();
  }
  loadInitialGames() {
    const firstGames = this.Games.slice(0, this.initialLoad);
    this.loadedGames = [...firstGames];
  }
  loadMoreGames() {
    if (!this.Games || this.Games.length === 0)
      return;
    if (this.isLoadingMore)
      return;
    const start = this.loadedGames.length;
    const end = start + this.loadBatch;
    const nextGames = this.Games.slice(start, end);
    this.isLoadingMore = true;
    setTimeout(() => {
      this.loadedGames = [...this.loadedGames, ...nextGames];
      this.isLoadingMore = false;
    }, 800);
  }
  navigates(route) {
    this.router.navigate([route]);
  }
  vivoSession(data) {
    this.TokenData = data.token;
    this.rocketManGameUrl = data.rocketManGameUrl;
    this.operatorId = data.operatorId;
    this.men5Url = data.menUrl;
    this.platipusGameUrl = data.platipusGameUrl;
    this.arrowEdgeGameUrl = data.arrowEdgeGameUrl;
    this.rocketManGameUrl = data.rocketManGameUrl;
    this.tomhornGameUrl = data.tomhornGameUrl;
    this.token = data.token;
    this.operatorId = data.operatorId;
    this.serverId = data.serverId;
    this.homeUrl = data.homeUrl;
    this.currency = data.currency;
  }
  urlSafeLauch(url) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    if (this.urlSafe) {
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
  }
  habanaroGm(gameName, gameType) {
    if (this.playerLoggedIn) {
      this.keyname = gameType;
      let profile = sessionStorage.getItem("raj_wSession");
      this.GameCmsService.heblounchSession(profile, this.keyname).subscribe((data) => {
        if (data.STATUS == "SUCCESS") {
          const gamelunchurl = data?.URL;
          if (gamelunchurl) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(gamelunchurl);
            this.moveToTop();
          }
        } else {
          this.messageservice.error("Failed", data.Message);
        }
      });
    } else if (this.playerLoggedIn == false) {
      this.showPopUp("LOGIN");
    }
  }
  habanaroGmOLD(gameName, gameType) {
    if (this.playerLoggedIn) {
      this.keyname = gameType;
      if (this.tokendata == null) {
        var profile = sessionStorage.getItem("raj_wSession");
        this.GameCmsService.heblounchSession(profile, this.keyname).subscribe((data) => {
          this.HBslotsdata = data;
          this.tokendata = this.HBslotsdata.TOKEN;
          if (this.tokendata) {
            let gamelunchurl = this.HBslotsdata.HABANERO_GAMING_URL + "brandid=" + this.HBslotsdata.BRAND_ID + "&keyname=" + this.keyname + "&token=" + this.HBslotsdata.TOKEN + "&mode=real&locale=en";
            this.urlSafeLauch(gamelunchurl);
          }
        });
      } else if (this.tokendata != null) {
        let gamelunchurl = this.HBslotsdata.HABANERO_GAMING_URL + "brandid=" + this.HBslotsdata.BRAND_ID + "&keyname=" + this.keyname + "&token=" + this.HBslotsdata.TOKEN + "&mode=real&locale=en";
        this.urlSafeLauch(gamelunchurl);
      }
    } else if (this.playerLoggedIn == false) {
      this.showPopUp("LOGIN");
    }
  }
  FivemenLauch(gameId) {
    if (this.playerLoggedIn) {
      let url = this.men5Url + "tableguid=1DFE4EC22BF545ECB37EAF2D07BE9515&OperatorId=" + this.operatorId + "&token=" + this.token + "&gameid=" + gameId + "&client=778877";
      this.urlSafeLauch(url);
    } else {
      this.showPopUp("LOGIN");
    }
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
      this.playerservice.closesession(body).subscribe((data) => {
        console.log(data);
      });
      this.playerservice.gameclose(session).subscribe((data) => {
        console.log(data);
      });
    }
  }
  onJDBGames(gType, mType) {
    if (this.playerLoggedIn) {
      this.GameCmsService.jdbLaunch(gType, mType).subscribe(((data) => {
        if (data.path) {
          this.urlSafeLauch(data.path);
        }
      }));
    } else {
      this.showPopUp("LOGIN");
    }
  }
  evolutiongms(name, gameName) {
    if (this.playerLoggedIn == true) {
      let wsessionid = sessionStorage.getItem("raj_wSession");
      this.GameCmsService.getEzugi(wsessionid).subscribe((data) => {
        let evourl = `${data.EZUGI_GAME_URL}platformId=0&operatorId=${data.EZUGI_OPERATOR_ID}&token=${data.EZUGI_TOKEN}&openTable=${name}`;
        this.urlSafeLauch(evourl);
      });
    } else {
      this.showPopUp("LOGIN");
    }
  }
  platipusLaunch(data) {
    if (this.playerLoggedIn) {
      let url = this.platipusGameUrl + "token=" + this.token + "&operatorID=" + this.operatorId + "&room=125&gameconfig=" + data;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      console.log(url);
      this.urlSafeLauch(url);
    } else {
      this.showPopUp("LOGIN");
    }
  }
  endrophinaLunchreal(data, game) {
    let gameid = data;
    if (this.playerLoggedIn) {
      this.GameCmsService.endorphinaGames(sessionStorage.getItem("raj_wSession"), gameid).subscribe((data2) => this.Endorphinares(data2));
    } else {
      this.showPopUp("LOGIN");
    }
  }
  Endorphinares(data) {
    console.log(data);
    let url = "https://cdn.endorphina.network/api/sessions/seamless/rest/v1?exit=" + data.exit + "&nodeId=" + data.nodeId + "&token=" + data.token + "&sign=" + data.sign;
    this.urlSafeLauch(url);
  }
  tonhornLaunch(data) {
    if (this.playerLoggedIn) {
      let url = "https://www.2vivo.com/FlashRunGame/Prod/RunTomHornGame.aspx?GameID=" + data + "&Token=" + this.token + "&lang=EN&OperatorID=" + this.operatorId;
      console.log(url);
      this.urlSafeLauch(url);
    } else {
      this.showPopUp("LOGIN");
    }
  }
  nucluesLaunch(data) {
    if (this.playerLoggedIn) {
      let url = "https://2vivo.com/FlashRunGame/set2/RunNucGame.aspx?token=" + this.token + "&operatorid=" + this.operatorId + "&GameID= " + data;
      console.log(url);
      this.urlSafeLauch(url);
    } else {
      this.showPopUp("LOGIN");
    }
  }
  onaviatrix(data) {
    if (!this.playerLoggedIn) {
      this.showPopUp("LOGIN");
      return;
    }
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
  }
  gvproviderapi(data) {
    if (!this.playerLoggedIn) {
      this.showPopUp("LOGIN");
      return;
    }
    let body = {
      gameId: data.id || data.gameId,
      provider: data.provider,
      language: "en"
    };
    this.playerservice.gvproviderapi(body).subscribe({
      next: (res) => {
        if (res?.token) {
          sessionStorage.setItem("closeGameSession", res.token);
        }
        if (res?.url) {
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(res.url);
          this.moveToTop();
        } else {
          this.showErrorPopup("Launch Failed", res?.message || "Unable to launch game");
        }
      }
    });
  }
  showErrorPopup(title, message) {
    this.messageservice.error(title, message);
  }
  on18Peaches(data) {
    if (!this.playerLoggedIn) {
      this.showPopUp("LOGIN");
      return;
    }
    let body = {
      "gameId": data.gameId,
      "provider": data.provider
    };
    this.playerservice.get18peaches(body).subscribe((data2) => {
      if (data2) {
        sessionStorage.setItem("closeGameSession", data2.token);
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data2.url);
        if (this.urlSafe) {
          this.moveToTop();
        }
      }
    });
  }
  onLaunchPragmatic(data, gameName) {
    if (this.playerLoggedIn) {
      this.playerservice.getPragmaticHit(data).subscribe((data2) => {
        console.log(data2);
        if (data2 && data2.gameURL) {
          let url = data2.gameURL;
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          if (this.urlSafe) {
            this.moveToTop();
          }
        }
      });
    } else {
      this.showPopUp("LOGIN");
    }
  }
  vivogameLaunch(game) {
    if (this.playerLoggedIn) {
      this.playerservice.gamelunallproviders(game).subscribe((response) => {
        if (response.url) {
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(response.url);
          if (this.urlSafe) {
            this.moveToTop();
          }
        }
        console.log(response);
      });
    } else {
      this.showPopUp("LOGIN");
    }
  }
  kingmidasmethod(game) {
    if (this.playerLoggedIn) {
      let body = {
        "gameId": game.gameId,
        "provider": game.provider
      };
      this.playerservice.kingmidaslaunch(body).subscribe((res) => {
        if (res.success) {
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(res.url);
          if (this.urlSafe) {
            this.moveToTop();
          }
        } else {
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
    this.\u0275fac = function SlotMachinePage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SlotMachinePage)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(GameLauncherService), \u0275\u0275directiveInject(PlayerService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(GameCmsService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(CommonUtilService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotMachinePage, selectors: [["app-slot-machine-page"]], viewQuery: function SlotMachinePage_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5, ViewContainerRef);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alertHost = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gameIframe = _t.first);
      }
    }, decls: 39, vars: 21, consts: [["alertHost", ""], ["gameIframe", ""], ["class", "loader-wrapper", "role", "status", "aria-live", "polite", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Breadcrumb", 1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "", "aria-hidden", "true", "width", "15"], [1, "main_heading", "live_casino_title"], [1, "main_para"], [1, "Provider_div"], [1, "Provider_scroll"], ["class", "Provider_btn", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "Maingame_row trending_scroll_container", 4, "ngIf"], ["class", "Maingame_row Avaitrix_row trending_scroll_container", 4, "ngIf"], ["class", "load_games", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "loader-wrapper"], ["width", "280", "alt", "Loading sports game, please wait", 3, "src"], ["type", "button", "aria-label", "Close sports game", 1, "game-close-btn", 3, "click"], ["id", "game_object", "scrolling", "auto", "frameborder", "0", "allowfullscreen", "", "title", "Slot game", 1, "game-iframe", 3, "src"], ["type", "button", "aria-label", "Toggle fullscreen mode", 1, "iframe_fullS_icon", "ml-4", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-expand-arrows-alt"], [1, "Provider_btn", 3, "click", "ngClass"], [1, "Maingame_row", "trending_scroll_container"], ["class", "Game_box", 3, "title", 4, "ngFor", "ngForOf"], [1, "Game_box", 3, "title"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "game_name_button"], [1, "Game_Name_head"], ["type", "button", 1, "button", "button_game", 3, "click", "aria-label"], ["loading", "lazy", "decoding", "async", 2, "height", "100%", 3, "src", "alt"], ["loading", "lazy", "decoding", "async", 2, "aspect-ratio", "3/3", 3, "src", "alt"], [1, "Maingame_row", "Avaitrix_row", "trending_scroll_container"], ["loading", "lazy", "decoding", "async", 2, "object-fit", "fill", 3, "src", "alt"], ["src", "assets/GameImgs/crash/aviatrix.png", "loading", "lazy", "decoding", "async", 2, "height", "100%", 3, "alt"], ["aria-hidden", "true", 1, "load_games"]], template: function SlotMachinePage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SlotMachinePage_ng_template_0_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "section");
        \u0275\u0275template(3, SlotMachinePage_div_3_Template, 2, 1, "div", 2)(4, SlotMachinePage_div_4_Template, 8, 1, "div", 3);
        \u0275\u0275elementStart(5, "div")(6, "nav", 4)(7, "span", 5);
        \u0275\u0275text(8, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "img", 6);
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "Slots ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "header")(13, "h2", 7);
        \u0275\u0275text(14, "Slots");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 8);
        \u0275\u0275text(16, "At Raj Poker, there are slots with big prizes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "div", 10);
        \u0275\u0275template(19, SlotMachinePage_button_19_Template, 2, 5, "button", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div");
        \u0275\u0275template(21, SlotMachinePage_div_21_Template, 2, 1, "div", 12)(22, SlotMachinePage_div_22_Template, 2, 1, "div", 12)(23, SlotMachinePage_div_23_Template, 2, 1, "div", 12)(24, SlotMachinePage_div_24_Template, 2, 1, "div", 12)(25, SlotMachinePage_div_25_Template, 2, 1, "div", 12)(26, SlotMachinePage_div_26_Template, 2, 1, "div", 12)(27, SlotMachinePage_div_27_Template, 2, 1, "div", 12)(28, SlotMachinePage_div_28_Template, 2, 1, "div", 12)(29, SlotMachinePage_div_29_Template, 2, 1, "div", 13)(30, SlotMachinePage_div_30_Template, 2, 1, "div", 12)(31, SlotMachinePage_div_31_Template, 2, 1, "div", 12)(32, SlotMachinePage_div_32_Template, 2, 1, "div", 12)(33, SlotMachinePage_div_33_Template, 2, 1, "div", 12)(34, SlotMachinePage_div_34_Template, 2, 1, "div", 12)(35, SlotMachinePage_div_35_Template, 2, 1, "div", 12)(36, SlotMachinePage_div_36_Template, 2, 1, "div", 12)(37, SlotMachinePage_div_37_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(38, SlotMachinePage_div_38_Template, 1, 0, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.responseLoader);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.urlSafe);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.ProviderList);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.ProviderName == "fivemen");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "habanero");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "jdb");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "spribe");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "netentgv" || ctx.ProviderName == "playtechgv");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "18peaches");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "redtiger");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "kingmidas");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "injoy");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "hotroad");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "yellowbat");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "gtf");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "amb");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "endorphina");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "pragmaticplay");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "tomhorn" || ctx.ProviderName == "nucleus" || ctx.ProviderName == "betsoft" || ctx.ProviderName == "platipus");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ProviderName == "aviatrix");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoadingMore);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink, FormsModule, RouterModule, NgxPaginationModule], styles: ['\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 24px;\n}\nheader[_ngcontent-%COMP%]   .live_casino_title[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899 0%,\n      #a855f7 50%,\n      #f59e0b 100%) !important;\n  -webkit-background-clip: text !important;\n  background-clip: text !important;\n  color: transparent !important;\n  text-shadow: 0 0 30px rgba(236, 72, 153, 0.4);\n}\n.Provider_div[_ngcontent-%COMP%] {\n  margin: 16px 0 24px 0;\n}\n.Provider_scroll[_ngcontent-%COMP%] {\n  background: rgba(28, 15, 38, 0.75) !important;\n  border: 1px solid rgba(236, 72, 153, 0.25) !important;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;\n}\n.Provider_scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899,\n      #a855f7) !important;\n}\n.Provider_btn[_ngcontent-%COMP%]:hover {\n  background: rgba(236, 72, 153, 0.15) !important;\n  border-color: rgba(236, 72, 153, 0.4) !important;\n  color: #ffffff !important;\n}\n.Provider_btn.Active[_ngcontent-%COMP%], \n.Active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899 0%,\n      #a855f7 50%,\n      #f59e0b 100%) !important;\n  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.5), 0 0 12px rgba(168, 85, 247, 0.4) !important;\n  color: #ffffff !important;\n}\n.Game_box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #1e122b 0%,\n      #120b1c 100%) !important;\n  border: 1px solid rgba(168, 85, 247, 0.2) !important;\n  border-radius: 16px !important;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5) !important;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) !important;\n}\n.Game_box[_ngcontent-%COMP%]::before {\n  content: "\\26a1  JACKPOT";\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #fef08a;\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(245, 158, 11, 0.4);\n  padding: 3px 8px;\n  border-radius: 20px;\n  backdrop-filter: blur(8px);\n  z-index: 2;\n  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);\n}\n.Game_box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px) scale(1.02) !important;\n  border-color: rgba(236, 72, 153, 0.6) !important;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.75), 0 0 24px rgba(236, 72, 153, 0.35) !important;\n}\n.Game_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  transition: transform 0.4s ease;\n}\n.Game_box[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.button_game[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899 0%,\n      #a855f7 50%,\n      #f59e0b 100%) !important;\n  box-shadow: 0 4px 14px rgba(236, 72, 153, 0.4) !important;\n  font-weight: 800 !important;\n  letter-spacing: 0.5px;\n}\n.button_game[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f472b6 0%,\n      #c084fc 50%,\n      #fbbf24 100%) !important;\n  box-shadow: 0 6px 22px rgba(236, 72, 153, 0.65), 0 0 14px rgba(245, 158, 11, 0.5) !important;\n  transform: translateY(-2px) !important;\n}\n.ngx-pagination[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  gap: 8px !important;\n  padding: 20px 0 !important;\n  flex-wrap: nowrap !important;\n}\n.ngx-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n  min-width: 38px !important;\n  height: 38px !important;\n  border-radius: 12px !important;\n  background: rgba(255, 255, 255, 0.05) !important;\n  border: 1px solid rgba(255, 255, 255, 0.1) !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  color: #cbd5e1 !important;\n  font-weight: 600 !important;\n  transition: all 0.25s ease !important;\n}\n.ngx-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(236, 72, 153, 0.2) !important;\n  border-color: rgba(236, 72, 153, 0.4) !important;\n  color: #ffffff !important;\n}\n.ngx-pagination[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899 0%,\n      #a855f7 100%) !important;\n  border-color: transparent !important;\n  color: #ffffff !important;\n  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.5) !important;\n}\n.ngx-pagination[_ngcontent-%COMP%]   .pagination-ellipsis[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.load_games[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #1a0f26;\n  width: 40px;\n  height: 40px;\n  border: 4px solid rgba(255, 255, 255, 0.15);\n  border-top: 4px solid #ec4899;\n  animation: _ngcontent-%COMP%_rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  display: flex;\n  margin: 30px auto;\n  box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=slot-machine-page.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlotMachinePage, [{
    type: Component,
    args: [{ standalone: true, selector: "app-slot-machine-page", imports: [CommonModule, RouterLink, FormsModule, RouterModule, NgxPaginationModule], template: `<ng-template #alertHost></ng-template>\r
<section>\r
    <div class="loader-wrapper" *ngIf="responseLoader" role="status" aria-live="polite">\r
        <img [src]="'/assets/giflogo.gif?' + loaderKey" width="280" alt="Loading sports game, please wait" />\r
    </div>\r
    <div *ngIf="urlSafe">\r
        <div>\r
            <button type="button" class="game-close-btn" aria-label="Close sports game" (click)="subtabClose()"> \u2715\r
            </button>\r
            <iframe #gameIframe id="game_object" class="game-iframe" scrolling="auto" frameborder="0" allowfullscreen\r
                title="Slot game" [src]="urlSafe"></iframe>\r
        </div>\r
        <button type="button" class="iframe_fullS_icon ml-4" aria-label="Toggle fullscreen mode"\r
            (click)="toggleFullScreen()">\r
\r
            <i class="fas fa-expand-arrows-alt" aria-hidden="true">\r
            </i>\r
\r
        </button>\r
    </div>\r
    <div>\r
\r
        <nav class="redirectline" aria-label="Breadcrumb"><span routerLink="/home">Home</span> <img\r
                src="assets/home_icons/arrow_right.png" alt="" aria-hidden="true" width="15"> <span>Slots\r
            </span> </nav>\r
\r
        <header>\r
            <h2 class="main_heading live_casino_title">Slots</h2>\r
            <p class="main_para">At Raj Poker, there are slots with big prizes</p>\r
        </header>\r
\r
        <div class="Provider_div">\r
            <div class="Provider_scroll">\r
                <button class="Provider_btn" *ngFor="let Provider of ProviderList"\r
                    [ngClass]="{ Active: ProviderName === Provider.name}" (click)="providerChange(Provider.name)"\r
                    [attr.aria-pressed]="ProviderName === Provider.name">\r
                    {{ Provider.name }}\r
                </button>\r
            </div>\r
        </div>\r
\r
        <div>\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'fivemen'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="{{CurrentDomain}}/slotimages/vivo/vivo_slots/{{game.gameName}}.png"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="FivemenLauch(game.gameId)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'habanero'">\r
                <article class="Game_box" *ngFor="let game of loadedGames" [title]="game.gameName">\r
                    <ng-container *ngIf="game.BrandGameId">\r
                        <img src="assets/games/habanero/{{game.KeyName}}_230.webp"\r
                            [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async"\r
                            style="height: 100%;" />\r
                        <div class="game_name_button">\r
                            <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                            <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                                (click)="habanaroGm(game.gameName,game.KeyName)">Lets Go!</button>\r
                        </div>\r
\r
                    </ng-container>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'jdb'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="{{CurrentDomain}}/slotimages/JDB/{{game.gameName}}.png"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" style="height: 100%;" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="onJDBGames(game.Gtype,game.Mtype)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'spribe'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="{{CurrentDomain}}/slotimages/Spribe/{{game.gameName}}.png"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" style="height: 100%;" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="onJDBGames(game.Gtype,game.Mtype)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container"\r
                *ngIf="ProviderName == 'netentgv' || ProviderName == 'playtechgv'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <!-- <img [src]="game.images" [alt]="game.title + ' slot game'" loading="lazy" decoding="async" /> -->\r
  <img\r
  [src]="'assets/GameImgs/' + ProviderName + '/' + game.gameId + '_230.webp'"style="aspect-ratio: 3/3; "\r
  [alt]="game.gameName + ' slot game'"\r
  loading="lazy"\r
  decoding="async"\r
/>\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.title }}"\r
                            (click)="gvproviderapi(game)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article> \r
            </div>\r
            <div class="Maingame_row trending_scroll_container"\r
                *ngIf="ProviderName == '18peaches'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img [src]="game.image" [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="on18Peaches(game)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'redtiger'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="{{CurrentDomain}}/slotimages/Redtiger/{{game.gameName}}.png"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" style="height: 100%;" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="evolutiongms(game.openTable,game)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'kingmidas'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="assets/GameImgs/kingmidas/{{game.gameName}}.jpg"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" style="height: 100%;" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="kingmidasmethod(game)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row Avaitrix_row trending_scroll_container" *ngIf="ProviderName == 'injoy'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="{{CurrentDomain}}/slotimages/Injoy/{{game.gameName}}.png"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" style="height: 100%;" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="onJDBGames(game.Gtype,game.Mtype)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'hotroad'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="{{CurrentDomain}}/slotimages/HGR/{{game.gameName}}.png"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" style="height: 100%;" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="onJDBGames(game.Gtype,game.Mtype)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'yellowbat'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="{{CurrentDomain}}/slotimages/YB/{{game.gameName}}.png"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" style="height: 100%;" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="onJDBGames(game.Gtype,game.Mtype)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'gtf'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="{{CurrentDomain}}/slotimages/GTF/{{game.gameName}}.png"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" style="height: 100%;" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="onJDBGames(game.Gtype,game.Mtype)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'amb'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="assets/GameImgs/AMB/{{game.gameName}}.png" [alt]="game.gameName + ' slot game'"\r
                        style="height: 100%;" loading="lazy" decoding="async" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="onJDBGames(game.Gtype,game.Mtype)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'endorphina'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="https://luckhunter.prep4.live/slotimages/Endophina/{{game.gameName}}.png"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="endrophinaLunchreal(game.gameId, game.gameName)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container" *ngIf="ProviderName == 'pragmaticplay'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="{{CurrentDomain}}/slotimages/pragmaticplay/{{game.gameName}}.png"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async" style="height: 100%;" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="onLaunchPragmatic(game.gameId, game.gameName)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
            <div class="Maingame_row trending_scroll_container"\r
                *ngIf="ProviderName == 'tomhorn' || ProviderName == 'nucleus' || ProviderName == 'betsoft' || ProviderName == 'platipus'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="assets/GameImgs/vivogaming/{{ProviderName}}/{{game.gameId}}.jpg"\r
                        [alt]="game.gameName + ' slot game'" loading="lazy" decoding="async"\r
                        style="object-fit: fill;" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="vivogameLaunch(game)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
\r
            <div class="Maingame_row Avaitrix_row trending_scroll_container" *ngIf="ProviderName == 'aviatrix'">\r
                <article class="Game_box" *ngFor="let game of loadedGames " [title]="game.gameName">\r
                    <img src="assets/GameImgs/crash/aviatrix.png" [alt]="game.gameName + ' slot game'"\r
                        style="height: 100%;" loading="lazy" decoding="async" />\r
                    <div class="game_name_button">\r
                        <h5 class="Game_Name_head">{{game.gameName}}</h5>\r
                        <button type="button" class="button button_game" aria-label="Play {{ game.gameName }}"\r
                            (click)="onaviatrix(game)">Lets\r
                            Go!</button>\r
                    </div>\r
                </article>\r
            </div>\r
        </div>\r
    </div>\r
</section>\r
<div *ngIf="isLoadingMore" class="load_games" aria-hidden="true"></div>`, styles: ['/* src/app/pages/slot-machine-page/slot-machine-page.css */\nheader {\n  position: relative;\n  margin-bottom: 24px;\n}\nheader .live_casino_title {\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899 0%,\n      #a855f7 50%,\n      #f59e0b 100%) !important;\n  -webkit-background-clip: text !important;\n  background-clip: text !important;\n  color: transparent !important;\n  text-shadow: 0 0 30px rgba(236, 72, 153, 0.4);\n}\n.Provider_div {\n  margin: 16px 0 24px 0;\n}\n.Provider_scroll {\n  background: rgba(28, 15, 38, 0.75) !important;\n  border: 1px solid rgba(236, 72, 153, 0.25) !important;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;\n}\n.Provider_scroll::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899,\n      #a855f7) !important;\n}\n.Provider_btn:hover {\n  background: rgba(236, 72, 153, 0.15) !important;\n  border-color: rgba(236, 72, 153, 0.4) !important;\n  color: #ffffff !important;\n}\n.Provider_btn.Active,\n.Active {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899 0%,\n      #a855f7 50%,\n      #f59e0b 100%) !important;\n  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.5), 0 0 12px rgba(168, 85, 247, 0.4) !important;\n  color: #ffffff !important;\n}\n.Game_box {\n  background:\n    linear-gradient(\n      180deg,\n      #1e122b 0%,\n      #120b1c 100%) !important;\n  border: 1px solid rgba(168, 85, 247, 0.2) !important;\n  border-radius: 16px !important;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5) !important;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) !important;\n}\n.Game_box::before {\n  content: "\\26a1  JACKPOT";\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #fef08a;\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(245, 158, 11, 0.4);\n  padding: 3px 8px;\n  border-radius: 20px;\n  backdrop-filter: blur(8px);\n  z-index: 2;\n  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);\n}\n.Game_box:hover {\n  transform: translateY(-8px) scale(1.02) !important;\n  border-color: rgba(236, 72, 153, 0.6) !important;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.75), 0 0 24px rgba(236, 72, 153, 0.35) !important;\n}\n.Game_box img {\n  border-radius: 12px;\n  transition: transform 0.4s ease;\n}\n.Game_box:hover img {\n  transform: scale(1.05);\n}\n.button_game {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899 0%,\n      #a855f7 50%,\n      #f59e0b 100%) !important;\n  box-shadow: 0 4px 14px rgba(236, 72, 153, 0.4) !important;\n  font-weight: 800 !important;\n  letter-spacing: 0.5px;\n}\n.button_game:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f472b6 0%,\n      #c084fc 50%,\n      #fbbf24 100%) !important;\n  box-shadow: 0 6px 22px rgba(236, 72, 153, 0.65), 0 0 14px rgba(245, 158, 11, 0.5) !important;\n  transform: translateY(-2px) !important;\n}\n.ngx-pagination {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  gap: 8px !important;\n  padding: 20px 0 !important;\n  flex-wrap: nowrap !important;\n}\n.ngx-pagination li {\n  white-space: nowrap !important;\n  min-width: 38px !important;\n  height: 38px !important;\n  border-radius: 12px !important;\n  background: rgba(255, 255, 255, 0.05) !important;\n  border: 1px solid rgba(255, 255, 255, 0.1) !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  color: #cbd5e1 !important;\n  font-weight: 600 !important;\n  transition: all 0.25s ease !important;\n}\n.ngx-pagination li:hover {\n  background: rgba(236, 72, 153, 0.2) !important;\n  border-color: rgba(236, 72, 153, 0.4) !important;\n  color: #ffffff !important;\n}\n.ngx-pagination .current {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899 0%,\n      #a855f7 100%) !important;\n  border-color: transparent !important;\n  color: #ffffff !important;\n  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.5) !important;\n}\n.ngx-pagination .pagination-ellipsis {\n  display: none !important;\n}\n.load_games {\n  border-radius: 50%;\n  background-color: #1a0f26;\n  width: 40px;\n  height: 40px;\n  border: 4px solid rgba(255, 255, 255, 0.15);\n  border-top: 4px solid #ec4899;\n  animation: rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  display: flex;\n  margin: 30px auto;\n  box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);\n}\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=slot-machine-page.css.map */\n'] }]
  }], () => [{ type: Store }, { type: Router }, { type: GameLauncherService }, { type: PlayerService }, { type: MessageService }, { type: GameCmsService }, { type: DomSanitizer }, { type: ComponentFactoryResolver$1 }, { type: CommonUtilService }], { alertHost: [{
    type: ViewChild,
    args: ["alertHost", { read: ViewContainerRef }]
  }], gameIframe: [{
    type: ViewChild,
    args: ["gameIframe", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotMachinePage, { className: "SlotMachinePage", filePath: "src/app/pages/slot-machine-page/slot-machine-page.ts", lineNumber: 28 });
})();
export {
  SlotMachinePage
};
//# sourceMappingURL=chunk-7SWEBU37.js.map
