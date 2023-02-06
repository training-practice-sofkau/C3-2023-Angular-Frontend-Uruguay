import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepositFormComponent } from './create-deposit-form/create-deposit-form.component';
import { DepositHistoryComponent } from './deposit-history/deposit-history.component';
import { DepositFinderComponent } from './deposit-finder/deposit-finder.component';
import { DepositInfoComponent } from './deposit-info/deposit-info.component';



@NgModule({
  declarations: [
    CreateDepositFormComponent,
    DepositHistoryComponent,
    DepositFinderComponent,
    DepositInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DepositModule { }
