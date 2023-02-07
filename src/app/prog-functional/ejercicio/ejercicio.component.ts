import { Component } from '@angular/core';
import { filter, from, groupBy, map, mergeMap } from 'rxjs';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { baseCustomers } from '../customer-data/customer.data';



@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent {
  

  //TRANSFORMACION CON OBSERVABLES 1
  //Transformación con observables: Filtrar los clientes con tipo de documento "Cedula".
    filterCustomersByDocumentType(document: string) {
    return from(baseCustomers).pipe(
      filter(customer => customer.documentType.name === document)
    );
  }

  //TRANSFORMACION CON OBSERVABLES 2
  //Transformación con observables: Mapear los clientes para obtener solo su nombre completo.
    mapCustomersToFullName(nombre: string) {
    return from(baseCustomers).pipe(
      map(customer => customer.fullName)
    );
  }

  //TRANSFORMACION CON OBSERVABLES 3

 // *******************FALTA****************

  //TRANSFORMACION SIN OBSERVABLES 1
  //Transformación sin observables: Filtrar los clientes con estado activo.
    filterActiveCustomers(state: boolean) {
    return baseCustomers.filter(customer => customer.state);
  }


  //TRANSFORMACION SIN OBSERVABLES 2
  //Transformación sin observables: Mapear los clientes para obtener solo su número de teléfono.
   mapCustomersToPhone(phone: number) {
    return baseCustomers.map(customer => customer.phone);
  }





  //Funcion Pura
  pureFilterActiveCustomers(state: boolean) {
    return baseCustomers.filter(customer => customer.state === state);
  }

  
  


}

//Funcion de orden superior
function getInfo(
  fn: (parametro: string[]) => void ){ //Aqui tengo mi funcion de primer orden

 const customersInfo = baseCustomers.map(usuario =>  //mapeo hace que sea un array de strings
   `id de cuenta: ${usuario.id},
    id de tipo de documento: ${usuario.documentType.id}
    nombre del documento: ${usuario.documentType.name}
    estado del documento: ${usuario.documentType.state}
    numero del documento: ${usuario.document}
    nombre completo: ${usuario.fullName}
    correo electronico: ${usuario.email}
    telefono: ${usuario.phone}
    contraseña: ${usuario.password}
    estado de la cuenta: ${usuario.state}`);
    fn(customersInfo);
  }
  
  function mostrar(customer: string[]){
    customer.forEach(item => console.log(item));
    
  }
  
  getInfo(mostrar) //no necesito parentesis
  
  
  /**
   * Aplicar 6 transformaciones de datos 3 con observables y 3 sin.
   * Se deben usar 2 operadores funcionales para cada transformacion.
  *
   * Se debe crear una funcion pura,
  *
  * A partir de la funcion pura crear una composicion de funciones y
  * una funcion de orden superior o un callback.
   *
   * Funcion de orden superior: Tomar una o más funciones como entrada y Devolver una función como salida
   * Comopsicion de funciones: Componer funciones se basa en combinar funciones simples para construir funciones más complicadas
   */
  
