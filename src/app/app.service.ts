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

  httpheaders = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, GET',
      'Access-Control-Allow-Origin': '*'
  });

  getAllCustomers() : Observable<CustomerModel[]> {
    const httpOptions = {
      headers: this.httpheaders
    };
    return this.http.get<CustomerModel[]>(
      this.baseurl + "/customer/get-all",
      httpOptions
    );
  }

  getAllAccounts() : Observable<AccountModel[]> {
    const httpOptions = {
      headers: this.httpheaders
    };
    return this.http.get<AccountModel[]>(
      this.baseurl + "/account/get-all",
      httpOptions
    );
  }

  getAllAccountsByCustomerId(id: string) : Observable<AccountModel[]> {
    const httpOptions = {
      headers: this.httpheaders,
      params: new HttpParams().set("customer", id)
    };
    return this.http.get<AccountModel[]>(
      this.baseurl + "/account/get-by-customer-id",
      httpOptions
    );
  }

  getCustomerById(id: string): Observable<CustomerModel> {
    const httpOptions = {
      headers: this.httpheaders,
      params: new HttpParams().set("customer", id)
    };
    return this.http.get<CustomerModel>(
      this.baseurl + "/customer/get-by-id",
      httpOptions
    );
  }

}
