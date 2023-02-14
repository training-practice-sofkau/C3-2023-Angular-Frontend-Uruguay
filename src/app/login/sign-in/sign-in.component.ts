import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { LoginResponseModel } from 'src/app/interfaces/login.response.interface';
import { ErrorTypes } from 'src/app/interfaces/error-type.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SigninComponent {
  show: boolean = true;
  error = {description: "error.description", state: false};

  signinForm = this.formBuilder.group({
    email: new FormControl("", Validators.email),
    password: new FormControl(""),
    remember: new FormControl(false)
  });

  constructor(private formBuilder: FormBuilder, private cookie: CookieService, private router: Router, private auth: AuthService) {}

  onSubmit(): void {
    if (this.signinForm.valid && this.signinForm.controls.email.value && this.signinForm.controls.password.value){
      let answer: LoginResponseModel;
      this.auth.login(this.signinForm.controls.email.value, this.signinForm.controls.password.value).subscribe({
        next: (value) => { answer = value; },
        error: () => { this.catchError(ErrorTypes.notfound) },
        complete: () => {
          this.error.state = false;
          (this.signinForm.controls.remember.value) ? this.cookie.set('token', answer.token) : sessionStorage.setItem('token', answer.token);
          this.auth.loadCurrentUser();
          this.router.navigate(["/dashboard/view"]);
        }
      });
    } else {
      this.catchError(ErrorTypes.invalid)
    }
  }

  redirect(url: string) {
    this.router.navigate(["/" + url]);
  }

  switchPassword(){
    this.show = !this.show;
  }

  catchError(error: ErrorTypes){
    this.error.state = true;
    this.error.description = error;
  }
}
