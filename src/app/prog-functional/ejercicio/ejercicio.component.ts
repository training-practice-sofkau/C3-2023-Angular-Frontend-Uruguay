import { Component } from '@angular/core';
import { filter, from } from 'rxjs';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { NewLineKind } from 'typescript';
import { baseCustomers } from '../customer-data/customer-data';

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
   * Se debe crear una funcion pura, ademas de la que dio el coach
   *
   * A partir de la funcion pura crear una composicion de funciones y
   * una funcion de orden superior o un callback.
   *
   * Funcion de orden superior: Tomar una o más funciones como entrada y Devolver una función como salida
   * Comopsicion de funciones: Componer funciones se basa en combinar funciones simples para construir funciones más complicadas
   */


  public customers: CustomerModel[] = baseCustomers;

  newData!: CustomerModel;







  /**
   * return the element that matches the document provided
   * @param document document to search for
   */
  transform(document: string) {
    from(this.customers).pipe(
      filter(n => n.document === document),
    ).subscribe((data) => this.newData = data)
  }

  /**
     * Function that returns an array of names and Id's
     * Next, it passes that info to another function that uses the data
     *
     * @param customers array of Customers
     * @param fn function that manages the results ( array of strings )
     */
  getCustomersFullNameAndId(customers: CustomerModel[], fn: (str: string[]) => void) {

    const customersInfo = customers.map(c => `Customer: ${c.fullName} has de Document: ${c.document} `);
    fn(customersInfo);
  }


  /**
   * Take a customerArray and sort the info
   * @param customerList array of customers
   * @returns sorted array
   */
  sortCustomers(customerList: string[]): string[]{

    return customerList.sort();

  }

  /**
   * shows the info of the current CustomerModel element
   * @returns String
   */
  public showCurrentElement() : string {

    return this.customerFullDataString(this.newData);

  }


  /**
   * Take a CustomerModel entity and convert it to a String
   * @param customer customer Data to convert
   * @returns string of data
   */
  customerFullDataString(customer: CustomerModel): string{

    return (Object.values(customer)
              .reduce(function(prev, curr)
              { return prev.concat(" - " + curr)})
           ).toString();
  }


  showCustomerData(document: string): string{

    this.transform(document); // find the customer
    return this.customerFullDataString(this.newData);

  }



  /**
   * return an array of Id and fullnames of customers
   * @returns array of strings
   */
  public showIdAndFullnameAllCustomers(): string[] {
    return this.customers.map(e => `ID: ${e.id} -> Name: ${e.fullName} `);
  }

  /**
   * Take 2 values and return the sum of them
   * @param a value 1
   * @param b value 2
   * @returns sum of value 1 and vale 2
   */
  public sum(a: number, b: number): number {

    return a + b;

  }
}
