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
      map((customer) => `Customer: ${customer.fullName.toUpperCase()}`),);
    }


    Pass() {
    return from(this.copia).pipe(
      filter(customer => customer.password === '52saad2a'),
      map(customer => customer.phone*2));
    }
  
    ThisCustomer() {
    return from(this.copia).pipe(
      find((customer) => customer.fullName === 'Bob Patiño'),
      map(customer => `${customer?.fullName || 'No existe!' }`))
    }

 
  //Transformaciones de datos sin observables.


    ThisEmail() {
    return this.copia.filter(customer => customer.email === 'email4@email.com').map(customer => `Customer: ${customer.fullName}`)
    }
  
    cedulaFilter() {
    return this.copia.filter(customer => customer.documentType.name === 'Cedula').map(customer => `Customer: ${customer.fullName.toUpperCase()}`)
    }
  
    State() {
    return this.copia.filter(customer => customer.phone >= 100).map(customer => `${customer.fullName} and ${customer.state = false}`)
    }
  
    allTrue() {
    return this.copia.filter(customer => customer.state === true).map(customer => `Customer: ${customer.fullName}`)
    }

    
    //Crear una funcion pura. 

    showInfo(customers: CustomerModel[]) {
    return customers.map(customer => `Customer: ${customer.fullName}, Document: ${customer.documentType.name}`)
    }

   
    //Crear una composicion de funciones y una funcion de orden superior o un callback.
  

    Info(funcion: (customers: CustomerModel[]) => void) {
    const customers = this.copia.filter(customer => customer.state === true);
    return funcion(customers);
    }


   /*
   * Funcion de orden superior: Tomar una o más funciones como entrada y Devolver una función como salida
   * Comopsicion de funciones: Componer funciones se basa en combinar funciones simples para construir funciones más complicadas
   */


  
}
