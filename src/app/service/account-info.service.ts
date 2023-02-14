import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { AccountModel } from '../interfaces/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

  account!: AccountModel;
  accountsSource = new BehaviorSubject<AccountModel>(this.account)

  currentAccount = this.accountsSource.asObservable();

  constructor() { }

  changeAccount(account: AccountModel) {
    this.accountsSource.next(account);
  }
}
