import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';



//Interfaces
import { CustomerSignUpModel } from '../../interfaces/customer.interface';
import { SigninResponseModel, SigninTokenResponseModel } from '../../interfaces/responses.interface';

//Services
import { CustomerService } from '../../services/customer.service';
import { MessengerService } from '../../services/messenger.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signupForm: FormGroup;
  documentTypes: string[] = ["ID Card", "Passport ID"];
  accountTypes: string[] = ["Saving", "Checks"];

  hidePass = true;
  hideConfirmPass = true
  loading = false;

  constructor(private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private messages: MessengerService,
    private authService: AuthService,
  ) {
    this.signupForm = this.fb.group({
      documentType: ["ID Card", Validators.required],
      accountTypeName: ["Saving", Validators.required],
      document: ["", Validators.required],
      fullname: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      phone: [""],
      password: ["", [Validators.minLength(6), Validators.required]],
      confirmPassword: ["", [Validators.minLength(6), Validators.required]]
    },
      { validators: passwordsMatchValidator() }
    );
  }

  /**
   * creates a new instance of Customer
   * ready to be sent to back for registration
   */
  createNewCustomer() {
    const customer: CustomerSignUpModel = this.signupForm.getRawValue();

    this.validateRegistration(customer);

  }

  registerWithGoogle(){

    this.authService.loginWithFirebase()


    const email = this.signupForm.get('email')?.value;
    const pass = this.signupForm.get('password')?.value;



    /* this.authService.registerWithFirebase(email, pass)
      .subscribe(() => {
        this.loading = true;
        setTimeout(() => {
        //  this.validateRegistration(customer);
        }, 1500);
      })
 */
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

console.log('account: ' + account + ' - ' + token)

            localStorage.setItem('token', token);
            localStorage.setItem('currentAccount', account);

            this.transitionToDesktop(true);
          }
        }
      })
  }


  /**
  * Transition from login to Desktop ( after verify credentials )
  * or back to login form if wrong credentials are given
  */
  transitionToDesktop(result: boolean) {

    if (result) { // login succesfull

      this.authService.setUserLogStatus(true);
      this.authService.setPublicZoneStatus(false);
      this.authService.setUserAccessPermits(true);
      this.loading = false;
      this.router.navigate(["desktop"]);

    }
    /*  else {    // invalid credentials. Error

      this.loading = false;
      this.messages.infoMsg("Something went Wrong! Try again...", "", 2000);
      this.signupForm.reset();
    } */
  }


}

function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password != confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }
    return null;
  }
}
