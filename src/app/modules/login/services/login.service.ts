import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignIn } from 'src/app/interfaces/sign-in.interface';
import { ApiService } from '../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { CustomerModel, DocumentTypeModel } from 'src/app/interfaces/Customer.interface';
import { AccountModel } from 'src/app/interfaces/account.interface';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLogged: boolean = false;

  signedUpUsers: CustomerModel[] = [];

  signedUpUser: Object = {};

  documentTypes: DocumentTypeModel[] = [];

  customerAccounts: AccountModel[] = [];

  constructor(public api: ApiService,
              private http: HttpClient,
              private auth: Auth,
    ) { }

  login(form: SignIn): Observable<string>{
    let direction = this.api.url + "/security/signIn";
    return this.http.post(direction, form, { responseType: 'text'});
  }

  signUp(form: SignIn): Observable<string>{
    let direction = this.api.url + "/security/signUp";
    return this.http.post(direction, form, { responseType: 'text'});
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

  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
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
