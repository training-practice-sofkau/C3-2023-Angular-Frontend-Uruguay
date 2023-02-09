import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerChangePasswordComponent, CustomerInfoComponent, ModifyCustomerComponent } from './';



@NgModule({
  declarations: [
    CustomerChangePasswordComponent,
    CustomerInfoComponent,
    ModifyCustomerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomerChangePasswordComponent,
    CustomerInfoComponent,
    ModifyCustomerComponent]
})
export class CustomerModule { }
