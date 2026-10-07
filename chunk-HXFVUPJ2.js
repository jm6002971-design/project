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
  HttpClient,
  HttpHeaders
} from "./chunk-NBNXC6NQ.js";
import {
  Injectable,
  forkJoin,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-J735AYEO.js";

// src/app/core/appstates/loginstates/loginActions.ts
var RESET_STATE = "[login] RESET_STATE";
var PLAYER_LOGGEDIN = "[login] PLAYER_LOGGEDIN";
var LOGIN_START = "[login] LOGIN_START";
var LOGIN_SUCCESS = "[login] LOGIN_SUCCESS";
var LOGIN_FAIL = "[login] LOGIN_FAIL";
var LOGOUT_START = "[login] LOGOUT_START";
var LOGOUT_SUCCESS = "[login] LOGOUT_SUCCESS";
var LOGOUT_FAIL = "[login] LOGOUT_FAIL";
var FORGOTPASSWORD_START = "[login] FORGOTPASSWORD_START";
var FORGOTPASSWORD_SUCCESS = "[login] FORGOTPASSWORD_SUCCESS";
var FORGOTPASSWORD_FAIL = "[login] FORGOTPASSWORD_FAIL";
var REGISTER_START = "[login] REGISTER_START";
var REGISTER_SUCCESS = "[login] REGISTER_SUCCESS";
var REGISTER_FAIL = "[login] REGISTER_FAIL";
var ResetState = class {
  constructor() {
    this.type = RESET_STATE;
  }
};
var PlayerLoggedIn = class {
  constructor(payload) {
    this.payload = payload;
    this.type = PLAYER_LOGGEDIN;
  }
};
var LoginStart = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOGIN_START;
  }
};
var LoginSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOGIN_SUCCESS;
  }
};
var LoginFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOGIN_FAIL;
  }
};
var LogoutStart = class {
  constructor() {
    this.type = LOGOUT_START;
  }
};
var LogoutSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOGOUT_SUCCESS;
  }
};
var LogoutFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOGOUT_FAIL;
  }
};
var ForgotPasswordSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = FORGOTPASSWORD_SUCCESS;
  }
};
var ForgotPasswordFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = FORGOTPASSWORD_FAIL;
  }
};
var RegisterStart = class {
  constructor(payload) {
    this.payload = payload;
    this.type = REGISTER_START;
  }
};
var RegisterSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = REGISTER_SUCCESS;
  }
};
var RegisterFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = REGISTER_FAIL;
  }
};

