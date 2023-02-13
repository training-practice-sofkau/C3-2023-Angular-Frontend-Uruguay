import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global-service/service-global.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  
  constructor(public globalService : GlobalService){}

}
