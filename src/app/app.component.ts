import { Component, OnInit } from '@angular/core';
import { LoginService } from './modules/login/services/login.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public loginService: LoginService,
    ){}

  title = 'Frontend Angular';
}
