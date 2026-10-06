import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as appState from '../../../core/appstates/appState';
import { LoginState } from '../../../core/appstates/loginstates/loginState';
import { CashierState } from '../../../core/appstates/cashierstates/cashierState'; 
import * as cashierActions from '../../../core/appstates/cashierstates/cashierActions';
import moment from 'moment';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MessageService } from '../../../reusables/message/message.service';
import { CashierService } from '../../../core/services/cashier/cashier.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { RemoveDateFormatPipe } from '../../../reusables/datepipe/dateformate.pipe';

@Component({
  selector: 'app-ptop',
  imports:  [CommonModule, RouterLink,FormsModule,ReactiveFormsModule, ReactiveFormsModule,RemoveDateFormatPipe,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,NgxPaginationModule],
  templateUrl: './ptop.html',
  styleUrl: './ptop.css'
})
export class Ptop {
  private storeSub!: Subscription;
  private loginSub!: Subscription;
  form!: FormGroup;
  transaction: any;
  errormessage: string = "";
  selectedType: any = "Transfer to Player,Transfer from Player"
  startDate!: Date;
  todaydate: any;
  endDate!: Date;
  p: number = 1;
  historyloader: boolean = false;
  selectnum: number = 10;
  description: boolean = false;
  playerLoggedIn: boolean = false;
  itemsperpagecount = [
    { num: 10 },
    { num: 20 },
    { num: 30 },
    { num: 40 },
    { num: 50 }
  ];
  steddate:any;
  hitorydata:any
  isLoading:boolean= false
  errormassage: any;
  constructor(private fb: FormBuilder, private cashierservice:CashierService, private store: Store<appState.AppState>, private messageService:MessageService ) { 
  
    // this.store.dispatch(new cashierActions.CashierGetBalanceStart());
  }

  ngOnInit() {
    this.loginSub = this.store
      .select("loginState")
      .subscribe((loginState: LoginState) => {
        if (loginState.playerLoggedIn) {
          this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
          if (this.playerLoggedIn) {
            this.store.dispatch(new cashierActions.CashierGetBalanceStart());
          }
        }
      });
    this.endDate = new Date();
    let oneweek = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() - 1);
    this.startDate = oneweek;
    this.todaydate = moment(new Date()).format('YYYY-MM-DD');

    this.form = new FormGroup({
      "currency": new FormControl('INR',  Validators.required),
      "startDate": new FormControl(this.startDate, Validators.required),
      "endDate": new FormControl(this.endDate, Validators.required),
      "limit": new FormControl(100, Validators.required),
      "index": new FormControl(0, Validators.required)
    });
    this.form.value.startDate = this.startDate;
    this.form.value.endDate = this.endDate;
    this.form.valueChanges.subscribe(x => {
      let yearsDiff =0;
      var ToDate = new Date();
      var pastYear = ToDate.getFullYear() - yearsDiff;
      ToDate.setFullYear(pastYear);
      if(new Date(x.startDate).getTime() > ToDate.getTime() || new Date(x.startDate).getTime() > new Date(x.endDate).getTime() || new Date(x.endDate).getTime() > ToDate.getTime()) {
        this.steddate= true;
      }else{
         this.steddate= false;
      }
   });
    this.storeSub = this.store.select("cashierState").subscribe(
      (cashierState: CashierState) => {
        if (cashierState.TransactionResponse) {
          console.log(cashierState.TransactionResponse)
          this.isLoading=false 
          if (cashierState.TransactionResponse.success) {
            if (cashierState.TransactionResponse.values) {
              if (!cashierState.TransactionResponse.values.length) {    
                this.messageService.error(
                  'Failed',
                  "There is no History  for the selected Period" 
                );
              } else {
                this.transaction = cashierState.TransactionResponse.values;
                this.messageService.error(
                  'Failed',
                  this.transaction 
                );
              }
            }
          } else {
            var messageerror:any = cashierState.TransactionResponse.description
            this.messageService.error(
              'Failed',
              messageerror 
            );
          }
        }
        if (cashierState.TranscationResponseFail) {
          this.messageService.error(
            'Failed',
            cashierState.TranscationResponseFail.message 
          );
      
        }
 
      }
    )
 
  }
 
  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
  get today() {
    return new Date();
  }
  onFormSubmit() { 
    this.isLoading=true
this.hitorydata = []
    this.store.dispatch(new cashierActions.ResetState());
    this.historyloader = true;
    const body = {
      currency: this.form.value.currency,
      startDate: moment(this.form.value.startDate).format('MM-DD-YYYY'),
      endDate: moment(this.form.value.endDate).format('MM-DD-YYYY'),
      limit: this.form.value.limit,
      index: this.form.value.index,
      type: this.selectedType

    }; 
    this.transaction = null;
    this.description = false;
    this.p = 1;
    this.cashierservice.onCashierTransactionHistory(body).subscribe((data:any)=>{
      this.isLoading =false;
  console.log(data)
          if (data && data.values && data.values.length > 0) { 
            this.hitorydata = data.values;
          }else if(data.description){
            this.messageService.error(
              'Failed',
             data.description 
            );
  
          } else{  
            // this.messageService.error(
            //   'Failed',
            //   "No record found" 
            // );
            this.errormassage =  "No record found" ;
            setTimeout(()=>{
              this.errormassage  = ''
            }, 3500)
          }
        })

  }
  moveToTop() {
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });           // for Safari
  }
  cleanDate(dateStr: string): Date {
    return new Date(dateStr.replace('[UTC]', ''));
  }
}
 
 
