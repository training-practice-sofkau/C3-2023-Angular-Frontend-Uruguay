import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  data = localStorage.getItem('customer');
  customer = this.data ? JSON.parse(this.data) : null;

  ngOnInit() {
    console.log(this.customer);
  }
}

