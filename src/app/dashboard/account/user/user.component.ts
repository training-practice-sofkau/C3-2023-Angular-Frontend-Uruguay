import { Component } from '@angular/core';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { AccountService } from '../services/account.service';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AccountModel } from 'src/app/interfaces/account.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  customers: CustomerModel[] = <CustomerModel[]>this.loginService.signedUpUsers;
  customer: CustomerModel = <CustomerModel>this.loginService.signedUpUser;
  accounts: AccountModel[] = <AccountModel[]>this.loginService.customerAccounts;

  id: string = "9b92bd42-de07-45f1-a5f0-9872c8f7a7d7"

  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.getCustomer();
    this.getAccount();
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

  public getAccount(): void {
    this.accountService.getAllAccount(this.id).subscribe({
      next: (response: AccountModel[]) =>{console.log(this.accounts = response)},
      error: (error:HttpErrorResponse)=> {alert(error.message)}
    })
  }
}
