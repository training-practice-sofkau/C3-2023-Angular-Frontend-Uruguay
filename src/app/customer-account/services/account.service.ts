import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { AccountModel } from 'src/app/i-model/i-account';



@Injectable({
  providedIn: 'root'
})
export class AccountService {


  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getAccountById(idCustomer: string) : Observable<AccountModel[]> {
    return this.http.get<AccountModel[]> (this.apiServeUrl + "/account/get-account-by-customer-id/"+idCustomer)
  }



}





