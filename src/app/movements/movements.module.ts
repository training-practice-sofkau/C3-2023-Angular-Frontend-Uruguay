import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsComponent } from './movements.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransferComponent } from './transfer/transfer.component';



@NgModule({
  declarations: [
    MovementsComponent,
    DepositComponent,
    TransferComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovementsModule { }
