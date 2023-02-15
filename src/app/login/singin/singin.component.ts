import { Component, ErrorHandler } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { signOut } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { SignInModel } from 'src/app/interfaces/signIn.Interface';

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
signInM: SignInModel | undefined

signInForm = this.formBuilder.group({
  email: this.formBuilder.nonNullable.control('',
  { validators: [Validators.required, Validators.email] }),
  password: this.formBuilder.nonNullable.control('',
    { validators: [Validators.required] }),

});
/*
public username:string = "";
public password:string = "";
*/

//capturar datos del input y pasarlos por parametros

login() {
  
  //console.log(username + " " + password)
  
  console.log(this.signInM)
  
  this.signInM = {
    email: this.signInForm.controls["email"].value,
    password: this.signInForm.controls["password"].value,
  };


  this.serviceCom.post('http://localhost:3000/security/signin', this.signInM)
  .subscribe(res => {
    //username: username,
    //password: password
//).subscribe(res => {


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
