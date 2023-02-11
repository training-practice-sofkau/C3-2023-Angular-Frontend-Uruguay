import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

  constructor (private loginService: LoginService, private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    email: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
    this.defaultLogin()
  }

  defaultLogin() {
    if(!localStorage.getItem('key'))
    localStorage.setItem('key', 'false')
  }

  activeLogin(){
    localStorage.setItem('key', 'true')
  }


  onLogin(){
    if( this.loginForm.controls.email.value && this.loginForm.controls.password.value){
    let form = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }
    this.loginService.login(form).subscribe(data =>{
      console.log(data);
      this.activeLogin()
    })
  }
  }

}
