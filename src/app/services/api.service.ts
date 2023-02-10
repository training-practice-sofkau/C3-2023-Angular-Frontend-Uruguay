import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignIn } from '../interfaces/sign-in.interface';
import { Observable } from 'rxjs';
import { ResponseI } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  httpheaders = new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, GET',
    'Access-Control-Allow-Origin': '*'
});

  login(form: SignIn): Observable<ResponseI>{
    let direction = this.url + "/security/signIn";
    return this.http.post<ResponseI>(direction, form);
  }

}
