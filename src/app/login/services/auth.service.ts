import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppService } from 'src/app/app.service';
import { Observable } from 'rxjs';
import { JwtTokenModel } from 'src/app/interfaces/token.interface';
import { LoginResponseModel } from 'src/app/interfaces/login.response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: AppService, private cookie: CookieService) {}

  isValid(token: string): Observable<JwtTokenModel> {
    const httpOptionsFinal = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
      }),
      params: new HttpParams().set("jwtToken", token)
    };
    return this.api.http.get<JwtTokenModel>(
      this.api.baseurl + "/security/is-valid",
      httpOptionsFinal
    )
  }

  login(mail: string, pass: string): Observable<LoginResponseModel> {
    const body = { email: mail, password: pass };
    const httpOptionsFinal = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.api.http.post<LoginResponseModel>(
      this.api.baseurl + "/security/sign-in", body,
      httpOptionsFinal
    );
  }
}
