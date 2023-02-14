import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInModel } from '../../interfaces/signin.interface';
import { SignUpModel } from 'src/app/interfaces/signup.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = 'http://localhost:3000/security'

  constructor(private http: HttpClient) { }

  signIn(signIn: SignInModel) {
    this.http
      .post(`${this.url}/signin`, signIn, {responseType: 'text'})
      .subscribe(token => localStorage.setItem("token", token))
  }

  signUp(signUp: SignUpModel){
    this.http
      .post(`${this.url}/signup`, signUp, {responseType: 'text'})
      .subscribe(token => localStorage.setItem("token", token))
  }
}
