import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferInterface } from '../../../tools/interface/transfer-Interface';

@Injectable()
export class TransferService {
  constructor(private http: HttpClient) {}


  get(url: string){
    return this.http.get<TransferInterface[]>(url)
}
post(url: string, data: TransferInterface){
  return this.http.post<TransferInterface>(url, data)
}

}
