import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewTransferInterface } from 'src/app/tools/interface/newTransernterface';
import { TransferInterface } from '../../../tools/interface/transfer-Interface';
import { AccountTransfer } from '../../../tools/interface/accountTransfer';

@Injectable()
export class TransferService {
  accounts: AccountTransfer[] = [];

  constructor(private http: HttpClient) {}

  getTransferList(customerId: string): Observable<TransferInterface[]> {
    const url = `http://localhost:3000/transfer/getHistory/${customerId}`;
    return this.http.get<TransferInterface[]>(url).pipe(
      catchError(err => {
        console.error(err);
        return throwError('Error getting transfer list');
      })
    );
  }

  newTransfer(data: NewTransferInterface): Observable<NewTransferInterface> {
    const url = `http://localhost:3000/transfer/newTransfer`;
    return this.http.post<NewTransferInterface>(url, data).pipe(
      catchError(err => {
        console.error(err);
        return throwError('Error creating transfer');
      })
    );
  }

  setAccounts(accounts: AccountTransfer[]) {
    this.accounts = accounts;
  }

  getAccounts() {
    return this.accounts;
  }
}
