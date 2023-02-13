import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
private readonly httpClient:HttpClient,
  ) { }

listAccount(){

return this.httpClient.get('http://localhost:3000/api/')
  
}


}
