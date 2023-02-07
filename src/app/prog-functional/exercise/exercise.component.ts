import { Component } from '@angular/core';
import { filter, from } from 'rxjs';
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

  public mailUsers: CustomerModel[] = [];

  newData!: CustomerModel;


  transform(document: string) {
    from(this.customers).pipe(
      filter(n => n.document === document),
    ).subscribe((data) => this.newData = data)
  }

  getAllEmails(customers: CustomerModel[]): string[] {
    const emails: string[] = [];
    customers.forEach((data) => {
      emails.push(data.email);
    });
    return emails;
  }

  findById(id: string) {
    from(this.customers).pipe(
      filter(i => i.id === id),
    ).subscribe((data) => this.newData = data)
  }

}
