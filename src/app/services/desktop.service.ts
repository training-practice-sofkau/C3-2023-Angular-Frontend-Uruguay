import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesktopService {

  constructor() { }

  //ACCOUNTS

  accounts: BehaviorSubject<[]> = new BehaviorSubject([]);

  /**
   * Gets the user accounts data from localstorage
   * and parse it into an manageable array
   */
  updateUserAccounts() {
    const data = localStorage.getItem("accounts");

      if (data != null) {
        this.accounts.next(JSON.parse(data))
      }
  }

}


