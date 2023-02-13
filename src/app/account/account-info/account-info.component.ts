import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AccountModel } from '../../interfaces/account.model';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  account!: AccountModel;
  accounts!: AccountModel[];

  constructor(private service: ServiceService) {
  }

  ngOnInit(): void {
    this.setAccounts();
  }

  setAccounts() {
    this.service.getAccounts()
    .subscribe(accounts => this.accounts = accounts)
  }

}
