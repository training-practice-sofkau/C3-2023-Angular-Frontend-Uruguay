import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerComponent } from './customer.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AccountComponent } from '../account/account.component';

@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  declarations: [CustomerComponent,UnsubscribeComponent,UpdateCustomerComponent,],
  exports: [CustomerComponent],
  providers:[AccountComponent]
})
export class CustomerModule {}
