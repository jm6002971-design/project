import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { WalletInfo } from '../../../core/modules/cashier/balance';
import { CommonUtilService } from '../../../core/services/common/commonutil.service';
import { PlayerService } from '../../../core/services/player/player.service';
import { AppState } from '../../../core/appstates/appState';
import { Store } from '@ngrx/store';
import { LoginState } from '../../../core/appstates/loginstates/loginState';
import * as cashierActions from "../../../core/appstates/cashierstates/cashierActions";
import { CashierState } from '../../../core/appstates/cashierstates/cashierState';
import { MessageService } from '../../../reusables/message/message.service';

@Component({
  selector: 'app-rakeback',
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './rakeback.html',
  styleUrl: './rakeback.css',
  standalone: true,
})
export class Rakeback {

  // ✅ REQUIRED FOR HTML
  convertTo: string = 'cash';
  isError: boolean = false;

  uiSelection: any = "Cash";
  exchangeData: any = null;
  exchangeDataLength: any = 0;
  selectedExchange: any = {};
  tableData: any = [];
  cashToVipMapping: any = {};
  mapping: any = {};
  selectedDropDown: any = [];
  selectedDropDownValue: any;
  vipPoints: any;
  walleteInfo!: WalletInfo[];
  playerLoggedIn: boolean = false;
  loader: boolean = true;
  errMsg: string = "";

  private storeSub!: Subscription;
  private loginSub!: Subscription;

  constructor(
    private store: Store<AppState>,
    private playerService: PlayerService,
    private commonUtilSer: CommonUtilService,
    private messageService: MessageService
  ) {}

  ngOnInit() {

    this.loginSub = this.store.select("loginState").subscribe((loginState: LoginState) => {
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;

        if (this.playerLoggedIn) {
          this.loadExchangeRates();
          this.store.dispatch(new cashierActions.CashierGetBalanceStart());
        }
      }
    });

    this.storeSub = this.store.select("cashierState").subscribe(
      (cashierState: CashierState) => {
        if (cashierState.balance) {
          this.walleteInfo = cashierState.balance.values;

          this.vipPoints = this.commonUtilSer.loadCashbalanceBasedOnCurrency(
            this.walleteInfo,
            "COMPPOINTS",
            "cash"
          );
        }
      }
    );
  }

  // ================= API =================

  loadExchangeRates() {
    this.playerService.getExchangeRates().subscribe((data) => {
      this.datahandler(data);
    });
  }

  datahandler(apiRes: any) {
    if (apiRes.success) {

      // ✅ FILTER ONLY INR + CASH/BONUS
      this.exchangeData = apiRes.values.filter((item: any) =>
        item.walletType === 'Indian rupee' &&
        (item.exchangeType === 'Cash' || item.exchangeType === 'Bonus')
      );

      this.exchangeDataLength = this.exchangeData.length;

      this.loadDataToView();

    } else {
      this.setError(apiRes?.code || "Unknown error");
    }
  }

  // ================= CORE =================

  loadDataToView(key: any = null) {

    if (!key) key = this.uiSelection;

    this.uiSelection = key;

    // ✅ sync with radio
    this.convertTo = key.toLowerCase();

    if (this.exchangeData && this.vipPoints != null) {

      this.loader = false;

      // ✅ ONLY INR DATA (already filtered)
      this.selectedExchange = this.exchangeData.find((k: any) =>
        k.exchangeType.toLowerCase() === key.toLowerCase()
      );

      if (this.selectedExchange?.rates) {
        this.mapConversionToVip("Cash");
        this.mapConversionToVip("Bonus");
        this.limitSelectedDropDown();
      }

    } else {
      this.loadExchangeRates();
    }
  }

  mapConversionToVip(key: any) {

    if (!this.cashToVipMapping[key]) {
      this.cashToVipMapping[key] = {};
    }

    this.exchangeData.forEach((item: any) => {
      if (item.exchangeType === key) {

        Object.keys(item.rates).forEach(rateKey => {
          this.cashToVipMapping[key][item.rates[rateKey]] = rateKey;
        });

      }
    });
  }

  limitSelectedDropDown() {

    const tempSelection: any[] = [];
    this.tableData = [];

    const vipPoint = Number(this.vipPoints || 0);

    if (!this.selectedExchange?.rates) return;

    Object.keys(this.selectedExchange.rates).forEach((key: any) => {

      const value = this.selectedExchange.rates[key];

      // ✅ NUMBER FORMAT
      this.tableData.push([+key, +value]);

      if (vipPoint >= +key) {
        tempSelection.push(+value);
      }
    });

    this.tableData.sort((a: any, b: any) => a[0] - b[0]);
    tempSelection.sort((a, b) => a - b);

    this.selectedDropDown = tempSelection;
    this.selectedDropDownValue = tempSelection[0];
  }

  // ================= ACTION =================

  submitExchange() {

    const amount = Number(
      this.cashToVipMapping[this.uiSelection][this.selectedDropDownValue]
    );

    if (!this.vipPoints || this.vipPoints == 0) {
      this.setError("No points");
      return;
    }
    if (amount >= this.vipPoints) {
      this.setError("You need Min 500 rake back points to exchange");
      return;
    }
    const body = {
      amount: amount,
      targetAmount: this.selectedDropDownValue,
      cpExchangeType: this.uiSelection === "Cash" ? "0" : "1",
      selectedWalletType: "INR"
    };
    this.playerService.makeExchange(body).subscribe(
      (data: any) => this.exchangeconvert(data),
      (err: any) => this.setError(err)
    );
  }
  exchangeconvert(data: any) {
    if (data?.success) {
      this.store.dispatch(new cashierActions.CashierGetBalanceStart());

      this.messageService.success(
        'Success',
        "Exchange Converted successfully"
      );

    } else {
      this.setError(data?.code || "Unknown error");
    }
  }
  setError(errMsg: any) {
    this.isError = true;
    this.errMsg = errMsg;
    this.messageService.error('Failed', errMsg);
  }
}