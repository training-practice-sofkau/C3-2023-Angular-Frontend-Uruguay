import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { NewDepositComponent } from './new-deposit/new-deposit.component';
import { ViewTransfersComponent } from './view-transfers/view-transfers.component';



@NgModule({
  declarations: [
    NewTransferComponent,
    NewDepositComponent,
    ViewTransfersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionsModule { }
