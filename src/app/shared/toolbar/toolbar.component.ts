import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  userDropdown: boolean = false;
  currentRoute: string = '';

  constructor(private router: Router, private cookie: CookieService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        this.currentRoute = event.url;
      }
    });
  }

  logout(){
    this.cookie.deleteAll();
    this.router.navigate(["/sign-in"]);
    this.userDropdown = !this.userDropdown;
  }

  userDropdownSwitch(){
    this.userDropdown = !this.userDropdown;
    console.log(this.currentRoute);
  }

}
