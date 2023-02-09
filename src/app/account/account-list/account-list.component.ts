import { Component, Host, OnInit } from "@angular/core";
import { Account } from "../interfaces/account";
import { AccountService } from "../services/account.service";


@Component({
  selector: 'app-account-list',
  providers: [AccountService],
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  
  lisAccounts : Account[] = [];
//Host es para que se use el mismo arreglo 
  constructor(@Host() public AccountService : AccountService ){} 

  ngOnInit(): void {
    //Primero llamo el dato de la api atraves de mi servicio accountService
    this.AccountService.observableAccount
    .subscribe((data: Account[]) => {
      if(this.lisAccounts.length != data.length)this.lisAccounts = data});

    
    this.AccountService.updateAccountList();//actualiza la lista de account
  }




}
