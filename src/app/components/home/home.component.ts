import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { Customer } from '../../customer/interface/customer';

@Component({
  selector: 'app-home',
  providers:[CustomerService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private customerService : CustomerService){}

  customer!:Customer;

  ngOnInit(): void {
    this.customerService.customerOneObservable.subscribe(
      (data) => {this.customer = data}
      );
  }

  Edit(){}
  deleteCustmer(){}
  

}
