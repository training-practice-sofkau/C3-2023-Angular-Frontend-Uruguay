import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountHomeComponent } from './account-home/account-home.component';
import { GetAccountComponent } from './get-account/get-account.component';
import { AccountRoutingModule } from './account-routing.module';



@NgModule({
  declarations: [
    AccountHomeComponent,
    GetAccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
