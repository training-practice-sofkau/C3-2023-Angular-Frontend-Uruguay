import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  constructor(
    public authService: AuthService,
    private router: Router,
    public appComp: AppComponent,
  ) { }

  logout(){
    this.authService.setUSerStatus(false);
    this.router.navigate(["/"]);
    this.appComp.isInPublicZone = true;
  }


}
