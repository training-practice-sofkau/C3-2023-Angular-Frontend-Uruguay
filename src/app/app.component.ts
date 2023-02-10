import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  
  title = 'Bank';
  public token:boolean = false 


  ngOnInit(): void {
    this.token = this.tokenSi()
  }

  
  
  tokenSi(){  
    if(localStorage.getItem('token')==null){ return true}
    return false
  }



}
