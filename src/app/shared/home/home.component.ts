import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  // public tituloHome = "Home";


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
