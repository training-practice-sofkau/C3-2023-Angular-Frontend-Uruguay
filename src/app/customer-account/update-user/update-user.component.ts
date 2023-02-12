import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global-service/service-global.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {


  constructor  (public globalService: GlobalService,
    public customerService :CustomerService) {}

}
