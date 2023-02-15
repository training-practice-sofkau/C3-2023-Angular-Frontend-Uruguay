import { Component, OnInit } from '@angular/core';
import { SignIn, UserResponse } from '../interfaces/signInModel';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tokenUser } from '../interfaces/tokenModel';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/service/customer.service';


@Component({
  selector: 'app-singin',
  providers:[AuthService,CustomerService],
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
  
  //token ! : string;
  userSignIn!: SignIn ;
  tokenUser : tokenUser = {
    username : "",
    password: "",
    iat:""
  } ;
  public formLogin!: FormGroup ; 

  constructor(private authService : AuthService,
private formBuilder : FormBuilder,
    private router : Router,
    private customerService : CustomerService ){}
    
  ngOnInit(): void {
      
    this.formLogin = this.initFormLogin();
    //Enviar a la base de datos 
    
    //Despues reseteoo 
    
  }

  
  initFormLogin():FormGroup{
     return this.formBuilder.group(
      {
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    });
  }

  signIn(){ // Tiene un error que al principio no me lee el token 
     this.userSignIn = this.formLogin.getRawValue();
    
    //busca en el backend el correo y pass
    this.authService.newSigIn(this.userSignIn);
    this.tokenUser = this.authService.getUserLocalStorage();
    console.log(this.tokenUser);
    
    //verifica si exite en firebase
    this.authService.loginFire(this.userSignIn)
    .then( data => {
      console.log(data)
      this.router.navigate(["/home"]) 
      })
    .catch(err => (console.log(err))); 

    
  }

  google(){
    return this.authService.loginGoogle()
    .then(data => console.log(data.user.getIdToken()))
    .catch(err => console.log(err))
  }

  
  
  
}
