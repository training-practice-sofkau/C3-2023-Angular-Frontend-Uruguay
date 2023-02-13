import { Component } from '@angular/core';
import { SignUpModel } from '../../interfaces/sign-up.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  formUser = this.fb.group({
    documentType: [''],
    document: [''],
    fullName: [''],
    email: [''],
    phone: [''],
    password: [''],
    confirmPassword: ['']
  });

  constructor(private service: ServiceService,
    private fb: FormBuilder,
    private router: Router) {}

  signUp () {
    if(this.formUser.controls.documentType.value && this.formUser.controls.document.value && this.formUser.controls.fullName.value &&
      this.formUser.controls.email.value && this.formUser.controls.phone.value && this.formUser.controls.password.value) {

        const user: SignUpModel = {
          documentType: this.formUser.controls.documentType.value,
          document: this.formUser.controls.document.value,
          fullname: this.formUser.controls.fullName.value,
          email: this.formUser.controls.email.value,
          phone: this.formUser.controls.phone.value,
          password: this.formUser.controls.password.value,
        }


        this.service.signUp(user)
        this.router.navigate(['/dashboard'])
      }
  }
}
