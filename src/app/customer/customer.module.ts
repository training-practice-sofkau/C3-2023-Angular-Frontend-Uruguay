import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerByOneListComponent } from './customer-by-one-list/customer-by-one-list.component';




@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerByOneListComponent,],
  imports: [
    CommonModule,
  ],
  exports : [
    CustomerListComponent
  ]

})
export class CustomerModule { }
