import { AccountComponent } from './../../account/account.component';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customerInterface } from 'src/app/interface/customer-interface';
import { AuthService } from 'src/app/login2/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
})
export class UpdateCustomerComponent {
constructor(private modalService: NgbModal, private formBuilder: FormBuilder,private router: Router, private AuthService: AuthService, private AccountComponent: AccountComponent){}

public customer: customerInterface | undefined

  formEdit = this.formBuilder.group({
    documentType: this.formBuilder.group({
      name: ['', Validators.required],
    }),
    document: ['', Validators.required],
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    avatarUrl: ['', Validators.required],
    state: [true, Validators.required]
  });


  ngOnInit(): void {

    this.customer =  this.AccountComponent.getDatacustomer()


 }



  saveChanges() {
    console.log('save changes');
    let  persona =  this.formEdit?.value
     console.log(this.formEdit?.value)
    localStorage.setItem( 'customer', JSON.stringify(persona) )
    this.AuthService.post(`http://localhost:3000/customers/${this.customer?.id}`, persona)
    .subscribe(response => {
      console.log(response);
      this.router.navigate(['account']);
    })

  }
}
