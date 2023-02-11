import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/interfaces/response.interface';
import { SignIn } from 'src/app/interfaces/sign-in.interface';
import { ApiService } from '../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public api: ApiService, private http: HttpClient, private formBuilder: FormBuilder ) { }

  login(form: SignIn): Observable<ResponseI>{
    let direction = this.api.url + "/security/signIn";
    return this.http.post<ResponseI>(direction, form);
  }

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

  loginForm = this.formBuilder.group({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onLogin(){
    if( this.loginForm.controls.email.value && this.loginForm.controls.password.value){
    let form = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }
    this.login(form).subscribe(data =>{
      console.log(data);
      this.activeLogin()
    })
  }
  }

  //      Intercambio de componentes de signIn y signUp

  public valorCaseLogin : number = 0;
  public switchLogIn : boolean = true;
  public switchLogUp : boolean = false;

  eligeLogin(){

    switch (this.valorCaseLogin){

      case 1 :
        this.switchLogIn = true;
        this.switchLogUp = false;
        console.log("LogIn :" + this.switchLogIn);
        break;

      case 2 :
        this.switchLogUp = true;
        this.switchLogIn = false;
        console.log("LogUp :" + this.switchLogUp);
        break;

    }
  }
}
