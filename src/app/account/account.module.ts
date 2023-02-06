import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { CreateAccountComponent } from './create-account/create-account.component';



@NgModule({
  declarations: [
    UserComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
