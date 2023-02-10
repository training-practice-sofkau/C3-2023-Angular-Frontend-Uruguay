import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, asyncScheduler } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { AccountModel } from 'src/app/interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsTableService implements OnDestroy {

  protected newDataAccounts: AccountModel[] = [];
  public accountsEmitter: BehaviorSubject<AccountModel[]> = new BehaviorSubject<AccountModel[]>(this.newDataAccounts);

  constructor(private api: AppService) { }

  ngOnDestroy(): void {
    this.accountsEmitter.unsubscribe();
  }

  updateAllAccounts = () => {
    if(this.accountsEmitter.observed && !this.accountsEmitter.closed){
      this.api.getAllAccounts().subscribe({
        next: (value) => { this.newDataAccounts = value; },
        complete: () => {
          this.accountsEmitter.next(this.newDataAccounts);
          asyncScheduler.schedule(this.updateAllAccounts, 1000); }
      });
    } else {
      asyncScheduler.schedule(this.updateAllAccounts, 100);
    }
  }
}
