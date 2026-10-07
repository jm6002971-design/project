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
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-EAJ6W5YO.js";

// src/app/pages/dashboard/pokerhistory/pokerhistory.ts
var import_moment = __toESM(require_moment());
var _c0 = (a0, a1) => ({ itemsPerPage: a0, currentPage: a1 });
function Pokerhistory_p_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errormassage);
  }
}
function Pokerhistory_section_43_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 4, ctx_r1.cleanDate(item_r3.startDate), "medium", "local"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.tableName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.game.caption);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.rounds);
  }
}
function Pokerhistory_section_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23)(1, "table", 24)(2, "thead")(3, "tr")(4, "th", 25)(5, "span", 11);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th")(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Table Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th")(13, "span", 11);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Game");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 26)(17, "span", 11);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Hands");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, Pokerhistory_section_43_tr_21_Template, 10, 8, "tr", 27);
    \u0275\u0275pipe(22, "paginate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(22, 1, ctx_r1.pokerhistory, \u0275\u0275pureFunction2(4, _c0, ctx_r1.selectnum, ctx_r1.p)));
  }
}
function Pokerhistory_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "pagination-controls", 28);
    \u0275\u0275listener("click", function Pokerhistory_div_44_Template_pagination_controls_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveToTop());
    })("pageChange", function Pokerhistory_div_44_Template_pagination_controls_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.p = $event);
    });
    \u0275\u0275elementEnd()();
  }
}
var Pokerhistory = class _Pokerhistory {
  constructor(fb, playerservice, messageService) {
    this.fb = fb;
    this.playerservice = playerservice;
    this.messageService = messageService;
    this.balanceData = [];
    this.pokerhistory = [];
    this.isLoading = false;
    this.todaydate = [];
    this.currency = "INR";
    this.itemsperpagecount = [
      { num: 10 },
      { num: 20 },
      { num: 30 },
      { num: 40 },
      { num: 50 }
    ];
    this.p = 1;
    this.selectnum = 10;
  }
  ngOnInit() {
    this.endDate = /* @__PURE__ */ new Date();
    let oneweek = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() - 1);
    this.startDate = oneweek;
    this.todaydate = (0, import_moment.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD");
    this.form = this.fb.group({
      "currency": new FormControl(this.currency, Validators.required),
      "startDate": new FormControl(this.startDate, Validators.required),
      "endDate": new FormControl(this.endDate, Validators.required),
      "types": new FormControl(""),
      "limit": new FormControl(100, Validators.required),
      "index": new FormControl(0, Validators.required)
    });
  }
  onShow() {
    this.isLoading = true;
    this.pokerhistory = [];
    const formattedStartDate = (0, import_moment.default)(this.form.value.startDate).format("DD-MM-YYYY");
    const formattedEndDate = (0, import_moment.default)(this.form.value.endDate).format("DD-MM-YYYY");
    this.errormassage = "";
    const updatedFormValues = __spreadProps(__spreadValues({}, this.form.value), {
      startDate: formattedStartDate,
      endDate: formattedEndDate
    });
    updatedFormValues.currency = this.currency;
    updatedFormValues.types = this.currency === "INR" ? [
      "POKER_HOLDEMNOLIMIT_INR,HOLDEM,NOLIMIT",
      "POKER_HOLDEMLIMIT_INR,HOLDEM,LIMIT",
      "POKER_OMAHANOLIMIT_INR,OMAHA,NOLIMIT",
      "POKER_OMAHALIMIT_INR,OMAHA,LIMIT",
      "POKER_OMAHAPOTLIMIT_INR,OMAHA,LIMIT",
      "POKER_OMAHAPOTLIMIT_INR,OMAHA,POTLIMIT",
      "POKER_OMAHAFIVECARDSNOLIMIT_INR,OMAHA,NOLIMIT",
      "POKER_OMAHAFIVECARDSPOTLIMIT_INR,OMAHA,POTLIMIT"
    ] : [
      "POKER_HOLDEMNOLIMIT_USD,HOLDEM,NOLIMIT",
      "POKER_HOLDEMLIMIT_USD,HOLDEM,LIMIT",
      "POKER_OMAHANOLIMIT_USD,OMAHA,NOLIMIT",
      "POKER_OMAHALIMIT_USD,OMAHA,LIMIT",
      "POKER_OMAHAPOTLIMIT_USD,OMAHA,LIMIT",
      "POKER_OMAHAPOTLIMIT_USD,OMAHA,POTLIMIT",
      "POKER_OMAHAFIVECARDSNOLIMIT_USD,OMAHA,NOLIMIT",
      "POKER_OMAHAFIVECARDSPOTLIMIT_USD,OMAHA,POTLIMIT"
    ];
    this.playerservice.pokerhistory(updatedFormValues).subscribe((data) => {
      console.log(data);
      console.log(data.values);
      if (data) {
        if (data && data.values && data.values.length > 0) {
          this.pokerhistory = data.values.filter((item) => item.rounds && item.rounds > 0);
        } else {
          this.errormassage = "No record found";
          setTimeout(() => {
            this.errormassage = "";
          }, 3500);
        }
        this.isLoading = false;
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
    return new Date(dateStr.replace("[UTC]", ""));
  }
  static {
    this.\u0275fac = function Pokerhistory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Pokerhistory)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PlayerService), \u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Pokerhistory, selectors: [["app-pokerhistory"]], decls: 45, vars: 19, consts: [["picker1", ""], ["picker2", ""], [1, "redirectline"], ["routerLink", "/home"], ["src", "assets/home_icons/arrow_right.png", "alt", "rightArrow", "width", "15"], [1, "m_t_15"], [1, "m_t_15", "live_casino_title"], [1, "balance-page", "m_t_15", 3, "formGroup"], [1, "section-card", "filter-section"], [1, "filter-row"], [1, "filter-item"], [1, "gradient-star"], ["appearance", "fill", 1, "date-field"], ["matInput", "", "formControlName", "startDate", "readonly", "", 3, "ngModel", "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", "", "src", "assets/sidemenu_icons/calendar.svg", "alt", "calendar"], ["matInput", "", "formControlName", "endDate", "readonly", "", 3, "ngModel", "matDatepicker"], [1, "button-row"], [1, "btn", "active", 3, "click"], ["style", "color: #f00;", 4, "ngIf"], ["class", " table-responsive", 4, "ngIf"], ["class", "m_t_15", 4, "ngIf"], [2, "color", "#f00"], [1, "table-responsive"], [1, "transaction-table"], [1, "sticky-col"], [1, "text-right"], [4, "ngFor", "ngForOf"], ["previousLabel", "Prev", "nextLabel", "Next", 1, "pt-2", "page-item", 3, "click", "pageChange"]], template: function Pokerhistory_Template(rf, ctx) {
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
        \u0275\u0275text(8, "Poker History");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h2", 6);
        \u0275\u0275text(10, "Poker History");
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
        \u0275\u0275listener("click", function Pokerhistory_Template_button_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onShow());
        });
        \u0275\u0275text(40, " Show ");
        \u0275\u0275element(41, "i");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(42, Pokerhistory_p_42_Template, 2, 1, "p", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(43, Pokerhistory_section_43_Template, 23, 7, "section", 20)(44, Pokerhistory_div_44_Template, 2, 0, "div", 21);
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
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pokerhistory.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pokerhistory.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, NgxPaginationModule, PaginatePipe, PaginationControlsComponent, MatFormFieldModule, MatFormField, MatSuffix, MatInputModule, MatInput, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatNativeDateModule], styles: ["\n\n.section-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 25px;\n}\n.filter-section[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.filter-item[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.1rem;\n}\n.filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n}\n.input-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-group[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  width: 100%;\n  background: #222;\n  border: none;\n  border-radius: 8px;\n  color: #fff;\n  padding: 10px 35px 10px 10px;\n  font-size: 14px;\n  outline: none;\n}\n.input-group[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 34px;\n  top: 7px;\n  width: 30px;\n  height: 30px;\n  filter: invert(52%) sepia(82%) saturate(7499%) hue-rotate(4deg) brightness(100%) contrast(106%);\n}\n.btn-show[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 30px;\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  width: 100%;\n  max-width: 230px;\n}\n.btn-show[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #ff7733,\n      #ff4400);\n}\n.balance-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\n.balance-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.balance-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 1px solid #333;\n  font-size: 14px;\n  text-wrap: nowrap;\n}\n.balance-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #0f0f0f;\n}\n.balance-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #161616;\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-show[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .balance-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .balance-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 13px;\n    padding: 10px;\n  }\n  .section-card[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.date-field[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #1f1f1f;\n  border-radius: 8px;\n}\nmat-datepicker-toggle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n}\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  background: #1f1f1f;\n  border-radius: 8px;\n  color: #fff;\n}\n.mat-datepicker-content[_ngcontent-%COMP%] {\n  background-color: #232323 !important;\n  color: #fff !important;\n}\n.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n  .cdk-overlay-pane .mat-datepicker-content {\n  background: #ffffff !important;\n  color: #fff !important;\n  border-radius: 8px;\n}\n  .cdk-overlay-pane .mat-calendar {\n  background: #ffffff !important;\n  color: #fff !important;\n}\n  .mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n  .mdc-line-ripple::before, \n  .mdc-line-ripple::after {\n  border: none !important;\n  display: none !important;\n}\n  .mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input, \n  .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  padding: 8px 12px !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=pokerhistory.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pokerhistory, [{
    type: Component,
    args: [{ selector: "app-pokerhistory", imports: [
      CommonModule,
      RouterLink,
      FormsModule,
      ReactiveFormsModule,
      NgxPaginationModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      RemoveDateFormatPipe
    ], template: `<div class="redirectline">\r
    <span routerLink="/home">Home</span> <img src="assets/home_icons/arrow_right.png" alt="rightArrow" width="15" /> <span>My Account</span> <img src="assets/home_icons/arrow_right.png"\r
      alt="rightArrow"\r
      width="15"\r
    />\r
    <span class="m_t_15 ">Poker History</span>\r
  </div>\r
  <h2 class="m_t_15  live_casino_title">Poker History</h2> \r
  <div class="balance-page m_t_15" [formGroup]="form">\r
    <!-- Date Filter -->\r
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
    <button class="btn active" (click)="onShow()">  Show <i class="{{ isLoading ? 'fas fa-spinner fa-spin' : 'fas fa-check-circle' }}"></i></button>\r
  </div>\r
  <p style="color: #f00;" *ngIf="errormassage">{{errormassage}}</p>\r
    </section>\r
  \r
    <!-- Table Section -->\r
    <section class=" table-responsive" *ngIf="pokerhistory.length>0">\r
      <table class="transaction-table">\r
        <thead>\r
          <tr>\r
            <th class=" sticky-col"><span class="gradient-star">*</span> Date</th>\r
            <th><span class="gradient-star">*</span> Table Name</th>\r
            <th><span class="gradient-star">*</span> Game</th>\r
            <th class="text-right"><span class="gradient-star">*</span> Hands</th>\r
            <!-- <th class="text-right"><span class="gradient-star">*</span> Initial Balance</th>\r
            <th class="text-right"><span class="gradient-star">*</span> Closing  Balance</th> -->\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let item of pokerhistory | paginate: {itemsPerPage:selectnum, currentPage:p}">\r
            <td class="sticky-col">{{ cleanDate(item.startDate) | date:'medium':'local' }}</td>\r
            <td>{{ item.tableName }}</td>\r
            <td>{{ item.game.caption }}</td> \r
            <td class="text-right">{{ item.rounds }}</td> \r
            <!-- <td class="text-right"> {{item?.game?.wallet?.name == 'INR'?'\u20B9':'$'}} {{ item.initialBalance?.value  | number:'1.2-2' }}</td> \r
            <td class="text-right"> {{item?.game?.wallet?.name == 'INR'?'\u20B9':'$'}} {{ item.closingBalance?.value  | number:'1.2-2'}}</td>  -->\r
          </tr>\r
        </tbody>\r
      </table>\r
    </section> \r
    <div *ngIf="pokerhistory.length>0" class="m_t_15">\r
    <pagination-controls class="pagination justify-content-end" (click)="moveToTop()" (pageChange)="p=$event"\r
    previousLabel="Prev" nextLabel="Next"  class="pt-2 page-item">\r
    </pagination-controls>\r
\r
    </div>\r
  </div>\r
   `, styles: ["/* src/app/pages/dashboard/pokerhistory/pokerhistory.css */\n.section-card {\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 25px;\n}\n.filter-section .filter-row {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.filter-item {\n  flex: 1;\n  min-width: 250px;\n}\n.filter-item label {\n  display: block;\n  font-size: 1.1rem;\n}\n.filter-item label span {\n}\n.input-group {\n  position: relative;\n}\n.input-group input[type=date] {\n  width: 100%;\n  background: #222;\n  border: none;\n  border-radius: 8px;\n  color: #fff;\n  padding: 10px 35px 10px 10px;\n  font-size: 14px;\n  outline: none;\n}\n.input-group img {\n  position: absolute;\n  right: 34px;\n  top: 7px;\n  width: 30px;\n  height: 30px;\n  filter: invert(52%) sepia(82%) saturate(7499%) hue-rotate(4deg) brightness(100%) contrast(106%);\n}\n.btn-show {\n  background: var(--gradient-primary);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 30px;\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  width: 100%;\n  max-width: 230px;\n}\n.btn-show:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #ff7733,\n      #ff4400);\n}\n.balance-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\n.balance-table th,\n.balance-table td {\n  padding: 12px;\n  border: 1px solid #333;\n  font-size: 14px;\n  text-wrap: nowrap;\n}\n.balance-table th {\n  background: #0f0f0f;\n}\n.balance-table td {\n  background: #161616;\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n  }\n  .btn-show {\n    width: 100%;\n  }\n  .balance-table th,\n  .balance-table td {\n    font-size: 13px;\n    padding: 10px;\n  }\n  .section-card {\n    padding: 0;\n  }\n}\n.date-field {\n  width: 100%;\n  background: #1f1f1f;\n  border-radius: 8px;\n}\nmat-datepicker-toggle img {\n}\n.mat-mdc-form-field {\n  background: #1f1f1f;\n  border-radius: 8px;\n  color: #fff;\n}\n.mat-datepicker-content {\n  background-color: #232323 !important;\n  color: #fff !important;\n}\n.mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n::ng-deep .cdk-overlay-pane .mat-datepicker-content {\n  background: #ffffff !important;\n  color: #fff !important;\n  border-radius: 8px;\n}\n::ng-deep .cdk-overlay-pane .mat-calendar {\n  background: #ffffff !important;\n  color: #fff !important;\n}\n::ng-deep .mat-calendar-body-selected {\n  background-color: #ff5c33 !important;\n  color: #fff !important;\n}\n::ng-deep .mdc-line-ripple::before,\n::ng-deep .mdc-line-ripple::after {\n  border: none !important;\n  display: none !important;\n}\n::ng-deep .mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,\n::ng-deep .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  padding: 8px 12px !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=pokerhistory.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: PlayerService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Pokerhistory, { className: "Pokerhistory", filePath: "src/app/pages/dashboard/pokerhistory/pokerhistory.ts", lineNumber: 27 });
})();
export {
  Pokerhistory
};
//# sourceMappingURL=chunk-3EGCA4R2.js.map
