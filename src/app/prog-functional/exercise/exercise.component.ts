import { Component } from '@angular/core';
import { BehaviorSubject, filter, from, Observable } from 'rxjs';
import { CustomerModel, DocumentTypeModel } from 'src/app/interfaces/customer.interface';
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

  public observableSource = new BehaviorSubject(this.customers);
  public observable$ = this.observableSource.asObservable();

  // Funciones puras
  getAllEmails(customers: CustomerModel[]): string[] {
    const emails: string[] = [];
    customers.forEach((data) => {
      emails.push(data.email);
    });
    return emails;
  }

  getAllCustomersNames(): string[] {
    const customers: string[] = [];
    this.customers.forEach((data) => {
      customers.push(data.fullName);
    });
    return customers;
  }

  // Funciones de muestreo con observables
  getAllEmailsObs(): string[] {
    let customers: string[] = [];
    this.observable$.subscribe((data) => {
      data.forEach( (data) => {
        customers.push(" " + data.email);
      })
    });
    return customers;
  }

  // Transformaciones con observables

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

  setDocumentTypeForCustomer(id: string, documentType: DocumentTypeModel) {
    from(this.customers).pipe(
      filter(customer => customer.id === id && customer !== undefined),
    ).subscribe((data) => data.documentType = documentType);
  }

  setEmailForCustomer2(id: string, email: string) {
    this.observableSource.getValue()
  }

  // Transformaciones sin observables

  setEmailForCustomer(id: string, email: string) {
    this.customers.filter(customer => customer.id === id && customer !== undefined).forEach((data) => {
      data.email = email;
    });
  }

  setDocumentForCustomer(id: string, document: string) {
    this.customers.filter(customer => customer.id === id && customer !== undefined).forEach((data) => {
      data.document = document;
    });
  }

  setPhoneForCustomer(id: string, phone: number) {
    this.customers.filter(customer => customer.id === id && customer !== undefined).forEach((data) => {
      data.phone = phone;
    });
  }

  // Funcion mediante callback

  getDisabledCustomers(): Observable<CustomerModel> {
    const observable = from(this.customers).pipe(
      filter(customer => customer.state === false),
    )
    return observable;
  }

  setAllStatesForCustomersToTrue(callback: () => Observable<CustomerModel>) {
    callback().subscribe((data) => data.state = true);
  }

  // Getters

  getCustomerStateById(id: string): string {
    let customers: string = '';
    this.customers.filter((data) => data.id === id).forEach((data) => {
      customers = data.state.valueOf().toString();
    });
    return customers;
  }

  getCustomerNameById(id: string): string {
    let customers: string = '';
    this.customers.filter((data) => data.id === id).forEach((data) => {
      customers = data.fullName;
    });
    return customers;
  }

  getEmailById(id: string): string {
    let customers: string = '';
    this.customers.filter((data) => data.id === id).forEach((data) => {
      customers = data.email;
    });
    return customers;
  }

}
