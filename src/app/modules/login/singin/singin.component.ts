import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { SignIn } from '../../../interfaces/sign-in.interface';
import { ResponseI } from 'src/app/interfaces/response.interface';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

  constructor(public loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  loginForm = this.formBuilder.group({
    email: new FormControl(''),
    password: new FormControl('')
  });

  // onLogin() {
  //   if (this.loginForm.controls.email.value && this.loginForm.controls.password.value) {
  //     let form = {
  //       email: this.loginForm.controls.email.value,
  //       password: this.loginForm.controls.password.value
  //     }
  //     this.loginService.login(form).subscribe(data => {
  //       console.log(data);
  //       this.loginService.activeLogin()
  //     })
  //   }
  // }

  onLogin() {
    if (this.loginForm.controls.email.value && this.loginForm.controls.password.value) {
      let form = {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      }
      this.loginService.login(form).subscribe(data => {
        let dataResponse: ResponseI = data;
        if (dataResponse.result == "ok") {
          localStorage.setItem("token", dataResponse.result.token);
          this.router.navigate(['account']);
        }
      })
    }
  }

}
