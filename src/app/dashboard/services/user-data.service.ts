import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private cookie: CookieService) { }

  get(key: string) : string {
    let answer: string = '';
    if (this.cookie.check(key)) answer = this.cookie.get(key);
    if (sessionStorage.getItem(key)) answer = sessionStorage.getItem(key) || 'null';
    if (answer !== 'null' || ''){
      return answer;
    } else throw new Error;
  }

  set(key: string, value: string, cookies?: boolean) : void {
    if (cookies){
      this.cookie.set(key, value);
    } else {
      sessionStorage.setItem(key, value);
    }
  }

  check(key: string) : boolean {
    let answer: string = '';
    if (this.cookie.check(key)) answer = this.cookie.get(key);
    if (sessionStorage.getItem(key)) answer = sessionStorage.getItem(key) || 'null';
    if (answer !== 'null' || ''){
      return true;
    } else return false;
  }

  delete(key: string) : void {
    this.cookie.delete(key);
    sessionStorage.removeItem(key);
  }

  clear() : void {
    this.cookie.deleteAll();
    sessionStorage.clear();
  }

}
