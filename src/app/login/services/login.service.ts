import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { SignIn } from 'src/app/i-model/i-signIn';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServeUrl = environment.apiBaseUrl; //Api a consumir

  constructor(private http: HttpClient) { 
    this.defaultLogged()
  }


  defaultLogged(){
    if(!localStorage.getItem('MyToken')){
      localStorage.setItem('MyToken', 'false')
    }   
  }
 
  activeLogged(){
    localStorage.getItem('MyToken')
    localStorage.setItem('MyToken', 'true')
  }
 
  logOut(){
    localStorage.clear()
  }

  //****************************************************

  login(credentials: SignIn): Observable<string> {
    return this.http.post(this.apiServeUrl+"/security/singIn", credentials,{responseType: 'text'});
  }
  

}
