import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  loading = false;
  userIsLogged = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  /**
   * User login authentication
   */
  login() {
    const usuario = this.form.value.username;
    const password = this.form.value.password;

    //TODO: verify credentials calling backend

    if (usuario == "admin" && password == "1234") {     //dummy credentials only for testing

      this.transitionToDesktop();

    } else {    // credenciales no validas. Error

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


