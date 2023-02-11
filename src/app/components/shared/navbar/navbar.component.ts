import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { AppComponent } from '../../../app.component';
import { MenuService } from '../../../services/menu.service';
import { MenuItem } from '../../../interfaces/menu.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  desktopMenu: MenuItem[] = [];


  constructor(
    public authService: AuthService,
    private router: Router,
    public appComp: AppComponent,
    private menuService: MenuService,
  ) { }


  ngOnInit(): void {
    this.loadDesktopMenuItems();
  }

  /**
   * Load the items of the desktop menu
   */
  loadDesktopMenuItems() {
    this.menuService.getDesktopMenu().subscribe(data => this.desktopMenu = data);
  }

  /**
   * Set the conditions to end the user service
   * and exit the desktop
   */
  logout(){
    this.authService.setUserStatus(false);
    this.router.navigate(["/"]);
    this.appComp.isInPublicZone = true;
  }




}
