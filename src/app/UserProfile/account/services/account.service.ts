import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountInterfaec } from '../../../tools';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}


  get(url: string){
    return this.http.get<AccountInterfaec>(url)

}
}
