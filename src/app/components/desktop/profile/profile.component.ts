import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../../interfaces/customer.interface';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  data: string | null = "";
  token: string | null =""
  show: string = "";


  ngOnInit(): void {

    this.token = localStorage.getItem("token");
    this.data = localStorage.getItem("customer");

    if( this.data != null){
        this.extractCustomerData(this.data);
    }
  }

  extractCustomerData(data: string) {

    this.show = JSON.parse(data);

    console.log(this.show);
  }


}






