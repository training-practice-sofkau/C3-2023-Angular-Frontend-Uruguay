import { Component, ErrorHandler } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { signOut } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

constructor(
  private router: Router,
  private  serviceCom: AuthService,
  private formBuilder: FormBuilder,

  //private jwt_decode: jwtDecode
  )
{}

public username:string = "";
public password:string = "";


//capturar datos del input y pasarlos por parametros

login(username: string, password: string) {
  
  //console.log(username + " " + password)
  
  this.serviceCom.post('http://localhost:3000/security/signin', {
    username: username,
    password: password
  }).subscribe(res => {


    const token = res.token;
    const decoded: {} = jwtDecode(token);
      console.log(decoded);
    if (token && typeof token === 'string') {
      // Guardar el token en el almacenamiento local y redirigir al usuario a otra página
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

formLogin = this.formBuilder.group({
  username: [''],
  password: [''],
});



/*
login (username: string, password:string){
  //consultar si el user existet

  console.log(username + password)
  
this.serviceCom.check = true
this.router.navigate(['/Myaccount'])

}
*/

onClick(){

  this.serviceCom.loginWithGoogle()
  .then(response =>{
    //cambio valor status
    this.serviceCom.setStatusVariable(false)
    this.router.navigate(['/account-customer/profile'])  })
  .catch(error =>console.log(error))

}




}
