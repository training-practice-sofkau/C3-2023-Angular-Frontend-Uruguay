import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewDocType } from '../models/newDocType.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
private readonly httpClient: HttpClient
  ) { }

createDocType(docType:NewDocType){

return this.httpClient.post('http://localhostl:3000/api/', docType.getData());
}

}
