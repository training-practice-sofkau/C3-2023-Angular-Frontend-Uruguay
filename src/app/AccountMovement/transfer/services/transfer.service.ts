import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewTransferInterface } from 'src/app/tools/interface/newTransernterface';
import { TransferInterface } from '../../../tools/interface/transfer-Interface';

@Injectable()
export class TransferService {
  constructor(private http: HttpClient) {}


  get(url: string){
    return this.http.get<TransferInterface[]>(url)
}
post(url: string, data: NewTransferInterface){
  return this.http.post<NewTransferInterface>(url, data)
}

}
