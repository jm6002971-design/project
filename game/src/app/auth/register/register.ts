import { Component, Output, EventEmitter, OnInit, OnDestroy, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, ValidatorFn, ValidationErrors, AbstractControl, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { tap, filter } from 'rxjs/operators';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

// State imports
import * as appState from '../../core/appstates/appState';
import * as loginActions from '../../core/appstates/loginstates/loginActions';
import { LoginState } from '../../core/appstates/loginstates/loginState';

// Services
import { MessageService } from '../../reusables/message/message.service';
import { LoginService } from '../../core/services/login/login.service';
import { LoginComponent } from '../login/login';
import { ActivatedRoute, Router } from '@angular/router';
import { Web3Auth } from '@web3auth/modal';
import { WEB3AUTH_NETWORK } from '@web3auth/base';
import { ethers } from 'ethers';
import { PlayerService } from '../../core/services/player/player.service';

interface RegisterForm {
  promoCode: any;
  username: string;
  password: string;
  nickname: String;
  email: String;
  firstName: String;
  lastName: String;
  campainCode: String;
  referralType: String;
}

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RecaptchaModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();
  @Input() formState: string = 'REGISTER';
  registerForm: FormGroup;
  isLoading = false;
  error: string | null = null;
  passwordVisible = false;
  isVisible = false;
  willOpenGameId: string = "";
  rememberMe = false;
  FormOpenStr: string = 'REGISTER';
  @ViewChild('alertHost', { read: ViewContainerRef }) alertHost!: ViewContainerRef;
  private closeSub!: Subscription;
  urlof: any;
  reID: any;
  campaignCode: any = 'fd76ab00'
  reType: any;
  register = {
    username: '',
    password: '',
    nickname: '',
    email: '',
    firstName: "",
    lastName: "",
    campainCode: "",
    referralType: "",
    phone: ''
  };
  showOtpBox = false;
  otpVerified = false;
  otpTimer = 60;
  timerInterval: any;
  private subscriptions = new Subscription();
  web3auth!: Web3Auth;
  provider: any;
  userDetails: any;
  walletAddress: any;
  responseLoader: boolean = false;
  btnDisabled: boolean = true;
  loaderKey = Date.now();
  captchaRobot: any;
  isOtpSent: boolean = false;
  constructor(
    private store: Store<appState.AppState>,
    private fb: FormBuilder,
    private messageService: MessageService,
    private loginService: LoginService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router,
    private route: ActivatedRoute,
    private playerservice: PlayerService

  ) {
    this.registerForm = this.createRegisterForm();
  }

  ngOnInit(): void {
    this.FormOpenStr = this.formState || 'REGISTER';
    this.setupSubscriptions()

    this.registerForm.get('phone')?.valueChanges.subscribe(() => {
      this.otpVerified = false;
      this.showOtpBox = false;
    });
    // this.initWeb3()
    let id = localStorage.getItem('referrerId');
    let type = localStorage.getItem('registerType');
    if (id && type) {
      this.reID = id;
      console.log(this.reID)
      this.reType = type;
      this.isVisible = true
    }
    this.urlof = this.router.url.substr(0, this.router.url.indexOf("?"));
    if (this.urlof == '/register') {
      this.route.queryParams.subscribe((params: any) => {
        this.reID = params.ID;
        this.reType = params.type;
        this.isVisible = true
        console.log(this.reID)
      });

      if (this.reID != null) {
        this.store.dispatch(new loginActions.ResetState());
      }
    } else {
      this.isVisible = true

    }


  }
  showLoader() {
    this.loaderKey = Date.now(); // 🔥 force gif reload
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private createRegisterForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[A-Za-z\d]{4,15}$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern(/^\S*$/)]],
      nickname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[A-Za-z\d]{4,15}$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      isConsent: ['', [Validators.required]],
      firstName: [''],
      lastName: [''],
      promoCode: [''],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
    },
      {
        validators: this.usernameNicknameValidator(),
      });
  }
  removeSpaces(event: any) {
    const input = event.target;
    input.value = input.value.replace(/\s/g, ''); // Remove spaces from the input field
  }
  private usernameNicknameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const username = control.get('username')?.value;
      const nickname = control.get('nickname')?.value;
      if (
        username &&
        nickname &&
        username.toLowerCase() === nickname.toLowerCase()
      ) {
        return { usernameNicknameMatch: true };
      }
      return null;
    };
  }
