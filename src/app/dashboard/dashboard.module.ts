import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModule } from './account/account.module';
import { DepositModule } from './account/deposit/deposit.module';
import { TransferModule } from './account/transfer/transfer.module';
import { ViewComponent } from './view/view.component';
import { UserAccountsComponent } from './view/lists/user-accounts/user-accounts.component';

@NgModule({
  declarations: [
    ViewComponent,
    UserAccountsComponent
  ],
  imports: [
    CommonModule,
    AccountModule,
    DepositModule,
    TransferModule
  ],
  exports: [
    ViewComponent,
    UserAccountsComponent
  ]
})
export class DashboardModule { }
