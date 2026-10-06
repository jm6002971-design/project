import { Component } from '@angular/core';
import { PlayerService } from '../core/services/player/player.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as appState from '../core/appstates/appState';
import * as cashierActions from "../core/appstates/cashierstates/cashierActions";
import { MessageService } from '../reusables/message/message.service';

@Component({
  selector: 'app-bank',
  imports: [FormsModule,RouterLink,RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './bank.html',
  styleUrl: './bank.css',
  standalone: true,
})
export class Bank {
  getbankaccountdetails:any;
  BankForm!: FormGroup;
  ActiveBankAC:any;
  responseLoader:boolean = false;
  loaderKey = Date.now();
  hasBankAccounts: boolean = false; 
  activeIndex: number | null = null;
constructor(private playerSer:PlayerService, private massageService:MessageService, private store: Store<appState.AppState>){

}
ngOnInit(){
 this.showLoader()
  // this.BankForm = new FormGroup({
  //   accountType : new FormControl('savings', [Validators.required]),
  //   NameOnAccount: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(24),   Validators.pattern('^[A-Za-z ]*$') ]),
  //   bankName: new FormControl(null, [Validators.required, Validators.minLength(3),  Validators.pattern('^[A-Za-z ]*$') ]),
  //   bankAccountNumber: new FormControl( '', [Validators.required, Validators.minLength(6), Validators.maxLength(32),Validators.pattern(/^[0-9]+$/) ] ) ,
  //   ifsccode:new FormControl(null, [Validators.required,   Validators.pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/), Validators.minLength(11), Validators.maxLength(15)])
  // });
  this.BankForm = new FormGroup({
    accountType: new FormControl('savings', [Validators.required]),
      bankName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
      Validators.pattern(/^[A-Za-z ]+$/)
    ]),
      NameOnAccount: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(24),
      Validators.pattern('^[A-Za-z]+( [A-Za-z]+)*$')
    ]),  
    bankAccountNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32),
      Validators.pattern(/^[0-9]+$/)
    ]),  
    ifsccode: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/),
      Validators.minLength(11),
      Validators.maxLength(11)
    ])
  });  
  this.playerSer.onCashierGetBankAccount().subscribe((data: any) => {
  if(data){
    this.moveToTop();
    this.hideLoader();
    this.ActiveBankAC = data.activeBankCount
    if (data?.success && data.TBankAccountInfos?.length > 0) {  
      this.getbankaccountdetails = data.TBankAccountInfos; 
      this.hasBankAccounts = this.getbankaccountdetails.length > 0;
    }
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
onFormSubmit() {
  if (this.BankForm.invalid) return;
this.showLoader()
  const data = {
    accountType: "imps_ib",
    bankName: this.BankForm.value.bankName,
    nameOnAccount: "Name : " +  this.BankForm.value.NameOnAccount,
    bankAccountNumber: this.BankForm.value.bankAccountNumber,
    personalNumber: this.BankForm.value.ifsccode
  } 
  console.log(data)
  this.store.dispatch(new cashierActions.CashierGetBalanceStart());
  this.playerSer.onCashierAddBankAccount(data).subscribe((resData: any) => {
    console.log(resData)
    if(resData){
this.hideLoader()
      if(resData.success){
    this.moveToTop();

  this.massageService.success('Success',  resData.description == 'SUCCESS'?'Bank details added successfully':resData.description)
          this.playerSer.onCashierGetBankAccount().subscribe((data: any) => { 
          if (data.success && data.TBankAccountInfos?.length > 0) {
              this.getbankaccountdetails = data.TBankAccountInfos;  
      this.hasBankAccounts = this.getbankaccountdetails.length > 0;

          }
        });
        this.BankForm.reset();

      }else{
  this.massageService.success('Success',  resData.description);
      }
    }
  })
}
allowIFSCInput(event: KeyboardEvent) {
  const allowed = /^[A-Za-z0-9]$/;
  if (!allowed.test(event.key)) {
    event.preventDefault();
  }
}

toUppercaseIFSC() {
  const ctrl = this.BankForm.get('ifsccode');
  if (ctrl) {
    ctrl.setValue(ctrl.value.toUpperCase(), { emitEvent: false });
  }
}

deletBank(i:any){
  this.activeIndex = i;
let bankdetailes = this.getbankaccountdetails[i] ;
let body ={ 
  "face": "face_1387df61497e",
  "ip": "ip_56264c127b39",
  "bankEncodedIDs": [
     bankdetailes.bankEncodedID
  ]
}
this.playerSer.onCashierDeleteBankAccount(body).subscribe((data:any)=>{
  console.log(data)
  if(data.success){
    console.log(data.deleteBankInfoList.description)
    console.log(data.deleteBankInfoList)
  this.massageService.success('Success',  data.deleteBankInfoList[0].description == 'SUCCESS'?'Bank details deleted successfully':data.deleteBankInfoList[0].description)

    this.getbankaccountdetails = []
    this.playerSer.onCashierGetBankAccount().subscribe((data: any) => {
      if(data){
    this.hideLoader();
    this.moveToTop();
        this.ActiveBankAC = data.activeBankCount
        console.log(data.TBankAccountInfos)
        this.hasBankAccounts =data.TBankAccountInfos?.length > 0; 
        console.log(   this.hasBankAccounts)
        if (data?.success && data.TBankAccountInfos?.length > 0) {  
          this.getbankaccountdetails = data.TBankAccountInfos; 
          this.hasBankAccounts = this.getbankaccountdetails.length > 0;
        }
        this.activeIndex = null;
      }
      });
  }
})
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
}
