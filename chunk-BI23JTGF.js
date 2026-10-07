import {
  environment
} from "./chunk-2Y7B2BAT.js";
import {
  Store
} from "./chunk-V7ZNEVP2.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-NBNXC6NQ.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  shareReplay,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-J735AYEO.js";

// src/app/core/services/common/commonutil.service.ts
var CommonUtilService = class _CommonUtilService {
  constructor(httpClient, store) {
    this.httpClient = httpClient;
    this.store = store;
    this.playerProviderListSubject = new BehaviorSubject(null);
    this.playerProviderList$ = this.playerProviderListSubject.asObservable();
    this.permissionMapSubject = new BehaviorSubject({});
    this.permissionMap$ = this.permissionMapSubject.asObservable();
    this.playerLoggedIn = false;
  }
  httpOptions() {
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "siteid": environment.skinId,
        "wsession": sessionStorage.getItem("raj_wSession") || ""
      })
    };
    return options;
  }
  loadCashbalanceBasedOnCurrency(walletObjs, walletName, key) {
    let res = 0;
    if (walletObjs) {
      walletObjs.forEach((wobj) => {
        if ("wallet" in wobj && "name" in wobj["wallet"] && wobj["wallet"]["name"].toLowerCase() == walletName.toLowerCase() && key in wobj) {
          res = wobj[key]["value"];
        }
      });
    }
    return this.getRoundedOffNumber(res);
  }
  loadAppPreferredCurrency(walletObjs) {
    let appCurrency = "NOT FOUND";
    if (walletObjs) {
      walletObjs.forEach((wobj) => {
        if ("wallet" in wobj && "name" in wobj["wallet"] && !["PLAYMONEY", "COMPPOINTS"].includes(wobj["wallet"]["name"])) {
          appCurrency = wobj["wallet"]["name"];
        }
      });
    }
    return appCurrency;
  }
  addNumbers(arr) {
    let s = 0;
    arr.forEach((k) => {
      if (k)
        s += Number(k);
    });
    return s;
  }
  getRoundedOffNumber(n) {
    if (n) {
      n = Number(n).toFixed(2);
    }
    return n;
  }
  fetchProviderList() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.getProviders}`, {}, this.httpOptions()).pipe(tap((res) => {
      this.playerProviderListSubject.next(res);
      const permissinonMap = res?.reduce((acc, p) => {
        acc[p.name.toLowerCase()] = true;
        return acc;
      }, {});
      this.permissionMapSubject.next(permissinonMap);
    }), shareReplay(1));
  }
  fetchPlayerProviderList(body) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.playerProviderList}`, body, this.httpOptions()).pipe(tap((res) => {
      this.playerProviderListSubject.next(res);
      const permissinonMap = res?.reduce((acc, p) => {
        acc[p.name.toLowerCase()] = !!p.status;
        return acc;
      }, {});
      this.permissionMapSubject.next(permissinonMap);
    }), shareReplay(1));
  }
  getPlayerProviderList(body) {
    const currentValue = this.playerProviderListSubject.value;
    if (currentValue) {
      return this.playerProviderList$;
    }
    return body ? this.fetchPlayerProviderList(body) : this.fetchProviderList();
  }
  hasPermission(provider) {
    return !!this.permissionMapSubject.value?.[provider.toLowerCase()];
  }
  hasAnyPermission(providers) {
    return providers.some((p) => this.hasPermission(p));
  }
  hasAllPermission(providers) {
    return providers.every((p) => this.hasPermission(p));
  }
  getPermission$() {
    return this.permissionMap$;
  }
  clearPermission() {
    this.playerProviderListSubject.next(null);
    this.permissionMapSubject.next({});
  }
  static {
    this.\u0275fac = function CommonUtilService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommonUtilService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Store));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommonUtilService, factory: _CommonUtilService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonUtilService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Store }], null);
})();

export {
  CommonUtilService
};
//# sourceMappingURL=chunk-BI23JTGF.js.map
