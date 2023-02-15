import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from 'src/app/interfaces/customer.interface';
import { AccountInterface } from 'src/app/interfaces/account.interface';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient, private auth: Auth) { }

    statusVariable: BehaviorSubject <boolean> = new BehaviorSubject (true);

  //crear interface para todo
  get(url: string) {
    return this.http.get<AccountInterface>(url)
  }
  post(url: string, data: {}) {
    return this.http.post<CustomerModel>(url, data)
  }

  setStatusVariable(status: boolean){
    this.statusVariable.next(status)
  }

  private _check = false;

  public get check() {
    return this._check;
  }
  public set check(value) {
    this._check = value;
  }


  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);

  }

  loginWithGoogle(){

    return signInWithPopup(this.auth,new GoogleAuthProvider());
  }


  logout(){

    return signOut(this.auth);
  }




}
