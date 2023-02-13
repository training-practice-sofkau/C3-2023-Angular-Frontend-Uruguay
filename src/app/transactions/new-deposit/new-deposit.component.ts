import { Component } from '@angular/core';
import { DepositsService } from '../services/deposits.service';
import { DepositModel } from 'src/app/i-model/i-deposit';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-deposit',
  templateUrl: './new-deposit.component.html',
  styleUrls: ['./new-deposit.component.scss']
})
export class NewDepositComponent {


  //  deposit = {accoundId : '52351beb-9c7b-45d3-8bf9-e590c720cb09', amount : 8000 }

  constructor(public  depositsService: DepositsService,
              private formBuilder : FormBuilder){

  }

  depositForm = this.formBuilder.group({
    id: new FormControl('', Validators.required),
    amount: new FormControl ('', Validators.required)
  });

  postDeposit(){
    if(this.depositForm.controls.id.value && this.depositForm.controls.amount.value){
        let form: DepositModel = {
          account: this.depositForm.controls.id.value,
          amount: + this.depositForm.controls.amount.value 
        }
        this.depositsService.addDeposit(form).subscribe(data => {console.log(data)})
    }
  }

  /*
  newDeposit(deposit : DepositModel){
    this.depositsService.addDeposit(deposit).subscribe(
      response =>{alert(deposit.accoundId+" Su deposito fue realizado con exito!")},
      (error:HttpErrorResponse)=> {alert(error.message)}
    );
  }
  */



}
