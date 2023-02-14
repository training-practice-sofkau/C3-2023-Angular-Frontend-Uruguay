import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { asyncScheduler } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-btns',
  templateUrl: './account-btns.component.html',
  styleUrls: ['./account-btns.component.scss']
})
export class AccountBtnsComponent {

  isCreatingAccount?: boolean;

  constructor(private service: ServiceService,
    private fb: FormBuilder,
    private router: Router) {}

  formAccAdd = this.fb.group({
    accountType: this.fb.nonNullable.control('',
    {validators: [Validators.required]})
  })

  createAdditionalAccount() {
    if(this.formAccAdd.valid) {
      if(this.formAccAdd.controls.accountType.value === 'Saving Account') this.service.createSavingAccount();
      if(this.formAccAdd.controls.accountType.value === 'Checking Account') this.service.createCheckingAccount();

      asyncScheduler.schedule(() => {
        this.isCreatingAccount = !this.isCreatingAccount;
        window.location.reload();
    }, 200)
    }
  }

}
