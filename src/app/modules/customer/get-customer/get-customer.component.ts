import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.scss']
})
export class GetCustomerComponent {
  constructor(private service: CustomerService){}

  get result(){
    return this.service.customerResult
  }
}
