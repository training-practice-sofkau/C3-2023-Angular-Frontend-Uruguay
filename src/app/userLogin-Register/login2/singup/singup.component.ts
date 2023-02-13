import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { signUpInterface } from 'src/app/tools/interface/signUpInterface';
import {AuthService} from '../'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {


  constructor (private formBuilder: FormBuilder, private router: Router,     private AuthService: AuthService,
    ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  formRegister = this.formBuilder.group({
    document: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.minLength(5)]],
    fullname: ['', [Validators.required, Validators.minLength(5)]],
    phone: ['', [Validators.required, Validators.minLength(5)]],
    accountType:['', [Validators.required, Validators.minLength(5)]],

  })






  mapFormValuesToObject(): signUpInterface {


    return {
      document: this.formRegister.value.document || '',
      password: this.formRegister.value.password || '',
      email: this.formRegister.value.email || '',
      fullname: this.formRegister.value.fullname || '',
      phone: this.formRegister.value.phone || '',
      accountType: this.formRegister.value.accountType || ''
    };
  }


  signUp() {
    
    const formValues = this.mapFormValuesToObject();
    this.AuthService.post3('http://localhost:3000/security/sign-up', formValues)
      .subscribe(
        (data) => {
          console.log(data);
          // manejo de la respuesta exitosa aquí
        },
        (error) => {
          console.error(error);
          // manejo de errores aquí
        }
      );
  }





}













