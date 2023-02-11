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

  constructor  (public globalService: GlobalService,
                public customerService :CustomerService) {}

  ngOnInit(): void {
    this.getCustomer2()
  }

  /*
  public getCustomer(): void {
    this.serviceGlobalService.getCustomer().subscribe({
    next: (response: CustomerModel[] ) =>{console.log(this.customers = response)},
    error: (error:HttpErrorResponse)=> {alert(error.message)}
    })
  }
  */

  public getCustomer2(): void {
    this.customerService.getCustomer().subscribe(
      (response: CustomerModel[]) =>{console.log(this.customers = response)},
      (error:HttpErrorResponse)=> {alert(error.message)}
    )
  }

  ngDoCheck(){
    this.globalService.eligeViewUser()
  }

}
