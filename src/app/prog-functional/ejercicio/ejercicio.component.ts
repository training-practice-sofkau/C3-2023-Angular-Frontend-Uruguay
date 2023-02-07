import { Component } from '@angular/core';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { baseCustomers } from '../customer-data/customer.data';


@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent {

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
   * Se debe crear una funcion pura, a demas de la que dio el coach
   *
   * A partir de la funcion pura crear una composicion de funciones y
   * una funcion de orden superior o un callback.
   *
   * Funcion de orden superior: Tomar una o más funciones como entrada y Devolver una función como salida
   * Comopsicion de funciones: Componer funciones se basa en combinar funciones simples para construir funciones más complicadas
   */