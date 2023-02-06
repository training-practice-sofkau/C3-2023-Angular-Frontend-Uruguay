import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './customer.component';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomerComponent,GetCustomerComponent,UnsubscribeComponent,UpdateCustomerComponent],
  exports: [CustomerComponent],
})
export class CustomerModule {}
