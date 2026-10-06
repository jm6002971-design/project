import { RecaptchaModule, RecaptchaFormsModule, RecaptchaComponent } from 'ng-recaptcha';
import { Component, Output, EventEmitter, OnInit, OnDestroy, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { tap, filter } from 'rxjs/operators';

// State imports
import * as appState from '../../core/appstates/appState';
import * as loginActions from '../../core/appstates/loginstates/loginActions';
import { LoginState } from '../../core/appstates/loginstates/loginState';

// Services
import { MessageService } from '../../reusables/message/message.service';
import { LoginService } from '../../core/services/login/login.service';
import { RegisterComponent } from '../register/register';

//Web3Auth
import { Web3Auth } from "@web3auth/modal";
import { WEB3AUTH_NETWORK } from "@web3auth/base";
import { ethers } from "ethers";

interface LoginForm {
  username: string;
  password: string;
}

interface ForgetPasswordForm {
  username: string;
  email: string;
}

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RecaptchaModule,
    RecaptchaFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();
  @Input() formState: string = 'LOGIN';
  isMobile = window.innerWidth <= 767;
  @ViewChild("AutoFocusLoginUsername") AutoFocusLoginUsername!: ElementRef;
  @ViewChild("AutoFocusForgetUsername") AutoFocusForgetUsername!: ElementRef;
  loginForm: FormGroup;
  forgetPasswordForm: FormGroup;
  isLoading = false;
  error: string | null = null;
  passwordVisible = false;
  isVisible = false;
  showForget: Boolean = false;
  isWeb3Initted: Boolean = false;
  willOpenGameId: string = "";
  rememberMe = false;
  captchaRobot: any;
  FormOpenStr: string = 'LOGIN';
  login = {
    username: '',
    password: ''
  };

  frogetPassword = {
    username: '',
    email: ''
  };
  loaderKey = Date.now();
  btnDisabled: boolean = true;
  @ViewChild(RecaptchaComponent, { static: false }) recaptcha!: RecaptchaComponent;

  private subscriptions = new Subscription();
  @ViewChild('alertHost', { read: ViewContainerRef }) alertHost!: ViewContainerRef;
  responseLoader:boolean = false;
  private closeSub!: Subscription;
  web3auth!:any;
  provider: any;
  userDetails: any;
  walletAddress: any;
  constructor(
    private store: Store<appState.AppState>,
    private fb: FormBuilder,
    private messageService: MessageService,
    private loginService: LoginService,
    private componentFactoryResolver: ComponentFactoryResolver,

  ) {
    this.loginForm = this.createLoginForm();
    this.forgetPasswordForm = this.createForgetPasswordForm();
  }

  ngOnInit(): void {
    // this.initWeb3()
    this.isVisible = true
    this.FormOpenStr = this.formState || 'LOGIN';
    this.setupSubscriptions()
    if (this.rememberMe) {
      const savedUsername = localStorage.getItem('lcUserName');
      const savedPassword = localStorage.getItem('lcPassword');
      if (savedUsername) this.login.username = savedUsername;
      if (savedPassword) this.login.password = savedPassword;
    }
    // this.loadRecaptcha();

  }
  // loadRecaptcha() {
  //   const script = document.createElement('script');
  //   script.src = 'https://www.google.com/recaptcha/api.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  // }

  async initWeb3() {
    console.log("Into The Init") 
    // const clientId = "BAz24EFu6DNIYStvi15y5yS1zwWUKXeYqku3MjTmEfFBawLobF8icFOOf7ooEeZkyjeRTYmO4l4B80rsjCw2d_Q"; //staging
    const clientId = "BLmHtl0r63koZ2t9O2hsUdbmJ6OtFziZwaK5yXzl4_YsutCpOVSLr_aHEQU8ZY2ygTCfudwb9_mKPuDGcIQmyN8"; // live
    this.web3auth = new Web3Auth({
      clientId,
      web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET, 
    } as any); 
   
    if ((this.web3auth.status !== "connected") && (this.web3auth.status !== "ready") &&  (this.web3auth.status !== "errored") ) {
      // await web3auth.initModal();
      
      await this.web3auth?.init(); 
      this.web3auth.on("connected",(connected:any)=>{ 
        this.isWeb3Initted = true
      })
      // this.web3auth.on("ready",(connected)=>{
      //   console.log(connected)
      //   this.isWeb3Initted = true
      // })
    } else {
      console.log("🚫 Web3Auth already initialized");
    }

    if (this.web3auth.connected) {
      this.provider = this.web3auth.provider;
      console.log("✅ Already connected", this.provider);
    }
    if (!sessionStorage.getItem("sessionId")) {
      this.logout()
    }
  }

  ngAfterViewInit() {
    // this.onInitAutoFocusToUsername()
  }
  // onInitAutoFocusToUsername() {
  //   if (this.AutoFocusLoginUsername) {
  //     setTimeout(() => {
  //       this.AutoFocusLoginUsername.nativeElement.focus()
  //     }, 0)
  //   }
  // }

  // onAutoFocusToForgetUsername() {
  //   if (this.AutoFocusForgetUsername) {
  //     setTimeout(() => {
  //       this.AutoFocusForgetUsername.nativeElement.focus()
  //     }, 0)
  //   }
  // }
sanitizeAlphaNumeric(event: Event, controlName: string) {
  const input = event.target as HTMLInputElement;

  const value = input.value.replace(/[^A-Za-z0-9]/g, '');

  input.value = value;

  this.loginForm.get(controlName)?.setValue(
    value,
    { emitEvent: false }
  );
}
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private createLoginForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required,  Validators.minLength(6), Validators.maxLength(15), Validators.pattern(/^\S*$/)]],
      gReCaptchaResponse: ['',[(Validators.required)]]

    });
  }

  private createForgetPasswordForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern('[a-zA-Z0-9]*')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
    });
  }

  private setupSubscriptions(): void {
    // Login service subscription
    const loginServiceSub = this.loginService.showLogin$.subscribe(state => {
      this.willOpenGameId = state.gameId;

      if (state.status) {
        this.resetForm();
        this.loadRememberedCredentials();
      }
    });

    // Store subscription for login state
    const storeSub = this.store.select("loginState").pipe(
      filter(loginState => this.isRelevantLoginAction(loginState.lastAction)),
      tap(loginState => this.handleLoginState(loginState))
    ).subscribe();
    console.log(storeSub)
    this.subscriptions.add(loginServiceSub);
    this.subscriptions.add(storeSub);
    console.log(this.subscriptions)
  }

  private isRelevantLoginAction(lastAction: string): boolean {
    return ['LOGIN_START', 'LOGIN_SUCCESS', 'LOGIN_FAIL'].includes(lastAction);
  }

  private handleLoginState(loginState: LoginState): void {
    this.isLoading = loginState.loading;

    if (loginState.lastAction === 'LOGIN_SUCCESS' && loginState.loginResponse) {
      this.handleLoginSuccess(loginState.loginResponse);
    } else if (loginState.lastAction === 'LOGIN_FAIL') {
      this.handleLoginFailure(loginState);
    }
  }

  private handleLoginSuccess(loginResponse: any): void {
    if (loginResponse.success) {
      this.handleSuccessfulLogin();
    } else {
      // this.handleFailedLogin(loginResponse.description || 'Login failed');
    }
  }

  private handleSuccessfulLogin(): void {
    this.persistCredentials();
    // this.messageService.success('Authentication', 'Login successful' );
    this.hideLoader();
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.onClose();
  }

  private handleFailedLogin(errorMessage: string): void {
    this.messageService.error('Authentication', errorMessage );
    this.error = errorMessage;
  }

  private handleLoginFailure(loginState: LoginState): void { 
 
    const errorMessage = loginState.loginErrorResponse?.message || 'Login error occurred';
    this.messageService.error('Authentication', errorMessage );
    this.error = errorMessage;
  }

  private resetForm(): void {
    this.loginForm.reset();
    this.forgetPasswordForm.reset();
    this.error = null;
    this.isLoading = false;
  }

  private loadRememberedCredentials(): void {
    try {
      const loginDetails = localStorage.getItem('loginDetails');
      if (loginDetails) {
        const parsed = JSON.parse(loginDetails);
        if (parsed?.loginName) {
          this.rememberMe = true;
          this.loginForm.patchValue({ username: parsed.loginName });
        }
      }
    } catch (error) {
      console.error("Invalid loginDetails in localStorage", error);
      this.clearInvalidCredentials();
    }
  }

  private clearInvalidCredentials(): void {
    localStorage.removeItem('loginDetails');
  }

  private persistCredentials(): void {
    if (this.rememberMe) {
      localStorage.setItem('loginDetails', JSON.stringify({
        loginName: this.loginForm.value.username
      }));
    } else {
      this.clearInvalidCredentials();
    }
  }

  // Public methods
  onClose(): void {
    this.isVisible = false
    this.loginService.closeLogin();
    this.close.emit();
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
  resolved(token: any) {
    this.captchaRobot = token;
  
    this.loginForm.patchValue({
      gReCaptchaResponse: token
    });
  
    this.btnDisabled = false;
  }
  
  onSubmitLogin(): void {

    if (this.loginForm.invalid) {
      this.markFormAsTouched();
      return;
    }
  
    this.error = null;
    this.isLoading = true;
  
    const formValue = this.loginForm.value;
  
    if (this.rememberMe) {
      localStorage.setItem('rpUserName', formValue.username);
      localStorage.setItem('rpPassword', formValue.password);
    } else {
      localStorage.removeItem('rpUserName');
      localStorage.removeItem('rpPassword');
    }
  
    this.store.dispatch(new loginActions.LoginStart({
      login: formValue.username,
      password: formValue.password,
      gReCaptchaResponse: formValue.gReCaptchaResponse
    }));
  }
  

  onSubmitForget(): void {
    if (this.forgetPasswordForm.invalid) {
      this.markForgetFormAsTouched();
      return;
    }
    const formValue: ForgetPasswordForm = this.forgetPasswordForm.value;
    let body = {
      email: formValue.email,
      login: formValue.username
    }
    // this.store.dispatch(new loginActions.ForgotPasswordStart({
    //   email: formValue.email,
    //   login: formValue.username
    // }))
    this.loginService.onForgotPassword(body).subscribe((data: any) => {
      console.log(data)
      if (data) {
        if (data && data.success) {
          this.messageService.success('Reset Password', 'Temporary password has sent to your email, Please login and update the password immediately.' );
          this.loginService.closeLogin();
          this.close.emit();
        } else {
          this.messageService.error('Authentication', data.description );

        }
      }
    })
  }

  private markFormAsTouched(): void {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      if (control?.invalid) {
        control.markAsDirty();
        control.markAsTouched();
      }
    });
  }

  private markForgetFormAsTouched(): void {
    Object.keys(this.forgetPasswordForm.controls).forEach(key => {
      const control = this.forgetPasswordForm.get(key);
      if (control?.invalid) {
        control.markAsDirty();
        control.markAsTouched();
      }
    });
  }

  onRemember(): void {
    this.rememberMe = !this.rememberMe;
  }

  showForgetForm() {
    this.showForget = !this.showForget
    if (this.showForget) {
      // this.onAutoFocusToForgetUsername()
      this.loginForm.reset()
    } else {
      // this.onInitAutoFocusToUsername()
    }
  }

  openRegister(): void {
    this.loginService.closeLogin();
    this.loginService.openRegister();
  }

  handleModalClick(event: Event) {
    if (event.target === event.currentTarget) {
      // alert(123)
      this.isVisible = false
      this.loginService.closeLogin();
      this.close.emit();
    }
  }

  handleCaptcha(token: string | null) {
    console.log('recaptcha token:', token);
  }

  removeSpaces(event: any) {
    const input = event.target;
    input.value = input.value.replace(/\s/g, ''); // Remove spaces from the input field
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get email() {
    return this.forgetPasswordForm.get('email');
  }

  get forgetUsername() {
    return this.forgetPasswordForm.get('username');
  }
  showPopUp(value: string) {
    if (value === "REGISTER") {
      this.isVisible = false;
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

  async openToLogin(loginProvider: string, authType = "") {
    console.log(this.web3auth);
    
    if ((this.web3auth.status !== "connected") && (this.web3auth.status !== "ready") ) {
      console.error("Web3Auth not initialized");
      return;
    }

    console.log(loginProvider, this.web3auth)
    if (this.web3auth.connected) {
      await this.web3auth.logout()
      console.log("Logged Out")
    }

    // Ensure Web3Auth is fully initialized
    // await this.web3auth.init();
    console.log("Init Finished");
    // await this.web3auth.connect();
    let loginDetails: any;
    console.log("Connect Called");
    
    if (authType === "auth") {
      console.log()
      this.isVisible = false
      this.provider = await this.web3auth.connectTo("auth", { authConnection: loginProvider });
    } else {
      this.provider = await this.web3auth.connect();
    } 
    // this.showLoader();

    this.userDetails = await this.web3auth.getUserInfo();
    if (this.userDetails.authConnection) {
  this.showLoader();
      let body = {
        "type": 'social',
        "params": {
          provider: this.userDetails.authConnection,
          idToken: this.userDetails.idToken,
          email: this.userDetails.email || (this.userDetails.name).replaceAll(" ","") + "@rajpoker.com"
        }
      }
      this.loginService.WebAuthVerify(body).subscribe((res: any) => {
        console.log(res)
        if (res?.register) {
          this.registerUsingWeb3()
        } else if (res.sessionId) {
        this.hideLoader()

          let body: any = {
            success: true,
            sessionId: res.sessionId
          }
          this.store.dispatch(new loginActions.LoginSuccess(body));
        }else{
          this.messageService.error('Authentication', res.description );
          
        }
      }, (err: any) => {
        this.logout()
        this.hideLoader()
        this.messageService.error('Authentication', 'Internal error');

      })

    } else {
      this.loginService.GetNonce().subscribe((res: any) => {
        console.log(res)
        this.hideLoader()

        this.getAccounts(res.nonce);
        // this.getAccounts("b7a65495");
      }, (err: any) => {
        this.logout()
        this.hideLoader()

      })
    }

    // Fetch user details if logged in directly

  }

  async getAccounts(nonce: any) {
    if (!this.provider) return;
    const ethersProvider = new ethers.BrowserProvider(this.provider);
    console.log(ethersProvider);
    // let nonce

    // console.log(nonce)
    const signer = await ethersProvider.getSigner();
    const signature = await signer.signMessage(nonce)
    
this.showLoader()
    this.walletAddress = await signer.getAddress();
    console.log("🪪 Wallet Signature:", signature);
    console.log("🪪 Wallet Address:", this.walletAddress);
    let body = {
      "type": 'wallet',
      "params": {
        address: this.walletAddress,
        signatureHex: signature,
        message: nonce
      }
    }
    this.loginService.WebAuthVerify(body).subscribe((res: any) => {
      console.log(res)
      if (res.register) {
        this.registerUsingWeb3()
      } else if (res.sessionId) {
        this.hideLoader()
        let body: any = {
          success: true,
          sessionId: res.sessionId
        }
        this.store.dispatch(new loginActions.LoginSuccess(body));
      }
    }, (err: any) => {
      console.log(err);
      // this.logout()
      
    })
  }
  registerUsingWeb3() {
    this.store.dispatch(new loginActions.RegisterStart(
      {
        "login": this.userDetails?.name?.slice(0, 15).replaceAll(" ","") || "",
        "nickname": this.userDetails?.name?.slice(0, 4).replaceAll(" ","")|| "",
        "email": this.userDetails?.email || "",
        "firstName": this.userDetails?.name?.slice(0, 15).replaceAll(" ","") || "",
        "lastName": this.userDetails?.name?.slice(0, 15).replaceAll(" ","") || "",
        "password": "123456",
        "campaignCode": '',
        // "wmReferenceId": (this.wmReferenceId) || '',
        // // "googleUser": this.autoGenerateEnable,
        // // "googleUser": this.googleSSO ? true : false,
        // "googleUser": true,
        "referralType": '',
        // "promocode": this.register.promocode || "",
        "address": {
          "country": 364
        },
        "walletAddress": this.walletAddress || "",
      },
    ));
    this.hideLoader()

  }

  async logout() {
  this.hideLoader()

    if (!this.web3auth) return;
    await this.web3auth.logout();
    this.provider = null;
    console.log("👋 Logged out");
  }
  showLoader() {
    this.loaderKey = Date.now(); // 🔥 force gif reload
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
  }
}