import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SingupComponent } from './singup/singup.component';
import { AuthService } from './services/auth.service';
import { FormBuilder,  } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Token } from '@angular/compiler';
import { lastValueFrom } from 'rxjs';
import { customerInterface } from '../account/interface/customer-interface';

@Component({
  selector: 'app-login2',

  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public id: string = ''
  public customer =  {}
  public  account = {}
  public accountType = {}
  public password:string =  ''
  public username:string =  ''


  constructor(private modalService: NgbModal, private AuthService: AuthService, private formBuilder: FormBuilder, private router: Router ) { }

    openModal(event: { preventDefault: () => void; }) {
        event.preventDefault();
      this.modalService.open(SingupComponent);
    }




        formLogin = this.formBuilder.group({

          username: [''],
          password: [''],

        })



        async login(username: string, password: string) {
          try {
            const source$ = this.AuthService.post('http://localhost:3000/security/sign-in', {
              username: username,
              password: password
            });
            const res = await lastValueFrom(source$);
            this.handleSuccessfulLogin(res);
          } catch (error) {
            console.error('Datos de inicio de sesión incorrectos');
          }
        }

        handleSuccessfulLogin(res: customerInterface) {
          const token = res.token;
          const decoded: void = jwt_decode(token);
          if (this.validateToken(token)) {
            this.storeToken(token, decoded);
            this.redirectToAccount();
          } else {
            console.error('Token inválido');
          }
        }

        validateToken(token: string): boolean {
          return typeof token === 'string' && token !== '';
        }

        storeToken(token: string, decoded: void) {
          localStorage.setItem('token', token);
          localStorage.setItem('account', JSON.stringify(decoded));
        }

        redirectToAccount() {
          this.router.navigate(['account']);
        }





        send(): void {


           let  persona =  this.formLogin?.value
           console.log(this.formLogin?.value)
          localStorage.setItem( 'persona', JSON.stringify(persona) )
        }



    ngOnInit(): void {

      // this.cargarData()


    }
  }


