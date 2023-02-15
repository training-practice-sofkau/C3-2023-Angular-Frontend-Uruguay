import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

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
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  onLogin() {
    if (this.loginForm.controls.email.value && this.loginForm.controls.password.value) {
      let form = {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      }
      this.loginService.login(form).subscribe(data => {
        console.log(data);
        localStorage.setItem('token', data);
        this.loginService.activeLogin();
        this.router.navigate(['account/user']);
      })
    }
  }

}
