import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewdepositComponent } from './new-deposit/newdeposit.component';
import { DepositService } from '../../AccountMovement'
import { DepositInterface } from 'src/app/tools/interface/deposit.interface';
import { AccountInterfaec } from 'src/app/tools/interface/account-interface';
import { AccountTransfer } from '../../tools/interface/accountTransfer';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
})
export class DepositComponent implements OnInit {
  public depositList: DepositInterface[] = [];
  public customer: AccountInterfaec | undefined;
  public account!: AccountTransfer[]
  constructor(
    private modalService: NgbModal,
    private depositService: DepositService
  ) {}

  ngOnInit() {
    this.depositService.getDataAccount()
    this.depositService.getDepositListt().subscribe((accountUser) => {
      this.depositList = accountUser;
    })
    this.depositService.getAcountList().subscribe((account) => {
      this.account = account;
    })
    this.depositService.getDepositListByCustomer();

  }

  openEditModal() {
    this.modalService.open(NewdepositComponent);
  }
}



