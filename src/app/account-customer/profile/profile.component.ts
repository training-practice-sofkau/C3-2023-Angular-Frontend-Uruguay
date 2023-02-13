import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { CustomerModel } from '../../interfaces/customer.interface';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {



  customers: CustomerModel[] = [];

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllCust();

  }

  public getAllCust(): void {

    this.customerService.getAllCustomer().subscribe({
      next: (Response: CustomerModel[]) => { console.log(this.customers = Response) },
      error: (error: HttpErrorResponse) => { alert(error.message) }

    });


  }


}
