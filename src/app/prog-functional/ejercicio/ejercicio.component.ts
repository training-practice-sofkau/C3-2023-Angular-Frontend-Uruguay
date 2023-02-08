import { Component } from '@angular/core';
import { filter, from, groupBy, map, mergeMap } from 'rxjs';
import { baseCustomers } from '../customer-data/customer.data';



@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent {
  public customerPhone : {phone:number}[] = []
  public activeCustomer : {state: boolean}[] = []
  public cedulaCustomers: {name: string}[] = []
  public customerData: {document:string}[] = []
  public obsName?: string;
  baseC = [...baseCustomers]

  //TRANSFORMACION CON OBSERVABLES 1
  //Transformación con observables: Filtrar los clientes con tipo de documento "Cedula".
    filterCustomersByDocumentType(document: string) {
    const filterDocumentType = from(baseCustomers).pipe(
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
  nombresObservados(fullName: string) {
    from(this.baseC).pipe(
     filter((customer) => customer.fullName === fullName),
     map((customer) => `El nombre del cliente es ${customer.fullName} y su documento es ${customer.document}`)
   ).subscribe((name)=> this.obsName = name);
  return this.obsName
 }


  //TRANSFORMACION SIN OBSERVABLES 1
  //Transformación sin observables: Filtrar los clientes con estado activo.
    filterActiveCustomers(state: boolean) {
     
      this.activeCustomer = baseCustomers.map(customer =>
        ({state:customer.state,
        name:customer.fullName})
         ).filter(customer => customer.state === state) ;
         console.log("probar que sirve si pongo false y no encuentra")
  }


  //TRANSFORMACION SIN OBSERVABLES 2
  //Transformación sin observables: Mapear los clientes para obtener solo su número de teléfono.
   mapCustomersToPhone(phone: number) {
    
     this.customerPhone = baseCustomers.map(customer =>
      ({phone:customer.phone,
      name:customer.fullName})
       ).filter(customer => customer.phone === phone) ;
       console.log("hola")
  }


  mapCustomersByDocument(document: string) {
  this.customerData = baseCustomers.map(customer =>
    ({document: customer.document,
    name: customer.fullName,
    email: customer.email})
  ).filter(customer => customer.document === document);
}





  //Funcion Pura
  pureFilterActiveCustomers(state: boolean) {
    return baseCustomers.filter(customer => customer.state === state);
  }
  
  

}

//Funcion de orden superior
function getInfo(
  fn: (parametro: string[]) => void ){ 

 const customersInfo = baseCustomers.map(usuario =>  
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
  
  getInfo(mostrar)
  
  
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
  
