import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpModel } from './interfaces/signUpModel';
import { DocumentTypeModel } from 'src/app/program-Funcional/interfaces/customerModel';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit{
  
  public FormSignUp!: FormGroup;

  documentType! : DocumentTypeModel ;
  
  customer : SignUpModel = { 
    documentType :  {
      name: "Cedula"
    },
    document: "11111111",
    fullName: "Cristian Gonzalez",
    email: "cristian@gmail.com",
    phone: "091232323",
    password: "123",
    
  }
  
  constructor(private formBuilder : FormBuilder){}


  ngOnInit(): void {
    this.FormSignUp = this.initForm();
    //this.upDateFromApi(); //para dar valores predeterminados al formularios  
    //this.send();
  }


  initForm():FormGroup{
    return this.formBuilder.group(
      {
        // documentType:[],
        document:['',[Validators.required]],
        fullName:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(8)]],

        terms:['',[Validators.required,Validators.requiredTrue]],
      })
  }

  //Funcion para actualizar la info del formulario 
  upDateFromApi():void{
    const response = {
      document:'55975866',
      fullName:'cristian gonzalez',
      email:'cris@gmail.com',
      phone:'096123123',
      password:'cris123123',

      terms:true
    }
    this.FormSignUp.patchValue(response)
  }

  

 
  //Enviar los datos recogido a la api 
  send():void{
    console.log('form => ',this.FormSignUp.value);  
  }



}
