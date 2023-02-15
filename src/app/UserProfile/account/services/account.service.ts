import { Injectable } from '@angular/core';
import { AccountTypeinterface, AccountInterfaec, customerInterface } from '../../../tools';
import { HttpClient } from '@angular/common/http';
import { AccountTransfer } from '../../../tools/interface/accountTransfer';
import { AlertsService } from '../../../shared/alerts/alertsservices/alertsservices.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public customer: customerInterface | undefined
  public accountType: AccountTypeinterface | undefined
  public person!: AccountInterfaec
  public account: AccountInterfaec | undefined
  public accountUser: AccountTransfer[] = []
  public accountName: string = ''
  public accountType2: string = ''

  constructor(private http: HttpClient, private router: Router) {}

  getDataAccountType() {
    const accountType = localStorage.getItem('accountype');

    this.accountType = accountType ? JSON.parse(accountType) : null;
    return this.accountType;
  }

  getDatacustomer() {
    const customerDate = localStorage.getItem('customer');
    this.customer = customerDate ? JSON.parse(customerDate) : null;
    return this.customer;
  }




  private customerSubject: BehaviorSubject<customerInterface | undefined> = new BehaviorSubject<customerInterface | undefined>(undefined);

  setcustomer(customer: customerInterface) {
    this.customerSubject.next(customer);
  }

  getcustomer() {
    return this.customerSubject.asObservable();
  }



  private accountList: BehaviorSubject<AccountTransfer[]> = new BehaviorSubject<AccountTransfer[]>([]);

  setAccountList(customer: AccountTransfer[]) {
    this.accountList.next(customer);
  }

  getAccountList() {
    return this.accountList.asObservable();
  }




  getaccountUser() {
    const accountUser = localStorage.getItem('accountUser');
    this.accountUser = accountUser ? JSON.parse(accountUser) : null;
    return this.accountUser;
  }




  getDataAccount() {
    const account = localStorage.getItem('account');
    this.person = account ? JSON.parse(account) : null;

    this.http.get(`http://localhost:3000/account/${this.person?.accountUser.customer.id}`).subscribe(
      data => {
        console.log(data);
        this.accountUser = data as AccountTransfer[];
        this.person.accountUser = this.accountUser[0]
        this.customer = this.accountUser[0].customer;
        this.accountType = this.accountUser[0].accountType;
        this.setAccountList(this.accountUser)
        this.setcustomer(this.customer)

        this.setLocalStorage();
      },
      error => {
        console.error(error);
      }
    );

    return this.person;
  }

  setLocalStorage() {
    localStorage.setItem('customer', JSON.stringify(this.customer));
    localStorage.setItem('accountUser', JSON.stringify(this.accountUser));
    localStorage.setItem('accountType', JSON.stringify(this.accountType));

  }

  getAccount() {
    return this.person;
  }

  get(url: string) {
    return this.http.get<object[]>(url)
  }

  post(url: string, data: any) {
    return this.http.post<AccountTypeinterface>(url, data);
  }




  createAccount(){
    console.log("account");

   const account = localStorage.getItem('account');
   this.account = account ? JSON.parse(account) : null;
   const url = `http://localhost:3000/account/newAccount`

   const accountData = {
     name: this.accountType2,
     accountTypeId: "321-4eed-8133-443960db0b4d",
     accountID: this.account?.accountUser.id
   };
   this.http.post(url, accountData)
     .subscribe((response) => {
       console.log(response);
     });
     this.getDataAccount()

 }




 updateName(accountName:string) {
  this.accountName = accountName
  console.log(accountName);
}
updateAccountType(accountType:string) {
  this.accountType2 = accountType
  console.log(accountType);
}

}
