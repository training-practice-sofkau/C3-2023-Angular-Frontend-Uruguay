import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';

// Services
import { MessengerService } from '../../services/messenger.service';
import { CustomerService } from '../../services/customer.service';

// Components
import { AppComponent } from '../../app.component';

// Interfaces
import { CustomerSignInModel } from '../../interfaces/customer.interface';
import { SigninResponseModel, SigninTokenResponseModel } from '../../interfaces/responses.interface';
import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  loading = false;
  userIsLogged = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private messages: MessengerService,
    private router: Router,
    private customerService: CustomerService,
    private authService: AuthService,
    public appComp: AppComponent,
  ) {

    this.signinForm = this.fb.group({
      username: ["",], //[Validators.email, Validators.required]],
      password: ["",] //[Validators.minLength(5), Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  /**
   * User login from signin form
   */
  login() {
    const formUsername = this.signinForm.value.username;
    const formPassword = this.signinForm.value.password;

    let userSignin: CustomerSignInModel = {
      username: formUsername,
      password: formPassword
    }

    this.loading = true;

    setTimeout(() => {

      this.validateCredentials(userSignin);

    }, 1500);


  }

  /**
   * Checks the response from customerService and verifies
   * that the credentials are valid
   * sets in localstorage the data to be used later
   * Redirect the user to desktop or back to login
   */

  validateCredentials(userSignin: CustomerSignInModel) {

    this.customerService.customerSignin(userSignin)
      .subscribe({
        next: (signInResponse) => {
        const responseValue = signInResponse as SigninResponseModel;

        if (responseValue.status) {

          const token = responseValue.token;
          const decoded: SigninTokenResponseModel = jwt_decode(token) as SigninTokenResponseModel;
          const account = decoded.id;

          localStorage.setItem('token', token);
          localStorage.setItem('currentAccount', account);

          this.transitionToDesktop(true);
        }
      },
        error: (e) =>{
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
      this.messages.infoMsg("Username/Email or Password not valid! Try again", "", 2000);
      this.signinForm.reset();
    }
  }
}


