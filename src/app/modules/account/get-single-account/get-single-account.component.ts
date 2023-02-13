import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'get-single-account',
  templateUrl: './get-single-account.component.html',
  styleUrls: ['./get-single-account.component.scss']
})
export class GetSingleAccountComponent {
  constructor(private service: AccountService) { }

  get oneResult() {
    return this.service.accountById
  }
}
