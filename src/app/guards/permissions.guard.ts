import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../service/service.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private service: ServiceService,
    private routes: Router
    ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (!this.service.hasUser()){
      this.routes.navigate(['/login'])
    }

    return true;
  }

}
