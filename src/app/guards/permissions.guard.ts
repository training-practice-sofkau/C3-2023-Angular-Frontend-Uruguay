import { Injectable, OnInit } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MessengerService } from '../services/messenger.service';
@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate{

  constructor(
    private readonly authService: AuthService,
    private messages: MessengerService,
  ){}



  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (this.authService.getUserAccessPermits()) {
      return true;
    }

    this.messages.infoMsg("You don't have permission to access that page!", "", 5000);
    return false;
  }

}
