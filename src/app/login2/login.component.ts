import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SingupComponent } from './singup/singup.component';
import { AuthService } from './services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

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

        login(username: string, password: string) {
          this.AuthService.post('http://localhost:3000/security/sign-in', {
            username: username,
            password: password
          }).subscribe(res => {
            const token = res.token;
            const decoded: {} = jwt_decode(token);
              console.log(decoded);
            if (token && typeof token === 'string') {
              // Guardar el token en el almacenamiento local y redirigir al usuario a otra página
              localStorage.setItem('hola', 'true')
              localStorage.setItem('token', token);
              localStorage.setItem('account', JSON.stringify(decoded));
              this.router.navigate(['account']);
            } else {
              console.error('Token inválido');
            }
          }, error => {
            console.error('Datos de inicio de sesión incorrectos');
          });
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


