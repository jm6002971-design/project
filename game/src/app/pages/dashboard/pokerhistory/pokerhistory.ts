import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PlayerService } from '../../../core/services/player/player.service';
import moment from 'moment';
import { MessageService } from '../../../reusables/message/message.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { RemoveDateFormatPipe } from '../../../reusables/datepipe/dateformate.pipe';

@Component({
  selector: 'app-pokerhistory',
  imports:  [CommonModule, RouterLink,FormsModule,ReactiveFormsModule, NgxPaginationModule  ,  ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  RemoveDateFormatPipe],
  templateUrl: './pokerhistory.html',
  styleUrl: './pokerhistory.css'
})
export class Pokerhistory {
  dateForm!: FormGroup;
  balanceData: any[] = [];
  pokerhistory: any = [];
  isLoading:boolean = false
  startDate: any;
  endDate: any;
  form!: FormGroup;
  todaydate: any = [];
  currency  = 'INR';
  itemsperpagecount = [
    { num: 10 },
    { num: 20 },
    { num: 30 },
    { num: 40 },
    { num: 50 }
  ];
  p: number = 1;
  selectnum: number = 10;
  errormassage:any; 
  constructor(private fb: FormBuilder, private playerservice: PlayerService, private messageService:MessageService) {}

  ngOnInit(): void {
    this.endDate = new Date();
    let oneweek = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() - 1);
    this.startDate = oneweek;

    this.todaydate = moment(new Date()).format('YYYY-MM-DD');
    this.form = this.fb.group({
      "currency": new FormControl(this.currency, Validators.required),
      "startDate": new FormControl(this.startDate, Validators.required),
      "endDate": new FormControl(this.endDate, Validators.required),
      "types": new FormControl(''),
      "limit": new FormControl(100, Validators.required),
      "index": new FormControl(0, Validators.required),
    });
   
  }
  

  onShow(): void {
    this.isLoading = true;
    this.pokerhistory = []
    const formattedStartDate = moment(this.form.value.startDate).format('DD-MM-YYYY');
    const formattedEndDate = moment(this.form.value.endDate).format('DD-MM-YYYY');
this.errormassage = ''
    // Update the form values (for submission, not for display)
    const updatedFormValues = {
      ...this.form.value,
      startDate: formattedStartDate,
      endDate: formattedEndDate
    };
    updatedFormValues.currency = this.currency
    updatedFormValues.types = this.currency === "INR" ? [
      "POKER_HOLDEMNOLIMIT_INR,HOLDEM,NOLIMIT", 
      "POKER_HOLDEMLIMIT_INR,HOLDEM,LIMIT", 
      "POKER_OMAHANOLIMIT_INR,OMAHA,NOLIMIT", 
      "POKER_OMAHALIMIT_INR,OMAHA,LIMIT", 
      "POKER_OMAHAPOTLIMIT_INR,OMAHA,LIMIT", 
      "POKER_OMAHAPOTLIMIT_INR,OMAHA,POTLIMIT",
      "POKER_OMAHAFIVECARDSNOLIMIT_INR,OMAHA,NOLIMIT", 
      "POKER_OMAHAFIVECARDSPOTLIMIT_INR,OMAHA,POTLIMIT"
    ]:[
      "POKER_HOLDEMNOLIMIT_USD,HOLDEM,NOLIMIT", 
      "POKER_HOLDEMLIMIT_USD,HOLDEM,LIMIT", 
      "POKER_OMAHANOLIMIT_USD,OMAHA,NOLIMIT", 
      "POKER_OMAHALIMIT_USD,OMAHA,LIMIT", 
      "POKER_OMAHAPOTLIMIT_USD,OMAHA,LIMIT", 
      "POKER_OMAHAPOTLIMIT_USD,OMAHA,POTLIMIT",
      "POKER_OMAHAFIVECARDSNOLIMIT_USD,OMAHA,NOLIMIT", 
      "POKER_OMAHAFIVECARDSPOTLIMIT_USD,OMAHA,POTLIMIT"
    ]  
this.playerservice.pokerhistory(updatedFormValues).subscribe((data:any)=>{
  console.log(data)
  console.log(data.values)
  if(data){

    if (data && data.values && data.values.length > 0) { 
      this.pokerhistory = data.values.filter(
        (item: any) => item.rounds && item.rounds > 0
      );
    }else  {  
      this.errormassage =  "No record found" ;
      setTimeout(()=>{
        this.errormassage  = ''
      }, 3500)
      } 
    this.isLoading = false;

  }
})
    
  }
  onChange(event: Event) {
    const value = Number((event.target as HTMLSelectElement).value);
    this.p = 1;
    this.selectnum = value; 
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
