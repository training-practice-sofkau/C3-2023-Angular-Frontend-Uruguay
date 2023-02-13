import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountInterfaec } from '../../../tools';
import { AccountTransfer } from '../../../tools/interface/accountTransfer';
import { AccountTypeinterface } from '../../../tools/interface/Account-type-interface';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}


  get(url: string){
    return this.http.get<AccountTransfer[]>(url)

}

post(url: string, data: any){
  return this.http.post<AccountTypeinterface>(url, data)
}
}
