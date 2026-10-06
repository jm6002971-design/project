import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import * as appState from '../../../core/appstates/appState';
import * as playerActions from '../../../core/appstates/playerstates/playerActions';
import { Subscription } from 'rxjs';
import { LoginState } from '../../../core/appstates/loginstates/loginState';
import * as cashierActions from '../../../core/appstates/cashierstates/cashierActions';
import { PlayerService } from '../../../core/services/player/player.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Profile } from '../../../core/modules/player/profile';
import { ProfileState } from '../../../core/appstates/playerstates/playerState';
import { UpDatePasswordModel } from '../../../core/services/player/updatepassword';
import { MessageService } from '../../../reusables/message/message.service';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
})
export class SpecificationComponent implements OnInit {
  updateprofilepassword: any = 'Profile';
  private loginSub!: Subscription;
  private storeSub!: Subscription;
  playerLoggedIn: boolean = false;
  ProfileUpdate!: FormGroup;
  private profile!: Profile;
  Profilecity: any;
  countrydata: any;
  isdcode: any;
  lastName: any;
  pixelURL: any;
  firstName: any;
  loginName: any;
  showCopiedMessage = false;
  UpdateProfilemessage: any;
  updateProfileError: any;
  UpdateProfilesuccessPop: boolean = false;
  updatePassword!: FormGroup;
  otpForm!: FormGroup;
  responseLoader: boolean = false;
  loaderKey = Date.now();
  showOtpBox = false;
  private updatepasswordsub!: Subscription;
  private updatepasswordmodel!: UpDatePasswordModel;
  apiLoader: boolean = false;
  apiLoader1: boolean = false;
  apiLoader2: boolean = false;
  showOldPass = false;
  showNewPass = false;
  copytex: any
  timeLeft = 60;
  mobileVerified: any
  otpTimer: any;
  canResendOtp = false;
  whatsapp:boolean = false;
  constructor(private store: Store<appState.AppState>, private fb: FormBuilder, private messageService: MessageService, private playerservice: PlayerService) { }

  ngOnInit(): void {

    this.moveToTop()
    this.showLoader()
    this.store.dispatch(new playerActions.ResetState());

    this.loginSub = this.store.select('loginState').subscribe((loginState: LoginState) => {
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          // this.store.dispatch(new cashierActions.CashierGetBalanceStart());
        }
      }
    });

    // ✅ FORM SETUP
    this.ProfileUpdate = new FormGroup({
      nickname: new FormControl('', [
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z0-9]*')
      ]),
      email: new FormControl({ value: '', disabled: true }, [
        Validators.email
      ]),
      firstName: new FormControl('', [
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z]*')
      ]),
      pixelURL: new FormControl({ value: '', disabled: true }),
      lastName: new FormControl('', Validators.pattern('[a-zA-Z]*')),
      address: new FormGroup({
        city: new FormControl('', Validators.pattern('[a-zA-Z0-9]*')),
        phone: new FormControl({ value: '', disabled: true }, [Validators.pattern('[4-9]\\d{9}')]),
        country: new FormControl(),
      }),
    });
    this.store.dispatch(new playerActions.ResetState());
    this.updatePassword = new FormGroup({
      oldPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6), Validators.maxLength(15), Validators.pattern(/^\S*$/)
      ]),

      newPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6), Validators.maxLength(15), Validators.pattern(/^\S*$/)
      ])
    });
    this.otpForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      otp: ['', [Validators.required,   Validators.pattern('^[0-9]{6}$')]]
    });


    this.storeSub = this.store.select("playerState").subscribe(
      (playerState: ProfileState) => {
        console.log(playerState)
        if (playerState.profileUpdateResponse) {
          console.log(playerState.profileUpdateResponse)
          console.log(playerState.profileUpdateResponse.success)
          if (playerState.profileUpdateResponse.success == true) {
            this.hideLoader()
            this.apiLoader = false;
            if (playerState.profileUpdateResponse.success) {
              this.messageService.success(
                'Success',
                'Updated Successfully'
              );
            }

          } else if (playerState.profileUpdateResponse.success == false) {
            this.updateProfileError = playerState.profileUpdateResponse.description;
            this.apiLoader = false;
            this.messageService.error(
              'Failed',
              this.updateProfileError
            );


          }
        }

      })

    // ✅ LOAD PROFILE DATA
    this.profileApi();
const getwhatsappstatus = localStorage.getItem('whatsAppStatus')
if(getwhatsappstatus){
 let data =  JSON.parse(getwhatsappstatus);
 this.whatsapp = data.status;
}
  }
  sanitizeNickname(event: Event) {
  const input = event.target as HTMLInputElement;
  const value = input.value.replace(/[^a-zA-Z0-9]/g, '');
  input.value = value;
  this.ProfileUpdate.get('nickname')?.setValue(
    value,
    { emitEvent: false }
  );
}
sanitizeName(event: Event, controlName: string) {
  const input = event.target as HTMLInputElement;
  const value = input.value.replace(/[^a-zA-Z\s]/g, '');
  input.value = value;
  this.ProfileUpdate.get(controlName)?.setValue(
    value,
    { emitEvent: false }
  );
}
  profileApi() {
    this.playerservice.onPlayerGetProfile().subscribe((data) => {
      if (data) {
        this.profile = data;
        this.loginName = this.profile.login;
        this.copytex = this.profile.pixelURL
        this.mobileVerified = data
        this.ProfileUpdate.patchValue({
          nickname: this.profile.nickname,
          email: this.profile.email,
          firstName: this.profile.firstName,
          pixelURL: this.profile.pixelURL,
          lastName: this.profile.lastName,
          address: {
            city: this.profile.address?.city || '',
            phone: this.profile.address?.phone || '',
            country: this.profile.address?.country || '',
          },
        });
        this.hideLoader()
      }
    });
  }
  showLoader() {
    this.loaderKey = Date.now(); // 🔥 force gif reload
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
  }
  updateProfilepassword(update: any) {
    this.apiLoader = false;
    this.apiLoader1 = false;
    this.updateprofilepassword = update;
    this.updatePassword.reset();
  }
  WhatsupSubmit() {

    this.apiLoader2 = false;
    let data = {
      "face": "rajpoker",
      "mobile": this.otpForm.value.phone,
      "serviceType": "whatsapp"
    }

    this.playerservice.getgenerateOTP(data).subscribe((data: any) => {
      console.log(data);
      this.apiLoader2 = false;
      if (data?.success === true) {
        this.showOtpBox = true;   // ✅ SHOW OTP FORM
        this.startOtpTimer();     // ✅ START COUNTDOWN
      } else {
        this.messageService.error(
          'Failed',
          data.description
        );
        this.otpForm.reset();

      }
    })
  }
  verifyWhatsappOtp() {
    const body = {
      otp: this.otpForm.value.otp,
      mobile: this.otpForm.value.phone
    };

    this.playerservice.getvalidateOTP(body).subscribe((res: any) => {
      console.log(res)
      if (res?.success) {
        // this.messageService.success(
        //   'Success',
        //   "WhatsApp verified successfully"
        // );
        let bodyres = {
          mobile: this.otpForm.value.phone
        }
        this.playerservice.getaddMobileVerifyBonus(bodyres).subscribe((data: any) => {
          console.log(data);
          if (data && data.success) {
            this.messageService.success(
              'Success',
              'Congratulations!\nYour Mobile Number is Verified Successfully.\nEnjoy Your Free Bonus!. \nThis bonus and any proceeds derived from it are strictly for poker play only. Any use of the bonus for casino games or sports betting will result in forfeiture of the bonus and any associated winnings'
            );
            this.otpForm.reset();
            this.profileApi();
            this.updateProfilepassword('Profile');
          }
        })
        this.showOtpBox = false;
      } else {
        this.messageService.success(
          'Success',
          res.description
        );
      }
    });
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
  onProfileUpDateFormSubmit() {
    this.apiLoader = true
    const payload = this.ProfileUpdate.getRawValue(); // ✅ includes disabled fields
    // payload.address.country = 288; 

    console.log('Final Payload:', payload);
    this.playerservice.onPlayerUpdateProfile(payload).subscribe((data: any) => {
      if (data) {
        this.apiLoader = false;
        if (data.success) {
          const nickname = this.ProfileUpdate.value.nickname;

          this.messageService.setNickname(nickname);
          this.messageService.success(
            'Success',
            'Updated Successfully'
          );
        } else {
          this.messageService.success(
            'Success',
            data.description
          );
        }

      }
    })
    // this.store.dispatch(new playerActions.PlayerUpdateProfile(payload));
  }

  copyMessage(val: string) {
    console.log(val)
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = val;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, tempTextarea.value.length);

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        this.showCopiedMessage = true;
        setTimeout(() => (this.showCopiedMessage = false), 2000);
      }
    } catch (err) {
      console.error('Error copying text: ', err);
    }

    document.body.removeChild(tempTextarea);
  }
  UpdateProfilePopClose() {

    this.store.dispatch(new playerActions.ResetState());
    this.UpdateProfilemessage = "";
    this.UpdateProfilesuccessPop = false;
  }
  onUpdatePasswordSubmit() {
    this.apiLoader1 = true;
    const body = {
      oldPassword: this.updatePassword.get('oldPassword')?.value,
      newPassword: this.updatePassword.get('newPassword')?.value
    };

    console.log('Password update payload:', body);
    this.playerservice.onPlayerUpdatePassword(body).subscribe((data) => {
      console.log(data)
      if (data) {
        this.apiLoader1 = false
        if (data.success) {
          this.messageService.success(
            'Success',
            'Change password updated successfully'
          );
          this.updatePassword.reset();
        } else {
          this.UpdateProfilemessage = data.description
          // this.messageService.success(
          //   'Success',
          //   this.UpdateProfilemessage 
          // ); 
          setTimeout(() => {
            this.UpdateProfilemessage = ''
          }, 3500);
        }

      }
    })
  }
  startOtpTimer() {
    this.timeLeft = 60;
    this.canResendOtp = false;   // ❌ disable resend initially

    if (this.otpTimer) {
      clearInterval(this.otpTimer);
    }

    this.otpTimer = setInterval(() => {
      this.timeLeft--;

      if (this.timeLeft === 0) {
        clearInterval(this.otpTimer);
        this.canResendOtp = true;  // ✅ enable resend OTP
      }
    }, 1000);
  }
  onlyNumbers(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');
  
    // update form control value manually
    const controlName = input.getAttribute('formcontrolname');
    if (controlName) {
      this.otpForm.get(controlName)?.setValue(input.value, { emitEvent: false });
    }
  }
  isSameUsernameNickname(): boolean {
    const nickname = this.ProfileUpdate.get('nickname')?.value;
    return nickname && this.loginName && nickname.toLowerCase() === this.loginName.toLowerCase();
  }
 
}
