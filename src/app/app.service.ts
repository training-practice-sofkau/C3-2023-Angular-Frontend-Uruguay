import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from './interfaces/customer.interface';
import { AccountModel } from './interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseurl = "http://localhost:3000/api";

  constructor(public http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      //'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  };

  getAllCustomers() : Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(
      this.baseurl + "/customer/get-all",
      this.httpOptions
    );
  }

  getAllAccounts() : Observable<AccountModel[]> {
    return this.http.get<AccountModel[]>(
      this.baseurl + "/account/get-all",
      this.httpOptions
    );
  }

  getAllAccountsByCustomerId(id: string) : Observable<AccountModel[]> {
    const httpOptionsFinal = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
      }),
      params: new HttpParams().set("customer", id)
    };
    return this.http.get<AccountModel[]>(
      this.baseurl + "/account/get-by-customer-id",
      httpOptionsFinal
    );
  }

  getCustomerById(id: string): Observable<CustomerModel> {
    const httpOptionsFinal = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
      }),
      params: new HttpParams().set("customer", id)
    };
    return this.http.get<CustomerModel>(
      this.baseurl + "/customer/get-by-id",
      httpOptionsFinal
    );
  }
}
