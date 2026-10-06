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

@Component({
  selector: 'app-casinohistory',
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, NgxPaginationModule , ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule],
  templateUrl: './casinohistory.html',
  styleUrl: './casinohistory.css'
})
export class Casinohistory {
    dateForm!: FormGroup;
  balanceData: any[] = [];
  casinohistory: any;
  startDate: any;
  endDate: any;
  form!: FormGroup;
  todaydate: any = [];

  errormassage:any
  isLoading: boolean = false
  p: number = 1;
  selectnum: number = 10;
  constructor(private fb: FormBuilder, private messageService: MessageService, private playerservice: PlayerService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      "currency": new FormControl('', Validators.required),
      "startDate": new FormControl(this.startDate, Validators.required,),
      "endDate": new FormControl(this.endDate, Validators.required),
      "limit": new FormControl(100, Validators.required),
      "index": new FormControl(0, Validators.required)
    });
    this.endDate = new Date();
    let oneweek = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() - 7);
    this.startDate = oneweek;

    this.todaydate = moment(new Date()).format('YYYY-MM-DD');
  }


  onShow(): void {
  this.casinohistory = []
    this.isLoading = true;
    let body = {
      "startDate": moment(this.form.value.startDate).format('DD-MM-YYYY'),
      "endDate": moment(this.form.value.endDate).format('DD-MM-YYYY'),
      // "startDate": moment(this.form.value.startDate).format('MM-DD-YYYY'),
      // "endDate": moment(this.form.value.endDate).format('MM-DD-YYYY'),
      "limit": 100,
      "index": 0
    }
    this.playerservice.onPlayerGetRemoteGameHistory(body).subscribe((data: any) => {
      if (data) {
        this.isLoading = false;
        if (data && data.values && data.values.length > 0) {
          this.casinohistory = data.values;
        } else {
          this.errormassage =  "No record found" ;
          setTimeout(()=>{
            this.errormassage  = ''
          }, 3500)
        }
        console.log(data)

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
  cleanDate(dateStr: string | null) {


    if (!dateStr || dateStr === 'null') {
      return null;
    }
  
    return new Date(dateStr?.replace('IST', '').trim());
  }
}
