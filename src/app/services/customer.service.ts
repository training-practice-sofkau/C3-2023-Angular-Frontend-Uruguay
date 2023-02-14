import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

// Interfaces
import { CustomerSignInModel, CustomerSignUpModel, CustomerModel } from '../interfaces/customer.interface';
import { Observable } from 'rxjs';
import { SigninResponseModel, SigninTokenResponseModel } from '../interfaces/responses.interface';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { AccountModel } from '../interfaces/account.interface';

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
  addNewCustomer(customer: CustomerSignUpModel): Observable<SigninResponseModel> {

    return this.http.post<SigninResponseModel>(`${environment.API_URL}/security/signup`, customer);
  }

  /**
   * Makes a request to backend with customer credentials
   */
  customerSignin(customer: CustomerSignInModel): Observable<SigninResponseModel> {

    return this.http.post<SigninResponseModel>(`${environment.API_URL}/security/signin`, customer);

  }

  getCustomerData(id: string)  {


    this.http.get(`${environment.API_URL}/customer/${id}`, {})
        .subscribe({
          next: (response) => {

            const responseValue: CustomerModel = response as CustomerModel;

            localStorage.setItem("customer", JSON.stringify(responseValue));
          },
          error: (e) => {
            console.log("Something went wrong, no customer data available!");
          }
        })
  }

  getCustomerAccounts( id: string) {

     this.http.get<AccountModel>(`${environment.API_URL}/account/customer/${id}`, {})
     .subscribe({
      next: (response) => {

        const responseValue = response as unknown as AccountModel;

        localStorage.setItem("accounts", JSON.stringify(responseValue));
      },
      error: (e) => {
        console.log("Something went wrong, no customer data available!");
      }
    })
  }
}
