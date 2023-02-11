import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { MessengerService } from '../../../services/messenger.service';
import { AuthService } from '../../../services/auth.service';

// Components
import { AppComponent } from '../../../app.component';

// Interfaces
import { CustomerSignInModel } from '../../../interfaces/customer.interface';



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
    private authService: AuthService,
    public appComp: AppComponent,
  ) {

    this.signinForm = this.fb.group({
      username: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.minLength(5), Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  /**
   * User login authentication
   */
  login() {
    const formUsername = this.signinForm.value.username;
    const formPassword = this.signinForm.value.password;

    //TODO: verify credentials calling backend

    let userSignin: CustomerSignInModel = {
      username: formUsername,
      password: formPassword
    }

    const answer = this.authService.customerLogin(userSignin);

    console.log(answer);

    if (formUsername == "admin" && formPassword == "12345") { // check for valid credentials

      this.transitionToDesktop();

    } else {    // invalid credentials. Error

      this.messages.infoMsg("Username/Email or Password not valid! Try again", "", 2000);
      this.signinForm.reset();

    }
  }

  /**
   * Transition from login to Desktop ( after verify credentials )
   */
  transitionToDesktop() {

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.authService.setUserStatus(true);
      this.appComp.isInPublicZone = false;
      this.router.navigate(["desktop"]);
    }, 1500);
  }


}


