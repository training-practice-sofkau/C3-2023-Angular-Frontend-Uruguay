import { Component, OnInit } from '@angular/core';
import { AccountTypeinterface, AccountInterfaec, customerInterface} from '../../tools';
import { AccountService } from './services/account.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountTransfer } from '../../tools/interface/accountTransfer';
import { CreateaccounttypeComponent, NewdepositComponent } from 'src/app/AccountMovement';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../account/account.component.scss']
})
export class AccountComponent implements OnInit {

  public customer: customerInterface | undefined
  public accountType: AccountTypeinterface | undefined
  public persona: AccountInterfaec | undefined
  public account: AccountInterfaec | undefined
  public accountUser: AccountTransfer[] = []

  constructor(private accountService: AccountService, private modalService: NgbModal) {}

  ngOnInit() {
    this.persona = this.accountService.getDataAccount();
    this.accountType = this.accountService.getDataAccountType();
    this.customer = this.accountService.getDatacustomer();
    this.accountUser = this.accountService.getaccountUser();
  }




  getAccount() {
    return this.accountService.getDataAccount();
  }
  getDatacustomer() {
    return this.accountService.getDatacustomer();
  }
  getDataAccountType() {
    return this.accountService.getDataAccountType()
  }

  openEditModal() {
    this.modalService.open(CreateaccounttypeComponent);
  }


  openEditModal2() {
    this.modalService.open(NewdepositComponent);
  }

}
