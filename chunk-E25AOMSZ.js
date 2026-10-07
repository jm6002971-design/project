import {
  LoginService
} from "./chunk-QSOTGL7G.js";
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
  BehaviorSubject,
  Injectable,
  Subject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-J735AYEO.js";

// src/app/core/services/gameLauncher/game-launcher.service.ts
var GameLauncherService = class _GameLauncherService {
  showLoader() {
    this.loadingSubject.next(true);
  }
  hideLoader() {
    this.loadingSubject.next(false);
  }
  constructor(http, store, loginService, router) {
    this.http = http;
    this.store = store;
    this.loginService = loginService;
    this.router = router;
    this.isLoggedIn = false;
    this.loadingSubject = new BehaviorSubject(false);
    this.isLoading = this.loadingSubject.asObservable();
    this.pendingRequests = [];
    this.storeSub = this.store.select("loginState").subscribe((loginState) => {
      const wasLoggedIn = this.isLoggedIn;
      this.isLoggedIn = loginState.playerLoggedIn?.loggedIn || false;
      if (!wasLoggedIn && this.isLoggedIn && this.pendingRequests.length > 0) {
        const requests = [...this.pendingRequests];
        this.pendingRequests = [];
        requests.forEach((fn) => fn());
      }
    });
  }
  onGameRun(url, game) {
    const generateId = () => crypto.randomUUID();
    const newId = generateId();
    const gameId = game.gameId || game.id || game.token || game.tableId || newId;
    sessionStorage.setItem("currentGame", JSON.stringify({
      gameId,
      url,
      provider: game.prov || "",
      width: "100%",
      height: "100vh"
    }));
    const navigationExtras = {};
    if (game?.routerPth) {
      navigationExtras.queryParams = { type: game.routerPth };
    }
    this.router.navigate([`/games`, gameId], navigationExtras);
  }
  httpWsession(providerName, data) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      wsession: sessionStorage.getItem("raj_wSession") || "",
      siteid: environment.skinId
    };
    if (providerName === "rubyplay" && data?.gameId) {
      headers["gameId"] = data.gameId;
    } else if (providerName === "netent" || providerName == "gameurl") {
      delete headers["wsession"];
    }
    return { headers: new HttpHeaders(headers) };
  }
  runOrQueueRequest(requestFn) {
    if (this.isLoggedIn) {
      return requestFn();
    } else {
      const subject = new Subject();
      this.pendingRequests.push(() => {
        requestFn().subscribe({
          next: (res) => subject.next(res),
          error: (err) => subject.error(err),
          complete: () => subject.complete()
        });
      });
      this.loginService.openLogin();
      return subject.asObservable();
    }
  }
  onGameLaunch(providerName, data) {
    const endpoints = {
      pragmaticplay: environment.api.games.pragmatictoken,
      rubyplay: environment.api.games.rubyPlayLaunch,
      aviatrix: environment.api.games.aviatrixGameLaunch,
      cpgames: environment.api.games.cpgGameLaunch,
      barbarabang: environment.api.games.barbaraGameLaunch,
      mancala: environment.api.games.mancalaGameLaunch,
      netent: environment.api.games.ezugiGameLaunch,
      redtiger: environment.api.games.ezugiGameLaunch,
      habanero: environment.api.games.habaneroGameLaunch,
      vibra: environment.api.games.vibraGameLaunch,
      endorphina: environment.api.games.endorphinaGameLaunch,
      sports: environment.api.games.sporToken,
      ezugistandard: environment.api.games.ezugiGameLaunch,
      gameurl: environment.api.games.gameurl,
      vivogamelaunch: environment.api.games.vivoGameLaunch,
      popokgaming: environment.api.games.popokGameLaunch,
      instantplay: environment.api.games.instantPlay,
      onegamehub: environment.api.games.onegamehub
    };
    const providerKey = providerName.toLowerCase();
    const endpoint = endpoints[providerKey];
    console.log(endpoint);
    if (!endpoint) {
      throw new Error(`Unknown provider: ${providerName}`);
    }
    let body = {};
    switch (providerKey) {
      case "aviatrix":
        body = { gameId: data.gameId, provider: providerKey };
        break;
      case "cpgames":
      case "18peaches":
        body = { gameId: data.gameId };
        break;
      case "barbarabang":
        body = { gameId: data.absoluteName };
        break;
      case "popokgaming":
        body = { "gameId": data.gameId, "provider": data.provider };
        break;
      case "instantplay":
        body = {
          "gameMode": "",
          "gameId": "",
          "provider": "evenBet"
        };
        break;
      default:
        body = {};
        break;
    }
    let url = `${environment.baseUrl}${endpoint}`;
    let method = "post";
    if (providerKey === "pragmaticplay") {
      url += `/${data.gameId}`;
    } else if (providerKey === "mancala") {
      url += `/${data?.Id}`;
    } else if (providerKey === "netent" || providerKey === "redtiger" || providerKey === "habanero" || providerKey === "endorphina" || providerKey === "sports" || providerKey === "ezugistandard" || providerKey === "gameurl") {
      method = "get";
      url += `/${sessionStorage.getItem("raj_wSession") + (providerName == "gameurl" ? `/${true}` : "") || ""}${providerKey === "endorphina" ? "/" + data.gameId : ""}`;
    }
    console.log(providerName);
    if (providerName !== "gameurl") {
      return this.runOrQueueRequest(() => {
        if (method === "post" && providerName !== "vivogamelaunch") {
          return this.http.post(url, body, this.httpWsession(providerKey, data));
        } else {
          return this.http.get(url, this.httpWsession(providerKey, data));
        }
      });
    } else {
      if (method === "post") {
        return this.http.post(url, body, this.httpWsession(providerKey, data));
      } else {
        return this.http.get(url, this.httpWsession(providerKey, data));
      }
    }
  }
  static {
    this.\u0275fac = function GameLauncherService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GameLauncherService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Store), \u0275\u0275inject(LoginService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GameLauncherService, factory: _GameLauncherService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameLauncherService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Store }, { type: LoginService }, { type: Router }], null);
})();

export {
  GameLauncherService
};
//# sourceMappingURL=chunk-E25AOMSZ.js.map
