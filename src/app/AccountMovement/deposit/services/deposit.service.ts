import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepositInterface } from 'src/app/tools/interface/deposit.interface';
import { AccountInterfaec } from 'src/app/tools/interface/account-interface';
import { AccountTransfer } from 'src/app/tools/interface/accountTransfer';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepositService {

  constructor(private http: HttpClient, private Router: Router) {}


  public depositdata!: DepositInterface
  public accounts:DepositInterface[] = [] ;
  public selectedAccountId: string | undefined;
  public amount!:number
  public account!:AccountInterfaec
  public depositList: AccountTransfer[] = [];




  getDepositList(customerId: string | undefined)  {
    const url = `http://localhost:3000/deposit/${customerId}`;
    return this.http.get<DepositInterface[]>(url);
  }

  addDeposit(deposit: DepositInterface) {
    const url = `http://localhost:3000/deposit/newDeposit`;
    return this.http.post<DepositInterface>(url, deposit);
  }

  getAccountList(customerId: string){
    const url = `http://localhost:3000/account/${customerId}`;

    return this.http.get<AccountTransfer[]>(url)
  }



updateSelectedAccount(Account: string) {
  this.selectedAccountId = Account
}

getAmount(amount:number)
{ this.amount = amount
  return this.amount
}


  createDepositMap(){
      this.depositdata= {
      amount: this.amount,
     date_time: Date.now(),
     accountId: this.selectedAccountId ,
     state: true,
     id: this.selectedAccountId
   };
   return this.depositdata
  }


  createdeposit(){
    const deposit  = this.createDepositMap()

    this.addDeposit(deposit)
      .subscribe((response) => {
        console.log(response);
      });

      this.Router.navigate(['deposit']);

  }



  getDataAccount(){

    const account = localStorage.getItem('account');

    this.account = account ? JSON.parse(account) : null;
    console.log(this.account.accountUser.customer.id)

    if (this.account) {
      this.getAccountList(this.account.accountUser.customer.id).subscribe(
        data => {
          console.log(data)
          this.getDepositListByCustomer() 
          this.depositList = data
          localStorage.setItem('depositList', JSON.stringify(this.depositList))
          this.accountList.next(this.depositList);


        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error('Account is not set.');
    }
  }



getDepositListByCustomer() {
      const account = localStorage.getItem('account');

    this.account = account ? JSON.parse(account) : null;
    if (this.account) {
      this.getDepositList(this.account.accountUser.customer.id).subscribe(
        depositList => {
          this.accounts = depositList;
          this.setDepositListt(this.accounts)
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  private accountList: BehaviorSubject<AccountTransfer[]> = new BehaviorSubject<AccountTransfer[]>([]);

  setAccountList(customer: AccountTransfer[]) {
    this.accountList.next(customer);
  }

  getAcountList() {
    return this.accountList.asObservable();
  }



  private DepositListt: BehaviorSubject<DepositInterface[]> = new BehaviorSubject<DepositInterface[]>([]);

  setDepositListt(customer: DepositInterface[]) {
    this.DepositListt.next(customer);
  }

  getDepositListt() {
    return this.DepositListt.asObservable();
  }


}
