import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CreateDepositModel } from '../../interfaces/create-deposit.model';
import { ServiceService } from '../../service/service.service';
import { AccountModel } from '../../interfaces/account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-deposit-form',
  templateUrl: './create-deposit-form.component.html',
  styleUrls: ['./create-deposit-form.component.scss']
})
export class CreateDepositFormComponent implements OnInit{

  accounts!: AccountModel[];

  selectedId = '';
  amount = 0;
  selectedOption?: string;

  constructor(private service: ServiceService,
    private router: Router) {}

  ngOnInit(): void {
    this.getAccounts()
  }

  getAccounts() {
    this.service.getAccounts()
    .subscribe(accounts => this.accounts = accounts)
  }

  createDeposit() {
    if(this.selectedId != 'Select an Account' && this.selectedId != '' && this.amount > 0) {

      const deposit: CreateDepositModel = {
        accountId: this.selectedId,
        amount: this.amount
      }

      this.service.createDeposit(deposit)
      this.router.navigate(['/dashboard'])
    }
  }


}
