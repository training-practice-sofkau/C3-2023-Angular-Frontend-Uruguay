import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-by-one-id',
  templateUrl: './find-by-one-id.component.html',
  styleUrls: ['./find-by-one-id.component.scss']
})
export class FindByOneIdComponent implements OnInit{

  public formCustomer!: FormGroup;

  customerId:string  = ""; // esta variable la tengo que igual al input de mi search

  constructor(
    private readonly router : Router,
    private formBuilder : FormBuilder){}


  ngOnInit(): void {
    this.formCustomer = this.initForm();
    

  }

  onSubmit(){
  
  }

  initForm():FormGroup{
    return this.formBuilder.group(
      {
        searchId:['',[Validators.required]],
      })
  }

  //Quiero hace una especia se switch para filtrar si es customer ,account o cualquier otra opcion y mandar a la ruta segun las condiciones
  searchCustomerId(){
    this.customerId = this.formCustomer.value;
    //aplicar el swich con las condiciones por ejempo customer value = 1 
    this.router.navigate([`customerByOneList/${this.customerId}`]);
  }

}
