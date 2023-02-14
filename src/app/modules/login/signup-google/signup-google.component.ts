import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { SignUpModel } from 'src/app/interfaces/sign-up.interface';

@Component({
  selector: 'app-signup-google',
  templateUrl: './signup-google.component.html',
  styleUrls: ['./signup-google.component.scss']
})
export class SignupGoogleComponent {

  constructor(private formBuilder: FormBuilder,
    public loginService: LoginService,
    private router: Router,
  ) { }

  signUpForm = this.formBuilder.group({
    fullName: this.loginService.fullName,
    email: this.loginService.email,
    phone: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    password: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    documentTypeName: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    document: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
    accountTypeName: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),
  });

  onSignUp() {
    if (this.signUpForm.controls.documentTypeName.value
      && this.signUpForm.controls.document.value
      && this.loginService.fullName
      && this.loginService.email
      && this.signUpForm.controls.phone.value
      && this.signUpForm.controls.password.value
    ) {

      const form: SignUpModel = {
        documentTypeName: this.signUpForm.controls.documentTypeName.value,
        document: this.signUpForm.controls.document.value,
        fullName: this.loginService.fullName,
        email: this.loginService.email,
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
