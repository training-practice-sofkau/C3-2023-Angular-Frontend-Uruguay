import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class JwtinterceptorInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService,
    private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token : string = this.cookieService.get('token');
    let req = request;
    if(token){
      req = request.clone({
        setHeaders:{
          authorization : `bearer ${token}`
        }
      });
    }    
    return next.handle(request)
  }
}
