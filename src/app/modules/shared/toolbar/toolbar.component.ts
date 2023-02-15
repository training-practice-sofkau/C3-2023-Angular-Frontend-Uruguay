import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  status: boolean = true;

  constructor( protected loginService: LoginService,
    private app: AppComponent
  ) {}

  ngOnInit(): void {
    this.loginService.currentStatusEmitter.subscribe((data) =>  this.status = data)
  }

  logOut(){
    localStorage.clear()
  }

}
