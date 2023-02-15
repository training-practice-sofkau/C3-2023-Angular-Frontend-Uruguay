import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewTransferInterface } from 'src/app/tools/interface/newTransernterface';
import { TransferInterface } from '../../../tools/interface/transfer-Interface';
import { AccountTransfer } from '../../../tools/interface/accountTransfer';
import { AccountInterfaec } from 'src/app/tools';

@Injectable()
export class TransferService {
  public accounts: AccountTransfer[] = [];
  public customer!: AccountInterfaec ;
  public transferList: TransferInterface[] = [];

  constructor(private http: HttpClient) {}

  getTransferList(customerId: string): Observable<TransferInterface[]> {
    const url = `http://localhost:3000/transfer/getHistory/${customerId}`;
    return this.http.get<TransferInterface[]>(url).pipe(
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Error getting transfer list'));
      })
    );
  }


  newTransfer(data: NewTransferInterface): Observable<NewTransferInterface> {
    const url = `http://localhost:3000/transfer/newTransfer`;
    return this.http.post<NewTransferInterface>(url, data).pipe(

      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Error creating transfer'));
      })
    );
  }

  setAccounts(accounts: AccountTransfer[]) {
    this.accounts = accounts;
  }

  getAccounts() {
    return this.accounts;
  }

  createTransfer(transferData: NewTransferInterface): Observable<any> {
    return this.newTransfer(transferData);
  }

  getTransferLista() {
    const customerId = localStorage.getItem('account');
    this.customer = customerId ? JSON.parse(customerId) : null;
    this.getTransferList(this.customer?.accountUser.id)
      .subscribe({
        next: data => {
          this.transferList = data;
          this.setTransferList(this.transferList)
        },
        error: error => {
          console.error(error);
        }
      });
  }

  private TransferList: BehaviorSubject<TransferInterface[]> = new BehaviorSubject<TransferInterface[]>([]);

  setTransferList(customer: TransferInterface[]) {
    this.TransferList.next(customer);
  }

  getTransferListt() {
    return this.TransferList.asObservable();
  }
}
