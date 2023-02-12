import { Component, Host, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { SignUpModel } from 'src/app/login/singup/interfaces/signUpModel';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../interface/customer';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{

  //Variables
  customerId: string = "";
  editar = false;
  customerEdit!: Customer;
  public FormUpDate!: FormGroup;
  
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
    /* @Host()*/ public customerService: CustomerService,
    private formBuilder : FormBuilder,
    public  readonly activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.FormUpDate = this.initForm();
    this.paramsCustomerId();//me guarda el parametro en => customerId
    this.editarCustomer();//capturo los datos de mi api atraves del servicio
    this.upDateFromApi();//lo muestro en el fomulario 
  }
  
    editarCustomer(){
      //actualizo el customer pasando el identificaado del customer
      this.customerService.updateOneCustomer(this.customerId);
      //Ahora lo capuro y lo igualo a mi variable customer
      this.customerService.customerOneObservable
      .subscribe((data : Customer) => {this.customerEdit = data}); 
      this.customerService.updateOneCustomer(this.customerId);  
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
        document:this.customerEdit.document,
        fullName:this.customerEdit.fullName,
        email:this.customerEdit.email,
        phone:parseInt(this.customerEdit.phone),
        password:this.customerEdit.password,
        
        terms:false,
      }
      this.FormUpDate.patchValue(response);
    }


  send():void{
    console.log('form => ',this.FormUpDate.value);  
  }

  paramsCustomerId():void{ 
    this.activatedRoute.params.subscribe(
      (params : Params) => {
        this.customerId = params['id']
      });
  }

  
  saveEdit(){
    //Tengo que llamar desde el servico a mi funcion updateCustomer para consumir la api
  }
  

}
