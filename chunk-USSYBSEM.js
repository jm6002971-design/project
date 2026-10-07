import {
  ActivatedRoute,
  RouterModule
} from "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import {
  CommonModule,
  NgForOf
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/pages/dashboard/depositpage/depositpage.ts
function Depositpage_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("alt", method_r1.name);
    \u0275\u0275property("src", "assets/payment_icons/" + method_r1.toLowerCase() + ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", method_r1.toLowerCase(), " ");
  }
}
var Depositpage = class _Depositpage {
  constructor(route) {
    this.route = route;
    this.paymentMethods = [];
  }
  ngOnInit() {
    const response = [
      "APAY_BDT",
      "OKPAY",
      "FIRSTPE",
      "SMILEPAYZ",
      "PAY2LOCAL",
      "SPEEDPAY",
      "T365(1445)",
      "RUPAY360",
      "AGPAY",
      "T365(2565)",
      "GLOBALPAY",
      "PayExpoPayout",
      "PAY2PLAY",
      "CONNECT_CYRO",
      "PAY-INDIA",
      "T365(2198)",
      "APAY_PKR",
      "P2P_EXPERT",
      "APAY",
      "T365_BDT",
      "INDIAPE",
      "T365"
    ];
    this.paymentMethods = response;
    this.route.queryParams.subscribe((params) => {
      this.merchantId = params["merchantId"];
      this.orderId = params["orderId"];
      if (this.merchantId && this.orderId) {
        console.log(this.orderId, this.merchantId);
      }
    });
  }
  selectMethod(method) {
    console.log("Selected Payment:", method);
  }
  static {
    this.\u0275fac = function Depositpage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Depositpage)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Depositpage, selectors: [["app-depositpage"]], decls: 5, vars: 1, consts: [[1, "deposit-page", "fd"], [1, "main-banner"], ["src", "assets/banner_UIP.png", "alt", "Deposit Banner"], [1, "payment-container"], ["class", "payment-item", 4, "ngFor", "ngForOf"], [1, "payment-item"], [1, "payment-icon", 3, "src", "alt"], [1, "payment-name"]], template: function Depositpage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275template(4, Depositpage_div_4_Template, 4, 3, "div", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.paymentMethods);
      }
    }, dependencies: [CommonModule, NgForOf, RouterModule], styles: ["\n\n.deposit-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-banner[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.main-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 10px;\n  display: block;\n}\n.payment-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 12px;\n  padding: 10px;\n}\n.payment-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #111;\n  padding: 12px 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.payment-item[_ngcontent-%COMP%]:hover {\n  background: #1c1c1c;\n}\n.payment-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.payment-name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n}\n/*# sourceMappingURL=depositpage.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Depositpage, [{
    type: Component,
    args: [{ selector: "app-depositpage", imports: [CommonModule, RouterModule], template: `<div class="deposit-page fd ">\r
\r
    <!-- Main Banner -->\r
    <div class="main-banner">\r
      <img src="assets/banner_UIP.png" alt="Deposit Banner">\r
    </div>\r
  \r
    <!-- Payment Methods -->\r
    <div class="payment-container">\r
  \r
      <div class="payment-item" *ngFor="let method of paymentMethods">\r
  \r
        <img \r
          class="payment-icon"\r
          [src]="'assets/payment_icons/' + method.toLowerCase() + '.svg'"\r
          alt="{{method.name}}"\r
        />\r
  \r
        <span class="payment-name">\r
          {{method.toLowerCase()}}\r
        </span>\r
  \r
      </div>\r
  \r
    </div>\r
  \r
  </div>`, styles: ["/* src/app/pages/dashboard/depositpage/depositpage.css */\n.deposit-page {\n  width: 100%;\n}\n.main-banner {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.main-banner img {\n  width: 100%;\n  height: auto;\n  border-radius: 10px;\n  display: block;\n}\n.payment-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 12px;\n  padding: 10px;\n}\n.payment-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #111;\n  padding: 12px 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.payment-item:hover {\n  background: #1c1c1c;\n}\n.payment-icon {\n  width: 40px;\n  height: 40px;\n}\n.payment-name {\n  color: #fff;\n  font-size: 15px;\n}\n/*# sourceMappingURL=depositpage.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Depositpage, { className: "Depositpage", filePath: "src/app/pages/dashboard/depositpage/depositpage.ts", lineNumber: 11 });
})();
export {
  Depositpage
};
//# sourceMappingURL=chunk-USSYBSEM.js.map
