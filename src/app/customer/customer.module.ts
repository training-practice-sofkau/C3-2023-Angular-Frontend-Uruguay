import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomerListComponent } from "./customer-list/customer-list.component";




@NgModule({
  declarations: [
    CustomerListComponent,],
  imports: [
    CommonModule,
  ],
  exports : [
    CustomerListComponent
  ]

})
export class CustomerModule { }
