import { Component } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {
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
