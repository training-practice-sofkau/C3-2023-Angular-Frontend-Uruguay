import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewdepositComponent } from './new-deposit/newdeposit.component';
import { DepositService } from '../../AccountMovement'
import { DepositInterface } from 'src/app/tools/interface/deposit.interface';
import { AccountInterfaec } from 'src/app/tools/interface/account-interface';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
})
export class DepositComponent implements OnInit {
  depositList: DepositInterface[] = [];
  customer: AccountInterfaec | undefined;

  constructor(
    private modalService: NgbModal,
    private depositService: DepositService
  ) {}

  ngOnInit() {
    this.depositService.getDataAccount()
    this.depositService.getDepositListt().subscribe((accountUser) => {
      this.depositList = accountUser;
    })
    this.depositService.getDepositListByCustomer();

  }

  openEditModal() {
    this.modalService.open(NewdepositComponent);
  }
}



