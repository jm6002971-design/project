import {
  CommonUtilService
} from "./chunk-BI23JTGF.js";
import {
  PlayerService
} from "./chunk-HXFVUPJ2.js";
import "./chunk-2Y7B2BAT.js";
import "./chunk-V7ZNEVP2.js";
import "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S5ZOBF7L.js";
import {
  Component,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/pages/leaderboard-page/leaderboard-page.ts
function LeaderboardPage_div_6_tr_16_i_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 22);
  }
}
function LeaderboardPage_div_6_tr_16_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "View");
    \u0275\u0275elementEnd();
  }
}
function LeaderboardPage_div_6_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 16)(1, "td", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 11)(6, "button", 19);
    \u0275\u0275listener("click", function LeaderboardPage_div_6_tr_16_Template_button_click_6_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.getPlayers(item_r2.id));
    });
    \u0275\u0275template(7, LeaderboardPage_div_6_tr_16_i_7_Template, 1, 0, "i", 20)(8, LeaderboardPage_div_6_tr_16_span_8_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r4 * 50 + "ms");
    \u0275\u0275classProp("active-row", ctx_r2.activeRowId === item_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.name.split(" - ")[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.participants, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.loadingRowId === item_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingRowId === item_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingRowId !== item_r2.id);
  }
}
function LeaderboardPage_div_6_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div")(11, "div")(12, "div")(13, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 25);
    \u0275\u0275text(15, "Fetching current standings...");
    \u0275\u0275elementEnd()();
  }
}
function LeaderboardPage_div_6_div_22_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 16)(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 10)(8, "span", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r6 * 40 + "ms");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", p_r5.position <= 3 ? "var(--secondary-clr)" : "#a0aec0");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", p_r5.position, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.nickName || p_r5.nickname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r5.points, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r5.payoutState || "Active", " ");
  }
}
function LeaderboardPage_div_6_div_22_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 32);
    \u0275\u0275listener("click", function LeaderboardPage_div_6_div_22_div_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275element(2, "i", 33);
    \u0275\u0275text(3, " Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5, " Page ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " of ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 32);
    \u0275\u0275listener("click", function LeaderboardPage_div_6_div_22_div_15_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(12, " Next ");
    \u0275\u0275element(13, "i", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.currentPage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
function LeaderboardPage_div_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "table")(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Rank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Player Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 10);
    \u0275\u0275text(10, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 10);
    \u0275\u0275text(12, "Payout State");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, LeaderboardPage_div_6_div_22_tr_14_Template, 10, 8, "tr", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, LeaderboardPage_div_6_div_22_div_15_Template, 14, 4, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.paginatedPlayers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.totalPages > 1);
  }
}
function LeaderboardPage_div_6_ng_template_23_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No participant data available for this leaderboard.");
    \u0275\u0275elementEnd()();
  }
}
function LeaderboardPage_div_6_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LeaderboardPage_div_6_ng_template_23_div_0_Template, 4, 0, "div", 36);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r2.tableloader);
  }
}
function LeaderboardPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h2", 7);
    \u0275\u0275element(3, "i", 8);
    \u0275\u0275text(4, " Active Leaderboards ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "table")(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 10);
    \u0275\u0275text(12, "Players");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 11);
    \u0275\u0275text(14, "Details");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, LeaderboardPage_div_6_tr_16_Template, 9, 9, "tr", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 6)(18, "h2", 7);
    \u0275\u0275element(19, "i", 13);
    \u0275\u0275text(20, " Standings ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, LeaderboardPage_div_6_div_21_Template, 16, 0, "div", 14)(22, LeaderboardPage_div_6_div_22_Template, 16, 2, "div", 15)(23, LeaderboardPage_div_6_ng_template_23_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noData_r8 = \u0275\u0275reference(24);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r2.filteredSettings);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.tableloader);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.tableloader && (ctx_r2.showPlayerdata == null ? null : ctx_r2.showPlayerdata.length) > 0)("ngIfElse", noData_r8);
  }
}
function LeaderboardPage_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275elementStart(2, "h3", 41);
    \u0275\u0275text(3, "No Active Tournaments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 42);
    \u0275\u0275text(5, "Check back later for new events and leaderboard challenges.");
    \u0275\u0275elementEnd()();
  }
}
var LeaderboardPage = class _LeaderboardPage {
  constructor(playerservies, commonUtilSvc) {
    this.playerservies = playerservies;
    this.commonUtilSvc = commonUtilSvc;
    this.tableloader = false;
    this.loadingRowId = null;
    this.activeRowId = null;
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 0;
    this.paginatedPlayers = [];
  }
  ngOnInit() {
    this.playerservies.listleaderboard().subscribe((data) => {
      this.filteredSettings = data.settings.filter((x) => x.visible && x.participants > 0);
      if (this.filteredSettings.length > 0) {
        const rawId = this.filteredSettings[0].id;
        this.activeRowId = rawId;
        let body = {
          settingsId: rawId
        };
        this.tableloader = true;
        this.playerservies.leader(body).subscribe((players) => {
          if (players) {
            this.tableloader = false;
            const key = Object.keys(players.settingsIdVsParticipants)[0];
            this.showPlayerdata = players.settingsIdVsParticipants[key];
            this.currentPage = 1;
            this.updatePagination();
          }
        });
      }
    });
  }
  getPlayers(id) {
    this.tableloader = true;
    this.loadingRowId = id;
    this.activeRowId = id;
    let body = { settingsId: id };
    this.playerservies.leader(body).subscribe((res) => {
      if (res) {
        this.tableloader = false;
        this.loadingRowId = null;
        const key = Object.keys(res.settingsIdVsParticipants)[0];
        this.showPlayerdata = res.settingsIdVsParticipants[key];
        this.currentPage = 1;
        this.updatePagination();
      }
    });
  }
  updatePagination() {
    if (!this.showPlayerdata || this.showPlayerdata.length === 0) {
      this.paginatedPlayers = [];
      return;
    }
    this.totalPages = Math.ceil(this.showPlayerdata.length / this.pageSize);
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedPlayers = this.showPlayerdata.slice(start, end);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
  static {
    this.\u0275fac = function LeaderboardPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LeaderboardPage)(\u0275\u0275directiveInject(PlayerService), \u0275\u0275directiveInject(CommonUtilService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaderboardPage, selectors: [["app-leaderboard-page"]], decls: 9, vars: 2, consts: [["emptyState", ""], ["noData", ""], [1, "leaderboard-page-container"], [1, "leaderboard-header"], ["class", "leaderboard-grid", 4, "ngIf", "ngIfElse"], [1, "leaderboard-grid"], [1, "leaderboard-card"], [1, "leaderboard-card-title"], [1, "fas", "fa-trophy"], [1, "table-wrapper"], [2, "text-align", "right"], [2, "text-align", "center"], ["class", "row-animate", 3, "active-row", "animation-delay", 4, "ngFor", "ngForOf"], [1, "fas", "fa-medal"], ["class", "loader-container", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "row-animate"], [2, "font-weight", "600"], [2, "text-align", "right", "font-variant-numeric", "tabular-nums"], ["type", "button", 1, "btn-view-participants", 3, "click", "disabled"], ["class", "fa fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], [1, "fa", "fa-spinner", "fa-spin"], [1, "loader-container"], [1, "lds-spinner"], [1, "loader-text"], ["class", "row-animate", 3, "animation-delay", 4, "ngFor", "ngForOf"], ["class", "pagination-controls", 4, "ngIf"], [2, "font-weight", "700"], [2, "text-align", "right", "font-weight", "700", "color", "var(--secondary-clr)", "font-variant-numeric", "tabular-nums"], [2, "font-size", "12px", "padding", "4px 8px", "border-radius", "4px", "background", "rgba(255,255,255,0.05)"], [1, "pagination-controls"], ["type", "button", 1, "pagination-btn", 3, "click", "disabled"], [1, "fas", "fa-chevron-left"], [1, "pagination-info"], [1, "fas", "fa-chevron-right"], ["class", "no-data-state", 4, "ngIf"], [1, "no-data-state"], [1, "fas", "fa-users-slash"], [1, "leaderboard-card", 2, "text-align", "center", "padding", "60px 20px"], [1, "fas", "fa-calendar-times", 2, "font-size", "48px", "color", "var(--secondary-clr)", "opacity", "0.8", "margin-bottom", "16px"], [2, "font-size", "20px", "margin", "0 0 8px 0"], [2, "color", "#a0aec0", "margin", "0"]], template: function LeaderboardPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1");
        \u0275\u0275text(3, "Tournaments & Leaderboards");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Compete with players worldwide and track your real-time rankings");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, LeaderboardPage_div_6_Template, 25, 4, "div", 4)(7, LeaderboardPage_ng_template_7_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const emptyState_r9 = \u0275\u0275reference(8);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (ctx.filteredSettings == null ? null : ctx.filteredSettings.length) > 0 || ctx.tableloader)("ngIfElse", emptyState_r9);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.leaderboard-page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  padding: 40px 24px;\n  color: #ffffff;\n  font-family:\n    "Outfit",\n    "Inter",\n    sans-serif;\n  box-sizing: border-box;\n}\n.leaderboard-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n  animation: _ngcontent-%COMP%_fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.leaderboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 800;\n  margin: 0 0 12px 0;\n  background: var(--gradient-primary, linear-gradient(90deg, #8e6a40, #e9cc8a));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  text-shadow: 0 2px 20px rgba(233, 204, 138, 0.15);\n}\n.leaderboard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a0aec0;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n}\n.leaderboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr 1.9fr;\n  gap: 32px;\n  align-items: start;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;\n}\n.leaderboard-card[_ngcontent-%COMP%] {\n  background: rgba(20, 20, 20, 0.6);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);\n  padding: 28px;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.leaderboard-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: var(--secondary-clr, #e9cc8a);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  padding-bottom: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.leaderboard-card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dd381c;\n  text-shadow: 0 0 10px rgb(172 82 72);\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  border-radius: 12px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\nth[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  color: #a0aec0;\n  font-weight: 600;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 16px 20px;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.08);\n}\ntd[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  color: #e2e8f0;\n  transition: all 0.2s ease;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.02);\n}\ntr.active-row[_ngcontent-%COMP%] {\n  background: rgba(233, 204, 138, 0.08) !important;\n  border-left: 3px solid var(--secondary-clr, #e9cc8a);\n}\ntr.active-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--secondary-clr, #e9cc8a);\n}\n.row-animate[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(10px);\n  animation: _ngcontent-%COMP%_slideRowIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_slideRowIn {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.btn-view-participants[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-width: 110px;\n  box-sizing: border-box;\n}\n.btn-view-participants[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gradient-primary, linear-gradient(90deg, #8e6a40, #e9cc8a));\n  border-color: transparent;\n  color: #141414;\n  box-shadow: 0 4px 15px rgba(233, 204, 138, 0.3);\n}\n.btn-view-participants[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.active-caret[_ngcontent-%COMP%] {\n  color: var(--secondary-clr, #e9cc8a);\n  animation: _ngcontent-%COMP%_pulseCaret 1.5s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_pulseCaret {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(-4px);\n  }\n}\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 0;\n  gap: 16px;\n}\n.loader-text[_ngcontent-%COMP%] {\n  color: #a0aec0;\n  font-size: 14px;\n}\n.lds-spinner[_ngcontent-%COMP%] {\n  color: var(--secondary-clr, #e9cc8a);\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform-origin: 40px 40px;\n  animation: _ngcontent-%COMP%_lds-spinner 1.2s linear infinite;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: var(--secondary-clr, #e9cc8a);\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes _ngcontent-%COMP%_lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 24px;\n}\n.pagination-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #a0aec0;\n}\n.no-data-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #718096;\n}\n.no-data-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 12px;\n  opacity: 0.7;\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.gradient-star[_ngcontent-%COMP%] {\n  color: var(--secondary-clr, #e9cc8a);\n  margin-right: 4px;\n}\n@media (max-width: 1024px) {\n  .leaderboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .leaderboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n}\n@media (max-width: 768px) {\n  .leaderboard-page-container[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .leaderboard-header[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n  }\n  .leaderboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .leaderboard-card[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  th[_ngcontent-%COMP%], \n   td[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=leaderboard-page.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaderboardPage, [{
    type: Component,
    args: [{ selector: "app-leaderboard-page", standalone: true, imports: [CommonModule], template: `<div class="leaderboard-page-container">
    <div class="leaderboard-header">
        <h1>Tournaments & Leaderboards</h1>
        <p>Compete with players worldwide and track your real-time rankings</p>
    </div>

    <div class="leaderboard-grid" *ngIf="filteredSettings?.length > 0 || tableloader; else emptyState">
        <!-- Left Side: Leaderboard Active List -->
        <div class="leaderboard-card">
            <h2 class="leaderboard-card-title">
                <i class="fas fa-trophy"></i> Active Leaderboards
            </h2>
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th style="text-align: right;">Players</th>
                            <th style="text-align: center;">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let item of filteredSettings; let i = index"
                            class="row-animate"
                            [class.active-row]="activeRowId === item.id"
                            [style.animation-delay]="i * 50 + 'ms'">
                            <td style="font-weight: 600;">{{ item.name.split(' - ')[0] }}</td>
                            <td style="text-align: right; font-variant-numeric: tabular-nums;">
                                {{ item.participants }}
                            </td>
                            <td style="text-align: center;">
                                <button
                                    type="button"
                                    class="btn-view-participants"
                                    [disabled]="loadingRowId === item.id"
                                    (click)="getPlayers(item.id)"
                                >
                                    <i *ngIf="loadingRowId === item.id" class="fa fa-spinner fa-spin"></i>
                                    <span *ngIf="loadingRowId !== item.id">View</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Right Side: Player Standings -->
        <div class="leaderboard-card">
            <h2 class="leaderboard-card-title">
                <i class="fas fa-medal"></i> Standings
            </h2>
            
            <div class="loader-container" *ngIf="tableloader">
                <div class="lds-spinner">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
                <span class="loader-text">Fetching current standings...</span>
            </div>

            <div *ngIf="!tableloader && showPlayerdata?.length > 0; else noData">
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Player Name</th>
                                <th style="text-align: right;">Points</th>
                                <th style="text-align: right;">Payout State</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ngFor="let p of paginatedPlayers; let i = index"
                                class="row-animate"
                                [style.animation-delay]="i * 40 + 'ms'">
                                <td style="font-weight: 700;" [style.color]="p.position <= 3 ? 'var(--secondary-clr)' : '#a0aec0'">
                                    #{{ p.position }}
                                </td>
                                <td style="font-weight: 600;">{{ p.nickName || p.nickname }}</td>
                                <td style="text-align: right; font-weight: 700; color: var(--secondary-clr); font-variant-numeric: tabular-nums;">
                                    {{ p.points }}
                                </td>
                                <td style="text-align: right;">
                                    <span style="font-size: 12px; padding: 4px 8px; border-radius: 4px; background: rgba(255,255,255,0.05);">
                                        {{ p.payoutState || 'Active' }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <div class="pagination-controls" *ngIf="totalPages > 1">
                    <button
                        type="button"
                        class="pagination-btn"
                        (click)="prevPage()"
                        [disabled]="currentPage === 1"
                    >
                        <i class="fas fa-chevron-left"></i> Prev
                    </button>
                    <span class="pagination-info">
                        Page <strong>{{ currentPage }}</strong> of <strong>{{ totalPages }}</strong>
                    </span>
                    <button
                        type="button"
                        class="pagination-btn"
                        (click)="nextPage()"
                        [disabled]="currentPage === totalPages"
                    >
                        Next <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <ng-template #noData>
                <div class="no-data-state" *ngIf="!tableloader">
                    <i class="fas fa-users-slash"></i>
                    <p>No participant data available for this leaderboard.</p>
                </div>
            </ng-template>
        </div>
    </div>

    <ng-template #emptyState>
        <div class="leaderboard-card" style="text-align: center; padding: 60px 20px;">
            <i class="fas fa-calendar-times" style="font-size: 48px; color: var(--secondary-clr); opacity: 0.8; margin-bottom: 16px;"></i>
            <h3 style="font-size: 20px; margin: 0 0 8px 0;">No Active Tournaments</h3>
            <p style="color: #a0aec0; margin: 0;">Check back later for new events and leaderboard challenges.</p>
        </div>
    </ng-template>
</div>
`, styles: ['/* src/app/pages/leaderboard-page/leaderboard-page.css */\n.leaderboard-page-container {\n  width: 100%;\n  margin: 0 auto;\n  padding: 40px 24px;\n  color: #ffffff;\n  font-family:\n    "Outfit",\n    "Inter",\n    sans-serif;\n  box-sizing: border-box;\n}\n.leaderboard-header {\n  text-align: center;\n  margin-bottom: 48px;\n  animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.leaderboard-header h1 {\n  font-size: 42px;\n  font-weight: 800;\n  margin: 0 0 12px 0;\n  background: var(--gradient-primary, linear-gradient(90deg, #8e6a40, #e9cc8a));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  text-shadow: 0 2px 20px rgba(233, 204, 138, 0.15);\n}\n.leaderboard-header p {\n  color: #a0aec0;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n}\n.leaderboard-grid {\n  display: grid;\n  grid-template-columns: 1.1fr 1.9fr;\n  gap: 32px;\n  align-items: start;\n  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;\n}\n.leaderboard-card {\n  background: rgba(20, 20, 20, 0.6);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);\n  padding: 28px;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.leaderboard-card-title {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 24px 0;\n  color: var(--secondary-clr, #e9cc8a);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  padding-bottom: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.leaderboard-card-title i {\n  color: #dd381c;\n  text-shadow: 0 0 10px rgb(172 82 72);\n}\n.table-wrapper {\n  width: 100%;\n  overflow-x: auto;\n  border-radius: 12px;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\nth {\n  background: rgba(255, 255, 255, 0.03);\n  color: #a0aec0;\n  font-weight: 600;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 16px 20px;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.08);\n}\ntd {\n  padding: 16px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  color: #e2e8f0;\n  transition: all 0.2s ease;\n}\ntbody tr {\n  transition: background-color 0.2s ease;\n}\ntbody tr:hover {\n  background-color: rgba(255, 255, 255, 0.02);\n}\ntr.active-row {\n  background: rgba(233, 204, 138, 0.08) !important;\n  border-left: 3px solid var(--secondary-clr, #e9cc8a);\n}\ntr.active-row td {\n  color: var(--secondary-clr, #e9cc8a);\n}\n.row-animate {\n  opacity: 0;\n  transform: translateY(10px);\n  animation: slideRowIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes slideRowIn {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.btn-view-participants {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-width: 110px;\n  box-sizing: border-box;\n}\n.btn-view-participants:hover:not(:disabled) {\n  background: var(--gradient-primary, linear-gradient(90deg, #8e6a40, #e9cc8a));\n  border-color: transparent;\n  color: #141414;\n  box-shadow: 0 4px 15px rgba(233, 204, 138, 0.3);\n}\n.btn-view-participants:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.active-caret {\n  color: var(--secondary-clr, #e9cc8a);\n  animation: pulseCaret 1.5s infinite ease-in-out;\n}\n@keyframes pulseCaret {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(-4px);\n  }\n}\n.loader-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 0;\n  gap: 16px;\n}\n.loader-text {\n  color: #a0aec0;\n  font-size: 14px;\n}\n.lds-spinner {\n  color: var(--secondary-clr, #e9cc8a);\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n.lds-spinner div:after {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: var(--secondary-clr, #e9cc8a);\n}\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 24px;\n}\n.pagination-btn {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-btn:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.pagination-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination-info {\n  font-size: 14px;\n  color: #a0aec0;\n}\n.no-data-state {\n  text-align: center;\n  padding: 40px 20px;\n  color: #718096;\n}\n.no-data-state i {\n  font-size: 40px;\n  margin-bottom: 12px;\n  opacity: 0.7;\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.gradient-star {\n  color: var(--secondary-clr, #e9cc8a);\n  margin-right: 4px;\n}\n@media (max-width: 1024px) {\n  .leaderboard-grid {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .leaderboard-header h1 {\n    font-size: 34px;\n  }\n}\n@media (max-width: 768px) {\n  .leaderboard-page-container {\n    padding: 0px;\n  }\n  .leaderboard-header {\n    margin-bottom: 32px;\n  }\n  .leaderboard-header h1 {\n    font-size: 28px;\n  }\n  .leaderboard-card {\n    padding: 10px;\n  }\n  th,\n  td {\n    padding: 12px 14px;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=leaderboard-page.css.map */\n'] }]
  }], () => [{ type: PlayerService }, { type: CommonUtilService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaderboardPage, { className: "LeaderboardPage", filePath: "src/app/pages/leaderboard-page/leaderboard-page.ts", lineNumber: 13 });
})();
export {
  LeaderboardPage
};
//# sourceMappingURL=chunk-PPLMIHCX.js.map
