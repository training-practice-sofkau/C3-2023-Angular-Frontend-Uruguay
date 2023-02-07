import { Component } from '@angular/core';
import { filter, find, from, map, Observable } from 'rxjs';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { baseCustomers } from '../customer-data/customer.data';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {

  /**
   * Aplicar 6 transformaciones de datos 3 con observables y 3 sin.
   * Se deben usar 2 operadores funcionales para cada transformacion.
   *
   * Se debe crear una funcion pura, ademas de la que dio el coach
   *
   * A partir de la funcion pura crear una composicion de funciones y
   * una funcion de orden superior o un callback.
   *
   * Funcion de orden superior: Tomar una o más funciones como entrada y Devolver una función como salida
   * Comopsicion de funciones: Componer funciones se basa en combinar funciones simples para construir funciones más complicadas
   */

  public customers: CustomerModel[] = baseCustomers;

  // Funciones puras
  getAllEmails(customers: CustomerModel[]): string[] {
    const emails: string[] = [];
    customers.forEach((data) => {
      emails.push(data.email);
    });
    return emails;
  }

  getDisabledCustomers(): Observable<CustomerModel> {
    const observable = from(this.customers).pipe(
      filter(customer => customer.state === false),
    )
    return observable;
  }

  getAllCustomersNames(): string[] {
    const customers: string[] = [];
    this.customers.forEach((data) => {
      customers.push(data.fullName);
    });
    return customers;
  }

  getCustomerStateById(id: string): string[] {
    const customers: string[] = [];
    this.customers.filter((data) => data.id === id).forEach((data) => {
      customers.push(data.state.toString());
    });
    return customers;
  }

  getCustomerNameById(id: string): string[] {
    const customers: string[] = [];
    this.customers.filter((data) => data.id === id).forEach((data) => {
      customers.push(data.fullName);
    });
    return customers;
  }

  // Transformaciones con suscribe

  setStateForCustomer(id: string, state: boolean) {
    from(this.customers).pipe(
      filter(customer => customer.id === id && customer !== undefined),
    ).subscribe((data) => data.state = state);
  }

  setNameForCustomer(id: string, name: string) {
    from(this.customers).pipe(
      filter(customer => customer.id === id && customer !== undefined),
    ).subscribe((data) => data.fullName = name);
  }

  setEmailForCustomer(id: string, email: string) {
    from(this.customers).pipe(
      filter(customer => customer.id === id && customer !== undefined),
    ).subscribe((data) => data.email = email);
  }

  setDocumentForCustomer(id: string, document: string) {
    from(this.customers).pipe(
      filter(customer => customer.id === id && customer !== undefined),
    ).subscribe((data) => data.document = document);
  }

  setPhoneForCustomer(id: string, phone: number) {
    from(this.customers).pipe(
      filter(customer => customer.id === id && customer !== undefined),
    ).subscribe((data) => data.phone = phone);
  }

  // Funcion de orden superior mediante callback (?)

  setAllStatesForCustomersToTrue() {
    this.getDisabledCustomers().subscribe((data) => data.state = true);
  }

}
