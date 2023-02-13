import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from '../../api/api.service';
import {  DocumentTypeModel } from '../../program-Funcional/interfaces/customerModel';
import { BehaviorSubject } from 'rxjs';
import { SignUpModel } from "../interfaces/signUpModel";
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserResponse, SignIn } from '../interfaces/signInModel';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tokenUser } from '../interfaces/tokenModel';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  protected documentType: DocumentTypeModel = {
    name: "",
  };
  
  protected newCustomer: SignUpModel = {
    documentType: this.documentType,//DocumentTypeModel , es un tipo de dato que nosotros creamos
    document: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
  };

  user ! : SignIn;
  public signUpObservable: BehaviorSubject<SignUpModel> = 
  new BehaviorSubject<SignUpModel>(this.newCustomer);
  
  constructor(
    private apiService : ApiService,
    private cookies : CookieService,
    private router : Router) { }
    
    newSigIn(user : SignIn){
      this.apiService.logIn(user).subscribe(
        (data) => sessionStorage.setItem('token',data));
    }
    
    helper = new JwtHelperService();
    
    hasUser():boolean{
      if(typeof sessionStorage.getItem('token') === 'string'){
        return true;
      }
      return false;
    }

    getUserLocalStorage():tokenUser {
      const token = sessionStorage.getItem('token');
      if(token ){
        const tokenUser : tokenUser | null= this.helper.decodeToken(token);
        if(tokenUser)  return tokenUser;
      }
        throw new Error("Token Vacio");
    }

    signOut () {
      sessionStorage.removeItem('token');
      this.router.navigate(['/singin']);
    }
  //
  // setToken(token: string){
  //   this.cookies.set('token',token);
  // }
  // getToken(){
  //   this.cookies.get('token');
  // }






  


}
