import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { CustomerModel } from '../../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private api = environment.api;

  constructor(private  httpClient:HttpClient) { }


  
  public getAllCustomer(): Observable <CustomerModel[]>{

    return this.httpClient.get<CustomerModel[]>(this.api + "/customer/getCustomers" )
   
     }

  public getCustomerById(id:string): Observable<CustomerModel>{

    return this.httpClient.get<CustomerModel>(this.api + "/customer/" + id)
    }
    


}
