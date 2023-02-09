import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authService: { isLoggedIn: boolean } = { isLoggedIn: true };

  constructor(private router: Router) {}

  canActivate(_route: ActivatedRouteSnapshot,_state: RouterStateSnapshot): boolean {
      if (this.authService.isLoggedIn) {
        return true;
      }
      else {
        this.router.navigate(['/sign-up']);
        return false;
      }
  }
}
