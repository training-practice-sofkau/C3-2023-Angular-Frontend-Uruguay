import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from 'src/app/interfaces/customer.interface';
import { AccountInterface } from 'src/app/interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(

    private http: HttpClient

  ) {   }
 
//crear interface para todo
  get(url: string){
    return this.http.get<AccountInterface>(url)
}
post(url: string, data: any){
  return this.http.post<CustomerModel>(url, data)
}


   private _check = false;

  public get check() {
    return this._check;
  }
  public set check(value) {
    this._check = value;
  }


  

}
