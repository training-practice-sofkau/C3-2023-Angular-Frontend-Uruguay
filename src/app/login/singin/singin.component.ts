import { Component, OnInit } from '@angular/core';
import { SignIn, UserResponse } from '../interfaces/signInModel';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tokenUser } from '../interfaces/tokenModel';


@Component({
  selector: 'app-singin',
  providers:[AuthService],
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
    private formBuilder : FormBuilder){}
    
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

  signIn(){
    this.userSignIn = this.formLogin.getRawValue();
    this.authService.newSigIn(this.userSignIn);
    this.formLogin.reset();
    console.log(JSON.stringify(this.authService.getUserLocalStorage()));//username ,password,ita
  
    this.tokenUser = this.authService.getUserLocalStorage();

  
    console.log();
    
    this.authService.signOut();
 
  }
  
  
}
