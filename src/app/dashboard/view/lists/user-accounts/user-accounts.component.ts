import { Component, OnInit } from '@angular/core';
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

  colors: string[] = [ "red", "blue", "emerald", "yellow", "lime", "green", "violet", "purple", "rose" ];

  constructor(private cookies: CookieService, public userAccountsService: UserAccountsService){}

  ngOnInit(): void {
    this.userAccountsService.userAccountsEmitter.subscribe((data: AccountModel[]) => { if (this.UserAccountsList.length !== data.length) this.UserAccountsList = data });
    this.userAccountsService.updateUserAccountsTable();
  }

}
