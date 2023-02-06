import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [
    MyAccountsComponent,
    UserProfileComponent,
    NewAccountComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerAccountModule { }
