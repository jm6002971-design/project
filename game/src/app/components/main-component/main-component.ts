import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer-component/footer-component";
import { Store } from '@ngrx/store';
import { AppState } from '../../core/appstates/appState';
import { LoginComponent } from '../../auth/login/login';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription, distinctUntilChanged, filter, map } from 'rxjs';
import * as loginActions from '../../core/appstates/loginstates/loginActions'
import { RegisterComponent } from '../../auth/register/register';
import { PlayerService } from '../../core/services/player/player.service';
import { CashierService } from '../../core/services/cashier/cashier.service';
import * as cashierActions from "../../core/appstates/cashierstates/cashierActions";
import { CashierState } from '../../core/appstates/cashierstates/cashierState';
import { MessageService } from '../../reusables/message/message.service';
import { GameCmsService } from '../../core/services/games_cms/game-cms.service';
import { environment } from '../../../environments/environment';
import { CommonUtilService } from '../../core/services/common/commonutil.service';
import { WalletInfo } from '../../core/modules/cashier/balance';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare const getUsername: any;
@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule, FooterComponent, FormsModule, RouterModule],
  templateUrl: './main-component.html',
  styleUrls: ['./main-component.css']
})
export class MainComponent {
  walleteInfo!: WalletInfo[];
  selectedAvatarId: any;
  isLoading: boolean = false;
  currentRoute = '';
  mainMenu = [
    // { name: 'VIP Point', icon: 'vip_points_icon.svg', alt: 'VIP', route: null },
    { name: 'Home', icon: 'home_icon.svg', alt: 'Home', route: 'home' },
    { name: 'My Account', icon: 'dashboard_icon.svg', alt: 'My Account', route: 'myaccount' },
    { name: 'Tournaments', icon: 'tournaments_icon.svg', alt: 'Tournaments', route: 'tournaments' },
    { name: 'Live Casino', icon: 'Live-casino-icon.png', alt: 'Live Casino', route: 'live-casino', providers: ['evolutiongv', 'ezugigv', 'pragmaticplaylivecasino', 'vivogaming'] },
    { name: 'Sports', icon: 'Sports-icon.png', alt: 'Sports', route: 'sports', providers: ['bti'] },
    { name: 'Slots', icon: 'slot-icon.png', alt: 'Slots', route: 'slots' },
    { name: 'Crash', icon: 'crash-icon.png', alt: 'Crash', route: 'crash', providers: ['aviatrix', 'spribe'] },
    // { name: 'Crash Games', icon: 'featured.svg', alt: 'Indian Games', route: 'indiangames', providers: ['ballagames'] },
    { name: 'Promotions', icon: 'promotion.svg', alt: 'promotion', route: 'promotion' },
    { name: 'Leaderboards', icon: 'vip_points_icon.svg', alt: 'Leaderboards', route: 'leaderboard' },
  ];
  dashboardMenu = [
    { name: 'Home', icon: 'home_icon.svg', alt: 'Home', route: 'home' },
    { name: 'Profile', icon: 'user-tick.svg', alt: 'profile', route: 'myaccount/profile' },
    { name: 'Bank', icon: 'bank.svg', alt: 'bank', route: 'myaccount/bank' },
    { name: 'Cashier', icon: 'card-pos.svg', alt: 'cashier', route: 'myaccount/payments' },
    { name: 'Balance', icon: 'balance.svg', alt: 'Balance', route: 'myaccount/balance' },
    { name: 'Currency Exchange', icon: 'exchange.svg', alt: 'currency', route: 'myaccount/exchange' },
    { name: 'Rake Back', icon: 'rakeback.svg', alt: 'rakeback', route: 'myaccount/rakeback' },
    // { name: 'Poker History', icon: 'poker.svg', alt: 'Poker', route: 'myaccount/pokerhistory' },
    // { name: 'Casino History', icon: 'casino_history.svg', alt: 'Casino', route: 'myaccount/casinohistory' },
    // { name: 'Transactions', icon: 'transaction.svg', alt: 'transactions', route: 'myaccount/transaction' },
    // { name: 'PtoP Transfer', icon: 'ptop.svg', alt: 'PtoP', route: 'myaccount/ptoptransfer' },
    { name: 'History', icon: 'history.svg', alt: 'history', isHistoryToggle: true }
  ];
  historyMenu = [
    { name: 'Poker History', icon: 'poker.svg', alt: 'Poker', route: 'myaccount/pokerhistory' },
    { name: 'Casino History', icon: 'casino_history.svg', alt: 'Casino', route: 'myaccount/casinohistory' },
    { name: 'Transactions', icon: 'transaction.svg', alt: 'transactions', route: 'myaccount/transaction' },
    { name: 'PtoP Transfer', icon: 'ptop.svg', alt: 'PtoP', route: 'myaccount/ptoptransfer' }
  ];
  showHistoryMenu = false;
  menuItems: any = [];
  menuNames: boolean = false;
  menuMobile: boolean = false;
  playerLoggedIn: boolean = false;
  private storeSub!: Subscription;
  private closeSub!: Subscription;
  loginstate: string = '';
  @ViewChild('alertHost', { read: ViewContainerRef }) alertHost!: ViewContainerRef;
  ProfileName: any;
  INRBalance: any = 0;
  USDBalance: any = 0;
  urlTokenForgot: any;
  urlEventTypeForgot: any;
  errorMessage: any;
  vipPoints: any;
  responseloader: boolean = false;
  playerAvatar: any;
  showAvatarList: boolean = false;
  loginloader: boolean = false;
  loginloader1: boolean = false;
  avtarNotset: any = 'assets/profile_imgs/default_profile.svg';
  avatars: any;
  defaultImageUrl: any;
  showNewpopup: boolean = false;
  newForm1!: FormGroup;
  fieldTextType = false;
  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver, private commonUtilSer: CommonUtilService, public sanitizer: DomSanitizer,
    private PlayerService: PlayerService, private CashierService: CashierService, private messageService: MessageService, private cmsgameservice: GameCmsService
  ) {


    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url.replace('/', '');
        this.menuItems = this.router.url.startsWith('/myaccount')
          ? this.dashboardMenu
          : this.mainMenu;
      });
  }
  ngOnInit() {
    this.store.select("loginState").pipe(
      map(state => state.playerLoggedIn?.loggedIn),
      distinctUntilChanged(),
    )
      .subscribe((loggedIn) => {
        if (loggedIn) {
          this.commonUtilSer.clearPermission();
          this.playerLoggedIn = true;
          this.ProfileCall();
          this.BalanceCall();
          setInterval(() => {
            this.BalanceCall()
          }, 5000)
          this.responseloader = true;
          this.getPlayerAvatar();
        } else {
          this.playerLoggedIn = false;
          this.commonUtilSer.getPlayerProviderList(false).subscribe();
          this.commonUtilSer.getPermission$().subscribe((res: any) => {

            //  if(Object.keys(res).length != 0){
            //   this.filterMenu(res);
            // }
          })
        }
      });

    this.storeSub = this.store
      .select("cashierState")
      .subscribe((cashierState: CashierState) => {
        if (cashierState.balance) {
          if (cashierState.balance.success == true) {
            this.responseloader = false;
            this.walleteInfo = cashierState.balance.values;
            this.USDBalance = cashierState.balance.values.find((ele: any) => ele.wallet.name === "USD")?.cash.value ?? 0
            this.INRBalance = Number(cashierState.balance.values.find((ele: any) => ele.wallet.name === "INR")?.cash.value).toFixed(2) ?? 0

            let vipPointsblc = this.commonUtilSer.loadCashbalanceBasedOnCurrency(this.walleteInfo, "COMPPOINTS", "cash");
            this.vipPoints = vipPointsblc.toString().split(".")[0];
          } else if (cashierState.balance.success == false) {

          }
        }
      });
    const url = new URL(window.location.href);
    this.urlTokenForgot = url.searchParams.get('token');
    this.urlEventTypeForgot = url.searchParams.get('eventType');
    this.urlTokenForgot = sessionStorage.getItem('TokenForgo');
    this.urlEventTypeForgot = sessionStorage.getItem('EventTypeForgot');
    if (url.pathname == '/referrer') {
      setTimeout(() => {
        this.router.navigate(['/home'])
        this.showPopUp('REGISTER')
      }, 1000)
    } else {
      localStorage.removeItem("Referrer")
    }

    if (this.router.url == '/register') {
      setTimeout(() => {
        if (this.playerLoggedIn == false) {
          this.showPopUp('REGISTER')
        } else {
        }
      }, 500);
    }
    if (window.location.pathname == "/activate") {
      if (this.urlEventTypeForgot == 'twoFactor') {
        let payload = {
          "twoFactorToken": this.urlTokenForgot,
        }
        this.PlayerService.twofactorOptin(payload).subscribe((data: any) => {
          this.router.navigate(['/home'])
          if (data['success']) {

            this.errorMessage = "E-mail verified successfully. Happy Playing !!!";

            this.messageService.success('Success',
              "E-mail verified successfully. Happy Playing !!!"
            );
          } else if (data['success'] == false) {
            this.messageService.error('Failed',
              data.description
            );
          }

        })
      }
      if (this.urlEventTypeForgot == 'registration') {
        let payload = {
          "token": this.urlTokenForgot,
          "face": "rajpoker",
          "language": 'en'
        }
        this.PlayerService.verifyAccount(payload).subscribe((data: any) => {
          this.router.navigate(['/home'])
          if (data.description == "INVALID_INPUT_DATA" || data['success'] == true) {
            this.messageService.success('Success',
              "E-mail verified successfully. Happy Playing !!!"
            );
          } else if (data['success'] == false) {
            this.messageService.error('Failed',
              data.description
            );
          }
        })
      }

      if (this.urlEventTypeForgot === "forgotPassword") {
        this.showNewpopup = true;
      }
    }

    if (environment.skinId === 'rajpoker') {
      const wsessiontab = sessionStorage.getItem('raj_wSession');
      if (!this.playerLoggedIn && wsessiontab) {
        const bodyPayload: any = {
          success: true,
          sessionId: wsessiontab,
        };
        this.store.dispatch(new loginActions.LoginSuccess(bodyPayload));
      }
    }

    this.newForm1 = this.fb.group({
      "passwordOne": new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern(/^\S*$/)]),
    })
  }

  filterMenu(permissionMap: any) {

    // this.filterMenuItems = this.menuItems.filter((item:any) =>{
    this.menuItems = this.menuItems.filter((item: any) => {
      if (!item.providers || item.providers.length == 0) {
        return true;
      }

      return item.providers.some((pro: any) => {

        return permissionMap[pro]
      })
    })

  }
  BalanceCall() {
    this.store.dispatch(new cashierActions.CashierGetBalanceStart());
  }
  get passwordOne() {
    return this.newForm1?.get('passwordOne');
  }
  forgotPassword() {
    let body = {
      "token": this.urlTokenForgot,
      "password": this.newForm1.value.passwordOne,
      "eventType": this.urlEventTypeForgot
    }
    this.loginloader = true;
    if (sessionStorage.getItem('redirect') == "/activate") {
      sessionStorage.setItem('redirect', "/home")
    }
    this.PlayerService.resetpasswordNew(body).subscribe((data: any) => {
      // this.Playerservice.onResetPassword(body).subscribe(data=>{
      if (data) {
        this.router.navigate(['/']);
        if (data.success) {
          if (data.sessionId) {

            this.loginloader = false;
            this.showNewpopup = false;
            let bodyPayload: any = {
              showTwoFactorPopup: data.showTwoFactorPopup,
              success: data.success,
              sessionId: data.sessionId,
              twoFAFeature: data.twoFAFeature,
              twoFactor: data.twoFactor
            };
            this.store.dispatch(new loginActions.ResetState());
            this.store.dispatch(new loginActions.LoginSuccess(bodyPayload))
            this.messageService.success('Success',
              data.description + ". Happy Playing !!!"
            );

          }
        } else {
          this.loginloader = false;
          this.showNewpopup = false;
          this.messageService.success('Success',
            data.description
          );
        }
      }
    })
  }

  ProfileCall() {
    this.PlayerService.onPlayerGetProfile().subscribe((resData: any) => {
      if (resData.success) {
        this.ProfileName = resData.nickname

        let body = {
          "role": 0,
          "loginName": resData?.login || ''
        }
        // this.commonUtilSer.getPlayerProviderList(body).subscribe()
        this.commonUtilSer.getPermission$().subscribe((res: any) => {

          // if (Object.keys(res).length != 0) {
          //   this.filterMenu(res);
          // }
        })

        this.messageService.nickname$.subscribe(name => {
          if (name) {
            this.ProfileName = name;
          }
        })
        getUsername(this.ProfileName);
      }
    })
  }
  isActiveRoute(route: string | null): boolean {
    return route ? this.currentRoute === route : false;
  }
  checklogin(name: any) {
    if (this.playerLoggedIn) {
    } else {
      if (name == 'My Account') {
        this.showPopUp('LOGIN')
      }
    }
  }
  closeNewpopup() {
    this.showNewpopup = false;
  }
  MenuClose() {
    if (!this.menuMobile) {
      this.menuNames = !this.menuNames
    }
  }
  mobileMenu() {
    this.menuMobile = !this.menuMobile
  }
  MenuCloseCover() {
    this.menuMobile = false
  }
  clickOnlogOut() {
    this.router.navigate(['/']);
    this.store.dispatch(new loginActions.ResetState());
    this.store.dispatch(new loginActions.LogoutStart());
    setTimeout(() => {
      sessionStorage.clear()
      window.location.reload();
    }, 800);

  }

  showPopUp(value: string) {
    if (value === "LOGIN") {
      this.store.dispatch(new loginActions.ResetState());
      const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
        LoginComponent
      );
      const hostViewContainerRef = this.alertHost;
      hostViewContainerRef.clear();
      const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
      componentRef.instance.formState = value;

      this.closeSub = componentRef.instance.close.subscribe(() => {
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
      });
    } else if (value === "REGISTER") {
      this.store.dispatch(new loginActions.ResetState());

      const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
        RegisterComponent
      );
      const hostViewContainerRef = this.alertHost;
      hostViewContainerRef.clear();
      const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
      componentRef.instance.formState = value;

      this.closeSub = componentRef.instance.close.subscribe(() => {
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
      });
    }
  }
  isMobile(): boolean {
    return window.innerWidth <= 768; // adjust if needed
  }
  navigateMain(route: any) {

    if (route === 'myaccount') {

      if (this.playerLoggedIn) {
        this.router.navigate([route]);
        if (this.isMobile()) {
          this.menuMobile = true;
        } else {
          this.menuMobile = false;
        }

      } else {
        this.showPopUp('LOGIN');
      }

    } else {

      this.router.navigate([route]);
      this.menuMobile = false;
    }

    this.moveToTop();
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
  getSanitizedImageUrl(imageData: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + imageData);
  }
  getPlayerAvatar() {
    this.loginloader1 = true;        // 🔥 START loader

    this.PlayerService.getPlayerAvatar().subscribe(
      (response: any) => {

        if (response.success && response.imageData) {
          this.playerAvatar = `data:image/png;base64,${response.imageData}`;
        } else {
          // success = false → show plus icon
          this.playerAvatar = null;
        }

        this.loginloader1 = false;   // 🔥 STOP loader
      },
      (error: any) => {
        this.playerAvatar = null;
        this.loginloader1 = false;   // 🔥 STOP loader
      }
    );
  }

  setSelectedAvatar() {
    this.loginloader = true;
    let payload = {
      "avatar_id": this.selectedAvatarId
    }
    this.PlayerService.setAvatarListApi(payload).subscribe((data: any) => {
      if (data["status"] === "avatar set successfully") {
        this.getPlayerAvatar();
        this.loginloader = false;
        this.showAvatarList = false;
      } else {
        this.loginloader = false;
      }
    });
  }
  openAvatarList() {
    this.showAvatarList = !this.showAvatarList;
    if (this.showAvatarList) {
      this.getAvatarList();
    }
  }
  closeAvatarList() {
    this.showAvatarList = false;
  }
  getAvatarList() {
    this.PlayerService.getAvatarListApi().subscribe((data: any) => { this.avatarList(data) });
  }
  avatarList(avatars: any[]) {
    this.avatars = avatars;
  }
  setAvatar(avatarId: any) {
    this.selectedAvatarId = avatarId;
  }
  getPlayersAvatars(): SafeResourceUrl {
    if (this.selectedAvatarId) {
      const lastThreeChars = this.selectedAvatarId.slice(-3);
      const totalAvatars = this.avatars;
      for (let avatar of totalAvatars) {
        if (avatar?.id.endsWith(lastThreeChars)) {
          return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + avatar?.imageData);
        }
      }
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.playerAvatar);
  }
  ngAfterViewChecked() {
    // console.clear();
  }
  togglePasswordVisibility() {
    this.fieldTextType = !this.fieldTextType;
  }
  removeSpaces(event: any) {
    const input = event.target;
    input.value = input.value.replace(/\s/g, ''); // Remove spaces from the input field
  }
  trackByRoute(index: number, item: any) {
    return item.route;
  }
  toggleHistory() {
    this.showHistoryMenu = !this.showHistoryMenu;
  }

}
