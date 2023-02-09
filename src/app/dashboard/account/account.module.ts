import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    UserComponent,
    CreateAccountComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
