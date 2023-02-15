import { Component, Host, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/interfaces/account.interface';
import { AccountsTableService } from './accounts-table.service';

@Component({
  selector: 'app-accounts-table',
  providers: [ AccountsTableService ],
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.scss']
})

export class AccountsTableComponent implements OnInit {

  AccountsList: AccountModel[] = [];

  constructor(@Host() public userAccountsTableService: AccountsTableService){}

  ngOnInit(): void {
    this.userAccountsTableService.accountsEmitter.subscribe((data: AccountModel[]) => { if (JSON.stringify(this.AccountsList) !== JSON.stringify(data)) this.AccountsList = data });
    this.userAccountsTableService.updateAllAccounts();
  }

}
