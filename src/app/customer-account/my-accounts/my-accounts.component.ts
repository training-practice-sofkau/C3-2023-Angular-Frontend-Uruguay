import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AccountModel } from 'src/app/i-model/i-account';


@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.scss']
})
export class MyAccountsComponent {

  public i : number = 1

  public accounts : AccountModel[] = [];

  public idUser : string = "7738fd3b-4763-49cd-b00a-2f77fb45615f";
  public cuenta : Object = {};
  account : AccountModel = <AccountModel> this.cuenta;

  
  
  
  
  constructor(public accountService: AccountService) {

  }


  ngOnInit(): void {
    this.getAllAccountByIdUser();
  }


  public getAllAccountByIdUser(): void {
    this.accountService.getAccountById(this.idUser).subscribe({
    next: (response: AccountModel[] ) =>{console.log(this.accounts = response)},
    error: (error:HttpErrorResponse)=> {alert(error.message)}
    })
  }

  



}
