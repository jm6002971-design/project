import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import moment from 'moment';
import { CashierService } from '../../../core/services/cashier/cashier.service';
import { MessageService } from '../../../reusables/message/message.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { RemoveDateFormatPipe } from '../../../reusables/datepipe/dateformate.pipe';
@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxPaginationModule,
    RemoveDateFormatPipe],
  templateUrl: './transaction.html',
  styleUrls: ['./transaction.css']
})
export class Transaction {
  form!: FormGroup;
  typeForm!: FormGroup;
  selectedType: any = [];
  startDate!: Date;
  todaydate: any;
  endDate!: Date;
  transactionData: any[] = [];
  hitorydata: any
  isLoading: boolean = false
  types = [
    { language: 'Deposits', senttype: 'Deposits' },
    { language: 'Cashout', senttype: 'Cashout' },
    { language: 'Bonus Adjustment', senttype: 'Bonus Adjustment' },
    { language: 'Cash Adjustment', senttype: 'Cash Adjustment' }
  ];
  hitorydatacashouts: any = [];
  hitorydatadeposits: any = [];
  hitorydatabonus: any = [];
  selectnumcash: number = 10
  selectnumDeposit: number = 10
  selectnumBouns: number = 10
  selectnumaje: number = 10
  p: number = 1
  q: number = 1
  r: number = 1
  s: number = 1
  errormassage: any
  constructor(private fb: FormBuilder, private store: Store, private cashierservice: CashierService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      "currency": new FormControl('INR', Validators.required),
      "startDate": new FormControl(this.startDate, Validators.required,),
      "endDate": new FormControl(this.endDate, Validators.required),
      "limit": new FormControl(100, Validators.required),
      "index": new FormControl(0, Validators.required)
    });
    this.endDate = new Date();
    let oneweek = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() - 1);
    this.startDate = oneweek;
    this.todaydate = moment(new Date()).format('YYYY-MM-DD');
    this.typeForm = this.fb.group({
      typesValue: this.fb.array(this.types.filter(t => t.senttype !== 'Cash Adjustment').map(t => new FormControl(t.senttype)))
    });
    this.selectedType = this.typeForm.value.typesValue;
  }

  onChangetype(typesValue: string, isChecked: boolean, initMode = false) {
    const typesFormArray = this.typeForm.get('typesValue') as FormArray;
    if (typesValue === 'Cash Adjustment') {
      if (isChecked) {
        while (typesFormArray.length !== 0) {
          typesFormArray.removeAt(0);
        }
        typesFormArray.push(new FormControl(typesValue));
      } else {
        const index = typesFormArray.controls.findIndex(x => x.value === typesValue);
        if (index !== -1) typesFormArray.removeAt(index);
      }
    } else {
      if (isChecked) {
        const cashAdjIndex = typesFormArray.controls.findIndex(x => x.value === 'Cash Adjustment');
        if (cashAdjIndex !== -1) typesFormArray.removeAt(cashAdjIndex);
        typesFormArray.push(new FormControl(typesValue));
      } else {
        const index = typesFormArray.controls.findIndex(x => x.value === typesValue);
        if (index !== -1) typesFormArray.removeAt(index);
      }
    }
    this.selectedType = this.typeForm.value.typesValue;
  }

  onFormSubmit() {
    this.isLoading = true;
    this.hitorydatacashouts = [];
    this.hitorydatadeposits = [];
    this.hitorydatabonus = [];
    this.hitorydata = [];
    if (this.selectedType == '') {
      this.isLoading = false;
      this.errormassage = "Please select transaction type";
      setTimeout(() => {
        this.errormassage = ''
      }, 3500)
    }
    const startDate = moment(this.form.value.startDate).format('DD-MM-YYYY');
    const endDate = moment(this.form.value.endDate).format('DD-MM-YYYY');
    const body = {
      currency: this.form.value.currency,
      startDate,
      endDate,
      limit: this.form.value.limit,
      index: this.form.value.index,
      type: this.selectedType.toString()
    };
    if (this.selectedType.length === 1 && this.selectedType[0] === 'Cash Adjustment') {
      this.cashierservice.onCashierTransactionHistory(body).subscribe((data: any) => {
        this.isLoading = false;
        if (data && data.values && data.values.length > 0) {
          this.hitorydata = data.values;
        } else if (data.description) {
          this.messageService.error(
            'Failed',
            data.description
          );
        } else {
          this.errormassage = "No record found";
          setTimeout(() => {
            this.errormassage = ''
          }, 3500)
        }
      })
    } else {
      this.cashierservice.onCashierTransactionHistoryBYToken(body).subscribe((data) => {
        if (data) {
          this.isLoading = false;
          if (data.success) {
            this.hitorydatacashouts = data.cashouts;
            this.hitorydatadeposits = data.deposits;
            this.hitorydatabonus = data.bonus;
          } else {
            this.errormassage = data.description;
            setTimeout(() => {
              this.errormassage = ''
            }, 3500)
          }
        }

      })
    }
  }
  moveToTop() {
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });          
  }
  cleanDate(dateStr: string): Date {
    return new Date(dateStr.replace('[UTC]', ''));
  }
}