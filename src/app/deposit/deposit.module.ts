import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepositComponent } from './create-deposit/create-deposit.component';
import { DepositListComponent } from './deposit-list/deposit-list.component';



@NgModule({
  declarations: [
    CreateDepositComponent,
    DepositListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DepositModule { }
