import { AccountComponent,  } from './../../account/account.component';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from '../../../userLogin-Register';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { customerInterface } from 'src/app/tools';



@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
})
export class UpdateCustomerComponent {
constructor( private formBuilder: FormBuilder,private router: Router, private AuthService: AuthService, private AccountComponent: AccountComponent){}
public customerDate = localStorage.getItem('customer')
public customer: customerInterface = this.customerDate? JSON.parse(this.customerDate): null

formEdit = this.formBuilder.group({
  documentType: this.formBuilder.group({
  name: [this.customer?.documentType?.name || 'Cedula', Validators.required],
  }),
  document: [this.customer?.document || '', Validators.required],
  fullName: [this.customer?.fullName || '', Validators.required],
  email: [this.customer?.email || '', Validators.required],
  phone: [this.customer?.phone || '', Validators.required],
  password: [this.customer?.password || '', Validators.required],
  avatarUrl: [this.customer?.avatarUrl || '', Validators.required],
  state: [this.customer?.state || true, Validators.required]
  });


  ngOnInit(): void {
    const customerDate = localStorage.getItem('customer');

    this.customer = customerDate? JSON.parse(customerDate) : this.customer;

 }



  saveChanges() {
    console.log('save changes');
    let  persona =  this.formEdit?.value
     console.log(this.formEdit?.value)
    this.AuthService.post(`http://localhost:3000/customers/${this.customer?.id}`, persona)
    .subscribe(response => {
      console.log(response.documentType.name);
      this.router.navigate(['account']);
    })

  }
}
