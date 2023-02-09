import { Component } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {


  
  constructor() {
    this.defaultLogged()
  }

  defaultLogged(){
    localStorage.setItem('MyToken', 'false')
  }


  activeLogged(){
    localStorage.getItem('MyToken')
    localStorage.setItem('MyToken', 'true')
  }

  logOut(){
    localStorage.clear()
  }

  ngOnInit(): void {
  }


}
