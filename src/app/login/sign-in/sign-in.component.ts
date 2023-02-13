import { Component } from '@angular/core';
import { SignInModel } from '../../interfaces/sign-in.interface';
import { FormControl, FormBuilder } from '@angular/forms';
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
      username: [''],
      password: ['']
    })

  login() {
    if(this.formUser.controls.username.value && this.formUser.controls.password.value) {

      const user: SignInModel = {
        username: this.formUser.controls.username.value,
        password: this.formUser.controls.password.value
      }

      this.service.signIn(user);
      this.router.navigate(['/dashboard'])
    }

  }
}
