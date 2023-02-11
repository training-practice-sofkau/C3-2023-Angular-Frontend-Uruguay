import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLogIn {

  constructor() {
    // this.defaultLogged()
  }

  defaultLogged(){
    if(!localStorage.getItem('MyToken')){
      localStorage.setItem('MyToken', 'false')
    }   
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

  //********************************************************/
  
  public valorForm : number = 0;
  public switchLogIn : boolean = true;
  public switchLogUp : boolean = false;

  eligeFormmulario(){

    switch (this.valorForm){

      case 1 :
        this.switchLogIn = true;
        this.switchLogUp = false;
        console.log("LogIn :" + this.switchLogIn);
        break;

      case 2 :
        this.switchLogUp = true;
        this.switchLogIn = false;
        console.log("LogUp :" + this.switchLogUp);
        break;

    }
  }
}
