import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userIsLogged: boolean = false;

  isInPublicZone: boolean = true;

  constructor(

    private http: HttpClient,

  ) { }


  /**
   * Sets the status of public area
   * @param status boolean
   */
  public setIsPublicZone(status: boolean) {
    this.isInPublicZone = status;
  }

  /**
   *  Gets the status of public area
   * @returns boolean
   */
  public getIsPublicZone(): boolean {
    return this.isInPublicZone;
  }

  /**
   * Sets the status of the user ( login )
   * @param status boolean to set Status
   */
  public setUserStatus(status: boolean) {
    this.userIsLogged = status;
  }

  /**
   * return the status of the user ( login )
   * @returns boolean with the status of the user
   */
  public getUserStatus(): boolean {
    return this.userIsLogged;
  }
}

