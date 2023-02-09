import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public tituloHome = "Home";


  constructor() {
    this.defaultLogged()
  }

  defaultLogged(){
    localStorage.setItem('logged', 'false')
  }


  activeLogged(){
    localStorage.getItem('logged')
    localStorage.setItem('logged', 'true')
  }

  logOut(){
    localStorage.clear()
  }

  ngOnInit(): void {
  }

}
