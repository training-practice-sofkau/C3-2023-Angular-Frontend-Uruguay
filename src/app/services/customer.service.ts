import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

// Interfaces
import { CustomerSignInModel, CustomerSignUpModel, CustomerModel } from '../interfaces/customer.interface';
import { Observable } from 'rxjs';
import { SigninResponseModel } from '../interfaces/responses.interface';
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

  /**
   * Get the information of the customer by a given id
   * @param id id to search
   */
  getCustomerData(id: string) {

    this.http.get(`${environment.API_URL}/customer/${id}`, {})
      .subscribe({
        next: (response) => {

          const responseValue: CustomerModel = response as CustomerModel;

          localStorage.setItem("customer", JSON.stringify(responseValue));
        },
      })
  }

  /**
   * Search the database for the customer with the given email
   * @param email data to be found
   * @returns
   */
  findCustomerByEmail(email: string | null): Observable<CustomerModel> {

    return this.http.get<CustomerModel>(`${environment.API_URL}/customer/email/${email}`)

  }
  /**
   * get the list of accounts of the customer with the given id
   * @param id id to be search for
   */
  getCustomerAccounts(id: string) {

    this.http.get<AccountModel>(`${environment.API_URL}/account/customer/${id}`, {})
      .subscribe({
        next: (response) => {

          const responseValue = response as unknown as AccountModel;

          localStorage.setItem("accounts", JSON.stringify(responseValue));
        },
      })
  }
}
