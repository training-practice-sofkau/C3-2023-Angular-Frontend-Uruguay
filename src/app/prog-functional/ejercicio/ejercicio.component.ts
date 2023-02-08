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

  asd = "111111111aaaa"
  constructor() {
    this.getActiveCustomers()
  }
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

  //test = baseCustomers

  //funcion pura
  getCustomers(): Array<CustomerModel> {
    return [...baseCustomers]
  }

  // transform(document: string) {
  //   from(this.customers).pipe(
  //     filter(n => n.document === document),
  //   ).subscribe((data) => this.newData = data)
  // }
  //Transformaciones
  newState!: boolean;

  getActiveCustomers() {
    return (this.getCustomers()).filter(c => c.state === true)
      .map(c => c.document.toString())
  }

  getDeactivatedCustomers() {
    return (this.getCustomers()).filter(c => c.state === false)
      .map(c => c.fullName.toUpperCase)
  }

  phoneToString(id: string) {
    return (this.getCustomers()).filter(c => c.id === id)
      .map(c => c.phone.toString())
  }

  nameToUppercase() {
    return from(this.getCustomers()).pipe(
      filter(c => c.documentType.name === 'Cedula'),
      map(c => c.fullName.toLowerCase()),
    );
  }

    isAccountActive(id: string, fn: (c: string) => string): boolean {
    from(fn(id)).pipe(
      //filter(c => c)
    )
    return true
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