import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { GetAccountsByIdComponent } from './get-accounts-by-id/get-accounts-by-id.component';
import { GetAccountTypeComponent } from './get-account-type/get-account-type.component';


@NgModule({
  declarations: [
    CreateAccountComponent,
    GetAccountsByIdComponent,
    GetAccountTypeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }