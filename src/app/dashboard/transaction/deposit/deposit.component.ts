import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DepositModel } from 'src/app/interfaces/deposit.interface';
import { ApiService } from '../../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {

  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    private http: HttpClient,
  ) { }

  depositForm = this.formBuilder.group({
    accountId: new FormControl(''),
    amount: new FormControl('')
  });

  depo(form: DepositModel): Observable<DepositModel> {
    let direction = this.api.url + "/deposit/createDeposit";
    return this.http.post<DepositModel>(direction, form);
  }

  deposit() {
    if (this.depositForm.controls.accountId.value && this.depositForm.controls.amount.value) {
      let form1 = {
        accountId: this.depositForm.controls.accountId.value,
        amount: + this.depositForm.controls.amount.value
      }
      this.depo(form1).subscribe(data => {
        console.log(data);
      })
    }
  }

}
