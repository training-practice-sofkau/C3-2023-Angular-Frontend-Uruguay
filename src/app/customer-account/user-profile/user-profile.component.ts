import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceGlobalService } from 'src/app/global-service/service-global.service';
import { CustomerModel } from 'src/app/i-model/i-customer';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [ServiceGlobalService]
})
export class UserProfileComponent implements OnInit{

  public customers : CustomerModel[] = [];

  constructor (private serviceGlobalService: ServiceGlobalService) {}

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
    this.serviceGlobalService.getCustomer().subscribe(
      (response: CustomerModel[]) =>{console.log(this.customers = response)},
      (error:HttpErrorResponse)=> {alert(error.message)}
    )
  }



}
