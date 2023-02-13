import { AccountService } from '../services/account.service';
import { Component } from '@angular/core';
import { AccountInterfaec } from 'src/app/tools';
import { FormBuilder,  } from '@angular/forms';




@Component({
  selector: 'app-createaccounttype',
  templateUrl: './createaccounttype.component.html',
})
export class CreateaccounttypeComponent {

  constructor(public AccountService: AccountService,    private formBuilder: FormBuilder,
    ) {}

  public account: AccountInterfaec | undefined
  public accountName: string = ''
  public accountType: string = ''

  updateName(event: any) {
    this.accountName = event.target.value;
    console.log(this.accountName);
  }
  updateAccountType(event: any) {
    this.accountType = event.target.value;
    console.log(this.accountType);
  }

  createAccount(){
     console.log("account");

    const account = localStorage.getItem('account');
    this.account = account ? JSON.parse(account) : null;
    const url = `http://localhost:3000/account/newAccount`

    const accountData = {
      name: this.accountType,
      accountTypeId: "321-4eed-8133-443960db0b4d",
      accountID: this.account?.accountUser.id
    };
    this.AccountService.post(url, accountData)
      .subscribe((response) => {
        console.log(response);
      });
  }

 }

