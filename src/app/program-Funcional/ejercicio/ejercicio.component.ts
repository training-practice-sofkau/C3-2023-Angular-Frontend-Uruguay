import { Component } from '@angular/core';
import { baseCustomers } from '../customer-data/customer.data';
import { Observable, filter, from, map, reduce } from 'rxjs';
import { CustomerModel } from '../interfaces/customerModel';



@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})

export class EjercicioComponent {

  customers = baseCustomers;
  newCustomer!: CustomerModel;
  c ="Nombre 3";
  //newcustomer! : CustomerModel;
  newc! : string;
  getCustomerName(name: string) {   //observable
    return from(this.customers)
    .pipe(
      filter((customer) => customer.fullName === name),
      map(customer=> customer.fullName.toUpperCase())
    )
  }
//.subscribe((customer) => (this.newc = customer))
newState! : boolean;
getCustomerState() {   //observable
  return from(this.customers).pipe(
      filter((item) => item.state === true),
      map((item)=> item.state === false)
    )
  }

  newphone! : string;

  addPhoneCustomer(phone : number) {   //observable
    return from(this.customers)
    .pipe(
      filter((item)=> item.phone === phone),
      map((item) => item.phone * 2)
    )//.subscribe((item) => (this.newphone = item))
  }

  getFullName() {   
    return this.customers.forEach(item => item.fullName.toUpperCase);
  }



  //Funcion Pura
  soy(name: string, document: string, type: string): string {
    return `Mi nombre es :${name}
   y mi document:${document}
    de tipo : ${type}`;
  }

  result = "";

  pura(): string {
    return this.result = this.soy(
      "Cristian",
      "1111111-1",
      "cedula");
  }

  agregarTexto(nombre: string,edad:number): string {
    return `Tu nombre es :${nombre} y tu edad es : ${edad}`
  }

  fraseMayuscula(nombre : string): string {
    return nombre
    .toUpperCase();
  }
  nombre = "cristian";
  edad= 24;

  producirTextoMayuscula(nombre: string ,edad:number):string{
    return this.fraseMayuscula(this.agregarTexto(nombre,edad));
  }
  


  sumar(p:number ,r:number):number{
    return p+r;
  }


  add (a:number,b:number,fn:(p:number,r:number) => number):number{
    return fn(a,b);
  }   

  
  




  
  
  


}

