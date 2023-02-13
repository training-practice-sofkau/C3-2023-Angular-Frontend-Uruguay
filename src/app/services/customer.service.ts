import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

// Interfaces
import { CustomerSignInModel, CustomerSignUpModel, CustomerModel } from '../interfaces/customer.interface';
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
  addNewCustomer(customer: CustomerSignUpModel) {

    const res = this.http.post<string>(`${environment.API_URL}/security/signup`, customer);

    //console.log(res)

    return res;
  }

  /**
   * Makes a request to backend with customer credentials
   */
  customerSignin(customer: CustomerSignInModel): Observable<any> {

    const res = this.http.post(`${environment.API_URL}/security/signin`, customer);

    return res;

  }

  getCustomerData(id: string) {

    console.log( id)

    this.http.get(`${environment.API_URL}/customer/id`)
      .subscribe({
        next: (response) => {

          const responseValue = response as CustomerModel;

          console.log(responseValue + ' - ' + id)

          //localStorage.setItem("customer", JSON.stringify(responseValue));

        },
        error: (e) => {
            console.log("Something went wrong, no customer data available!");
        }
      })
  }
}
