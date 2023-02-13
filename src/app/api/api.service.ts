import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../account/interfaces/account';
import { Customer } from '../customer/interface/customer';
import { Injectable } from '@angular/core';
import { SignUpModel } from '../login/interfaces/signUpModel';
import { SignIn, UserResponse } from '../login/interfaces/signInModel';

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
      'Access-Control-Allow-Methods': 'POST,GET',
      'Access-Control-Allow-Origin': '*'
    })
  }
  
  token! : string;
 //--------------Segurity----------------------------
  logIn(email :string , pass:string):Observable<UserResponse>{
    const body = {
      username: email,
      password: pass
    }
    return this.http.post<UserResponse>(`${this.BASE_URL}/security/singIn`,body,this.httpOptions);
      
      
    // .pipe(map((res: UserResponse) => {
    //   console.log(`Res =>`,res)
    //   //saveToke()
    // }),
    // catchError((err) => this.handlerError(err))
    // );
  }
  // logOut():void{}
  // private readToken():void{ //Guardar el token en el local storage

  // }
  // private saveToken():void{ // para guardar el token

  // }
  // private handlerError(err:any):Observable<never>{
  //   let errorMensaje = `A ocurrido un Error`;
  //   if(err){
  //     errorMensaje = `Error : code ${err.message}`
  //   } 
  //   window.alert(errorMensaje);
  //   return throwError(errorMensaje);
  // }
  
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

  getOneAccount(id : string):Observable<Account>{
    return this.http.get<Account>(`${this.BASE_URL}/account/customer/${id}`,this.httpOptions);
  }
  //--------------Customer----------------------------------------
  //(){}
  
  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>
    (`${this.BASE_URL}/customer/all`,this.httpOptions)
  }

  getOneCustomer(id : string):Observable<Customer>{
    return this.http.get<Customer>(`${this.BASE_URL}/customer/getInfo/${id}`,this.httpOptions);
  }

  getDocumentType(document : string):Observable<DocumentType>{
    return this.http.get<DocumentType>(`${this.BASE_URL}/customer/document-type/find-id/${document}`,this.httpOptions);
  }
  
  //Me tendria que retornar el token 
  sigUp(newCustomer: SignUpModel):Observable<string>{ // pasarle el string del documentType.id porque en el backend verifica si es strign
    return this.http.post<string>(`${this.BASE_URL}/singUp`,newCustomer,this.httpOptions);
  }
  
  //--------------Deposit----------------------------
  //--------------Transfer----------------------------
  //getDeposit(){}
  //getTransfer(){}
  //getBalance
  
  //get account type


  //create Account 
  //Create account type 


  
  


}
