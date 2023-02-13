import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountRouteModule } from './account-route.module';




@NgModule({
  declarations: [
    UserComponent,
    CreateAccountComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AccountRouteModule,
  ],
})
export class AccountModule { }
