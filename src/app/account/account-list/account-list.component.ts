import { Component, Host, OnInit } from "@angular/core";
import { Account } from "../interfaces/account";
import { AccountService } from "../services/account.service";


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  
  lisAcconuts : Account[] = [];

  constructor(@Host() public AccountService : AccountService ){}


  ngOnInit(): void {
    //Primero llamo el dato de la api atraves de mi servicio accountService
    this.AccountService.observableAccount
    .subscribe((data: Account[]) => {
      if(this.lisAcconuts.length != data.length)this.lisAcconuts = data});

    this.AccountService.updateAccountList();//
    
  }




}
