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

    copia = baseCustomers;
    data : string [] = [];
    data2 : string [] = [];
    data3 : string [] = [];

    
    //Transformaciones de datos sin observables.

    Email() {
      return this.copia.filter(customer => customer.email === 'police@email.com').map(customer => `${customer.fullName}`)
    }
      
    cedula() {
      return this.copia.filter(customer => customer.documentType.name === 'Cedula').map(customer => `${customer.fullName.toUpperCase()}`)
    }

    Fullname() {
      return this.copia.filter(customer => customer.fullName === 'Jefe Gorgory').map(customer => `${customer.fullName.toLocaleUpperCase()}`)
    }
      
    
    //Transformaciones de datos con observables.
  
    Mayus() {
      from(this.copia) //convierto en un objeto observable
      .pipe(  // se aplican a objetos de tipo Observable para realizar transformaciones de datos de manera funcional
        filter((customer) => customer.documentType.name === 'Cedula'),
        map((customer) => `${customer.fullName.toUpperCase()}`)) //transforma cada elemento de un arreglo a un nuevo valor.
      .subscribe(obs => this.data.push(obs));
      return this.data;
    }


    Pass() {
    from(this.copia)
    .pipe(
      filter(customer => customer.password === 'Contra1234'),
      map((customer) => customer.email)).subscribe(obj => this.data2.push(obj));
      return this.data2;
    }


    Document() {
      from(this.copia)
      .pipe(
        filter(customer => customer.phone === 70),
        map((customer) => `${customer.documentType.name.toUpperCase()}`))
        .subscribe(obj => this.data3.push(obj));
        return this.data3;
      }
   
 

    //Crear una funcion pura. 
    
    showInfo(customers: CustomerModel[]) {
    return customers.map(customer => ` ${customer.fullName},  ${customer.documentType.name}`)
    }
    
   
    //Crear una composicion de funciones y una funcion de orden superior o un callback.
  
    
    Info(funcion: (customers: CustomerModel[]) => void) {
    const customers = this.copia.filter(customer => customer.email === 'patinio@email.com');
    return funcion(customers);
    }
    
    
   /*
   * Funcion de orden superior: Tomar una o más funciones como entrada y Devolver una función como salida
   * Comopsicion de funciones: Componer funciones se basa en combinar funciones simples para construir funciones más complicadas
   */


  
}
