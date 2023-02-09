import { Component } from '@angular/core';
import { baseCustomers } from '../customer-data/customer.data';
import { CustomerModel } from '../../interfaces/customer.interface';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent {

  public activeCustomer: { state: boolean }[] = []
  public selectedData: { name: string; document: string; }[] | undefined;
  public selectedData1: { name: string; document: string; }[] | undefined;
  baseC = [...baseCustomers]
  public observadoN?: string;
  public observado1?: string;
  public customers: CustomerModel[] = baseCustomers;
  obsState: string[] = [];
  public listCustomer: { name: string; }[] | undefined;



  //observer
  searchByNameAndGetNameAndEmail(fullName: string) {
    from(this.baseC).pipe(
      filter((customer) => customer.fullName === fullName),
      map((customer) => `El nombre del cliente es ${customer.fullName} y su correo es ${customer.email}`)
    ).subscribe((name) => this.observadoN = name);
    return this.observadoN
  }

  //observer
  searchByphone(phone: number) {
    from(this.baseC).pipe(
      filter((customer) => customer.phone === phone),
      map((customer) => `El phone del cliente es ${customer.phone} y su nombre es ${customer.fullName}`)
    ).subscribe((name) => this.observado1 = name);
    return this.observado1
  }


  //observer
  filterCustomerByState() {
    from(this.customers)
      .pipe(
        filter((customer) => customer.state === true),
        map((customer) => `Cliente: ${customer.fullName.toUpperCase()} ID: ${customer.id}`))
      .subscribe((obs1) => this.obsState.push(obs1));
    return this.obsState;
  }


  //no observer
  filterActiveCustomers(state: boolean) {

    this.activeCustomer = baseCustomers.map(customer =>
    ({
      state: customer.state,
      name: customer.fullName,
      docType: customer.documentType.name
    })
    ).filter(customer => customer.state === state);

  }

  //no observer
  //listar los usuarios con pasaporte y solo traer sus tipo de documento y nombre
  listForDocType(): void {
    const filteredData = baseCustomers.filter(d => d.documentType.name == 'Pasaporte');
    this.selectedData1 = filteredData.map(d => ({ name: d.fullName, document: d.documentType.name }));
  }

  //no observer
  //Aplicar un cambo a un elemento de una registro *****
  modDocumentType(): void {
    const documetMod = baseCustomers.map(d => ({ ...d, score: d.documentType.name = "Cedula" }));
    this.selectedData = documetMod.map(d => ({ name: d.fullName, document: d.documentType.name }));

  }
  //no observer
  // buscar por cedula 
  findByDocPasaport(numDoc: string): void {
    const filteredData = baseCustomers.filter(d => d.document == 'Pasaporte');
    const found = filteredData.find(n => n.document === numDoc);

  }


  //no se termino de implementar la idea
  getInfo(fn: (parametro: string[]) => void) {
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

  //funcion Pura
  //getAllCust(): void{
  //this.listCustomer = baseCustomers.map(n => n.fullName);
  //return [listCustomer]
  //}


  //FUNCION PURA
  getCustomerById = (id: string) => {
    return baseCustomers.filter(baseCustomers => baseCustomers.id === id);

  };

  //no se pudo mostrar en html //FUNCION PURA
  getFullName = (customer: CustomerModel[]) => baseCustomers[0].fullName;

  getCustomerFullNameById = (id: string, customers: CustomerModel[]) =>
    this.getFullName(this.getCustomerById(id));

   logCustomerFullName = (id: string) => (customers: CustomerModel[]) =>
  console.log(this.getCustomerFullNameById(id, customers));


}
/*

funcion pura
transform(document: string) {
  from(this.customers).pipe(
    filter(n => n.document === document),
  ).subscribe((data) => this.newData = data)
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

