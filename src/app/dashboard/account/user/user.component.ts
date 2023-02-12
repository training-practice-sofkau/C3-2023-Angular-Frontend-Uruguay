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

  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.getAllCustomer();
  }

  public getAllCustomer(): void {
    this.accountService.getAllCustomers().subscribe({
    next: (response: CustomerModel[] ) =>{console.log(this.customers = response)},
    error: (error:HttpErrorResponse)=> {alert(error.message)}
    })
  }
}
