import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  logout(){
    this.authService.setUSerStatus(false);
    this.authService.deauthenticate();
    this.router.navigate(["/"]);
  }

}
