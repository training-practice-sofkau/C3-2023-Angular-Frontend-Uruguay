import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateAccountTypeComponent } from './create-account-type/create-account-type.component';



@NgModule({
  declarations: [
    AccountListComponent,
    CreateAccountComponent,
    CreateAccountTypeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AccountListComponent,
    CreateAccountComponent
  ],
})
export class AccountModule { }
