import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { DeleteCustomerBtnComponent } from './delete-customer-btn/delete-customer-btn.component';
import { ModifyCustomerComponent } from './modify-customer/modify-customer.component';
import { CustomerFinderComponent } from './customer-finder/customer-finder.component';
import { CustomerListComponent } from './customer-list/customer-list.component';



@NgModule({
  declarations: [
    CustomerInfoComponent,
    DeleteCustomerComponent,
    DeleteCustomerBtnComponent,
    ModifyCustomerComponent,
    CustomerFinderComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
