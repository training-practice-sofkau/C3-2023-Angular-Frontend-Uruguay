import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtTokenModel } from 'src/app/interfaces/token.interface';
import { UserDataService } from 'src/app/dashboard/services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userData: UserDataService, private security: AuthService) {}

  canActivate(): boolean {
    if (this.userData.check('token')){
      const token: string = this.userData.get('token');
      this.updateStat(token);
      return true;
    } else {
      this.userData.clear();
      this.router.navigate(['/login/sign-up']);
      return false;
    }
  }

  updateStat(token: string){
    this.security.isValid(token).subscribe({
      next: (value) => { this.validateToken(value) },
      error: () => {
        this.userData.clear();
        this.router.navigate(['/login/sign-up']);
      }
    });
  }

  validateToken(token: JwtTokenModel){
    if (Date.now() <= token.exp && token.customer.id) {
      this.userData.clear();
      this.router.navigate(['/login/sign-up']);
    }
  }

}
