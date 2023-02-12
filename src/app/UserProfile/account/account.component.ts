import { Component, OnInit } from '@angular/core';
import { AccountTypeinterface, AccountInterfaec, customerInterface} from '../../tools';
import { AccountService } from './services/account.service';
import { CreateaccounttypeComponent } from '../../AccountMovement';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewdepositComponent } from '../../AccountMovement';
import { AccountTransfer } from '../../tools/interface/accountTransfer';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../account/account.component.scss']
})
export class AccountComponent implements OnInit {



  constructor(private AccountService: AccountService, private modalService: NgbModal, ) {}
    public customer: customerInterface | undefined
    public accountType: AccountTypeinterface | undefined
    public persona: AccountInterfaec | undefined
    public account: AccountInterfaec | undefined
    public accountUser: AccountTransfer[] = []

  getDataAccountType(){
    this.accountType = this.persona?.accountUser.accountType
    return this.accountType

  }
  getDatacustomer(){
    this.customer = this.persona?.accountUser.customer
    return this.customer
  }
  getDataAccount(){


    const account = localStorage.getItem('account');
    this.persona = account ? JSON.parse(account) : null

    this.AccountService.get(`http://localhost:3000/account/${this.persona?.accountUser.customer.id}`).subscribe(
      data => {
        console.log(data)
        this.accountUser = data

      },
      error => {
        console.error(error);
      }
    );

    localStorage.setItem('account', JSON.stringify(this.persona))
    this.customer = this.persona?.accountUser.customer
    this.accountType = this.persona?.accountUser.accountType
    localStorage.setItem('customer', JSON.stringify(this.customer))
    localStorage.setItem('accountype', JSON.stringify(this.accountType ))

    return this.persona



  }
  getAccount(){
    return this.persona
  }

   ngOnInit() {
    this.getDataAccount()
    this.getDataAccountType()
    this.getDatacustomer()
  }


  openEditModal() {
    this.modalService.open(CreateaccounttypeComponent);
  }


  openEditModal2() {
    this.modalService.open(NewdepositComponent);
  }

}


