import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountFormComponent, AccountFinderComponent, AccountInfoComponent, ModifyAccountInfoComponent, AccountsListComponent } from './';



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
