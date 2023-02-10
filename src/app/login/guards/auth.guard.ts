import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { JwtTokenModel } from 'src/app/interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private cookie: CookieService, private security: AuthService) {}

  canActivate(_route: ActivatedRouteSnapshot,_state: RouterStateSnapshot): boolean {
      const token: string = this.cookie.get('token') || sessionStorage.getItem('token') as string;
      if (token && token.length > 4){
        this.updateStat(token);
        return true;
      } else {
        this.removeUserData()
        return false;
      }
  }

  updateStat(token: string){
    this.security.isValid(token).subscribe({
      next: (value) => { this.validateExpireTime(value) },
      error: () => { this.removeUserData() }
    });
  }

  validateExpireTime(token: JwtTokenModel){
    if (Date.now() <= token.exp && token.customer.id) {
      this.removeUserData()
    }
  }

  removeUserData(){
    this.cookie.deleteAll();
    sessionStorage.clear();
    this.router.navigate(['/sign-up']);
  }

}
