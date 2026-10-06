import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PlayerService } from '../../../core/services/player/player.service';
import { Subscription } from 'rxjs';
import { LoginState } from '../../../core/appstates/loginstates/loginState';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/appstates/appState';
import * as cashierActions from "../../../core/appstates/cashierstates/cashierActions";
import { CashierState } from '../../../core/appstates/cashierstates/cashierState';
import { MessageService } from '../../../reusables/message/message.service';

@Component({
  selector: 'app-exchange',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink, 
  ],
  templateUrl: './exchange.html',
  styleUrl: './exchange.css'
})
export class Exchange {
  selectedMode: 'usdToInr' | 'inrToUsd' = 'usdToInr';
  convertTo: string = 'cash';

  errorMsg: any;
  userEnteredAmount: any = '';
  convertedAmount: any = '';
  errorDisable: boolean = false;
  chpExchangerate: any;
  usdExchangerate: any;
  playerLoggedIn:boolean = false
  private loginSub!: Subscription;
  private storeSub!: Subscription;
  playerBalance: any;
  setSelection: any;
  USD_wallet: any;
  CHP_wallet: any;
  isError: boolean = false;
  errMsg: string = "";
  currency1: string = 'USD';
  currency2: string = 'USD';
  CurrencySy: string = "$"
  inrPerUsd: number | null = null; // e.g. 93.0000 => INR per 1 USD
  usdPerInr: number | null = null; // e.g. 0.0108 => USD per 1 INR
  private subs: Subscription[] = [];
  typeexchange:any = "Cash";
  isSubmitting = false;
  responseloader:boolean = true;
  constructor(private playerService:PlayerService,private store: Store<AppState>, private messageService:MessageService){  
     const bodyUSD = { walletCode: 'USD' };
  const sub1 = this.playerService.exchangRates(bodyUSD).subscribe((res: any) => {
    try {
      const entry = res.responses?.USD?.find((r: any) => r.code === 'INR');
      if (entry && entry.rate) {
        this.responseloader = false
        this.usdPerInr = parseFloat(entry.rate); // keep numeric
      }
    } catch (err) {
      console.error('Failed to parse USD response rate', err, res);
    }
  });
  this.subs.push(sub1);
  
  // Fetch rate when walletCode = "INR" -> responses.INR has USD entry (USD per INR)
  const bodyINR = { walletCode: 'INR' };
  const sub2 = this.playerService.exchangRates(bodyINR).subscribe((res: any) => {
    try {
      const entry = res.responses?.INR?.find((r: any) => r.code === 'USD');
      if (entry && entry.rate) {
        this.responseloader = false
        this.inrPerUsd = parseFloat(entry.rate); // keep numeric
      }
    } catch (err) {
      console.error('Failed to parse INR response rate', err, res);
    }
  });
  this.subs.push(sub2);
  }
  ngOnInit() { 

this.moveToTop()
 
    this.store.select("loginState").subscribe((loginState: LoginState) => {
      console.log(loginState.playerLoggedIn)
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.store.dispatch(new cashierActions.CashierGetBalanceStart());
        }
      }
    });

    this.storeSub = this.store.select("cashierState").subscribe(
      (cashierState: CashierState) => {
        if (cashierState.balance) {
          if (cashierState.balance.success === true) {
            this.playerBalance = cashierState.balance;
            this.showDataToView("INR");

          }
        }
      }
    );
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
  showDataToView(wallet: any) { 
    this.setSelection = wallet;
  

    this.playerBalance.values.map((res:any) => {
      if (res.wallet.name === "USD") {
        this.USD_wallet = res.cash.value;
      } else if (res.wallet.name === "INR") {
        this.CHP_wallet = res.cash.value;
      }
    })

    // this.currencyValue
  } 

  setMode(mode: 'usdToInr' | 'inrToUsd') {
    this.errorMsg = ''
    this.convertedAmount = '';
    this.userEnteredAmount = '';
    this.selectedMode = mode;
if(mode == 'usdToInr'){
  this.showDataToView('USD');
}else{
  this.showDataToView('INR')

}


  } 
  exchangeRatesApiRes(res: any) { 

    this.isSubmitting = false; 
    if (res.success == true) {
  
      this.messageService.success(
        'Success',
        "Exchange Converted successfull"  
      );
      setTimeout(() => {
        this.convertedAmount = '';
        this.userEnteredAmount = '';
        this.store.dispatch(new cashierActions.CashierGetBalanceStart());
      }, 800);
    } else {
      if (res.description.includes("The field 2 of")) {         
              this.messageService.error(
                'Failed',
                "Amount exceeds your balance"  
              );
    } else { 
        this.messageService.error(
          'Failed',
          res.description  
        );
    } 
    }
  }
  changeConvertedVal(value: string) {
    this.errorMsg = '';
    this.userEnteredAmount = '';
    this.errorDisable = false;

    const amount = parseFloat(value);
    if (!value || isNaN(amount) || amount <= 0) {
      this.errorMsg = 'Please enter a valid amount';
      return;
    }

    const minLimit = 1;
    const maxLimit = 1000;
    const dailyLimit = 10000;

    if (amount < minLimit) {
      this.errorMsg = `Minimum amount is ${minLimit} USD`;
      return;
    }
    if (amount > maxLimit) {
      this.errorMsg = `Maximum amount per transaction is ${maxLimit} USD`;
      return;
    }

    if (this.inrPerUsd == null) {
      this.errorMsg = 'Exchange rate not available';
      return;
    }

    // USD -> INR: multiply USD by INR-per-USD
    const inr = amount * this.inrPerUsd;
    this.userEnteredAmount = inr.toFixed(2); // format only for display
    // keep internal convertedAmount as a number/string you need for submit
    this.convertedAmount = value;
  }

  // INR -> USD: user types INR amount, show USD
  changeAmtVal(value: string) {
    this.errorMsg = '';
    this.userEnteredAmount = '';
    this.errorDisable = false;

    const amount = parseFloat(value);
    if (!value || isNaN(amount) || amount <= 0) {
      this.errorMsg = 'Please enter a valid amount';
      return;
    }

    const minLimit = 100;       // 1 USD equivalent
    const maxLimit = 1000000;   // 1,000,000 INR

    if (amount < minLimit) {
      this.errorMsg = `Minimum amount is ${minLimit} INR`;
      return;
    }
    if (amount > maxLimit) {
      this.errorMsg = `Maximum amount is ${maxLimit.toLocaleString()} INR`;
      return;
    }

    if (amount > (this.CHP_wallet ?? Infinity)) {
      this.errorMsg = 'Amount exceeds your balance';
      return;
    }

    if (this.usdPerInr == null) {
      this.errorMsg = 'Exchange rate not available';
      return;
    }

    // INR -> USD: multiply INR by USD-per-INR
    const usd = amount * this.usdPerInr;
    this.userEnteredAmount = usd.toFixed(2);
    this.convertedAmount = value;
  }

  // submitExchangeCurrency: make sure you send the right fields (convertedAmount is the "send" amount)
  submitExchangeCurrency() {
    if (this.isSubmitting) return;  // prevent double-click

    this.isSubmitting = true;       // disable button immediately
    // Determine target wallet based on selectedMode (simpler & less error-prone)
    const targetWallet = this.selectedMode === 'usdToInr' ? 'USD' : 'INR';

    if (!this.playerLoggedIn) {
      this.isError = true;
      this.errMsg = 'Please login';
      return;
    }

    // Use numeric convertedAmount for request; ensure it's valid
    const sendAmount = String(this.convertedAmount || '');
    if (!sendAmount) {
      this.isError = true;
      this.errMsg = 'Enter amount';
      return;
    }

    let body: any;
    if (targetWallet === 'INR') {
      body = {      
        walletCode: 'USD',
        keyVsValue: {
          AMOUNT_cash_INR: this.typeexchange == 'Cash'?sendAmount:'0.00',
          AMOUNT_bonus_INR: this.typeexchange == 'Bonus'?sendAmount:'0.00',
          AMOUNT_tm_INR: '0.00',
        },
      };
    } else {
      body = {
        walletCode: 'INR',
        keyVsValue: {      
          AMOUNT_cash_USD: this.typeexchange == 'Cash'?sendAmount:'0.00',
          AMOUNT_bonus_USD: this.typeexchange == 'Bonus'?sendAmount:'0.00',
          AMOUNT_tm_USD: '0.00',
        },
      };
    }

//     USD to INR
// {"walletCode":"INR","keyVsValue":{"AMOUNT_cash_USD":"1","AMOUNT_bonus_USD":"0.00","AMOUNT_tm_USD":"0.00"}}
// INR to USD
// {"walletCode":"USD","keyVsValue":{"AMOUNT_cash_INR":"100000","AMOUNT_bonus_INR":"0.00","AMOUNT_tm_INR":"0.00"}}
    this.playerService.walletExchange(body).subscribe((res: any) => this.exchangeRatesApiRes(res));
  }

  // cleanup
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
    if (this.storeSub) this.storeSub.unsubscribe();
    if (this.loginSub) this.loginSub.unsubscribe();
  }
  loadDataToView(type:any){
    this.typeexchange = type
    console.log(type)
  }
}
