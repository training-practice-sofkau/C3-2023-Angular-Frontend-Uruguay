import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userIsValid: boolean = false;

  constructor() { }


  setUSerStatus(status: boolean){
    this.userIsValid = status;
  }

  /**
   * return the status of the user
   * @returns boolean with the status of the user
   */
  getUserStatus(): boolean{
    return this.userIsValid;
  }


}
