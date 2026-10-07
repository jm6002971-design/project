import {
  Store
} from "./chunk-V7ZNEVP2.js";
import {
  Router,
  RouterModule
} from "./chunk-W5KX2DSV.js";
import {
  Injectable,
  NgModule,
  map,
  setClassMetadata,
  take,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-J735AYEO.js";

// src/app/auth/routeauth.guard.ts
var RouteauthGuard = class _RouteauthGuard {
  constructor(store, router) {
    this.store = store;
    this.router = router;
  }
  checkLogin() {
    return this.store.select("loginState").pipe(take(1), map((loginState) => {
      if (loginState?.playerLoggedIn?.loggedIn) {
        return true;
      } else {
        this.router.navigate(["/home"]);
        return false;
      }
    }));
  }
  canActivate(next, state) {
    return this.checkLogin();
  }
  canActivateChild(next, state) {
    return this.checkLogin();
  }
  canLoad(route, segments) {
    return this.checkLogin();
  }
  static {
    this.\u0275fac = function RouteauthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RouteauthGuard)(\u0275\u0275inject(Store), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RouteauthGuard, factory: _RouteauthGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteauthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Store }, { type: Router }], null);
})();

// src/app/pages/dashboard/dashboard-routing-module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-PXBUPOYU.js").then((m) => m.Dashboard),
    canActivate: [RouteauthGuard],
    children: [
      { path: "", redirectTo: "profile", pathMatch: "full" },
      { path: "profile", loadComponent: () => import("./chunk-DKIT5AWM.js").then((m) => m.SpecificationComponent) },
      { path: "bank", loadComponent: () => import("./chunk-SWY2FD5U.js").then((m) => m.Bank) },
      { path: "payments", loadComponent: () => import("./chunk-4DSSKBWE.js").then((m) => m.Cashier) },
      { path: "balance", loadComponent: () => import("./chunk-CEPKBQFK.js").then((m) => m.Balance) },
      { path: "exchange", loadComponent: () => import("./chunk-PBI6ETG3.js").then((m) => m.Exchange) },
      { path: "rakeback", loadComponent: () => import("./chunk-F4ISUWIK.js").then((m) => m.Rakeback) },
      { path: "pokerhistory", loadComponent: () => import("./chunk-3EGCA4R2.js").then((m) => m.Pokerhistory) },
      { path: "casinohistory", loadComponent: () => import("./chunk-B6FQISU7.js").then((m) => m.Casinohistory) },
      { path: "transaction", loadComponent: () => import("./chunk-7X5MVUK7.js").then((m) => m.Transaction) },
      { path: "ptoptransfer", loadComponent: () => import("./chunk-CJURLVXI.js").then((m) => m.Ptop) },
      { path: "depositPage", loadComponent: () => import("./chunk-USSYBSEM.js").then((m) => m.Depositpage) }
    ]
  }
];
var DashboardRoutingModule = class _DashboardRoutingModule {
  static {
    this.\u0275fac = function DashboardRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

export {
  DashboardRoutingModule
};
//# sourceMappingURL=chunk-UHGQF5EV.js.map
