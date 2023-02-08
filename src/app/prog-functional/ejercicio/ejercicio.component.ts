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
  public observadoN?: string;
  public filteredCustomers?: string;
  public observadoC?: string;
  baseC = [...baseCustomers]

  //TRANSFORMACION CON OBSERVABLES 1
filterCustomersByDocumentType(document: string) {
   from(baseCustomers).pipe(
    filter(customer => customer.documentType.id === document),
    map((customer) => `El nombre del documento es ${customer.documentType.name} `)
  ).subscribe((document)=> this.filteredCustomers = document);
  return this.filteredCustomers;

}
  
  //TRANSFORMACION CON OBSERVABLES 2
  searchCustomerByFullNameUpperCase(){
    from(baseCustomers)
    .pipe(
      filter((customer) => customer.fullName === "Nombre 3"),
      map((customer)=> `Cliente: ${customer.fullName.toUpperCase()} ID: ${customer.id})`))
      .subscribe((item)=> this.observadoC = item);
      return this.observadoC;
  }
 
  //TRANSFORMACION CON OBSERVABLES 3
  searchByNameAndGetNameAndEmail(fullName: string) {
    from(this.baseC).pipe(
      filter((customer) => customer.fullName === fullName),
     map((customer) => `El nombre del cliente es ${customer.fullName} y su correo es ${customer.email}`)
   ).subscribe((name)=> this.observadoN = name);
  return this.observadoN
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

  //TRANSFORMACION SIN OBSERVABLES 3
  
  mapCustomersByDocument(document: string) {
  this.customerData = baseCustomers.map(customer =>
    ({document: customer.document,
    name: customer.fullName,
    email: customer.email})
  ).filter(customer => customer.document === document);
}


  //FUNCION DE ORDEN SUPERIOR   

   combinacionDeHechizos(hechizo1: (objetivo: string) => string, hechizo2: (objetivo: string) => string) {
    return (objetivo: string) => hechizo1(hechizo2(objetivo));
  };


  //FUNCION PURA

   add(a: number, b: number): number {
    return a + b;
  }

   //AGREGO OTRA FUNCION PURA
  
   multiply(a: number, b: number): number {
    return a * b;
  }
  
  //TOMAMOS DOS NUMEROS Y UNA FUNCION DE ORDEN SUP("cb") COMO ARG
    
  composicion(a: number, b: number, cb: (a: number, b: number) => number): number {
    return cb(this.add(a, b), b);
  }
  
  //ALMACENAMOS EL RESULTADO EN RESULT, POR SI LO QUEREMOS USAR LUEGO
   result = this.composicion(3, 4, this.multiply);
 
  
}


//Funcion de orden superior
// function getInfo(
//   fn: (parametro: string[]) => void ){ 

//  const customersInfo = baseCustomers.map(usuario =>  
//    `id de cuenta: ${usuario.id},
//     id de tipo de documento: ${usuario.documentType.id}
//     nombre del documento: ${usuario.documentType.name}
//     estado del documento: ${usuario.documentType.state}
//     numero del documento: ${usuario.document}
//     nombre completo: ${usuario.fullName}
//     correo electronico: ${usuario.email}
//     telefono: ${usuario.phone}
//     contraseña: ${usuario.password}
//     estado de la cuenta: ${usuario.state}`);
//     fn(customersInfo);
//   }
  
//   function mostrar(customer: string[]){
//     customer.forEach(item => console.log(item));
    
//   }
  
//   getInfo(mostrar)
  

