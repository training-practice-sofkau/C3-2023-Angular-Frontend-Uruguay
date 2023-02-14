import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
//Interfaces
import { CustomerSignUpModel } from '../../interfaces/customer.interface';

//Services
import { CustomerService } from '../../services/customer.service';
import { MessengerService } from '../../services/messenger.service';

//Components

import { AuthService } from '../../services/auth.service';
import { SigninResponseModel, SigninTokenResponseModel } from 'src/app/interfaces/responses.interface';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signupForm: FormGroup;
  documentTypes: string[] = ["ID Card", "Passport ID"];
  accountTypes: string[] = ["Saving", "Checks"];
  defaultDocType: string = this.documentTypes[0];
  hide = true;
  loading = false;


  constructor(private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private messages: MessengerService,
    private authService: AuthService,
  ) {
    this.signupForm = this.fb.group({
      documentType: ["ID Card", Validators.required],
      accountType: ["Saving", Validators.required],
      document: ["", Validators.required],
      fullname: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      phone: [""],
      password: ["", [Validators.minLength(5), Validators.required]]
    })
  }

  /**
   * creates a new instance of Customer
   * ready to be sent to back for registration
   */
  createNewCustomer() {
    const customer: CustomerSignUpModel = this.signupForm.getRawValue();

    /* {
      documentType: this.signupForm.value.documentType,
      document: this.signupForm.value.document,
      fullname: this.signupForm.value.fullname,
      email: this.signupForm.value.email,
      phone: this.signupForm.value.phone,
      password: this.signupForm.value.password,
      accountType: this.signupForm.value.accountType,
    } */


    this.loading = true;

    setTimeout(() => {

      this.validateRegistration(customer);

    }, 1500);

  }

  validateRegistration(customer: CustomerSignUpModel) {

    this.customerService.addNewCustomer(customer)
      .subscribe({
        next: (signupResponse) => {
          const responseValue: SigninResponseModel = signupResponse as unknown as SigninResponseModel;

          if (responseValue.status) {

            this.messages.infoMsg("New Customer created successfully!", "", 2000);

            const token = responseValue.token;
            const decoded: SigninTokenResponseModel = jwt_decode(token) as SigninTokenResponseModel;
            const account = decoded.id;

            localStorage.setItem('token', token);
            localStorage.setItem('currentAccount', account);

            this.transitionToDesktop(true);
          }

        },
        error: (e) => {
          this.transitionToDesktop(false);
        }
      })
  }


  /**
  * Transition from login to Desktop ( after verify credentials )
  * or back to login form if wrong credentials are given
  */
  transitionToDesktop(result: boolean) {

    if (result) { // login succesfull

      this.authService.setUserStatus(true);
      this.authService.isInPublicZone = false;
      this.loading = false;
      this.router.navigate(["desktop"]);

    } else {    // invalid credentials. Error

      this.loading = false;
      this.messages.infoMsg("Something went Wrong! Try again...", "", 2000);
      this.signupForm.reset();
    }
  }


}
