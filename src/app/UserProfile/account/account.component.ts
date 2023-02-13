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
    const accountType = localStorage.getItem('accountype')

    this.accountType = accountType ? JSON.parse(accountType): null
    return this.accountType

  }
  getDatacustomer(){
    const customerDate = localStorage.getItem('customer')
    this.customer = customerDate ? JSON.parse(customerDate): null
    return this.customer
  }
  getDataAccount(){


    const account = localStorage.getItem('account');
    this.persona = account ? JSON.parse(account) : null

    this.AccountService.get(`http://localhost:3000/account/${this.persona?.accountUser.customer.id}`).subscribe(
      data => {
        console.log(data)
        this.accountUser = data
        this.customer = this.accountUser[0].customer
        this.accountType = this.accountUser[0].accountType
        localStorage.setItem('customer', JSON.stringify(this.customer))
        localStorage.setItem('accountype', JSON.stringify(this.accountType ))
      },
      error => {
        console.error(error);
      }
    );

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


