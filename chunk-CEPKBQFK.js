import {
  PlayerGetProfile,
  ResetState
} from "./chunk-PYDFV3LO.js";
import {
  CommonUtilService
} from "./chunk-BI23JTGF.js";
import {
  CashierGetBalanceStart
} from "./chunk-PDHHGWHH.js";
import {
  PlayerService
} from "./chunk-HXFVUPJ2.js";
import {
  FormsModule
} from "./chunk-FAEKDNT6.js";
import "./chunk-2Y7B2BAT.js";
import {
  Store
} from "./chunk-V7ZNEVP2.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-S5ZOBF7L.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/pages/dashboard/balance/balance.ts
function Balance_td_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.preferredBalanceUSD == null ? null : ctx_r0.preferredBalanceUSD.cash == null ? null : ctx_r0.preferredBalanceUSD.cash.value, " ");
  }
}
function Balance_td_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.preferredBalanceUSD == null ? null : ctx_r0.preferredBalanceUSD.bonus == null ? null : ctx_r0.preferredBalanceUSD.bonus.value, " ");
  }
}
function Balance_td_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.preferredBalanceUSD == null ? null : ctx_r0.preferredBalanceUSD.cashInPlay == null ? null : ctx_r0.preferredBalanceUSD.cashInPlay.value, " ");
  }
}
function Balance_td_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", (ctx_r0.preferredBalanceUSD == null ? null : ctx_r0.preferredBalanceUSD.cash == null ? null : ctx_r0.preferredBalanceUSD.cash.value) + (ctx_r0.preferredBalanceUSD == null ? null : ctx_r0.preferredBalanceUSD.bonus == null ? null : ctx_r0.preferredBalanceUSD.bonus.value) + (ctx_r0.preferredBalanceUSD == null ? null : ctx_r0.preferredBalanceUSD.cashInPlay == null ? null : ctx_r0.preferredBalanceUSD.cashInPlay.value), " ");
  }
}
function Balance_tr_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vipS_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vipS_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" You need to earn ", \u0275\u0275pipeBind2(5, 4, vipS_r2 == null ? null : vipS_r2.compPoints, "1.2-2"), " Rake back points by ", \u0275\u0275pipeBind3(6, 7, ctx_r0.cleanDate(vipS_r2 == null ? null : vipS_r2.endDate), "medium", "local"), " to reach Level ", vipS_r2 == null ? null : vipS_r2.name, " ");
  }
}
function Balance_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "img", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", "/assets/giflogo.gif?" + ctx_r0.loaderKey, \u0275\u0275sanitizeUrl);
  }
}
var Balance = class _Balance {
  constructor(store, commonUtilSer, playerService) {
    this.store = store;
    this.commonUtilSer = commonUtilSer;
    this.playerService = playerService;
    this.preferredBalanceUSD = [];
    this.playerLoggedIn = false;
    this.profileName = sessionStorage.getItem("profile");
    this.bonus = 0;
    this.inPlay = 0;
    this.total = 0;
    this.vipPoints = 0;
    this.vipPointsFilter = [];
    this.vipNameFilter = [];
    this.vipObj = [];
    this.vipLevels = [];
    this.vipLevelPoints = [];
    this.isError = false;
    this.playerLevelloader = true;
    this.errMsg = "";
    this.responseLoader = false;
    this.loaderKey = Date.now();
  }
  ngOnInit() {
    this.moveToTop();
    this.showLoader();
    this.loginSub = this.store.select("loginState").subscribe((loginState) => {
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.store.dispatch(new CashierGetBalanceStart());
          this.store.dispatch(new PlayerGetProfile());
        }
      }
    });
    this.store.dispatch(new ResetState());
    this.storeSub = this.store.select("cashierState").subscribe((cashierState) => {
      if (cashierState.balance) {
        console.log(cashierState.balance);
        if (cashierState.balance.success == true) {
          this.walleteInfo = cashierState.balance.values;
          console.log(this.walleteInfo);
          if (this.walleteInfo) {
            setTimeout(() => {
              this.loadWalletsData(this.walleteInfo);
            }, 500);
            this.loadWalletsData(this.walleteInfo);
            for (let wallete of this.walleteInfo) {
              if (wallete.preferred === true) {
                this.preferredBalance = wallete;
                break;
              }
            }
          }
        } else if (cashierState.balance.success == false) {
          this.setError(cashierState.balance.description);
        }
      }
    });
    this.profilestoreSub = this.store.select("playerState").subscribe((playerState) => {
      console.log(playerState);
      if (playerState.profile) {
        this.profile = playerState.profile;
        this.profileName = this.profile.login;
      }
    });
    this.getPlayerLevel();
  }
  showLoader() {
    this.loaderKey = Date.now();
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
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
  loadWalletsData(apiRes) {
    if (this.walleteInfo) {
      for (let wallete of this.walleteInfo) {
        if (wallete.symbol === "$") {
          this.preferredBalanceUSD = wallete;
        }
      }
    }
    let prefCurrency = this.commonUtilSer.loadAppPreferredCurrency(apiRes);
    let availableAmountblc = this.commonUtilSer.loadCashbalanceBasedOnCurrency(apiRes, prefCurrency, "cash");
    var availableLocal = availableAmountblc.toString();
    this.availableAmount = Number(availableLocal).toLocaleString();
    let bonusblc = this.commonUtilSer.loadCashbalanceBasedOnCurrency(apiRes, prefCurrency, "bonus");
    var bonusLocal = bonusblc.toString();
    this.bonus = Number(bonusLocal).toLocaleString();
    this.inPlay = this.commonUtilSer.loadCashbalanceBasedOnCurrency(apiRes, prefCurrency, "cashInPlay");
    let totalblc = this.commonUtilSer.addNumbers([
      availableLocal,
      bonusLocal,
      this.inPlay
    ]);
    let totalLocal = totalblc.toString();
    this.total = Number(totalLocal).toLocaleString();
    let vipPointsblc = this.commonUtilSer.loadCashbalanceBasedOnCurrency(apiRes, "COMPPOINTS", "cash");
    let vipPointsLocal = vipPointsblc.toString();
    this.vipPoints = Number(vipPointsLocal).toLocaleString();
  }
  getPlayerLevel() {
    this.playerService.onPlayerGetPlayerLevels().subscribe((data) => {
      this.levelHandler(data);
    });
  }
  levelHandler(apiRes) {
    this.vipLevels = apiRes.playerLevelResponses;
    if (apiRes.yearkyCounter.endDate) {
      this.endDateYearly = apiRes.yearkyCounter.endDate;
    } else {
      this.endDateYearly = "";
    }
    if (apiRes.monthlyCounter.endDate) {
      this.endDateMonthly = apiRes.monthlyCounter.endDate;
    } else {
      this.endDateMonthly = this.endDateYearly;
    }
    if (apiRes.weeklyCounter.endDate) {
      this.endDateWeekly = apiRes.weeklyCounter.endDate;
    } else {
      this.endDateWeekly = this.endDateYearly;
    }
    if (apiRes.hourlyCounter.endDate) {
      this.endDateHourly = apiRes.hourlyCounter.endDate;
    } else {
      this.endDateHourly = "";
    }
    for (let i = 0; i < this.vipLevels.length; i++) {
      if (this.vipPoints < this.vipLevels[i].compPoints) {
        this.vipPointsFilter.push(this.vipLevels[i].compPoints);
        this.vipNameFilter.push(this.vipLevels[i].name);
        if (this.vipLevels[i].period == "Week") {
          this.vipObj.push({
            name: this.vipLevels[i].name,
            endDate: this.endDateWeekly,
            compPoints: this.vipLevels[i].compPoints
          });
        } else if (this.vipLevels[i].period == "Month") {
          this.vipObj.push({
            name: this.vipLevels[i].name,
            endDate: this.endDateMonthly,
            compPoints: this.vipLevels[i].compPoints
          });
        } else if (this.vipLevels[i].period == "Year") {
          this.vipObj.push({
            name: this.vipLevels[i].name,
            endDate: this.endDateYearly,
            compPoints: this.vipLevels[i].compPoints
          });
        } else {
          this.vipObj.push({
            name: this.vipLevels[i].name,
            endDate: this.endDateHourly,
            compPoints: this.vipLevels[i].compPoints
          });
        }
      } else {
        this.vipName = this.vipLevels[i].name;
      }
    }
    this.monthCollectedPints = apiRes.monthlyCounter.compPoints.toLocaleString();
    this.yearCollectedPints = apiRes.yearkyCounter.compPoints.toLocaleString();
    this.weeklyCollectedPints = apiRes.weeklyCounter.compPoints.toLocaleString();
    if (apiRes.goldCounter) {
      this.goldPoints = apiRes.goldCounter.compPoints;
    }
    this.playerLevelloader = false;
    if (apiRes.success) {
      if ("playerLevelResponses" in apiRes && apiRes["playerLevelResponses"] && apiRes["playerLevelResponses"].length > 0) {
        this.playerLevel = apiRes["playerLevelResponses"][0]["name"];
      } else {
        this.playerLevel = "NA";
      }
    } else {
    }
    this.hideLoader();
  }
  setError(errMsg) {
    this.errMsg = this.errMsg + " and " + errMsg;
    this.isError = true;
  }
  cleanDate(dateStr) {
    return new Date(dateStr.replace("[UTC]", ""));
  }
  static {
    this.\u0275fac = function Balance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Balance)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(CommonUtilService), \u0275\u0275directiveInject(PlayerService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Balance, selectors: [["app-balance"]], decls: 100, vars: 16, consts: [[1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "rightArrow", "width", "15"], [1, "m_t_15", "live_casino_title"], [1, "balance-page"], [1, "m_t_15"], [1, "table-responsive"], [1, "transaction-table"], [2, "text-align", "left"], [1, "gradient-star"], [1, "line_ht"], [1, "sticky-col"], [2, "text-align", "center"], [2, "text-align", "right"], ["style", "text-align: right;", 4, "ngIf"], [1, "bold", "m_t_15"], [4, "ngFor", "ngForOf"], ["class", "loader-wrapper", 4, "ngIf"], [1, "loader-wrapper"], ["width", "280", "alt", "loading", 3, "src"]], template: function Balance_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275text(2, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "img", 2);
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5, "My Account ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "img", 2);
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "Balance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h2", 3);
        \u0275\u0275text(10, "Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 4)(12, "section", 5)(13, "div", 6)(14, "table", 7)(15, "thead")(16, "tr")(17, "th", 8)(18, "span", 9);
        \u0275\u0275text(19, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "Account Name :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th", 8)(22, "span", 9);
        \u0275\u0275text(23, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, "My Rake Back Level :");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "tbody")(26, "tr")(27, "td", 8);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "td", 8);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(31, "section", 5)(32, "h2");
        \u0275\u0275element(33, "span", 10);
        \u0275\u0275text(34, " My Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 6)(36, "table", 7)(37, "thead")(38, "tr");
        \u0275\u0275element(39, "th", 11);
        \u0275\u0275elementStart(40, "th", 12)(41, "span", 9);
        \u0275\u0275text(42, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, "INR :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th", 12)(45, "span", 9);
        \u0275\u0275text(46, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(47, "USD :");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "tbody")(49, "tr")(50, "td", 11);
        \u0275\u0275text(51, "Available");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "td", 13);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd();
        \u0275\u0275template(54, Balance_td_54_Template, 2, 1, "td", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "tr")(56, "td", 11);
        \u0275\u0275text(57, "Bonus");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "td", 13);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd();
        \u0275\u0275template(60, Balance_td_60_Template, 2, 1, "td", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "tr")(62, "td", 11);
        \u0275\u0275text(63, "In Play");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "td", 13);
        \u0275\u0275text(65);
        \u0275\u0275elementEnd();
        \u0275\u0275template(66, Balance_td_66_Template, 2, 1, "td", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "tr")(68, "td", 11);
        \u0275\u0275text(69, "Total ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "td", 13);
        \u0275\u0275text(71);
        \u0275\u0275elementEnd();
        \u0275\u0275template(72, Balance_td_72_Template, 2, 1, "td", 14);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(73, "h2", 15);
        \u0275\u0275element(74, "span", 10);
        \u0275\u0275text(75, " Rake Back Points ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 6)(77, "table", 7)(78, "tr")(79, "td", 11);
        \u0275\u0275text(80, "Rake Back Points ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "td");
        \u0275\u0275text(82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "tr")(84, "td", 11);
        \u0275\u0275text(85, " This Week ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "td");
        \u0275\u0275text(87);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "tr")(89, "td", 11);
        \u0275\u0275text(90, "This Month ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "td");
        \u0275\u0275text(92);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "tr")(94, "td", 11);
        \u0275\u0275text(95, "This Year ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "td");
        \u0275\u0275text(97);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(98, Balance_tr_98_Template, 7, 11, "tr", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(99, Balance_div_99_Template, 2, 1, "div", 17);
      }
      if (rf & 2) {
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate(ctx.profileName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.vipName);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.availableAmount);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.preferredBalanceUSD);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.bonus);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.preferredBalanceUSD);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.inPlay, "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.preferredBalanceUSD);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.total, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.preferredBalanceUSD);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.vipPoints, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.weeklyCollectedPints, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.monthCollectedPints, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.yearCollectedPints, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.vipObj);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.responseLoader);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterLink, FormsModule, RouterModule], styles: ["\n\n.section-card[_ngcontent-%COMP%] {\n  background: #1b1b1b;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 25px;\n  box-shadow: 0 0 10px #000;\n}\n.section-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #333;\n  padding-bottom: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\nspan.line_ht[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 30px;\n  background: var(--gradient-primary);\n  display: flex;\n  border-radius: 0px 50px 50px 0px;\n  margin-right: 10px;\n}\n.transaction-table[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n.transaction-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #2a2a2a;\n  border-radius: 8px;\n}\n.transaction-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.transaction-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #444;\n  text-align: left;\n}\nth[_ngcontent-%COMP%] {\n  background: #0f0f0f;\n}\ntr[_ngcontent-%COMP%] {\n  background: var(--secondary-bg);\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.info-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 48%;\n  background: #222;\n  padding: 10px;\n  border-radius: 6px;\n  margin-top: 8px;\n  font-size: 14px;\n}\n.info-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff5555;\n}\n.balance-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  overflow: hidden;\n}\n.balance-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.balance-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #333;\n}\n.balance-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #ff6600;\n}\n.balance-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.section-card[_ngcontent-%COMP%]   .balance-table[_ngcontent-%COMP%] {\n  display: block;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.section-card[_ngcontent-%COMP%]   .balance-table[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.vip-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #222;\n  border-radius: 6px;\n  padding: 10px;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.vip-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff6600;\n  display: inline-block;\n  width: 100px;\n}\n.balance-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .info-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .balance-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .balance-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 13px;\n  }\n  .section-card[_ngcontent-%COMP%]   .balance-table[_ngcontent-%COMP%] {\n    display: table;\n    overflow: hidden;\n  }\n}\n@media (max-width: 600px) {\n  .transaction-table[_ngcontent-%COMP%] {\n    min-width: 400px;\n  }\n}\n/*# sourceMappingURL=balance.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Balance, [{
    type: Component,
    args: [{ selector: "app-balance", imports: [CommonModule, RouterLink, FormsModule, RouterModule], template: `<div class="redirectline"><span routerLink="/home">Home</span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15"> <span>My Account </span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15"> <span>Balance</span></div>\r
<h2 class="m_t_15 live_casino_title">Balance</h2>\r
\r
<div class="balance-page">\r
\r
    <section class="m_t_15" >\r
      <!-- <h2> <span class="line_ht"></span> My Balance</h2> -->\r
      <div class="table-responsive ">\r
        <table  class="transaction-table">\r
          <thead>\r
            <tr> \r
              <th style="text-align: left;"><span class="gradient-star">*</span>Account Name :</th>\r
              <th style="text-align: left;"><span class="gradient-star">*</span>My Rake Back Level :</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style="text-align: left;">{{profileName}}</td>\r
              <td style="text-align: left;">{{vipName}}</td> \r
            </tr>         \r
          </tbody>\r
        </table>\r
\r
      </div>\r
    </section>\r
  \r
    <!-- Balans FTM -->\r
    <section  class="m_t_15">\r
      <h2><span class="line_ht"></span> My Balance</h2>\r
      <div class="table-responsive ">\r
        <table  class="transaction-table">\r
          <thead>\r
            <tr>\r
              <th class="sticky-col"> </th>\r
              <th style="text-align: center;"><span class="gradient-star">*</span>INR :</th>\r
              <th style="text-align: center;"><span class="gradient-star">*</span>USD :</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td  class="sticky-col">Available</td>\r
              <td style="text-align: right;">{{availableAmount}}</td>\r
              <td style="text-align: right;" *ngIf="preferredBalanceUSD"> {{preferredBalanceUSD?.cash?.value}} </td>\r
            </tr>\r
            <tr>\r
              <td class="sticky-col">Bonus</td>\r
              <td style="text-align: right;">{{bonus}}</td>\r
              <td style="text-align: right;" *ngIf="preferredBalanceUSD"> {{preferredBalanceUSD?.bonus?.value}} </td>\r
            </tr>\r
            <tr>\r
              <td class="sticky-col">In Play</td>\r
              <td style="text-align: right;"> {{inPlay}}</td>\r
              <td style="text-align: right;" *ngIf="preferredBalanceUSD"> {{preferredBalanceUSD?.cashInPlay?.value}} </td>\r
          </tr>\r
            <tr>\r
              <td class="sticky-col">Total </td>\r
              <td style="text-align: right;">{{total}} </td>\r
              <td  style="text-align: right;" *ngIf="preferredBalanceUSD">{{preferredBalanceUSD?.cash?.value + preferredBalanceUSD?.bonus?.value + preferredBalanceUSD?.cashInPlay?.value}} </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
\r
      </div>\r
    </section>\r
  \r
    <!-- Vip Point -->\r
    <h2 class="  bold   m_t_15 "><span class="line_ht"></span> Rake Back Points \r
      <!-- <span class="pointer" routerLink="/exchange"> ( Exchange  ) </span> -->\r
      </h2>\r
      <div class="table-responsive ">\r
   <table class="transaction-table">\r
     <tr>\r
       <td class="sticky-col">Rake Back Points  </td>\r
       <td> {{vipPoints}} </td>\r
     </tr>\r
     <tr>\r
       <td class="sticky-col"> This Week  </td>\r
       <td>{{ weeklyCollectedPints }}  </td>\r
     </tr>\r
     <tr>\r
       <td class="sticky-col">This Month  </td>\r
       <td>{{ monthCollectedPints }}  </td>\r
     </tr>\r
     <tr>\r
       <td class="sticky-col">This Year  </td>\r
       <td>{{ yearCollectedPints }}  </td>\r
     </tr>\r
     <tr *ngFor="let vipS of vipObj" >\r
       <td class="sticky-col"> {{ vipS.name}}   </td>\r
       <td>  \r
         You need to earn {{ vipS?.compPoints | number:'1.2-2'}}  Rake back points by {{ cleanDate(vipS?.endDate) | date:'medium':'local' }} \r
         to reach Level  {{vipS?.name}}  </td>\r
     </tr> \r
   </table>\r
  </div>\r
  </div>\r
  <div class="loader-wrapper" *ngIf="responseLoader">\r
    <img\r
      [src]="'/assets/giflogo.gif?' + loaderKey"\r
      width="280"\r
      alt="loading"\r
    />\r
  </div>`, styles: ["/* src/app/pages/dashboard/balance/balance.css */\n.section-card {\n  background: #1b1b1b;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 25px;\n  box-shadow: 0 0 10px #000;\n}\n.section-card h2 {\n  font-size: 18px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #333;\n  padding-bottom: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\nspan.line_ht {\n  width: 5px;\n  height: 30px;\n  background: var(--gradient-primary);\n  display: flex;\n  border-radius: 0px 50px 50px 0px;\n  margin-right: 10px;\n}\n.transaction-table {\n  min-width: 400px;\n}\n.transaction-table {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #2a2a2a;\n  border-radius: 8px;\n}\n.transaction-table th,\n.transaction-table td {\n  padding: 10px;\n  border: 1px solid #444;\n  text-align: left;\n}\nth {\n  background: #0f0f0f;\n}\ntr {\n  background: var(--secondary-bg);\n}\n.info-grid {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.info-grid div {\n  width: 48%;\n  background: #222;\n  padding: 10px;\n  border-radius: 6px;\n  margin-top: 8px;\n  font-size: 14px;\n}\n.info-grid span {\n  color: #ff5555;\n}\n.balance-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  overflow: hidden;\n}\n.balance-table th,\n.balance-table td {\n  padding: 12px;\n  border-bottom: 1px solid #333;\n}\n.balance-table th {\n  color: #ff6600;\n}\n.balance-table td {\n  font-size: 14px;\n}\n.section-card .balance-table {\n  display: block;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.section-card .balance-table::-webkit-scrollbar {\n  display: none;\n}\n.vip-list div {\n  background: #222;\n  border-radius: 6px;\n  padding: 10px;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.vip-list span {\n  color: #ff6600;\n  display: inline-block;\n  width: 100px;\n}\n.balance-page h2 {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .info-grid div {\n    width: 100%;\n  }\n  .balance-table th,\n  .balance-table td {\n    padding: 10px;\n    font-size: 13px;\n  }\n  .section-card .balance-table {\n    display: table;\n    overflow: hidden;\n  }\n}\n@media (max-width: 600px) {\n  .transaction-table {\n    min-width: 400px;\n  }\n}\n/*# sourceMappingURL=balance.css.map */\n"] }]
  }], () => [{ type: Store }, { type: CommonUtilService }, { type: PlayerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Balance, { className: "Balance", filePath: "src/app/pages/dashboard/balance/balance.ts", lineNumber: 23 });
})();
export {
  Balance
};
//# sourceMappingURL=chunk-CEPKBQFK.js.map
