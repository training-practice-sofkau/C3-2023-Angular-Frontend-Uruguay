import { Component } from '@angular/core';
import { AccountService } from './customer-account/services/account.service';
import { LoginService } from './login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Banking App B.F';

  constructor(public loginService: LoginService){}

  status: boolean = true;


  ngOnInit(): void {
    this.loginService.statusEmiter.subscribe((data) =>  this.status = data)
  }




  
}
