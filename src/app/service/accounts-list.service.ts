import { Injectable, OnInit } from '@angular/core';
import { AccountModel } from '../interfaces/account.model';
import { BehaviorSubject } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsListService{

  accounts!: AccountModel[];
  accountsSource = new BehaviorSubject<AccountModel[]>(this.accounts)

  currentAccount = this.accountsSource.asObservable();

  constructor(private service: ServiceService) { }

  changeAccounts(accounts: AccountModel[]) {
    this.accountsSource.next(accounts);
  }
}
