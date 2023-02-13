import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DepositModel } from '../../interfaces/deposit.model';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { AccountModel } from '../../interfaces/account.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deposit-history',
  templateUrl: './deposit-history.component.html',
  styleUrls: ['./deposit-history.component.scss']
})
export class DepositHistoryComponent implements OnInit{

  deposits!: DepositModel[];

  selectedId!: string

  constructor(private service: ServiceService,
    private router: Router,
    private fb: FormBuilder) {}


  ngOnInit(): void {

  }

  getHistory() {
    console.log(this.selectedId)
    if(this.selectedId != '' && this.selectedId != 'Select an Account') {
      this.service.getDepositHistory(this.selectedId)
      .subscribe(history => this.deposits = history);
    }
  }

}
