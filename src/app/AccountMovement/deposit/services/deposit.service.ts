import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountInterfaec } from 'src/app/tools';
import { DepositList } from 'src/app/tools/interface/depositListInterface';
import { DepositInterface } from '../../../tools/interface/deposit.interface';
import { AccountTransfer } from '../../../tools/interface/accountTransfer';

@Injectable()
export class DepositService {
  constructor(private http: HttpClient) {}

  get(url: string){
    return this.http.get<DepositInterface[]>(url)
}

get2(url: string){
  return this.http.get<AccountTransfer[]>(url)
}

post(url: string, data: DepositInterface){
  return this.http.post<DepositInterface>(url, data)
}

}
