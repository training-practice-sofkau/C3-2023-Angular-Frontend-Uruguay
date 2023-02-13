import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigninModel } from '../../interfaces/signin.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = 'http://localhost:3000/security'

  constructor(private http: HttpClient) { }

  signIn(signIn: SigninModel): Observable<SigninModel> {
    return this.http
      .post<SigninModel>(`${this.url}/signin`, signIn)
  }

}
