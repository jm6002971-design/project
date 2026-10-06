import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { SpecificationComponent } from './specification/specification.component';
import { Balance } from './balance/balance';
import { Cashier } from './cashier/cashier';
import { Rakeback } from './rakeback/rakeback';
import { Casinohistory } from './casinohistory/casinohistory';
import { Pokerhistory } from './pokerhistory/pokerhistory';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerToggle } from '@angular/material/datepicker';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Dashboard,
    SpecificationComponent,
    Balance,
    Cashier,
    Rakeback,
    Casinohistory,
    Pokerhistory,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule   ,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class DashboardModule { }
