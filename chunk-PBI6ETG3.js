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
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/pages/dashboard/exchange/exchange.ts
function Exchange_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "Min: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "1 USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6, "Max: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "1,000 USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275text(10, "Daily Limit: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12, "10,000 USD");
    \u0275\u0275elementEnd()()();
  }
}
function Exchange_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "Min: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "100 INR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6, "Max: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "1,000,000 INR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275text(10, "Daily Limit: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12, "1,000,000 INR");
    \u0275\u0275elementEnd()()();
  }
}
function Exchange_p_24_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" INR ", \u0275\u0275pipeBind2(2, 1, ctx_r0.inrPerUsd, "1.2-2"), "");
  }
}
function Exchange_p_24_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
}
function Exchange_p_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "1 USD = ");
    \u0275\u0275template(2, Exchange_p_24_span_2_Template, 3, 4, "span", 17)(3, Exchange_p_24_span_3_Template, 1, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.responseloader);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.responseloader);
  }
}
function Exchange_p_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" USD ", \u0275\u0275pipeBind2(2, 1, ctx_r0.usdPerInr, "1.2-2"), "");
  }
}
function Exchange_p_25_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
}
function Exchange_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "1 INR = ");
    \u0275\u0275template(2, Exchange_p_25_span_2_Template, 3, 4, "span", 17)(3, Exchange_p_25_span_3_Template, 1, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.responseloader);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.responseloader);
  }
}
function Exchange_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "label")(3, "span", 25);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " SEND");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 26);
    \u0275\u0275element(7, "img", 27);
    \u0275\u0275elementStart(8, "span", 28)(9, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function Exchange_div_36_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.convertedAmount, $event) || (ctx_r0.convertedAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function Exchange_div_36_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changeConvertedVal($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "p", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 31);
    \u0275\u0275element(13, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 24)(15, "label")(16, "span", 25);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " RECEIVE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 26);
    \u0275\u0275element(20, "img", 33);
    \u0275\u0275elementStart(21, "span", 28)(22, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function Exchange_div_36_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.userEnteredAmount, $event) || (ctx_r0.userEnteredAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.convertedAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.userEnteredAmount);
  }
}
function Exchange_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "label")(3, "span", 25);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " SEND");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 26);
    \u0275\u0275element(7, "img", 33);
    \u0275\u0275elementStart(8, "span", 28)(9, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function Exchange_div_37_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.convertedAmount, $event) || (ctx_r0.convertedAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function Exchange_div_37_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changeAmtVal($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "p", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 31);
    \u0275\u0275element(13, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 24)(15, "label")(16, "span", 25);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " RECEIVE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 26);
    \u0275\u0275element(20, "img", 27);
    \u0275\u0275elementStart(21, "span", 28)(22, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function Exchange_div_37_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.userEnteredAmount, $event) || (ctx_r0.userEnteredAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.convertedAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.userEnteredAmount);
  }
}
function Exchange_p_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.errMsg, " ");
  }
}
var Exchange = class _Exchange {
  constructor(playerService, store, messageService) {
    this.playerService = playerService;
    this.store = store;
    this.messageService = messageService;
    this.selectedMode = "usdToInr";
    this.convertTo = "cash";
    this.userEnteredAmount = "";
    this.convertedAmount = "";
    this.errorDisable = false;
    this.playerLoggedIn = false;
    this.isError = false;
    this.errMsg = "";
    this.currency1 = "USD";
    this.currency2 = "USD";
    this.CurrencySy = "$";
    this.inrPerUsd = null;
    this.usdPerInr = null;
    this.subs = [];
    this.typeexchange = "Cash";
    this.isSubmitting = false;
    this.responseloader = true;
    const bodyUSD = { walletCode: "USD" };
    const sub1 = this.playerService.exchangRates(bodyUSD).subscribe((res) => {
      try {
        const entry = res.responses?.USD?.find((r) => r.code === "INR");
        if (entry && entry.rate) {
          this.responseloader = false;
          this.usdPerInr = parseFloat(entry.rate);
        }
      } catch (err) {
        console.error("Failed to parse USD response rate", err, res);
      }
    });
    this.subs.push(sub1);
    const bodyINR = { walletCode: "INR" };
    const sub2 = this.playerService.exchangRates(bodyINR).subscribe((res) => {
      try {
        const entry = res.responses?.INR?.find((r) => r.code === "USD");
        if (entry && entry.rate) {
          this.responseloader = false;
          this.inrPerUsd = parseFloat(entry.rate);
        }
      } catch (err) {
        console.error("Failed to parse INR response rate", err, res);
      }
    });
    this.subs.push(sub2);
  }
  ngOnInit() {
    this.moveToTop();
    this.store.select("loginState").subscribe((loginState) => {
      console.log(loginState.playerLoggedIn);
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.store.dispatch(new CashierGetBalanceStart());
        }
      }
    });
    this.storeSub = this.store.select("cashierState").subscribe((cashierState) => {
      if (cashierState.balance) {
        if (cashierState.balance.success === true) {
          this.playerBalance = cashierState.balance;
          this.showDataToView("INR");
        }
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
  showDataToView(wallet) {
    this.setSelection = wallet;
    this.playerBalance.values.map((res) => {
      if (res.wallet.name === "USD") {
        this.USD_wallet = res.cash.value;
      } else if (res.wallet.name === "INR") {
        this.CHP_wallet = res.cash.value;
      }
    });
  }
  setMode(mode) {
    this.errorMsg = "";
    this.convertedAmount = "";
    this.userEnteredAmount = "";
    this.selectedMode = mode;
    if (mode == "usdToInr") {
      this.showDataToView("USD");
    } else {
      this.showDataToView("INR");
    }
  }
  exchangeRatesApiRes(res) {
    this.isSubmitting = false;
    if (res.success == true) {
      this.messageService.success("Success", "Exchange Converted successfull");
      setTimeout(() => {
        this.convertedAmount = "";
        this.userEnteredAmount = "";
        this.store.dispatch(new CashierGetBalanceStart());
      }, 800);
    } else {
      if (res.description.includes("The field 2 of")) {
        this.messageService.error("Failed", "Amount exceeds your balance");
      } else {
        this.messageService.error("Failed", res.description);
      }
    }
  }
  changeConvertedVal(value) {
    this.errorMsg = "";
    this.userEnteredAmount = "";
    this.errorDisable = false;
    const amount = parseFloat(value);
    if (!value || isNaN(amount) || amount <= 0) {
      this.errorMsg = "Please enter a valid amount";
      return;
    }
    const minLimit = 1;
    const maxLimit = 1e3;
    const dailyLimit = 1e4;
    if (amount < minLimit) {
      this.errorMsg = `Minimum amount is ${minLimit} USD`;
      return;
    }
    if (amount > maxLimit) {
      this.errorMsg = `Maximum amount per transaction is ${maxLimit} USD`;
      return;
    }
    if (this.inrPerUsd == null) {
      this.errorMsg = "Exchange rate not available";
      return;
    }
    const inr = amount * this.inrPerUsd;
    this.userEnteredAmount = inr.toFixed(2);
    this.convertedAmount = value;
  }
  // INR -> USD: user types INR amount, show USD
  changeAmtVal(value) {
    this.errorMsg = "";
    this.userEnteredAmount = "";
    this.errorDisable = false;
    const amount = parseFloat(value);
    if (!value || isNaN(amount) || amount <= 0) {
      this.errorMsg = "Please enter a valid amount";
      return;
    }
    const minLimit = 100;
    const maxLimit = 1e6;
    if (amount < minLimit) {
      this.errorMsg = `Minimum amount is ${minLimit} INR`;
      return;
    }
    if (amount > maxLimit) {
      this.errorMsg = `Maximum amount is ${maxLimit.toLocaleString()} INR`;
      return;
    }
    if (amount > (this.CHP_wallet ?? Infinity)) {
      this.errorMsg = "Amount exceeds your balance";
      return;
    }
    if (this.usdPerInr == null) {
      this.errorMsg = "Exchange rate not available";
      return;
    }
    const usd = amount * this.usdPerInr;
    this.userEnteredAmount = usd.toFixed(2);
    this.convertedAmount = value;
  }
  // submitExchangeCurrency: make sure you send the right fields (convertedAmount is the "send" amount)
  submitExchangeCurrency() {
    if (this.isSubmitting)
      return;
    this.isSubmitting = true;
    const targetWallet = this.selectedMode === "usdToInr" ? "USD" : "INR";
    if (!this.playerLoggedIn) {
      this.isError = true;
      this.errMsg = "Please login";
      return;
    }
    const sendAmount = String(this.convertedAmount || "");
    if (!sendAmount) {
      this.isError = true;
      this.errMsg = "Enter amount";
      return;
    }
    let body;
    if (targetWallet === "INR") {
      body = {
        walletCode: "USD",
        keyVsValue: {
          AMOUNT_cash_INR: this.typeexchange == "Cash" ? sendAmount : "0.00",
          AMOUNT_bonus_INR: this.typeexchange == "Bonus" ? sendAmount : "0.00",
          AMOUNT_tm_INR: "0.00"
        }
      };
    } else {
      body = {
        walletCode: "INR",
        keyVsValue: {
          AMOUNT_cash_USD: this.typeexchange == "Cash" ? sendAmount : "0.00",
          AMOUNT_bonus_USD: this.typeexchange == "Bonus" ? sendAmount : "0.00",
          AMOUNT_tm_USD: "0.00"
        }
      };
    }
    this.playerService.walletExchange(body).subscribe((res) => this.exchangeRatesApiRes(res));
  }
  // cleanup
  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
    if (this.storeSub)
      this.storeSub.unsubscribe();
    if (this.loginSub)
      this.loginSub.unsubscribe();
  }
  loadDataToView(type) {
    this.typeexchange = type;
    console.log(type);
  }
  static {
    this.\u0275fac = function Exchange_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Exchange)(\u0275\u0275directiveInject(PlayerService), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Exchange, selectors: [["app-exchange"]], decls: 42, vars: 16, consts: [[1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "rightArrow", "width", "15"], [1, "m_t_15", "live_casino_title"], [1, "converter-container"], [1, "toggle-buttons"], [1, "btn", 3, "click"], [1, "highlight"], ["class", "limits", 4, "ngIf"], ["class", "live_casino_title", "style", "font-size: 16px;", 4, "ngIf"], [1, "vip-controls"], [1, "radio-group"], ["type", "radio", "name", "convertTo", "value", "cash", 3, "click", "ngModelChange", "ngModel"], ["type", "radio", "name", "convertTo", "value", "bonus", 3, "click", "ngModelChange", "ngModel"], ["class", "transfer-box", 4, "ngIf"], [1, "button-row"], [1, "btn", "active", 3, "click", "disabled"], [4, "ngIf"], [1, "limits"], [1, "limit"], [1, "live_casino_title", 2, "font-size", "16px"], ["class", "loader dual-ring", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "loader", "dual-ring"], [1, "transfer-box"], [1, "input-box"], [1, "gradient-star"], [1, "input-field"], ["src", "assets/sidemenu_icons/USD.svg", "alt", "USD", "loading", "lazy", "width", "47", 1, "P_R_5"], [1, "currencyIcon"], ["type", "number", "placeholder", "Enter amount", 3, "ngModelChange", "input", "ngModel"], [2, "color", "#f00"], [1, "col-sm-12", "col-md-2", "m_t_10", "Transfer_icon_middle"], ["src", "assets/sidemenu_icons/arrange-circle.svg", "alt", ""], ["src", "assets/sidemenu_icons/INR.svg", "alt", "INR", "loading", "lazy", "width", "47", 1, "P_R_5"], ["type", "number", "disabled", "", 3, "ngModelChange", "ngModel"]], template: function Exchange_Template(rf, ctx) {
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
        \u0275\u0275text(8, "Currency Exchange");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h2", 3);
        \u0275\u0275text(10, "Currency Exchange");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 4)(12, "div", 5)(13, "button", 6);
        \u0275\u0275listener("click", function Exchange_Template_button_click_13_listener() {
          return ctx.setMode("usdToInr");
        });
        \u0275\u0275text(14, " USD To INR ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 6);
        \u0275\u0275listener("click", function Exchange_Template_button_click_15_listener() {
          return ctx.setMode("inrToUsd");
        });
        \u0275\u0275text(16, " INR To USD ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "h2")(18, "span", 7);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(22, Exchange_div_22_Template, 13, 0, "div", 8)(23, Exchange_div_23_Template, 13, 0, "div", 8)(24, Exchange_p_24_Template, 4, 2, "p", 9)(25, Exchange_p_25_Template, 4, 2, "p", 9);
        \u0275\u0275elementStart(26, "div", 10)(27, "div", 11)(28, "label")(29, "input", 12);
        \u0275\u0275listener("click", function Exchange_Template_input_click_29_listener() {
          return ctx.loadDataToView("Cash");
        });
        \u0275\u0275twoWayListener("ngModelChange", function Exchange_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.convertTo, $event) || (ctx.convertTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31, "Cash");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "label")(33, "input", 13);
        \u0275\u0275listener("click", function Exchange_Template_input_click_33_listener() {
          return ctx.loadDataToView("Bonus");
        });
        \u0275\u0275twoWayListener("ngModelChange", function Exchange_Template_input_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.convertTo, $event) || (ctx.convertTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35, "Bonus");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(36, Exchange_div_36_Template, 23, 3, "div", 14)(37, Exchange_div_37_Template, 23, 3, "div", 14);
        \u0275\u0275elementStart(38, "div", 15)(39, "button", 16);
        \u0275\u0275listener("click", function Exchange_Template_button_click_39_listener() {
          return ctx.submitExchangeCurrency();
        });
        \u0275\u0275text(40, "Lets Go!");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, Exchange_p_41_Template, 2, 1, "p", 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275classProp("active", ctx.selectedMode === "usdToInr");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedMode === "inrToUsd");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.selectedMode === "usdToInr" ? "USD to INR" : "INR to USD");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" - Convert ", ctx.selectedMode === "usdToInr" ? "US Dollars to INR" : "Indian Rupees to USD", "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedMode === "usdToInr");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedMode === "inrToUsd");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedMode === "usdToInr");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedMode === "inrToUsd");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.convertTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.convertTo);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.selectedMode === "usdToInr");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedMode === "inrToUsd");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isSubmitting || !ctx.userEnteredAmount || ctx.errorDisable);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isError);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      DecimalPipe,
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      RadioControlValueAccessor,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      RouterLink
    ], styles: ['\n\n.converter-container[_ngcontent-%COMP%] {\n  background: #1b1b1b;\n  color: #fff;\n  padding: 30px;\n  border-radius: 12px;\n  font-family: "Poppins", sans-serif;\n  margin: auto;\n}\n.toggle-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 15px;\n  background: #000;\n  width: fit-content;\n  padding: 5px;\n  border-radius: 5px;\n}\n.btn[_ngcontent-%COMP%] {\n  background: #2c2c2c;\n  color: #fff;\n  border: none;\n  padding: 10px 25px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ff3300,\n      #ff6600);\n  font-weight: 600;\n}\n.live_casino_title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 28px;\n  background:\n    linear-gradient(\n      90deg,\n      #CC0000 -8%,\n      #e13917 12%,\n      #f37a23 20%,\n      #ffffff 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  display: inline-flex;\n}\n.dual-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 22px;\n  height: 22px;\n  margin: auto;\n  display: flex;\n  margin-left: 3px;\n}\n.highlight[_ngcontent-%COMP%] {\n  background: var(--gradient-text);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.limits[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin: 20px 0;\n}\n.limit[_ngcontent-%COMP%] {\n  background: #3b2a14;\n  color: #f1c27d;\n  padding: 8px 15px;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.transfer-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 10px;\n  padding: 20px 0;\n  margin-top: 20px;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.input-box[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 260px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 1.1rem;\n}\n.input-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  padding: 10px 15px;\n}\n.currencyIcon[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.input-field[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #ffcc00;\n  color: #111;\n  font-size: 20px;\n  padding: 8px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  color: #fff;\n  outline: none;\n  font-size: 14px;\n}\n.exchange-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #ccc;\n  padding: 0 10px;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.go-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ff0000,\n      #ff6600);\n  color: #fff;\n  border: none;\n  padding: 12px 40px;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 0 15px rgba(255, 100, 0, 0.5);\n  transition: 0.3s ease;\n  max-width: 230px;\n  width: 100%;\n}\n.go-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.go-btn[_ngcontent-%COMP%]:disabled {\n  transform: scale(1);\n}\n.vip-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n@media (max-width: 600px) {\n  .converter-container[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  .vip-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .exchange-icon[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n  }\n  .transfer-box[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    padding: 0px;\n    margin-top: 12px;\n    flex-wrap: wrap;\n    gap: 14px;\n  }\n}\n.P_R_5[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n@media (max-width: 1150px) {\n  .Transfer_icon_middle[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: auto;\n  }\n}\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.radio-group[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  accent-color: #ff9900;\n  transform: scale(1.2);\n}\n/*# sourceMappingURL=exchange.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Exchange, [{
    type: Component,
    args: [{ selector: "app-exchange", imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterLink
    ], template: `<div class="redirectline"><span routerLink="/home">Home</span> <img src="assets/home_icons/arrow_right.png"\r
    alt="rightArrow" width="15"> <span>My Account </span> <img src="assets/home_icons/arrow_right.png"\r
    alt="rightArrow" width="15"> <span>Currency Exchange</span></div>\r
    <h2 class="m_t_15 live_casino_title">Currency Exchange</h2>\r
\r
<div class="converter-container">\r
  <div class="toggle-buttons">\r
    <button class="btn" [class.active]="selectedMode === 'usdToInr'" (click)="setMode('usdToInr')">\r
      USD To INR\r
    </button>\r
    <button class="btn " [class.active]="selectedMode === 'inrToUsd'" (click)="setMode('inrToUsd')">\r
      INR To USD\r
    </button>\r
  </div>\r
\r
  <h2>\r
    <span class="highlight">{{ selectedMode === 'usdToInr' ? 'USD to INR' : 'INR to USD' }}</span>\r
    <span> - Convert {{ selectedMode === 'usdToInr' ? 'US Dollars to INR' : 'Indian Rupees to USD' }}</span>\r
\r
  </h2>\r
\r
  <div class="limits" *ngIf="selectedMode === 'usdToInr'">\r
    <span class="limit">Min: <strong>1 USD</strong></span>\r
    <span class="limit">Max: <strong>1,000 USD</strong></span>\r
    <span class="limit">Daily Limit: <strong>10,000 USD</strong></span>\r
  </div>\r
  <div class="limits" *ngIf="selectedMode === 'inrToUsd'">\r
    <span class="limit">Min: <strong>100 INR</strong></span>\r
    <span class="limit">Max: <strong>1,000,000 INR</strong></span>\r
    <span class="limit">Daily Limit: <strong>1,000,000 INR</strong></span>\r
  </div>\r
  <p class="live_casino_title" style="font-size: 16px;" *ngIf="selectedMode === 'usdToInr'">1 USD =  <span *ngIf="!responseloader"> INR {{ inrPerUsd | number:'1.2-2'}}</span>   <span *ngIf="responseloader" class="loader dual-ring" aria-hidden="true"></span></p>\r
  <p class="live_casino_title" style="font-size: 16px;" *ngIf="selectedMode === 'inrToUsd'">1 INR = <span *ngIf="!responseloader">  USD {{ usdPerInr | number:'1.2-2'}}</span>   <span *ngIf="responseloader" class="loader dual-ring" aria-hidden="true"></span></p>\r
<div class="vip-controls">\r
  <div class="radio-group">\r
    <label>\r
      <input type="radio" name="convertTo" (click)="loadDataToView('Cash')" value="cash" [(ngModel)]="convertTo"  />\r
      <span>Cash</span>\r
    </label>\r
    <label>\r
      <input type="radio" name="convertTo" (click)="loadDataToView('Bonus')" value="bonus" [(ngModel)]="convertTo" />\r
      <span>Bonus</span>\r
    </label>\r
  </div>\r
\r
</div>\r
  <div class="transfer-box" *ngIf="selectedMode === 'usdToInr'">\r
    <div class="input-box">\r
      <label><span class="gradient-star">*</span> SEND</label>\r
      <div class="input-field">\r
        <img class="P_R_5" src="assets/sidemenu_icons/USD.svg" alt="USD" loading="lazy" width="47">\r
        <!-- <span>{{ currency1 }}</span> -->\r
        <span class="currencyIcon">\r
          <input type="number" [(ngModel)]="convertedAmount" placeholder="Enter amount"\r
            (input)="changeConvertedVal($event.target.value)">\r
         \r
        </span>\r
      </div>\r
      <p style="color: #f00;">{{ errorMsg }}</p>\r
    </div>\r
\r
    <div class="col-sm-12 col-md-2 m_t_10 Transfer_icon_middle">\r
      <img  src="assets/sidemenu_icons/arrange-circle.svg" alt="">\r
    </div>\r
\r
    <div class="input-box">\r
      <label><span class="gradient-star">*</span> RECEIVE</label>\r
      <div class="input-field">\r
        <img class="P_R_5" src="assets/sidemenu_icons/INR.svg" alt="INR" loading="lazy" width="47">\r
        <!-- <span>INR</span> -->\r
        <span class="currencyIcon">\r
          <input type="number" [(ngModel)]="userEnteredAmount" disabled>\r
        </span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="transfer-box" *ngIf="selectedMode === 'inrToUsd'">\r
    <div class="input-box">\r
      <label><span class="gradient-star">*</span> SEND</label>\r
      <div class="input-field">\r
        <img  class="P_R_5" src="assets/sidemenu_icons/INR.svg" alt="INR" loading="lazy" width="47">\r
        <!-- <span>INR</span> -->\r
        <span class="currencyIcon">\r
          <input type="number" [(ngModel)]="convertedAmount" placeholder="Enter amount"\r
            (input)="changeAmtVal($event.target.value)">\r
        </span>\r
      </div>\r
      <p  style="color: #f00;">{{ errorMsg }}</p>\r
    </div>\r
\r
    \r
    <div class="col-sm-12 col-md-2 m_t_10 Transfer_icon_middle">\r
      <img src="assets/sidemenu_icons/arrange-circle.svg" alt="">\r
    </div>\r
    \r
    <div class="input-box">\r
      <label><span class="gradient-star">*</span> RECEIVE</label>\r
      <div class="input-field">\r
        <img class="P_R_5" src="assets/sidemenu_icons/USD.svg" alt="USD" loading="lazy" width="47">\r
        <!-- <span>USD</span> -->\r
        <span class="currencyIcon">\r
          <input type="number" [(ngModel)]="userEnteredAmount" disabled>\r
        </span>\r
      </div>\r
    </div>\r
  </div>\r
  \r
\r
\r
  <div class="button-row">\r
    <button (click)="submitExchangeCurrency()" [disabled]="isSubmitting  ||!userEnteredAmount || errorDisable" class="btn active">Lets\r
      Go!</button>\r
    </div>\r
    <p *ngIf="isError">{{errMsg}}\r
    </p>\r
</div>`, styles: ['/* src/app/pages/dashboard/exchange/exchange.css */\n.converter-container {\n  background: #1b1b1b;\n  color: #fff;\n  padding: 30px;\n  border-radius: 12px;\n  font-family: "Poppins", sans-serif;\n  margin: auto;\n}\n.toggle-buttons {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 15px;\n  background: #000;\n  width: fit-content;\n  padding: 5px;\n  border-radius: 5px;\n}\n.btn {\n  background: #2c2c2c;\n  color: #fff;\n  border: none;\n  padding: 10px 25px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn.active {\n  background:\n    linear-gradient(\n      90deg,\n      #ff3300,\n      #ff6600);\n  font-weight: 600;\n}\n.live_casino_title {\n  font-weight: 500;\n  font-size: 28px;\n  background:\n    linear-gradient(\n      90deg,\n      #CC0000 -8%,\n      #e13917 12%,\n      #f37a23 20%,\n      #ffffff 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  display: inline-flex;\n}\n.dual-ring {\n  position: relative;\n  width: 22px;\n  height: 22px;\n  margin: auto;\n  display: flex;\n  margin-left: 3px;\n}\n.highlight {\n  background: var(--gradient-text);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.limits {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin: 20px 0;\n}\n.limit {\n  background: #3b2a14;\n  color: #f1c27d;\n  padding: 8px 15px;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.transfer-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 10px;\n  padding: 20px 0;\n  margin-top: 20px;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.input-box {\n  flex: 1;\n  min-width: 260px;\n}\nlabel {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 1.1rem;\n}\n.input-field {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  padding: 10px 15px;\n}\n.currencyIcon,\ninput {\n  width: 100%;\n}\n.input-field .icon {\n  background: #ffcc00;\n  color: #111;\n  font-size: 20px;\n  padding: 8px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.input-field input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  color: #fff;\n  outline: none;\n  font-size: 14px;\n}\n.exchange-icon {\n  font-size: 24px;\n  color: #ccc;\n  padding: 0 10px;\n}\n.action {\n  margin-top: 30px;\n}\n.go-btn {\n  background:\n    linear-gradient(\n      90deg,\n      #ff0000,\n      #ff6600);\n  color: #fff;\n  border: none;\n  padding: 12px 40px;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 0 15px rgba(255, 100, 0, 0.5);\n  transition: 0.3s ease;\n  max-width: 230px;\n  width: 100%;\n}\n.go-btn:hover {\n  transform: scale(1.05);\n}\n.go-btn:disabled {\n  transform: scale(1);\n}\n.vip-controls {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n@media (max-width: 600px) {\n  .converter-container {\n    padding: 5px;\n  }\n  .vip-controls {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .exchange-icon {\n    transform: rotate(90deg);\n  }\n  .transfer-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    padding: 0px;\n    margin-top: 12px;\n    flex-wrap: wrap;\n    gap: 14px;\n  }\n}\n.P_R_5 {\n  padding-right: 5px;\n}\n@media (max-width: 1150px) {\n  .Transfer_icon_middle {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: auto;\n  }\n}\n.radio-group {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.radio-group label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.radio-group input[type=radio] {\n  accent-color: #ff9900;\n  transform: scale(1.2);\n}\n/*# sourceMappingURL=exchange.css.map */\n'] }]
  }], () => [{ type: PlayerService }, { type: Store }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Exchange, { className: "Exchange", filePath: "src/app/pages/dashboard/exchange/exchange.ts", lineNumber: 25 });
})();
export {
  Exchange
};
//# sourceMappingURL=chunk-PBI6ETG3.js.map
