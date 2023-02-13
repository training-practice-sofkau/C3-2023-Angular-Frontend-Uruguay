import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CustomerModel } from 'src/app/interfaces/Customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //apikey en realidad deberia ir en una .env(o algo asi)
  //private apiKey: string = 'asdf'
  private url: string = 'http://localhost:3000/customer'

  //Almacenar la consulta (pedida mas abajo)
  allCustomers: CustomerModel[] = []
  customerResult: CustomerModel[] = []

  constructor(private http: HttpClient) { }

  //Consulta a la api
  getCustomers(): void {
    //consulta
    this.http
      .get<CustomerModel[]>(`${this.url}/getall`)
      .subscribe(resp => this.allCustomers = resp)
  }

  getCustomerById(id: string): void {
    //validaciones
    id = id.trim().toLowerCase()
    //consulta
    this.http
      .get<CustomerModel[]>(`${this.url}/info/${id}`)
      .subscribe(resp => this.customerResult = resp)
  }
}
