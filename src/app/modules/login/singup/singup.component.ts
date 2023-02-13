import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignUpModel } from 'src/app/interfaces/sign-up.interface';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {

  constructor(private formBuilder: FormBuilder,
    public loginService: LoginService,
    private router: Router,
  ) { }

  signUpForm = this.formBuilder.group({
    fullName: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    email: this.formBuilder.nonNullable.control('', { validators: [Validators.required, Validators.email] }),
    phone: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    password: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    documentTypeName: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    document: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    accountTypeName: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
  });

  onSignUp() {
    if (this.signUpForm.controls.documentTypeName.value
      && this.signUpForm.controls.document.value
      && this.signUpForm.controls.fullName.value
      && this.signUpForm.controls.email.value
      && this.signUpForm.controls.phone.value
      && this.signUpForm.controls.password.value
    ) {

      const form: SignUpModel = {
        documentTypeName: this.signUpForm.controls.documentTypeName.value,
        document: this.signUpForm.controls.document.value,
        fullName: this.signUpForm.controls.fullName.value,
        email: this.signUpForm.controls.email.value,
        phone: this.signUpForm.controls.phone.value,
        password: this.signUpForm.controls.password.value,
        accountTypeName: this.signUpForm.controls.accountTypeName.value,
      }
      this.loginService.signUp(form).subscribe(data => {
        console.log(data);
        localStorage.setItem('token', data);
        this.loginService.activeLogin()
        this.router.navigate(['account/user']);
      })
    }
  }
}
