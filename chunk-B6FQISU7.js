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
  MatNativeDateModule
} from "./chunk-4UX3ITXN.js";
import {
  MessageService
} from "./chunk-YCU5ZQFP.js";
import {
  PlayerService
} from "./chunk-HXFVUPJ2.js";
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
import "./chunk-V7ZNEVP2.js";
import {
  RouterLink
} from "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-J735AYEO.js";
import {
  __toESM
} from "./chunk-EAJ6W5YO.js";

// src/app/pages/dashboard/casinohistory/casinohistory.ts
var import_moment = __toESM(require_moment());
var _c0 = (a0, a1) => ({ itemsPerPage: a0, currentPage: a1 });
function Casinohistory_p_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errormassage);
  }
}
function Casinohistory_table_44_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 26);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 26);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 6, ctx_r1.cleanDate(item_r3.from), "medium", "local"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(6, 10, ctx_r1.cleanDate(item_r3 == null ? null : item_r3.to), "medium", "local"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.bet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.buyIn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.payouts);
  }
}
function Casinohistory_table_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 24)(1, "thead")(2, "tr")(3, "th", 25)(4, "span", 11);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Form Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th")(8, "span", 11);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " To Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th")(12, "span", 11);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 26)(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Total Bet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 26)(20, "span", 11);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " BuyIn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 26)(24, "span", 11);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Pay Out");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275template(28, Casinohistory_table_44_tr_28_Template, 15, 14, "tr", 27);
    \u0275\u0275pipe(29, "paginate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(29, 1, ctx_r1.casinohistory, \u0275\u0275pureFunction2(4, _c0, ctx_r1.selectnum, ctx_r1.p)));
  }
}
function Casinohistory_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "pagination-controls", 28);
    \u0275\u0275listener("click", function Casinohistory_div_45_Template_pagination_controls_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveToTop());
    })("pageChange", function Casinohistory_div_45_Template_pagination_controls_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.p = $event);
    });
    \u0275\u0275elementEnd()();
  }
}
var Casinohistory = class _Casinohistory {
  constructor(fb, messageService, playerservice) {
    this.fb = fb;
    this.messageService = messageService;
    this.playerservice = playerservice;
    this.balanceData = [];
    this.todaydate = [];
    this.isLoading = false;
    this.p = 1;
    this.selectnum = 10;
  }
  ngOnInit() {
    this.form = this.fb.group({
      "currency": new FormControl("", Validators.required),
      "startDate": new FormControl(this.startDate, Validators.required),
      "endDate": new FormControl(this.endDate, Validators.required),
      "limit": new FormControl(100, Validators.required),
      "index": new FormControl(0, Validators.required)
    });
    this.endDate = /* @__PURE__ */ new Date();
    let oneweek = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() - 7);
    this.startDate = oneweek;
    this.todaydate = (0, import_moment.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD");
  }
  onShow() {
    this.casinohistory = [];
    this.isLoading = true;
    let body = {
      "startDate": (0, import_moment.default)(this.form.value.startDate).format("DD-MM-YYYY"),
      "endDate": (0, import_moment.default)(this.form.value.endDate).format("DD-MM-YYYY"),
      // "startDate": moment(this.form.value.startDate).format('MM-DD-YYYY'),
      // "endDate": moment(this.form.value.endDate).format('MM-DD-YYYY'),
      "limit": 100,
      "index": 0
    };
    this.playerservice.onPlayerGetRemoteGameHistory(body).subscribe((data) => {
      if (data) {
        this.isLoading = false;
        if (data && data.values && data.values.length > 0) {
          this.casinohistory = data.values;
        } else {
          this.errormassage = "No record found";
          setTimeout(() => {
            this.errormassage = "";
          }, 3500);
        }
        console.log(data);
      }
    });
  }
  onChange(event) {
    const value = Number(event.target.value);
    this.p = 1;
    this.selectnum = value;
  }
  moveToTop() {
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  cleanDate(dateStr) {
    if (!dateStr || dateStr === "null") {
      return null;
    }
    return new Date(dateStr?.replace("IST", "").trim());
  }
  static {
    this.\u0275fac = function Casinohistory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Casinohistory)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(PlayerService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Casinohistory, selectors: [["app-casinohistory"]], decls: 46, vars: 19, consts: [["picker1", ""], ["picker2", ""], [1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "rightArrow", "width", "15"], [1, "m_t_15"], [1, "m_t_15", "live_casino_title"], [1, "transactions-container", 3, "formGroup"], [1, "section-card", "filter-section"], [1, "filter-row"], [1, "filter-item"], [1, "gradient-star"], ["appearance", "fill", 1, "date-field"], ["matInput", "", "formControlName", "startDate", "readonly", "", 3, "ngModel", "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", "", "src", "assets/sidemenu_icons/calendar.svg", "alt", "calendar"], ["matInput", "", "formControlName", "endDate", "readonly", "", 3, "ngModel", "matDatepicker"], [1, "button-row"], [1, "btn", "active", 3, "click"], ["style", "color: #f00;", 4, "ngIf"], [1, "table-responsive", "m_t_15"], ["class", "transaction-table", 4, "ngIf"], ["class", "m_t_15", 4, "ngIf"], [2, "color", "#f00"], [1, "transaction-table"], [1, "sticky-col"], [1, "text-right"], [4, "ngFor", "ngForOf"], ["previousLabel", "Prev", "nextLabel", "Next", 1, "pt-2", "page-item", 3, "click", "pageChange"]], template: function Casinohistory_Template(rf, ctx) {
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
        \u0275\u0275text(8, "Casino History");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h2", 6);
        \u0275\u0275text(10, "Casino History");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "section", 8)(13, "div", 9)(14, "div", 10)(15, "label")(16, "span", 11);
        \u0275\u0275text(17, "*");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Start Date:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-form-field", 12);
        \u0275\u0275element(20, "input", 13);
        \u0275\u0275pipe(21, "date");
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
        \u0275\u0275pipe(33, "date");
        \u0275\u0275elementStart(34, "mat-datepicker-toggle", 14);
        \u0275\u0275element(35, "img", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "mat-datepicker", null, 1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "div", 17)(39, "button", 18);
        \u0275\u0275listener("click", function Casinohistory_Template_button_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onShow());
        });
        \u0275\u0275text(40, "Show ");
        \u0275\u0275element(41, "i");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(42, Casinohistory_p_42_Template, 2, 1, "p", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 20);
        \u0275\u0275template(44, Casinohistory_table_44_Template, 30, 7, "table", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, Casinohistory_div_45_Template, 2, 0, "div", 22);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const picker1_r5 = \u0275\u0275reference(25);
        const picker2_r6 = \u0275\u0275reference(37);
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngModel", \u0275\u0275pipeBind2(21, 13, ctx.startDate, "yyyy-MM-dd"))("matDatepicker", picker1_r5);
        \u0275\u0275advance(2);
        \u0275\u0275property("for", picker1_r5);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngModel", \u0275\u0275pipeBind2(33, 16, ctx.endDate, "yyyy-MM-dd"))("matDatepicker", picker2_r6);
        \u0275\u0275advance(2);
        \u0275\u0275property("for", picker2_r6);
        \u0275\u0275advance(7);
        \u0275\u0275classMap(ctx.isLoading ? "fas fa-spinner fa-spin" : "fas fa-check-circle");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errormassage);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.casinohistory == null ? null : ctx.casinohistory.length) > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.casinohistory == null ? null : ctx.casinohistory.length) > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, NgxPaginationModule, PaginatePipe, PaginationControlsComponent, MatFormFieldModule, MatFormField, MatSuffix, MatInputModule, MatInput, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatNativeDateModule], styles: ['\n\n.transactions-container[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  margin: 30px auto;\n  font-family: "Segoe UI", sans-serif;\n}\n.transaction-types[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 15px;\n}\n.btn-show[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 30px;\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  width: 100%;\n  max-width: 230px;\n}\n.btn-show[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #ff7733,\n      #ff4400);\n}\n.transaction-types[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.date-filters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.date-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.show-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom right,\n      #ff4b2b,\n      #ff416c);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 8px 20px;\n  cursor: pointer;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.show-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.transaction-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #2a2a2a;\n  border-radius: 8px;\n}\n.transaction-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.transaction-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #444;\n  text-align: left;\n  text-wrap: nowrap;\n}\n.transaction-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.type-option.active[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  box-shadow: 0 0 8px #ffb400;\n}\n.type-option[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid #ffb400;\n  background-color: transparent;\n  transition: all 0.3s ease;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.filter-item[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.1rem;\n}\n.filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.date-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #1f1f1f;\n  border-radius: 8px;\n}\nmat-datepicker-toggle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n}\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  background: #1f1f1f;\n  border-radius: 8px;\n  color: #fff;\n}\n.mat-datepicker-content[_ngcontent-%COMP%] {\n  background-color: #232323 !important;\n  color: #fff !important;\n}\n.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n  .cdk-overlay-pane .mat-datepicker-content {\n  background: var(--gradient-primary) !important;\n  color: #fff !important;\n  border-radius: 8px;\n}\n  .cdk-overlay-pane .mat-calendar {\n  background: #ffffff !important;\n  color: #fff !important;\n}\n  .mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n  .mdc-line-ripple::before, \n  .mdc-line-ripple::after {\n  border: none !important;\n  display: none !important;\n}\n  .mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input, \n  .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  padding: 8px 12px !important;\n  height: auto !important;\n}\nth[_ngcontent-%COMP%] {\n  background: #0f0f0f;\n}\ntr[_ngcontent-%COMP%] {\n  background: var(--secondary-bg);\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-show[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .balance-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .balance-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 13px;\n    padding: 10px;\n  }\n  .transactions-container[_ngcontent-%COMP%] {\n    background-color: #1e1e1e;\n    color: white;\n    padding: 0;\n    border-radius: 8px;\n    margin: 30px auto;\n    font-family: "Segoe UI", sans-serif;\n  }\n}\n/*# sourceMappingURL=casinohistory.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Casinohistory, [{
    type: Component,
    args: [{ selector: "app-casinohistory", imports: [
      CommonModule,
      RouterLink,
      FormsModule,
      ReactiveFormsModule,
      NgxPaginationModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule
    ], template: `<div class="redirectline">\r
    <span routerLink="/home">Home</span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15" /> <span>My Account</span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow"\r
      width="15"\r
    />\r
    <span class="m_t_15  ">Casino History</span>\r
  </div>\r
  <h2 class="m_t_15 live_casino_title">Casino History</h2>\r
  <div class="transactions-container"  [formGroup]="form">\r
  \r
 \r
  \r
    <!-- \u2705 Date filter -->\r
    <section class="section-card filter-section">\r
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
\r
    <button class="btn active" (click)="onShow()">Show <i class="{{ isLoading ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i></button>\r
  </div>\r
  <p style="color: #f00;" *ngIf="errormassage">{{errormassage}}</p>\r
\r
    </section>\r
    <div class="table-responsive m_t_15">\r
     \r
      <table class="transaction-table" *ngIf="casinohistory?.length > 0" >\r
        <thead>\r
          <tr>\r
            <th class=" sticky-col"><span class="gradient-star">*</span> Form Date </th>\r
            <th><span class="gradient-star">*</span> To Date</th>\r
            <th ><span class="gradient-star">*</span> Name</th>\r
            <!-- <th><span class="gradient-star">*</span> Initial Balance</th> -->\r
            <th class="text-right"><span class="gradient-star">*</span> Total Bet</th>\r
            <th class="text-right"><span class="gradient-star">*</span> BuyIn</th>\r
            <th class="text-right"><span class="gradient-star">*</span> Pay Out</th>\r
            <!-- <th><span class="gradient-star">*</span> Win</th> -->\r
            <!-- <th><span class="gradient-star">*</span> Closing Balance </th> -->\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let item of casinohistory | paginate: {itemsPerPage:selectnum, currentPage:p}">\r
            <td class="sticky-col">{{ cleanDate(item.from)  | date : 'medium':'local'}}</td>\r
            <td>{{ cleanDate(item?.to) | date: 'medium':'local' }}</td>\r
            <td>{{ item.name }}</td>\r
            <!-- <td>{{ item.initialBalance }}</td> -->\r
            <td class="text-right">{{ item.bet }}</td>\r
            <td class="text-right">{{ item.buyIn }}</td>\r
            <td class="text-right">{{ item.payouts }}</td>\r
            <!-- <td>{{ item.win }}</td> -->\r
            <!-- <td>{{ item.closingBalance }}</td> -->\r
          </tr>\r
        </tbody>\r
      </table> \r
    </div>\r
    \r
        <div *ngIf="casinohistory?.length>0" class="m_t_15">\r
          <pagination-controls class="pagination justify-content-end" (click)="moveToTop()" (pageChange)="p=$event"\r
           previousLabel="Prev" nextLabel="Next" class="pt-2 page-item">\r
          </pagination-controls>\r
      \r
          </div>\r
\r
  </div>\r
  `, styles: ['/* src/app/pages/dashboard/casinohistory/casinohistory.css */\n.transactions-container {\n  background-color: #1e1e1e;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  margin: 30px auto;\n  font-family: "Segoe UI", sans-serif;\n}\n.transaction-types {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 15px;\n}\n.btn-show {\n  background: var(--gradient-primary);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 30px;\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  width: 100%;\n  max-width: 230px;\n}\n.btn-show:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #ff7733,\n      #ff4400);\n}\n.transaction-types label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.date-filters {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.date-group {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.show-btn {\n  background:\n    linear-gradient(\n      to bottom right,\n      #ff4b2b,\n      #ff416c);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 8px 20px;\n  cursor: pointer;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.show-btn:hover {\n  opacity: 0.9;\n}\n.transaction-table {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #2a2a2a;\n  border-radius: 8px;\n}\n.transaction-table th,\n.transaction-table td {\n  padding: 10px;\n  border: 1px solid #444;\n  text-align: left;\n  text-wrap: nowrap;\n}\n.transaction-table th {\n}\ninput {\n  width: 100%;\n}\n.type-option.active .dot {\n  background: var(--gradient-primary);\n  box-shadow: 0 0 8px #ffb400;\n}\n.type-option .dot {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid #ffb400;\n  background-color: transparent;\n  transition: all 0.3s ease;\n}\n.filter-row {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.filter-item {\n  flex: 1;\n  min-width: 250px;\n}\n.filter-item label {\n  display: block;\n  font-size: 1.1rem;\n}\n.filter-item label span {\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n  }\n}\n.date-field {\n  width: 100%;\n  background: #1f1f1f;\n  border-radius: 8px;\n}\nmat-datepicker-toggle img {\n}\n.mat-mdc-form-field {\n  background: #1f1f1f;\n  border-radius: 8px;\n  color: #fff;\n}\n.mat-datepicker-content {\n  background-color: #232323 !important;\n  color: #fff !important;\n}\n.mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n::ng-deep .cdk-overlay-pane .mat-datepicker-content {\n  background: var(--gradient-primary) !important;\n  color: #fff !important;\n  border-radius: 8px;\n}\n::ng-deep .cdk-overlay-pane .mat-calendar {\n  background: #ffffff !important;\n  color: #fff !important;\n}\n::ng-deep .mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n::ng-deep .mdc-line-ripple::before,\n::ng-deep .mdc-line-ripple::after {\n  border: none !important;\n  display: none !important;\n}\n::ng-deep .mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,\n::ng-deep .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  padding: 8px 12px !important;\n  height: auto !important;\n}\nth {\n  background: #0f0f0f;\n}\ntr {\n  background: var(--secondary-bg);\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n  }\n  .btn-show {\n    width: 100%;\n  }\n  .balance-table th,\n  .balance-table td {\n    font-size: 13px;\n    padding: 10px;\n  }\n  .transactions-container {\n    background-color: #1e1e1e;\n    color: white;\n    padding: 0;\n    border-radius: 8px;\n    margin: 30px auto;\n    font-family: "Segoe UI", sans-serif;\n  }\n}\n/*# sourceMappingURL=casinohistory.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: MessageService }, { type: PlayerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Casinohistory, { className: "Casinohistory", filePath: "src/app/pages/dashboard/casinohistory/casinohistory.ts", lineNumber: 25 });
})();
export {
  Casinohistory
};
//# sourceMappingURL=chunk-B6FQISU7.js.map
