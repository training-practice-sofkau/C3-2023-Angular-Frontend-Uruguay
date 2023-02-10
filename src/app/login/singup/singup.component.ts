import { Component } from '@angular/core';
import { ServiceLogIn } from 'src/app/global-service/service-login.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  
  constructor(public serviceLogIn : ServiceLogIn){}

}
