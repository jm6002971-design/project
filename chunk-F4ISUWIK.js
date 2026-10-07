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
  PlayerService
} from "./chunk-HXFVUPJ2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FAEKDNT6.js";
import "./chunk-2Y7B2BAT.js";
import {
  Store
} from "./chunk-V7ZNEVP2.js";
import {
  RouterLink
} from "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/pages/dashboard/rakeback/rakeback.ts
function Rakeback_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r1);
  }
}
function Rakeback_p_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errMsg);
  }
}
function Rakeback_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " Summary : Buy ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " for ");
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Rake Back Points ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedDropDownValue, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cashToVipMapping[ctx_r1.uiSelection][ctx_r1.selectedDropDownValue], "");
  }
}
function Rakeback_tr_56_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, v_r3));
  }
}
function Rakeback_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, Rakeback_tr_56_td_1_Template, 3, 3, "td", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", record_r4);
  }
}
function Rakeback_p_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errMsg, "");
  }
}
var Rakeback = class _Rakeback {
  constructor(store, playerService, commonUtilSer, messageService) {
    this.store = store;
    this.playerService = playerService;
    this.commonUtilSer = commonUtilSer;
    this.messageService = messageService;
    this.convertTo = "cash";
    this.isError = false;
    this.uiSelection = "Cash";
    this.exchangeData = null;
    this.exchangeDataLength = 0;
    this.selectedExchange = {};
    this.tableData = [];
    this.cashToVipMapping = {};
    this.mapping = {};
    this.selectedDropDown = [];
    this.playerLoggedIn = false;
    this.loader = true;
    this.errMsg = "";
  }
  ngOnInit() {
    this.loginSub = this.store.select("loginState").subscribe((loginState) => {
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.loadExchangeRates();
          this.store.dispatch(new CashierGetBalanceStart());
        }
      }
    });
    this.storeSub = this.store.select("cashierState").subscribe((cashierState) => {
      if (cashierState.balance) {
        this.walleteInfo = cashierState.balance.values;
        this.vipPoints = this.commonUtilSer.loadCashbalanceBasedOnCurrency(this.walleteInfo, "COMPPOINTS", "cash");
      }
    });
  }
  // ================= API =================
  loadExchangeRates() {
    this.playerService.getExchangeRates().subscribe((data) => {
      this.datahandler(data);
    });
  }
  datahandler(apiRes) {
    if (apiRes.success) {
      this.exchangeData = apiRes.values.filter((item) => item.walletType === "Indian rupee" && (item.exchangeType === "Cash" || item.exchangeType === "Bonus"));
      this.exchangeDataLength = this.exchangeData.length;
      this.loadDataToView();
    } else {
      this.setError(apiRes?.code || "Unknown error");
    }
  }
  // ================= CORE =================
  loadDataToView(key = null) {
    if (!key)
      key = this.uiSelection;
    this.uiSelection = key;
    this.convertTo = key.toLowerCase();
    if (this.exchangeData && this.vipPoints != null) {
      this.loader = false;
      this.selectedExchange = this.exchangeData.find((k) => k.exchangeType.toLowerCase() === key.toLowerCase());
      if (this.selectedExchange?.rates) {
        this.mapConversionToVip("Cash");
        this.mapConversionToVip("Bonus");
        this.limitSelectedDropDown();
      }
    } else {
      this.loadExchangeRates();
    }
  }
  mapConversionToVip(key) {
    if (!this.cashToVipMapping[key]) {
      this.cashToVipMapping[key] = {};
    }
    this.exchangeData.forEach((item) => {
      if (item.exchangeType === key) {
        Object.keys(item.rates).forEach((rateKey) => {
          this.cashToVipMapping[key][item.rates[rateKey]] = rateKey;
        });
      }
    });
  }
  limitSelectedDropDown() {
    const tempSelection = [];
    this.tableData = [];
    const vipPoint = Number(this.vipPoints || 0);
    if (!this.selectedExchange?.rates)
      return;
    Object.keys(this.selectedExchange.rates).forEach((key) => {
      const value = this.selectedExchange.rates[key];
      this.tableData.push([+key, +value]);
      if (vipPoint >= +key) {
        tempSelection.push(+value);
      }
    });
    this.tableData.sort((a, b) => a[0] - b[0]);
    tempSelection.sort((a, b) => a - b);
    this.selectedDropDown = tempSelection;
    this.selectedDropDownValue = tempSelection[0];
  }
  // ================= ACTION =================
  submitExchange() {
    const amount = Number(this.cashToVipMapping[this.uiSelection][this.selectedDropDownValue]);
    if (!this.vipPoints || this.vipPoints == 0) {
      this.setError("No points");
      return;
    }
    if (amount >= this.vipPoints) {
      this.setError("You need Min 500 rake back points to exchange");
      return;
    }
    const body = {
      amount,
      targetAmount: this.selectedDropDownValue,
      cpExchangeType: this.uiSelection === "Cash" ? "0" : "1",
      selectedWalletType: "INR"
    };
    this.playerService.makeExchange(body).subscribe((data) => this.exchangeconvert(data), (err) => this.setError(err));
  }
  exchangeconvert(data) {
    if (data?.success) {
      this.store.dispatch(new CashierGetBalanceStart());
      this.messageService.success("Success", "Exchange Converted successfully");
    } else {
      this.setError(data?.code || "Unknown error");
    }
  }
  setError(errMsg) {
    this.isError = true;
    this.errMsg = errMsg;
    this.messageService.error("Failed", errMsg);
  }
  static {
    this.\u0275fac = function Rakeback_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Rakeback)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PlayerService), \u0275\u0275directiveInject(CommonUtilService), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Rakeback, selectors: [["app-rakeback"]], decls: 58, vars: 14, consts: [[1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "rightArrow", "width", "15"], [1, "m_t_15", "live_casino_title"], [1, "vip-container"], [1, "vip-controls"], [1, "vip-header"], [1, "radio-group"], ["type", "radio", "name", "convertTo", "value", "cash", 3, "click", "ngModelChange", "ngModel"], ["type", "radio", "name", "convertTo", "value", "bonus", 3, "click", "ngModelChange", "ngModel"], [1, "convert-box"], ["src", "assets/sidemenu_icons/INR.svg", "alt", "", 2, "margin-right", "5px"], [1, "desktopverion"], [1, "fd", "p_b_5", "text-nowrap", "desktopverion"], [1, "select-wrapper"], [1, "fd", "p_b_5", "text-nowrap", "mobile_section_pb"], [1, "p_12", "input-field", 3, "ngModelChange", "ngModel", "disabled"], [4, "ngFor", "ngForOf"], ["style", "color: #f00; margin: 0;", 4, "ngIf"], [1, "button-row"], ["class", "fd p_b_5", 4, "ngIf"], [1, "btn", "active", 3, "click", "disabled"], [1, "table-responsive"], [1, "transaction-table"], [1, "gradient-star"], [4, "ngIf"], [2, "color", "#f00", "margin", "0"], [1, "fd", "p_b_5"]], template: function Rakeback_Template(rf, ctx) {
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
        \u0275\u0275text(8, "Rake Back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h2", 3);
        \u0275\u0275text(10, "Rake Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 4)(12, "div", 5)(13, "div", 6)(14, "h3");
        \u0275\u0275text(15, "Rake Back Points ");
        \u0275\u0275elementStart(16, "b");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "p");
        \u0275\u0275text(20, "Convert Rake Back Points To");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 7)(22, "label")(23, "input", 8);
        \u0275\u0275listener("click", function Rakeback_Template_input_click_23_listener() {
          return ctx.loadDataToView("Cash");
        });
        \u0275\u0275twoWayListener("ngModelChange", function Rakeback_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.convertTo, $event) || (ctx.convertTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "Cash");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "label")(27, "input", 9);
        \u0275\u0275listener("click", function Rakeback_Template_input_click_27_listener() {
          return ctx.loadDataToView("Bonus");
        });
        \u0275\u0275twoWayListener("ngModelChange", function Rakeback_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.convertTo, $event) || (ctx.convertTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span");
        \u0275\u0275text(29, "Bonus");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 10);
        \u0275\u0275element(31, "img", 11);
        \u0275\u0275elementStart(32, "div", 12)(33, "div", 13);
        \u0275\u0275text(34, " Convert Rake Back Points To : ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 14)(36, "div", 15);
        \u0275\u0275text(37, " Convert Rake Back Points To : ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function Rakeback_Template_select_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedDropDownValue, $event) || (ctx.selectedDropDownValue = $event);
          return $event;
        });
        \u0275\u0275template(39, Rakeback_option_39_Template, 2, 1, "option", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(40, Rakeback_p_40_Template, 2, 1, "p", 18);
        \u0275\u0275elementStart(41, "div", 19);
        \u0275\u0275template(42, Rakeback_div_42_Template, 8, 2, "div", 20);
        \u0275\u0275elementStart(43, "button", 21);
        \u0275\u0275listener("click", function Rakeback_Template_button_click_43_listener() {
          return ctx.submitExchange();
        });
        \u0275\u0275text(44, "Convert");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 22)(46, "table", 23)(47, "tr")(48, "th")(49, "span", 24);
        \u0275\u0275text(50, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " Rake Back Points");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th")(53, "span", 24);
        \u0275\u0275text(54, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(56, Rakeback_tr_56_Template, 2, 1, "tr", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(57, Rakeback_p_57_Template, 2, 1, "p", 25);
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, ctx.vipPoints), " ");
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.convertTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.convertTo);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedDropDownValue);
        \u0275\u0275property("disabled", !ctx.selectedDropDown || ctx.selectedDropDown.length == 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.selectedDropDown);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errMsg);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.selectedDropDownValue);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.selectedDropDownValue);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1(" ", ctx.uiSelection, "");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.tableData);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isError);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule], styles: ['\n\n.vip-container[_ngcontent-%COMP%] {\n  background: #1b1b1b;\n  color: #fff;\n  font-family: "Poppins", sans-serif;\n  padding: 20px;\n  border-radius: 12px;\n}\n.vip-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 0;\n}\n.vip-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ccc;\n  margin: 5px 0 15px;\n}\n.vip-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.radio-group[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  accent-color: #ff9900;\n  transform: scale(1.2);\n}\n.convert-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #111;\n  border-radius: 8px;\n  padding: 8px 15px;\n  min-width: 312px;\n  justify-content: flex-start;\n}\n.convert-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #ffcc00;\n  color: #111;\n  font-size: 20px;\n  padding: 8px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.convert-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  flex: 1;\n}\n.deposit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ff0000,\n      #ff6600);\n  color: #fff;\n  border: none;\n  padding: 10px 25px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 0 12px rgba(255, 80, 0, 0.6);\n  transition: 0.3s ease;\n}\n.deposit-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.deposit-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\nthead[_ngcontent-%COMP%] {\n  background: #111;\n}\nth[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: 600;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #252525;\n  color: #ddd;\n  font-size: 14px;\n  background: #161616;\n}\n.button-row[_ngcontent-%COMP%] {\n  display: grid;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #1f1f1f;\n}\n@media (max-width: 600px) {\n  .vip-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .deposit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .vip-container[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n}\n.select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: inline-block;\n}\n.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 120px;\n  background: #000;\n  color: #fff;\n  border-radius: 5px;\n  padding: 10px;\n  padding-right: 35px;\n  -webkit-appearance: none;\n  appearance: none;\n  border: 1px solid #333;\n}\n.select-wrapper[_ngcontent-%COMP%]::after {\n  content: "\\25bc";\n  font-size: 12px;\n  color: #fff;\n  position: relative;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  opacity: 0.7;\n}\n.desktopverion[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.mobile_section_pb[_ngcontent-%COMP%] {\n  display: none !important;\n}\n@media (max-width: 768px) {\n  .desktopverion[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .mobile_section_pb[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n}\n/*# sourceMappingURL=rakeback.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Rakeback, [{
    type: Component,
    args: [{ selector: "app-rakeback", imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule], standalone: true, template: `<div class="redirectline"><span routerLink="/home">Home</span> <img src="assets/home_icons/arrow_right.png"\r
    alt="rightArrow" width="15"> <span>My Account </span> <img src="assets/home_icons/arrow_right.png"\r
    alt="rightArrow" width="15"> <span>Rake Back</span></div>\r
\r
    <h2 class="m_t_15 live_casino_title">Rake Back</h2>\r
\r
<div class="vip-container">\r
\r
  <div class="vip-controls">\r
    <div class="vip-header">\r
      <h3>Rake Back Points <b> {{vipPoints | number}} </b></h3>\r
      <p>Convert Rake Back Points To</p>\r
    </div>\r
    <div class="radio-group">\r
      <label>\r
        <input type="radio" name="convertTo" (click)="loadDataToView('Cash')" value="cash" [(ngModel)]="convertTo" />\r
        <span>Cash</span>\r
      </label>\r
      <label>\r
        <input type="radio" name="convertTo" (click)="loadDataToView('Bonus')" value="bonus" [(ngModel)]="convertTo" />\r
        <span>Bonus</span>\r
      </label>\r
    </div>\r
\r
    <div class="convert-box">\r
      <img src="assets/sidemenu_icons/INR.svg" alt="" style="margin-right: 5px;">\r
      <div class="desktopverion">\r
        <div class="fd p_b_5 text-nowrap desktopverion"> Convert Rake Back Points To :  </div>\r
\r
      </div>\r
      <div class="select-wrapper">\r
        <div class="fd p_b_5 text-nowrap mobile_section_pb"> Convert Rake Back Points To : </div>\r
        <select [(ngModel)]="selectedDropDownValue"\r
                [disabled]="!selectedDropDown || selectedDropDown.length==0"\r
                class="p_12 input-field">\r
          <option *ngFor="let v of selectedDropDown">{{v}}</option>\r
        </select>\r
      </div>\r
          </div>\r
    <p *ngIf="errMsg" style="color: #f00; margin: 0;">{{errMsg}}</p>\r
    <div class="button-row">\r
      <div class="fd p_b_5" *ngIf="selectedDropDownValue"> Summary :\r
        Buy <b> {{selectedDropDownValue}} </b> for <b>\r
          {{cashToVipMapping[uiSelection][selectedDropDownValue]}}</b> Rake Back Points </div>\r
          <button class="btn active"\r
        [disabled]="!selectedDropDownValue"\r
        (click)="submitExchange()">Convert</button>\r
    </div>\r
  </div>\r
\r
  <div class="table-responsive">\r
    <table class="transaction-table">\r
      <tr>\r
        <th><span class="gradient-star">*</span> Rake Back Points</th>\r
        <th><span class="gradient-star">*</span> {{uiSelection}}</th>\r
      </tr>\r
      <tr *ngFor="let record of tableData">\r
        <td *ngFor="let v of record">{{v | number}}</td>\r
      </tr>\r
    </table>\r
  </div>\r
</div>\r
<p *ngIf="isError"> {{errMsg}}</p>`, styles: ['/* src/app/pages/dashboard/rakeback/rakeback.css */\n.vip-container {\n  background: #1b1b1b;\n  color: #fff;\n  font-family: "Poppins", sans-serif;\n  padding: 20px;\n  border-radius: 12px;\n}\n.vip-header h3 {\n  font-size: 22px;\n  margin: 0;\n}\n.vip-header p {\n  font-size: 14px;\n  color: #ccc;\n  margin: 5px 0 15px;\n}\n.vip-controls {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n.radio-group {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.radio-group label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.radio-group input[type=radio] {\n  accent-color: #ff9900;\n  transform: scale(1.2);\n}\n.convert-box {\n  display: flex;\n  align-items: center;\n  background: #111;\n  border-radius: 8px;\n  padding: 8px 15px;\n  min-width: 312px;\n  justify-content: flex-start;\n}\n.convert-box .icon {\n  background: #ffcc00;\n  color: #111;\n  font-size: 20px;\n  padding: 8px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.convert-box input {\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  flex: 1;\n}\n.deposit-btn {\n  background:\n    linear-gradient(\n      90deg,\n      #ff0000,\n      #ff6600);\n  color: #fff;\n  border: none;\n  padding: 10px 25px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 0 12px rgba(255, 80, 0, 0.6);\n  transition: 0.3s ease;\n}\n.deposit-btn:hover {\n  transform: scale(1.05);\n}\n.deposit-btn:hover {\n  transform: scale(1.05);\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\nthead {\n  background: #111;\n}\nth {\n  padding: 10px;\n  font-weight: 600;\n}\ntd {\n  padding: 10px;\n  border: 1px solid #252525;\n  color: #ddd;\n  font-size: 14px;\n  background: #161616;\n}\n.button-row {\n  display: grid;\n}\ntbody tr:nth-child(even) {\n  background: #1f1f1f;\n}\n@media (max-width: 600px) {\n  .vip-controls {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .deposit-btn {\n    width: 100%;\n  }\n  .vip-container {\n    padding: 5px;\n  }\n}\n.select-wrapper {\n  position: relative;\n  width: 100%;\n  display: inline-block;\n}\n.select-wrapper select {\n  width: 120px;\n  background: #000;\n  color: #fff;\n  border-radius: 5px;\n  padding: 10px;\n  padding-right: 35px;\n  -webkit-appearance: none;\n  appearance: none;\n  border: 1px solid #333;\n}\n.select-wrapper::after {\n  content: "\\25bc";\n  font-size: 12px;\n  color: #fff;\n  position: relative;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  opacity: 0.7;\n}\n.desktopverion {\n  display: flex !important;\n}\n.mobile_section_pb {\n  display: none !important;\n}\n@media (max-width: 768px) {\n  .desktopverion {\n    display: none !important;\n  }\n  .mobile_section_pb {\n    display: flex !important;\n  }\n}\n/*# sourceMappingURL=rakeback.css.map */\n'] }]
  }], () => [{ type: Store }, { type: PlayerService }, { type: CommonUtilService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Rakeback, { className: "Rakeback", filePath: "src/app/pages/dashboard/rakeback/rakeback.ts", lineNumber: 23 });
})();
export {
  Rakeback
};
//# sourceMappingURL=chunk-F4ISUWIK.js.map
