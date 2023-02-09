import { Component } from '@angular/core';
import { CustomerService } from '../../customer/services/customer.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private customerService: CustomerService) {

  }

  isLogged(): boolean {
    if(this.customerService.hasUser()) {
      return true;
    }

    return false;
  }

}
