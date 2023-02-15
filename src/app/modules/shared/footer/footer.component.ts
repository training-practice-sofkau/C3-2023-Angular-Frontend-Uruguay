import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  status: boolean = true;

  constructor( protected loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.loginService.currentStatusEmitter.subscribe((data) =>  this.status = data)
  }

}
