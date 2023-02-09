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
    localStorage.setItem('logged', 'false')
  }

  activeLogin(){
    localStorage.getItem('logged')
    localStorage.setItem('logged', 'true')
  }

  logOut(){
    localStorage.clear()
  }

}
