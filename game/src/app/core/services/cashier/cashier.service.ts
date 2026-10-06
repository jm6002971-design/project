import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlayerService } from '../player/player.service';
import { environment } from '../../../../environments/environment';
import { Balance } from '../../modules/cashier/balance';
import { Store } from '@ngrx/store';
import { AppState } from '../../appstates/appState';
import { PlayerSessionExpired } from '../../appstates/cashierstates/cashierActions';
import { Observable } from 'rxjs';
import * as loginActions from '../../appstates/loginstates/loginActions'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CashierService {

  constructor(private httpClient: HttpClient, private router:Router,
    private playerservice: PlayerService,
    private store: Store<AppState>) { }

  onCashierGetBalance() {
    return this.httpClient.post<Balance>(`${environment.baseUrl}${environment.api.cashier.balance}`, {}, this.playerservice.httpOptions());
  }


  sessionExpire(value: boolean) {
    if (value === true) {
      this.store.dispatch(new PlayerSessionExpired({ session: value }));
      this.store.dispatch(new loginActions.ResetState());
      this.store.dispatch(new loginActions.LogoutStart());
      this.router.navigate(['/home'])
      setTimeout(()=>{
       window.location.reload()
      },1000)
    }
  }
 
  onCashierTransactionHistory(postData: any) {
    return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.history.transaction}`, postData, this.playerservice.httpOptions());
  }


apiresponse(data:any){
  return this.httpClient.post(`${environment.baseUrl}${environment.api.history.newresponse1}`,data , this.playerservice.httpOptions())
}
  onCashierTransactionHistoryBYToken(postData: any) {
    return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.history.transactionCheck}`, postData, this.playerservice.httpOptions());
  }

  public getdeposit(depositData: any): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrl}${environment.api.cashier.deposit}`,
      depositData,
      this.playerservice.httpOptions()
    );
  }

}
