import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, asyncScheduler } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { AccountModel } from 'src/app/interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService implements OnDestroy {

  protected newUserDataAccounts: AccountModel[] = [];
  public userAccountsEmitter: BehaviorSubject<AccountModel[]> = new BehaviorSubject<AccountModel[]>(this.newUserDataAccounts);
  public id: string = "";

  constructor(private api: AppService) { }

  ngOnDestroy(): void {
    this.userAccountsEmitter.unsubscribe();
  }

  updateUserAccountsTable = () => {
    if(this.userAccountsEmitter.observed && !this.userAccountsEmitter.closed){
        this.api.getAllAccountsByCustomerId(this.id).subscribe({
        next: (value) => { this.newUserDataAccounts = value; },
        complete: () => {
          this.userAccountsEmitter.next(this.newUserDataAccounts);
          asyncScheduler.schedule(this.updateUserAccountsTable, 1000); }
        });
    } else {
      asyncScheduler.schedule(this.updateUserAccountsTable, 1000);
    }
  }
}
