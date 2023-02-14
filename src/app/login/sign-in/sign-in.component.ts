import { Component } from '@angular/core';
import { SignInModel } from '../../interfaces/sign-in.interface';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private service: ServiceService,
    private fb: FormBuilder,
    private router: Router) {}

    formUser =  this.fb.group({
      username: this.fb.nonNullable.control('',
      {validators: [Validators.required]}),
      password: this.fb.nonNullable.control('',
      {validators: [Validators.required]})
    })

  login() {
    if(this.formUser.valid) {

      const user: SignInModel = this.formUser.getRawValue()

      this.service.signIn(user);
      setTimeout(() => this.router.navigate(['/dashboard']), 200)
    }

  }
}
