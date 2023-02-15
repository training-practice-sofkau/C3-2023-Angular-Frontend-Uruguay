import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { AppComponent } from '../../../app.component';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedUser: boolean = false;

  private onUserStatusChange: Subscription | undefined;

  constructor(
    public authService: AuthService,
    private router: Router,
    public appComp: AppComponent,
  ) { }


  ngOnInit() {

    this.onUserStatusChange = this.authService.loggedUser.subscribe(
      currentStatus => this.loggedUser = currentStatus);
  }
  /**
   * Set the conditions to end the user service
   * and exit the desktop
   */
  logout() {
    localStorage.clear();
    this.authService.setUserLogStatus(false);
    this.authService.setPublicZoneStatus(true);
    this.appComp.toHome();
    this.router.navigate(["/"]);
  }




}
