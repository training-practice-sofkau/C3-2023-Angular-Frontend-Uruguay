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

  public id : string = "b85e0b60-3fc0-4dd4-8667-772713cdafd6";


  constructor  (public globalService: GlobalService,
                public customerService :CustomerService) {}


  ngOnInit(): void {
    this.getAllCustomer()
    this.getCustomer()
  }

  ngDoCheck(){
    this.globalService.eligeViewUser()
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

  

}
