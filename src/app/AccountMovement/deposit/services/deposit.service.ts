import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepositList } from 'src/app/tools/interface/depositListInterface';
import { DepositInterface } from '../../../tools/interface/deposit.interface';

@Injectable()
export class DepositService {
  constructor(private http: HttpClient) {}

  get(url: string){
    return this.http.get<DepositInterface[]>(url)
}
post(url: string, data: DepositInterface){
  return this.http.post<DepositInterface>(url, data)
}

}
