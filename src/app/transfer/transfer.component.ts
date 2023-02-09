import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NewTransferComponent} from './new-transfer/new-transfer.component'

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
})
export class TransferComponent {

  constructor( private modalService: NgbModal ) {}

  openEditModal() {
    this.modalService.open(NewTransferComponent);
  }


}
