import { Component, Host, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/interfaces/customer.interface';
import { CustomersTableService } from './customers-table.service';

@Component({
  selector: 'app-customers-table',
  providers: [ CustomersTableService ],
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss']
})

export class CustomersTableComponent implements OnInit {

  CustomerList: CustomerModel[] = [];

  constructor(@Host() public userCustomersTableService: CustomersTableService){}

  ngOnInit(): void {
    this.userCustomersTableService.customersEmitter.subscribe((data: CustomerModel[]) => { if (JSON.stringify(this.CustomerList) !== JSON.stringify(data)) this.CustomerList = data });
    this.userCustomersTableService.updateAllCustomers();
  }

}
