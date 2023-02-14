import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import {  DocumentTypeModel } from '../../program-Funcional/interfaces/customerModel';
import { BehaviorSubject } from 'rxjs';
import { SignUpModel } from "../interfaces/signUpModel";
import { JwtHelperService } from '@auth0/angular-jwt';
import { SignIn } from '../interfaces/signInModel';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tokenCustomer, tokenUser } from '../interfaces/tokenModel';
import { Auth,createUserWithEmailAndPassword } from "@angular/fire/auth";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(
    private apiService : ApiService,
    private cookies : CookieService,
    private router : Router,
    private Auth : Auth) { }


register(user : SignIn){
  return createUserWithEmailAndPassword(this.Auth,user.username,user.password);
}


  protected documentType: DocumentTypeModel = {
    name: "",
  };
  
  protected newCustomer: SignUpModel = {
    documentTypeId: "",//DocumentTypeModel , es un tipo de dato que nosotros creamos
    accountTypeId: "",
    document: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
  };
  
  helper = new JwtHelperService();
  user ! : SignIn;
  customerSignUp! : SignUpModel;
  public signUpObservable: BehaviorSubject<SignUpModel> = 
  new BehaviorSubject<SignUpModel>(this.newCustomer);
  
    
    newSigIn(user : SignIn){
      this.apiService.logIn(user).subscribe(
        (data) => sessionStorage.setItem('token',data));
    }

    newSigUp(newCustomer : SignUpModel){
      this.apiService.sigUp(newCustomer).subscribe(
        (data) => sessionStorage.setItem('token',data));
    }
    
    
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

    getCustomerLocalStorage():tokenCustomer{
      const token = sessionStorage.getItem('token');
      if(token ){
        const tokenCustomer : tokenCustomer | null= this.helper.decodeToken(token);
        if(tokenCustomer)  return tokenCustomer;
      }
      throw new Error("token vacio : este error me aprece aunque tenga el token")
      
        
    }

    signOut () {
      sessionStorage.removeItem('token');
      this.router.navigate(['/singin']);
    }






  


}
