import { Component, OnInit } from '@angular/core';
import { AccountTypeinterface, AccountInterfaec, customerInterface} from '../../tools';
import { AccountService } from './services/account.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountTransfer } from '../../tools/interface/accountTransfer';
import {  NewdepositComponent } from 'src/app/AccountMovement';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(public accountService: AccountService, public modalService: NgbModal, public FormBuilder: FormBuilder) {}
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = this.FormBuilder.group({
      documentType: [null, Validators.required]
    });
    this.persona = this.accountService.getDataAccount();
    this.accountType = this.accountService.getDataAccountType();
    this.accountService.getAccountList().subscribe((accountUser) => {
      this.accountUser = accountUser;
    });
    this.accountService.getcustomer().subscribe((customer) => {
      this.customer = customer;
    });

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

  openEditModal(CreateaccounttypeComponent: any) {
    this.modalService.open(CreateaccounttypeComponent, {ariaLabelledBy: 'modal-basic-title'});

  }

  onSave(): void {
    this.modalService.dismissAll();
  }
  onClose(): void {
    this.modalService.dismissAll();
  }

  openEditModal2() {
    this.modalService.open(NewdepositComponent);
  }

}
