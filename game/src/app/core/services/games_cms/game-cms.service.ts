import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameCmsService {
  private newLaunchProviderList = 'assets/game_jsons/NewLaunchProviderList.json';
  private categorygames = "assets/game_jsons/categorygamesjson.json";
  private ezugiGameJson = "assets/game_jsons/ezugi_standard.json";
  private Habenarojsn = "assets/game_jsons/HabenaroGms.json";
  private _livecasinoJson = 'assets/game_jsons/liveCasino.json';
  private _crashGames = 'assets/game_jsons/crash_game.json';
  private IndieCasino = "assets/game_jsons/indiecasino.json";
  private providerList_json = "assets/game_jsons/providersList.json";
  private men5gmsjson = "assets/game_jsons/5mengames.json";
  private platipusgmjs = "assets/game_jsons/platipus.json";
  private NewHabanero = "assets/game_jsons/HabaneroGames-1.json";
  private kagamesjsn = "assets/game_jsons/Kagames.json";
  private netEntgames = "assets/game_jsons/netEnt.json";
  private indianGames = "assets/game_jsons/indianGames.json";
  private AMBGamesList = "assets/game_jsons/AMBgamesList.json";
  private GTFgamesList = "assets/game_jsons/GTFgamesList.json";
  private HRGgamesList = "assets/game_jsons/HRGgamesList.json";
  private injoyGamesList = "assets/game_jsons/injoyGamesList.json";
  private JDBgamesList = "assets/game_jsons/JDBGamesList.json";
  private spribeGamesList = "assets/game_jsons/spribeGamesList.json";
  private YBgamesList = "assets/game_jsons/YBgamesList.json";
  private rocketmanGames = "assets/game_jsons/rocketmangames.json";
  private redtigerGames = "assets/game_jsons/redtiger.json"
  private AllSlotGamesJsn = "assets/game_jsons/AllSlotGamesJson.json"

  constructor(private http: HttpClient) { }

  httpWsession() {
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        wsession: sessionStorage.getItem("raj_wSession") || '',
        siteid: environment.skinId
      }),
    }
    return option;
  };

  private providersListCache$!: Observable<any>;

  getProvidersLists(): Observable<any> {
    if (!this.providersListCache$) {
      this.providersListCache$ = this.http.get(`${"https://rajpoker.com/"}${'providersList.json'}`)
        .pipe(shareReplay(1));
    }
    return this.providersListCache$;
  }

  getGamesList(provider: any) {
    return this.http.get(`/capi/games-lists?filters[gameProviderName][$eq]=${provider}&fields[0]=gamesList&fields[1]=gameProviderName&populate[tags][fields][0]=tags`);
  }

  getEventBanners(local: any) {
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

  public getNewLaunchProviderList(): Observable<any> {
    return this.http.get(this.newLaunchProviderList);
  }

  public getCategoryGamesJson(): Observable<any> {
    return this.http.get(this.categorygames);
  }

  public getEzugiGamesJson(): Observable<any> {
    return this.http.get(this.ezugiGameJson);
  }
  public getHabaneroGamesJson(): Observable<any> {
    return this.http.get(this.Habenarojsn);
  }

  public IndieCasinoJson(): Observable<any> {
    return this.http.get(this.IndieCasino);
  }
  public getproviderList(): Observable<any> {
    return this.http.get(this.providerList_json);
  }

  public men5game(): Observable<any> {
    return this.http.get(this.men5gmsjson);
  }
  public platipusgm(): Observable<any> {
    return this.http.get(this.platipusgmjs);
  }
  public rocketgm(): Observable<any> {
    return this.http.get(this.rocketmanGames);
  }

  public NewHabenaroJSON(): Observable<any> {
    return this.http.get(this.NewHabanero);
  }
  public kagm(): Observable<any> {
    return this.http.get(this.kagamesjsn);
  }
  public redtigerGamesjs(): Observable<any> {
    return this.http.get(this.redtigerGames);
  }
  public netEntGM(): Observable<any> {
    return this.http.get(this.netEntgames);
  }
  public getIndianGames(): Observable<any> {
    return this.http.get(this.indianGames);
  }
  public AMBgames(): Observable<any> {
    return this.http.get(this.AMBGamesList);
  }
  public GTFgames(): Observable<any> {
    return this.http.get(this.GTFgamesList);
  }
  public HRGgames(): Observable<any> {
    return this.http.get(this.HRGgamesList);
  }
  public injoyGames(): Observable<any> {
    return this.http.get(this.injoyGamesList);
  }
  public AllSlotGames(): Observable<any> {
    return this.http.get(this.AllSlotGamesJsn);
  }
  public JDBgames(): Observable<any> {
    return this.http.get(this.JDBgamesList).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }
  public spribeGames(): Observable<any> {
    return this.http.get(this.spribeGamesList);
  }
  public YBgames(): Observable<any> {
    return this.http.get(this.YBgamesList);
  }
  liveCasinoGames(): Observable<any> {
    return this.http.get(this._livecasinoJson);
  }
  getCrash() {
    return this.http.get<any>(this._crashGames);
  }

  jdbLaunch(gtype: any, mtype: any) {
    let body = {}
    let httpWsessionpragmatic = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        wsession: sessionStorage.getItem("raj_wSession") || '',
        "mType": mtype,
        "gType": gtype,
      }),
    };
    return this.http.post(`${environment.baseUrl}${environment.api.games.jdbLaunch}`, body, httpWsessionpragmatic);
  }

  gamelunallproviders() {
    return this.http.get(`${environment.baseUrl}${environment.api.games.playVivoHandlar}`, this.httpWsession());
  }
  heblounchSession(data: any,KeyName:any): Observable<any> {
    return this.http.get(`${environment.baseUrl}${environment.api.games.heblounch}/${data}/${KeyName}`, this.httpWsession());
  }
  getEzugi(data: any): Observable<any> {
    return this.http.get(`${environment.baseUrl}${environment.api.games.ezugiGameLaunch}/${data}`, this.httpWsession());
  }
  endorphinaGames(data: any, gameid: any) {
    return this.http.get(`${environment.baseUrl}${environment.api.games.endorphinaGameLaunch}/${data}/${gameid}`, this.httpWsession());
  }
  indicasino(data: any) {
    return this.http.get(`${environment.baseUrl}${environment.api.games.indicasino}/${data}`, this.httpWsession());
  }
  SportToken(data: any) {
    return this.http.get(`${environment.baseUrl}${environment.api.sports.sportoken}/${data}`, this.httpWsession());
  }
  PokerTournamentData(body: any,) {
    return this.http.post(`${environment.baseUrl}${environment.api.poker.PokerTournament}`, body, this.httpWsession());
  }
}
