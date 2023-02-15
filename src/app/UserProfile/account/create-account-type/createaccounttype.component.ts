import { AccountService } from '../services/account.service';
import { Component, OnInit } from '@angular/core';
import { AccountComponent } from '../account.component'




@Component({
  selector: 'app-createaccounttype',
  templateUrl: './createaccounttype.component.html',
})
export class CreateaccounttypeComponent   {

  constructor(public AccountService: AccountService, public AccountComponent: AccountComponent
    ) {}
 

  public accountName: string = ''
  public accountType: string = ''

  updateName(event: any) {
    this.accountName = event.target.value ;
    this.AccountService.updateName(this.accountName)
  }
  updateAccountType(event: any) {
    this.accountType = event.target.value;
    this.AccountService.updateAccountType(this.accountType)
  }


 }

