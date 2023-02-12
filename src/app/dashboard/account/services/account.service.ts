import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };


  constructor(
    private http: HttpClient,
    private api: ApiService,
  ) { }


  public getAllCustomers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]> (this.api.url + "/customer/getAll");
  }

  public getcustomerById(id: string): Observable<CustomerModel> {
    return this.http.get<CustomerModel> (this.api.url + "/customer/getCustomer/" + id);
  }

}
