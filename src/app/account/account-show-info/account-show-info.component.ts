import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../../interfaces/account.model';
import { AccountInfoService } from '../../service/account-info.service';
import { ServiceService } from '../../service/service.service';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-account-show-info',
  templateUrl: './account-show-info.component.html',
  styleUrls: ['./account-show-info.component.scss']
})
export class AccountShowInfoComponent implements OnInit{

  account?: AccountModel;

  cannotDelete = false;

  constructor(private accountInfo: AccountInfoService,
    private service: ServiceService) {}

  ngOnInit(): void {
    this.accountInfo.accountsSource
    .subscribe(account => {
      this.account = account
      asyncScheduler.schedule(() => this.cannotDelete = false, 100)
    })
  }

  changeAccountType() {
    if(typeof this.account !== 'undefined') this.service.changeAccountType(this.account.id);
    asyncScheduler.schedule(() => window.location.reload(), 200)
  }

  deleteAccount() {
    if(this.account) {
      if(this.account.balance === 0) {
        this.service.deleteAccount(this.account.id);
        asyncScheduler.schedule(() => window.location.reload());
      }

      if(this.account.balance !== 0) {
        this.cannotDelete = true;
        asyncScheduler.schedule(() => this.cannotDelete = false, 5000)
      }
    }
  }
}
