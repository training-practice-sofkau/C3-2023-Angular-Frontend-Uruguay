import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/app/environments/environment';
import { DepositModel } from 'src/app/i-model/i-deposit';

@Injectable({
  providedIn: 'root'
})
export class DepositsService {

  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) {

   }



  public addDeposit(deposit : DepositModel ): Observable<DepositModel> {
    return this.http.post<DepositModel>(this.apiServeUrl +"/deposit/create", deposit);
  }



}
