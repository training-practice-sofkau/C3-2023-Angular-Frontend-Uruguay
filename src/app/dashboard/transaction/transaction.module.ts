import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer/transfer.component';
import { DepositComponent } from './deposit/deposit.component';



@NgModule({
  declarations: [
    TransferComponent,
    DepositComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
