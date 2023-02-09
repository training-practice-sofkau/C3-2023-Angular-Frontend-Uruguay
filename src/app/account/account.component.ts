import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { customerInterface } from './interface/customer-interface';
import { AccountInterfaec } from './interface/account-interface';
import { AccountTypeinterface } from './interface/Account-type-interface';
import { AccountService } from './services/account.service';
import { CreateaccounttypeComponent } from './create-account-type/createaccounttype.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewdepositComponent } from '../deposit/new-deposit/newdeposit.component';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {



  constructor(private AccountService: AccountService, private modalService: NgbModal, private CreateaccounttypeComponent: CreateaccounttypeComponent) {}
    public customer: customerInterface | undefined
    public accountType: AccountTypeinterface | undefined
    public persona: AccountInterfaec | undefined

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
        this.persona = data;
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


