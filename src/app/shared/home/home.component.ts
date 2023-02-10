import { Component, OnInit } from '@angular/core';
import { ServiceLogIn } from 'src/app/global-service/service-login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ServiceLogIn]
})
export class HomeComponent implements OnInit{

  constructor(public serviceLogIn : ServiceLogIn){}

  ngOnInit(): void {
  }

}