// src/app/core/services/player/player.service.ts
var PlayerService = class _PlayerService {
  constructor(httpClient, router, store) {
    this.httpClient = httpClient;
    this.router = router;
    this.store = store;
    this.CHPValue = "assets/game_jsons/CHPValue.json";
    this.homebannner = "assets/banners.json";
    this.torrospin = "assets/torrospins.json";
    this.daypointl = "assets/daypoints.json";
  }
  CHPValueJson() {
    return this.httpClient.get(this.CHPValue);
  }
  homebanners() {
    return this.httpClient.get(this.homebannner);
  }
  torrogames() {
    return this.httpClient.get(this.torrospin);
  }
  daypointleader() {
    return this.httpClient.get(this.daypointl);
  }
  httpBeforLoginOptions() {
    let Options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "siteid": environment.skinId
      })
    };
    return Options;
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
  httpWsessionlang() {
    let opotion = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        wsession: sessionStorage.getItem("raj_wSession") || "",
        siteid: environment.skinId,
        lang: "en-US"
      })
    };
    return opotion;
  }
  httpOptionsgameclose(data) {
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "siteid": environment.skinId,
        "Token": data,
        "wsession": sessionStorage.getItem("raj_wSession") || ""
      })
    };
    return options;
  }
  httpOptionssmsverify() {
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "siteid": environment.skinId,
        "wsession": sessionStorage.getItem("raj_wSession") || "",
        requestType: "smsVerify"
      })
    };
    return options;
  }
  httpOptionsVivo() {
    let lang = localStorage.getItem("locale");
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "siteid": environment.skinId,
        "wsession": sessionStorage.getItem("raj_wSession") || "",
        "Authorization": "Bearer " + localStorage.getItem("accessToken"),
        "lang": "en"
      })
    };
    return options;
  }
  getCombinedEvents() {
    const url1 = "https://rajpoker.com/cricketen.json";
    const url2 = "https://rajpoker.com/socceren.json";
    return forkJoin([
      this.httpClient.get(url1),
      this.httpClient.get(url2)
    ]).pipe(map(([json1, json2]) => {
      if (json1 || json2) {
        const combinedEvents = [...json1.events, ...json2.events];
        return {
          events: combinedEvents,
          totalCount: json1.totalCount + json2.totalCount,
          returnedEventsCount: combinedEvents.length
        };
      }
    }));
  }
  onPlayerGetProfile() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.getProfile}`, {}, this.httpOptions());
  }
  aviatrixnew(data) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.aviatrix}`, data, this.httpOptions());
  }
  gvproviderapi(data) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.gvprovider}`, data, this.httpOptions());
  }
  get18peaches(data) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.games.onegamehub}`, data, this.httpOptions());
  }
  torrolaunch(data) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.torro}`, data, this.httpOptions());
  }
  kingmidaslaunch(postData) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.kingmidas}`, postData, this.httpWsessionlang());
  }
  closesession(data) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.closeGameSession}`, data, this.httpOptions());
  }
  gameclose(data) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.gameclose}`, {}, this.httpOptionsgameclose(data));
  }
  onPlayerUpdateProfile(postData) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.updateProfile}`, postData, this.httpOptions());
  }
  gamelunallvivogaming() {
    return this.httpClient.get(`${environment.baseUrl}${environment.api.player.vivoslots}`, this.httpOptions());
  }
  gamelunallproviders(data) {
    console.log(data);
    return this.httpClient.get(`${environment.baseUrl}${environment.api.player.vivoslots1}/${data.provider}/${data.gameId}/en`, this.httpOptions());
  }
  twofactorOptin(body) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.twofactorOptin}`, body, this.httpBeforLoginOptions());
  }
  onPlayerUpdatePassword(postData) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.updatePassword}`, postData, this.httpOptions());
  }
  onPlayerGetStats() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.playerStats}`, {}, this.httpBeforLoginOptions());
  }
  verifyAccount(body) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.verifyAccount}`, body, this.httpBeforLoginOptions());
  }
  onPlayerGetPlayerLevels() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.playerLevels}`, {}, this.httpOptions());
  }
  onPlayerGetRemoteGameHistory(postdata) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.history.remotegame}`, postdata, this.httpOptions());
  }
  pokerhistory(postdata) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.history.pokerhistory}`, postdata, this.httpOptions());
  }
  getPlayerProviderList(postdata) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.playerProviderList}`, postdata, this.httpOptions());
  }
  getVOUCHERapi(postdata) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.VOUCHERapi}`, postdata, this.httpOptions());
  }
  playerDeposit(depositData) {
    return this.httpClient.post(`${environment.api.cashier.deposit}`, depositData, this.httpOptionsVivo());
  }
  onCashierWithdrawCashout(postData) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.interKassaCashOut}`, postData, this.httpOptions());
  }
  getCryptoPrices() {
    return this.httpClient.get(`${environment.baseUrl}${environment.api.cashier.getCaspianPayTrxCoversionRates}`, this.httpOptionsIndie1());
  }
  makeP2PTransfer(transferInfo) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.transferUrl}`, transferInfo, this.httpOptions());
  }
  httpOptionsIndie1() {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    };
    return httpOption;
  }
  playerWithdraw(withdrawBody) {
    return this.httpClient.post(`${environment.api.cashier.withDrawCashout}`, withdrawBody, this.httpOptions());
  }
  onCashierCancelWithdrawRequest(postData) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.cancelWithdrawRequest}`, postData, this.httpOptions());
  }
  onCashierGetOpenWithdrawRequest() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.getOpenWithdrawRequests}`, {}, this.httpOptions());
  }
  exchangRates(exchangeBody) {
    return this.httpClient.post(`${environment.api.cashier.exchangRates}`, exchangeBody, this.httpOptions());
  }
  walletExchange(exchangeBody) {
    return this.httpClient.post(`${environment.api.cashier.walletExchange}`, exchangeBody, this.httpOptions());
  }
  getExchangeRates() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.getExchangeRates}`, {}, this.httpOptions());
  }
  onCashierGetBankAccount() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.getBankAccounts}`, {}, this.httpOptions());
  }
  onCashierAddBankAccount(postData) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.addBankAccount}`, postData, this.httpOptions());
  }
  getPragmaticHit(data) {
    let body = {};
    return this.httpClient.post(`${environment.baseUrl}${environment.api.games.pragmatictoken}/${data}`, body, this.httpOptions());
  }
  onCashierDeleteBankAccount(postData) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.deleteBankAccount}`, postData, this.httpOptions());
  }
  makeExchange(exchangeInfo) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.exchangeVipPointsUrl}`, exchangeInfo, this.httpOptions());
  }
  getAvatarListApi() {
    return this.httpClient.get(`${environment.baseUrl}${environment.api.player.getAvatarList}`, {});
  }
  setAvatarListApi(postData) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.setAvatar}`, postData, this.httpOptions());
  }
  getPlayerAvatar() {
    return this.httpClient.get(`${environment.baseUrl}${environment.api.player.getAvatar}`, this.httpOptions());
  }
  getgenerateOTP(postdata) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.generateOTP}`, postdata, this.httpOptions());
  }
  getvalidateOTP(postdata) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.validateOTP}`, postdata, this.httpOptionssmsverify());
  }
  getaddMobileVerifyBonus(postdata) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.addMobileVerifyBonus}`, postdata, this.httpOptions());
  }
  resetpasswordNew(body) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.resetpasswordNew}`, body, this.httpBeforLoginOptions());
  }
  listleaderboard() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.leaderboardlist}`, this.httpBeforLoginOptions());
  }
  leader(body) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.leader}`, body, this.httpBeforLoginOptions());
  }
  handleRedirect(path, params) {
    const wsession = params.get("wsession");
    const uniqueId = params.get("uniqueId");
    const depositId = params.get("depositId");
    const sessionId = wsession || uniqueId || depositId;
    if (sessionId) {
      localStorage.setItem("raj_wSession", sessionId);
      sessionStorage.setItem("webSessionId", JSON.stringify({ success: true, sessionId }));
      const payload = { success: true, sessionId };
      this.store.dispatch(new LoginSuccess(payload));
    }
    const cleanPath = path.startsWith("/") ? path : "/" + path;
    if (cleanPath.startsWith("/deposit") || cleanPath.startsWith("/p2p-transfer") || cleanPath.startsWith("/cashout")) {
      return this.router.navigate(["/myaccount/payments"]);
    }
    if (cleanPath.startsWith("/profile")) {
      return this.router.navigate(["/myaccount/profile"]);
    }
    if (cleanPath.startsWith("/transactions")) {
      return this.router.navigate(["/myaccount/transaction"]);
    }
    if (cleanPath.startsWith("/exchange")) {
      return this.router.navigate(["/myaccount/exchange"]);
    }
    if (cleanPath.startsWith("/Sportsm")) {
      return this.router.navigate(["/sports"]);
    }
    if (cleanPath.startsWith("/balance")) {
      return this.router.navigate(["/myaccount/balance"]);
    }
    if (cleanPath.startsWith("/vip-points-exchange")) {
      return this.router.navigate(["/myaccount/rakeback"]);
    }
    if (cleanPath.startsWith("/liveDealer_2")) {
      return this.router.navigate(["/live-casino"]);
    }
    if (cleanPath.includes("client-redirect")) {
      const to = params.get("to");
      if (to === "casinoh5") {
        return this.router.navigate(["/slots"]);
      }
    }
    return this.router.navigate([cleanPath]);
  }
  static {
    this.\u0275fac = function PlayerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlayerService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router), \u0275\u0275inject(Store));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlayerService, factory: _PlayerService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlayerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }, { type: Store }], null);
})();

export {
  RESET_STATE,
  PLAYER_LOGGEDIN,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  FORGOTPASSWORD_START,
  FORGOTPASSWORD_SUCCESS,
  FORGOTPASSWORD_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  ResetState,
  PlayerLoggedIn,
  LoginStart,
  LoginSuccess,
  LoginFail,
  LogoutStart,
  LogoutSuccess,
  LogoutFail,
  ForgotPasswordSuccess,
  ForgotPasswordFail,
  RegisterStart,
  RegisterSuccess,
  RegisterFail,
  PlayerService
};
//# sourceMappingURL=chunk-HXFVUPJ2.js.map
