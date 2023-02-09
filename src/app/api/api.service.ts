import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../account/interfaces/account';
import { CreateAccount } from '../account/interfaces/createAccount';
import { Customer } from '../customer/interface/customer';

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

  getAllAccount():Observable<Account[]>{
    return this.http.get<Account[]>
    (`${this.BASE_URL}/account/find-all`,this.httpOptions)
  }

  getAllCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>
    (`${this.BASE_URL}/customer/all`,this.httpOptions)
  }
  
  


}
