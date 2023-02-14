import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/account-customer/services/customer.service';
import { CustomerModel } from 'src/app/interfaces/customer.interface';

import { AuthService } from '../services/auth.service';
import { TypeAccountComponent } from '../../administrator/type-account/type-account.component';
import { SignUpModel } from '../../interfaces/singup.interface';
import { AccountCustomerModule } from '../../account-customer/account-customer.module';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {

  signUp: SignUpModel | undefined
  constructor(
    private router: Router,
    private serviceCom: AuthService,
    private formBuilder: FormBuilder,
    public customerService: CustomerService

    //private jwt_decode: jwtDecode
  ) { }


  public email: string = "";
  public password: string = "";
  public typeDoc: string = "";
  public document: string = "";
  public fullname: string = "";
  public phone: string = "";
  public typeAcc: string = "";

  formLogin = this.formBuilder.group({
    email: [''],
    password: [''],
    typeDoc: [''],
    document: [''],
    fullname: [''],
    phone: [''],
    typeAcc: [''], //"6bb44742-fd21-4582-878a-efa627b194f8"

  });









  register(document: string, email: string, password: string, fullname: string, phone: string, typeAcc: string, TypeDoc: string) {
   
    this.signUp = {
      documentTypeId: "64e40ae6-5374-4ac5-8498-1beac191d535",
      document:"13456789",
      fullName: fullname,
      email: email,
      phone: phone,
      password: password,
      accountTypeId: "6bb44742-fd21-4582-878a-efa627b194f8",

    };
  
  /*
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  accountTypeId: string;
  documentTypeName: string;
  balance?: number;
*/
    this.customerService.createUser(this.signUp).subscribe({
      next: token => {
        localStorage.setItem('token', "tokentest");

      },
      error: err => console.error(err),
      complete: () => {
        this.router.navigate(['**']);
      },
    });
   
  }
   
}
   
   
   
   
   
    /*
    this.signUp.fullName == fullname
    this.signUp?.email == email
    this.signUp?.documentTypeName == this.typeDoc
    this.signUp?.accountTypeId == this.typeAcc
    this.signUp?.document == document
    this.signUp?.password == password
    this.signUp?.phone == phone
    
   */
// 
//     this.customerService.registerCustomer().subscribe({
//       next: (Response: CustomerModel) => { this.signUp = Response },
//       error: (error: HttpErrorResponse) => { alert(error.message) }

//     });