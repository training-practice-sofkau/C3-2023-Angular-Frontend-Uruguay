import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/interfaces/account.interface';
import { CookieService } from 'ngx-cookie-service';
import { UserAccountsService } from './user-accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-accounts',
  providers: [ UserAccountsService ],
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.scss']
})

export class UserAccountsComponent implements OnInit {

  UserAccountsList: AccountModel[] = [];

  colors: string[] = [ "red", "blue", "emerald", "yellow", "lime", "green", "violet", "purple", "rose" ];

  constructor(private cookie: CookieService, private userAccountsService: UserAccountsService, private router: Router){}

  ngOnInit(): void {
    this.userAccountsService.userAccountsEmitter.subscribe((data: AccountModel[]) => { if (this.UserAccountsList.length !== data.length) this.UserAccountsList = data });
    this.userAccountsService.updateUserAccountsTable();
  }

  toDeposit(i: number): void {
    this.cookie.set('currentAccount', this.UserAccountsList[i].id);
    this.router.navigate(['/accounts/deposits']);
  }

}
