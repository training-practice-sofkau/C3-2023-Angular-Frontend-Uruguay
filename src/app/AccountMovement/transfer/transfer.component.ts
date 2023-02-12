import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TransferService } from '../../AccountMovement/transfer';
import { TransferInterface } from '../../tools/interface/transfer-Interface'
import { AccountInterfaec } from '../../tools/interface/account-interface';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
})
export class TransferComponent {
  transferList: TransferInterface[] = []
  public customer: AccountInterfaec | undefined
  constructor(private http: HttpClient, private transferService: TransferService, private modalService: NgbModal){}


  openEditModal() {
    this.modalService.open(NewTransferComponent);
  }

  async ngOnInit() {
    const customerId = localStorage.getItem('account');
    this.customer =  customerId ? JSON.parse(customerId) : null

    const url = `http://localhost:3000/transfer/getHistory/${this.customer?.accountUser.id}`;
    this.transferService.get(url).subscribe(
      data => {
        this.transferList = data;

      },
      error => {
        console.error(error);
      }    )
  }
}





