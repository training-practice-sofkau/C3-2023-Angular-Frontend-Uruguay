import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewdepositComponent } from './new-deposit/newdeposit.component';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
})
export class DepositComponent {

  constructor(private modalService: NgbModal){}


  openEditModal() {
    this.modalService.open(NewdepositComponent);
  }
 }
