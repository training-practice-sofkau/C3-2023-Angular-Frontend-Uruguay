import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountInfoUpdateComponent } from './account-info-update/account-info-update.component';

@NgModule({
  declarations: [
    CreateAccountComponent,
    AccountInfoUpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
