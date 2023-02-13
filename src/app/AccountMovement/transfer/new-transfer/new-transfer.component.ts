import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService } from '../services/transfer.service';
import { TransferInterface } from '../../../tools/interface/transfer-Interface'
import { AccountTransfer } from '../../../tools/interface/accountTransfer';
import { Router } from '@angular/router';
import { AlertsService } from '../../../shared/alerts/alertsservices/alertsservices.service';
import { NewTransferInterface } from 'src/app/tools/interface/newTransernterface';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
})
export class NewTransferComponent implements OnInit {
  transferForm: FormGroup;

  constructor(private FormBuilder: FormBuilder, public TransferService: TransferService, public Router: Router, public AlertsService: AlertsService) {
    this.transferForm = this.FormBuilder.group({
      incomeAccount: ['', Validators.required],
      outcomeAccount: ['', Validators.required],
      transferAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
      transferReason: ['', Validators.required]
    });
  }

  public incomeAccount: AccountTransfer | undefined;
  public outcomeAccount: AccountTransfer | undefined;
  public accounts: AccountTransfer[] = [];
  public selectedIncomeAccountId: string | undefined;
  public selectedOutcomeAccountId: string | undefined;

  ngOnInit() {

    const transferList = localStorage.getItem('depositList')

    if (transferList) {
      this.accounts = JSON.parse(transferList);
      console.log(this.accounts)
    } else {
      this.accounts = [];
    }
    this.transferForm = this.FormBuilder.group({
      incomeAccount: ['', Validators.required],
      outcomeAccount: ['', Validators.required],

      transferAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
      transferReason: ['', Validators.required]
    });
  }

  updateSelectedIncomeAccount(event: any) {
    this.selectedIncomeAccountId = event.target.value;
    console.log(this.selectedIncomeAccountId)
  }



  createTransfer() {
    const account = localStorage.getItem('account');
    this.incomeAccount = account ? JSON.parse(account) : null;
    this.outcomeAccount = account ? JSON.parse(account) : null;
    const url = `http://localhost:3000/transfer/newTransfer`
    const transferData: NewTransferInterface = {
      outcome: this.transferForm.value.outcomeAccount,

      income: this.selectedIncomeAccountId ? this.selectedIncomeAccountId : '',

      transferAmount: Number(this.transferForm.value.transferAmount),
      transferReason: this.transferForm.value.transferReason,
      dateTime: new Date(this.transferForm.value.transferDateTime),
      state: true,

    };

    console.log(transferData)
      this.TransferService.post(url, transferData)
      .subscribe((response) => {
        console.log(response);
      });

    this.Router.navigate(['transfer']);
  }
}
