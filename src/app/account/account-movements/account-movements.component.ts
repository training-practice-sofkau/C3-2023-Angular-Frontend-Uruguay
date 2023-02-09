import { Component } from '@angular/core';

@Component({
  selector: 'app-account-movements',
  templateUrl: './account-movements.component.html',
  styleUrls: ['./account-movements.component.scss']
})
export class AccountMovementsComponent {

  deposits = [
    {amount: 100, date: Date.now()},
    {amount: 200, date: Date.now()},
    {amount: 300, date: Date.now()},
    {amount: 100, date: Date.now()},
  ]
}
