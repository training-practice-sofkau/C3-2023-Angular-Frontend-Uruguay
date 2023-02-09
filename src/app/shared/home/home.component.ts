import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(){
    this.defaultLogin()
  }

  defaultLogin() {
    localStorage.setItem('key', 'false')
  }

  activeLogin(){
    localStorage.getItem('key')
    localStorage.setItem('key', 'true')
  }

  logOut(){
    localStorage.clear()
  }
}