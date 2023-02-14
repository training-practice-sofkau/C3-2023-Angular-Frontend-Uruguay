import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDashboardComponent, AccountInfoComponent } from './';
import { AccountBtnsComponent } from './account-btns/account-btns.component';
import { FormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';


@NgModule({
  declarations: [
    AccountDashboardComponent,
    AccountInfoComponent,
    AccountBtnsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [AccountDashboardComponent,
    AccountInfoComponent,
    AccountBtnsComponent]
})
export class AccountModule { }
