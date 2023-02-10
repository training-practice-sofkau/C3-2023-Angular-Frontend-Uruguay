import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerComponent } from './customer.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AccountComponent } from '../account/account.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule, ],

  declarations: [CustomerComponent,UnsubscribeComponent,UpdateCustomerComponent,],
  exports: [CustomerComponent],
  providers:[AccountComponent]
})
export class CustomerModule {}
