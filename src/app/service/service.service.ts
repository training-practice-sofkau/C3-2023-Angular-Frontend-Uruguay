import { HttpClient } from '@angular/common/http';
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

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient,
    private router: Router) { }

    // AuthService

  signUp (customer: SignUpModel) {
  this.http.post(`${environment.apiBase}/security/signUp`, customer, {responseType: 'text'})
  .subscribe(resp => localStorage.setItem('jwt', resp));

  }

  signIn (customer: SignInModel) {
    this.http.post(`${environment.apiBase}/security/signIn`, customer, {responseType: 'text'})
    .subscribe(resp => localStorage.setItem('jwt', resp));

  }

  signOut () {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login'])
  }

  //Customer Service

  helper = new JwtHelperService();

  hasUser(): boolean {
    if(typeof localStorage.getItem('jwt') === 'string') {
      return true
    }

    return false;
  }


  getUserFromLocalStorage() {
    const token = localStorage.getItem('jwt')

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

}
