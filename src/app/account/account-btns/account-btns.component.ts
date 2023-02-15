import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { asyncScheduler } from 'rxjs';
import { Router } from '@angular/router';
import { AccountModel } from '../../interfaces/account.model';
import { AccountsListService } from '../../service/accounts-list.service';

@Component({
  selector: 'app-account-btns',
  templateUrl: './account-btns.component.html',
  styleUrls: ['./account-btns.component.scss']
})
export class AccountBtnsComponent implements OnInit {

  isCreatingAccount?: boolean;
  accounts!: AccountModel[];

  constructor(private service: ServiceService,
    private fb: FormBuilder,
    private router: Router,
    private accountsList: AccountsListService) {}

  ngOnInit(): void {
    this.service.getAccounts()
    .subscribe(accounts => this.accounts = accounts)
  }

  formAccAdd = this.fb.group({
    accountType: this.fb.nonNullable.control('',
    {validators: [Validators.required]})
  })

  createAdditionalAccount() {
    if(this.formAccAdd.valid) {
      if(this.formAccAdd.controls.accountType.value === 'Saving Account') this.service.createSavingAccount()
      .subscribe(account => this.accounts.push(account));
      if(this.formAccAdd.controls.accountType.value === 'Checking Account') this.service.createCheckingAccount()
      .subscribe(account => this.accounts.push(account));

      asyncScheduler.schedule(() => {
        this.isCreatingAccount = !this.isCreatingAccount;
        this.newAccounts();
    }, 200)
    }
  }

  newAccounts() {
    this.accountsList.changeAccounts(this.accounts);
  }

}
