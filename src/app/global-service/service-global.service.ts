import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


   constructor() {
    this.defaultLogged()
  }

//*************************CONTROL VARIABLE LOCAL STORAGE*******************************/

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

   //*************************CONTROL DE COMPONENTES USER*******************************/
  
  public valorCaseUser : number = 0;
  public switchViewUser : boolean = true;
  public switchUserUpdate : boolean = false;
  

  eligeViewUser(){

    switch (this.valorCaseUser){

      case 1 :
        this.switchUserUpdate = false;
        this.switchViewUser  = true;
        console.log("Vista Usuario :" + this.switchUserUpdate);
        break;

      case 2 :
        this.switchViewUser  = false;
        this.switchUserUpdate = true;
        console.log("vista Update Usuario :" + this.switchViewUser );
        break;

    }
  }


  //************************CONTROL DE COMPONENTES HOME-LOGIN ********************************/
  
  public valorCaseLogin : number = 0;
  public switchLogIn : boolean = true;
  public switchLogUp : boolean = false;

  eligeLogin(){

    switch (this.valorCaseLogin){

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
