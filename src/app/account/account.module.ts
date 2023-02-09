import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';



@NgModule({
  declarations: [
    AccountListComponent,
    CreateAccountComponent
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
