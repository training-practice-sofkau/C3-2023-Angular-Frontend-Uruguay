import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})

export class SinginComponent implements OnInit {

  ngOnInit(): void {
    this.defaultLogin()
  }

  ngDoCheck() {
    this.switch()
  }

  mostrar = localStorage.getItem('logged') === 'true'

  switch() {
    this.mostrar = !this.mostrar
  }

  defaultLogin() {
    if (!(localStorage.getItem('logged')))
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
