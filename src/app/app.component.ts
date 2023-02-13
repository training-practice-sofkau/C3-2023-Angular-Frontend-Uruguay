import { Component } from '@angular/core';
import { ApiService } from './dashboard/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'holaMundo';



  constructor(private api: ApiService) {
    this.api.signUp(
      {
        "documentType": "National ID",
        "document": "31411511541",
        "fullName": "Ñeri Caraballo",
        "email": "domor48472@ekcsoft.com",
        "phone": "090000000",
        "password": "alfa1234"
      }
    )
  }
}
