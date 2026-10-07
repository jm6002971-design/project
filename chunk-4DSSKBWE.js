import {
  PlayerGetProfile
} from "./chunk-PYDFV3LO.js";
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
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-FAEKDNT6.js";
import "./chunk-2Y7B2BAT.js";
import {
  Store
} from "./chunk-V7ZNEVP2.js";
import {
  Router,
  RouterLink
} from "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
  CurrencyPipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe
} from "./chunk-S5ZOBF7L.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J735AYEO.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EAJ6W5YO.js";

// src/app/pages/dashboard/cashier/cashier.ts
var _c0 = (a0, a1) => ({ "placeholder": a0, "selected": a1 });
var _c1 = (a0) => ({ "backp_color": a0 });
function Cashier_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p");
    \u0275\u0275element(2, "i", 7);
    \u0275\u0275text(3, " Cashouts in INR can take upto 24 hours. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275element(5, "i", 7);
    \u0275\u0275text(6, " Crypto cashouts can take upto 4 hours. ");
    \u0275\u0275elementEnd()();
  }
}
function Cashier_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function Cashier_button_13_Template_button_click_0_listener() {
      const action_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActive(action_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeAction === action_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r2, " ");
  }
}
function Cashier_div_14_div_15_div_2_div_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F Amount is required");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_14_div_15_div_2_div_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F Minimum amount is ", ctx_r2.minAmount, "");
  }
}
function Cashier_div_14_div_15_div_2_div_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F Maximum amount is ", ctx_r2.maxAmount, "");
  }
}
function Cashier_div_14_div_15_div_2_div_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F Numbers only");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_14_div_15_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, Cashier_div_14_div_15_div_2_div_6_span_1_Template, 2, 0, "span", 4)(2, Cashier_div_14_div_15_div_2_div_6_span_2_Template, 2, 1, "span", 4)(3, Cashier_div_14_div_15_div_2_div_6_span_3_Template, 2, 1, "span", 4)(4, Cashier_div_14_div_15_div_2_div_6_span_4_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.walletForm.get("amount")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.walletForm.get("amount")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["min"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r2.walletForm.get("amount")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["max"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r2.walletForm.get("amount")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["pattern"]);
  }
}
function Cashier_div_14_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "label")(2, "span", 22);
    \u0275\u0275text(3, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Amount :");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 23);
    \u0275\u0275template(6, Cashier_div_14_div_15_div_2_div_6_Template, 5, 4, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", ctx_r2.placeholderText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r2.walletForm.get("amount")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r2.walletForm.get("amount")) == null ? null : tmp_4_0.invalid));
  }
}
function Cashier_div_14_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "form", 18);
    \u0275\u0275listener("ngSubmit", function Cashier_div_14_div_15_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submit("CRIPTO"));
    });
    \u0275\u0275template(2, Cashier_div_14_div_15_div_2_Template, 7, 2, "div", 19);
    \u0275\u0275elementStart(3, "div", 5)(4, "button", 20);
    \u0275\u0275text(5, " Deposit ");
    \u0275\u0275element(6, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.walletForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.showPaymentOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.walletForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.apiLoader ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
  }
}
function Cashier_div_14_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275listener("click", function Cashier_div_14_div_16_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.bitcoin("343"));
    });
    \u0275\u0275element(2, "img", 28);
    \u0275\u0275elementEnd()();
  }
}
function Cashier_div_14_div_17_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u26A0\uFE0F Amount is required ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_14_div_17_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u26A0\uFE0F Minimum amount is 100 ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_14_div_17_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u26A0\uFE0F Maximum amount is 50,000 ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_14_div_17_div_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u26A0\uFE0F Numbers only ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_14_div_17_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, Cashier_div_14_div_17_div_8_span_1_Template, 2, 0, "span", 4)(2, Cashier_div_14_div_17_div_8_span_2_Template, 2, 0, "span", 4)(3, Cashier_div_14_div_17_div_8_span_3_Template, 2, 0, "span", 4)(4, Cashier_div_14_div_17_div_8_span_4_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.walletFormVOUCHERDeposit.get("amount")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.walletFormVOUCHERDeposit.get("amount")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["min"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.walletFormVOUCHERDeposit.get("amount")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["max"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r2.walletFormVOUCHERDeposit.get("amount")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]);
  }
}
function Cashier_div_14_div_17_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u26A0\uFE0F Coupon is required ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_14_div_17_div_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ' \u26A0\uFE0F Only letters, numbers and "_" allowed ');
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_14_div_17_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, Cashier_div_14_div_17_div_15_span_1_Template, 2, 0, "span", 4)(2, Cashier_div_14_div_17_div_15_span_2_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.walletFormVOUCHERDeposit.get("coupon")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.walletFormVOUCHERDeposit.get("coupon")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
  }
}
function Cashier_div_14_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "form", 18);
    \u0275\u0275listener("ngSubmit", function Cashier_div_14_div_17_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submit("VOUCHER"));
    });
    \u0275\u0275elementStart(2, "div", 21)(3, "label")(4, "span", 22);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Amount :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 29);
    \u0275\u0275listener("keypress", function Cashier_div_14_div_17_Template_input_keypress_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.numberOnly($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, Cashier_div_14_div_17_div_8_Template, 5, 4, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21)(10, "label")(11, "span", 22);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Coupon :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 30);
    \u0275\u0275listener("input", function Cashier_div_14_div_17_Template_input_input_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCouponInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, Cashier_div_14_div_17_div_15_Template, 3, 2, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 31)(17, "span", 32);
    \u0275\u0275text(18, "Don't have a voucher?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 33);
    \u0275\u0275text(20, " Click here! ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 5)(22, "button", 20);
    \u0275\u0275text(23, " Deposit ");
    \u0275\u0275element(24, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.walletFormVOUCHERDeposit);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r2.walletFormVOUCHERDeposit.get("amount")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r2.walletFormVOUCHERDeposit.get("amount")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r2.walletFormVOUCHERDeposit.get("coupon")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r2.walletFormVOUCHERDeposit.get("coupon")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r2.walletFormVOUCHERDeposit.invalid || ctx_r2.apiLoader);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.apiLoader ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
  }
}
function Cashier_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "label", 10)(3, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function Cashier_div_14_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.Depositcurrency, $event) || (ctx_r2.Depositcurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5, " INR ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label", 10)(7, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function Cashier_div_14_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.Depositcurrency, $event) || (ctx_r2.Depositcurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9, " USD ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 10)(11, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function Cashier_div_14_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.Depositcurrency, $event) || (ctx_r2.Depositcurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 12);
    \u0275\u0275element(13, "img", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "hr", 16);
    \u0275\u0275template(15, Cashier_div_14_div_15_Template, 7, 6, "div", 4)(16, Cashier_div_14_div_16_Template, 3, 0, "div", 17)(17, Cashier_div_14_div_17_Template, 25, 7, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.Depositcurrency);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r2.Depositcurrency === "INR");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.Depositcurrency);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r2.Depositcurrency === "USD");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.Depositcurrency);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r2.Depositcurrency === "VOUCHER");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.Depositcurrency == "INR" || ctx_r2.Depositcurrency == "IMPS");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.Depositcurrency === "USD");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.Depositcurrency === "VOUCHER");
  }
}
function Cashier_div_15_div_16_span_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Enter your Email! ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_16_span_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Enter valid Email! ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_16_span_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Enter valid Email format! ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275template(1, Cashier_div_15_div_16_span_10_span_1_Template, 2, 0, "span", 4)(2, Cashier_div_15_div_16_span_10_span_2_Template, 2, 0, "span", 4)(3, Cashier_div_15_div_16_span_10_span_3_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.usdForm.get("cashoutsend.email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.usdForm.get("cashoutsend.email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["email"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.usdForm.get("cashoutsend.email")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]);
  }
}
function Cashier_div_15_div_16_small_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u26A0\uFE0F USDT Address is required! ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_16_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275template(1, Cashier_div_15_div_16_small_17_span_1_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.usdForm.get("cashoutsend.usdtAddress")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function Cashier_div_15_div_16_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_16_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_16_ul_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 61)(1, "li", 62);
    \u0275\u0275listener("click", function Cashier_div_15_div_16_ul_28_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectCurrency("USDT"));
    });
    \u0275\u0275text(2, "USDT (TRC20)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "li", 63);
    \u0275\u0275listener("click", function Cashier_div_15_div_16_ul_28_Template_li_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectCurrency("TRX"));
    });
    \u0275\u0275text(4, "TRX (TRC20) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "li", 63);
    \u0275\u0275listener("click", function Cashier_div_15_div_16_ul_28_Template_li_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectCurrency("bsc"));
    });
    \u0275\u0275text(6, "BSC (BEP20) ");
    \u0275\u0275elementEnd()();
  }
}
function Cashier_div_15_div_16_small_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u26A0\uFE0F USDT Address Type is required! ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_16_small_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275template(1, Cashier_div_15_div_16_small_29_span_1_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.usdForm.get("cashoutsend.usdtAddressType")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function Cashier_div_15_div_16_span_43_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Payout Amount is required ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_16_span_43_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Payout Amount must be min 10 max 5,000 ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_16_span_43_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Only numeric values are allowed ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_16_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275template(1, Cashier_div_15_div_16_span_43_span_1_Template, 2, 0, "span", 4)(2, Cashier_div_15_div_16_span_43_span_2_Template, 2, 0, "span", 4)(3, Cashier_div_15_div_16_span_43_span_3_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.usdForm.get("cashoutsend.amount")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r2.usdForm.get("cashoutsend.amount")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["min"]) || ((tmp_4_0 = ctx_r2.usdForm.get("cashoutsend.amount")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["max"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.usdForm.get("cashoutsend.amount")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]);
  }
}
function Cashier_div_15_div_16_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Amount exceeds your available balance (", \u0275\u0275pipeBind4(2, 1, ctx_r2.waletAmountUsd, "USD", "symbol", "1.2-2"), ") ");
  }
}
function Cashier_div_15_div_16_div_45_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 68);
  }
}
function Cashier_div_15_div_16_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "label", 49);
    \u0275\u0275text(2, "Amount of TRX you will receive");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 66);
    \u0275\u0275template(4, Cashier_div_15_div_16_div_45_span_4_Template, 1, 0, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.AmountUSD / ctx_r2.Cryptoprices);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.CryptopricesLoader);
  }
}
function Cashier_div_15_div_16_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 69);
  }
}
function Cashier_div_15_div_16_p_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errMsg);
  }
}
function Cashier_div_15_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "form", 38);
    \u0275\u0275listener("ngSubmit", function Cashier_div_15_div_16_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.withdraw());
    });
    \u0275\u0275elementStart(2, "div", 39)(3, "div", 40)(4, "label", 41)(5, "span", 22);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 42);
    \u0275\u0275elementStart(9, "small", 25);
    \u0275\u0275template(10, Cashier_div_15_div_16_span_10_Template, 4, 3, "span", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 40)(12, "label", 44)(13, "span", 22);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " USDT Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 45);
    \u0275\u0275listener("ngModelChange", function Cashier_div_15_div_16_Template_input_ngModelChange_16_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.validateAddressLive());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, Cashier_div_15_div_16_small_17_Template, 2, 1, "small", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 39)(19, "div", 40)(20, "label", 44)(21, "span", 22);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " USDT Address Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 46);
    \u0275\u0275listener("click", function Cashier_div_15_div_16_Template_div_click_24_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleDropdown());
    });
    \u0275\u0275text(25);
    \u0275\u0275template(26, Cashier_div_15_div_16_span_26_Template, 2, 0, "span", 4)(27, Cashier_div_15_div_16_span_27_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, Cashier_div_15_div_16_ul_28_Template, 7, 0, "ul", 47)(29, Cashier_div_15_div_16_small_29_Template, 2, 1, "small", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 48)(31, "label", 49)(32, "span", 22);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Available For Payout");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 40)(37, "label", 49)(38, "span", 22);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Cashout amount in USD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 51);
    \u0275\u0275listener("keypress", function Cashier_div_15_div_16_Template_input_keypress_41_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.amountEnter($event));
    })("input", function Cashier_div_15_div_16_Template_input_input_41_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.validateAmount());
    });
    \u0275\u0275twoWayListener("ngModelChange", function Cashier_div_15_div_16_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.AmountUSD, $event) || (ctx_r2.AmountUSD = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "small", 25);
    \u0275\u0275template(43, Cashier_div_15_div_16_span_43_Template, 4, 3, "span", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, Cashier_div_15_div_16_div_44_Template, 3, 6, "div", 52)(45, Cashier_div_15_div_16_div_45_Template, 5, 2, "div", 53);
    \u0275\u0275elementStart(46, "div", 54)(47, "button", 55)(48, "span");
    \u0275\u0275text(49, "Withdrawal ");
    \u0275\u0275element(50, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, Cashier_div_15_div_16_span_51_Template, 1, 0, "span", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, Cashier_div_15_div_16_p_52_Template, 2, 1, "p", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_11_0;
    let tmp_15_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.usdForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r2.ussdemail);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r2.usdForm.get("cashoutsend.email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r2.usdForm.get("cashoutsend.email")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r2.usdForm.get("cashoutsend.usdtAddress")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r2.usdForm.get("cashoutsend.usdtAddress")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(23, _c0, !ctx_r2.selectedCurrency1, ctx_r2.selectedCurrency1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedCurrency1 || "Select Currency Type", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isDropdownOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isDropdownOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isDropdownOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r2.usdForm.get("cashoutsend.usdtAddressType")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r2.usdForm.get("cashoutsend.usdtAddressType")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.waletAmountUsd)("disabled", true);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.AmountUSD);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_15_0 = ctx_r2.usdForm.get("cashoutsend.amount")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r2.usdForm.get("cashoutsend.amount")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showAmountError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedCurrency === "TRX" && ctx_r2.AmountUSD && ctx_r2.AmountUSD >= 10 && ctx_r2.Cryptoprices);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c1, ctx_r2.usdForm.invalid || ctx_r2.CryptopricesLoader))("disabled", ctx_r2.usdForm.invalid || !ctx_r2.Cryptoprices || ctx_r2.CryptopricesLoader || ctx_r2.showAmountError || ctx_r2.errMsg);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.apiLoader ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.historyloader);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errMsg);
  }
}
function Cashier_div_15_div_17_form_1_small_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Amount is required");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_17_form_1_small_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Amount must be a number");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_17_form_1_small_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Minimum amount is 1,000");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_17_form_1_small_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Maximum amount is 19,999");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_17_form_1_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275template(1, Cashier_div_15_div_17_form_1_small_8_span_1_Template, 2, 0, "span", 4)(2, Cashier_div_15_div_17_form_1_small_8_span_2_Template, 2, 0, "span", 4)(3, Cashier_div_15_div_17_form_1_small_8_span_3_Template, 2, 0, "span", 4)(4, Cashier_div_15_div_17_form_1_small_8_span_4_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.criptoWithDrawalForm.get("amount")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.criptoWithDrawalForm.get("amount")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r2.criptoWithDrawalForm.get("amount")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["min"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r2.criptoWithDrawalForm.get("amount")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["max"]);
  }
}
function Cashier_div_15_div_17_form_1_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, " Account name is required ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_17_form_1_div_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, " Account name is invalid ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_17_form_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, Cashier_div_15_div_17_form_1_div_15_span_1_Template, 2, 0, "span", 79)(2, Cashier_div_15_div_17_form_1_div_15_span_2_Template, 2, 0, "span", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.criptoWithDrawalForm.get("name")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.criptoWithDrawalForm.get("name")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]);
  }
}
function Cashier_div_15_div_17_form_1_div_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, " Account number is required ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_17_form_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, Cashier_div_15_div_17_form_1_div_23_span_1_Template, 2, 0, "span", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.criptoWithDrawalForm.get("personalNumber")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
  }
}
function Cashier_div_15_div_17_form_1_div_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, " IFSC is required ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_17_form_1_div_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, " Invalid IFSC Format (Example: HDFC0001234) ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_17_form_1_div_30_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, " IFSC must be exactly 15 characters ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_17_form_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, Cashier_div_15_div_17_form_1_div_30_span_1_Template, 2, 0, "span", 79)(2, Cashier_div_15_div_17_form_1_div_30_span_2_Template, 2, 0, "span", 79)(3, Cashier_div_15_div_17_form_1_div_30_span_3_Template, 2, 0, "span", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.criptoWithDrawalForm.get("ifsc")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.criptoWithDrawalForm.get("ifsc")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r2.criptoWithDrawalForm.get("ifsc")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["minlength"]) || ((tmp_6_0 = ctx_r2.criptoWithDrawalForm.get("ifsc")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["maxlength"]));
  }
}
function Cashier_div_15_div_17_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 38);
    \u0275\u0275listener("ngSubmit", function Cashier_div_15_div_17_form_1_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onWithdrawSubmit());
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "div", 48)(3, "label", 72)(4, "span", 22);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 73);
    \u0275\u0275listener("keypress", function Cashier_div_15_div_17_form_1_Template_input_keypress_7_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.phonenum($event));
    })("input", function Cashier_div_15_div_17_form_1_Template_input_input_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.checkMaxAmount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, Cashier_div_15_div_17_form_1_small_8_Template, 5, 4, "small", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 48)(10, "label", 74)(11, "span", 22);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Account Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 75);
    \u0275\u0275listener("keypress", function Cashier_div_15_div_17_form_1_Template_input_keypress_14_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.accountName($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, Cashier_div_15_div_17_form_1_div_15_Template, 3, 2, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 39)(17, "div", 48)(18, "label", 76)(19, "span", 22);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 77);
    \u0275\u0275listener("keypress", function Cashier_div_15_div_17_form_1_Template_input_keypress_22_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.Accontnumber($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, Cashier_div_15_div_17_form_1_div_23_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 48)(25, "label")(26, "span", 22);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " IFSC Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 78);
    \u0275\u0275listener("keypress", function Cashier_div_15_div_17_form_1_Template_input_keypress_29_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.allowIFSCInput($event));
    })("input", function Cashier_div_15_div_17_form_1_Template_input_input_29_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toUppercaseIFSC());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, Cashier_div_15_div_17_form_1_div_30_Template, 4, 3, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 5)(32, "button", 55);
    \u0275\u0275text(33, " Withdrawal ");
    \u0275\u0275element(34, "i");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r2.criptoWithDrawalForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r2.criptoWithDrawalForm.get("amount")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r2.criptoWithDrawalForm.get("amount")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r2.criptoWithDrawalForm.get("name")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r2.criptoWithDrawalForm.get("name")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r2.criptoWithDrawalForm.get("personalNumber")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r2.criptoWithDrawalForm.get("personalNumber")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r2.criptoWithDrawalForm.get("ifsc")) == null ? null : tmp_7_0.touched);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx_r2.criptoWithDrawalForm.invalid))("disabled", ctx_r2.criptoWithDrawalForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.apiLoader ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
  }
}
function Cashier_div_15_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "button", 81);
    \u0275\u0275text(2, " + Add Bank Account ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Please add your bank account to continue withdrawals.");
    \u0275\u0275elementEnd()();
  }
}
function Cashier_div_15_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Cashier_div_15_div_17_form_1_Template, 35, 12, "form", 71)(2, Cashier_div_15_div_17_div_2_Template, 5, 0, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasBankAccount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.hasBankAccount);
  }
}
function Cashier_div_15_div_18_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F Amount is required");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_18_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F Minimum amount is 1,000");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_18_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F Maximum amount is 50,000");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_18_div_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F Numbers only");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, Cashier_div_15_div_18_div_8_span_1_Template, 2, 0, "span", 4)(2, Cashier_div_15_div_18_div_8_span_2_Template, 2, 0, "span", 4)(3, Cashier_div_15_div_18_div_8_span_3_Template, 2, 0, "span", 4)(4, Cashier_div_15_div_18_div_8_span_4_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.walletFormVOUCHER.get("amount")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.walletFormVOUCHER.get("amount")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["min"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.walletFormVOUCHER.get("amount")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["max"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r2.walletFormVOUCHER.get("amount")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]);
  }
}
function Cashier_div_15_div_18_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F Email is required");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_18_div_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F Enter Valid e-mail");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_15_div_18_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, Cashier_div_15_div_18_div_15_span_1_Template, 2, 0, "span", 4)(2, Cashier_div_15_div_18_div_15_span_2_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.walletFormVOUCHER.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.walletFormVOUCHER.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
  }
}
function Cashier_div_15_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "form", 18);
    \u0275\u0275listener("ngSubmit", function Cashier_div_15_div_18_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitVOUCHER());
    });
    \u0275\u0275elementStart(2, "div", 21)(3, "label")(4, "span", 22);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Amount :");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 82);
    \u0275\u0275template(8, Cashier_div_15_div_18_div_8_Template, 5, 4, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21)(10, "label")(11, "span", 22);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Email :");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 83);
    \u0275\u0275template(15, Cashier_div_15_div_18_div_15_Template, 3, 2, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 5)(17, "button", 20);
    \u0275\u0275text(18, "Withdrawal ");
    \u0275\u0275element(19, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.walletFormVOUCHER);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r2.walletFormVOUCHER.get("amount")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r2.walletFormVOUCHER.get("amount")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r2.walletFormVOUCHER.get("email")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r2.walletFormVOUCHER.get("email")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.walletFormVOUCHER.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.apiLoadervoucher ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
  }
}
function Cashier_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "label")(3, "input", 34);
    \u0275\u0275listener("click", function Cashier_div_15_Template_input_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.AddUF("INR"));
    });
    \u0275\u0275twoWayListener("ngModelChange", function Cashier_div_15_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.Withdrawalcurrency, $event) || (ctx_r2.Withdrawalcurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "INR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label")(7, "input", 35);
    \u0275\u0275listener("click", function Cashier_div_15_Template_input_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.AddUF("USD"));
    });
    \u0275\u0275twoWayListener("ngModelChange", function Cashier_div_15_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.Withdrawalcurrency, $event) || (ctx_r2.Withdrawalcurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label")(11, "input", 36);
    \u0275\u0275listener("click", function Cashier_div_15_Template_input_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.AddUF("VOUCHER"));
    });
    \u0275\u0275twoWayListener("ngModelChange", function Cashier_div_15_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.Withdrawalcurrency, $event) || (ctx_r2.Withdrawalcurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "VOUCHER");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "hr", 16);
    \u0275\u0275elementStart(15, "div", 37);
    \u0275\u0275template(16, Cashier_div_15_div_16_Template, 53, 28, "div", 4)(17, Cashier_div_15_div_17_Template, 3, 2, "div", 4)(18, Cashier_div_15_div_18_Template, 20, 7, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.Withdrawalcurrency);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r2.Withdrawalcurrency === "INR");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.Withdrawalcurrency);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r2.Withdrawalcurrency === "USD");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.Withdrawalcurrency);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r2.Withdrawalcurrency === "VOUCHER");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.Withdrawalcurrency === "USD");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.Withdrawalcurrency === "INR");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.Withdrawalcurrency === "VOUCHER");
  }
}
function Cashier_div_16_input_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 95);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r2.availableForPayout);
  }
}
function Cashier_div_16_input_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 96);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r2.waletAmountUsd);
  }
}
function Cashier_div_16_span_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enter your Nickname!");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_span_28_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Nickname must be at least 4 characters!");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_span_28_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enter alphabets and numeric only!");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275template(1, Cashier_div_16_span_28_span_1_Template, 2, 0, "span", 4)(2, Cashier_div_16_span_28_span_2_Template, 2, 0, "span", 4)(3, Cashier_div_16_span_28_span_3_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.transferChipForm.get("nickname")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.transferChipForm.get("nickname")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.transferChipForm.get("nickname")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
  }
}
function Cashier_div_16_small_36_span_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Enter Your Amount");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_small_36_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Minimum 1,000");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_small_36_span_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Maximum 100,000");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_small_36_span_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Enter Valid Amount");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_small_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275template(1, Cashier_div_16_small_36_span_1_span_1_Template, 2, 0, "span", 4)(2, Cashier_div_16_small_36_span_1_span_2_Template, 2, 0, "span", 4)(3, Cashier_div_16_small_36_span_1_span_3_Template, 2, 0, "span", 4)(4, Cashier_div_16_small_36_span_1_span_4_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["min"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["max"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]);
  }
}
function Cashier_div_16_small_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 94);
    \u0275\u0275template(1, Cashier_div_16_small_36_span_1_Template, 5, 4, "span", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_2_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_2_0.valid) && ((tmp_2_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_2_0.touched));
  }
}
function Cashier_div_16_small_37_span_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Enter Your Amount");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_small_37_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Minimum 10");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_small_37_span_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Maximum 1,000");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_small_37_span_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Enter Valid Amount");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_small_37_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275template(1, Cashier_div_16_small_37_span_1_span_1_Template, 2, 0, "span", 4)(2, Cashier_div_16_small_37_span_1_span_2_Template, 2, 0, "span", 4)(3, Cashier_div_16_small_37_span_1_span_3_Template, 2, 0, "span", 4)(4, Cashier_div_16_small_37_span_1_span_4_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["min"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["max"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]);
  }
}
function Cashier_div_16_small_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 94);
    \u0275\u0275template(1, Cashier_div_16_small_37_span_1_Template, 5, 4, "span", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_2_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_2_0.valid) && ((tmp_2_0 = ctx_r2.transferChipForm.get("amount")) == null ? null : tmp_2_0.touched));
  }
}
function Cashier_div_16_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 97);
    \u0275\u0275text(1, "* Minimum 1,000 Maximum 100,000");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_small_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 97);
    \u0275\u0275text(1, "* Minimum 10 Maximum 1,000 ");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_span_48_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Allowed characters are");
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_16_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275template(1, Cashier_div_16_span_48_span_1_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.transferChipForm.get("message")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function Cashier_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "label")(3, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function Cashier_div_16_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.Transfercurrency, $event) || (ctx_r2.Transfercurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function Cashier_div_16_Template_input_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changechps("INR"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "INR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label")(7, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function Cashier_div_16_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.Transfercurrency, $event) || (ctx_r2.Transfercurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function Cashier_div_16_Template_input_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changechps("USD"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "USD");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "hr", 16);
    \u0275\u0275elementStart(11, "div", 37)(12, "form", 38);
    \u0275\u0275listener("ngSubmit", function Cashier_div_16_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.transfer());
    });
    \u0275\u0275elementStart(13, "div", 39)(14, "div", 48)(15, "label", 49)(16, "span", 22);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Balance : ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, Cashier_div_16_input_19_Template, 1, 1, "input", 86)(20, Cashier_div_16_input_20_Template, 1, 1, "input", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 48)(22, "label", 49)(23, "span", 22);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Transfer To Player ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 88);
    \u0275\u0275elementStart(27, "small", 25);
    \u0275\u0275template(28, Cashier_div_16_span_28_Template, 4, 3, "span", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 39)(30, "div", 48)(31, "label", 49)(32, "span", 22);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Amount ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 89);
    \u0275\u0275listener("keypress", function Cashier_div_16_Template_input_keypress_35_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.enterAMountChi($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, Cashier_div_16_small_36_Template, 2, 1, "small", 90)(37, Cashier_div_16_small_37_Template, 2, 1, "small", 91);
    \u0275\u0275element(38, "br");
    \u0275\u0275template(39, Cashier_div_16_small_39_Template, 2, 0, "small", 92)(40, Cashier_div_16_small_40_Template, 2, 0, "small", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 48)(42, "label", 49)(43, "span", 22);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Comments ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "textarea", 93);
    \u0275\u0275elementStart(47, "small", 94);
    \u0275\u0275template(48, Cashier_div_16_span_48_Template, 2, 1, "span", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 5)(50, "button", 55)(51, "span");
    \u0275\u0275text(52, "Transfer ");
    \u0275\u0275element(53, "i");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.Transfercurrency);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r2.Transfercurrency === "INR");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.Transfercurrency);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r2.Transfercurrency === "USD");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r2.transferChipForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.nametrueFles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.nametrueFles);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !((tmp_8_0 = ctx_r2.transferChipForm.get("nickname")) == null ? null : tmp_8_0.valid) && ((tmp_8_0 = ctx_r2.transferChipForm.get("nickname")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.walletCCode === "INR");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.walletCCode === "USD");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.walletCCode === "INR");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.walletCCode === "USD");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !((tmp_13_0 = ctx_r2.transferChipForm.get("message")) == null ? null : tmp_13_0.valid) && ((tmp_13_0 = ctx_r2.transferChipForm.get("message")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c1, ctx_r2.transferChipForm.invalid))("disabled", ctx_r2.transferChipForm.invalid);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.apiLoader ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
  }
}
function Cashier_div_17_div_1_tbody_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tbody")(1, "tr")(2, "td", 104)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "slice");
    \u0275\u0275pipe(10, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 106)(14, "button", 107);
    \u0275\u0275listener("click", function Cashier_div_17_div_1_tbody_20_Template_button_click_14_listener() {
      const withdraw_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelwithdrawal(withdraw_r15.refTxnID));
    });
    \u0275\u0275text(15, "REVERSE ");
    \u0275\u0275element(16, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const withdraw_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(withdraw_r15.currency == "USD" ? "$" : "\u20B9");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, withdraw_r15.amount), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(9, 10, withdraw_r15.creationDate, 0, 10), " - ", \u0275\u0275pipeBind3(10, 14, withdraw_r15.creationDate, 12, 19), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(withdraw_r15.status);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.loadingId === withdraw_r15.refTxnID ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
  }
}
function Cashier_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "table", 103)(2, "thead")(3, "tr")(4, "th", 104)(5, "span", 22);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th")(9, "span", 22);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th")(13, "span", 22);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th")(17, "span", 22);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, Cashier_div_17_div_1_tbody_20_Template, 17, 18, "tbody", 105);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r2.WithdrawsResponse);
  }
}
function Cashier_div_17_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errMsg);
  }
}
function Cashier_div_17_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275element(1, "img", 120);
    \u0275\u0275elementEnd();
  }
}
function Cashier_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 110)(2, "div", 111)(3, "span", 112);
    \u0275\u0275listener("click", function Cashier_div_17_div_3_Template_span_click_3_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeIframe());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 113);
    \u0275\u0275element(5, "line", 114)(6, "line", 115);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 116);
    \u0275\u0275template(8, Cashier_div_17_div_3_div_8_Template, 2, 0, "div", 117);
    \u0275\u0275elementStart(9, "iframe", 118);
    \u0275\u0275listener("load", function Cashier_div_17_div_3_Template_iframe_load_9_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onIframeLoaded());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r2.iframeLoaded);
    \u0275\u0275advance();
    \u0275\u0275classProp("loaded", ctx_r2.iframeLoaded);
    \u0275\u0275property("src", ctx_r2.urlSafe, \u0275\u0275sanitizeResourceUrl);
  }
}
function Cashier_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275element(1, "img", 122);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", "/assets/giflogo.gif?" + ctx_r2.loaderKey, \u0275\u0275sanitizeUrl);
  }
}
function Cashier_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Cashier_div_17_div_1_Template, 21, 1, "div", 98)(2, Cashier_div_17_h1_2_Template, 2, 1, "h1", 99)(3, Cashier_div_17_div_3_Template, 10, 4, "div", 100)(4, Cashier_div_17_div_4_Template, 2, 1, "div", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.WithdrawsResponse.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errMsg);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.urlSafe);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.responseLoader);
  }
}
var Cashier = class _Cashier {
  constructor(fb, messageService, commonUtilSer, store, playerSer, router) {
    this.fb = fb;
    this.messageService = messageService;
    this.commonUtilSer = commonUtilSer;
    this.store = store;
    this.playerSer = playerSer;
    this.router = router;
    this.actions = ["Deposit", "Withdrawal", "Transfer to Player", "Pending Withdrawals"];
    this.activeAction = "Deposit";
    this.nametrueFles = true;
    this.Depositcurrency = "INR";
    this.Withdrawalcurrency = "INR";
    this.Transfercurrency = "INR";
    this.playerLoggedIn = false;
    this.iframeLoaded = false;
    this.paymentMethod = 342;
    this.isError = false;
    this.errMsg = "";
    this.prefCurrency = "";
    this.isDropdownOpen = false;
    this.CryptopricesLoader = false;
    this.historyloader = false;
    this.walletCCode = "INR";
    this.WithdrawsResponse = [];
    this.apiLoader = false;
    this.apiLoadervoucher = false;
    this.selectedCurrency = "";
    this.paymentNewMethod = "344";
    this.availableForPayout = null;
    this.showAmountError = false;
    this.payoutamount = [];
    this.cashOutAmount = 0;
    this.responseLoader = false;
    this.loaderKey = Date.now();
    this.loadingId = null;
    this.hasBankAccount = true;
    this.minAmount = "500";
    this.maxAmount = "50000";
    this.paymentType = "INR";
    this.placeholderText = "Amount Min 500 Max 50,000";
    this.paymentMethods = {};
    this.paymentResponse = {};
    this.paymentMethodsResponse = {};
    this.paymentSystemButtons = [];
    this.selectedPaymentSystem = "";
    this.selectedRecords = [];
    this.selectedMethod = null;
    this.paymentMethodsLoaded = false;
    this.showPaymentOptions = false;
    this.cashOutAmount = this.payoutamount[0];
  }
  get f() {
    return this.criptoWithDrawalForm.controls;
  }
  ngOnInit() {
    this.moveToTop();
    this.profile1();
    this.userBalance();
    this.AddUF("INR");
    this.store.select("loginState").subscribe((loginState) => {
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.store.dispatch(new CashierGetBalanceStart());
        }
      }
    });
    this.walletForm = new FormGroup({
      amount: new FormControl(null, [
        Validators.required,
        Validators.min(this.minAmount),
        Validators.max(this.maxAmount),
        Validators.pattern(/^[0-9]*$/)
      ])
    });
    this.walletFormVOUCHER = new FormGroup({
      amount: new FormControl("", [
        Validators.required,
        Validators.min(1e3),
        Validators.max(5e4),
        Validators.pattern(/^[0-9]*$/)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])
    });
    this.walletFormVOUCHERDeposit = this.fb.group({
      amount: [
        "",
        [
          Validators.required,
          Validators.min(100),
          Validators.max(5e4),
          Validators.pattern("^[0-9]+$")
        ]
      ],
      coupon: [
        "",
        [
          Validators.required,
          Validators.pattern("^[A-Za-z0-9_]+$")
        ]
      ]
    });
    this.getDeviceType();
    this.transferwalletFormUSD = this.fb.group({
      transfertotransferU: [],
      transferusernameU: [],
      transferamountU: [],
      textareaU: []
    });
    this.transferwalletFormINR = this.fb.group({
      transfertotransferI: [],
      transferusernameI: [],
      transferamountI: [],
      textareaI: []
    });
    this.initializeCHPForm();
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
  changechps(chpis) {
    this.walletCCode = chpis;
    this.wattetType = chpis;
    this.Transfercurrency = chpis;
    if (chpis == "INR") {
      this.initializeCHPForm();
      this.nametrueFles = true;
    } else {
      this.initializeUSDForm();
      this.nametrueFles = false;
    }
    this.userBalance();
    this.loadWalletsData(this.walleteInfo);
  }
  PtoPUSDCHP(data) {
    this.walletCCode = data;
  }
  initializeCHPForm() {
    this.transferChipForm = new FormGroup({
      nickname: new FormControl("", Validators.required),
      message: new FormControl("", Validators.pattern("^[a-zA-Z0-9 ]*$")),
      amount: new FormControl("", [Validators.required, Validators.min(1e3), Validators.max(1e5), Validators.pattern("^[0-9]*$")]),
      franc: new FormControl("00"),
      payoutvalue: new FormControl({ value: this.availableForPayout, disabled: true }, Validators.required)
    });
  }
  initializeUSDForm() {
    this.transferChipForm = new FormGroup({
      nickname: new FormControl("", Validators.required),
      message: new FormControl("", Validators.pattern("^[a-zA-Z0-9 ]*$")),
      amount: new FormControl("", [Validators.required, Validators.min(10), Validators.max(1e3), Validators.pattern("^[0-9]*$")]),
      franc: new FormControl("00"),
      payoutvalue: new FormControl({ value: this.waletAmountUsd, disabled: true }, Validators.required)
    });
  }
  setActive(action) {
    this.historyloader = false;
    this.apiLoader = false;
    this.apiLoadervoucher = false;
    this.activeAction = action;
    if (action == "Transfer to Player") {
      this.changechps("INR");
    }
    if (action == "Pending Withdrawals") {
      this.openwith();
      this.showLoader();
    }
    this.moveToTop();
    this.profile1();
  }
  showLoader() {
    this.loaderKey = Date.now();
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
  }
  submitVOUCHER() {
    if (!this.playerLoggedIn)
      return;
    if (this.walletFormVOUCHER.invalid) {
      this.walletFormVOUCHER.markAllAsTouched();
      return;
    }
    this.apiLoadervoucher = true;
    const body = {
      amount: this.walletFormVOUCHER.value.amount,
      paymentMethod: "351",
      accountType: "VOUCHER",
      voucherCashout: true,
      bankAccountNumber: this.walletFormVOUCHER.value.email
    };
    this.playerSer.getVOUCHERapi(body).subscribe({
      next: (data) => {
        if (data?.success) {
          this.messageService.success("Success", `Withdrawal Success
             A voucher will be sent to email`);
          this.walletFormVOUCHER.reset();
        }
        this.apiLoadervoucher = false;
      },
      error: () => {
        this.apiLoadervoucher = false;
      }
    });
  }
  // Allow only numbers in amount
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  // Auto uppercase coupon
  onCouponInput(event) {
    const value = event.target.value.toUpperCase();
    this.walletForm.get("coupon")?.setValue(value, { emitEvent: false });
  }
  togglePayments(event) {
    console.log(event.target.value);
    this.paymentType = event.target?.value;
    const amoutController = this.walletForm.get("amount");
    if (this.paymentType == "INR") {
      this.minAmount = 500;
      this.maxAmount = 5e4;
      this.placeholderText = `Amount min ${this.minAmount} max ${this.maxAmount}`;
      amoutController.setValidators([Validators.required, Validators.min(this.minAmount), Validators.max(this.maxAmount)]);
    } else {
      this.minAmount = 1e3;
      this.maxAmount = 1e5;
      this.placeholderText = `Amount min ${this.minAmount} max ${this.maxAmount}`;
      amoutController.setValidators([Validators.required, Validators.min(this.minAmount), Validators.max(this.maxAmount)]);
    }
  }
  submit(type) {
    console.log(type);
    this.apiLoader = true;
    if (this.playerLoggedIn) {
      this.payMethod = type;
      var paykassmaBody;
      if (type == "CRIPTO") {
        if (this.walletForm.invalid)
          return;
        paykassmaBody = {
          paymentMethod: "345",
          amount: this.walletForm.value.amount,
          currency: "INR",
          deviceIdentity: this.getDeviceType()
        };
        if (this.paymentType == "IMPS") {
          paykassmaBody = __spreadProps(__spreadValues({}, paykassmaBody), {
            payMethod: "BANK_TRANSFER"
          });
        }
      } else {
        paykassmaBody = {
          "amount": this.walletFormVOUCHERDeposit.value.amount,
          "paymentMethod": "351",
          currency: "INR",
          "payMethod": "VOUCHER",
          "voucherCashout": true,
          voucherCode: this.walletFormVOUCHERDeposit.value.coupon
        };
      }
      this.playerSer.playerDeposit(paykassmaBody).subscribe({
        next: (data) => this.paykassmaDepositHandler(data),
        error: (err) => this.handleDepositError(err)
      });
    }
  }
  getDeviceType() {
    const ua = navigator.userAgent || navigator.vendor;
    if (/android.*mobile/i.test(ua) || /iphone/i.test(ua)) {
      return "phone";
    }
    return "desktop";
  }
  paykassmaDepositHandler(data) {
    this.apiLoader = false;
    if (data.success === false) {
      this.interFalseRes = data.description;
      this.messageService.success("Success", this.interFalseRes);
      return;
    }
    if (this.payMethod === "CRIPTO" && data.result.redirectUrl) {
      window.location.href = data.result.redirectUrl;
      this.walletFormVOUCHERDeposit.reset();
    } else if (this.payMethod == "VOUCHER" && data.result) {
      console.log(data);
      if (data.success) {
        this.router.navigate(["/myaccount/transaction"]);
      }
      this.walletForm.reset();
    } else {
      this.messageService.success("Success", "Internal server error (5000)");
    }
    this.store.dispatch(new CashierGetBalanceStart());
  }
  handleDepositError(error) {
    this.messageService.success("Success", "Deposit failed. Please try again.");
  }
  onIframeLoaded() {
    this.iframeLoaded = true;
  }
  closeIframe() {
    this.urlSafe = "";
    this.iframeLoaded = false;
  }
  bitcoin(amt) {
    this.store.dispatch(new CashierGetBalanceStart());
    this.paymentMethod = amt;
    var currrnyType;
    var AmountT;
    if (this.paymentMethod == 342 || this.paymentMethod == "342") {
      currrnyType = "INR";
      AmountT = 1;
    } else {
      currrnyType = "USD";
      AmountT = 1;
    }
    var body = {
      "paymentMethod": this.paymentMethod,
      "paymentType": "deposit",
      "bonuscode": "",
      "currency": currrnyType,
      "amount": AmountT,
      "language": "EN"
      // "ip":"127.0.0.1"
    };
    this.playerSer.playerDeposit(body).subscribe((data) => {
      this.depositHandler(data);
    }, (err) => {
      this.setError(err);
    });
  }
  depositHandler(data) {
    if (data && data.success) {
      if (data["result"]["externalLink"]) {
        if (data["result"]["redirectUrl"]) {
          let redirectionurl = data["result"]["redirectUrl"];
          let urlst = redirectionurl.substr(0, 4);
          if (urlst == "http") {
            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            } else {
              this.store.dispatch(new CashierGetBalanceStart());
            }
            window.location.href = redirectionurl;
          } else {
            this.messageService.error("Failed", "Network Error While connecting to PaymentGateway, Please try after 10 Minutes");
          }
        } else {
          this.messageService.error("Failed", "Network Error While connecting to PaymentGateway, Please try after 10 Minutes");
        }
      } else {
        this.messageService.error("Failed", "Network Error While connecting to PaymentGateway, Please try after 10 Minutes");
      }
    } else {
      this.messageService.error("Failed", "Network Error While connecting to PaymentGateway, Please try after 10 Minutes");
    }
  }
  setError(errMsg) {
    if (errMsg == "PLAYER_NOT_FOUND") {
      this.messageService.success("Success", "Dear player you are allowed to transfer to login name only");
    } else if (typeof errMsg == "string") {
      this.messageService.success("Success", errMsg);
    } else if (errMsg == "Please try after 10mins") {
      this.messageService.success("Success", "Please try after 10mins");
    } else {
      this.messageService.success("Success", this.errMsg);
    }
  }
  onWithdrawSubmit() {
    this.apiLoader = true;
    this.errMsg = "";
    this.isError = false;
    let body = {
      amount: this.criptoWithDrawalForm.value.amount,
      paymentMethod: "345",
      accountType: "imps_ib",
      bankName: this.getbankaccountdetails?.bankName || "ICIC",
      personalNumber: this.criptoWithDrawalForm.getRawValue().personalNumber,
      ifsc: this.criptoWithDrawalForm.getRawValue().ifsc,
      nameOnAccount: this.criptoWithDrawalForm.getRawValue().name
    };
    this.playerSer.onCashierWithdrawCashout(body).subscribe((data) => {
      this.apiLoader = false;
      if (data.success && data.result.success) {
        if (data.result["comments"] == "ADDRESS_UPDATED") {
          this.messageService.success("Success", "Your cash out request will be processed within 24 hours.");
          setTimeout(() => {
            this.messageService.success("Success", "Your Cashout USDT address has been updated to NEW address with current one");
          }, 1e3);
        } else {
          this.messageService.success("Success", "Your cash out request will be processed within 24 hours.");
        }
        this.criptoWithDrawalForm.controls["amount"].reset();
      } else {
        this.interFalseRes = data.description || data.result && data.result.comments || data.result && data.result.errorMsg;
        this.messageService.success("Success", this.interFalseRes);
      }
    });
  }
  AddUF(data) {
    this.wattetType = data;
    this.playerSer.onCashierGetBankAccount().subscribe((data2) => {
      console.log(data2);
      if (data2.success && data2.TBankAccountInfos?.length > 0) {
        this.getbankaccountdetails = data2.TBankAccountInfos[0];
        this.criptoWithDrawalForm.patchValue({
          name: this.getbankaccountdetails.nameOnBank,
          personalNumber: this.getbankaccountdetails.bankAccountNumber,
          ifsc: this.getbankaccountdetails.bankIFSCCOde
        });
        this.criptoWithDrawalForm.get("name")?.disable();
        this.criptoWithDrawalForm.get("personalNumber")?.disable();
        this.criptoWithDrawalForm.get("ifsc")?.disable();
        this.hasBankAccount = true;
      } else {
        this.criptoWithDrawalForm.get("name")?.enable();
        this.criptoWithDrawalForm.get("personalNumber")?.enable();
        this.criptoWithDrawalForm.get("ifsc")?.enable();
        this.hasBankAccount = false;
      }
    });
    if (data == "INR") {
      this.cashoutINR();
    } else {
      this.cashoutUSD();
    }
    this.paumoutA();
    this.loadWalletsData(this.walleteInfo);
    this.userBalance();
    this.profile1();
  }
  cashoutUSD() {
    this.usdForm = new FormGroup({
      cashoutsend: new FormGroup({
        email: new FormControl(this.ussdemail, [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ]),
        usdtAddress: new FormControl("", [Validators.required]),
        usdtAddressType: new FormControl(this.selectedCurrency, [Validators.required]),
        // usdtAddressType: new FormControl("TRC20"),
        paymentMethod: new FormControl(this.paymentNewMethod),
        amount: new FormControl("", [
          Validators.required,
          Validators.min(10),
          Validators.max(5e3),
          Validators.pattern("^[0-9]*$")
        ])
      }),
      payoutvalue: new FormControl({ value: this.waletAmountUsd, disabled: true }, [Validators.required])
    });
  }
  cashoutINR() {
    this.criptoWithDrawalForm = new FormGroup({
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.min(1e3),
        Validators.max(19999)
      ]),
      personalNumber: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9 ]*$")
      ]),
      ifsc: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/),
        Validators.minLength(11),
        Validators.maxLength(15)
      ])
    });
  }
  loadWalletsData(apiRes) {
    if (apiRes == void 0) {
      this.storeSub = this.store.select("cashierState").subscribe((cashierState) => {
        if (cashierState.balance) {
          this.walleteInfo = cashierState.balance.values;
          if (this.walleteInfo)
            this.loadWalletsData(this.walleteInfo);
          for (let wallete of this.walleteInfo) {
            if (wallete.preferred === true) {
              this.preferredBalance = wallete;
              let totalbalance = wallete.cash.value + wallete.bonus.value;
              this.balance = Number(totalbalance.toString().split(".")[0]);
              break;
            }
          }
        } else {
        }
      });
    }
    if (this.wattetType == "INR") {
      this.prefCurrency = this.commonUtilSer.loadAppPreferredCurrency(apiRes);
      let availableForPayoutblc = this.commonUtilSer.loadCashbalanceBasedOnCurrency(apiRes, this.prefCurrency, "cash");
      this.availableForPayout = availableForPayoutblc.toString().split(".")[0];
    } else {
    }
  }
  paumoutA() {
    this.payoutamount = [];
    if (this.wattetType == "USD") {
      this.selecteddata = "";
    } else {
      this.playerSer.CHPValueJson().subscribe((data) => {
        if (data) {
          this.payoutamount = data;
          this.changeAmtVal(this.payoutamount[0]);
          this.selecteddata = this.payoutamount[0];
        }
      });
    }
  }
  changeAmtVal(value) {
    this.selecteddata = value.toString().replace(/,/g, "");
    if (Number(this.availableForPayout) >= Number(this.selecteddata)) {
    } else if (Number(this.availableForPayout) < Number(value)) {
    } else {
    }
  }
  userBalance() {
    this.storeSub = this.store.select("cashierState").subscribe((cashierState) => {
      if (cashierState.balance) {
        this.walleteInfo = cashierState.balance.values;
        if (this.walleteInfo)
          this.loadWalletsData(this.walleteInfo);
        for (let wallete of this.walleteInfo) {
          if (wallete.symbol == "$" || wallete.wallet.name == "USD") {
            this.waletAmountUsd = wallete.cash.value || 0;
          }
          if (wallete.preferred === true) {
            this.preferredBalance = wallete;
            let totalbalance = wallete.cash.value + wallete.bonus.value;
            this.balance = Number(totalbalance.toString().split(".")[0]);
            break;
          }
        }
      }
    });
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  selectCurrency(currency) {
    if (currency == "TRX") {
      this.CryptopricesLoader = true;
      this.playerSer.getCryptoPrices().subscribe({
        next: (data) => {
          this.CryptopricesLoader = false;
          this.Cryptoprices = data;
        }
      });
    } else {
      this.Cryptoprices = 1;
    }
    if (currency === "USDT") {
      this.selectedCurrency1 = "USDT (TRC20)";
    } else if (currency === "bsc") {
      this.selectedCurrency1 = "bsc";
    } else {
      this.selectedCurrency1 = "TRX (TRC20)";
    }
    this.selectedCurrency = currency;
    this.isDropdownOpen = false;
    if (this.usdForm) {
      const cashoutsendGroup = this.usdForm.get("cashoutsend");
      if (cashoutsendGroup) {
        cashoutsendGroup.get("usdtAddressType")?.setValue(currency);
        cashoutsendGroup.get("usdtAddressType")?.markAsTouched();
      }
    }
    this.validateAddressLive();
  }
  withdraw() {
    this.apiLoader = true;
    this.resetError();
    const amount1 = this.usdForm.get(["cashoutsend", "amount"])?.value;
    var userAmount = this.wattetType == "USD" ? this.waletAmountUsd : this.availableForPayout;
    if (amount1 > userAmount) {
      this.showAmountError = true;
      this.apiLoader = false;
      return;
    }
    let amount = this.wattetType === "INR" ? this.selecteddata : this.usdForm.value.cashoutsend.amount;
    let availablePayout = userAmount;
    if (Number(amount) <= 0) {
      this.messageService.success("Success", "Amount can't be zero");
    } else if (Number(amount) <= Number(availablePayout)) {
      let formToSubmit = this.wattetType === "USD" ? this.usdForm : this.criptoWithDrawalForm;
      if (this.wattetType === "USD") {
        const body = __spreadProps(__spreadValues({}, formToSubmit.value.cashoutsend), {
          email: formToSubmit.value.cashoutsend.email || this.ussdemail,
          usdtAddress: formToSubmit.value.cashoutsend.usdtAddress || "xxxxxxxxxx",
          currency: this.wattetType,
          paymentMethod: this.selectedCurrency === "TRX" ? "347" : "343"
        });
        this.store.dispatch(new CashierGetBalanceStart());
        this.playerSer.playerWithdraw(body).subscribe((apiRes) => {
          this.historyloader = false;
          this.apiLoader = false;
          if (!apiRes.success) {
            let errorMessage = "Unknown error";
            if (apiRes["description"] === "error" || apiRes["code"] === "error") {
              errorMessage = apiRes["description"];
            } else if (apiRes["description"] == "No session descriptor found") {
              this.isError = true;
              errorMessage = "Session expired please login";
            } else if (apiRes.description.includes("The field 2 of")) {
              errorMessage = "5000";
            } else {
              errorMessage = apiRes["description"] ? apiRes["description"] : errorMessage;
            }
            this.messageService.error("Failed", errorMessage);
          } else {
            this.store.dispatch(new CashierGetBalanceStart());
            this.profile1();
            if (apiRes.result) {
              this.AmountUSD = "";
              if (apiRes.result["comments"] == "ADDRESS_UPDATED") {
                setTimeout(() => {
                  this.messageService.success("Success", "Your Cashout USDT address has been updated to NEW address with current one");
                }, 6e3);
                this.messageService.success("Success", "Your cash out request will be processed within 4 hours.");
              } else {
                this.messageService.success("Success", "Your cash out request will be processed within 4 hours.");
              }
            }
          }
        }, (err) => {
          var errormaggage = err.statusText === "error" ? "This email is used by another user" : err.statusText;
          this.messageService.error("Failed", errormaggage);
        });
      } else if (this.wattetType === "INR") {
        for (let i = 0; i < this.payoutamount.length; i++) {
          if (this.payoutamount[i] == this.selecteddata) {
          } else {
          }
        }
        formToSubmit.value.cashoutsend1.amount = String(this.selecteddata);
        formToSubmit.value.cashoutsend1.currency = this.wattetType;
        formToSubmit.value.cashoutsend1.paymentMethod = this.paymentNewMethod;
        this.playerSer.playerWithdraw(formToSubmit.value.cashoutsend1).subscribe((apiRes) => {
          this.historyloader = false;
          if (!apiRes.success) {
            let errorMessage = "Unknown error";
            if (apiRes["description"] === "error" || apiRes["code"] === "error") {
              this.messageService.success("Success", apiRes["description"]);
            } else if (apiRes["description"] == "No session descriptor found") {
              this.messageService.success("Success", "Session expired please login");
            } else {
              this.messageService.success("Success", apiRes["code"] ? apiRes["code"] : errorMessage);
            }
            this.setError(errorMessage);
          } else {
            this.store.dispatch(new CashierGetBalanceStart());
            this.profile1();
            this.messageService.success("Success", "Your cashout request will be processed soon.");
          }
        }, (err) => {
          this.messageService.success("Success", err.statusText === "error" ? "This email is used by another user" : err.statusText);
        });
      }
    } else {
      this.messageService.error("Failed", "Amount can't be less than your balance");
    }
  }
  profile1() {
    this.storeSub = this.store.select("playerState").subscribe((playerState) => {
      if (playerState.profile) {
        if (playerState.profile.success == true) {
          this.profile = playerState.profile;
          if (this.profile) {
            this.ussdemail = this.profile.email;
            if (this.usdForm) {
              const usdEmailControl = this.usdForm.get("cashoutsend.email");
              if (usdEmailControl) {
                usdEmailControl.setValue(this.profile.email);
              }
              const usdAddressControl = this.usdForm.get("cashoutsend.usdtAddress");
              if (usdAddressControl) {
                if (this.profile.ssn == "xxxxxxxxxx") {
                  usdAddressControl.setValue("");
                } else {
                  usdAddressControl.setValue(this.profile.ssn);
                }
              }
            }
            if (this.walletFormVOUCHER) {
              this.walletFormVOUCHER.patchValue({
                email: this.profile.email
              });
              console.log(this.walletFormVOUCHER);
            }
            if (this.criptoWithDrawalForm) {
              const chpEmailControl = this.criptoWithDrawalForm.get("cashoutsend1.email");
              if (chpEmailControl) {
                chpEmailControl.setValue(this.profile.email);
              }
              const chpAddressControl = this.criptoWithDrawalForm.get("cashoutsend1.usdtAddress");
              if (chpAddressControl) {
                chpAddressControl.setValue(this.profile.ssn);
              }
            }
          }
        }
      }
    });
    this.store.dispatch(new PlayerGetProfile());
  }
  resetError() {
    this.isError = false;
    this.errMsg = "";
  }
  phonenum(event) {
    var k;
    k = event.charCode;
    return k >= 48 && k <= 57;
  }
  checkMaxAmount() {
    const amountControl = this.criptoWithDrawalForm.get("amount");
    if (amountControl) {
      const value = Number(amountControl.value);
    }
  }
  Accontnumber(event) {
    var k;
    k = event.charCode;
    return k >= 48 && k <= 57;
  }
  accountName(event) {
    var k = event.charCode;
    return k >= 65 && k <= 90 || // A–Z
    k >= 97 && k <= 122 || // a–z
    k === 32;
  }
  validateAmount() {
    const amountCtrl = this.usdForm.get("cashoutsend.amount");
    const enteredAmount = amountCtrl.value;
    if (enteredAmount > this.waletAmountUsd) {
      this.showAmountError = true;
      amountCtrl.setValue(null);
      amountCtrl.markAsTouched();
    } else {
      this.showAmountError = false;
    }
  }
  amountEnter(event) {
    var k = event.charCode;
    return k >= 48 && k <= 57 || k === 8;
  }
  transfer() {
    this.apiLoader = true;
    let num = this.transferChipForm.value.amount;
    let amountno = num;
    var userAmount = this.wattetType == "USD" ? this.waletAmountUsd : this.availableForPayout;
    if (amountno <= 0) {
      this.messageService.error("Failed", "Amount can't be zero ");
    } else if (amountno <= userAmount) {
      this.historyloader = true;
      this.resetError();
      const body = {
        nickname: this.transferChipForm.value.nickname,
        message: this.transferChipForm.value.message,
        amount: this.transferChipForm.value.amount,
        franc: this.transferChipForm.value.franc,
        walletCCode: this.walletCCode
      };
      this.playerSer.makeP2PTransfer(body).subscribe((data) => {
        this.ptoptransferhanle(data);
      }, (err) => {
        this.setError(err.statusText);
      });
    } else {
      this.messageService.error("Failed", "Amount can't be less than with your balance");
      this.apiLoader = false;
    }
  }
  ptoptransferhanle(data) {
    this.apiLoader = false;
    if (data && data.success) {
      this.store.dispatch(new CashierGetBalanceStart());
      this.transferChipForm.get("nickname")?.reset();
      this.transferChipForm.get("amount")?.reset();
      this.transferChipForm.get("message")?.reset();
      this.messageService.success("Success", "Transfer successfull");
    } else if (data.description == "USER_IS_LOCKED") {
      this.messageService.error("Failed", "User is locked");
    } else {
      let errormsg = "code" in data ? data["description"] : "Unknown error";
      this.messageService.success("Success", errormsg);
    }
  }
  openwith() {
    this.WithdrawsResponse = [];
    this.playerSer.onCashierGetOpenWithdrawRequest().subscribe((data) => {
      this.hideLoader();
      if (data && data.success) {
        this.WithdrawsResponse = data.withdrawsResponses;
      } else {
        this.errMsg = "No pending withdrawals";
      }
    });
  }
  cancelwithdrawal(data) {
    this.loadingId = data;
    let body = {
      "cashoutId": data
    };
    this.playerSer.onCashierCancelWithdrawRequest(body).subscribe((data2) => {
      this.apiLoader = false;
      this.loadingId = null;
      console.log(data2);
      if (data2.success) {
        this.store.dispatch(new CashierGetBalanceStart());
        this.messageService.success("Success", " You have successfully reversed your cashout and balance was added to wallet");
        this.openwith();
      } else {
        this.messageService.success("Success", data2.description);
      }
    });
  }
  enterAMountChi(event) {
    var k = event.charCode;
    return k >= 48 && k <= 57 || k === 8;
  }
  allowIFSCInput(event) {
    const allowed = /^[A-Za-z0-9]$/;
    if (!allowed.test(event.key)) {
      event.preventDefault();
    }
  }
  toUppercaseIFSC() {
    const ctrl = this.criptoWithDrawalForm.get("ifsc");
    if (ctrl) {
      ctrl.setValue(ctrl.value.toUpperCase(), { emitEvent: false });
    }
  }
  validateAddressLive() {
    this.errMsg = "";
    if (!this.usdForm)
      return;
    const addressControl = this.usdForm.get("cashoutsend.usdtAddress");
    const address = addressControl?.value;
    if (!address) {
      return;
    }
    if (this.selectedCurrency) {
      const currencyLower = this.selectedCurrency.toLowerCase();
      if (currencyLower === "usdt" || currencyLower === "trx") {
        if (!/^T/i.test(address)) {
          this.errMsg = "Not a valid TRC20 address";
        }
      } else if (currencyLower === "bsc") {
        if (!/^0/.test(address)) {
          this.errMsg = "Not a valid BEP20 address";
        }
      }
    }
  }
  static {
    this.\u0275fac = function Cashier_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Cashier)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CommonUtilService), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PlayerService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Cashier, selectors: [["app-cashier"]], decls: 18, vars: 6, consts: [[1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "rightArrow", "width", "15"], [1, "m_t_15", "live_casino_title"], [4, "ngIf"], [1, "button-row"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "fa", "fa-info-circle", 2, "font-size", "20px", "color", "#ff3a00", "border-radius", "50px", "background", "#fbfbfb", "width", "20px", "height", "20px"], [3, "click"], [1, "currency-toggle"], [2, "border", "1px solid #333232", "border-radius", "6px"], ["type", "radio", "name", "Depositcurrency", "value", "INR", 3, "ngModelChange", "ngModel"], [1, "currency-option"], ["type", "radio", "name", "Depositcurrency", "value", "USD", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "Depositcurrency", "value", "VOUCHER", 3, "ngModelChange", "ngModel"], ["src", "assets/profile_imgs/payment3.webp", "alt", "Voucher", 1, "currency-logo"], [1, "divider"], ["class", "row", 4, "ngIf"], [3, "ngSubmit", "formGroup"], ["class", "amount-section", 4, "ngIf"], ["type", "submit", 1, "btn", "active", 3, "disabled"], [1, "amount-section"], [1, "gradient-star"], ["type", "text", "formControlName", "amount", 1, "cashout_inp", 3, "placeholder"], ["class", "sign-in-desktop__validation-error", 4, "ngIf"], [1, "sign-in-desktop__validation-error"], [1, "row"], ["title", "Deposit", 1, "", 2, "cursor", "pointer", 3, "click"], ["loading", "lazy", "alt", "Tether Coin", "src", "assets/profile_imgs/Crypto.jpg", "width", "200"], ["type", "text", "placeholder", "Amount Min 100 Max 50,000", "formControlName", "amount", 1, "cashout_inp", 3, "keypress"], ["type", "text", "placeholder", "Enter Coupon", "formControlName", "coupon", 1, "cashout_inp", 3, "input"], [1, "voucher-box"], [1, "voucher-text"], ["href", "https://www.kashybee.com/verified-resellers", "target", "_blank", 1, "voucher-btn"], ["type", "radio", "name", "Withdrawalcurrency", "value", "INR", 3, "click", "ngModelChange", "ngModel"], ["type", "radio", "name", "Withdrawalcurrency", "value", "USD", 3, "click", "ngModelChange", "ngModel"], ["type", "radio", "name", "Depositcurrency", "value", "VOUCHER", 3, "click", "ngModelChange", "ngModel"], [1, "withdrawal-container"], [1, "fd", "inpElm", 3, "ngSubmit", "formGroup"], [1, "form-row"], ["formGroupName", "cashoutsend", 1, "form-group"], ["for", "login-input-email", 1, "fd"], ["type", "email", "id", "login-input-email", "placeholder", "Enter your Email", "formControlName", "email", 3, "value"], ["class", "help-block", 4, "ngIf"], ["for", "login-input-usdtAddress", 1, "fd"], ["type", "text", "id", "login-input-usdtAddress", "formControlName", "usdtAddress", "placeholder", "USDT Address", 3, "ngModelChange"], [1, "dropdown-header", "uppercase", 3, "click", "ngClass"], ["class", "dropdown-list", "formControlName", "usdtAddressType", 4, "ngIf"], [1, "form-group"], [1, "fd"], ["type", "text", "name", "waletAmountUsd", "formControlName", "payoutvalue", 3, "value", "disabled"], ["type", "number", "placeholder", "Amount Min 10 Max 5,000", "formControlName", "amount", "min", "10", "max", "5000", 1, "single_input", 3, "keypress", "input", "ngModelChange", "ngModel"], ["class", "error-msg sign-in-desktop__validation-error", 4, "ngIf"], ["class", "fd m_t_10", 4, "ngIf"], [1, "p_t_15", "button-row"], ["type", "submit", 1, "btn", "active", 3, "ngClass", "disabled"], ["class", "m_l_5 loader_2", 4, "ngIf"], ["style", "color: #f00;", 4, "ngIf"], [1, "help-block"], [1, "fa", "fa-sort-up", 2, "font-size", "23px", "color", "#d51112"], [1, "fa", "fa-sort-down", 2, "font-size", "23px", "color", "#d51112"], ["formControlName", "usdtAddressType", 1, "dropdown-list"], [1, "usdt-option", 3, "click"], [1, "trx-option", 3, "click"], [1, "error-msg", "sign-in-desktop__validation-error"], [1, "fd", "m_t_10"], ["type", "text", "name", "availableForPayout", "disabled", "", 3, "value"], ["class", "m_l_5 loader_TRX", 4, "ngIf"], [1, "m_l_5", "loader_TRX"], [1, "m_l_5", "loader_2"], [2, "color", "#f00"], ["class", "fd inpElm", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["for", "login-input-amount", 1, "fd"], ["type", "phone", "placeholder", "Amount Min 1,000 Max 19,999", "formControlName", "amount", "min", "1000", "max", "19999", 1, "styled-input", "bg_3", 3, "keypress", "input"], ["for", "login-input-amountName", 1, "fd"], ["type", "text", "placeholder", "Account Name", "formControlName", "name", 1, "styled-input", "bg_3", 3, "keypress"], ["for", "login-input-accountNumber", 1, "fd"], ["type", "phone", "placeholder", "Account Number", "formControlName", "personalNumber", 1, "styled-input", "bg_3", 3, "keypress"], ["type", "text", "maxlength", "15", "minlength", "11", "formControlName", "ifsc", "placeholder", "IFSC Code", 1, "styled-input", "bg_3", 3, "keypress", "input"], ["class", "clr_f0", 4, "ngIf"], [1, "clr_f0"], ["routerLink", "/myaccount/bank", 1, "btn", "add-bank-btn"], ["type", "text", "placeholder", "Amount  Min 1,000 Max 50,000", "formControlName", "amount", 1, "cashout_inp"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "cashout_inp"], ["type", "radio", "name", "Transfercurrency", "value", "INR", 3, "ngModelChange", "click", "ngModel"], ["type", "radio", "name", "Transfercurrency", "value", "USD", 3, "ngModelChange", "click", "ngModel"], ["type", "text", "name", "availableForPayout", "formControlName", "payoutvalue", 3, "value", 4, "ngIf"], ["type", "text", "name", "waletAmountUsd", "formControlName", "payoutvalue", 3, "value", 4, "ngIf"], ["type", "text", "formControlName", "nickname", "placeholder", "Enter Nickname", "name", "nickname"], ["type", "number", "name", "amount", "formControlName", "amount", "placeholder", "Enter Amount", 3, "keypress"], ["class", "sign-in-desktop__validation-error fielderror", 4, "ngIf"], ["class", "sign-in-desktop__validation-error  fielderror", 4, "ngIf"], ["class", "clr_2", 4, "ngIf"], ["rows", "1", "cols", "33", "name", "message", "formControlName", "message", "placeholder", "Enter your comment here "], [1, "sign-in-desktop__validation-error", "fielderror"], ["type", "text", "name", "availableForPayout", "formControlName", "payoutvalue", 3, "value"], ["type", "text", "name", "waletAmountUsd", "formControlName", "payoutvalue", 3, "value"], [1, "clr_2"], ["class", "table-responsive m_t_15", 4, "ngIf"], ["class", "pending_error", 4, "ngIf"], ["class", "popup-overlay", 4, "ngIf"], ["class", "loader-wrapper", 4, "ngIf"], [1, "table-responsive", "m_t_15"], [1, "transaction-table"], [1, "sticky-col"], [4, "ngFor", "ngForOf"], [1, "submit-btn"], ["type", "submit", 1, "btn_1", 2, "font-weight", "500", 3, "click"], [1, "pending_error"], [1, "popup-overlay"], [1, "popup-container"], [1, "popup-header"], [1, "close-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "iframe-wrapper"], ["class", "iframe-loader", 4, "ngIf"], ["scrolling", "yes", "frameborder", "0", "allowfullscreen", "", 3, "load", "src"], [1, "iframe-loader"], ["src", "assets/siteImg/Comp_2.gif", "alt", "Loading...", 1, "loader-gif"], [1, "loader-wrapper"], ["width", "280", "alt", "loading", 3, "src"]], template: function Cashier_Template(rf, ctx) {
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
        \u0275\u0275text(8, "Cashier");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h2", 3);
        \u0275\u0275text(10, "Cashier");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, Cashier_div_11_Template, 7, 0, "div", 4);
        \u0275\u0275elementStart(12, "div", 5);
        \u0275\u0275template(13, Cashier_button_13_Template, 2, 3, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, Cashier_div_14_Template, 18, 12, "div", 4)(15, Cashier_div_15_Template, 19, 12, "div", 4)(16, Cashier_div_16_Template, 54, 22, "div", 4)(17, Cashier_div_17_Template, 5, 4, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.activeAction == "Withdrawal");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.actions);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeAction == "Deposit");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeAction == "Withdrawal");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeAction == "Transfer to Player");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeAction == "Pending Withdrawals");
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      SlicePipe,
      DecimalPipe,
      CurrencyPipe,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NumberValueAccessor,
      RadioControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MinLengthValidator,
      MaxLengthValidator,
      MinValidator,
      MaxValidator,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      RouterLink,
      FormsModule,
      NgModel
    ], styles: ["\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 999999;\n}\n.popup-overlay.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.popup-container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 900px;\n  height: 80vh;\n  background: rgb(50, 50, 50);\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transform: scale(0.9);\n  transition: transform 0.3s ease;\n}\n.popup-overlay.active[_ngcontent-%COMP%]   .popup-container[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.popup-header[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  background: #f8f9fa;\n  display: flex;\n  justify-content: flex-end;\n}\n.close-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #6c757d;\n  transition: all 0.2s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #495057;\n  transform: rotate(90deg);\n}\n.close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n.iframe-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0;\n  overflow: hidden;\n}\niframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: white;\n}\n.iframe-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.iframe-loader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.8);\n  z-index: 10;\n}\n.iframe-loader[_ngcontent-%COMP%]   .loader-gif[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\niframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: white;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\nul.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 3px;\n  background: #0e0e0e;\n  margin: 2px;\n  cursor: pointer;\n}\nul.dropdown-list[_ngcontent-%COMP%] {\n  background: #1a1919;\n}\nh1.pending_error[_ngcontent-%COMP%] {\n  color: #626262;\n}\n.dropdown-header.placeholder[_ngcontent-%COMP%], \n.dropdown-header.selected[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: middle;\n  cursor: pointer;\n  background-color: #000;\n  padding: 10px;\n  border-radius: 5px;\n  width: 100%;\n  display: flex !important;\n  justify-content: space-between !important;\n  align-items: center;\n  opacity: 1;\n}\niframe.loaded[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (max-width: 768px) {\n  .form-image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-image[_ngcontent-%COMP%], \n   .form-fields[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px;\n  }\n}\n.transaction-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #2a2a2a;\n  border-radius: 8px;\n}\n.transaction-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.transaction-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: 1px solid #444;\n  text-align: left;\n  text-wrap: nowrap;\n}\nth[_ngcontent-%COMP%] {\n  background: #0f0f0f;\n}\ntr[_ngcontent-%COMP%] {\n  background: var(--secondary-bg);\n}\n.note-animate[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ff0800;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_fadeGlow 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_fadeGlow {\n  0% {\n    opacity: 0.3;\n    text-shadow: 0 0 0px #ff2424;\n  }\n  50% {\n    opacity: 1;\n    text-shadow: 0 0 6px #ff0000;\n  }\n  100% {\n    opacity: 0.3;\n    text-shadow: 0 0 0px #ff1f1f;\n  }\n}\n.currency-toggle[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\nbutton.add-bank-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--gradient-primary);\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 17px;\n  color: #fff;\n  font-weight: 500;\n}\n.clr_2[_ngcontent-%COMP%] {\n  color: #f00;\n}\n.payment-systems[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin: 20px 0;\n}\n.payment-systems[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #000000;\n  color: #ffffff;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 15px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  min-width: 140px;\n}\n.payment-systems[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 15px rgba(21, 101, 192, 0.3);\n}\n.payment-systems[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(229, 86, 30, 0.3);\n}\n.payment-title[_ngcontent-%COMP%] {\n  margin: 20px 0 10px;\n  color: #333;\n  font-size: 18px;\n  font-weight: 700;\n}\n.payment-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.payment-system-dropdown[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.payment-system-dropdown[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #dfdfdf;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.6px;\n}\n.system-select[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 48px;\n  border-radius: 8px;\n  border: 1px solid #444;\n  background: #111;\n  color: #fff;\n  padding: 0 12px;\n  font-size: 15px;\n  font-weight: 600;\n  outline: none;\n}\n.system-select[_ngcontent-%COMP%]:focus {\n  border-color: #ff6600;\n}\n.payment-methods-wrapper[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.payment-heading[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #cccccc;\n  letter-spacing: 0.6px;\n}\n.payment-system-dropdown[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.payment-system-dropdown[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #dfdfdf;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.6px;\n}\n.system-select[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 48px;\n  border-radius: 8px;\n  border: 1px solid #444;\n  background: #111;\n  color: #fff;\n  padding: 0 12px;\n  font-size: 15px;\n  font-weight: 600;\n  outline: none;\n}\n.system-select[_ngcontent-%COMP%]:focus {\n  border-color: #ff6600;\n}\n.payment-methods-wrapper[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.payment-heading[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #cccccc;\n  letter-spacing: 0.6px;\n}\n.payment-methods[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.method-btn[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 90px;\n  border: none;\n  border-radius: 2px;\n  overflow: hidden;\n  cursor: pointer;\n  padding: 0;\n  background: #dfd9d9;\n  display: flex;\n  flex-direction: column;\n}\n.method-btn.active[_ngcontent-%COMP%] {\n  box-shadow: 0 0 12px rgba(255, 102, 0, 0.4);\n}\n.paymethod-icon-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n}\n.paymethod-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  object-fit: contain;\n}\n.method-name[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  background: #5f86bd;\n}\n.method-btn.active[_ngcontent-%COMP%]   .method-name[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #cc0000 0%,\n      #ff6b00 100%);\n}\n@media (min-width: 200px) and (max-width: 1080px) {\n  .system-select[_ngcontent-%COMP%] {\n    width: 54%;\n    height: 48px;\n    border-radius: 8px;\n    border: 1px solid #444;\n    background: #111;\n    color: #fff;\n    padding: 0 12px;\n    font-size: 15px;\n    font-weight: 600;\n    outline: none;\n  }\n}\n.currency-logo[_ngcontent-%COMP%] {\n  width: 220px;\n  border-radius: 5px;\n}\n.voucher-btn[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 600;\n}\n.currency-option[_ngcontent-%COMP%] {\n  min-width: 150px;\n  min-height: 50px;\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 18px;\n  transition: 0.2s ease-in-out;\n}\n.currency-option.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 0 8px rgba(255, 102, 0, 0.4);\n}\n.currency-logo[_ngcontent-%COMP%] {\n  width: 153px;\n  object-fit: contain;\n}\n.currency-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n@media (min-width: 330px) and (max-width: 768px) {\n  .currency-toggle[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    gap: 0px;\n  }\n  .currency-option[_ngcontent-%COMP%] {\n    min-width: 110px;\n    font-size: 14px;\n    border-radius: 10px;\n  }\n  .currency-logo[_ngcontent-%COMP%] {\n    width: 110px;\n    object-fit: contain;\n  }\n}\n/*# sourceMappingURL=cashier.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cashier, [{
    type: Component,
    args: [{ selector: "app-cashier", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterLink,
      ReactiveFormsModule,
      FormsModule
    ], template: `<div class="redirectline"><span routerLink="/home">Home</span> <img src="assets/home_icons/arrow_right.png"\r
    alt="rightArrow" width="15"> <span>My Account </span> <img src="assets/home_icons/arrow_right.png"\r
    alt="rightArrow" width="15"> <span>Cashier</span></div>\r
<h2 class="m_t_15 live_casino_title">Cashier</h2>\r
<div *ngIf="activeAction == 'Withdrawal'">\r
  <p> <i class="fa fa-info-circle"\r
      style="font-size: 20px;color: #ff3a00;border-radius: 50px;background: #fbfbfb;width: 20px;height: 20px;"></i>\r
    Cashouts in INR can take upto 24 hours. </p>\r
  <p> <i class="fa fa-info-circle"\r
      style="font-size: 20px;color: #ff3a00;border-radius: 50px;background: #fbfbfb;width: 20px;height: 20px;"></i>\r
    Crypto cashouts can take upto 4 hours. </p>\r
\r
</div>\r
\r
<div class="button-row">\r
  <button *ngFor="let action of actions" (click)="setActive(action)" [class.active]="activeAction === action">\r
    {{ action }}\r
  </button>\r
</div>\r
\r
<div *ngIf="activeAction == 'Deposit'">\r
  <div class="currency-toggle">\r
    <!-- <label>\r
      <input type="radio" name="Depositcurrency" (change)="togglePayments($event)" value="INR" [(ngModel)]="Depositcurrency" />\r
      <span [class.selected]="Depositcurrency === 'INR'">INR</span>\r
    </label> -->\r
    <!-- <label>\r
      <input type="radio" name="Depositcurrency" (change)="togglePayments($event)" value="IMPS" [(ngModel)]="Depositcurrency" />\r
      <span [class.selected]="Depositcurrency === 'IMPS'">IMPS</span>\r
    </label> -->\r
    <label style="border: 1px solid #333232;border-radius: 6px;">\r
      <input type="radio" name="Depositcurrency" value="INR" [(ngModel)]="Depositcurrency" />\r
      <span class="currency-option" [class.selected]="Depositcurrency === 'INR'">\r
        INR\r
      </span>\r
    </label>\r
    <!-- <label>\r
      <input type="radio" name="Depositcurrency" value="USD" [(ngModel)]="Depositcurrency" />\r
      <span [class.selected]="Depositcurrency === 'USD'">USD</span>\r
    </label> -->\r
    <label style="border: 1px solid #333232;border-radius: 6px;">\r
      <input type="radio" name="Depositcurrency" value="USD" [(ngModel)]="Depositcurrency" />\r
      <span class="currency-option" [class.selected]="Depositcurrency === 'USD'">\r
        USD\r
      </span>\r
    </label>\r
    <label style="border: 1px solid #333232;border-radius: 6px;">\r
      <input type="radio" name="Depositcurrency" value="VOUCHER" [(ngModel)]="Depositcurrency" />\r
      <span class="currency-option" [class.selected]="Depositcurrency === 'VOUCHER'">\r
        <img src="assets/profile_imgs/payment3.webp" alt="Voucher" class="currency-logo" />\r
      </span>\r
    </label>\r
  </div>\r
\r
  <hr class="divider" />\r
  <div *ngIf="Depositcurrency == 'INR' || Depositcurrency == 'IMPS'">\r
    <!-- Amount Section -->\r
    <form [formGroup]="walletForm" (ngSubmit)="submit('CRIPTO')">\r
      <div class="amount-section" *ngIf="!showPaymentOptions">\r
        <label><span class="gradient-star">*</span> Amount :</label>\r
        <input type="text" class="cashout_inp" [placeholder]="placeholderText" formControlName="amount" />\r
        <div class="sign-in-desktop__validation-error"\r
          *ngIf="walletForm.get('amount')?.touched && walletForm.get('amount')?.invalid">\r
          <span *ngIf="walletForm.get('amount')?.errors?.['required']">\u26A0\uFE0F Amount is required</span>\r
          <span *ngIf="walletForm.get('amount')?.errors?.['min']">\u26A0\uFE0F Minimum amount is {{minAmount}}</span>\r
          <span *ngIf="walletForm.get('amount')?.errors?.['max']">\u26A0\uFE0F Maximum amount is {{maxAmount}}</span>\r
          <span *ngIf="walletForm.get('amount')?.errors?.['pattern']">\u26A0\uFE0F Numbers only</span>\r
        </div>\r
      </div>\r
      <div class="button-row">\r
        <button class="btn active" type="submit" [disabled]="walletForm.invalid"> Deposit <i\r
            class="{{ apiLoader ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i></button>\r
      </div>\r
\r
    </form>\r
  </div>\r
\r
  <div class="row" *ngIf="Depositcurrency === 'USD'">\r
\r
    <div class="" (click)="bitcoin('343')" title="Deposit" style="cursor: pointer;">\r
      <img loading="lazy" alt="Tether Coin" src="assets/profile_imgs/Crypto.jpg" width="200">\r
      <!-- <button class="deposit-button">{{'USD Deposit</button> -->\r
    </div>\r
\r
  </div>\r
  <div *ngIf="Depositcurrency === 'VOUCHER'">\r
    <form [formGroup]="walletFormVOUCHERDeposit" (ngSubmit)="submit('VOUCHER')">\r
\r
      <!-- Amount -->\r
      <div class="amount-section">\r
        <label><span class="gradient-star">*</span> Amount :</label>\r
\r
        <input type="text" class="cashout_inp" placeholder="Amount Min 100 Max 50,000" formControlName="amount"\r
          (keypress)="numberOnly($event)" />\r
\r
        <div class="sign-in-desktop__validation-error"\r
          *ngIf="walletFormVOUCHERDeposit.get('amount')?.touched && walletFormVOUCHERDeposit.get('amount')?.invalid">\r
\r
          <span *ngIf="walletFormVOUCHERDeposit.get('amount')?.errors?.['required']">\r
            \u26A0\uFE0F Amount is required\r
          </span>\r
\r
          <span *ngIf="walletFormVOUCHERDeposit.get('amount')?.errors?.['min']">\r
            \u26A0\uFE0F Minimum amount is 100\r
          </span>\r
\r
          <span *ngIf="walletFormVOUCHERDeposit.get('amount')?.errors?.['max']">\r
            \u26A0\uFE0F Maximum amount is 50,000\r
          </span>\r
\r
          <span *ngIf="walletFormVOUCHERDeposit.get('amount')?.errors?.['pattern']">\r
            \u26A0\uFE0F Numbers only\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- Coupon -->\r
      <div class="amount-section">\r
        <label><span class="gradient-star">*</span> Coupon :</label>\r
\r
        <input type="text" class="cashout_inp" placeholder="Enter Coupon" formControlName="coupon"\r
          (input)="onCouponInput($event)" />\r
\r
        <div class="sign-in-desktop__validation-error"\r
          *ngIf="walletFormVOUCHERDeposit.get('coupon')?.touched && walletFormVOUCHERDeposit.get('coupon')?.invalid">\r
\r
          <span *ngIf="walletFormVOUCHERDeposit.get('coupon')?.errors?.['required']">\r
            \u26A0\uFE0F Coupon is required\r
          </span>\r
\r
          <span *ngIf="walletFormVOUCHERDeposit.get('coupon')?.errors?.['pattern']">\r
            \u26A0\uFE0F Only letters, numbers and "_" allowed\r
          </span>\r
        </div>\r
      </div>\r
      <div class="voucher-box">\r
        <span class="voucher-text">Don't have a voucher?</span>\r
        <a href="https://www.kashybee.com/verified-resellers" target="_blank" class="voucher-btn">\r
          Click here!\r
        </a>\r
      </div>\r
      <!-- Button -->\r
      <div class="button-row">\r
        <button class="btn active" type="submit" [disabled]="walletFormVOUCHERDeposit.invalid || apiLoader">\r
\r
          Deposit\r
          <i class="{{ apiLoader ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i>\r
        </button>\r
      </div>\r
\r
    </form>\r
  </div>\r
\r
</div>\r
\r
<div *ngIf="activeAction == 'Withdrawal'">\r
  <div class="currency-toggle">\r
    <label>\r
      <input type="radio" name="Withdrawalcurrency" value="INR" (click)="AddUF('INR')"\r
        [(ngModel)]="Withdrawalcurrency" />\r
      <span [class.selected]="Withdrawalcurrency === 'INR'">INR</span>\r
    </label>\r
    <label>\r
      <input type="radio" name="Withdrawalcurrency" value="USD" (click)="AddUF('USD')"\r
        [(ngModel)]="Withdrawalcurrency" />\r
      <span [class.selected]="Withdrawalcurrency === 'USD'">USD</span>\r
    </label>\r
    <label>\r
      <input type="radio" name="Depositcurrency" value="VOUCHER" (click)="AddUF('VOUCHER')"\r
        [(ngModel)]="Withdrawalcurrency" />\r
      <span [class.selected]="Withdrawalcurrency === 'VOUCHER'">VOUCHER</span>\r
    </label>\r
  </div>\r
\r
  <hr class="divider" />\r
\r
  <!-- Amount Section -->\r
  <div class="withdrawal-container">\r
    <div *ngIf="Withdrawalcurrency === 'USD'">\r
      <form class="fd inpElm" [formGroup]="usdForm" (ngSubmit)="withdraw()">\r
        <div class="form-row">\r
          <div class="form-group" formGroupName="cashoutsend">\r
\r
            <label for="login-input-email" class="fd"><span class="gradient-star">*</span> Email</label>\r
            <input type="email" id="login-input-email" placeholder="Enter your Email" formControlName="email"\r
              [value]="ussdemail">\r
            <small class="sign-in-desktop__validation-error">\r
              <span *ngIf="usdForm.get('cashoutsend.email')?.invalid && usdForm.get('cashoutsend.email')?.touched"\r
                class="help-block">\r
\r
                <span *ngIf="usdForm.get('cashoutsend.email')?.errors?.['required']">\r
                  Enter your Email!\r
                </span>\r
\r
                <span *ngIf="usdForm.get('cashoutsend.email')?.errors?.['email']">\r
                  Enter valid Email!\r
                </span>\r
\r
                <span *ngIf="usdForm.get('cashoutsend.email')?.errors?.['pattern']">\r
                  Enter valid Email format!\r
                </span>\r
\r
              </span>\r
            </small>\r
\r
\r
          </div>\r
          <div class="form-group" formGroupName="cashoutsend">\r
\r
            <label for="login-input-usdtAddress" class="fd"><span class="gradient-star">*</span> USDT Address\r
              <!-- <img loading="lazy" width="15" style="margin-bottom:-3px;"\r
                  alt="Tether Coin" src="assets/img/tether_coin.svg"> -->\r
            </label>\r
            <input type="text" id="login-input-usdtAddress" formControlName="usdtAddress" placeholder="USDT Address"\r
              (ngModelChange)="validateAddressLive()">\r
            <small class="sign-in-desktop__validation-error"\r
              *ngIf="usdForm.get('cashoutsend.usdtAddress')?.invalid && usdForm.get('cashoutsend.usdtAddress')?.touched">\r
              <span *ngIf="usdForm.get('cashoutsend.usdtAddress')?.errors?.['required']">\r
                \u26A0\uFE0F USDT Address is required!\r
              </span>\r
            </small>\r
\r
          </div>\r
        </div>\r
        <div class="form-row">\r
          <div class="form-group" formGroupName="cashoutsend">\r
\r
            <label for="login-input-usdtAddress" class="fd"><span class="gradient-star">*</span> USDT Address\r
              Type</label>\r
            <div class="dropdown-header uppercase" (click)="toggleDropdown()"\r
              [ngClass]="{ 'placeholder': !selectedCurrency1, 'selected': selectedCurrency1 }">\r
              {{ selectedCurrency1 || 'Select Currency Type' }} <span *ngIf="isDropdownOpen"><i class="fa fa-sort-up"\r
                  style="font-size:23px;color:#d51112"></i> </span> <span *ngIf="!isDropdownOpen"><i\r
                  class="fa fa-sort-down" style="font-size:23px;color:#d51112"></i> </span>\r
            </div>\r
            <ul *ngIf="isDropdownOpen" class="dropdown-list" formControlName="usdtAddressType">\r
              <li (click)="selectCurrency('USDT')" class="usdt-option">USDT\r
                (TRC20)</li>\r
              <li (click)="selectCurrency('TRX')" class="trx-option">TRX (TRC20)\r
              </li>\r
              <li (click)="selectCurrency('bsc')" class="trx-option">BSC (BEP20)\r
              </li>\r
            </ul>\r
            <small class="sign-in-desktop__validation-error"\r
              *ngIf="usdForm.get('cashoutsend.usdtAddressType')?.invalid && usdForm.get('cashoutsend.usdtAddressType')?.touched">\r
              <span *ngIf="usdForm.get('cashoutsend.usdtAddressType')?.errors?.['required']">\r
                \u26A0\uFE0F USDT Address Type is required!\r
              </span>\r
            </small>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="fd"><span class="gradient-star">*</span> Available For Payout</label>\r
            <input type="text" name="waletAmountUsd" formControlName="payoutvalue" [value]="waletAmountUsd"\r
              [disabled]=true>\r
          </div>\r
        </div>\r
\r
        <div class="form-group" formGroupName="cashoutsend">\r
          <label class="fd"><span class="gradient-star">*</span> Cashout amount in USD</label>\r
          <input type="number" placeholder="Amount Min 10 Max 5,000" formControlName="amount" min="10" max="5000"\r
            (keypress)="amountEnter($event)" (input)="validateAmount()" [(ngModel)]="AmountUSD" class="single_input" />\r
          <small class="sign-in-desktop__validation-error">\r
            <span *ngIf="usdForm.get('cashoutsend.amount')?.invalid && usdForm.get('cashoutsend.amount')?.touched"\r
              class="help-block">\r
\r
              <span *ngIf="usdForm.get('cashoutsend.amount')?.errors?.['required']">\r
                Payout Amount is required\r
              </span>\r
\r
              <span *ngIf="usdForm.get('cashoutsend.amount')?.errors?.['min'] \r
                              || usdForm.get('cashoutsend.amount')?.errors?.['max']">\r
                Payout Amount must be min 10 max 5,000\r
              </span>\r
\r
              <span *ngIf="usdForm.get('cashoutsend.amount')?.errors?.['pattern']">\r
                Only numeric values are allowed\r
              </span>\r
\r
            </span>\r
          </small>\r
        </div>\r
        <div *ngIf="showAmountError" class="error-msg sign-in-desktop__validation-error">\r
          Amount exceeds your available balance ({{ waletAmountUsd |\r
          currency:'USD':'symbol':'1.2-2' }})\r
        </div>\r
        <div class="fd m_t_10" *ngIf="selectedCurrency === 'TRX' && AmountUSD && AmountUSD >= 10 && Cryptoprices">\r
          <label class="fd">Amount of TRX you will receive</label>\r
          <input type="text" name="availableForPayout" [value]=" AmountUSD / Cryptoprices" disabled>\r
          <span *ngIf="CryptopricesLoader" class="m_l_5 loader_TRX"></span>\r
        </div>\r
        <div class=" p_t_15 button-row">\r
          <button type="submit" class="btn active" [ngClass]="{'backp_color': usdForm.invalid || CryptopricesLoader}"\r
            [disabled]="usdForm.invalid || !Cryptoprices || CryptopricesLoader || showAmountError || errMsg">\r
            <span>Withdrawal <i class="{{ apiLoader ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i></span>\r
            <span *ngIf="historyloader" class="m_l_5 loader_2"></span>\r
          </button>\r
        </div>\r
        <p style="color: #f00;" *ngIf="errMsg">{{errMsg}}</p>\r
      </form>\r
\r
    </div>\r
    <div *ngIf="Withdrawalcurrency === 'INR'">\r
      <form class="fd inpElm" [formGroup]="criptoWithDrawalForm" (ngSubmit)="onWithdrawSubmit()" *ngIf="hasBankAccount">\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="login-input-amount" class="fd"><span class="gradient-star">*</span> Amount</label>\r
\r
            <input type="phone" class="styled-input bg_3" placeholder="Amount Min 1,000 Max 19,999"\r
              formControlName="amount" min="1000" max="19999" (keypress)="phonenum($event)"\r
              (input)="checkMaxAmount()" />\r
            <small class="sign-in-desktop__validation-error"\r
              *ngIf="criptoWithDrawalForm.get('amount')?.invalid && criptoWithDrawalForm.get('amount')?.touched">\r
\r
              <span *ngIf="criptoWithDrawalForm.get('amount')?.errors?.['required']">Amount is required</span>\r
              <span *ngIf="criptoWithDrawalForm.get('amount')?.errors?.['pattern']">Amount must be a number</span>\r
              <span *ngIf="criptoWithDrawalForm.get('amount')?.errors?.['min']">Minimum amount is 1,000</span>\r
              <span *ngIf="criptoWithDrawalForm.get('amount')?.errors?.['max']">Maximum amount is 19,999</span>\r
\r
            </small>\r
\r
          </div>\r
          <div class="form-group">\r
            <label for="login-input-amountName" class="fd"><span class="gradient-star">*</span> Account Name</label>\r
            <input type="text" class="styled-input bg_3" placeholder="Account Name" formControlName="name"\r
              (keypress)="accountName($event)" />\r
\r
            <div class="sign-in-desktop__validation-error"\r
              *ngIf="criptoWithDrawalForm.get('name')?.invalid && criptoWithDrawalForm.get('name')?.touched">\r
\r
              <span class="clr_f0" *ngIf="criptoWithDrawalForm.get('name')?.errors?.['required']">\r
                Account name is required\r
              </span>\r
\r
              <span class="clr_f0" *ngIf="criptoWithDrawalForm.get('name')?.errors?.['pattern']">\r
                Account name is invalid\r
              </span>\r
\r
            </div>\r
\r
            <!-- <span class="note-animate"><b>Note:</b> Please enter name as per bank records</span> -->\r
\r
          </div>\r
        </div>\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="login-input-accountNumber" class="fd"><span class="gradient-star">*</span> Account\r
              Number</label>\r
\r
            <input type="phone" class="styled-input bg_3" placeholder="Account Number" formControlName="personalNumber"\r
              (keypress)="Accontnumber($event)" />\r
            <div class="sign-in-desktop__validation-error"\r
              *ngIf="criptoWithDrawalForm.get('personalNumber')?.invalid && criptoWithDrawalForm.get('personalNumber')?.touched">\r
              <span class="clr_f0" *ngIf="criptoWithDrawalForm.get('personalNumber')?.errors?.['required']">\r
                Account number is required\r
              </span>\r
            </div>\r
          </div>\r
          <div class="form-group">\r
            <label><span class="gradient-star">*</span> IFSC Code</label>\r
\r
            <input type="text" maxlength="15" minlength="11" class="styled-input bg_3" formControlName="ifsc"\r
              placeholder="IFSC Code" (keypress)="allowIFSCInput($event)" (input)="toUppercaseIFSC()" />\r
\r
            <div *ngIf="criptoWithDrawalForm.get('ifsc')?.touched" class="sign-in-desktop__validation-error">\r
\r
              <span class="clr_f0" *ngIf="criptoWithDrawalForm.get('ifsc')?.errors?.['required']">\r
                IFSC is required\r
              </span>\r
\r
              <span class="clr_f0" *ngIf="criptoWithDrawalForm.get('ifsc')?.errors?.['pattern']">\r
                Invalid IFSC Format (Example: HDFC0001234)\r
              </span>\r
\r
              <span class="clr_f0" *ngIf="criptoWithDrawalForm.get('ifsc')?.errors?.['minlength'] ||\r
                       criptoWithDrawalForm.get('ifsc')?.errors?.['maxlength']">\r
                IFSC must be exactly 15 characters\r
              </span>\r
\r
            </div>\r
          </div>\r
        </div>\r
        <div class="button-row">\r
\r
          <button type="submit" class="btn active" [ngClass]="{'backp_color' : criptoWithDrawalForm.invalid }"\r
            [disabled]="criptoWithDrawalForm.invalid  ">\r
            Withdrawal <i class="{{ apiLoader ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i>\r
\r
          </button>\r
        </div>\r
      </form>\r
      <div *ngIf="!hasBankAccount">\r
        <button class="btn add-bank-btn" routerLink="/myaccount/bank">\r
          + Add Bank Account\r
        </button>\r
        <p> Please add your bank account to continue withdrawals.</p>\r
\r
      </div>\r
\r
    </div>\r
    <div *ngIf="Withdrawalcurrency === 'VOUCHER'">\r
      <form [formGroup]="walletFormVOUCHER" (ngSubmit)="submitVOUCHER()">\r
        <div class="amount-section  ">\r
          <label><span class="gradient-star">*</span> Amount :</label>\r
          <input type="text" class="cashout_inp" placeholder="Amount  Min 1,000 Max 50,000" formControlName="amount" />\r
          <div class="sign-in-desktop__validation-error"\r
            *ngIf="walletFormVOUCHER.get('amount')?.touched && walletFormVOUCHER.get('amount')?.invalid">\r
            <span *ngIf="walletFormVOUCHER.get('amount')?.errors?.['required']">\u26A0\uFE0F Amount is required</span>\r
            <span *ngIf="walletFormVOUCHER.get('amount')?.errors?.['min']">\u26A0\uFE0F Minimum amount is 1,000</span>\r
            <span *ngIf="walletFormVOUCHER.get('amount')?.errors?.['max']">\u26A0\uFE0F Maximum amount is 50,000</span>\r
            <span *ngIf="walletFormVOUCHER.get('amount')?.errors?.['pattern']">\u26A0\uFE0F Numbers only</span>\r
          </div>\r
        </div>\r
        <div class="amount-section  ">\r
          <label><span class="gradient-star">*</span> Email :</label>\r
          <input type="email" class="cashout_inp" placeholder="Email" formControlName="email" />\r
          <div class="sign-in-desktop__validation-error"\r
            *ngIf="walletFormVOUCHER.get('email')?.touched && walletFormVOUCHER.get('email')?.invalid">\r
            <span *ngIf="walletFormVOUCHER.get('email')?.errors?.['required']">\u26A0\uFE0F Email is required</span>\r
            <span *ngIf="walletFormVOUCHER.get('email')?.errors?.['pattern']">\u26A0\uFE0F Enter Valid e-mail</span>\r
          </div>\r
        </div>\r
\r
        <div class="button-row">\r
          <button class="btn active" type="submit" [disabled]="walletFormVOUCHER.invalid">Withdrawal <i\r
              class="{{ apiLoadervoucher ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i></button>\r
        </div>\r
\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="activeAction == 'Transfer to Player'">\r
  <div class="currency-toggle">\r
    <label>\r
      <input type="radio" name="Transfercurrency" value="INR" [(ngModel)]="Transfercurrency"\r
        (click)="changechps('INR')" />\r
      <span [class.selected]="Transfercurrency === 'INR'">INR</span>\r
    </label>\r
    <label>\r
      <input type="radio" name="Transfercurrency" value="USD" [(ngModel)]="Transfercurrency"\r
        (click)="changechps('USD')" />\r
      <span [class.selected]="Transfercurrency === 'USD'">USD</span>\r
    </label>\r
  </div>\r
\r
  <hr class="divider" />\r
\r
  <!-- Amount Section -->\r
  <div class="withdrawal-container">\r
    <form class="fd inpElm" [formGroup]="transferChipForm" (ngSubmit)="transfer()">\r
      <div class="form-row">\r
        <div class="form-group">\r
\r
          <label class="fd"><span class="gradient-star">*</span> Balance : </label>\r
          <input *ngIf="nametrueFles" type="text" name="availableForPayout" formControlName="payoutvalue"\r
            [value]="availableForPayout">\r
          <input *ngIf="!nametrueFles" type="text" name="waletAmountUsd" formControlName="payoutvalue"\r
            [value]="waletAmountUsd">\r
        </div>\r
        <div class="form-group">\r
          <label class="fd"><span class="gradient-star">*</span> Transfer To Player </label>\r
          <input type="text" formControlName="nickname" placeholder="Enter Nickname" name="nickname">\r
          <small class="sign-in-desktop__validation-error">\r
            <span *ngIf="!transferChipForm.get('nickname')?.valid && transferChipForm.get('nickname')?.touched"\r
              class="help-block">\r
              <span *ngIf="transferChipForm.get('nickname')?.errors?.['required']">Enter\r
                your Nickname!</span>\r
              <span *ngIf="transferChipForm.get('nickname')?.errors?.['minlength']">Nickname\r
                must be at least 4 characters!</span>\r
              <span *ngIf="transferChipForm.get('nickname')?.errors?.['pattern']">Enter\r
                alphabets and numeric only!</span>\r
            </span>\r
          </small>\r
        </div>\r
      </div>\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="fd"><span class="gradient-star">*</span> Amount </label>\r
          <input type="number" name="amount" formControlName="amount" placeholder="Enter Amount"\r
            (keypress)="enterAMountChi($event)">\r
          <small class="sign-in-desktop__validation-error fielderror" *ngIf="walletCCode === 'INR'">\r
            <span *ngIf="!transferChipForm.get('amount')?.valid && transferChipForm.get('amount')?.touched"\r
              class="help-block">\r
              <span *ngIf="transferChipForm.get('amount')?.errors?.['required']">\r
                Enter Your Amount</span>\r
              <span *ngIf="transferChipForm.get('amount')?.errors?.['min']">\r
\r
                Minimum 1,000</span>\r
              <span *ngIf="transferChipForm.get('amount')?.errors?.['max']">\r
                Maximum 100,000</span>\r
              <span *ngIf="transferChipForm.get('amount')?.errors?.['pattern']">\r
                Enter Valid Amount</span>\r
            </span>\r
          </small>\r
          <small class="sign-in-desktop__validation-error  fielderror" *ngIf="walletCCode === 'USD'">\r
            <span *ngIf="!transferChipForm.get('amount')?.valid && transferChipForm.get('amount')?.touched"\r
              class="help-block">\r
              <span *ngIf="transferChipForm.get('amount')?.errors?.['required']">\r
                Enter Your Amount</span>\r
              <span *ngIf="transferChipForm.get('amount')?.errors?.['min']">\r
                Minimum 10</span>\r
              <span *ngIf="transferChipForm.get('amount')?.errors?.['max']">\r
                Maximum 1,000</span>\r
              <span *ngIf="transferChipForm.get('amount')?.errors?.['pattern']">\r
                Enter Valid Amount</span>\r
            </span>\r
          </small>\r
          <br />\r
          <small *ngIf="walletCCode === 'INR'" class="clr_2">* Minimum 1,000 Maximum 100,000</small>\r
          <small *ngIf="walletCCode === 'USD'" class="clr_2">* Minimum 10 Maximum 1,000 </small>\r
        </div>\r
        <div class="form-group">\r
          <label class="fd"><span class="gradient-star">*</span> Comments </label>\r
          <textarea rows="1" cols="33" name="message" formControlName="message"\r
            placeholder="Enter your comment here "></textarea>\r
          <small class=" sign-in-desktop__validation-error fielderror">\r
            <span *ngIf="!transferChipForm.get('message')?.valid && transferChipForm.get('message')?.touched"\r
              class="help-block">\r
              <!-- <span *ngIf="transferChipForm.get('message').errors['required']">\r
                    {{'Enter Your Amount</span> -->\r
              <span *ngIf="transferChipForm.get('message')?.errors?.['pattern']">\r
                Allowed characters are</span>\r
            </span>\r
          </small>\r
        </div>\r
      </div>\r
      <div class="button-row">\r
        <button type="submit" class="btn active" [ngClass]="{'backp_color' : transferChipForm.invalid}"\r
          [disabled]="transferChipForm.invalid">\r
          <span>Transfer <i class="{{ apiLoader ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i></span>\r
          <!-- <span *ngIf="historyloader" class="m_l_5 loader_2"></span> -->\r
        </button>\r
      </div>\r
\r
    </form>\r
  </div>\r
</div>\r
\r
<div *ngIf="activeAction == 'Pending Withdrawals'">\r
  <div class="table-responsive m_t_15" *ngIf="WithdrawsResponse.length > 0">\r
    <table class="transaction-table">\r
      <thead>\r
        <tr>\r
          <th class="sticky-col"><span class="gradient-star ">*</span> Amount</th>\r
          <th><span class="gradient-star">*</span> Date</th>\r
          <th><span class="gradient-star">*</span> Status</th>\r
          <th><span class="gradient-star">*</span> Action</th>\r
        </tr>\r
      </thead>\r
      <tbody *ngFor="let withdraw of WithdrawsResponse ;">\r
        <tr>\r
          <td class="sticky-col"><span>{{withdraw.currency == 'USD'?'$':'\u20B9'}}</span>\r
            <!-- <span *ngIf="{withdraw.currency == 'INR'}">\u20B9</span>  -->\r
            {{withdraw.amount | number}}</td>\r
          <td>{{withdraw.creationDate | slice:0:10}} - {{withdraw.creationDate | slice:12:19}}</td>\r
          <!-- <td>{{withdraw.displayRefTxnID}}</td> -->\r
          <td>{{withdraw.status}}</td>\r
          <td class="submit-btn"><button type="submit" class="btn_1" style="font-weight: 500;"\r
              (click)="cancelwithdrawal(withdraw.refTxnID)">REVERSE <i\r
                class="{{ loadingId === withdraw.refTxnID ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i>\r
            </button></td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
  <h1 class="pending_error" *ngIf="errMsg">{{errMsg}}</h1>\r
\r
\r
\r
\r
\r
  <div class="popup-overlay" *ngIf="urlSafe">\r
    <div class="popup-container">\r
      <div class="popup-header">\r
        <span class="close-btn" (click)="closeIframe()">\r
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </span>\r
      </div>\r
      <div class="iframe-wrapper">\r
        <div class="iframe-loader" *ngIf="!iframeLoaded">\r
          <img src="assets/siteImg/Comp_2.gif" alt="Loading..." class="loader-gif" />\r
        </div>\r
        <iframe scrolling="yes" frameborder="0" allowfullscreen [src]="urlSafe" (load)="onIframeLoaded()"\r
          [class.loaded]="iframeLoaded"></iframe>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="loader-wrapper" *ngIf="responseLoader">\r
    <img [src]="'/assets/giflogo.gif?' + loaderKey" width="280" alt="loading" />\r
  </div>`, styles: ["/* src/app/pages/dashboard/cashier/cashier.css */\n.popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 999999;\n}\n.popup-overlay.active {\n  opacity: 1;\n  visibility: visible;\n}\n.popup-container {\n  width: 90%;\n  max-width: 900px;\n  height: 80vh;\n  background: rgb(50, 50, 50);\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transform: scale(0.9);\n  transition: transform 0.3s ease;\n}\n.popup-overlay.active .popup-container {\n  transform: scale(1);\n}\n.popup-header {\n  padding: 15px 20px;\n  background: #f8f9fa;\n  display: flex;\n  justify-content: flex-end;\n}\n.close-btn {\n  cursor: pointer;\n  color: #6c757d;\n  transition: all 0.2s ease;\n}\n.close-btn:hover {\n  color: #495057;\n  transform: rotate(90deg);\n}\n.close-btn svg {\n  display: block;\n}\n.iframe-wrapper {\n  flex: 1;\n  padding: 0;\n  overflow: hidden;\n}\niframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: white;\n}\n.iframe-wrapper {\n  position: relative;\n  height: 100%;\n}\n.iframe-loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.8);\n  z-index: 10;\n}\n.iframe-loader .loader-gif {\n  width: 50px;\n  height: 50px;\n}\niframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: white;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\nul.dropdown-list li {\n  padding: 3px;\n  background: #0e0e0e;\n  margin: 2px;\n  cursor: pointer;\n}\nul.dropdown-list {\n  background: #1a1919;\n}\nh1.pending_error {\n  color: #626262;\n}\n.dropdown-header.placeholder,\n.dropdown-header.selected {\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: middle;\n  cursor: pointer;\n  background-color: #000;\n  padding: 10px;\n  border-radius: 5px;\n  width: 100%;\n  display: flex !important;\n  justify-content: space-between !important;\n  align-items: center;\n  opacity: 1;\n}\niframe.loaded {\n  opacity: 1;\n}\n@media (max-width: 768px) {\n  .form-image {\n    display: none;\n  }\n  .form-image,\n  .form-fields {\n    width: 100%;\n    padding: 20px;\n  }\n}\n.transaction-table {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #2a2a2a;\n  border-radius: 8px;\n}\n.transaction-table th,\n.transaction-table td {\n  padding: 10px;\n  border-bottom: 1px solid #444;\n  text-align: left;\n  text-wrap: nowrap;\n}\nth {\n  background: #0f0f0f;\n}\ntr {\n  background: var(--secondary-bg);\n}\n.note-animate {\n  font-size: 14px;\n  color: #ff0800;\n  font-weight: 600;\n  animation: fadeGlow 2s ease-in-out infinite;\n}\n@keyframes fadeGlow {\n  0% {\n    opacity: 0.3;\n    text-shadow: 0 0 0px #ff2424;\n  }\n  50% {\n    opacity: 1;\n    text-shadow: 0 0 6px #ff0000;\n  }\n  100% {\n    opacity: 0.3;\n    text-shadow: 0 0 0px #ff1f1f;\n  }\n}\n.currency-toggle {\n  padding-left: 5px;\n}\nbutton.add-bank-btn {\n  border: none;\n  background: var(--gradient-primary);\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 17px;\n  color: #fff;\n  font-weight: 500;\n}\n.clr_2 {\n  color: #f00;\n}\n.payment-systems {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin: 20px 0;\n}\n.payment-systems button {\n  background: #000000;\n  color: #ffffff;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 15px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  min-width: 140px;\n}\n.payment-systems button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 15px rgba(21, 101, 192, 0.3);\n}\n.payment-systems button.active {\n  background: var(--gradient-primary);\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(229, 86, 30, 0.3);\n}\n.payment-title {\n  margin: 20px 0 10px;\n  color: #333;\n  font-size: 18px;\n  font-weight: 700;\n}\n.payment-title {\n  color: #ffffff;\n}\n.payment-system-dropdown {\n  margin: 15px 0;\n}\n.payment-system-dropdown label {\n  display: block;\n  margin-bottom: 8px;\n  color: #dfdfdf;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.6px;\n}\n.system-select {\n  width: 20%;\n  height: 48px;\n  border-radius: 8px;\n  border: 1px solid #444;\n  background: #111;\n  color: #fff;\n  padding: 0 12px;\n  font-size: 15px;\n  font-weight: 600;\n  outline: none;\n}\n.system-select:focus {\n  border-color: #ff6600;\n}\n.payment-methods-wrapper {\n  margin-top: 15px;\n}\n.payment-heading {\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #cccccc;\n  letter-spacing: 0.6px;\n}\n.payment-system-dropdown {\n  margin: 15px 0;\n}\n.payment-system-dropdown label {\n  display: block;\n  margin-bottom: 8px;\n  color: #dfdfdf;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.6px;\n}\n.system-select {\n  width: 20%;\n  height: 48px;\n  border-radius: 8px;\n  border: 1px solid #444;\n  background: #111;\n  color: #fff;\n  padding: 0 12px;\n  font-size: 15px;\n  font-weight: 600;\n  outline: none;\n}\n.system-select:focus {\n  border-color: #ff6600;\n}\n.payment-methods-wrapper {\n  margin-top: 15px;\n}\n.payment-heading {\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #cccccc;\n  letter-spacing: 0.6px;\n}\n.payment-methods {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.method-btn {\n  width: 170px;\n  height: 90px;\n  border: none;\n  border-radius: 2px;\n  overflow: hidden;\n  cursor: pointer;\n  padding: 0;\n  background: #dfd9d9;\n  display: flex;\n  flex-direction: column;\n}\n.method-btn.active {\n  box-shadow: 0 0 12px rgba(255, 102, 0, 0.4);\n}\n.paymethod-icon-wrapper {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n}\n.paymethod-icon {\n  width: 80px;\n  height: 40px;\n  object-fit: contain;\n}\n.method-name {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  background: #5f86bd;\n}\n.method-btn.active .method-name {\n  background:\n    linear-gradient(\n      90deg,\n      #cc0000 0%,\n      #ff6b00 100%);\n}\n@media (min-width: 200px) and (max-width: 1080px) {\n  .system-select {\n    width: 54%;\n    height: 48px;\n    border-radius: 8px;\n    border: 1px solid #444;\n    background: #111;\n    color: #fff;\n    padding: 0 12px;\n    font-size: 15px;\n    font-weight: 600;\n    outline: none;\n  }\n}\n.currency-logo {\n  width: 220px;\n  border-radius: 5px;\n}\n.voucher-btn {\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 600;\n}\n.currency-option {\n  min-width: 150px;\n  min-height: 50px;\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 18px;\n  transition: 0.2s ease-in-out;\n}\n.currency-option.selected {\n  box-shadow: 0 0 8px rgba(255, 102, 0, 0.4);\n}\n.currency-logo {\n  width: 153px;\n  object-fit: contain;\n}\n.currency-toggle {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n@media (min-width: 330px) and (max-width: 768px) {\n  .currency-toggle {\n    justify-content: space-between;\n    gap: 0px;\n  }\n  .currency-option {\n    min-width: 110px;\n    font-size: 14px;\n    border-radius: 10px;\n  }\n  .currency-logo {\n    width: 110px;\n    object-fit: contain;\n  }\n}\n/*# sourceMappingURL=cashier.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MessageService }, { type: CommonUtilService }, { type: Store }, { type: PlayerService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Cashier, { className: "Cashier", filePath: "src/app/pages/dashboard/cashier/cashier.ts", lineNumber: 36 });
})();
export {
  Cashier
};
//# sourceMappingURL=chunk-4DSSKBWE.js.map
