import { Component } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

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
