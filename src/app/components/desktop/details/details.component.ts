import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../../../interfaces/account.interface';
import { DesktopService } from '../../../services/desktop.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  accounts!: AccountModel[] ;

  constructor(
    private deskService: DesktopService,

  ){}



  ngOnInit(): void {



    this.deskService.accounts.subscribe(value => this.accounts = value);

    console.log(this.accounts)

  }

}


