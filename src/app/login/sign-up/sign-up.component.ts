import { Component } from '@angular/core';
import { SignUpModel } from '../../interfaces/sign-up.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { Expression } from '@angular/compiler';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  email = ''
  fullName = ''
  phone = ''

  formUser = this.fb.group({
    documentType: this.fb.nonNullable.control('',
    {validators: [Validators.required]}),

    document: this.fb.nonNullable.control('',
    {validators: [Validators.required]}),

    fullName: this.fb.nonNullable.control('',
    {validators: [Validators.required]}),

    email: this.fb.nonNullable.control('',
    {validators: [Validators.required, Validators.email]}),

    phone: this.fb.nonNullable.control('',
    {validators: [Validators.required]}),

    password: this.fb.nonNullable.control('',
    {validators: [Validators.required, Validators.minLength(8)]}),

    confirmPassword: this.fb.nonNullable.control('',
    {validators: [Validators.required, Validators.minLength(8)]})
  });

  constructor(private service: ServiceService,
    private fb: FormBuilder,
    private router: Router) {}

  signUp () {
    if(this.formUser.valid) {

        const user: SignUpModel = this.formUser.getRawValue();

        if(this.formUser.controls.password.value === this.formUser.controls.confirmPassword.value) {
          this.service.signUp(user)
          setTimeout(() => this.router.navigate(['/dashboard']), 200)
        }
      }
  }

  signUpGoogle() {
    this.service.signInGoogle()
    .then(response => {
      console.log(response);

      if(response.user.email) this.email = response.user.email
      if(response.user.displayName) this.fullName = response.user.displayName
      if(response.user.phoneNumber) this.phone = response.user.phoneNumber
    })
    .catch(error => console.log(error))
  }
}
