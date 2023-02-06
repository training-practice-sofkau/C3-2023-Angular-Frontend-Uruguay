import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewAccountComponent } from './new-account/new-account.component';



@NgModule({
  declarations: [
    MyAccountsComponent,
    UserProfileComponent,
    NewAccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerAccountModule { }
