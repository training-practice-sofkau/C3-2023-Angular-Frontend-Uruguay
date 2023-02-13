import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private service: ServiceService) {

  }

  isLogged(): boolean {
    if(this.service.hasUser()) {
      return true;
    }

    return false;
  }

}
