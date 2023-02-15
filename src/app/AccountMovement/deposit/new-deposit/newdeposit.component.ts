import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountInterfaec } from 'src/app/tools';
import { DepositService } from '../services/deposit.service';
import { DepositInterface } from '../../../tools/interface/deposit.interface';
import { AccountTransfer } from '../../../tools/interface/accountTransfer';
import { Router } from '@angular/router';
import { AlertsService } from '../../../shared/alerts/alertsservices/alertsservices.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newdeposit',
  templateUrl: './newdeposit.component.html',
})
export class NewdepositComponent implements OnInit {
  depositForm: FormGroup ;

  constructor(private FormBuilder: FormBuilder,  public DepositService: DepositService, public Router: Router, public AlertsService: AlertsService, public modalService: NgbModal) {
    this.depositForm = this.FormBuilder.group({
      accountType: ['', Validators.required],
      depositAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]]
    });
  }


  public account:AccountInterfaec | undefined
  public accounts!:AccountTransfer[]  ;
  public selectedAccountId!: string
  public amount!: number

  public depositList!: DepositInterface[] ;

    ngOnInit() {
      this.DepositService.getDataAccount()
      const list = localStorage.getItem('depositList')
     this.accounts = list? JSON.parse(list) :null

     this.DepositService.getAcountList().subscribe((accountUser) => {
      this.accounts = accountUser;
    });  

     this.depositForm = this.FormBuilder.group({
      accountType: ['', Validators.required],
      depositAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]]
    });
  }

  updateSelectedAccount(event: any) {
    this.selectedAccountId = event.target.value ;
    this.DepositService.updateSelectedAccount(this.selectedAccountId)
      }

    getAmount(){
      this.amount =  this.depositForm.value.depositAmount
      this.DepositService.getAmount(this.amount)

    }

    onSave(): void {
      this.modalService.dismissAll();
    }
    onClose(): void {
      this.modalService.dismissAll();
    }

  }