sanitizeAlphaNumeric(event: Event, controlName: string) {
  const input = event.target as HTMLInputElement;

  const value = input.value.replace(/[^A-Za-z0-9]/g, '');

  input.value = value;

  this.registerForm.get(controlName)?.setValue(
    value,
    { emitEvent: false }
  );
}

  private setupSubscriptions(): void {
    // Login service subscription
    const registerServiceSub = this.loginService.showRegister$.subscribe(state => {
      this.willOpenGameId = state.gameId;

      if (state.status) {
        this.resetForm();
        // this.loadRememberedCredentials();
      }
    });

    // Store subscription for login state
    const storeSub = this.store.select("loginState").pipe(
      filter(loginState => this.isRelevantLoginAction(loginState.lastAction)),
      tap(loginState => this.handleRegisterState(loginState))
    ).subscribe();

    this.subscriptions.add(registerServiceSub);
    this.subscriptions.add(storeSub);
  }

  private isRelevantLoginAction(lastAction: string): boolean {
    return ['REGISTER_START', 'REGISTER_SUCCESS', 'REGISTER_FAIL'].includes(lastAction);
  }

  private handleRegisterState(registerState: LoginState): void {
    this.isLoading = registerState.loading;

    if (registerState.lastAction === 'REGISTER_SUCCESS' && registerState.loginResponse) {
      this.handleLoginSuccess(registerState.loginResponse);
    } else if (registerState.lastAction === 'REGISTER_FAIL') {
      this.handleRegisterFailure(registerState);
    }
  }

  private handleLoginSuccess(loginResponse: any): void {
    if (loginResponse.success) {
      this.handleSuccessfulRegister(loginResponse);
    } else {
      this.handleFailedLogin(loginResponse.description || 'Register failed');
    }
  }

  private handleSuccessfulRegister(Data: any): void {
    localStorage.removeItem('registerType')
    localStorage.removeItem('referrerId')
    this.persistCredentials();
    console.log(Data)
    if (Data?.success && Data?.loginResponse?.sessionId) {
      this.messageService.success('Authentication', 'You are Registered, Happy Playing');
    } else if (Data?.success && Data?.description == 'Email confirmation required') {
      this.messageService.success('Authentication', 'Please Wait for the email confirmation and verify');

    }
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.onClose();
  }

  private handleFailedLogin(errorMessage: string): void {
    this.messageService.error('Authentication', errorMessage);
    this.error = errorMessage;
  }

  private handleRegisterFailure(loginState: LoginState): void {
    const errorMessage = loginState.loginErrorResponse?.message || 'Register error occurred';
    this.messageService.error('Authentication', errorMessage);
    this.error = errorMessage;
    localStorage.removeItem("Referrer")
  }

  private resetForm(): void {
    this.registerForm.reset();
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
          this.registerForm.patchValue({ username: parsed.loginName });
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
        loginName: this.registerForm.value.username
      }));
    } else {
      this.clearInvalidCredentials();
    }
  }

  // Public methods
  onClose(): void {
    this.isVisible = false
    this.loginService.closeRegister();
    this.close.emit();
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  resolved(caotcgaRes: any) {
    this.btnDisabled = false;
    this.captchaRobot = caotcgaRes;
  }
  onSubmitRegister(): void {
    if (this.registerForm.invalid) {
      this.markFormAsTouched();
      return;
    }
    this.error = null;
    this.isLoading = true;

    const RefferealCode = localStorage.getItem("Referrer");
    const formValue: RegisterForm = this.registerForm.value;
    console.log(formValue)
    this.store.dispatch(new loginActions.RegisterStart({
      login: formValue.username,
      password: formValue.password,
      nickname: formValue.nickname,
      email: formValue.email,
      firstName: formValue.firstName || null,
      lastName: formValue.lastName || null,
      campaignCode: formValue.promoCode ? '' : this.reID ?? this.campaignCode,
      // campaignCode: this.reID ?? this.campaignCode,
      promocode: formValue.promoCode,
      referralType: this.reType,
      gReCaptchaResponse: this.captchaRobot,
      address: {
        phone: this.registerForm.value.phone,
        country: 356
      },
      ...(RefferealCode ? { referrerLogin: RefferealCode } : {})
    }));
  }

  private markFormAsTouched(): void {
    Object.keys(this.registerForm.controls).forEach(key => {
      const control = this.registerForm.get(key);
      if (control?.invalid) {
        control.markAsDirty();
        control.markAsTouched();
      }
    });
  }

  openRegister(): void {
    this.loginService.closeLogin();
    this.loginService.openRegister();
  }
  handleModalClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.isVisible = false
    }
  }
  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }
  get nickname() {
    return this.registerForm.get('nickname');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get consent() {
    return this.registerForm.get('isConsent');
  }
  showPopUp(value: string) {
    if (value === "LOGIN") {
      this.isVisible = false;
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
    }
  }
  // web3auth 
  sendOTP() {
    if (this.registerForm.get('phone')?.invalid) {
      this.messageService.error('Error', 'Enter valid phone number');
      return;
    }

    const data = {
      face: "rajpoker",
      mobile: this.registerForm.value.phone,
      serviceType: "sms"
    };

    this.playerservice.getgenerateOTP(data).subscribe((res: any) => {
      if (res?.success) {
        this.isOtpSent = true;
        this.showOtpBox = true;
        this.startOtpTimer();
        this.messageService.success('Success', 'OTP sent successfully');
      } else {
        this.messageService.error('Failed', res.description);
      }
    });
  }
  startOtpTimer() {
    this.otpTimer = 60;
    this.timerInterval = setInterval(() => {
      this.otpTimer--;
      if (this.otpTimer === 0) {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }
  verifyOTP() {
    const otpValue = this.registerForm.get('otp')?.value;

    // ❌ If empty or invalid → stop
    if (!otpValue || this.registerForm.get('otp')?.invalid) {
      this.messageService.error('Error', 'Please enter valid OTP');
      return;
    }

    // ✅ Call API only if valid
    const body = {
      otp: otpValue,
      mobile: this.registerForm.value.phone
    };

    this.playerservice.getvalidateOTP(body).subscribe((res: any) => {
      if (res?.success) {
        this.otpVerified = true;
        this.showOtpBox = false;
        this.messageService.success('Success', 'OTP verified');
      } else {
        this.messageService.error('Error', res.description);
      }
    });
  }
} 