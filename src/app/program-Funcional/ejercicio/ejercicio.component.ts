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

  //newcustomer! : CustomerModel;
  newc! : string;
  getCustomerName(name: string) {   //observable
    from(this.customers)
    .pipe(
      filter((customer) => customer.fullName === name),
      map(customer=> customer.fullName.toUpperCase())
    ).subscribe((customer) => (this.newc = customer))
  }

newState! : boolean;
getCustomerState() {   //observable
    from(this.customers).pipe(
      filter((item) => item.state === true),
      map((item)=> item.state === false)
    ).subscribe((newstate) => (this.newState = newstate))
  }

  newphone! : string;
  addPhoneCustomer() {   //observable
    from(this.customers)
    .pipe(
      filter((item)=> item.phone !== undefined),
      map((item) => "+598"+ item.phone)
    ).subscribe((item) => (this.newphone = item) )
  }

  getFullName() {   
    this.customers.forEach(item => item.fullName.toUpperCase);
  }

  
  getState(state: boolean) {   
    this.customers
    .filter(item => item.state === state)
    .forEach(item => item.state = false);
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
  




  array:string[] = [];

  // callback(customer: string[]):string[] {
  //    customer.forEach(item => (item));
  //    return this.array2;
  // }

  // customerCallBack(fn: (s: string[]) => string[]): string[] {

  //   const array = this.customers.map(e =>
  //     `El nombre es ${e.fullName},y su documento: ${e.document}`);
  //   return fn(array);
  // }

  sumar(p:number ,r:number):number{
    return p+r;
  }


  add (a:number,b:number,fn:(p:number,r:number) => number):number{
    return fn(a,b);
  }   

  
  




  
  
  


}

