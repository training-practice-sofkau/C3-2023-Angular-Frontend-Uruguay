import { Component, ElementRef, OnInit, ViewChild,   } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountComponent } from '../account/account.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  Swal  from 'sweetalert2';
import {   AccountInterfaec, AccountTypeinterface, customerInterface} from '../../tools'
import {AlertsService} from './../../shared'
@Component({

  selector: 'app-customer',
  templateUrl: './customer.component.html',
  entryComponents: [UpdateCustomerComponent]

})
export class CustomerComponent implements OnInit  {
  constructor(private modalService: NgbModal, private AccountComponent: AccountComponent, private AlertsService: AlertsService) { }

  public customer: customerInterface | undefined
  public accountType: AccountTypeinterface | undefined
  public persona: AccountInterfaec | undefined

  alertdelete() {
  this.AlertsService.alertError()
  }

  openEditModal() {
    this.modalService.open(UpdateCustomerComponent);
  }



   ngOnInit(): void {

     this.AccountComponent.getDataAccount()
     this.customer =  this.AccountComponent.getDatacustomer()
     this.persona =  this.AccountComponent.getAccount()
     this.accountType = this.AccountComponent.getDataAccountType();



  }
  editMode = false;




}
