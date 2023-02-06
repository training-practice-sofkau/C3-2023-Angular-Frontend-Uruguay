import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeStateComponent } from './change-state/change-state.component';
import { GetComponent } from './get/get.component';
import { CustomerListComponent } from './customer-list/customer-list.component';



@NgModule({
  declarations: [
    ChangeStateComponent,
    GetComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
