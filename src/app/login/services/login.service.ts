import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { SignIn } from 'src/app/i-model/i-signIn';
import { SignUpModel } from 'src/app/i-model/i-signUp';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  userLogged: boolean = false;

  private apiServeUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { 
    this.defaultLogin()
  }


  defaultLogin(){
    if(!localStorage.getItem('MyToken')){
      localStorage.setItem('MyToken', 'false')
    }   
  }
 
  activeLogin(){
    localStorage.getItem('MyToken')
    localStorage.setItem('MyToken', 'true')
  }
 
  logOut(){
    localStorage.clear()
  }

  //********************METODOS HTTP***********************

  login(credentials: SignIn): Observable<string> {
    return this.http.post(this.apiServeUrl+"/security/singIn", credentials,{responseType: 'text'});
  }
  
  signUp(dataRegister: SignUpModel): Observable<string>{ 
    return this.http.post(this.apiServeUrl+"/security/singUp", dataRegister, { responseType: 'text'});
  }
}
