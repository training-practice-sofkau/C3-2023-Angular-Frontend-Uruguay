import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerChangePasswordComponent, CustomerInfoComponent, ModifyCustomerComponent } from './';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [
    CustomerChangePasswordComponent,
    CustomerInfoComponent,
    ModifyCustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CustomerChangePasswordComponent,
    CustomerInfoComponent,
    ModifyCustomerComponent]
})
export class CustomerModule { }
