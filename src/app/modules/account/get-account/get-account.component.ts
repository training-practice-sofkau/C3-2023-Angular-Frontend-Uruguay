import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'get-account',
  templateUrl: './get-account.component.html',
  styleUrls: ['./get-account.component.scss']
})
export class GetAccountComponent {
  constructor(private service: AccountService){}

  get result(){
    return this.service.allAccounts
  }
}