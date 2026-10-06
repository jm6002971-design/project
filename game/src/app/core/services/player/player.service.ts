import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../../modules/player/profile';
import { environment } from '../../../../environments/environment';
import { Stats } from '../../modules/player/stats';
import { forkJoin, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as loginActions from '../../../core/appstates/loginstates/loginActions'
import { Store } from '@ngrx/store';
import { AppState } from '../../appstates/appState';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  private CHPValue = "assets/game_jsons/CHPValue.json";
  private homebannner = "assets/banners.json"
  private torrospin = "assets/torrospins.json"
  private daypointl = "assets/daypoints.json"
  constructor(private httpClient: HttpClient, private router: Router, private store: Store<AppState>,) { }
  public CHPValueJson(): Observable<any> {
    return this.httpClient.get(this.CHPValue);
  }
  public homebanners(): Observable<any> {
    return this.httpClient.get(this.homebannner);
  }
  public torrogames(): Observable<any> {
    return this.httpClient.get(this.torrospin);
  }
  public daypointleader(): Observable<any> {
    return this.httpClient.get(this.daypointl);
  }
  httpBeforLoginOptions() {
    let Options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'siteid': environment.skinId
      })
    }
    return Options
  };

  httpOptions() {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'siteid': environment.skinId,
        'wsession': sessionStorage.getItem('raj_wSession') || ''
      })
    };
    return options;
  }
  httpWsessionlang() {
    let opotion = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        wsession: sessionStorage.getItem("raj_wSession") || '',
        siteid: environment.skinId,
        lang: 'en-US'

      }),
    }
    return opotion;
  };






  httpOptionsgameclose(data: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'siteid': environment.skinId,
        'Token': data,
        'wsession': sessionStorage.getItem('raj_wSession') || ''
      })
    };
    return options;
  }
  httpOptionssmsverify() {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'siteid': environment.skinId,
        'wsession': sessionStorage.getItem('raj_wSession') || '',
        requestType: "smsVerify"
      })
    };
    return options;
  }
  httpOptionsVivo() {
    let lang = localStorage.getItem("locale")
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'siteid': environment.skinId,
        'wsession': sessionStorage.getItem('raj_wSession') || '',
        'Authorization': "Bearer " + localStorage.getItem('accessToken'),
        'lang': 'en'
      })
    };
    return options;
  }
  getCombinedEvents(): Observable<any> {
    const url1 = "https://rajpoker.com/cricketen.json";
    const url2 = "https://rajpoker.com/socceren.json";

    return forkJoin([
      this.httpClient.get(url1),
      this.httpClient.get(url2)
    ]).pipe(
      map(([json1, json2]: any[]) => {
        if (json1 || json2) {
          const combinedEvents = [...json1.events, ...json2.events];

          return {
            events: combinedEvents,
            totalCount: json1.totalCount + json2.totalCount,
            returnedEventsCount: combinedEvents.length
          };

        }
      })
    );
  }


  onPlayerGetProfile() {
    return this.httpClient.post<Profile>(`${environment.baseUrl}${environment.api.player.getProfile}`, {}, this.httpOptions());
  }
  aviatrixnew(data: any) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.aviatrix}`, data, this.httpOptions());
  }
  gvproviderapi(data: any) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.gvprovider}`, data, this.httpOptions());
  }
  get18peaches(data: any) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.games.onegamehub}`, data, this.httpOptions());
  }
  torrolaunch(data: any) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.torro}`, data, this.httpOptions());
  }
  kingmidaslaunch(postData: any) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.kingmidas}`, postData, this.httpWsessionlang());
  }
  closesession(data: any) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.closeGameSession}`, data, this.httpOptions());
  }
  gameclose(data: any) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.gameclose}`, {}, this.httpOptionsgameclose(data));
  }
  onPlayerUpdateProfile(postData: Object): Observable<Profile> {
    return this.httpClient.post<Profile>(`${environment.baseUrl}${environment.api.player.updateProfile}`, postData, this.httpOptions());
  }
  gamelunallvivogaming() {
    return this.httpClient.get(`${environment.baseUrl}${environment.api.player.vivoslots}`, this.httpOptions());
  }
  gamelunallproviders(data: any) {
    console.log(data)
    return this.httpClient.get(`${environment.baseUrl}${environment.api.player.vivoslots1}/${data.provider}/${data.gameId}/` + 'en', this.httpOptions());
  }
  twofactorOptin(body: any): Observable<any> {
    // return this.http.get(`${environment.appApi.baseUrl}${environment.appApi.vivourl}`, this.playerService.httpOptionsVivo());
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.twofactorOptin}`, body, this.httpBeforLoginOptions());
  }
  onPlayerUpdatePassword(postData: Object): Observable<Profile> {
    return this.httpClient.post<Profile>(`${environment.baseUrl}${environment.api.player.updatePassword}`, postData, this.httpOptions());
  }

  onPlayerGetStats() {
    return this.httpClient.post<Stats>(`${environment.baseUrl}${environment.api.player.playerStats}`, {}, this.httpBeforLoginOptions());
  }
  verifyAccount(body: any): Observable<any> {
    // return this.http.get(`${environment.appApi.baseUrl}${environment.appApi.vivourl}`, this.playerService.httpOptionsVivo());
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.verifyAccount}`, body, this.httpBeforLoginOptions());
  }

  onPlayerGetPlayerLevels() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.playerLevels}`, {}, this.httpOptions());
  }

  onPlayerGetRemoteGameHistory(postdata: any) {
    return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.history.remotegame}`, postdata, this.httpOptions());
  }
  pokerhistory(postdata: any) {
    return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.history.pokerhistory}`, postdata, this.httpOptions());
  }

  getPlayerProviderList(postdata: any) {
    return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.player.playerProviderList}`, postdata, this.httpOptions());
  }
  getVOUCHERapi(postdata: any) {
    return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.player.VOUCHERapi}`, postdata, this.httpOptions());
  }
  playerDeposit(depositData: any) {
    return this.httpClient.post<any>(`${environment.api.cashier.deposit}`, depositData, this.httpOptionsVivo());
  }
  onCashierWithdrawCashout(postData: Object) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.interKassaCashOut}`, postData, this.httpOptions());
  }
  getCryptoPrices(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}${environment.api.cashier.getCaspianPayTrxCoversionRates}`, this.httpOptionsIndie1());
  }
  makeP2PTransfer(transferInfo: any) {
    return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.cashier.transferUrl}`, transferInfo, this.httpOptions());

  }
  httpOptionsIndie1() {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }),
    };
    return httpOption;
  }
  playerWithdraw(withdrawBody: any) {
    return this.httpClient.post<any>(`${environment.api.cashier.withDrawCashout}`, withdrawBody, this.httpOptions());

  }
  onCashierCancelWithdrawRequest(postData: any) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.cancelWithdrawRequest}`, postData, this.httpOptions());
  }
  onCashierGetOpenWithdrawRequest() {
    return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.cashier.getOpenWithdrawRequests}`, {}, this.httpOptions());
  }
  exchangRates(exchangeBody: any) {
    return this.httpClient.post<any>(`${environment.api.cashier.exchangRates}`, exchangeBody, this.httpOptions());
  }
  walletExchange(exchangeBody: any) {
    return this.httpClient.post<any>(`${environment.api.cashier.walletExchange}`, exchangeBody, this.httpOptions());
  }
  getExchangeRates() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.getExchangeRates}`, {}, this.httpOptions());
  }
  onCashierGetBankAccount() {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.getBankAccounts}`, {}, this.httpOptions());
  }
  onCashierAddBankAccount(postData: any) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.addBankAccount}`, postData, this.httpOptions());
  }
  getPragmaticHit(data: any) {
    let body = {
    }
    return this.httpClient.post(`${environment.baseUrl}${environment.api.games.pragmatictoken}/${data}`, body, this.httpOptions());
  }
  onCashierDeleteBankAccount(postData: any) {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.cashier.deleteBankAccount}`, postData, this.httpOptions());
  }
  makeExchange(exchangeInfo: any) {
    return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.cashier.exchangeVipPointsUrl}`, exchangeInfo, this.httpOptions());
  }
  getAvatarListApi() {
    return this.httpClient.get<any>(`${environment.baseUrl}${environment.api.player.getAvatarList}`, {});
  }
  setAvatarListApi(postData: any) {
    return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.player.setAvatar}`, postData, this.httpOptions());
  }
  getPlayerAvatar() {
    return this.httpClient.get<Profile>(`${environment.baseUrl}${environment.api.player.getAvatar}`, this.httpOptions());
  }
  getgenerateOTP(postdata: any) {
    return this.httpClient.post<Profile>(`${environment.baseUrl}${environment.api.player.generateOTP}`, postdata, this.httpOptions());
  }
  getvalidateOTP(postdata: any) {
    return this.httpClient.post<Profile>(`${environment.baseUrl}${environment.api.player.validateOTP}`, postdata, this.httpOptionssmsverify());
  }
  getaddMobileVerifyBonus(postdata: any) {
    return this.httpClient.post<Profile>(`${environment.baseUrl}${environment.api.player.addMobileVerifyBonus}`, postdata, this.httpOptions());
  }
  resetpasswordNew(body: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.resetpasswordNew}`, body, this.httpBeforLoginOptions());
  }
  listleaderboard(): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.leaderboardlist}`, this.httpBeforLoginOptions())
  }
  leader(body: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}${environment.api.player.leader}`, body, this.httpBeforLoginOptions())
  }

  handleRedirect(path: string, params: URLSearchParams) {
    const wsession = params.get('wsession');
    const uniqueId = params.get('uniqueId');
    const depositId = params.get('depositId');

    const sessionId = wsession || uniqueId || depositId;

    if (sessionId) {
      localStorage.setItem('raj_wSession', sessionId);
      sessionStorage.setItem(
        'webSessionId',
        JSON.stringify({ success: true, sessionId })
      );

      const payload: any = { success: true, sessionId };
      this.store.dispatch(new loginActions.LoginSuccess(payload));
    }
    const cleanPath = path.startsWith('/') ? path : '/' + path;
    if (cleanPath.startsWith('/deposit') || cleanPath.startsWith('/p2p-transfer') || cleanPath.startsWith('/cashout')) {
      return this.router.navigate(['/myaccount/payments']);
    }
    if (cleanPath.startsWith('/profile')) {
      return this.router.navigate(['/myaccount/profile']);
    }
    if (cleanPath.startsWith('/transactions')) {
      return this.router.navigate(['/myaccount/transaction']);
    }
    if (cleanPath.startsWith('/exchange')) {
      return this.router.navigate(['/myaccount/exchange']);
    }
    if (cleanPath.startsWith('/Sportsm')) {
      return this.router.navigate(['/sports']);
    }
    if (cleanPath.startsWith('/balance')) {
      return this.router.navigate(['/myaccount/balance']);
    }
    if (cleanPath.startsWith('/vip-points-exchange')) {
      return this.router.navigate(['/myaccount/rakeback']);
    }
    if (cleanPath.startsWith('/liveDealer_2')) {
      return this.router.navigate(['/live-casino']);
    }
    if (cleanPath.includes('client-redirect')) {
      const to = params.get('to');
      if (to === 'casinoh5') {
        return this.router.navigate(['/slots']);
      }
    }
    return this.router.navigate([cleanPath]);
  }

} 
