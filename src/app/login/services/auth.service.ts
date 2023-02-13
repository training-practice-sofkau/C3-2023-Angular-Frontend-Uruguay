import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountInterface } from 'src/app/interfaces/Account.interface';


import { CustomerInterface } from '../../interfaces/Customer.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get<AccountInterface>(url)
}
post(url: string, data:{}){
  return this.http.post<CustomerInterface>(url, data)
}

}
