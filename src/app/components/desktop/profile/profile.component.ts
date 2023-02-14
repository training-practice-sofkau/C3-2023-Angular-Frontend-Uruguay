import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../../interfaces/customer.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  token: string | null = ""
  show: string = "";

  data = localStorage.getItem("customer");

  customerData: any = ""; //{} = {} as CustomerModel;

  ngOnInit(): void {

    this.token = localStorage.getItem("token");
    this.data = localStorage.getItem("customer");

    if (this.data != null) {
      this.customerData =  JSON.parse(this.data)


      console.log(this.customerData as CustomerModel)
    }


  }




}



function extractCustomerData(data: string): string {

  return JSON.parse(data) ;
}



