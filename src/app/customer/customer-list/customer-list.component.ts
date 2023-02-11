import { Component, Host, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../interface/customer';

@Component({
  selector: 'app-customer-list',
  providers:[CustomerService],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  listCustomer : Customer[] = [];
  
  constructor(@Host() public customerService : CustomerService){}


  ngOnInit(): void {
    this.UpdateCustomerList();
  }

  UpdateCustomerList():void{

    this.customerService.customerObservable.subscribe(
      (data : Customer[]) => {
        if(this.listCustomer.length != data.length){
          this.listCustomer = data;
        }
      });
      this.customerService.updateCustomerList();
  }
}
