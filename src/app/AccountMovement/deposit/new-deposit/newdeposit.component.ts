import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountInterfaec } from 'src/app/tools';
import { DepositService } from '../services/deposit.service';
import { DepositInterface } from '../../../tools/interface/deposit.interface';
import { AccountTransfer } from '../../../tools/interface/accountTransfer';
import { Router } from '@angular/router';
import { AlertsService } from '../../../shared/alerts/alertsservices/alertsservices.service';

@Component({
  selector: 'app-newdeposit',
  templateUrl: './newdeposit.component.html',
})
export class NewdepositComponent implements OnInit {
  depositForm: FormGroup ;

  constructor(private FormBuilder: FormBuilder,  public DepositService: DepositService, public Router: Router, public AlertsService: AlertsService) {
    this.depositForm = this.FormBuilder.group({
      accountType: ['', Validators.required],
      depositAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]]
    });
  }


  public account:AccountInterfaec | undefined
  public accounts:AccountTransfer[] = [] ;
  public selectedAccountId: string | undefined;

    ngOnInit() {
      this.getDataAccount()
    if (!Array.isArray(this.accounts)) {
      console.log(this.accounts);

        this.accounts = [this.accounts];
        console.log(this.accounts);

      }

      console.log(this.accounts);


    this.depositForm = this.FormBuilder.group({
      accountType: ['', Validators.required],
      depositAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]]
    });
  }

  updateSelectedAccount(event: any) {
    this.selectedAccountId = event.target.value;
    console.log(this.selectedAccountId)
  }

  createdeposit(){

   const account = localStorage.getItem('account');
   this.account = account ? JSON.parse(account) : null;
   const url = `http://localhost:3000/deposit/newDeposit`

   const depositdata: DepositInterface = {
      amount:  Number(this.depositForm.value.depositAmount),
     date_time: Date.now(),
     accountId: this.selectedAccountId ,
     state: true,
     id: this.selectedAccountId
   };
   this.DepositService.post(url, depositdata)
     .subscribe((response) => {
       console.log(response);
     });

     this.Router.navigate(['deposit']);



 }



 getDataAccount(){

  const account = localStorage.getItem('account');
  this.account = account ? JSON.parse(account) : null;


  this.DepositService.get2(`http://localhost:3000/account/${this.account?.accountUser.customer.id}`).subscribe(
    data => {
      console.log(data)
      this.accounts = data
      localStorage.setItem('depositList', JSON.stringify(this.accounts))


    },
    error => {
      console.error(error);
    }
  );



}






}
