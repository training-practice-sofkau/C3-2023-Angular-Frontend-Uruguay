import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(private router: Router) {}

  redirectToSignUp() {
    this.router.navigate(['signup']);
  }

  redirectToSignIn() {
    this.router.navigate(['signin']);
  }
}
