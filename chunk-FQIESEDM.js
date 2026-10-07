import {
  PlayerSessionExpired
} from "./chunk-PDHHGWHH.js";
import {
  LogoutStart,
  PlayerService,
  ResetState
} from "./chunk-HXFVUPJ2.js";
import {
  environment
} from "./chunk-2Y7B2BAT.js";
import {
  Store
} from "./chunk-V7ZNEVP2.js";
import {
  Router
} from "./chunk-W5KX2DSV.js";
import {
  HttpClient
} from "./chunk-NBNXC6NQ.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-J735AYEO.js";

// src/app/core/services/cashier/cashier.service.ts
var CashierService = class _CashierService {
  constructor(httpClient, router, playerservice, store) {
    this.httpClient = httpClient;
    this.router = router;
    this.playerservice = playerservice;
    this.store = store;
  }
  onCashierGetBalance() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.balance}`, {}, this.playerservice.httpOptions());
  }
  sessionExpire(value) {
    if (value === true) {
      this.store.dispatch(new PlayerSessionExpired({ session: value }));
      this.store.dispatch(new ResetState());
      this.store.dispatch(new LogoutStart());
      this.router.navigate(["/home"]);
      setTimeout(() => {
        window.location.reload();
      }, 1e3);
    }
  }
  onCashierTransactionHistory(postData) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.history.transaction}`, postData, this.playerservice.httpOptions());
  }
  apiresponse(data) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.history.newresponse1}`, data, this.playerservice.httpOptions());
  }
  onCashierTransactionHistoryBYToken(postData) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.history.transactionCheck}`, postData, this.playerservice.httpOptions());
  }
  getdeposit(depositData) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.deposit}`, depositData, this.playerservice.httpOptions());
  }
  static {
    this.\u0275fac = function CashierService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CashierService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router), \u0275\u0275inject(PlayerService), \u0275\u0275inject(Store));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CashierService, factory: _CashierService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CashierService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }, { type: PlayerService }, { type: Store }], null);
})();

export {
  CashierService
};
//# sourceMappingURL=chunk-FQIESEDM.js.map
