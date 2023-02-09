import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private cookie: CookieService) {}

  canActivate(_route: ActivatedRouteSnapshot,_state: RouterStateSnapshot): boolean {
      if (this.cookie.get('hola').length >= 1) {
        return true;
      } else {
        this.router.navigate(['/sign-up']);
        return false;
      }
  }
}
