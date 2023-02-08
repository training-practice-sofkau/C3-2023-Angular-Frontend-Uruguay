import { Component } from '@angular/core';
import { filter, from, map, Observable } from 'rxjs';
import { CustomerModel } from '../../interfaces/Customer.interface';
import { baseCustomers } from '../customer-data/customer.data';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent {

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

  newEmails: string[] = []
  newClients: string[] = []
  newDocuments: string[] = []

  newState!: boolean;

  //funcion pura
  getCustomers(): Array<CustomerModel> {
    return [...baseCustomers]
  }

  //Funciones sin observable
  getActiveCustomers() {
    return (this.getCustomers())
      .filter(c => c.state === true)
      .map(c => c.document.toString())
  }

  getDeactivatedCustomers() {
    return (this.getCustomers())
      .filter(c => c.state === false)
      .map(c => c.fullName.toUpperCase())
  }

  phoneToString(id: string): string[] {
    return (this.getCustomers())
      .filter(c => c.id === id)
      .map(c => c.phone.toString())
  }

  //Pipes
  nameToUpperCase() {
    from(this.getCustomers()).pipe(
      filter(c => c.documentType.name === 'Cedula'),
      map(c => c.fullName.toUpperCase()))
      .subscribe(c => this.newClients.push(c));
      return this.newClients
  }

  transformEmail() {
    from(this.getCustomers()).pipe(
      filter(c => c.state === true),
      map(name => name.email))
      .subscribe(c => this.newEmails.push(c))
  }

  changeDocument() {
    from(this.getCustomers()).pipe(
      filter(c => c.documentType.name === "Pasaporte"),
      map(c => c.documentType.name = "Cedula"))
      .subscribe(c => this.newDocuments.push(c))
  }

  //Callback
  isAccountActive(id: string, fn: () => Array<CustomerModel>) {
    return from(fn()).pipe(
      filter(c => c.id === id && c.state === true),
      map(c => c.fullName.toUpperCase()),
    )
  }

  //Funcion de primer orden
  showToUppercase() {
    (this.getCustomers()).forEach(item => console.log(item.fullName.toUpperCase()))
  }

  //Funcion de primer orden
  showCustomer() {
    (this.getCustomers()).forEach(item => console.log(item))
  }

  //Funcion de primer orden
  showOrdered(customers: string[]) {
    customers.sort().forEach((item, index) => {
      console.log(`${index + 1} ${item}`);
    })
  }

  //Funcion de orden superior        //Funcion de primer orden
  getInfo(customers: CustomerModel[], fn: (b: string[]) => void) {
    const customerInfo =
      customers.map(e => `Cliente con id: ${e.id} puede hacer depositos: ${e.state}`)
    fn(customerInfo)
  }
}