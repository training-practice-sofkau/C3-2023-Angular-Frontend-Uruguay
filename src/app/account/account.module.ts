import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountMovementsComponent, AccountDashboardComponent, AccountInfoComponent } from './';
import { AccountBtnsComponent } from './account-btns/account-btns.component';


@NgModule({
  declarations: [
    AccountDashboardComponent,
    AccountInfoComponent,
    AccountMovementsComponent,
    AccountBtnsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AccountDashboardComponent,
    AccountInfoComponent,
    AccountMovementsComponent,
    AccountBtnsComponent]
})
export class AccountModule { }
