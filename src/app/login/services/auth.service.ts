import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   private _check = false;
   
  public get check() {
    return this._check;
  }
  public set check(value) {
    this._check = value;
  }


}
