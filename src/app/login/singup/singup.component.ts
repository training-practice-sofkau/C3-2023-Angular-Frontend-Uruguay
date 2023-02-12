import { Component, Host, OnInit } from '@angular/core';
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
      name: ""
    },
    document: "",
    fullName: " ",
    email: "",
    phone: "",
    password: "",
    
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
  // upDateFromApi():void{
  //   const response = {
  //     document:"",
  //     fullName:"",
  //     email:"",
  //     phone:"",
  //     password:"",

  //     terms:false
  //   }
  //   this.FormSignUp.patchValue(response)
  // }

  

 
  //Enviar los datos recogido a la api 
  send():void{
    console.log('form => ',this.FormSignUp.value);  
  }



}
