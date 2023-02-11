import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from '../i-model/i-customer';

@Injectable({
  providedIn: 'root'
})
export class ServiceGlobalService {


  private apiServeUrl = environment.apiBaseUrl; //Api a consumir

  constructor(private http: HttpClient) {

   }

   public getCustomer(): Observable<CustomerModel[]> {
      return this.http.get<CustomerModel[]> (this.apiServeUrl+"/customer/findall");
   }




}
