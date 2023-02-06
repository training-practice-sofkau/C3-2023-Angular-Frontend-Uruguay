import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { AccountModule } from './account/account.module';
import { DepositModule } from './account/deposit/deposit.module';
import { TransferModule } from './account/transfer/transfer.module';



@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    AccountModule,
    DepositModule,
    TransferModule,
  ]
})
export class DashboardModule { }
