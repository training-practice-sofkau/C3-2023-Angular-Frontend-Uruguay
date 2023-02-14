import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { CustomerModel } from '../../interfaces/customer.interface';
import { SignUpModel } from '../../interfaces/singup.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private api = environment.api;

  constructor(private  httpClient:HttpClient) { }


  

  public getAllCustomerById(): Observable <CustomerModel>{

    return this.httpClient.get<CustomerModel>(this.api + "/customer/getCustomerInfo/3a13fd85-65c2-4374-9921-48f4ccec4c1e" )
   
     }

  public getAllCustomer(): Observable <CustomerModel[]>{

    return this.httpClient.get<CustomerModel[]>(this.api + "/customer/getCustomers" )
   
     }

  public getCustomerById(id:string): Observable<CustomerModel>{

    return this.httpClient.get<CustomerModel>(this.api + "/customer/" + id)
    }

    public registerCustomer (sigUp: SignUpModel): Observable <SignUpModel>{

return this.httpClient.get<SignUpModel>(this.api + "/security/newUser" )
    }

    createUser(user: SignUpModel): Observable<SignUpModel> {
      return this.httpClient.post<SignUpModel>(
        this.api + '/security/newUser',
        user
      );
    }

    


}
