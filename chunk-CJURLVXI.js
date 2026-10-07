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
import {
  CashierGetBalanceStart,
  ResetState
} from "./chunk-PDHHGWHH.js";
import "./chunk-HXFVUPJ2.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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
  ɵɵtextInterpolate2
} from "./chunk-J735AYEO.js";
import {
  __toESM
} from "./chunk-EAJ6W5YO.js";

// src/app/pages/dashboard/ptop/ptop.ts
var import_moment = __toESM(require_moment());
var _c0 = (a0, a1) => ({ itemsPerPage: a0, currentPage: a1 });
function Ptop_p_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errormassage);
  }
}
function Ptop_table_56_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 6, ctx_r1.cleanDate(data_r3.operationDate), "medium", "local"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (data_r3 == null ? null : data_r3.initialBalance == null ? null : data_r3.initialBalance.wallet == null ? null : data_r3.initialBalance.wallet.name) == "INR" ? "\u20B9" : "$", " ", \u0275\u0275pipeBind1(6, 10, data_r3.cashAmount.value), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.sender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.receiver);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.operationType.name);
  }
}
function Ptop_table_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 28)(1, "thead")(2, "tr")(3, "th", 29)(4, "span", 11);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 30)(8, "span", 11);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th")(12, "span", 11);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th")(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th")(20, "span", 11);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Operation Type");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, Ptop_table_56_tr_24_Template, 13, 12, "tr", 31);
    \u0275\u0275pipe(25, "paginate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(25, 1, ctx_r1.hitorydata, \u0275\u0275pureFunction2(4, _c0, ctx_r1.selectnum, ctx_r1.p)));
  }
}
function Ptop_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "pagination-controls", 32);
    \u0275\u0275listener("click", function Ptop_div_57_Template_pagination_controls_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveToTop());
    })("pageChange", function Ptop_div_57_Template_pagination_controls_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.p = $event);
    });
    \u0275\u0275elementEnd()();
  }
}
var Ptop = class _Ptop {
  constructor(fb, cashierservice, store, messageService) {
    this.fb = fb;
    this.cashierservice = cashierservice;
    this.store = store;
    this.messageService = messageService;
    this.errormessage = "";
    this.selectedType = "Transfer to Player,Transfer from Player";
    this.p = 1;
    this.historyloader = false;
    this.selectnum = 10;
    this.description = false;
    this.playerLoggedIn = false;
    this.itemsperpagecount = [
      { num: 10 },
      { num: 20 },
      { num: 30 },
      { num: 40 },
      { num: 50 }
    ];
    this.isLoading = false;
  }
  ngOnInit() {
    this.loginSub = this.store.select("loginState").subscribe((loginState) => {
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.store.dispatch(new CashierGetBalanceStart());
        }
      }
    });
    this.endDate = /* @__PURE__ */ new Date();
    let oneweek = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() - 1);
    this.startDate = oneweek;
    this.todaydate = (0, import_moment.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD");
    this.form = new FormGroup({
      "currency": new FormControl("INR", Validators.required),
      "startDate": new FormControl(this.startDate, Validators.required),
      "endDate": new FormControl(this.endDate, Validators.required),
      "limit": new FormControl(100, Validators.required),
      "index": new FormControl(0, Validators.required)
    });
    this.form.value.startDate = this.startDate;
    this.form.value.endDate = this.endDate;
    this.form.valueChanges.subscribe((x) => {
      let yearsDiff = 0;
      var ToDate = /* @__PURE__ */ new Date();
      var pastYear = ToDate.getFullYear() - yearsDiff;
      ToDate.setFullYear(pastYear);
      if (new Date(x.startDate).getTime() > ToDate.getTime() || new Date(x.startDate).getTime() > new Date(x.endDate).getTime() || new Date(x.endDate).getTime() > ToDate.getTime()) {
        this.steddate = true;
      } else {
        this.steddate = false;
      }
    });
    this.storeSub = this.store.select("cashierState").subscribe((cashierState) => {
      if (cashierState.TransactionResponse) {
        console.log(cashierState.TransactionResponse);
        this.isLoading = false;
        if (cashierState.TransactionResponse.success) {
          if (cashierState.TransactionResponse.values) {
            if (!cashierState.TransactionResponse.values.length) {
              this.messageService.error("Failed", "There is no History  for the selected Period");
            } else {
              this.transaction = cashierState.TransactionResponse.values;
              this.messageService.error("Failed", this.transaction);
            }
          }
        } else {
          var messageerror = cashierState.TransactionResponse.description;
          this.messageService.error("Failed", messageerror);
        }
      }
      if (cashierState.TranscationResponseFail) {
        this.messageService.error("Failed", cashierState.TranscationResponseFail.message);
      }
    });
  }
  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
  get today() {
    return /* @__PURE__ */ new Date();
  }
  onFormSubmit() {
    this.isLoading = true;
    this.hitorydata = [];
    this.store.dispatch(new ResetState());
    this.historyloader = true;
    const body = {
      currency: this.form.value.currency,
      startDate: (0, import_moment.default)(this.form.value.startDate).format("MM-DD-YYYY"),
      endDate: (0, import_moment.default)(this.form.value.endDate).format("MM-DD-YYYY"),
      limit: this.form.value.limit,
      index: this.form.value.index,
      type: this.selectedType
    };
    this.transaction = null;
    this.description = false;
    this.p = 1;
    this.cashierservice.onCashierTransactionHistory(body).subscribe((data) => {
      this.isLoading = false;
      console.log(data);
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
    this.\u0275fac = function Ptop_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Ptop)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CashierService), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Ptop, selectors: [["app-ptop"]], decls: 58, vars: 11, consts: [["picker1", ""], ["picker2", ""], [1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "rightArrow", "width", "15"], [1, "m_t_15"], [1, "m_t_15", "live_casino_title"], [1, "transactions-container"], [1, "section-card", "filter-section", 3, "formGroup"], [1, "filter-row"], [1, "filter-item"], [1, "gradient-star"], ["appearance", "fill", 1, "date-field"], ["matInput", "", "formControlName", "startDate", "readonly", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", "", "src", "assets/sidemenu_icons/calendar.svg", "alt", "calendar"], ["matInput", "", "formControlName", "endDate", "readonly", "", 3, "matDatepicker"], [1, "select-wrapper"], ["formControlName", "currency", "id", "currency"], ["value", "INR"], ["value", "USD"], [1, "button-row"], [1, "btn", "active", 3, "click"], ["style", "color: #f00;", 4, "ngIf"], [1, "table-responsive", "m_t_15"], ["class", "transaction-table", 4, "ngIf"], ["class", "m_t_15", 4, "ngIf"], [2, "color", "#f00"], [1, "transaction-table"], [1, "sticky-col"], [2, "text-align", "right"], [4, "ngFor", "ngForOf"], ["previousLabel", "Prev", "nextLabel", "Next", 1, "pt-2", "page-item", 3, "click", "pageChange"]], template: function Ptop_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div")(1, "div", 2)(2, "span", 3);
        \u0275\u0275text(3, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "My Account");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "img", 4);
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "PtoP Transfer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "h2", 6);
        \u0275\u0275text(11, "PtoP Transfer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "label")(17, "span", 11);
        \u0275\u0275text(18, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " Start Date:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 12);
        \u0275\u0275element(21, "input", 13);
        \u0275\u0275elementStart(22, "mat-datepicker-toggle", 14);
        \u0275\u0275element(23, "img", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "mat-datepicker", null, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 10)(27, "label")(28, "span", 11);
        \u0275\u0275text(29, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " End Date:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-form-field", 12);
        \u0275\u0275element(32, "input", 16);
        \u0275\u0275elementStart(33, "mat-datepicker-toggle", 14);
        \u0275\u0275element(34, "img", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "mat-datepicker", null, 1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 9)(38, "div", 10)(39, "label")(40, "span", 11);
        \u0275\u0275text(41, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " Currency:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 17)(44, "select", 18)(45, "option", 19);
        \u0275\u0275text(46, "INR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "option", 20);
        \u0275\u0275text(48, "USD");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(49, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 21)(51, "button", 22);
        \u0275\u0275listener("click", function Ptop_Template_button_click_51_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFormSubmit());
        });
        \u0275\u0275text(52, "Show ");
        \u0275\u0275element(53, "i");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(54, Ptop_p_54_Template, 2, 1, "p", 23);
        \u0275\u0275elementStart(55, "div", 24);
        \u0275\u0275template(56, Ptop_table_56_Template, 26, 7, "table", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(57, Ptop_div_57_Template, 2, 0, "div", 26);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const picker1_r5 = \u0275\u0275reference(25);
        const picker2_r6 = \u0275\u0275reference(36);
        \u0275\u0275advance(13);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(8);
        \u0275\u0275property("matDatepicker", picker1_r5);
        \u0275\u0275advance();
        \u0275\u0275property("for", picker1_r5);
        \u0275\u0275advance(10);
        \u0275\u0275property("matDatepicker", picker2_r6);
        \u0275\u0275advance();
        \u0275\u0275property("for", picker2_r6);
        \u0275\u0275advance(20);
        \u0275\u0275classMap(ctx.isLoading ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errormassage);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.hitorydata == null ? null : ctx.hitorydata.length) > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.hitorydata == null ? null : ctx.hitorydata.length) > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatSuffix, MatInputModule, MatInput, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatNativeDateModule, NgxPaginationModule, PaginatePipe, PaginationControlsComponent], styles: ['\n\n.transactions-container[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  margin: 30px auto;\n  font-family: "Segoe UI", sans-serif;\n}\n.transaction-types[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 15px;\n}\n.btn-show[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 30px;\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  width: 100%;\n  max-width: 230px;\n}\n.btn-show[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #ff7733,\n      #ff4400);\n}\n.transaction-types[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.date-filters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.date-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.show-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom right,\n      #ff4b2b,\n      #ff416c);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 8px 20px;\n  cursor: pointer;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.show-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.transaction-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #2a2a2a;\n  border-radius: 8px;\n}\n.transaction-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.transaction-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #444;\n  text-align: left;\n  text-wrap: nowrap;\n}\n.select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #000;\n  color: #fff;\n  border-radius: 5px;\n  padding: 10px;\n  padding-right: 35px;\n  -webkit-appearance: none;\n  appearance: none;\n  border: 1px solid #333;\n}\n.select-wrapper[_ngcontent-%COMP%]::after {\n  content: "\\25bc";\n  font-size: 12px;\n  color: #fff;\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.type-option.active[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  box-shadow: 0 0 8px #ffb400;\n}\n.type-option[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid #ffb400;\n  background-color: transparent;\n  transition: all 0.3s ease;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.filter-item[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.1rem;\n}\n.filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.date-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #1f1f1f;\n  border-radius: 8px;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  background: #1f1f1f;\n  border-radius: 8px;\n  color: #fff;\n}\n.mat-datepicker-content[_ngcontent-%COMP%] {\n  background-color: #232323 !important;\n  color: #fff !important;\n}\n.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n  .cdk-overlay-pane .mat-datepicker-content {\n  background: var(--gradient-primary) !important;\n  color: #fff !important;\n  border-radius: 8px;\n}\n  .cdk-overlay-pane .mat-calendar {\n  background: #ffffff !important;\n  color: #fff !important;\n}\n  .mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n  .mdc-line-ripple::before, \n  .mdc-line-ripple::after {\n  border: none !important;\n  display: none !important;\n}\n  .mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input, \n  .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  padding: 8px 12px !important;\n  height: auto !important;\n}\nth[_ngcontent-%COMP%] {\n  background: #0f0f0f;\n}\ntr[_ngcontent-%COMP%] {\n  background: var(--secondary-bg);\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-show[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .balance-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .balance-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 13px;\n    padding: 10px;\n  }\n  .transactions-container[_ngcontent-%COMP%] {\n    background-color: #1e1e1e;\n    color: white;\n    padding: 0;\n    border-radius: 8px;\n    margin: 30px auto;\n    font-family: "Segoe UI", sans-serif;\n  }\n}\n/*# sourceMappingURL=ptop.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ptop, [{
    type: Component,
    args: [{ selector: "app-ptop", imports: [
      CommonModule,
      RouterLink,
      FormsModule,
      ReactiveFormsModule,
      ReactiveFormsModule,
      RemoveDateFormatPipe,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      NgxPaginationModule
    ], template: `<div>\r
  <div class="redirectline">\r
    <span routerLink="/home">Home</span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow"\r
      width="15" /> <span>My Account</span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow"\r
      width="15" />\r
    <span class="m_t_15  ">PtoP Transfer</span>\r
  </div>\r
  <h2 class="m_t_15 live_casino_title">PtoP Transfer</h2>\r
  <div class="transactions-container">\r
\r
    <div class="section-card filter-section" [formGroup]="form">\r
      <div class="filter-row">\r
        <!-- Start Date -->\r
        <div class="filter-item">\r
          <label><span class="gradient-star">*</span> Start Date:</label>\r
          <mat-form-field appearance="fill" class="date-field">\r
            <input matInput [matDatepicker]="picker1" formControlName="startDate" readonly />\r
            <mat-datepicker-toggle matSuffix [for]="picker1">\r
              <img matDatepickerToggleIcon src="assets/sidemenu_icons/calendar.svg" alt="calendar" />\r
            </mat-datepicker-toggle>\r
            <mat-datepicker #picker1></mat-datepicker>\r
          </mat-form-field>\r
        </div>\r
\r
        <!-- End Date -->\r
        <div class="filter-item">\r
          <label><span class="gradient-star">*</span> End Date:</label>\r
          <mat-form-field appearance="fill" class="date-field">\r
            <input matInput [matDatepicker]="picker2" formControlName="endDate" readonly />\r
            <mat-datepicker-toggle matSuffix [for]="picker2">\r
              <img matDatepickerToggleIcon src="assets/sidemenu_icons/calendar.svg" alt="calendar" />\r
            </mat-datepicker-toggle>\r
            <mat-datepicker #picker2></mat-datepicker>\r
          </mat-form-field>\r
        </div>\r
      </div>\r
      <div class="filter-row">\r
        <div class="filter-item">\r
          <label><span class="gradient-star">*</span> Currency:</label>\r
      \r
          <div class="select-wrapper">\r
            <select formControlName="currency" id="currency">\r
              <option value="INR">INR</option>\r
              <option value="USD">USD</option>\r
            </select>\r
          </div>\r
      \r
        </div>\r
      \r
        <div class="filter-item"></div>\r
      </div>\r
      \r
      <div class="button-row">\r
\r
        <button class="btn active" (click)="onFormSubmit()">Show <i\r
            class="{{ isLoading ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i></button>\r
      </div>\r
      <p style="color: #f00;" *ngIf="errormassage">{{errormassage}}</p>\r
\r
\r
      <div class="table-responsive m_t_15">\r
\r
        <table class="transaction-table" *ngIf="hitorydata?.length > 0">\r
          <thead>\r
            <tr>\r
              <th class="sticky-col"><span class="gradient-star ">*</span> Date </th>\r
              <th style="text-align: right;"><span class="gradient-star">*</span> Amount</th>\r
              <th><span class="gradient-star">*</span> Sender</th>\r
              <th><span class="gradient-star">*</span> Receiver</th>\r
              <th><span class="gradient-star">*</span> Operation Type</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let data of hitorydata | paginate: {itemsPerPage:selectnum, currentPage:p}">\r
              <td class="sticky-col">{{ cleanDate(data.operationDate)  | date:'medium': 'local'}}</td>\r
              <td style="text-align: right;">{{data?.initialBalance?.wallet?.name == 'INR'?'\u20B9':'$'}} {{data.cashAmount.value | number}}</td>\r
              <td>{{data.sender}}</td>\r
              <td>{{data.receiver}}</td>\r
              <!-- <td>{{data.initiator.name}}</td> -->\r
              <td>{{data.operationType.name}}</td>\r
              <!-- <td>{{data.description}}</td> -->\r
            </tr>\r
          </tbody>\r
        </table>\r
\r
      </div>\r
      <div *ngIf="hitorydata?.length>0" class="m_t_15">\r
        <pagination-controls class="pagination justify-content-end" (click)="moveToTop()" (pageChange)="p=$event"\r
         previousLabel="Prev" nextLabel="Next" class="pt-2 page-item ">\r
        </pagination-controls>\r
\r
      </div>\r
    </div>\r
  </div>`, styles: ['/* src/app/pages/dashboard/ptop/ptop.css */\n.transactions-container {\n  background-color: #1e1e1e;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  margin: 30px auto;\n  font-family: "Segoe UI", sans-serif;\n}\n.transaction-types {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 15px;\n}\n.btn-show {\n  background: var(--gradient-primary);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 30px;\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  width: 100%;\n  max-width: 230px;\n}\n.btn-show:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #ff7733,\n      #ff4400);\n}\n.transaction-types label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.date-filters {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.date-group {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.show-btn {\n  background:\n    linear-gradient(\n      to bottom right,\n      #ff4b2b,\n      #ff416c);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 8px 20px;\n  cursor: pointer;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.show-btn:hover {\n  opacity: 0.9;\n}\n.transaction-table {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #2a2a2a;\n  border-radius: 8px;\n}\n.transaction-table th,\n.transaction-table td {\n  padding: 10px;\n  border: 1px solid #444;\n  text-align: left;\n  text-wrap: nowrap;\n}\n.select-wrapper {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.select-wrapper select {\n  width: 100%;\n  background: #000;\n  color: #fff;\n  border-radius: 5px;\n  padding: 10px;\n  padding-right: 35px;\n  -webkit-appearance: none;\n  appearance: none;\n  border: 1px solid #333;\n}\n.select-wrapper::after {\n  content: "\\25bc";\n  font-size: 12px;\n  color: #fff;\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\ninput {\n  width: 100%;\n}\n.type-option.active .dot {\n  background: var(--gradient-primary);\n  box-shadow: 0 0 8px #ffb400;\n}\n.type-option .dot {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid #ffb400;\n  background-color: transparent;\n  transition: all 0.3s ease;\n}\n.filter-row {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.filter-item {\n  flex: 1;\n  min-width: 250px;\n}\n.filter-item label {\n  display: block;\n  font-size: 1.1rem;\n}\n.filter-item label span {\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n  }\n}\n.date-field {\n  width: 100%;\n  background: #1f1f1f;\n  border-radius: 8px;\n}\n.mat-mdc-form-field {\n  background: #1f1f1f;\n  border-radius: 8px;\n  color: #fff;\n}\n.mat-datepicker-content {\n  background-color: #232323 !important;\n  color: #fff !important;\n}\n.mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n::ng-deep .cdk-overlay-pane .mat-datepicker-content {\n  background: var(--gradient-primary) !important;\n  color: #fff !important;\n  border-radius: 8px;\n}\n::ng-deep .cdk-overlay-pane .mat-calendar {\n  background: #ffffff !important;\n  color: #fff !important;\n}\n::ng-deep .mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n::ng-deep .mdc-line-ripple::before,\n::ng-deep .mdc-line-ripple::after {\n  border: none !important;\n  display: none !important;\n}\n::ng-deep .mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,\n::ng-deep .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  padding: 8px 12px !important;\n  height: auto !important;\n}\nth {\n  background: #0f0f0f;\n}\ntr {\n  background: var(--secondary-bg);\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n  }\n  .btn-show {\n    width: 100%;\n  }\n  .balance-table th,\n  .balance-table td {\n    font-size: 13px;\n    padding: 10px;\n  }\n  .transactions-container {\n    background-color: #1e1e1e;\n    color: white;\n    padding: 0;\n    border-radius: 8px;\n    margin: 30px auto;\n    font-family: "Segoe UI", sans-serif;\n  }\n}\n/*# sourceMappingURL=ptop.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: CashierService }, { type: Store }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Ptop, { className: "Ptop", filePath: "src/app/pages/dashboard/ptop/ptop.ts", lineNumber: 32 });
})();
export {
  Ptop
};
//# sourceMappingURL=chunk-CJURLVXI.js.map
