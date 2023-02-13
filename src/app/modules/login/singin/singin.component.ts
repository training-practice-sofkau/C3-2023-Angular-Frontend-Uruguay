import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SigninModel } from 'src/app/interfaces/signin.interface';
import { ServicesService } from 'src/app/services/services.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})

export class SinginComponent {
  constructor(
    protected generalService: ServicesService,
    private service: LoginService,
    private fb: FormBuilder) { }

  signinForm = this.fb.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  postSignin() {
    if (this.signinForm.controls.email.value && this.signinForm.controls.password.value) {
      let form: SigninModel = {
        email: this.signinForm.controls.email.value,
        password: this.signinForm.controls.password.value
      }
      this.service.signIn(form).subscribe(data => { console.log(data) })
    }
  }
}