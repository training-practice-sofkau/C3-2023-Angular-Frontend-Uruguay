import { Component } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import{ baseCustomers} from '../customer-data/customer.data'
@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent {

  clientesConNombresEnMayusculas: { name: string; }[] = [];
  sumadTelefonos: number = 0
  filtradoxDocumento: { name: string; }[] = [];
  filtradoXEstado: { name: string; }[] = [];
  baseCustomerss = [...baseCustomers]
  filtradoxemail: { name: string; }[] = [];




sumaDeTelefonos(documento:string){

  this.sumadTelefonos = baseCustomers.reduce((acc, customer) => {
    if (customer.documentType.name === documento) {
      acc += customer.phone;
    }
    return acc;
  }, 0);

}
filtradoPorDocumento(documento: string){

  this.filtradoxDocumento = baseCustomers.map(customer => ({
    name: customer.fullName,
    document: customer.document,
    documentType: customer.documentType.name
  })).filter(customer => customer.documentType === documento);

}

filtradoPorEstado(estado: boolean){

  this.filtradoXEstado = baseCustomers.map(customer => ({
    name: customer.fullName,
    document: customer.document,
    documentType: customer.documentType.name,
    state: customer.state
  })).filter(customer => customer.state === estado );

}



filtradoPorCorreo(email: string){

  this.filtradoxemail = baseCustomers.map(customer => ({
    name: customer.fullName,
    document: customer.document,
    email: customer.email
  })).filter(customer => customer.email === email);

}

  /**


   * Aplicar 6 transformaciones de datos 3 con observables y 3 sin.



   * Se deben usar 2 operadores funcionales para cada transformacion.

  *


   * Se debe crear una funcion pura, a demas de la que dio el coach
/*/


transformarNombre(cliente: { fullName: string; }) {
  return {
    name: cliente.fullName.toUpperCase()
  };
}

nombreMayusculas(baseCustomers: Array<{ fullName: string }>, transformarNombre: (cliente: { fullName: string }) => { name: string }) {
  this.clientesConNombresEnMayusculas = Array.from(baseCustomers, transformarNombre);
}

}



/**

   *
   * A partir de la funcion pura crear una composicion de funciones y
   * una funcion de orden superior o un callback.
   *
   * Funcion de orden superior: Tomar una o más funciones como entrada y Devolver una función como salida
   * Comopsicion de funciones: Componer funciones se basa en combinar funciones simples para construir funciones más complicadas
   */



  //funcion pura


  // transform(document: string) {
  //   from(this.customers).pipe(
  //     filter(n => n.document === document),
  //   ).subscribe((data) => this.newData = data)
  // }


