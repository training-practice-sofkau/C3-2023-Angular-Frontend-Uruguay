import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SingupComponent } from './singup/singup.component';
import { AuthService } from './services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { lastValueFrom } from 'rxjs';
import jwtDecode from 'jwt-decode';

import { AlertsService, DecodedToken,AccountInterfaec,customerInterface } from '../../tools';

@Component({
  selector: 'app-login2',
  styleUrls: ['./login.component.scss'],

  templateUrl: './login.component.html',
})
export class LoginComponent {
  public id: string = '';
  public customer = {};
  public account = {};
  public accountType = {};
  public password: string = '';
  public username: string = '';

  constructor(
    private modalService: NgbModal,
    public AlertsService: AlertsService,
    private AuthService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  /**
   * The function takes an event object as an argument, and then calls the preventDefault() method on
   * that event object
   * @param event - { preventDefault: () => void }
   */
  openModal(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.modalService.open(SingupComponent);
  }
  /* Creating a form group with two controls, username and password. */

  formLogin = this.formBuilder.group({
    username: [''],
    password: [''],
  });
  /**
   * The function takes in two parameters, username and password, and then calls the login function from
   * the AuthService
   * @param {string} username - string - The username of the user.
   * @param {string} password - string
   */

  /**
   * The loginGoogle function takes in a username and password, and then calls the login function from
   * the AuthService
   * @param {string} username - The username of the user.
   * @param {string} password - string - The password of the user
   */
  loginGoogle(username: string, password: string) {
    this.AuthService.login(username, password);
  }
  /**
   * When the user clicks the register button, call the register function in the AuthService and pass it
   * the username and password.
   * @param {string} username - The username of the user.
   * @param {string} password - string - The password you want to use for the account.
   */

  /**
   * The function takes in a username and password, and then calls the register function in the
   * AuthService
   * @param {string} username - string - The username of the user.
   * @param {string} password - string
   */
  registerGoogle(username: string, password: string) {
    this.AuthService.register(username, password);
  }

  /**
   * We're using the `lastValueFrom` operator to get the last value from the observable returned by the
   * `post` method of the `AuthService` service
   * @param {string} username - The username of the user.
   * @param {string} password - string
   */
  async login(username: string, password: string) {
    try {
      const source$ = this.AuthService.post(
        'http://localhost:3000/security/sign-in',
        {
          username: username,
          password: password,
        }
      );

      const res = await lastValueFrom(source$);
      this.handleSuccessfulLogin(res);
    } catch (error) {
      console.error('Datos de inicio de sesión incorrectos');
    }
  }

  /**
   * It takes a response from the server, extracts the token, decodes it, validates it, and if it's
   * valid, stores it and redirects to the account page
   * @param {customerInterface} res - customerInterface
   */

  handleSuccessfulLogin(res: customerInterface) {
    const token = res.token;
    const decoded: AccountInterfaec = jwt_decode(token);
    if (this.validateToken(token)) {
      this.storeToken(token, decoded);
      this.redirectToAccount();
    } else {
      console.error('Token inválido');
    }
  }

  /**
   * It returns true if the token is a string and not an empty string
   * @param {string} token - The token to validate.
   * @returns A boolean value.
   */
  validateToken(token: string): boolean {
    return typeof token === 'string' && token !== '';
  }

  /**
   * It takes a token and decoded account object as parameters, and stores them in local storage
   * @param {string} token - The token that was returned from the server.
   * @param {AccountInterfaec} decoded - AccountInterface
   */

  storeToken(token: string, decoded: AccountInterfaec) {
    localStorage.setItem('token', token);
    localStorage.setItem('account', JSON.stringify(decoded));
  }

  /**
   * It redirects the user to the account page.
   */

  redirectToAccount() {
    this.router.navigate(['account']);
  }

  /**
   * The function send() is called when the user clicks the submit button. It takes the values from the
   * form and stores them in the local storage
   */

  send(): void {
    let persona = this.formLogin?.value;
    console.log(this.formLogin?.value);
    localStorage.setItem('persona', JSON.stringify(persona));
  }

  /**
   * It logs in with Google, gets the token, validates it, decodes it, maps the data to an account
   * object, stores the token and account in local storage, and registers the account in the database
   */
  async onClick() {
    try {
      const response = await this.AuthService.loginWithGoogle();
      const token = await response.user.getIdToken();
      const isTokenValid = this.validateToken(token);
      if (isTokenValid) {
        const decodedToken: DecodedToken = jwtDecode(token);
        const account = await this.mapAccountData(decodedToken);
        this.storeToken(token, account);
        this.registerForgoogle(account);
      } else {
        console.error('Token inválido');
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * A function that allows you to register a user in the system.
   * @param {AccountInterfaec} account - AccountInterfaec
   */

  registerForgoogle(account: AccountInterfaec) {
    try {
      this.AuthService.post('http://localhost:3000/security/sign-up', {
        document: account.accountUser.customer.document,
        fullName: account.accountUser.customer.fullName,
        email: account.accountUser.customer.email,
        phone: account.accountUser.customer.phone,
        password: account.accountUser.customer.password,
        accountTypeName: account.accountUser.accountType.name,
        avatarUrl: account.accountUser.customer.avatarUrl,
        state: true,
      }).subscribe((response) => {
        console.log(response);
      });
      this.login(
        account.accountUser.customer.email,
        account.accountUser.customer.password
      );
      setTimeout(() => {
        this.router.navigate(['/account']);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * It returns the document from the AlertsService.
   */

  /**
   * It returns a promise.
   */
  async getDocument() {
    return this.AlertsService.getDocument();
  }

  /**
   * It returns a promise.
   */
  async getPassword() {
    return this.AlertsService.getPassword();
  }

  /**
   * A function that receives a decoded token and returns an account interface.
   * @param {DecodedToken} decodedToken - DecodedToken: This is the token that is decoded by the jwt
   * library.
   */
  async mapAccountData(decodedToken: DecodedToken): Promise<AccountInterfaec> {
    let password: string = await this.getPassword();
    let document: string = await this.getDocument();

    return {
      accountUser: {
        acc_Balance: 0,
        customer: {
          document: document,
          fullName: decodedToken.name || 'usuario',
          email: decodedToken.email || 'correo',
          phone: 'telefono',
          password: password,
          avatarUrl: decodedToken.picture || 'fotoperfil',
          token: '',
          documentType: {
            name: '',
            id: '',
            state: true,
          },
        },
        id: decodedToken.id,
        accountType: {
          id: decodedToken.id,
          name: 'Cuenta Pesos',
          state: true,
        },
        state: true,
      },
    };
  }
}
