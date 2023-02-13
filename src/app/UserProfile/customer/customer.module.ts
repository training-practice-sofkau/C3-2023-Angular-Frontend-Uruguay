import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerComponent } from './customer.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AccountComponent } from '../account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountService } from '../';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'unsubscribe',
        component: UnsubscribeComponent
      },
      {
        path: 'update',
        component: UpdateCustomerComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  declarations: [CustomerComponent, UnsubscribeComponent, UpdateCustomerComponent],
  exports: [CustomerComponent],
  providers: [AccountComponent, AccountService]
})
export class CustomerModule {}
