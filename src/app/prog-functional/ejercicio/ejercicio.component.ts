import { Component } from '@angular/core';
import { filter, from, map, find } from 'rxjs';
import { baseCustomers } from '../customer-data/customer.data';
import { CustomerModel } from '../../interfaces/customer.interface';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss'],
})
export class EjercicioComponent {

  data = baseCustomers;

  /**
   * Aplicar 6 transformaciones de datos 3 con observables y 3 sin.
   * Se deben usar 2 operadores funcionales para cada transformacion.
   **/

  textTransform() {
    return from(this.data).pipe(
      filter((customer) => customer.documentType.name === 'Pasaporte'),
      map((customer) => `Customer: ${customer.fullName.toLowerCase()}, DocumentType: ${customer.documentType.name.toUpperCase()}`),
    );
  }

  changePhone() {
    return from(this.data).pipe(
      filter(customer => customer.phone === 100),
      map(customer => customer.phone*2)
    );
  }

  someCustomer() {
    return from(this.data).pipe(
      find((customer) => customer.fullName === 'Nombre'),
      map(customer => `${customer?.fullName || 'No encontrado' }`)
    )
  }

  cedulaFilter() {
    return this.data.filter(customer => customer.documentType.name === 'Cedula')
    .map(customer => `Customer: ${customer.fullName.toUpperCase()}`)
  }

  setState() {
    return this.data.filter(customer => customer.phone >= 100)
    .map(customer => `${customer.fullName} and ${customer.state}`)
  }

  allTrue() {
    return this.data.filter(customer => customer.state === true)
    .map(customer => `Customer: ${customer.fullName} is available customer`)
  }


   /** Se debe crear una funcion pura, a demas de la que dio el coach
   **/

  showInfo(customers: CustomerModel[]) {
    return customers.map(customer => `Customer: ${customer.fullName}, Document: ${customer.document}`)
  }

   /** A partir de la funcion pura crear una composicion de funciones y
   * una funcion de orden superior o un callback.
   **/

  getInfo(fn: (customers: CustomerModel[]) => void) {
    const customers = this.data.filter(customer => customer.state === true);
    return fn(customers);
  }

   /** Funcion de orden superior: Tomar una o más funciones como entrada y Devolver una función como salida
   * Comopsicion de funciones: Componer funciones se basa en combinar funciones simples para construir funciones más complicadas
   **/

}
