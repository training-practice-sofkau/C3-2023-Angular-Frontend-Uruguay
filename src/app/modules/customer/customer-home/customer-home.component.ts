import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent {

  constructor(private service: CustomerService) { }

  searchCustomers() {
    this.service.getCustomers()
  }
}