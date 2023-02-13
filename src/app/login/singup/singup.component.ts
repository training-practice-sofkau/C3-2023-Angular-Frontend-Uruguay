import { Component, Host, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpModel } from '../interfaces/signUpModel';
import { DocumentTypeModel } from 'src/app/program-Funcional/interfaces/customerModel';
import { CustomerService } from '../../customer/service/customer.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit{
  
  

  public FormSignUp!: FormGroup; //this.signupForm.reset();//En caso de querer resetear por algun error enotonce se usa esta funcion

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
  
  constructor(
    private formBuilder : FormBuilder,
    private serviceCustomer : CustomerService){}

  

  ngOnInit(): void {
    this.FormSignUp = this.initForm();
  }


  initForm():FormGroup{
    return this.formBuilder.group(
      {
        documentType:['',[Validators.required]],
        document:['',[Validators.required]],
        fullName:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(8)]],

        terms:['',[Validators.required,Validators.requiredTrue]],
      })
  }
 
  //Enviar los datos recogido a la api 
  send():void{
    console.log('form => ',this.FormSignUp.value); 
    //Setear todo los valores a una instancia de customer
    //Buscar el document Type => Cedula,Pasaporte,Credencial  
  }

  //Obtener una instancia de un document Type 
  getDocumentType(document:string){
    this.serviceCustomer.getDocumentType(document);

    this.serviceCustomer.documentTypeObservable.subscribe(
      (data : DocumentType)=> (this.documentType = data)
    );
  }

  //Funcion para redirigirme al home si se ingresa satifactoriamente
  // transitionToDesktop(result: boolean) {

  //   if (result) { // login succesfull

  //   } else {    // invalid credentials. Error

  //     this.loading = false;
  //     this.messages.infoMsg("Something went Wrong! Try again...", "", 2000);
  //     this.signupForm.reset();
  //   }
  // }

  

  


}
