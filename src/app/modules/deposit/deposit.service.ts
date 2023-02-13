import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepositModel } from 'src/app/interfaces/deposit.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  private url: string = 'http://localhost:3000/deposit'

  constructor(private http: HttpClient) { }

  createDeposit(deposit: DepositModel): Observable<DepositModel>{
    return this.http
      .post<DepositModel>(`${this.url}/create`, deposit)
  }
}
