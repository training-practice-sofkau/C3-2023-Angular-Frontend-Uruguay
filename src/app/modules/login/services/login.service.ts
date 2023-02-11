import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/interfaces/response.interface';
import { SignIn } from 'src/app/interfaces/sign-in.interface';
import { ApiService } from '../../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public api: ApiService, private http: HttpClient ) { }

  login(form: SignIn): Observable<ResponseI>{
    let direction = this.api.url + "/security/signIn";
    return this.http.post<ResponseI>(direction, form);
  }

  
}
