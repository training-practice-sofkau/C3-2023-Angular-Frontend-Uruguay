import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { AccountModel } from '../../../interfaces/account.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {




  accounts: AccountModel[] = [];
  data = localStorage.getItem("accounts");


  ngOnInit(): void {

    //this.data = localStorage.getItem("accounts");

    if (this.data != null) {
      this.accounts =  JSON.parse(this.data)
    }

    if(this.accounts != null){
      this.getAccountsInfo();
    }

  }

  getAccountsInfo(){



  }
}


