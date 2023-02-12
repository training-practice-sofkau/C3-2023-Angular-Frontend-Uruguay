import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  constructor(private service: ServicesService) { }

  get getResult() {
    return this.service.customerResult
  }
}
