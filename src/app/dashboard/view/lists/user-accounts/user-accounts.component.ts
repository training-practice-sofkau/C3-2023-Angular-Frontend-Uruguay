import { Component, Host, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/interfaces/account.interface';
import { CookieService } from 'ngx-cookie-service';
import { UserAccountsService } from './user-accounts.service';

@Component({
  selector: 'app-user-accounts',
  providers: [ UserAccountsService ],
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.scss']
})

export class UserAccountsComponent implements OnInit {

  UserAccountsList: AccountModel[] = [];

  constructor(private cookies: CookieService, @Host() public userAccountsService: UserAccountsService){}

  ngOnInit(): void {
    this.cookies.set("id", "f4d414bc-641d-4240-9180-4d2d0359b57a");
    this.userAccountsService.id = this.cookies.get("id");
    this.userAccountsService.userAccountsEmitter.subscribe((data: AccountModel[]) => { if (this.UserAccountsList.length !== data.length) this.UserAccountsList = data });
    this.userAccountsService.updateUserAccountsTable();
  }

}
