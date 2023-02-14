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

  isEmailUsed = false;

  constructor(private service: ServiceService,
    private fb: FormBuilder,
    private router: Router) {}

    formUser =  this.fb.group({
      username: this.fb.nonNullable.control('',
      {validators: [Validators.required]}),
      password: this.fb.nonNullable.control('',
      {validators: [Validators.required, Validators.minLength(8)]})
    })

  login() {
    if(this.formUser.valid) {

      const user: SignInModel = this.formUser.getRawValue()
      this.service.checkEmail(user.username)
      .subscribe(boolean => this.isEmailUsed = boolean)
      if(!this.isEmailUsed) {
        this.service.signIn(user);
        setTimeout(() => this.router.navigate(['/dashboard']), 200)
      }
      // this.formUser.controls.password
    }
  }

  onClick() {
    this.service.signInGoogle()
    .then(response => {
      if(response.user.email){
       this.service.loginGoogle({username: response.user.email})
      setTimeout(() => this.router.navigate(['/dashboard']), 200)}
    })
    .catch(error => console.log(error))
  }



}
