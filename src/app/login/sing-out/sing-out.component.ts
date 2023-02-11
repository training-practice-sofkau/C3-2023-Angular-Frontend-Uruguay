import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global-service/service-global.service';


@Component({
  selector: 'app-sing-out',
  templateUrl: './sing-out.component.html',
  styleUrls: ['./sing-out.component.scss']
})
export class SingOutComponent {

  constructor(public globalService : GlobalService){}

  ngOnInit(): void {
  
  }

}
