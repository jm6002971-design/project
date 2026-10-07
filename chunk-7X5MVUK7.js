import {
  RemoveDateFormatPipe
} from "./chunk-LRQ5Y7PP.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDatepickerToggleIcon,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSuffix,
  require_moment
} from "./chunk-XTPSCIPS.js";
import {
  NgxPaginationModule,
  PaginatePipe,
  PaginationControlsComponent
} from "./chunk-IMYJ7Z7K.js";
import {
  CashierService
} from "./chunk-FQIESEDM.js";
import {
  MatNativeDateModule
} from "./chunk-4UX3ITXN.js";
import {
  MessageService
} from "./chunk-YCU5ZQFP.js";
import "./chunk-PDHHGWHH.js";
import "./chunk-HXFVUPJ2.js";
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
  Validators
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
  ɵɵclassMap,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-J735AYEO.js";
import {
  __toESM
} from "./chunk-EAJ6W5YO.js";

// src/app/pages/dashboard/transaction/transaction.ts
var import_moment = __toESM(require_moment());
var _c0 = (a0, a1) => ({ itemsPerPage: a0, currentPage: a1 });
function Transaction_label_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 28)(1, "input", 29);
    \u0275\u0275listener("change", function Transaction_label_13_Template_input_change_1_listener($event) {
      const type_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onChangetype(type_r3.senttype, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.typeForm.value.typesValue.includes(type_r3.senttype));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.typeForm.value.typesValue.includes(type_r3.senttype));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", type_r3.language, " ");
  }
}
function Transaction_p_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.errormassage);
  }
}
function Transaction_h4_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, " Cashouts");
    \u0275\u0275elementEnd();
  }
}
function Transaction_table_47_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 34);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 34);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 34);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 8, ctx_r3.cleanDate(item_r5.createdOn), "medium", "local"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r5.wallet == "USD" ? "$" : "\u20B9", " ", \u0275\u0275pipeBind2(6, 12, item_r5.amount, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r5.wallet == "USD" ? "$" : "\u20B9", " ", \u0275\u0275pipeBind2(9, 15, item_r5.paidAmount, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r5.wallet == "USD" ? "$" : "\u20B9", " ", \u0275\u0275pipeBind2(12, 18, item_r5.cancelledAmount, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.status);
  }
}
function Transaction_table_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 32)(1, "thead")(2, "tr")(3, "th")(4, "span", 13);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th")(8, "span", 13);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th")(12, "span", 13);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Paid Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th")(16, "span", 13);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Cancell Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th")(20, "span", 13);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, Transaction_table_47_tr_24_Template, 15, 21, "tr", 33);
    \u0275\u0275pipe(25, "paginate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(25, 1, ctx_r3.hitorydatacashouts, \u0275\u0275pureFunction2(4, _c0, ctx_r3.selectnumcash, ctx_r3.p)));
  }
}
function Transaction_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "pagination-controls", 35);
    \u0275\u0275listener("click", function Transaction_div_48_Template_pagination_controls_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.moveToTop());
    })("pageChange", function Transaction_div_48_Template_pagination_controls_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.p = $event);
    });
    \u0275\u0275elementEnd()();
  }
}
function Transaction_h4_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, " Deposits");
    \u0275\u0275elementEnd();
  }
}
function Transaction_table_51_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 34);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 34);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 6, ctx_r3.cleanDate(item_r7.startDate), "medium", "local"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r7.currency == "USD" ? "$" : "\u20B9", " ", \u0275\u0275pipeBind2(6, 10, item_r7.cashAmount, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r7.currency == "USD" ? "$" : "\u20B9", " ", \u0275\u0275pipeBind2(9, 13, item_r7.bonus, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.status);
  }
}
function Transaction_table_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 32)(1, "thead")(2, "tr")(3, "th", 36)(4, "span", 13);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th")(8, "span", 13);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "Cash Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th")(12, "span", 13);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "Bonus Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th")(16, "span", 13);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, Transaction_table_51_tr_20_Template, 12, 16, "tr", 33);
    \u0275\u0275pipe(21, "paginate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(21, 1, ctx_r3.hitorydatadeposits, \u0275\u0275pureFunction2(4, _c0, ctx_r3.selectnumDeposit, ctx_r3.q)));
  }
}
function Transaction_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "pagination-controls", 35);
    \u0275\u0275listener("click", function Transaction_div_52_Template_pagination_controls_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.moveToTop());
    })("pageChange", function Transaction_div_52_Template_pagination_controls_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.q = $event);
    });
    \u0275\u0275elementEnd()();
  }
}
function Transaction_h4_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, " Bonus Adjustment");
    \u0275\u0275elementEnd();
  }
}
function Transaction_table_55_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 34);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 5, ctx_r3.cleanDate(item_r9.startDate), "medium", "local"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r9.currency == "USD" ? "$" : "\u20B9", " ", \u0275\u0275pipeBind2(6, 9, item_r9.amount, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.bonusType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.releasedAmount);
  }
}
function Transaction_table_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 32)(1, "thead")(2, "tr")(3, "th")(4, "span", 37);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th")(8, "span", 13);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th")(12, "span", 13);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "Bonus Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th")(16, "span", 13);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Released Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, Transaction_table_55_tr_20_Template, 11, 12, "tr", 33);
    \u0275\u0275pipe(21, "paginate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(21, 1, ctx_r3.hitorydatabonus, \u0275\u0275pureFunction2(4, _c0, ctx_r3.selectnumBouns, ctx_r3.s)));
  }
}
function Transaction_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "pagination-controls", 35);
    \u0275\u0275listener("click", function Transaction_div_56_Template_pagination_controls_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.moveToTop());
    })("pageChange", function Transaction_div_56_Template_pagination_controls_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.s = $event);
    });
    \u0275\u0275elementEnd()();
  }
}
function Transaction_h4_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, " Cash Adjustment");
    \u0275\u0275elementEnd();
  }
}
function Transaction_table_59_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 34);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 4, ctx_r3.cleanDate(item_r11.operationDate), "medium", "local"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (item_r11.wallet == null ? null : item_r11.wallet.name) == "USD" ? "$" : "\u20B9", " ", \u0275\u0275pipeBind2(6, 8, item_r11.cashAmount == null ? null : item_r11.cashAmount.value, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r11.operationType == null ? null : item_r11.operationType.name);
  }
}
function Transaction_table_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 32)(1, "thead")(2, "tr")(3, "th")(4, "span", 37);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 34)(8, "span", 13);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "Cash Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th")(12, "span", 13);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "Operation Type");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, Transaction_table_59_tr_16_Template, 9, 11, "tr", 33);
    \u0275\u0275pipe(17, "paginate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(17, 1, ctx_r3.hitorydata, \u0275\u0275pureFunction2(4, _c0, ctx_r3.selectnumaje, ctx_r3.r)));
  }
}
function Transaction_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "pagination-controls", 35);
    \u0275\u0275listener("click", function Transaction_div_60_Template_pagination_controls_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.moveToTop());
    })("pageChange", function Transaction_div_60_Template_pagination_controls_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.r = $event);
    });
    \u0275\u0275elementEnd()();
  }
}
var Transaction = class _Transaction {
  constructor(fb, store, cashierservice, messageService) {
    this.fb = fb;
    this.store = store;
    this.cashierservice = cashierservice;
    this.messageService = messageService;
    this.selectedType = [];
    this.transactionData = [];
    this.isLoading = false;
    this.types = [
      { language: "Deposits", senttype: "Deposits" },
      { language: "Cashout", senttype: "Cashout" },
      { language: "Bonus Adjustment", senttype: "Bonus Adjustment" },
      { language: "Cash Adjustment", senttype: "Cash Adjustment" }
    ];
    this.hitorydatacashouts = [];
    this.hitorydatadeposits = [];
    this.hitorydatabonus = [];
    this.selectnumcash = 10;
    this.selectnumDeposit = 10;
    this.selectnumBouns = 10;
    this.selectnumaje = 10;
    this.p = 1;
    this.q = 1;
    this.r = 1;
    this.s = 1;
  }
  ngOnInit() {
    this.form = this.fb.group({
      "currency": new FormControl("INR", Validators.required),
      "startDate": new FormControl(this.startDate, Validators.required),
      "endDate": new FormControl(this.endDate, Validators.required),
      "limit": new FormControl(100, Validators.required),
      "index": new FormControl(0, Validators.required)
    });
    this.endDate = /* @__PURE__ */ new Date();
    let oneweek = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() - 1);
    this.startDate = oneweek;
    this.todaydate = (0, import_moment.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD");
    this.typeForm = this.fb.group({
      typesValue: this.fb.array(this.types.filter((t) => t.senttype !== "Cash Adjustment").map((t) => new FormControl(t.senttype)))
    });
    this.selectedType = this.typeForm.value.typesValue;
  }
  onChangetype(typesValue, isChecked, initMode = false) {
    const typesFormArray = this.typeForm.get("typesValue");
    if (typesValue === "Cash Adjustment") {
      if (isChecked) {
        while (typesFormArray.length !== 0) {
          typesFormArray.removeAt(0);
        }
        typesFormArray.push(new FormControl(typesValue));
      } else {
        const index = typesFormArray.controls.findIndex((x) => x.value === typesValue);
        if (index !== -1)
          typesFormArray.removeAt(index);
      }
    } else {
      if (isChecked) {
        const cashAdjIndex = typesFormArray.controls.findIndex((x) => x.value === "Cash Adjustment");
        if (cashAdjIndex !== -1)
          typesFormArray.removeAt(cashAdjIndex);
        typesFormArray.push(new FormControl(typesValue));
      } else {
        const index = typesFormArray.controls.findIndex((x) => x.value === typesValue);
        if (index !== -1)
          typesFormArray.removeAt(index);
      }
    }
    this.selectedType = this.typeForm.value.typesValue;
  }
  onFormSubmit() {
    this.isLoading = true;
    this.hitorydatacashouts = [];
    this.hitorydatadeposits = [];
    this.hitorydatabonus = [];
    this.hitorydata = [];
    if (this.selectedType == "") {
      this.isLoading = false;
      this.errormassage = "Please select transaction type";
      setTimeout(() => {
        this.errormassage = "";
      }, 3500);
    }
    const startDate = (0, import_moment.default)(this.form.value.startDate).format("DD-MM-YYYY");
    const endDate = (0, import_moment.default)(this.form.value.endDate).format("DD-MM-YYYY");
    const body = {
      currency: this.form.value.currency,
      startDate,
      endDate,
      limit: this.form.value.limit,
      index: this.form.value.index,
      type: this.selectedType.toString()
    };
    if (this.selectedType.length === 1 && this.selectedType[0] === "Cash Adjustment") {
      this.cashierservice.onCashierTransactionHistory(body).subscribe((data) => {
        this.isLoading = false;
        if (data && data.values && data.values.length > 0) {
          this.hitorydata = data.values;
        } else if (data.description) {
          this.messageService.error("Failed", data.description);
        } else {
          this.errormassage = "No record found";
          setTimeout(() => {
            this.errormassage = "";
          }, 3500);
        }
      });
    } else {
      this.cashierservice.onCashierTransactionHistoryBYToken(body).subscribe((data) => {
        if (data) {
          this.isLoading = false;
          if (data.success) {
            this.hitorydatacashouts = data.cashouts;
            this.hitorydatadeposits = data.deposits;
            this.hitorydatabonus = data.bonus;
          } else {
            this.errormassage = data.description;
            setTimeout(() => {
              this.errormassage = "";
            }, 3500);
          }
        }
      });
    }
  }
  moveToTop() {
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  cleanDate(dateStr) {
    return new Date(dateStr.replace("[UTC]", ""));
  }
  static {
    this.\u0275fac = function Transaction_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Transaction)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(CashierService), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Transaction, selectors: [["app-transaction"]], decls: 61, vars: 30, consts: [["picker1", ""], ["picker2", ""], [1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "rightArrow", "width", "15"], [1, "m_t_15"], [1, "m_t_15", "live_casino_title"], [1, "transactions-container"], [1, "transaction-types"], ["class", "type-option", 3, "active", 4, "ngFor", "ngForOf"], [1, "section-card", "filter-section", 3, "formGroup"], [1, "filter-row"], [1, "filter-item"], [1, "gradient-star"], ["appearance", "fill", 1, "date-field"], ["matInput", "", "formControlName", "startDate", "readonly", "", 3, "ngModel", "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", "", "src", "assets/sidemenu_icons/calendar.svg", "alt", "calendar"], ["matInput", "", "formControlName", "endDate", "readonly", "", 3, "ngModel", "matDatepicker"], [1, "button-row"], [1, "btn", "active", 3, "click"], ["style", "color: #f00;", 4, "ngIf"], [4, "ngIf"], [1, "table-responsive", "m_t_15"], ["class", "transaction-table", 4, "ngIf"], ["class", "m_t_15", 4, "ngIf"], [1, "table-responsive", "m_t_15", "w-100"], ["class", "transaction-table  ", 4, "ngIf"], [1, "type-option"], ["type", "checkbox", "hidden", "", 3, "change", "checked"], [1, "dot"], [2, "color", "#f00"], [1, "transaction-table"], [4, "ngFor", "ngForOf"], [1, "text-right"], ["previousLabel", "Prev", "nextLabel", "Next", 1, "pt-2", "page-item", 3, "click", "pageChange"], [1, "sticky-col"], [1, "gradient-star", "sticky-col"]], template: function Transaction_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "span", 3);
        \u0275\u0275text(2, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "img", 4);
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5, "My Account");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "img", 4);
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "Transactions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h2", 6);
        \u0275\u0275text(10, "Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
        \u0275\u0275template(13, Transaction_label_13_Template, 4, 4, "label", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "section", 10)(15, "div", 11)(16, "div", 12)(17, "label")(18, "span", 13);
        \u0275\u0275text(19, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " Start Date:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-form-field", 14);
        \u0275\u0275element(22, "input", 15);
        \u0275\u0275pipe(23, "date");
        \u0275\u0275elementStart(24, "mat-datepicker-toggle", 16);
        \u0275\u0275element(25, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "mat-datepicker", null, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 12)(29, "label")(30, "span", 13);
        \u0275\u0275text(31, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, " End Date:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-form-field", 14);
        \u0275\u0275element(34, "input", 18);
        \u0275\u0275pipe(35, "date");
        \u0275\u0275elementStart(36, "mat-datepicker-toggle", 16);
        \u0275\u0275element(37, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "mat-datepicker", null, 1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 19)(41, "button", 20);
        \u0275\u0275listener("click", function Transaction_Template_button_click_41_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFormSubmit());
        });
        \u0275\u0275text(42, "Show ");
        \u0275\u0275element(43, "i");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(44, Transaction_p_44_Template, 2, 1, "p", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, Transaction_h4_45_Template, 2, 0, "h4", 22);
        \u0275\u0275elementStart(46, "div", 23);
        \u0275\u0275template(47, Transaction_table_47_Template, 26, 7, "table", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(48, Transaction_div_48_Template, 2, 0, "div", 25)(49, Transaction_h4_49_Template, 2, 0, "h4", 22);
        \u0275\u0275elementStart(50, "div", 26);
        \u0275\u0275template(51, Transaction_table_51_Template, 22, 7, "table", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275template(52, Transaction_div_52_Template, 2, 0, "div", 25)(53, Transaction_h4_53_Template, 2, 0, "h4", 22);
        \u0275\u0275elementStart(54, "div", 26);
        \u0275\u0275template(55, Transaction_table_55_Template, 22, 7, "table", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(56, Transaction_div_56_Template, 2, 0, "div", 25)(57, Transaction_h4_57_Template, 2, 0, "h4", 22);
        \u0275\u0275elementStart(58, "div", 23);
        \u0275\u0275template(59, Transaction_table_59_Template, 18, 7, "table", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(60, Transaction_div_60_Template, 2, 0, "div", 25);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const picker1_r13 = \u0275\u0275reference(27);
        const picker2_r14 = \u0275\u0275reference(39);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.types);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", \u0275\u0275pipeBind2(23, 24, ctx.startDate, "yyyy-MM-dd"))("matDatepicker", picker1_r13);
        \u0275\u0275advance(2);
        \u0275\u0275property("for", picker1_r13);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngModel", \u0275\u0275pipeBind2(35, 27, ctx.endDate, "yyyy-MM-dd"))("matDatepicker", picker2_r14);
        \u0275\u0275advance(2);
        \u0275\u0275property("for", picker2_r14);
        \u0275\u0275advance(7);
        \u0275\u0275classMap(ctx.isLoading ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errormassage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.hitorydatacashouts == null ? null : ctx.hitorydatacashouts.length) > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.hitorydatacashouts == null ? null : ctx.hitorydatacashouts.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hitorydatacashouts.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.hitorydatadeposits == null ? null : ctx.hitorydatadeposits.length) > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.hitorydatadeposits == null ? null : ctx.hitorydatadeposits.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hitorydatadeposits.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.hitorydatabonus == null ? null : ctx.hitorydatabonus.length) > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.hitorydatabonus == null ? null : ctx.hitorydatabonus.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hitorydatabonus.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.hitorydata == null ? null : ctx.hitorydata.length) > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.hitorydata == null ? null : ctx.hitorydata.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.hitorydata == null ? null : ctx.hitorydata.length) > 0);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      DecimalPipe,
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      RouterLink,
      MatFormFieldModule,
      MatFormField,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatDatepickerModule,
      MatDatepicker,
      MatDatepickerInput,
      MatDatepickerToggle,
      MatDatepickerToggleIcon,
      MatNativeDateModule,
      NgxPaginationModule,
      PaginatePipe,
      PaginationControlsComponent
    ], styles: ['\n\n.transactions-container[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  margin: 30px auto;\n  font-family: "Segoe UI", sans-serif;\n}\n.transaction-types[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 15px;\n}\n.btn-show[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 30px;\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  width: 100%;\n  max-width: 230px;\n}\n.btn-show[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #ff7733,\n      #ff4400);\n}\n.transaction-types[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.date-filters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.date-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.show-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom right,\n      #ff4b2b,\n      #ff416c);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 8px 20px;\n  cursor: pointer;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.show-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.type-option[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.type-option.active[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  box-shadow: 0 0 8px #ffb400;\n}\n.type-option[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid #ffb400;\n  background-color: transparent;\n  transition: all 0.3s ease;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.filter-item[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .mobile-table[_ngcontent-%COMP%] {\n    min-width: 650px;\n  }\n  .sticky-col[_ngcontent-%COMP%] {\n    position: sticky;\n    left: 0;\n  }\n}\n.date-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #1f1f1f;\n  border-radius: 8px;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  background: #1f1f1f;\n  border-radius: 8px;\n  color: #fff;\n}\n.mat-datepicker-content[_ngcontent-%COMP%] {\n  background-color: #232323 !important;\n  color: #fff !important;\n}\n.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n  .cdk-overlay-pane .mat-datepicker-content {\n  background: #ffffff !important;\n  color: #fff !important;\n  border-radius: 8px;\n}\n  .cdk-overlay-pane .mat-calendar {\n  background: #ffffff !important;\n  color: #fff !important;\n}\n  .mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n  .mdc-line-ripple::before, \n  .mdc-line-ripple::after {\n  border: none !important;\n  display: none !important;\n}\n  .mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input, \n  .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  padding: 8px 12px !important;\n  height: auto !important;\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-show[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .balance-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .balance-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 13px;\n    padding: 10px;\n  }\n  .transactions-container[_ngcontent-%COMP%] {\n    background-color: #1e1e1e;\n    color: white;\n    padding: 0px;\n    border-radius: 8px;\n    margin: 30px auto;\n    font-family: "Segoe UI", sans-serif;\n  }\n  .transaction-types[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 20px;\n    margin-bottom: 15px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=transaction.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Transaction, [{
    type: Component,
    args: [{ selector: "app-transaction", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterLink,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      NgxPaginationModule,
      RemoveDateFormatPipe
    ], template: `<div class="redirectline">\r
  <span routerLink="/home">Home</span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15" /> <span>My Account</span> <img src="assets/home_icons/arrow_right.png"\r
    alt="rightArrow"\r
    width="15"\r
  />\r
  <span class="m_t_15  ">Transactions</span>\r
</div>\r
<h2 class="m_t_15 live_casino_title">Transactions</h2>\r
<div class="transactions-container">\r
\r
  <!-- \u2705 Transaction type options -->\r
  <div class="transaction-types">\r
    <label\r
      *ngFor="let type of types"\r
      class="type-option"\r
      [class.active]="typeForm.value.typesValue.includes(type.senttype)"\r
    >\r
      <input\r
        type="checkbox"\r
        hidden\r
        [checked]="typeForm.value.typesValue.includes(type.senttype)"\r
        (change)="onChangetype(type.senttype, $event.target.checked)"\r
      />\r
      <span class="dot"></span> {{ type.language }}\r
    </label>\r
  </div>\r
\r
  <!-- \u2705 Date filter -->\r
  <section class="section-card filter-section" [formGroup]="form">\r
    <div class="filter-row">\r
      <!-- Start Date -->\r
      <div class="filter-item">\r
        <label><span class="gradient-star">*</span> Start Date:</label>\r
        <mat-form-field appearance="fill" class="date-field">\r
          <input\r
            matInput [ngModel]="startDate | date:'yyyy-MM-dd'"\r
            [matDatepicker]="picker1"\r
            formControlName="startDate"\r
            readonly\r
          />\r
          <mat-datepicker-toggle matSuffix [for]="picker1">\r
            <img\r
              matDatepickerToggleIcon\r
              src="assets/sidemenu_icons/calendar.svg"\r
              alt="calendar"\r
            />\r
          </mat-datepicker-toggle>\r
          <mat-datepicker #picker1></mat-datepicker>\r
        </mat-form-field>\r
      </div>\r
\r
      <!-- End Date -->\r
      <div class="filter-item">\r
        <label><span class="gradient-star">*</span> End Date:</label>\r
        <mat-form-field appearance="fill" class="date-field">\r
          <input\r
            matInput [ngModel]="endDate | date:'yyyy-MM-dd'"\r
            [matDatepicker]="picker2"\r
            formControlName="endDate"\r
            readonly\r
          />\r
          <mat-datepicker-toggle matSuffix [for]="picker2">\r
            <img\r
              matDatepickerToggleIcon\r
              src="assets/sidemenu_icons/calendar.svg"\r
              alt="calendar"\r
            />\r
          </mat-datepicker-toggle>\r
          <mat-datepicker #picker2></mat-datepicker>\r
        </mat-form-field>\r
      </div>\r
    </div>\r
<div class="button-row">\r
  <button class="btn active" (click)="onFormSubmit()">Show <i class="{{ isLoading ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i></button>\r
\r
</div>\r
<p style="color: #f00;" *ngIf="errormassage">{{errormassage}}</p>\r
\r
  </section>\r
\r
  <!-- \u2705 Transactions Table -->\r
  <h4 *ngIf="hitorydatacashouts?.length >0"> Cashouts</h4>\r
  <div class="table-responsive m_t_15">\r
  <table class="transaction-table" *ngIf="hitorydatacashouts?.length">\r
    <thead>\r
      <tr>\r
        <th><span class="gradient-star">*</span> Date</th>\r
        <th ><span class="gradient-star">*</span> Amount</th>\r
        <th ><span class="gradient-star">*</span> Paid Amount</th>\r
        <th ><span class="gradient-star">*</span> Cancell Amount</th>\r
        <th><span class="gradient-star">*</span> Status</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr *ngFor="let item of hitorydatacashouts | paginate: {itemsPerPage:selectnumcash, currentPage:p} ">\r
        <td>{{ cleanDate(item.createdOn) | date:'medium': 'local' }}</td>\r
        <td class="text-right">{{item.wallet == 'USD'?'$':'\u20B9'}} {{ item.amount  | number:'1.2-2'  }}</td>\r
        <td class="text-right">{{item.wallet == 'USD'?'$':'\u20B9'}} {{ item.paidAmount  | number:'1.2-2'  }}</td>\r
        <td class="text-right">{{item.wallet == 'USD'?'$':'\u20B9'}} {{ item.cancelledAmount  | number:'1.2-2'  }}</td>\r
        <td >{{ item.status }}</td>\r
      </tr>\r
    </tbody>\r
  </table>\r
</div>\r
<div *ngIf="hitorydatacashouts.length>0" class="m_t_15">\r
  <pagination-controls class="pagination justify-content-end" (click)="moveToTop()" (pageChange)="p=$event"\r
   previousLabel="Prev" nextLabel="Next" class="pt-2 page-item">\r
  </pagination-controls>\r
\r
  </div>\r
<h4 *ngIf="hitorydatadeposits?.length >0"> Deposits</h4>\r
<div class="table-responsive m_t_15 w-100">\r
  <table class="transaction-table  " *ngIf="hitorydatadeposits?.length">\r
    <thead>\r
      <tr>\r
        <th class="sticky-col"><span class="gradient-star">*</span> Date</th>\r
        <th><span class="gradient-star">*</span>Cash Amount</th>\r
        <th><span class="gradient-star">*</span>Bonus Amount</th>\r
        <!-- <th><span class="gradient-star">*</span> Payment System</th>  -->\r
        <th><span class="gradient-star">*</span> Status</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr *ngFor="let item of hitorydatadeposits | paginate: {itemsPerPage:selectnumDeposit, currentPage:q} ">\r
        <td class="sticky-col">{{ cleanDate(item.startDate) |   date:'medium': 'local' }}</td>\r
        <td  class="text-right">{{item.currency == 'USD'?'$':'\u20B9'}} {{ item.cashAmount  | number:'1.2-2'  }}</td>\r
        <td  class="text-right">{{item.currency =='USD'?'$':'\u20B9'}} {{ item.bonus  | number:'1.2-2'  }}</td>\r
        <!-- <td>{{ item.paymentSystem }}</td>  -->\r
        <td>{{ item.status }}</td>\r
      </tr>\r
    </tbody>\r
  </table>\r
</div>\r
<div *ngIf="hitorydatadeposits.length>0" class="m_t_15">\r
  <pagination-controls class="pagination justify-content-end" (click)="moveToTop()" (pageChange)="q=$event"\r
   previousLabel="Prev" nextLabel="Next" class="pt-2 page-item">\r
  </pagination-controls>\r
\r
  </div>\r
<h4 *ngIf="hitorydatabonus?.length >0"> Bonus Adjustment</h4>\r
<div class="table-responsive m_t_15 w-100">\r
  <table class="transaction-table" *ngIf="hitorydatabonus?.length">\r
    <thead>\r
      <tr>\r
        <th><span class="gradient-star sticky-col">*</span>Date</th>\r
        <th ><span class="gradient-star">*</span>Amount</th>\r
        <!-- <th><span class="gradient-star">*</span>Currency</th>  -->\r
        <th><span class="gradient-star">*</span>Bonus Type</th>\r
        <th><span class="gradient-star">*</span> Released Amount</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr *ngFor="let item of hitorydatabonus | paginate: {itemsPerPage:selectnumBouns, currentPage:s} ">\r
        <td class="sticky-col">{{ cleanDate(item.startDate)  | date:'medium': 'local' }}</td>\r
        <td  class="text-right">{{item.currency == 'USD'?'$':'\u20B9'}} {{ item.amount  | number:'1.2-2'  }}</td>\r
        <!-- <td   >{{ item.currency }}</td> -->\r
        <td>{{ item.bonusType }}</td> \r
        <td>{{ item.releasedAmount }}</td>\r
      </tr>\r
    </tbody>\r
  </table>\r
</div>\r
<div *ngIf="hitorydatabonus.length>0" class="m_t_15">\r
  <pagination-controls class="pagination justify-content-end" (click)="moveToTop()" (pageChange)="s=$event"\r
   previousLabel="Prev" nextLabel="Next" class="pt-2 page-item">\r
  </pagination-controls>\r
\r
  </div>\r
<h4 *ngIf="hitorydata?.length >0"> Cash Adjustment</h4>\r
  <div class="table-responsive m_t_15">\r
  <table class="transaction-table" *ngIf="hitorydata?.length">\r
    <thead>\r
      <tr>\r
        <th><span class="gradient-star sticky-col">*</span> Date</th>\r
        <th class="text-right"><span class="gradient-star">*</span>Cash Amount</th>\r
        <th><span class="gradient-star">*</span>Operation Type</th> \r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr *ngFor="let item of hitorydata  | paginate: {itemsPerPage:selectnumaje, currentPage:r}">\r
        <td class="sticky-col">{{ cleanDate(item.operationDate)  | date:'medium': 'local'}}</td>\r
        <td class="text-right"> {{item.wallet?.name == 'USD'?'$':'\u20B9'}} {{ item.cashAmount?.value  | number:'1.2-2'  }}</td>\r
        <td>{{ item.operationType?.name }}</td> \r
      </tr>\r
    </tbody>\r
  </table>\r
\r
</div>\r
<div *ngIf="hitorydata?.length>0" class="m_t_15">\r
  <pagination-controls class="pagination justify-content-end" (click)="moveToTop()" (pageChange)="r=$event"\r
   previousLabel="Prev" nextLabel="Next" class="pt-2 page-item">\r
  </pagination-controls>\r
\r
  </div>\r
</div>\r
`, styles: ['/* src/app/pages/dashboard/transaction/transaction.css */\n.transactions-container {\n  background-color: #1e1e1e;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  margin: 30px auto;\n  font-family: "Segoe UI", sans-serif;\n}\n.transaction-types {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 15px;\n}\n.btn-show {\n  background: var(--gradient-primary);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 30px;\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  width: 100%;\n  max-width: 230px;\n}\n.btn-show:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #ff7733,\n      #ff4400);\n}\n.transaction-types label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.date-filters {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.date-group {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.show-btn {\n  background:\n    linear-gradient(\n      to bottom right,\n      #ff4b2b,\n      #ff416c);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 8px 20px;\n  cursor: pointer;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.show-btn:hover {\n  opacity: 0.9;\n}\n.type-option input[type=checkbox] {\n  display: none;\n}\n.type-option.active .dot {\n  background: var(--gradient-primary);\n  box-shadow: 0 0 8px #ffb400;\n}\n.type-option .dot {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid #ffb400;\n  background-color: transparent;\n  transition: all 0.3s ease;\n}\n.filter-row {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.filter-item {\n  flex: 1;\n  min-width: 250px;\n}\n.filter-item label {\n  display: block;\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n  }\n  .mobile-table {\n    min-width: 650px;\n  }\n  .sticky-col {\n    position: sticky;\n    left: 0;\n  }\n}\n.date-field {\n  width: 100%;\n  background: #1f1f1f;\n  border-radius: 8px;\n}\n.mat-mdc-form-field {\n  background: #1f1f1f;\n  border-radius: 8px;\n  color: #fff;\n}\n.mat-datepicker-content {\n  background-color: #232323 !important;\n  color: #fff !important;\n}\n.mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n::ng-deep .cdk-overlay-pane .mat-datepicker-content {\n  background: #ffffff !important;\n  color: #fff !important;\n  border-radius: 8px;\n}\n::ng-deep .cdk-overlay-pane .mat-calendar {\n  background: #ffffff !important;\n  color: #fff !important;\n}\n::ng-deep .mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n::ng-deep .mdc-line-ripple::before,\n::ng-deep .mdc-line-ripple::after {\n  border: none !important;\n  display: none !important;\n}\n::ng-deep .mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,\n::ng-deep .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  padding: 8px 12px !important;\n  height: auto !important;\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n  }\n  .btn-show {\n    width: 100%;\n  }\n  .balance-table th,\n  .balance-table td {\n    font-size: 13px;\n    padding: 10px;\n  }\n  .transactions-container {\n    background-color: #1e1e1e;\n    color: white;\n    padding: 0px;\n    border-radius: 8px;\n    margin: 30px auto;\n    font-family: "Segoe UI", sans-serif;\n  }\n  .transaction-types {\n    display: grid;\n    gap: 20px;\n    margin-bottom: 15px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=transaction.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: Store }, { type: CashierService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Transaction, { className: "Transaction", filePath: "src/app/pages/dashboard/transaction/transaction.ts", lineNumber: 31 });
})();
export {
  Transaction
};
//# sourceMappingURL=chunk-7X5MVUK7.js.map
