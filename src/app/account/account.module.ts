import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateAccountTypeComponent } from './create-account-type/create-account-type.component';
import { UpDateComponent } from './up-date/up-date.component';
import { RouterModule } from '@angular/router';
import { AccountByOneComponent } from './account-by-one/account-by-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccountListComponent,
    CreateAccountComponent,
    CreateAccountTypeComponent,
    UpDateComponent,
    AccountByOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    AccountListComponent,
    CreateAccountComponent,
    UpDateComponent,
    CreateAccountTypeComponent,
    AccountByOneComponent,
  ],
})
export class AccountModule { }
