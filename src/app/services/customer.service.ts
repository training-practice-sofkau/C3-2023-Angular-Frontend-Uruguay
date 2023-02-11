import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

// Interfaces
import { CustomerSignUpModel } from '../interfaces/customer.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(
    private http: HttpClient,
  ) { }

  addNewCustomer(customer: CustomerSignUpModel) : Observable<string> {

    const answ = this.http.post<string>(`${environment.API_URL}/security/signup`, customer)

    console.log(answ)

    return answ;
  }

}
