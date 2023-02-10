import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { SignIn } from 'src/app/interfaces/sign-in.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

  constructor (private api: ApiService, private formBuilder: FormBuilder) {}

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
    this.api.login(form).subscribe(data =>{
      console.log(data);
      this.activeLogin()
    })
  }
  }

}
