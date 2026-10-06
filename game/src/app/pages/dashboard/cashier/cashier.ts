import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginState } from '../../../core/appstates/loginstates/loginState';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/appstates/appState';
import * as cashierActions from "../../../core/appstates/cashierstates/cashierActions";
import { PlayerService } from '../../../core/services/player/player.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ComponentFactoryResolver } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CashierState } from '../../../core/appstates/cashierstates/cashierState';
import { WalletInfo } from '../../../core/modules/cashier/balance';
import { CommonUtilService } from '../../../core/services/common/commonutil.service';
import { Subscription } from 'rxjs';
import { Profile } from '../../../core/modules/player/profile';
import { ProfileState } from '../../../core/appstates/playerstates/playerState';
import * as playerActions from '../../../core/appstates/playerstates/playerActions';
import { MessageService } from '../../../reusables/message/message.service';

@Component({
  selector: 'app-cashier',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './cashier.html',
  styleUrls: ['./cashier.css']
})

export class Cashier {
  actions: string[] = ['Deposit', 'Withdrawal', 'Transfer to Player', 'Pending Withdrawals'];
  activeAction: string = 'Deposit';
  walletForm!: FormGroup;
  walletFormVOUCHER!: FormGroup;
  walletFormVOUCHERDeposit!: FormGroup;
  withdrawalwalletFormUSD!: FormGroup;
  withdrawalwalletFormINR!: FormGroup;
  transferwalletFormUSD!: FormGroup;
  transferwalletFormINR!: FormGroup;
  transferChipForm!: FormGroup;
  nametrueFles: boolean = true;
  Depositcurrency: string = 'INR';
  Withdrawalcurrency: string = 'INR';
  Transfercurrency: string = 'INR';
  playerLoggedIn: boolean = false;
  payMethod: any;
  interFalseRes: any;
  urlSafe!: SafeResourceUrl;
  iframeLoaded: boolean = false;
  paymentMethod: any = 342;
  isError: boolean = false;
  errMsg: string = "";
  preferredBalance!: WalletInfo;
  prefCurrency: string = "";
  waletAmountUsd: any;
  isDropdownOpen = false;
  CryptopricesLoader: boolean = false;
  selectedCurrency1: any;
  Cryptoprices: any;
  historyloader: boolean = false;
  AmountUSD: any;
  private profile!: Profile;
  walletCCode: any = 'INR';
  WithdrawsResponse: any = []
  apiLoader: boolean = false;
  apiLoadervoucher: boolean = false;
  criptoWithDrawalForm!: FormGroup;
  usdForm!: FormGroup;
  selectedCurrency: string = '';
  paymentNewMethod: string = '344'
  public availableForPayout: any = null;
  showAmountError = false;
  wattetType: any;
  payoutamount = [];
  public cashOutAmount: Number = 0;
  walleteInfo!: WalletInfo[];
  private storeSub!: Subscription;
  selecteddata: any;
  balance: any;
  ussdemail: any;
  responseLoader: boolean = false;
  loaderKey = Date.now();

  loadingId: string | null = null;
  hasBankAccount: boolean = true;
  getbankaccountdetails: any;
  minAmount: any = '500'
  maxAmount: any = '50000'
  paymentType: any = 'INR';
  placeholderText: string = 'Amount Min 500 Max 50,000';
  paymentMethods: any = {};
  paymentResponse: any = {};
  paymentMethodsResponse: any = {};
  paymentSystemButtons: string[] = [];
  selectedPaymentSystem: string = '';
  selectedRecords: any[] = [];
  selectedMethod: any = null;
  paymentMethodsLoaded = false
  showPaymentOptions = false;
  constructor(private fb: FormBuilder, private messageService: MessageService, private commonUtilSer: CommonUtilService, private store: Store<AppState>, private playerSer: PlayerService, private router: Router) {
    this.cashOutAmount = this.payoutamount[0];
  }
  get f() {
    return this.criptoWithDrawalForm.controls;
  }
  ngOnInit(): void {
    this.moveToTop();
    this.profile1()
    this.userBalance()
    this.AddUF('INR')
    this.store.select("loginState").subscribe((loginState: LoginState) => {
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.store.dispatch(new cashierActions.CashierGetBalanceStart());
        }
      }
    });
    this.walletForm = new FormGroup({
      amount: new FormControl(null,
        [
          Validators.required,
          Validators.min(this.minAmount),
          Validators.max(this.maxAmount),
          Validators.pattern(/^[0-9]*$/)
        ])
    });

    this.walletFormVOUCHER = new FormGroup({
      amount: new FormControl('', [
        Validators.required,
        Validators.min(1000),
        Validators.max(50000),
        Validators.pattern(/^[0-9]*$/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])
    });
    this.walletFormVOUCHERDeposit = this.fb.group({
      amount: [
        '',
        [
          Validators.required,
          Validators.min(100),
          Validators.max(50000),
          Validators.pattern('^[0-9]+$')
        ]
      ],
      coupon: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9_]+$')
        ]
      ]
    });

    this.getDeviceType();

    this.transferwalletFormUSD = this.fb.group({
      transfertotransferU: [],
      transferusernameU: [],
      transferamountU: [],
      textareaU: []
    });
    this.transferwalletFormINR = this.fb.group({
      transfertotransferI: [],
      transferusernameI: [],
      transferamountI: [],
      textareaI: []
    });
    this.initializeCHPForm()

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
  changechps(chpis: any) {
    this.walletCCode = chpis;
    this.wattetType = chpis;
    this.Transfercurrency = chpis;
    if (chpis == 'INR') {
      this.initializeCHPForm()
      this.nametrueFles = true;
    } else {
      this.initializeUSDForm()
      this.nametrueFles = false;

    }
    this.userBalance()
    this.loadWalletsData(this.walleteInfo);
  }


  PtoPUSDCHP(data: any) {
    this.walletCCode = data;
  }
  initializeCHPForm(): void {
    this.transferChipForm = new FormGroup({
      nickname: new FormControl('', Validators.required),
      message: new FormControl('', Validators.pattern('^[a-zA-Z0-9 ]*$')),
      amount: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(100000), Validators.pattern('^[0-9]*$')]),
      franc: new FormControl('00'),
      payoutvalue: new FormControl({ value: this.availableForPayout, disabled: true }, Validators.required)
    });
  }
  initializeUSDForm(): void {
    this.transferChipForm = new FormGroup({
      nickname: new FormControl('', Validators.required),
      message: new FormControl('', Validators.pattern('^[a-zA-Z0-9 ]*$')),
      amount: new FormControl('', [Validators.required, Validators.min(10), Validators.max(1000), Validators.pattern('^[0-9]*$')]),
      franc: new FormControl('00'),
      payoutvalue: new FormControl({ value: this.waletAmountUsd, disabled: true }, Validators.required)
    });
  }

  setActive(action: string) {
    this.historyloader = false;
    this.apiLoader = false;
    this.apiLoadervoucher = false;

    this.activeAction = action;
    if (action == 'Transfer to Player') {
      this.changechps('INR');

    }
    if (action == 'Pending Withdrawals') {
      this.openwith()
      this.showLoader()
    }
    this.moveToTop()
    this.profile1()
  }
  showLoader() {
    this.loaderKey = Date.now(); // 🔥 force gif reload
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
  }
  submitVOUCHER() {
    if (!this.playerLoggedIn) return;

    if (this.walletFormVOUCHER.invalid) {
      this.walletFormVOUCHER.markAllAsTouched(); // 🔥 show errors
      return;
    }

    this.apiLoadervoucher = true;

    const body = {
      amount: this.walletFormVOUCHER.value.amount,
      paymentMethod: "351",
      accountType: "VOUCHER",
      voucherCashout: true,
      bankAccountNumber: this.walletFormVOUCHER.value.email
    };

    this.playerSer.getVOUCHERapi(body).subscribe({
      next: (data: any) => {
        if (data?.success) {
          this.messageService.success(
            'Success',
            `Withdrawal Success
             A voucher will be sent to email`
          );
          this.walletFormVOUCHER.reset();
        }
        this.apiLoadervoucher = false;
      },
      error: () => {
        this.apiLoadervoucher = false;
      }
    });
  }
  // Allow only numbers in amount
  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Auto uppercase coupon
  onCouponInput(event: any) {
    const value = event.target.value.toUpperCase();
    this.walletForm.get('coupon')?.setValue(value, { emitEvent: false });
  }

  togglePayments(event: any) {
    console.log(event.target.value)
    this.paymentType = event.target?.value

    const amoutController: any = this.walletForm.get('amount');

    if (this.paymentType == "INR") {
      this.minAmount = 500;
      this.maxAmount = 50000;
      this.placeholderText = `Amount min ${this.minAmount} max ${this.maxAmount}`;

      amoutController.setValidators([Validators.required, Validators.min(this.minAmount), Validators.max(this.maxAmount)])

    } else {
      this.minAmount = 1000;
      this.maxAmount = 100000;
      this.placeholderText = `Amount min ${this.minAmount} max ${this.maxAmount}`;

      amoutController.setValidators([Validators.required, Validators.min(this.minAmount), Validators.max(this.maxAmount)])
    }
  }
  submit(type: any) {
    console.log(type)
    this.apiLoader = true;
    if (this.playerLoggedIn) {

      this.payMethod = type;
      var paykassmaBody: any
      if (type == 'CRIPTO') {
        if (this.walletForm.invalid) return;
        paykassmaBody = {
          paymentMethod: "345",
          amount: this.walletForm.value.amount,
          currency: "INR",
          deviceIdentity: this.getDeviceType()
        };
        if (this.paymentType == "IMPS") {
          paykassmaBody = {
            ...paykassmaBody,
            payMethod: "BANK_TRANSFER",
          }
        }
      } else {
        paykassmaBody = {
          "amount": this.walletFormVOUCHERDeposit.value.amount,
          "paymentMethod": "351",
          currency: "INR",
          "payMethod": "VOUCHER",
          "voucherCashout": true,
          voucherCode: this.walletFormVOUCHERDeposit.value.coupon
        }
      }

      this.playerSer.playerDeposit(paykassmaBody).subscribe({
        next: (data: any) => this.paykassmaDepositHandler(data),
        error: (err: any) => this.handleDepositError(err)
      });

    }
  }
  getDeviceType(): string {
    const ua = navigator.userAgent || navigator.vendor;

    // Check only Android phone or iPhone
    if (/android.*mobile/i.test(ua) || /iphone/i.test(ua)) {
      return 'phone';
    }

    return 'desktop';
  }
  private paykassmaDepositHandler(data: any): void {
    this.apiLoader = false
    if (data.success === false) {
      this.interFalseRes = data.description;
      this.messageService.success(
        'Success',
        this.interFalseRes
      );


      return;
    }
    // this.router.navigate(['/myaccount/depositPage'], {
    //   queryParams: {
    //     orderId: '3f815b28-4b32-4208-b5e0-c0db55bc3b81',
    //     merchantId: '4634c7ae-a207-4507-82d8-694eeabafc1'
    //   }})
    if (this.payMethod === "CRIPTO" && data.result.redirectUrl) {
      // this.router.navigate(['/myaccount/depositPage']) 
      window.location.href = data.result.redirectUrl;
      this.walletFormVOUCHERDeposit.reset();
    } else if (this.payMethod == 'VOUCHER' && data.result) {
      console.log(data)
      if (data.success) {
        this.router.navigate(['/myaccount/transaction'])
      }
      // window.location.href  = data.result.redirectUrl;
      this.walletForm.reset();


    }
    else {
      this.messageService.success(
        'Success',
        'Internal server error (5000)'
      );
    }

    this.store.dispatch(new cashierActions.CashierGetBalanceStart());
  }
  private handleDepositError(error: any): void {
    this.messageService.success(
      'Success',
      "Deposit failed. Please try again."
    );
  }
  onIframeLoaded(): void {
    this.iframeLoaded = true;
  }

  closeIframe(): void {
    this.urlSafe = '';
    this.iframeLoaded = false;
  }
  bitcoin(amt: any) {

    this.store.dispatch(new cashierActions.CashierGetBalanceStart());
    this.paymentMethod = amt;

    var currrnyType
    var AmountT
    if (this.paymentMethod == 342 || this.paymentMethod == "342") {
      currrnyType = "INR"
      AmountT = 1;
    } else {
      currrnyType = "USD"
      AmountT = 1;

    }

    var body = {
      "paymentMethod": this.paymentMethod,
      "paymentType": "deposit",
      "bonuscode": "",
      "currency": currrnyType,
      "amount": AmountT,
      "language": 'EN'
      // "ip":"127.0.0.1"
    }
    this.playerSer.playerDeposit(body)
      .subscribe((data: any) => {
        this.depositHandler(data);
      }, (err: any) => {

        this.setError(err);
      })

  }
  depositHandler(data: any) {
    if (data && data.success) {
      if (data["result"]["externalLink"]) {
        if (data["result"]["redirectUrl"]) {
          let redirectionurl = data["result"]["redirectUrl"];
          let urlst = redirectionurl.substr(0, 4);
          if (urlst == 'http') {

            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            } else {
              this.store.dispatch(new cashierActions.CashierGetBalanceStart());
            }

            window.location.href = redirectionurl;
          } else {
            this.messageService.error(
              'Failed',
              "Network Error While connecting to PaymentGateway, Please try after 10 Minutes"
            );
          }
        } else {
          this.messageService.error(
            'Failed',
            "Network Error While connecting to PaymentGateway, Please try after 10 Minutes"
          );
        }

      } else {
        this.messageService.error(
          'Failed',
          "Network Error While connecting to PaymentGateway, Please try after 10 Minutes"
        );
      }
    }
    else {
      this.messageService.error(
        'Failed',
        "Network Error While connecting to PaymentGateway, Please try after 10 Minutes"
      );
    }
  }
  setError(errMsg: any) {
    if (errMsg == 'PLAYER_NOT_FOUND') {
      this.messageService.success(
        'Success',
        'Dear player you are allowed to transfer to login name only'
      );

    } else if (typeof errMsg == "string") {

      this.messageService.success(
        'Success',
        errMsg
      );
    } else if (errMsg == 'Please try after 10mins') {
      this.messageService.success(
        'Success',
        'Please try after 10mins'
      );

    } else {
      this.messageService.success(
        'Success',
        this.errMsg
      );
    }

  }
  onWithdrawSubmit() {
    this.apiLoader = true;

    this.errMsg = ''
    this.isError = false;
    let body = {
      amount: this.criptoWithDrawalForm.value.amount,
      paymentMethod: "345",
      accountType: "imps_ib",
      bankName: this.getbankaccountdetails?.bankName || "ICIC",
      personalNumber: this.criptoWithDrawalForm.getRawValue().personalNumber,
      ifsc: this.criptoWithDrawalForm.getRawValue().ifsc,
      nameOnAccount: this.criptoWithDrawalForm.getRawValue().name
    };

    this.playerSer.onCashierWithdrawCashout(body).subscribe((data: any) => {
      this.apiLoader = false;

      if (data.success && data.result.success) {
        if (data.result['comments'] == 'ADDRESS_UPDATED') {
          this.messageService.success(
            'Success',
            "Your cash out request will be processed within 24 hours."
          );
          setTimeout(() => {
            this.messageService.success(
              'Success',
              "Your Cashout USDT address has been updated to NEW address with current one"
            );
          }, 1000);
        } else {
          this.messageService.success(
            'Success',
            "Your cash out request will be processed within 24 hours."
          );
        }

        this.criptoWithDrawalForm.controls['amount'].reset();

      } else {
        this.interFalseRes = data.description ||
          (data.result && data.result.comments) ||
          (data.result && data.result.errorMsg);
        // this.setError(this.interFalseRes);
        this.messageService.success(
          'Success',
          this.interFalseRes
        );
      }

    })

  }
  AddUF(data: any) {
    this.wattetType = data
    this.playerSer.onCashierGetBankAccount().subscribe((data: any) => {
      console.log(data);

      if (data.success && data.TBankAccountInfos?.length > 0) {

        this.getbankaccountdetails = data.TBankAccountInfos[0];

        // ✔ Auto-fill existing bank details
        this.criptoWithDrawalForm.patchValue({
          name: this.getbankaccountdetails.nameOnBank,
          personalNumber: this.getbankaccountdetails.bankAccountNumber,
          ifsc: this.getbankaccountdetails.bankIFSCCOde
        });

        // ✔ Disable fields
        this.criptoWithDrawalForm.get('name')?.disable();
        this.criptoWithDrawalForm.get('personalNumber')?.disable();
        this.criptoWithDrawalForm.get('ifsc')?.disable();

        this.hasBankAccount = true; // for button handling

      } else {
        // ✔ No bank account found → enable fields
        this.criptoWithDrawalForm.get('name')?.enable();
        this.criptoWithDrawalForm.get('personalNumber')?.enable();
        this.criptoWithDrawalForm.get('ifsc')?.enable();

        this.hasBankAccount = false;
      }
    });

    if (data == 'INR') {
      this.cashoutINR()
    } else {
      this.cashoutUSD()

    }
    this.paumoutA()
    this.loadWalletsData(this.walleteInfo);
    this.userBalance();
    this.profile1()
  }
  cashoutUSD() {
    this.usdForm = new FormGroup({
      cashoutsend: new FormGroup({
        email: new FormControl(this.ussdemail, [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ]),
        usdtAddress: new FormControl('', [Validators.required,]),
        usdtAddressType: new FormControl(this.selectedCurrency, [Validators.required]),
        // usdtAddressType: new FormControl("TRC20"),

        paymentMethod: new FormControl(this.paymentNewMethod),
        amount: new FormControl('', [
          Validators.required,
          Validators.min(10),
          Validators.max(5000), Validators.pattern('^[0-9]*$')
        ])
      }),
      payoutvalue: new FormControl(
        { value: this.waletAmountUsd, disabled: true },
        [Validators.required]
      )

    });
  }

  cashoutINR() {
    this.criptoWithDrawalForm = new FormGroup({
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1000),
        Validators.max(19999)
      ]),
      personalNumber: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]*$')
      ]),
      ifsc: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/), Validators.minLength(11),
      Validators.maxLength(15)])
    });

  }
  loadWalletsData(apiRes: any) {
    if (apiRes == undefined) {
      this.storeSub = this.store.select("cashierState").subscribe(
        (cashierState: CashierState) => {
          if (cashierState.balance) {
            this.walleteInfo = cashierState.balance.values;
            if (this.walleteInfo)
              this.loadWalletsData(this.walleteInfo);
            for (let wallete of this.walleteInfo) {
              if (wallete.preferred === true) {
                this.preferredBalance = wallete;
                let totalbalance = wallete.cash.value + wallete.bonus.value;
                this.balance = Number(totalbalance.toString().split(".")[0]);
                break;
              }
            }
          }
          else {
            // ERROR POPUP
          }
        }
      );
    }
    if (this.wattetType == "INR") {
      this.prefCurrency = this.commonUtilSer.loadAppPreferredCurrency(apiRes);
      let availableForPayoutblc = this.commonUtilSer.loadCashbalanceBasedOnCurrency(apiRes, this.prefCurrency, "cash");
      this.availableForPayout = availableForPayoutblc.toString().split(".")[0];
    } else {
      // if (apiRes) {
      //   for (let i = 0; i < apiRes.length; i++) {
      //     if (apiRes[i].wallet.name == "USD") {
      //       if (apiRes[i].cash.value != 0) {
      //         this.availableForPayout = apiRes[i].cash.value 
      //       } else {
      //         this.availableForPayout = 0; 
      //       }
      //     }
      //   }
      // }
    }
  }
  paumoutA() {
    this.payoutamount = [];
    if (this.wattetType == "USD") {
      this.selecteddata = '';
    } else {
      this.playerSer.CHPValueJson().subscribe((data: any) => {
        if (data) {
          this.payoutamount = data;
          this.changeAmtVal(this.payoutamount[0]);
          this.selecteddata = this.payoutamount[0];
        }
      });

    }
  }
  changeAmtVal(value: any) {
    this.selecteddata = value.toString().replace(/,/g, '');
    if (Number(this.availableForPayout) >= Number(this.selecteddata)) {

    } else if (Number(this.availableForPayout) < Number(value)) {

    } else {
    }
  }
  userBalance() {
    this.storeSub = this.store.select("cashierState").subscribe(
      (cashierState: CashierState) => {
        if (cashierState.balance) {
          this.walleteInfo = cashierState.balance.values;
          if (this.walleteInfo)
            this.loadWalletsData(this.walleteInfo);
          for (let wallete of this.walleteInfo) {
            if (wallete.symbol == '$' || wallete.wallet.name == "USD") {
              this.waletAmountUsd = wallete.cash.value || 0;
            }
            if (wallete.preferred === true) {
              this.preferredBalance = wallete;
              let totalbalance = wallete.cash.value + wallete.bonus.value;
              this.balance = Number(totalbalance.toString().split(".")[0]);
              break;
            }
          }
        }
      }
    );

  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  selectCurrency(currency: string) {
    if (currency == "TRX") {
      this.CryptopricesLoader = true;
      this.playerSer.getCryptoPrices().subscribe({
        next: (data) => {
          this.CryptopricesLoader = false;
          this.Cryptoprices = data;
        }
      });
    } else {
      this.Cryptoprices = 1;
    }
    if (currency === 'USDT') {
      this.selectedCurrency1 = 'USDT (TRC20)';
    } else if (currency === 'bsc') {
      this.selectedCurrency1 = 'bsc'; // Correct label for BSC
    } else {
      this.selectedCurrency1 = 'TRX (TRC20)';
    }
    this.selectedCurrency = currency;
    this.isDropdownOpen = false;
    if (this.usdForm) {
      const cashoutsendGroup = this.usdForm.get('cashoutsend');
      if (cashoutsendGroup) {
        cashoutsendGroup.get('usdtAddressType')?.setValue(currency);
        cashoutsendGroup.get('usdtAddressType')?.markAsTouched();
      }
    }
    this.validateAddressLive();
  }
  withdraw() {
    this.apiLoader = true;
    this.resetError();
    const amount1 = this.usdForm.get(['cashoutsend', 'amount'])?.value;
    var userAmount = this.wattetType == 'USD' ? this.waletAmountUsd : this.availableForPayout
    if (amount1 > userAmount) {
      this.showAmountError = true;
      this.apiLoader = false;

      return;
    }
    let amount: any = this.wattetType === "INR" ? this.selecteddata : this.usdForm.value.cashoutsend.amount;
    let availablePayout = userAmount;
    if (Number(amount) <= 0) {
      this.messageService.success(
        'Success',
        "Amount can't be zero"
      );
    } else if (Number(amount) <= Number(availablePayout)) {

      let formToSubmit = this.wattetType === "USD" ? this.usdForm : this.criptoWithDrawalForm;
      if (this.wattetType === "USD") {
        const body = {
          ...formToSubmit.value.cashoutsend,
          email: formToSubmit.value.cashoutsend.email || this.ussdemail,
          usdtAddress: formToSubmit.value.cashoutsend.usdtAddress || 'xxxxxxxxxx',
          currency: this.wattetType,
          paymentMethod: (this.selectedCurrency === 'TRX') ? '347' : '343'
        };

        this.store.dispatch(new cashierActions.CashierGetBalanceStart());
        this.playerSer.playerWithdraw(body)
          .subscribe(
            (apiRes: any) => {
              this.historyloader = false;
              this.apiLoader = false;
              if (!apiRes.success) {
                let errorMessage = "Unknown error";
                if (apiRes['description'] === 'error' || apiRes["code"] === 'error') {
                  errorMessage = apiRes['description'];
                } else if (apiRes['description'] == 'No session descriptor found') {
                  this.isError = true;
                  errorMessage = "Session expired please login";
                } else if (apiRes.description.includes("The field 2 of")) {
                  errorMessage = "5000"
                } else {
                  errorMessage = apiRes['description'] ? apiRes["description"] : errorMessage;
                }
                this.messageService.error(
                  'Failed',
                  errorMessage
                );
              } else {
                this.store.dispatch(new cashierActions.CashierGetBalanceStart());
                this.profile1();
                if (apiRes.result) {
                  this.AmountUSD = ''
                  if (apiRes.result['comments'] == 'ADDRESS_UPDATED') {
                    setTimeout(() => {
                      this.messageService.success(
                        'Success',
                        "Your Cashout USDT address has been updated to NEW address with current one"
                      );
                    }, 6000);
                    this.messageService.success(
                      'Success',
                      "Your cash out request will be processed within 4 hours."
                    );
                  } else {
                    this.messageService.success(
                      'Success',
                      "Your cash out request will be processed within 4 hours."
                    );
                  }

                }
              }
            },
            (err) => {
              var errormaggage = err.statusText === 'error' ? 'This email is used by another user' : err.statusText
              this.messageService.error(
                'Failed',
                errormaggage
              );

            }
          );
      } else if (this.wattetType === "INR") {

        for (let i = 0; i < this.payoutamount.length; i++) {
          if (this.payoutamount[i] == this.selecteddata) {
          } else {
          }
        }
        formToSubmit.value.cashoutsend1.amount = String(this.selecteddata);
        formToSubmit.value.cashoutsend1.currency = this.wattetType;
        formToSubmit.value.cashoutsend1.paymentMethod = this.paymentNewMethod;
        this.playerSer.playerWithdraw(formToSubmit.value.cashoutsend1)
          .subscribe(
            (apiRes) => {
              this.historyloader = false;

              if (!apiRes.success) {
                let errorMessage = "Unknown error";
                if (apiRes['description'] === 'error' || apiRes["code"] === 'error') {
                  this.messageService.success(
                    'Success',
                    apiRes['description']
                  );
                } else if (apiRes['description'] == 'No session descriptor found') {
                  this.messageService.success(
                    'Success',
                    "Session expired please login"
                  );
                } else {
                  this.messageService.success(
                    'Success',
                    apiRes['code'] ? apiRes["code"] : errorMessage
                  );
                }
                this.setError(errorMessage);
              } else {
                this.store.dispatch(new cashierActions.CashierGetBalanceStart());
                this.profile1();
                this.messageService.success(
                  'Success',
                  "Your cashout request will be processed soon."
                );
              }
            },
            (err) => {
              this.messageService.success(
                'Success',
                err.statusText === 'error' ? 'This email is used by another user' : err.statusText
              );

            }
          );
      }
    } else {
      this.messageService.error(
        'Failed',
        "Amount can't be less than your balance"
      );
    }
  }
  profile1() {
    this.storeSub = this.store.select("playerState").subscribe(
      (playerState: ProfileState) => {
        if (playerState.profile) {
          if (playerState.profile.success == true) {
            this.profile = playerState.profile;
            if (this.profile) {
              this.ussdemail = this.profile.email;

              if (this.usdForm) {
                const usdEmailControl = this.usdForm.get('cashoutsend.email');
                if (usdEmailControl) {
                  usdEmailControl.setValue(this.profile.email);
                }

                const usdAddressControl = this.usdForm.get('cashoutsend.usdtAddress');
                if (usdAddressControl) {
                  if (this.profile.ssn == "xxxxxxxxxx") {
                    usdAddressControl.setValue('');
                  } else {
                    usdAddressControl.setValue(this.profile.ssn);
                  }
                }
              }

              if (this.walletFormVOUCHER) {
                this.walletFormVOUCHER.patchValue({
                  email: this.profile.email
                });
                console.log(this.walletFormVOUCHER);
              }

              if (this.criptoWithDrawalForm) {
                const chpEmailControl = this.criptoWithDrawalForm.get('cashoutsend1.email');
                if (chpEmailControl) {
                  chpEmailControl.setValue(this.profile.email);
                }

                const chpAddressControl = this.criptoWithDrawalForm.get('cashoutsend1.usdtAddress');
                if (chpAddressControl) {
                  chpAddressControl.setValue(this.profile.ssn);
                }
              }
            }
          }
        }
      }
    )
    this.store.dispatch(new playerActions.PlayerGetProfile());

  }
  resetError() {
    this.isError = false;
    this.errMsg = "";
  }
  phonenum(event: any) {
    var k;
    k = event.charCode;
    return (k >= 48 && k <= 57);
  } checkMaxAmount() {
    const amountControl = this.criptoWithDrawalForm.get('amount');
    if (amountControl) {
      const value = Number(amountControl.value);
      // if (value > 50000) {
      //   amountControl.setValue('');
      // }
    }
  }
  Accontnumber(event: any) {
    var k;
    k = event.charCode;
    return (k >= 48 && k <= 57);
  }
  accountName(event: any) {
    var k = event.charCode;
    return (
      (k >= 65 && k <= 90) ||   // A–Z
      (k >= 97 && k <= 122) ||  // a–z
      k === 32                  // space
    );
  }
  validateAmount() {
    const amountCtrl: any = this.usdForm.get('cashoutsend.amount')
    const enteredAmount = amountCtrl.value;
    if (enteredAmount > this.waletAmountUsd) {
      this.showAmountError = true;
      amountCtrl.setValue(null);
      amountCtrl.markAsTouched();
    } else {
      this.showAmountError = false;
    }
  }
  amountEnter(event: any) {
    var k = event.charCode;
    return (k >= 48 && k <= 57) || k === 8;
  }

  transfer() {
    this.apiLoader = true;
    let num = this.transferChipForm.value.amount;
    let amountno = num;
    var userAmount = this.wattetType == 'USD' ? this.waletAmountUsd : this.availableForPayout

    if (amountno <= 0) {
      this.messageService.error(
        'Failed',
        "Amount can't be zero "
      );
    } else if (amountno <= userAmount) {
      this.historyloader = true;
      this.resetError();
      // this.transferChipForm.value.amount = String(a);
      const body = {
        nickname: this.transferChipForm.value.nickname,
        message: this.transferChipForm.value.message,
        amount: this.transferChipForm.value.amount,
        franc: this.transferChipForm.value.franc,
        walletCCode: this.walletCCode
      }
      this.playerSer.makeP2PTransfer(body)
        .subscribe((data: any) => {
          this.ptoptransferhanle(data);
        }, (err: any) => {
          this.setError(err.statusText);
        })
    } else {
      this.messageService.error(
        'Failed',
        "Amount can't be less than with your balance"
      );
      this.apiLoader = false;

    }
  }
  ptoptransferhanle(data: any) {
    this.apiLoader = false;

    if (data && data.success) {
      this.store.dispatch(new cashierActions.CashierGetBalanceStart());
      this.transferChipForm.get("nickname")?.reset();
      this.transferChipForm.get("amount")?.reset();
      this.transferChipForm.get("message")?.reset();
      this.messageService.success(
        'Success',
        "Transfer successfull"
      );
    } else if (data.description == 'USER_IS_LOCKED') {
      this.messageService.error(
        'Failed',
        "User is locked"
      );
    }
    else {
      let errormsg = "code" in data ? data["description"] : "Unknown error"
      this.messageService.success(
        'Success',
        errormsg
      );
    }
  }

  openwith() {
    this.WithdrawsResponse = []
    this.playerSer.onCashierGetOpenWithdrawRequest().subscribe((data: any) => {
      this.hideLoader()
      if (data && data.success) {
        this.WithdrawsResponse = data.withdrawsResponses;
      } else {
        this.errMsg = "No pending withdrawals"
      }
    })
  }

  cancelwithdrawal(data: any) {
    this.loadingId = data;
    let body = {
      "cashoutId": data
    }
    this.playerSer.onCashierCancelWithdrawRequest(body).subscribe((data: any) => {
      this.apiLoader = false;
      this.loadingId = null;
      console.log(data)
      if (data.success) {
        this.store.dispatch(new cashierActions.CashierGetBalanceStart());

        this.messageService.success(
          'Success',
          " You have successfully reversed your cashout and balance was added to wallet"
        );
        this.openwith()
      } else {
        this.messageService.success(
          'Success',
          data.description
        );

      }
    })
  }




  enterAMountChi(event: any) {
    var k = event.charCode;
    return (k >= 48 && k <= 57) || k === 8;
  }
  allowIFSCInput(event: KeyboardEvent) {
    const allowed = /^[A-Za-z0-9]$/;

    if (!allowed.test(event.key)) {
      event.preventDefault();
    }
  }

  toUppercaseIFSC() {
    const ctrl = this.criptoWithDrawalForm.get('ifsc');
    if (ctrl) {
      ctrl.setValue(ctrl.value.toUpperCase(), { emitEvent: false });
    }
  }
  validateAddressLive() {
    this.errMsg = '';
    if (!this.usdForm) return;
    const addressControl = this.usdForm.get('cashoutsend.usdtAddress');
    const address = addressControl?.value;
    if (!address) {
      return;
    }
    if (this.selectedCurrency) {
      const currencyLower = this.selectedCurrency.toLowerCase();
      if (currencyLower === 'usdt' || currencyLower === 'trx') {
        if (!/^T/i.test(address)) {
          this.errMsg = 'Not a valid TRC20 address';
        }
      } else if (currencyLower === 'bsc') {
        if (!/^0/.test(address)) {
          this.errMsg = 'Not a valid BEP20 address';
        }
      }
    }
  }
}