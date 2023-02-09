import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountInterfaec } from '../../account/interface/account-interface';
import { customerInterface } from '../../account/interface/customer-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  get(url: string){
    return this.http.get<AccountInterfaec>(url)


}


post(url: string, data: any){
  return this.http.post<customerInterface>(url, data)
}

}
