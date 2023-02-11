import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

// Interfaces
import { CustomerSignUpModel } from '../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(
    private http: HttpClient,
  ) { }

  addNewCustomer(customer: CustomerSignUpModel) {
    this.http.post(`${environment.API_URL}/security/signup`, customer)
  }

}
