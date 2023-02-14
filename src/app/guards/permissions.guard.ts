import { Injectable, OnInit } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MessengerService } from '../services/messenger.service';
@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate, OnInit {

  constructor(
    private readonly authService: AuthService,
    private messages: MessengerService,
  ){}

  loggedUser: boolean = false;

  private onUserStatusChange: Subscription | undefined;

  ngOnInit() {

    this.onUserStatusChange = this.authService.loggedUser.subscribe(
      currentStatus => this.loggedUser = currentStatus);
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (this.loggedUser) {
      return true;
    }

    this.messages.infoMsg("You don't have permission to access that page!", "", 2000);
    return false;
  }

}
