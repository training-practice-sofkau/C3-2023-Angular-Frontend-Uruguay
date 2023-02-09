import { Injectable, OnDestroy } from '@angular/core';
import { Account } from '../interfaces/account';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnDestroy {

  protected newAccounts : Account[] = [];
  public observableAccount : BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>(this.newAccounts); // le asigno un valor por defecto


  constructor(private apiService : ApiService) { }
  
  ngOnDestroy():void{
    this.observableAccount.unsubscribe();
  }


  updateAccountList = () =>{
    if(this.observableAccount.observed && !this.observableAccount.closed){
      this.apiService.getAllAccounts().subscribe({
        next: (typeApi) => { this.newAccounts = typeApi ;},
        complete: () => {this.observableAccount.next(this.newAccounts);}
      });
    }
  }

}
