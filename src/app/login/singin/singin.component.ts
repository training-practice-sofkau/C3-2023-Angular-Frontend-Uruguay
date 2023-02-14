import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global-service/service-global.service';
import { FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';
import { SignIn } from 'src/app/i-model/i-signIn';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
 
})
export class SinginComponent {

  /*
  email: string | undefined ;
  password: string | undefined;
  */

  constructor(public globalService :GlobalService,
              private formBuilder : FormBuilder,
              public loginService:LoginService,
              public routes : Router) {}

  ngOnInit(): void {
  
  }

//fullName: this.formBuilder.nonNullable.control('', { validators: [Validators.required] }),

  signInForm = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    password: new FormControl ('', Validators.required)
  });


  postSignIn(){
    if(this.signInForm.controls.username.value && this.signInForm.controls.password.value){
        let form: SignIn = {
          username: this.signInForm.controls.username.value,
          password: this.signInForm.controls.password.value 
        }
        this.loginService.login(form).subscribe({
          next: (response) =>{localStorage.setItem('Token', response),
        this.routes.navigate(['/customer-account/app-user-profile'])},
          error: (error:HttpErrorResponse)=> {alert(error.message)}
          })


    }
  }

  /*
  login() {
    console.log(this.email);
    console.log(this.password);
  }
*/


}
