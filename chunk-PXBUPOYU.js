import {
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-W5KX2DSV.js";
import "./chunk-NBNXC6NQ.js";
import "./chunk-S5ZOBF7L.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-J735AYEO.js";
import "./chunk-EAJ6W5YO.js";

// src/app/pages/dashboard/dashboard/dashboard.ts
var Dashboard = class _Dashboard {
  constructor(router) {
    this.router = router;
  }
  static {
    this.\u0275fac = function Dashboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Dashboard)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 2, vars: 0, consts: [[1, "fd", "p_"]], template: function Dashboard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "router-outlet");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterModule, RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [RouterModule, RouterOutlet], template: '<div class="fd p_">\r\n    <router-outlet></router-outlet>\r\n</div>' }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/pages/dashboard/dashboard/dashboard.ts", lineNumber: 10 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-PXBUPOYU.js.map
