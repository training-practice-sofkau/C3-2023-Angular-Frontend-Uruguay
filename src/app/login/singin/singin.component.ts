import { Component } from '@angular/core';
import { ServiceLogIn } from 'src/app/global-service/service-login.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
 
})
export class SinginComponent {

  constructor(public serviceLogIn : ServiceLogIn){}

  ngOnInit(): void {
  
  }


}
