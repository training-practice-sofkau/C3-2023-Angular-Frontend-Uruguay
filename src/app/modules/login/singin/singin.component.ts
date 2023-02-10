import { Component } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

  ngOnInit(): void {
    this.defaultLogin()
  }

  defaultLogin() {
    if(!localStorage.getItem('key'))
    localStorage.setItem('key', 'false')
  }

  activeLogin(){
    localStorage.setItem('key', 'true')
  }
}
