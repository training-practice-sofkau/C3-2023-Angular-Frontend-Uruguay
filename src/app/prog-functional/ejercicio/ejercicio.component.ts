import { Component } from '@angular/core';
import { filter, from, map } from 'rxjs';
import { CustomerModel } from '../../interfaces/Customer.interface';
import { baseCustomers } from '../customer-data/customer.data';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})

export class EjercicioComponent {

  public customers: CustomerModel[] = baseCustomers;
  newData!: CustomerModel;
  obsName?: string;
  obsState: string[] = [];

  /**
   * Aplicar 6 transformaciones de datos 3 con observables y 3 sin.
   * Se deben usar 2 operadores funcionales para cada transformacion.
   *
   * Se debe crear una funcion pura, a demas de la que dio el coach
   *
   * A partir de la funcion pura crear una composicion de funciones y
   * una funcion de orden superior o un callback.
   *
   * Funcion de orden superior: Tomar una o más funciones como entrada y Devolver una función como salida
   * Comopsicion de funciones: Componer funciones se basa en combinar funciones simples para construir funciones más complicadas
   */

  //funcion pura

  transform(document: string) {
    from(this.customers).pipe(
      filter(n => n.document === document),
    ).subscribe((d) => this.newData = d)
  }

  //Transformaciones de datos sin observables.

  searchCustomrByEmail() {
    return this.customers
      .filter(customer => customer.email === 'email4@email.com')
      .map(customer => `Customer: ${customer.fullName
        .toUpperCase()}`)
  }
  filterCustomerByDocType() {
    return this.customers
      .filter(customer => customer.documentType.name === 'Pasaporte')
      .map(customer => `Customer: ${customer.fullName
        .toUpperCase()}`)
  }
  filterCustomerByPhone() {
    return this.customers
      .filter(customer => customer.phone === 100)
      .map(customer => `Customer: ${customer.fullName
        .toUpperCase()}`)
  }

  //Transformaciones de datos con observables.

  searchCustomerByFullName() {
    from(this.customers)
    .pipe(
      filter((customer) => customer.fullName === 'Nombre 2'),
      map((customer) => `Cliente: ${customer.fullName.toUpperCase()} ID: ${customer.id}`))
      .subscribe((obs) => this.obsName = obs);
      return this.obsName;
  }

  filterCustomerByState() {
    from(this.customers)
    .pipe(
      filter((customer) => customer.state === false),
      map((customer) => `Cliente: ${customer.fullName.toUpperCase()} ID: ${customer.id}`))
      .subscribe((obs1) => this.obsState.push(obs1));
      return this.obsState;
  }

}

