import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { CreateaccounttypeComponent } from './create-account-type/createaccounttype.component'
import { CommonModule } from '@angular/common';
import { CustomerComponent } from '../customer/customer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const accountRoutes: Routes = [
  {
    path: '',
    component: AccountComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes),
    HttpClientModule

  ],
  declarations: [
    AccountComponent,
    CreateaccounttypeComponent
  ],
  exports: [AccountComponent],
  providers: [CustomerComponent, CreateaccounttypeComponent]
})
export class AccountModule { }
