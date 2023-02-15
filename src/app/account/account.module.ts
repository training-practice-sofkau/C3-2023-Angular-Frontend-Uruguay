import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDashboardComponent, AccountInfoComponent } from './';
import { AccountBtnsComponent } from './account-btns/account-btns.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { AccountShowInfoComponent } from './account-show-info/account-show-info.component';


@NgModule({
  declarations: [
    AccountDashboardComponent,
    AccountInfoComponent,
    AccountBtnsComponent,
    AccountShowInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AccountDashboardComponent,
    AccountInfoComponent,
    AccountBtnsComponent]
})
export class AccountModule { }
