import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../account/interfaces/account';
import { CreateAccount } from '../account/interfaces/createAccount';
import { Customer } from '../customer/interface/customer';
import { Injectable } from '@angular/core';
import { SignUpModel } from '../login/singup/interfaces/signUpModel';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      //'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  }
  


  //--------------Account----------------------------
  //createAccount(){}
  //createAccountType(){}
  //updateAccount(){}
  //deleteAccount(){}
  //getAccountType(){}
  //getBalanceAccount(){}
  //getCustomerAccount(){}
  //getStateAccount(){}
  //addBalanceAccount(){}
  //changeAccountType(){}
  //removeBalanceAll(){}
  //changeStateAccount(){}
  //removeBalance(){}
  
  getAllAccounts():Observable<Account[]>{
    return this.http.get<Account[]>
    (`${this.BASE_URL}/account/find-all`,this.httpOptions)
  }
  //--------------Customer----------------------------------------
  //(){}
  
  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>
    (`${this.BASE_URL}/customer/all`,this.httpOptions)
  }
  
  sigUp(newCustomer: SignUpModel):Observable<SignUpModel>{ // pasarle el string del documentType.id porque en el backend verifica si es strign
    return this.http.post<SignUpModel>(`${this.BASE_URL}/singUp`,newCustomer);
  }
  
  //--------------Deposit----------------------------
  //--------------Transfer----------------------------
  //--------------Segurity----------------------------
  //getDeposit(){}
  //getTransfer(){}
  //getBalance
  
  //get account type


  //create Account 
  //Create account type 


  
  


}
