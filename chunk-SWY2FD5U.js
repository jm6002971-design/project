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
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/bank/bank.ts
function Bank_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 8);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "My Account ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "img", 8);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Bank");
    \u0275\u0275elementEnd()();
  }
}
function Bank_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 9);
    \u0275\u0275text(1, "Bank");
    \u0275\u0275elementEnd();
  }
}
function Bank_table_3_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 13);
    \u0275\u0275listener("click", function Bank_table_3_tr_16_Template_button_click_12_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deletBank(i_r2));
    });
    \u0275\u0275element(13, "span");
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const bank_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bank_r4.nameOnBank);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bank_r4.bankAccountNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bank_r4.bankIFSCCOde);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bank_r4.bankName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bank_r4.accountStatus);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeIndex === i_r2);
  }
}
function Bank_table_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 10)(1, "thead")(2, "tr")(3, "th", 11);
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "IFSC Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Account Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Delete Bank Account");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, Bank_table_3_tr_16_Template, 16, 7, "tr", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r2.getbankaccountdetails);
  }
}
function Bank_div_4_div_21_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter Bank Name ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_21_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Length should be in between 3 to 40 ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_21_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Length should be in between 3 to 40 ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_21_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter valid bank name (letters and spaces only) ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, Bank_div_4_div_21_small_1_Template, 2, 0, "small", 28)(2, Bank_div_4_div_21_small_2_Template, 2, 0, "small", 28)(3, Bank_div_4_div_21_small_3_Template, 2, 0, "small", 28)(4, Bank_div_4_div_21_small_4_Template, 2, 0, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.BankForm.get("bankName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.BankForm.get("bankName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.BankForm.get("bankName")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["maxlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.BankForm.get("bankName")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]);
  }
}
function Bank_div_4_div_30_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter Account Name ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_30_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Length should be in between 4 to 24 ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_30_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " length should be in between 4 to 24 ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_30_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter Valid Bank Name ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, Bank_div_4_div_30_small_1_Template, 2, 0, "small", 28)(2, Bank_div_4_div_30_small_2_Template, 2, 0, "small", 28)(3, Bank_div_4_div_30_small_3_Template, 2, 0, "small", 28)(4, Bank_div_4_div_30_small_4_Template, 2, 0, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.BankForm.get("NameOnAccount")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.BankForm.get("NameOnAccount")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.BankForm.get("NameOnAccount")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["maxlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.BankForm.get("NameOnAccount")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]);
  }
}
function Bank_div_4_div_38_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter Bank Account Number ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_38_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " The account number should be between 6 to 32 ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_38_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " The account number should be between 6 to 32 ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_38_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter Valid Account Number ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, Bank_div_4_div_38_small_1_Template, 2, 0, "small", 28)(2, Bank_div_4_div_38_small_2_Template, 2, 0, "small", 28)(3, Bank_div_4_div_38_small_3_Template, 2, 0, "small", 28)(4, Bank_div_4_div_38_small_4_Template, 2, 0, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.BankForm.get("bankAccountNumber")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.BankForm.get("bankAccountNumber")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.BankForm.get("bankAccountNumber")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["maxlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.BankForm.get("bankAccountNumber")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]);
  }
}
function Bank_div_4_div_47_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter IFSC Code ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_47_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Invalid IFSC Format (Example: HDFC0001234) ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_47_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " IFSC must be exactly 11 characters ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_47_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " IFSC must be exactly 15 characters ");
    \u0275\u0275elementEnd();
  }
}
function Bank_div_4_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, Bank_div_4_div_47_small_1_Template, 2, 0, "small", 28)(2, Bank_div_4_div_47_small_2_Template, 2, 0, "small", 28)(3, Bank_div_4_div_47_small_3_Template, 2, 0, "small", 28)(4, Bank_div_4_div_47_small_4_Template, 2, 0, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.BankForm.get("ifsccode")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.BankForm.get("ifsccode")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.BankForm.get("ifsccode")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.BankForm.get("ifsccode")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["maxlength"]);
  }
}
function Bank_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 6)(2, "span", 7);
    \u0275\u0275text(3, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "img", 8);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "My Account ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "img", 8);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Bank");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h2", 9);
    \u0275\u0275text(11, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "form", 15);
    \u0275\u0275listener("ngSubmit", function Bank_div_4_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFormSubmit());
    });
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 17)(15, "label")(16, "span", 18);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 19);
    \u0275\u0275element(20, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, Bank_div_4_div_21_Template, 5, 4, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 16)(23, "div", 17)(24, "label")(25, "span", 18);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Account Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 19)(29, "input", 22);
    \u0275\u0275listener("keydown.space", function Bank_div_4_Template_input_keydown_space_29_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, Bank_div_4_div_30_Template, 5, 4, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "label")(33, "span", 18);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 19)(37, "input", 23);
    \u0275\u0275listener("keydown.space", function Bank_div_4_Template_input_keydown_space_37_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, Bank_div_4_div_38_Template, 5, 4, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 16)(40, "div", 17)(41, "label")(42, "span", 18);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " IFSC CODE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 19)(46, "input", 24);
    \u0275\u0275listener("keydown.space", function Bank_div_4_Template_input_keydown_space_46_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.preventDefault());
    })("keypress", function Bank_div_4_Template_input_keypress_46_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.allowIFSCInput($event));
    })("input", function Bank_div_4_Template_input_input_46_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toUppercaseIFSC());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, Bank_div_4_div_47_Template, 5, 4, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 25)(50, "button", 26);
    \u0275\u0275text(51, " Add Account ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx_r2.BankForm);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r2.BankForm.get("bankName")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r2.BankForm.get("bankName")) == null ? null : tmp_2_0.invalid));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r2.BankForm.get("NameOnAccount")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r2.BankForm.get("NameOnAccount")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r2.BankForm.get("bankAccountNumber")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r2.BankForm.get("bankAccountNumber")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r2.BankForm.get("ifsccode")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r2.BankForm.get("ifsccode")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.BankForm.invalid);
  }
}
function Bank_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", "/assets/giflogo.gif?" + ctx_r2.loaderKey, \u0275\u0275sanitizeUrl);
  }
}
var Bank = class _Bank {
  constructor(playerSer, massageService, store) {
    this.playerSer = playerSer;
    this.massageService = massageService;
    this.store = store;
    this.responseLoader = false;
    this.loaderKey = Date.now();
    this.hasBankAccounts = false;
    this.activeIndex = null;
  }
  ngOnInit() {
    this.showLoader();
    this.BankForm = new FormGroup({
      accountType: new FormControl("savings", [Validators.required]),
      bankName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern(/^[A-Za-z ]+$/)
      ]),
      NameOnAccount: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(24),
        Validators.pattern("^[A-Za-z]+( [A-Za-z]+)*$")
      ]),
      bankAccountNumber: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        Validators.pattern(/^[0-9]+$/)
      ]),
      ifsccode: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/),
        Validators.minLength(11),
        Validators.maxLength(11)
      ])
    });
    this.playerSer.onCashierGetBankAccount().subscribe((data) => {
      if (data) {
        this.moveToTop();
        this.hideLoader();
        this.ActiveBankAC = data.activeBankCount;
        if (data?.success && data.TBankAccountInfos?.length > 0) {
          this.getbankaccountdetails = data.TBankAccountInfos;
          this.hasBankAccounts = this.getbankaccountdetails.length > 0;
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
  onFormSubmit() {
    if (this.BankForm.invalid)
      return;
    this.showLoader();
    const data = {
      accountType: "imps_ib",
      bankName: this.BankForm.value.bankName,
      nameOnAccount: "Name : " + this.BankForm.value.NameOnAccount,
      bankAccountNumber: this.BankForm.value.bankAccountNumber,
      personalNumber: this.BankForm.value.ifsccode
    };
    console.log(data);
    this.store.dispatch(new CashierGetBalanceStart());
    this.playerSer.onCashierAddBankAccount(data).subscribe((resData) => {
      console.log(resData);
      if (resData) {
        this.hideLoader();
        if (resData.success) {
          this.moveToTop();
          this.massageService.success("Success", resData.description == "SUCCESS" ? "Bank details added successfully" : resData.description);
          this.playerSer.onCashierGetBankAccount().subscribe((data2) => {
            if (data2.success && data2.TBankAccountInfos?.length > 0) {
              this.getbankaccountdetails = data2.TBankAccountInfos;
              this.hasBankAccounts = this.getbankaccountdetails.length > 0;
            }
          });
          this.BankForm.reset();
        } else {
          this.massageService.success("Success", resData.description);
        }
      }
    });
  }
  allowIFSCInput(event) {
    const allowed = /^[A-Za-z0-9]$/;
    if (!allowed.test(event.key)) {
      event.preventDefault();
    }
  }
  toUppercaseIFSC() {
    const ctrl = this.BankForm.get("ifsccode");
    if (ctrl) {
      ctrl.setValue(ctrl.value.toUpperCase(), { emitEvent: false });
    }
  }
  deletBank(i) {
    this.activeIndex = i;
    let bankdetailes = this.getbankaccountdetails[i];
    let body = {
      "face": "face_1387df61497e",
      "ip": "ip_56264c127b39",
      "bankEncodedIDs": [
        bankdetailes.bankEncodedID
      ]
    };
    this.playerSer.onCashierDeleteBankAccount(body).subscribe((data) => {
      console.log(data);
      if (data.success) {
        console.log(data.deleteBankInfoList.description);
        console.log(data.deleteBankInfoList);
        this.massageService.success("Success", data.deleteBankInfoList[0].description == "SUCCESS" ? "Bank details deleted successfully" : data.deleteBankInfoList[0].description);
        this.getbankaccountdetails = [];
        this.playerSer.onCashierGetBankAccount().subscribe((data2) => {
          if (data2) {
            this.hideLoader();
            this.moveToTop();
            this.ActiveBankAC = data2.activeBankCount;
            console.log(data2.TBankAccountInfos);
            this.hasBankAccounts = data2.TBankAccountInfos?.length > 0;
            console.log(this.hasBankAccounts);
            if (data2?.success && data2.TBankAccountInfos?.length > 0) {
              this.getbankaccountdetails = data2.TBankAccountInfos;
              this.hasBankAccounts = this.getbankaccountdetails.length > 0;
            }
            this.activeIndex = null;
          }
        });
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
  static {
    this.\u0275fac = function Bank_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Bank)(\u0275\u0275directiveInject(PlayerService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Bank, selectors: [["app-bank"]], decls: 6, vars: 5, consts: [["class", "redirectline", 4, "ngIf"], ["class", "m_t_15 live_casino_title", 4, "ngIf"], [1, "table-responsive"], ["class", "transaction-table", 4, "ngIf"], ["class", "profile-container", 4, "ngIf"], ["class", "loader-wrapper", 4, "ngIf"], [1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "rightArrow", "width", "15"], [1, "m_t_15", "live_casino_title"], [1, "transaction-table"], [1, "sticky-col"], [4, "ngFor", "ngForOf"], [1, "deleteBTN", "btn", 3, "click"], [1, "profile-container"], [1, "profile-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], [1, "gradient-star"], [1, "fgsdgd"], ["type", "text", "placeholder", "Bank Name", "formControlName", "bankName"], ["class", "sign-in-desktop__validation-error", 4, "ngIf"], ["type", "text", "placeholder", "Account Name", "formControlName", "NameOnAccount", 3, "keydown.space"], ["type", "text", "placeholder", "Account Number", "formControlName", "bankAccountNumber", "inputmode", "numeric", "maxlength", "32", 3, "keydown.space"], ["type", "text", "placeholder", "IFSC Code", "formControlName", "ifsccode", "maxlength", "15", 3, "keydown.space", "keypress", "input"], [1, "button-row"], ["type", "submit", 1, "btn", "active", 3, "disabled"], [1, "sign-in-desktop__validation-error"], [4, "ngIf"], [1, "loader-wrapper"], ["width", "280", "alt", "loading", 3, "src"]], template: function Bank_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Bank_div_0_Template, 9, 0, "div", 0)(1, Bank_h2_1_Template, 2, 0, "h2", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275template(3, Bank_table_3_Template, 17, 1, "table", 3)(4, Bank_div_4_Template, 52, 6, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, Bank_div_5_Template, 2, 1, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.hasBankAccounts);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasBankAccounts);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.hasBankAccounts);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hasBankAccounts);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.responseLoader);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, RouterLink, RouterModule, CommonModule, NgForOf, NgIf, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.transaction-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #2a2a2a;\n  border-radius: 8px;\n}\n.transaction-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.transaction-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #444;\n  p-align: left;\n}\nth[_ngcontent-%COMP%] {\n  background: #0f0f0f;\n}\ntr[_ngcontent-%COMP%] {\n  background: var(--secondary-bg);\n}\n.fgsdgd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fgsdgd[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  width: 160px;\n  height: 50px;\n  background: var(--gradient-primary);\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.5s;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  p-decoration: none;\n  border: none;\n}\nbutton.active[_ngcontent-%COMP%] {\n  background: #d71713;\n}\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 40px;\n  width: 18px;\n  height: 20px;\n  display: inline-block;\n  background: #fff;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  transition: 0.5s;\n}\nbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: scale(1.5) rotate(60deg) translateY(10px);\n}\nbutton.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%) rotate(-45deg);\n  border-radius: 0;\n  width: 20px;\n  height: 10px;\n  background: transparent;\n  border-left: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n}\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: " ";\n  position: absolute;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #fff;\n  box-shadow:\n    12px 0px 0 #ffffff,\n    7px -3px 0 #ffffff,\n    9px -2px 0 #ffffff,\n    8px -6px 0 #e8551b;\n  transition: 0.5s;\n}\nbutton.active[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before, \nbutton.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  transform: scale(0);\n}\nbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before {\n  transform: rotate(-90deg) translateX(50%) translateY(-10px);\n}\nbutton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 40px;\n  color: #fff;\n  transition: 0.5s;\n  margin: 0;\n}\nbutton[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], \nbutton.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transform: translateX(-50px) translateY(-5px) scale(0);\n}\n/*# sourceMappingURL=bank.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Bank, [{
    type: Component,
    args: [{ selector: "app-bank", imports: [FormsModule, RouterLink, RouterModule, CommonModule, ReactiveFormsModule], standalone: true, template: `<div *ngIf="hasBankAccounts" class="redirectline"><span routerLink="/home">Home</span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15"> <span>My Account </span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15"> <span>Bank</span></div>\r
<h2 *ngIf="hasBankAccounts"  class="m_t_15 live_casino_title">Bank</h2>\r
<div class="table-responsive">\r
    <table class="transaction-table" *ngIf="hasBankAccounts">\r
        <thead>\r
            <tr>\r
                <th class="sticky-col">Name</th>\r
                <th>Account Number</th>\r
                <!-- <th>Branch Name</th> -->\r
                <th>IFSC Code</th>\r
                <th>Bank Name</th>\r
                <th>Account Status</th>\r
                <th>Delete Bank Account</th>\r
            </tr>\r
        </thead>\r
        <tbody>\r
            <tr *ngFor="let bank of getbankaccountdetails; let i = index">\r
                <td class="sticky-col">{{bank.nameOnBank}}</td>\r
                <td>{{bank.bankAccountNumber}}</td>\r
                <!-- <td>{{bank.bankBranchName}}</td> -->\r
                <td>{{bank.bankIFSCCOde}}</td>\r
                <td>{{bank.bankName}}</td>\r
                <td>{{bank.accountStatus}}</td>\r
                <td  ><button class="deleteBTN btn"  [class.active]="activeIndex === i" (click)="deletBank(i)"><span></span><p>Delete</p></button></td>\r
            </tr>\r
        </tbody>\r
    </table>\r
    <div class="profile-container" *ngIf="!hasBankAccounts">\r
        <div class="redirectline"><span routerLink="/home">Home</span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15"> <span>My Account </span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15"> <span>Bank</span></div>\r
        <h2 class="m_t_15 live_casino_title">Bank</h2>\r
    <!-- <div class="profile-container"> -->\r
        <form class="profile-form" [formGroup]="BankForm" (ngSubmit)="onFormSubmit()">\r
            <div class="form-row">\r
                <!-- <div class="form-group">\r
                    <label><span class="gradient-star">*</span> Account Type</label>\r
                    <span class="fgsdgd">\r
                        <select formControlName="accountType">\r
                            <option value="savings">Savings</option>\r
                            <option value="current">Current</option>\r
                        </select>\r
                    </span>\r
                    <div class="sign-in-desktop__validation-error" *ngIf="BankForm.get('accountType')?.touched &&\r
                 BankForm.get('accountType')?.invalid">\r
                        <small *ngIf="BankForm.get('accountType')?.errors?.['required']">\r
                            Select Account Type\r
                        </small>\r
                    </div>\r
                </div> -->\r
\r
                <div class="form-group">\r
                    <label><span class="gradient-star">*</span> Bank Name</label>\r
\r
                    <span class="fgsdgd">\r
                        <input type="text" placeholder="Bank Name" formControlName="bankName" />\r
                    </span>\r
\r
                    <div class="sign-in-desktop__validation-error" *ngIf="BankForm.get('bankName')?.touched &&\r
                 BankForm.get('bankName')?.invalid">\r
\r
                        <small *ngIf="BankForm.get('bankName')?.errors?.['required']">\r
                            Enter Bank Name\r
                        </small>\r
\r
                        <small *ngIf="BankForm.get('bankName')?.errors?.['minlength']">\r
                            Length should be in between 3 to 40\r
                        </small>\r
\r
                        <small *ngIf="BankForm.get('bankName')?.errors?.['maxlength']">\r
                            Length should be in between 3 to 40\r
                        </small>\r
                        <small *ngIf="BankForm.get('bankName')?.errors?.['pattern']">\r
                            Enter valid bank name (letters and spaces only)\r
                        </small>\r
\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="form-row">\r
                <div class="form-group">\r
                    <label><span class="gradient-star">*</span> Account Name</label>\r
\r
                    <span class="fgsdgd">\r
                        <input type="text" placeholder="Account Name" formControlName="NameOnAccount"\r
                            (keydown.space)="$event.preventDefault()" />\r
                    </span>\r
\r
                    <div class="sign-in-desktop__validation-error" *ngIf="BankForm.get('NameOnAccount')?.touched &&\r
                 BankForm.get('NameOnAccount')?.invalid">\r
\r
                        <small *ngIf="BankForm.get('NameOnAccount')?.errors?.['required']">\r
                            Enter Account Name\r
                        </small>\r
\r
                        <small *ngIf="BankForm.get('NameOnAccount')?.errors?.['minlength']">\r
                            Length should be in between 4 to 24\r
                        </small>\r
\r
                        <small *ngIf="BankForm.get('NameOnAccount')?.errors?.['maxlength']">\r
                            length should be in between 4 to 24\r
                        </small>\r
                        <small *ngIf="BankForm.get('NameOnAccount')?.errors?.['pattern']">\r
                            Enter Valid Bank Name\r
                        </small>\r
\r
                    </div>\r
                </div>\r
                <div class="form-group">\r
                    <label><span class="gradient-star">*</span> Account Number</label>\r
\r
                    <span class="fgsdgd">\r
                        <input type="text" placeholder="Account Number" formControlName="bankAccountNumber"\r
                            (keydown.space)="$event.preventDefault()"  inputmode="numeric"\r
                            maxlength="32"/>\r
                    </span>\r
\r
                    <div class="sign-in-desktop__validation-error" *ngIf="BankForm.get('bankAccountNumber')?.touched &&\r
                 BankForm.get('bankAccountNumber')?.invalid">\r
\r
                        <small *ngIf="BankForm.get('bankAccountNumber')?.errors?.['required']">\r
                            Enter Bank Account Number\r
                        </small>\r
\r
                        <small *ngIf="BankForm.get('bankAccountNumber')?.errors?.['minlength']">\r
                            The account number should be between 6 to 32\r
                        </small>\r
\r
                        <small *ngIf="BankForm.get('bankAccountNumber')?.errors?.['maxlength']">\r
                            The account number should be between 6 to 32\r
                        </small>\r
                        <small *ngIf="BankForm.get('bankAccountNumber')?.errors?.['pattern']">\r
                            Enter Valid Account Number\r
                        </small>\r
\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="form-row">\r
                <div class="form-group">\r
                    <label><span class="gradient-star">*</span> IFSC CODE</label>\r
                    <span class="fgsdgd">\r
                        <input type="text" placeholder="IFSC Code" formControlName="ifsccode"\r
                            (keydown.space)="$event.preventDefault()" (keypress)="allowIFSCInput($event)"\r
                            (input)="toUppercaseIFSC()" maxlength="15"/>\r
                    </span>\r
\r
                    <div class="sign-in-desktop__validation-error" *ngIf="BankForm.get('ifsccode')?.touched &&\r
                 BankForm.get('ifsccode')?.invalid">\r
\r
                        <small *ngIf="BankForm.get('ifsccode')?.errors?.['required']">\r
                            Enter IFSC Code\r
                        </small>\r
\r
                        <small *ngIf="BankForm.get('ifsccode')?.errors?.['pattern']">\r
                            Invalid IFSC Format (Example: HDFC0001234)\r
                        </small>\r
                        <small *ngIf="BankForm.get('ifsccode')?.errors?.['minlength']">\r
                            IFSC must be exactly 11 characters\r
                        </small>\r
\r
                        <small *ngIf="BankForm.get('ifsccode')?.errors?.['maxlength']">\r
                            IFSC must be exactly 15 characters\r
                        </small>\r
\r
                    </div>\r
                </div>\r
\r
\r
                <div class="form-group">\r
\r
                </div>\r
            </div>\r
            <div class="button-row">\r
                <button class="btn active" [disabled]="BankForm.invalid" type="submit">\r
                    Add Account\r
                </button>\r
            </div>\r
        </form>\r
    </div>\r
\r
      \r
</div>\r
<div class="loader-wrapper" *ngIf="responseLoader">\r
    <img\r
      [src]="'/assets/giflogo.gif?' + loaderKey"\r
      width="280"\r
      alt="loading"\r
    />\r
  </div>`, styles: ['/* src/app/bank/bank.css */\n.transaction-table {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #2a2a2a;\n  border-radius: 8px;\n}\n.transaction-table th,\n.transaction-table td {\n  padding: 10px;\n  border: 1px solid #444;\n  p-align: left;\n}\nth {\n  background: #0f0f0f;\n}\ntr {\n  background: var(--secondary-bg);\n}\n.fgsdgd input {\n  width: 100%;\n}\n.fgsdgd select {\n  width: 100%;\n}\nbutton {\n  position: relative;\n  width: 160px;\n  height: 50px;\n  background: var(--gradient-primary);\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.5s;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  p-decoration: none;\n  border: none;\n}\nbutton.active {\n  background: #d71713;\n}\nbutton span {\n  position: absolute;\n  left: 40px;\n  width: 18px;\n  height: 20px;\n  display: inline-block;\n  background: #fff;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  transition: 0.5s;\n}\nbutton:hover span {\n  transform: scale(1.5) rotate(60deg) translateY(10px);\n}\nbutton.active span {\n  left: 50%;\n  transform: translateX(-50%) rotate(-45deg);\n  border-radius: 0;\n  width: 20px;\n  height: 10px;\n  background: transparent;\n  border-left: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n}\nbutton span::before {\n  content: " ";\n  position: absolute;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #fff;\n  box-shadow:\n    12px 0px 0 #ffffff,\n    7px -3px 0 #ffffff,\n    9px -2px 0 #ffffff,\n    8px -6px 0 #e8551b;\n  transition: 0.5s;\n}\nbutton.active:hover span::before,\nbutton.active span::before {\n  transform: scale(0);\n}\nbutton:hover span::before {\n  transform: rotate(-90deg) translateX(50%) translateY(-10px);\n}\nbutton p {\n  position: absolute;\n  right: 40px;\n  color: #fff;\n  transition: 0.5s;\n  margin: 0;\n}\nbutton:hover p,\nbutton.active p {\n  transform: translateX(-50px) translateY(-5px) scale(0);\n}\n/*# sourceMappingURL=bank.css.map */\n'] }]
  }], () => [{ type: PlayerService }, { type: MessageService }, { type: Store }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Bank, { className: "Bank", filePath: "src/app/bank/bank.ts", lineNumber: 18 });
})();
export {
  Bank
};
//# sourceMappingURL=chunk-SWY2FD5U.js.map
