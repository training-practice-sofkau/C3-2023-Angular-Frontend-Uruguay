import { Component } from '@angular/core';
import { ServiceLogIn } from 'src/app/global-service/service-login.service';

@Component({
  selector: 'app-sing-out',
  templateUrl: './sing-out.component.html',
  styleUrls: ['./sing-out.component.scss']
})
export class SingOutComponent {

  constructor(protected serviceLogIn : ServiceLogIn){}

  ngOnInit(): void {
  
  }

}
