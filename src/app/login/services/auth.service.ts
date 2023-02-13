import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from '../../api/api.service';
import {  DocumentTypeModel } from '../../program-Funcional/interfaces/customerModel';
import { BehaviorSubject } from 'rxjs';
import { SignUpModel } from "../interfaces/signUpModel";
import { UserResponse, SignIn } from '../interfaces/signInModel';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
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

  public signUpObservable: BehaviorSubject<SignUpModel> = 
  new BehaviorSubject<SignUpModel>(this.newCustomer);
  
  constructor(
    private apiService : ApiService,) { }







  


}
