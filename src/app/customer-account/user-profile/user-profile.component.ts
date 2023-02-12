import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global-service/service-global.service';
import { CustomerModel } from 'src/app/i-model/i-customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [GlobalService]
})
export class UserProfileComponent implements OnInit{

  public customers : CustomerModel[] = [];
  
  public user : Object = {};

  customer : CustomerModel = <CustomerModel> this.user;

  public id : string = "67e8cf4f-727e-4ae7-a399-4457d7c4909d";




  constructor  (public globalService: GlobalService,
                public customerService :CustomerService) {}

  ngOnInit(): void {
   // this.getAllCustomer()
    this.getCustomer()
  }

  //TRAE TODOS LOS CUSTOMERS
  public getAllCustomer(): void {
    this.customerService.getAllCustomers().subscribe({
    next: (response: CustomerModel[] ) =>{console.log(this.customers = response)},
    error: (error:HttpErrorResponse)=> {alert(error.message)}
    })
  }
  


  //TRAE UN CUSTOMER SEGUN ID
  public getCustomer(): void {
    this.customerService.getcustomerById(this.id).subscribe({
    next: (response: CustomerModel ) =>{console.log(this.customer = response)},
    error: (error:HttpErrorResponse)=> {alert(error.message)}
    })
  }

  ngDoCheck(){
    this.globalService.eligeViewUser()
  }

}
