import {
  environment
} from "./chunk-2Y7B2BAT.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-NBNXC6NQ.js";
import {
  Injectable,
  catchError,
  setClassMetadata,
  shareReplay,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-J735AYEO.js";

// src/app/core/services/games_cms/game-cms.service.ts
var GameCmsService = class _GameCmsService {
  constructor(http) {
    this.http = http;
    this.newLaunchProviderList = "assets/game_jsons/NewLaunchProviderList.json";
    this.categorygames = "assets/game_jsons/categorygamesjson.json";
    this.ezugiGameJson = "assets/game_jsons/ezugi_standard.json";
    this.Habenarojsn = "assets/game_jsons/HabenaroGms.json";
    this._livecasinoJson = "assets/game_jsons/liveCasino.json";
    this._crashGames = "assets/game_jsons/crash_game.json";
    this.IndieCasino = "assets/game_jsons/indiecasino.json";
    this.providerList_json = "assets/game_jsons/providersList.json";
    this.men5gmsjson = "assets/game_jsons/5mengames.json";
    this.platipusgmjs = "assets/game_jsons/platipus.json";
    this.NewHabanero = "assets/game_jsons/HabaneroGames-1.json";
    this.kagamesjsn = "assets/game_jsons/Kagames.json";
    this.netEntgames = "assets/game_jsons/netEnt.json";
    this.indianGames = "assets/game_jsons/indianGames.json";
    this.AMBGamesList = "assets/game_jsons/AMBgamesList.json";
    this.GTFgamesList = "assets/game_jsons/GTFgamesList.json";
    this.HRGgamesList = "assets/game_jsons/HRGgamesList.json";
    this.injoyGamesList = "assets/game_jsons/injoyGamesList.json";
    this.JDBgamesList = "assets/game_jsons/JDBGamesList.json";
    this.spribeGamesList = "assets/game_jsons/spribeGamesList.json";
    this.YBgamesList = "assets/game_jsons/YBgamesList.json";
    this.rocketmanGames = "assets/game_jsons/rocketmangames.json";
    this.redtigerGames = "assets/game_jsons/redtiger.json";
    this.AllSlotGamesJsn = "assets/game_jsons/AllSlotGamesJson.json";
  }
  httpWsession() {
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        wsession: sessionStorage.getItem("raj_wSession") || "",
        siteid: environment.skinId
      })
    };
    return option;
  }
  getProvidersLists() {
    if (!this.providersListCache$) {
      this.providersListCache$ = this.http.get(`${"https://rajpoker.com/"}${"providersList.json"}`).pipe(shareReplay(1));
    }
    return this.providersListCache$;
  }
  getGamesList(provider) {
    return this.http.get(`/capi/games-lists?filters[gameProviderName][$eq]=${provider}&fields[0]=gamesList&fields[1]=gameProviderName&populate[tags][fields][0]=tags`);
  }
  getEventBanners(local) {
    return this.http.get(`/capi/event-banners?locale=en&filters[ImageStatus][$eq]=active&fields[0]=ImageStatus&fields[1]=locale&fields[2]=eventName&populate[eventBanner][fields][0]=url`);
  }
  BannersHome() {
    return this.http.get(`https://cms.rajpoker.com/api/home-banners?locale=en&filters[ImageStatus][$eq]=active&fields[0]=routerLink&fields[1]=ImageStatus&fields[2]=locale&fields[3]=mobile&fields[4]=tablet&fields[5]=desktop&populate[heroBanner][fields][0]=url`);
  }
  promotionBanners() {
    return this.http.get(`https://cms.rajpoker.com/api/promotion-banners?populate=*`);
  }
  promotionGames() {
    return this.http.get(`https://cms.rajpoker.com/api/promotional-games?populate=*`);
  }
  getNewLaunchProviderList() {
    return this.http.get(this.newLaunchProviderList);
  }
  getCategoryGamesJson() {
    return this.http.get(this.categorygames);
  }
  getEzugiGamesJson() {
    return this.http.get(this.ezugiGameJson);
  }
  getHabaneroGamesJson() {
    return this.http.get(this.Habenarojsn);
  }
  IndieCasinoJson() {
    return this.http.get(this.IndieCasino);
  }
  getproviderList() {
    return this.http.get(this.providerList_json);
  }
  men5game() {
    return this.http.get(this.men5gmsjson);
  }
  platipusgm() {
    return this.http.get(this.platipusgmjs);
  }
  rocketgm() {
    return this.http.get(this.rocketmanGames);
  }
  NewHabenaroJSON() {
    return this.http.get(this.NewHabanero);
  }
  kagm() {
    return this.http.get(this.kagamesjsn);
  }
  redtigerGamesjs() {
    return this.http.get(this.redtigerGames);
  }
  netEntGM() {
    return this.http.get(this.netEntgames);
  }
  getIndianGames() {
    return this.http.get(this.indianGames);
  }
  AMBgames() {
    return this.http.get(this.AMBGamesList);
  }
  GTFgames() {
    return this.http.get(this.GTFgamesList);
  }
  HRGgames() {
    return this.http.get(this.HRGgamesList);
  }
  injoyGames() {
    return this.http.get(this.injoyGamesList);
  }
  AllSlotGames() {
    return this.http.get(this.AllSlotGamesJsn);
  }
  JDBgames() {
    return this.http.get(this.JDBgamesList).pipe(catchError((error) => {
      return throwError(error);
    }));
  }
  spribeGames() {
    return this.http.get(this.spribeGamesList);
  }
  YBgames() {
    return this.http.get(this.YBgamesList);
  }
  liveCasinoGames() {
    return this.http.get(this._livecasinoJson);
  }
  getCrash() {
    return this.http.get(this._crashGames);
  }
  jdbLaunch(gtype, mtype) {
    let body = {};
    let httpWsessionpragmatic = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        wsession: sessionStorage.getItem("raj_wSession") || "",
        "mType": mtype,
        "gType": gtype
      })
    };
    return this.http.post(`${environment.baseUrl}${environment.api.games.jdbLaunch}`, body, httpWsessionpragmatic);
  }
  gamelunallproviders() {
    return this.http.get(`${environment.baseUrl}${environment.api.games.playVivoHandlar}`, this.httpWsession());
  }
  heblounchSession(data, KeyName) {
    return this.http.get(`${environment.baseUrl}${environment.api.games.heblounch}/${data}/${KeyName}`, this.httpWsession());
  }
  getEzugi(data) {
    return this.http.get(`${environment.baseUrl}${environment.api.games.ezugiGameLaunch}/${data}`, this.httpWsession());
  }
  endorphinaGames(data, gameid) {
    return this.http.get(`${environment.baseUrl}${environment.api.games.endorphinaGameLaunch}/${data}/${gameid}`, this.httpWsession());
  }
  indicasino(data) {
    return this.http.get(`${environment.baseUrl}${environment.api.games.indicasino}/${data}`, this.httpWsession());
  }
  SportToken(data) {
    return this.http.get(`${environment.baseUrl}${environment.api.sports.sportoken}/${data}`, this.httpWsession());
  }
  PokerTournamentData(body) {
    return this.http.post(`${environment.baseUrl}${environment.api.poker.PokerTournament}`, body, this.httpWsession());
  }
  static {
    this.\u0275fac = function GameCmsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GameCmsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GameCmsService, factory: _GameCmsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameCmsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  GameCmsService
};
//# sourceMappingURL=chunk-YQS7B7N5.js.map
