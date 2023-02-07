import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInfoComponent, ModifyCustomerComponent, CustomerFinderComponent, CustomerListComponent } from './';



@NgModule({
  declarations: [
    CustomerInfoComponent,
    ModifyCustomerComponent,
    CustomerFinderComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
