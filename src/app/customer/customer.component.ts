import { Component, ElementRef, OnInit, ViewChild,   } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountComponent } from '../account/account.component';
import { customerInterface } from '../account/interface/customer-interface';
import { AccountTypeinterface } from '../account/interface/Account-type-interface';
import { AccountInterfaec } from '../account/interface/account-interface';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  Swal  from 'sweetalert2';
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


alertError(){
  Swal.fire({
    title: 'Estas seguro?',
    text: "Esto no se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'BORRADO!',
        'Exito'
      )
    }
  })
}

}
