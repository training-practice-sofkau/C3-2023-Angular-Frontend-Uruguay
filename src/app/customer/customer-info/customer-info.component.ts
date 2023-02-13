import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { CustomerModel } from '../../interfaces/customer.interface';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  customer!: CustomerModel;

  constructor(private service: ServiceService,
    private router: Router) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.service.getCustomerInfo()
    .subscribe(customer => this.customer = customer);
  }
}
