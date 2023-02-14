import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/enviroments';
import { SignUpModel } from '../interfaces/sign-up.interface';
import { SignInModel } from '../interfaces/sign-in.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomerModel } from '../interfaces/customer.interface';
import { AccountModel } from '../interfaces/account.model';
import { env } from 'process';
import { CreateDepositModel } from '../interfaces/create-deposit.model';
import { DepositModel } from '../interfaces/deposit.model';
import { map } from 'rxjs';
import { CreateTransferModel } from '../interfaces/create-transfer.dto';
import { TransferModel } from '../interfaces/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient,
    private router: Router) { }

    // AuthService

  signUp (customer: SignUpModel) {
  this.http.post(`${environment.apiBase}/security/signUp`, customer, {responseType: 'text'})
  .subscribe(resp => sessionStorage.setItem('jwt', resp));

  }

  signIn (customer: SignInModel) {
    this.http.post(`${environment.apiBase}/security/signIn`, customer, {responseType: 'text'})
    .subscribe(resp => sessionStorage.setItem('jwt', resp));

  }

  signOut () {
    const token = sessionStorage.getItem('jwt')

    this.http.post<boolean>(`${environment.apiBase}/security/signOut/`, {token: token})
    .subscribe(resp => {
      if(resp) {
        sessionStorage.removeItem('jwt')
      }
    })
  }

  //Customer Service
  helper = new JwtHelperService();

  hasUser(): boolean {
    if(sessionStorage.getItem('jwt')) {
      return true
    }

    return false;
  }


  getUserFromLocalStorage() {
    const token = sessionStorage.getItem('jwt')

    if(token != null) {
      return this.helper.decodeToken(token);
    }
  }

  getCustomerInfo() {
    const user = this.getUserFromLocalStorage();

    return this.http.get<CustomerModel>(`${environment.apiBase}/customer/find/${user.id}`)
  }


  //Account Service

  findAccount(id: string) {
    return this.http.get<AccountModel>(`${environment.apiBase}/account/find/${id}`)
  }

  getAccounts() {
    const user = this.getUserFromLocalStorage();

    return this.http.get<AccountModel[]>(`${environment.apiBase}/account/find-by-customer/${user.id}`)
  }

  //Deposit Service

  createDeposit(deposit: CreateDepositModel) {
    this.http.post<CreateDepositModel>(`${environment.apiBase}/deposit/create`, deposit)
    .subscribe();
  }

  getDepositHistory(id: string) {
    return this.http.get<DepositModel[]>(`${environment.apiBase}/deposit/get-history/${id}`)
  }

  //Transfer Service

  createTransfer(transfer: CreateTransferModel) {
    this.http.post(`${environment.apiBase}/transfer/create`, transfer)
    .subscribe()
  }

  getIncomes(id: string) {
    return this.http.get<TransferModel>(`${environment.apiBase}/transfer/get-history-in/${id}`)
  }

  getOutcomes(id: string) {
    return this.http.get<TransferModel>(`${environment.apiBase}/transfer/get-history-out/${id}`)
  }

  getTransferHistory(id: string) {
    return this.http.get<TransferModel>(`${environment.apiBase}/transfer/get-history/${id}`)
  }

}
