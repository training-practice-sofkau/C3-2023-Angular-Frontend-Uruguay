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
import jwtDecode from 'jwt-decode';
import { AccountInterfaec } from '../account/interface/account-interface';

@Component({
  selector: 'app-login2',
  styleUrls: ['./login.component.scss'],


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





    onGoogleLogin(){


    }

    openModal(event: { preventDefault: () => void; }) {
        event.preventDefault();
      this.modalService.open(SingupComponent);
    }




        formLogin = this.formBuilder.group({

          username: [''],
          password: [''],

        })

          loginGoogle(username: string, password: string){

          this.AuthService.login(username, password)
          
        }

        registerGoogle(username: string, password: string){
          this.AuthService.register(username, password)

        }

        async login(username: string, password: string) {        
          try {
            const source$ = this.AuthService.post('http://localhost:3000/security/sign-in', {
              username: username,
              password: password
            });

            ;
            const res = await lastValueFrom(source$);
            this.handleSuccessfulLogin(res);
          } catch (error) {
            console.error('Datos de inicio de sesión incorrectos');
          }
        }

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

        validateToken(token: string): boolean {
          return typeof token === 'string' && token !== '';
        }

        storeToken(token: string, decoded:  AccountInterfaec) {
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

     
        onClick(){
          this.AuthService.loginWithGoogle()
            .then(response => {
              response.user.getIdToken()
                .then(token => {
                  const decodedToken: any = jwtDecode(token);
                  console.log(decodedToken);
                  
                  // Aquí utilizamos las funciones de validación
                  if (this.validateToken(token)) {
                    // Mapeamos los datos antes de guardarlos en el local storage
                    const account: AccountInterfaec = {
                      
                      accountUser: {
                        acc_Balance: 0,
                        customer: {
                          document: '',
                          fullName: decodedToken.name || 'usuario',
                          email: decodedToken.email || 'correo',
                          phone: 'telefono',
                          password: 'password',
                          avatarUrl: decodedToken.picture || 'fotoperfil',
                          token: '',
                          documentType: {
                            name: '',
                            id: '',
                            state: true,
                          },
                          name: 'decodedToken.name',
                          id: '',
                          state: false
                        },
                        id: decodedToken.id,
                        accountType:{
                          id: decodedToken.id,
                          name: 'Cuenta Pesos',
                          state: true,
                        },
                        state: true

                      }
                     
                    };
                    
                    this.storeToken(token, account);
                    this.redirectToAccount();
                  } else {
                    console.error('Token inválido');
                  }
                })
                .catch(error => console.error(error))
            })
            .catch(error => console.error(error))
        }
        


      ngOnInit(): void {

      // this.cargarData()


    }
  }


