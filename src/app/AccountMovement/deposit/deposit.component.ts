import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewdepositComponent } from './new-deposit/newdeposit.component';
import { DepositService } from '../../AccountMovement';
import { DepositInterface } from 'src/app/tools/interface/deposit.interface';
import { AccountInterfaec } from '../../tools/interface/account-interface';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
})
export class DepositComponent {
  depositList: DepositInterface[] = []
  public customer: AccountInterfaec | undefined
  constructor(private modalService: NgbModal, private http: HttpClient, private depositService: DepositService){}






  async ngOnInit() {
    const customerId = localStorage.getItem('account');
    this.customer =  customerId ? JSON.parse(customerId) : null

    const url = `http://localhost:3000/deposit/${this.customer?.accountUser.customer.id}`;
    this.depositService.get(url).subscribe(
      data => {
        this.depositList = data;
        console.log(this.depositList)
      },
      error => {
        console.error(error);
      }    )
  }





  openEditModal() {
    this.modalService.open(NewdepositComponent);
  }
}
