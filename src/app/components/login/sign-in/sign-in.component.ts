import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../../services/auth.service';
import { AppComponent } from '../../../app.component';
import { CustomerSignInModel } from '../../../interfaces/customer.interface';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  loading = false;
  userIsLogged = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService,
    public appComp: AppComponent,
  ) {

    this.form = this.fb.group({
      username: ["", Validators.required, Validators.email],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  /**
   * User login authentication
   */
  login() {
    const formUsername = this.form.value.username;
    const formPassword = this.form.value.password;

    //TODO: verify credentials calling backend

    let userSignin: CustomerSignInModel = {
      username: formUsername,
      password: formPassword
    }

    //const answer = this.authService.customerSignIn(userSignin);

    //console.log(this.authService.token);

    if (formUsername == "admin" && formPassword == "1234") { // check for valid credentials

      this.transitionToDesktop();

    } else {    // invalid credentials. Error

      this.errorMsg('Username/Email or Password not valid! Try again', '');
      this.form.reset();

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

  /**
   * Show a error message
   * @param message message to be shown
   * @param action text describing the next action
   */
  errorMsg(message: string, action: string | undefined) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
}


