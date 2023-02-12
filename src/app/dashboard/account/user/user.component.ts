import { Component } from '@angular/core';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { AccountService } from '../services/account.service';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  customers: CustomerModel[] = <CustomerModel[]>this.loginService.signedUpUsers;
  customer: CustomerModel = <CustomerModel>this.loginService.signedUpUser;

  id: string = "d4a809aa-7053-4a8a-9a4f-cbb92a23b2a7"

  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  public getAllCustomer(): void {
    this.accountService.getAllCustomers().subscribe({
    next: (response: CustomerModel[] ) =>{console.log(this.customers = response)},
    error: (error:HttpErrorResponse)=> {alert(error.message)}
    })
  }

  public getCustomer(): void {
    this.accountService.getcustomerById(this.id).subscribe({
    next: (response: CustomerModel ) =>{console.log(this.customer = response)},
    error: (error:HttpErrorResponse)=> {alert(error.message)}
    })
  }
}
