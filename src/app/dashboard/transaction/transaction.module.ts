import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer/transfer.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransactionRouteModule } from './transaction-route.module';



@NgModule({
  declarations: [
    TransferComponent,
    DepositComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TransactionRouteModule,
  ]
})
export class TransactionModule { }
