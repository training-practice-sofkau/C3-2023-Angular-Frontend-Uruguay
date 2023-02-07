import { Component } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { filter } from 'rxjs/internal/operators/filter';
import { baseCustomers } from '../customer-data/customer.data';
import { CustomerModel } from 'src/app/i-model/i-customer';
import { map } from 'rxjs/internal/operators/map';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent {

    /*
    * Transformaciones de datos con observables.
    */

    copia = baseCustomers;


    Mayus() {
    return from(this.copia).pipe(
      filter((customer) => customer.documentType.name === 'Cedula'),
      map((customer) => `CUSTOMER: ${customer.fullName.toUpperCase()}`),);
    }


    Pass() {
    return from(this.copia).pipe(
      filter(customer => customer.password === '52saad2a'),
      map(customer => customer.phone*2));
    }
  
  
  //Transformaciones de datos sin observables.


    ThisEmail() {
    return this.copia.filter(customer => customer.email === 'email4@email.com').map(customer => `Customer: ${customer.fullName}`)
    }
  
    cedula() {
    return this.copia.filter(customer => customer.documentType.name === 'Cedula').map(customer => `Customer: ${customer.fullName.toUpperCase()}`)
    }
  

    //Crear una funcion pura. 

    showInfo(customers: CustomerModel[]) {
    return customers.map(customer => `Customer: ${customer.fullName}, Document: ${customer.documentType.name}`)
    }

   
    //Crear una composicion de funciones y una funcion de orden superior o un callback.
  

    Info(funcion: (customers: CustomerModel[]) => void) {
    const customers = this.copia.filter(customer => customer.phone === 10);
    return funcion(customers);
    }


   /*
   * Funcion de orden superior: Tomar una o más funciones como entrada y Devolver una función como salida
   * Comopsicion de funciones: Componer funciones se basa en combinar funciones simples para construir funciones más complicadas
   */


  
}
