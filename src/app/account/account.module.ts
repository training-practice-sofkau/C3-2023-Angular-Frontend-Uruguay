import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { AccountFinderComponent } from './account-finder/account-finder.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ModifyAccountInfoComponent } from './modify-account-info/modify-account-info.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';



@NgModule({
  declarations: [
    CreateAccountFormComponent,
    AccountFinderComponent,
    AccountInfoComponent,
    ModifyAccountInfoComponent,
    AccountsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
