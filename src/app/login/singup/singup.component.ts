import { Component } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  constructor() {
    this.defaultLogin()
  }
  defaultLogin() {
    localStorage.setItem('logged', 'false')
  }
  activeLogin() {
    localStorage.getItem('logged')
    localStorage.setItem('logged', 'true')
  }

  logOut() {
    localStorage.clear()
  }
}
