import { Component, ElementRef, OnInit, ViewChild,   } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../login2/services/auth.service';
import { AccountComponent } from '../account/account.component';
import { customerInterface } from '../account/interface/customer-interface';
import { AccountTypeinterface } from '../account/interface/Account-type-interface';
import { AccountInterfaec } from '../account/interface/account-interface';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({

  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit  {
  constructor(private modalService: NgbModal, private AccountComponent: AccountComponent) { }

  public customer: customerInterface | undefined
  public accountType: AccountTypeinterface | undefined
  public persona: AccountInterfaec | undefined


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
