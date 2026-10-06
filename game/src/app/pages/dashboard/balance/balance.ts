import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { WalletInfo } from '../../../core/modules/cashier/balance';
import { LoginState } from '../../../core/appstates/loginstates/loginState';
import { Store } from '@ngrx/store';
import { PlayerService } from "../../../core/services/player/player.service";
import * as cashierActions from "../../../core/appstates/cashierstates/cashierActions";
import * as appState from "../../../core/appstates/appState";
import { CashierState } from '../../../core/appstates/cashierstates/cashierState';
import * as playerActions from "../../../core/appstates/playerstates/playerActions";
import { ProfileState } from '../../../core/appstates/playerstates/playerState';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonUtilService } from '../../../core/services/common/commonutil.service';

@Component({
  selector: 'app-balance',
  imports: [CommonModule, RouterLink,  FormsModule, RouterModule],
  templateUrl: './balance.html',
  styleUrl: './balance.css'
})
export class Balance {
  private storeSub!: Subscription;
  private loginSub!: Subscription;
  private profilestoreSub!: Subscription;
  walleteInfo!: WalletInfo[];
  preferredBalance!: WalletInfo;
  preferredBalanceUSD: any = [];
  playerLoggedIn: boolean = false;
  profileName: any = sessionStorage.getItem("profile");
  profile: any;
  bonus: any = 0;
  inPlay: any = 0;
  total: any = 0;
  vipPoints: any = 0;
  playerLevel: any; 
  vipPointsFilter: any = [];
  vipNameFilter: any = [];
  endDate: any;
  vipName: any;
  vipObj: any = [];
  vipLevels: any = [];
  vipLevelPoints: any = []; 
  isError: boolean = false;
  playerLevelloader: boolean = true;
  errMsg: any = "";
  monthCollectedPints: any;
  goldPoints: any;
  yearCollectedPints: any;
  weeklyCollectedPints: any;
  endDateMonthly: any;
  endDateWeekly: any;
  endDateYearly: any;
  endDateHourly: any;
  availableAmount:any
  responseLoader:boolean = false;
  loaderKey = Date.now();

