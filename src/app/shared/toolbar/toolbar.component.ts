import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  userDropdown: boolean = false;
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        this.currentRoute = event.url;
      }
    });
  }

  userDropdownSwitch(){
      this.userDropdown = !this.userDropdown;
      console.log(this.currentRoute);
  }

}
