import { Component } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

login(){

  localStorage.setItem("logueado","todo ok")

}


}
