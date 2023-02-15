import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
constructor (
private serviceCom: AuthService

){


}

  status: boolean = true

  ngOnInit(): void {
    this.serviceCom.statusVariable.subscribe(statusValue => this.status = statusValue);
 
 
  }
 
}

