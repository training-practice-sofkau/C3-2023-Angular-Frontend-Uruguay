import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

// Interfaces
import { CustomerSignInModel, CustomerSignUpModel } from '../interfaces/customer.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(
    private http: HttpClient,
  ) { }


  /**
   * Makes a request to Backend to register a new customer
   * @param customer customer entity data
   * @returns validation token
   */
  addNewCustomer(customer: CustomerSignUpModel) : Observable<string> {

    const answ = this.http.post<string>(`${environment.API_URL}/security/signup`, customer)

    console.log(answ)

    return answ;
  }

  /**
   * Makes a request to backend with customer credentials
   */
  customerSignin(customer: CustomerSignInModel) : Observable<any> {

    const res = this.http.post(`${environment.API_URL}/security/signin`, customer);

    console.log(res)

     return res;

   }

}
