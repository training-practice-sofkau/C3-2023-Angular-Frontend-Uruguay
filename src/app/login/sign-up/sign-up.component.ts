import { Component } from '@angular/core';
import { SignUpModel } from '../../interfaces/sign-up.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  formUser = this.fb.group({
    documentType: this.fb.nonNullable.control('',
    {validators: [Validators.required]}),

    document: this.fb.nonNullable.control('',
    {validators: [Validators.required]}),

    fullName: this.fb.nonNullable.control('',
    {validators: [Validators.required]}),

    email: this.fb.nonNullable.control('',
    {validators: [Validators.required]}),

    phone: this.fb.nonNullable.control('',
    {validators: [Validators.required]}),

    password: this.fb.nonNullable.control('',
    {validators: [Validators.required]}),

    confirmPassword: this.fb.nonNullable.control('',
    {validators: [Validators.required]})
  });

  constructor(private service: ServiceService,
    private fb: FormBuilder,
    private router: Router) {}

  signUp () {
    if(this.formUser.valid) {

        const user: SignUpModel = this.formUser.getRawValue();


        this.service.signUp(user)
        setTimeout(() => this.router.navigate(['/dashboard']), 200)
      }
  }
}
