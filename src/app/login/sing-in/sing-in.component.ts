import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { LoginModel } from 'src/app/interfaces/login.interface';
import { LoginResponseModel } from 'src/app/interfaces/login.response.interface';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SinginComponent {
  show: boolean = true;

  signinForm = this.formBuilder.group({
    email: new FormControl("", Validators.email),
    password: new FormControl(""),
    remember: new FormControl("")
  });

  constructor(private formBuilder: FormBuilder, private cookie: CookieService, private router: Router, private auth: AuthService) {}

  redirect(url: string) {
    this.router.navigate(["/" + url]);
  }

  switchPassword(){
    this.show = !this.show;
  }

  onSubmit(): void {
    if (this.signinForm.valid && this.signinForm.controls.email.value && this.signinForm.controls.password.value){
      let answer: LoginResponseModel;
      this.auth.login(this.signinForm.controls.email.value, this.signinForm.controls.password.value).subscribe({
        next: (value) => { answer = value; },
        complete: () => {
          this.cookie.set('id', answer.customer.id);
          this.cookie.set('token', answer.token);
          this.auth.loadCurrentUser();
          this.router.navigate(["/"]);
        }
      });
    }
  }
}
