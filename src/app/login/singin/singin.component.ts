import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global-service/service-global.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
 
})
export class SinginComponent {

  constructor(public globalService :GlobalService){}

  ngOnInit(): void {
  
  }


}
