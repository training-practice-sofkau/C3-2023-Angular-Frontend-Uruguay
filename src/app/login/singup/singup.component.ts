import { Component, Host, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpModel } from '../interfaces/signUpModel';
import { DocumentTypeModel } from 'src/app/program-Funcional/interfaces/customerModel';
import { CustomerService } from '../../customer/service/customer.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SignIn } from '../interfaces/signInModel';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit{
  
  

  public FormSignUp!: FormGroup; 
  
  customer : SignUpModel = {  
    documentTypeId: "",
    accountTypeId:"",
    document: "",
    fullName: " ",
    email: "",
    phone: "",
    password: "",
    
  }
  customerRegistrado : SignUpModel = {  
    documentTypeId: "",
    accountTypeId: "",
    document: "",
    fullName: " ",
    email: "",
    phone: "",
    password: "",
    
  }
  
  constructor(
    private formBuilder : FormBuilder,
    private serviceCustomer : CustomerService,
    private router : Router,
    private authService : AuthService){}

  

  ngOnInit(): void {
    this.FormSignUp = this.initForm();
  }

  send():void{
    this.customer = this.FormSignUp.getRawValue();

    this.authService.newSigUp(this.customer);

    this.customerRegistrado = this.authService.getCustomerLocalStorage();
    console.log(this.customerRegistrado);
    
    const signInFire : SignIn = {
      username : this.customer.email,
      password : this.customer.password,
    }

    this.authService.registerFire(signInFire);

    sessionStorage.removeItem('token');
    this.router.navigate(['/singin']);




    //Yatengo en el servicio para registrarme , faltan los datos restantes a parte del correo y contrasenia
    // this.authService.register(this.customer) Me da error proque tengo que modificar mi registro al firebase porque solo
    //esta con el correo
   
    
  }


  initForm():FormGroup{
    return this.formBuilder.group(
      {
        documentTypeId:['',[Validators.required]],
        accountTypeId:['',[Validators.required]],
        document:['',[Validators.required]],
        fullName:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(8)]],
      })
  }


}
