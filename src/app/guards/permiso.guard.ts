import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermisoGuard implements CanActivate {
  constructor(private authservice : AuthService,
    private router : Router){}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        
        if(!this.authservice.hasUser()){
          this.router.navigate(['/singin']);

        }
        alert(`No tienes el perismo para acceder `)
        return true;
      }

      }
      
    