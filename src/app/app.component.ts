import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor(){}

  isInPublicZone:boolean = true;

  isLoggingIn: boolean = false;
  isRegistering: boolean = false;
  isGoingHome: boolean = true;


  toLogin(){
    this.isLoggingIn = true;
    this.isRegistering = false;
    this.isGoingHome=false;
  }

  toRegister(){
    this.isLoggingIn = false;
    this.isRegistering = true;
    this.isGoingHome=false;
  }

  toHome(){
    this.isLoggingIn=false;
    this.isRegistering=false;
    this.isGoingHome=true;
  }

}