    constructor(private store: Store<appState.AppState>,private commonUtilSer: CommonUtilService, private playerService: PlayerService,){

}
ngOnInit() {
  this.moveToTop()
  this.showLoader()
  this.loginSub = this.store
    .select("loginState")
    .subscribe((loginState: LoginState) => {
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.store.dispatch(new cashierActions.CashierGetBalanceStart());
            this.store.dispatch(new playerActions.PlayerGetProfile());
        }
      }
    }); 
  this.store.dispatch(new playerActions.ResetState());
  this.storeSub = this.store
    .select("cashierState")
    .subscribe((cashierState: CashierState) => {
      if (cashierState.balance) {
        // this.cashier = cashierState.balance;
        console.log( cashierState.balance)
        if (cashierState.balance.success == true) {
          this.walleteInfo = cashierState.balance.values;
          console.log(this.walleteInfo)
          if(this.walleteInfo){
            setTimeout(()=>{

              this.loadWalletsData(this.walleteInfo);
            }, 500)
            this.loadWalletsData(this.walleteInfo);
            for (let wallete of this.walleteInfo) {
              if (wallete.preferred === true) {
                this.preferredBalance = wallete;
                break;
              }
             

            }

          }
        } else if (cashierState.balance.success == false) {
          this.setError(cashierState.balance.description);
        }
      }
    });

    
  this.profilestoreSub = this.store.select("playerState")
    .subscribe((playerState: ProfileState) => {
       console.log(playerState)
      if (playerState.profile) {
        this.profile = playerState.profile;
        this.profileName = this.profile.login;
      }
    });

  this.getPlayerLevel();
}
showLoader() {
  this.loaderKey = Date.now(); // 🔥 force gif reload
  this.responseLoader = true;
}
hideLoader() {
  this.responseLoader = false;
}
 moveToTop() {
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
loadWalletsData(apiRes:any) {   
  if(this.walleteInfo){

    for (let wallete of this.walleteInfo) { 
      if (wallete.symbol === "$") {
        this.preferredBalanceUSD = wallete;
      }
  
    }
  }
  let prefCurrency = this.commonUtilSer.loadAppPreferredCurrency(apiRes);
  let availableAmountblc = this.commonUtilSer.loadCashbalanceBasedOnCurrency(
    apiRes,
    prefCurrency,
    "cash"
  );
  var availableLocal = availableAmountblc.toString();

  this.availableAmount = Number(availableLocal).toLocaleString()
  let bonusblc = this.commonUtilSer.loadCashbalanceBasedOnCurrency(
    apiRes,
    prefCurrency,
    "bonus"
  );
  var bonusLocal = bonusblc.toString();
this.bonus = Number(bonusLocal).toLocaleString()

  this.inPlay = this.commonUtilSer.loadCashbalanceBasedOnCurrency(
    apiRes,
    prefCurrency,
    "cashInPlay"
  );
  let totalblc = this.commonUtilSer.addNumbers([
    availableLocal,
    bonusLocal,
    this.inPlay,
  ]);
  let totalLocal = totalblc.toString();
  this.total = Number(totalLocal).toLocaleString()
  let vipPointsblc = this.commonUtilSer.loadCashbalanceBasedOnCurrency(
    apiRes,
   'COMPPOINTS',
    "cash"
  );
  let vipPointsLocal = vipPointsblc.toString();
  this.vipPoints = Number(vipPointsLocal).toLocaleString();
}
getPlayerLevel() {
  //   this.authSer.getDataOnPostCall(this.levelApi, {}, this.levelHandler.bind(this));
  this.playerService.onPlayerGetPlayerLevels().subscribe((data) => {
    this.levelHandler(data);
  });
}
levelHandler(apiRes:any) {
  this.vipLevels = apiRes.playerLevelResponses;
  if (apiRes.yearkyCounter.endDate) {
    this.endDateYearly = apiRes.yearkyCounter.endDate; 
  } else {
    this.endDateYearly = "";
  }
  if (apiRes.monthlyCounter.endDate) {
    this.endDateMonthly = apiRes.monthlyCounter.endDate; 
  } else {
    this.endDateMonthly = this.endDateYearly;
  }
  if (apiRes.weeklyCounter.endDate) {
    this.endDateWeekly = apiRes.weeklyCounter.endDate; 
  } else {
    this.endDateWeekly = this.endDateYearly;
  }
  if (apiRes.hourlyCounter.endDate) {
    this.endDateHourly = apiRes.hourlyCounter.endDate; 
  } else {
    this.endDateHourly = "";
  }
  for (let i = 0; i < this.vipLevels.length; i++) {
    if (this.vipPoints < this.vipLevels[i].compPoints) {
      this.vipPointsFilter.push(this.vipLevels[i].compPoints);
      this.vipNameFilter.push(this.vipLevels[i].name);
      if (this.vipLevels[i].period == "Week") {
        this.vipObj.push({
          name: this.vipLevels[i].name,
          endDate: this.endDateWeekly,
          compPoints: this.vipLevels[i].compPoints,
        });
      } else if (this.vipLevels[i].period == "Month") {
        this.vipObj.push({
          name: this.vipLevels[i].name,
          endDate: this.endDateMonthly,
          compPoints: this.vipLevels[i].compPoints,
        });
      } else if (this.vipLevels[i].period == "Year") {
        this.vipObj.push({
          name: this.vipLevels[i].name,
          endDate: this.endDateYearly,
          compPoints: this.vipLevels[i].compPoints,
        });
      } else {
        this.vipObj.push({
          name: this.vipLevels[i].name,
          endDate: this.endDateHourly,
          compPoints: this.vipLevels[i].compPoints,
        });
      }
    } else {
      this.vipName = this.vipLevels[i].name;
    }
  }
  this.monthCollectedPints = apiRes.monthlyCounter.compPoints.toLocaleString();
  this.yearCollectedPints = apiRes.yearkyCounter.compPoints.toLocaleString();
  this.weeklyCollectedPints = apiRes.weeklyCounter.compPoints.toLocaleString();
  if(apiRes.goldCounter){
    this.goldPoints = apiRes.goldCounter.compPoints;
  }
  this.playerLevelloader = false;
  if (apiRes.success) {
    if (
      "playerLevelResponses" in apiRes &&
      apiRes["playerLevelResponses"] &&
      apiRes["playerLevelResponses"].length > 0
    ) {
      this.playerLevel = apiRes["playerLevelResponses"][0]["name"];
    } else {
      this.playerLevel = "NA";
    }
  } else {
    // ERROR POPUP
    // this.setError("code" in apiRes ? apiRes["code"] : "Unknown error");
  }
 this.hideLoader();
}
setError(errMsg:any) {
  this.errMsg = this.errMsg + " and " + errMsg;
  this.isError = true;
}
  cleanDate(dateStr: string): Date {
    return new Date(dateStr.replace('[UTC]', ''));
  }
}
