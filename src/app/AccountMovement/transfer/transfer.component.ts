import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../AccountMovement/transfer';
import { TransferInterface } from '../../tools/interface/transfer-Interface'
import { AccountInterfaec } from '../../tools/interface/account-interface';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
})
export class TransferComponent implements OnInit {
  public transferList: TransferInterface[] = [];
  public customer!: AccountInterfaec ;

  constructor(
    private transferService: TransferService,
    private modalService: NgbModal
  ) {}

  openEditModal() {
    this.modalService.open(NewTransferComponent);
  }




  ngOnInit() {
   this.transferService.getTransferLista()
   this.transferService.getTransferListt().subscribe((transfer) => {
    this.transferList = transfer;
  })
  }
}
