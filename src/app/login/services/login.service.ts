import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignIn } from 'src/app/i-model/i-signIn';
import { SignUpModel } from 'src/app/i-model/i-signUp';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentStatus: boolean = false;
  public statusEmiter :BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.currentStatus)

  userLogged: boolean = false;

  private apiServeUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient,
              private auth : Auth) { 
    this.defaultLogin()
  }


  defaultLogin(){
    if(!localStorage.getItem('MyToken')){
      localStorage.setItem('MyToken', 'false')
    }   
  }
 
  activeLogin(){
    localStorage.setItem('MyToken', 'true')
    this.currentStatus = !this.currentStatus;
    this.statusEmiter.next(this.currentStatus);
  }
 
  logOut(){
    localStorage.clear()
  }

    ngOninit(){
      this.defaultLogin()
    }

  //********************METODOS HTTP***********************

  login(credentials: SignIn): Observable<string> {
    return this.http.post(this.apiServeUrl+"/security/singIn", credentials,{responseType: 'text'});
  }
  
  signUp(dataRegister: SignUpModel): Observable<string>{ 
    return this.http.post(this.apiServeUrl+"/security/singUp", dataRegister, { responseType: 'text'});
  }

  //***********************GOOGLE**************************
  
  registerGoogle({email, password} : any) {
    return createUserWithEmailAndPassword(this.auth, email, password) //LE PASO EL SERVICIO DE AUTENTICACION + MAIL + PASSWORD
  }

  loginGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

}


