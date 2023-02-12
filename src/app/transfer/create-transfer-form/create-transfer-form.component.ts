import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { AccountModel } from '../../interfaces/account.model';
import { FormBuilder } from '@angular/forms';
import { CreateTransferModel } from '../../interfaces/create-transfer.dto';

@Component({
  selector: 'app-create-transfer-form',
  templateUrl: './create-transfer-form.component.html',
  styleUrls: ['./create-transfer-form.component.scss']
})
export class CreateTransferFormComponent implements OnInit{

  accounts!: AccountModel[];

  constructor(private service: ServiceService,
    private router: Router,
    private fb: FormBuilder) {}
  ngOnInit(): void {
    this.getAccounts()
  }

  formTransfer = this.fb.group({
    outcome: [''],
    income: [''],
    amount: [''],
    reason: ['']
  })

  getAccounts() {
    this.service.getAccounts()
    .subscribe(accounts => this.accounts = accounts)
  }

  createTransfer() {
    if(this.formTransfer.controls.outcome.value && this.formTransfer.controls.income.value && this.formTransfer.controls.amount.value) {


      const transfer: CreateTransferModel = {
        outcome: this.formTransfer.controls.outcome.value,
        income: this.formTransfer.controls.income.value,
        amount: parseInt(this.formTransfer.controls.amount.value),
        reason: this.formTransfer.controls.outcome.value || ''
      }

      this.service.createTransfer(transfer);
      this.router.navigate(['/dashboard'])
    }
  }

}
