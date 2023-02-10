import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userIsValid: boolean = false;

  /**
   * Sets the status of the user ( login )
   * @param status boolean to set Status
   */
  public setUSerStatus(status: boolean){
    this.userIsValid = status;
  }

  /**
   * return the status of the user ( login )
   * @returns boolean with the status of the user
   */
  public getUserStatus(): boolean{
    return this.userIsValid;
  }


}
