import { Injectable, OnDestroy } from '@angular/core';
import { Customer } from '../interface/customer';
import { ApiService } from 'src/app/api/api.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnDestroy {

  //get Document Type
  protected documentType!: DocumentType;
  public documentTypeObservable : BehaviorSubject<DocumentType> = 
  new BehaviorSubject<DocumentType>(this.documentType);

  //get All customer
  protected newCustomerList : Customer[] = [];
  public customerAllObservable: BehaviorSubject<Customer[]> = 
  new BehaviorSubject<Customer[]>(this.newCustomerList);
  
  //get One Customer
  protected customer!: Customer;
  public customerOneObservable : BehaviorSubject<Customer> = 
  new BehaviorSubject<Customer>(this.customer);

  constructor(private apiService : ApiService){}

//Para detener la emision de datos
  ngOnDestroy(): void {
    this.customerAllObservable.unsubscribe();
    this.customerOneObservable.unsubscribe();
  }
  
  //Actualizando los datos de todos los customers
  updateCustomerList():void{
    if(this.customerAllObservable.observed && !this.customerAllObservable.closed){
      this.apiService.getAllCustomers().subscribe({
        next: (list) => {this.newCustomerList = list},
        complete: () => {this.customerAllObservable.next(this.newCustomerList)}
      });
    }
  }
  //Acutalizando los datos de un customer 
  updateOneCustomer(id : string):void{
    if(this.customerOneObservable.observed && !this.customerOneObservable.closed){
      this.apiService.getOneCustomer(id).subscribe(
        {
          next : (value) => (this.customer = value),
          complete: () => (this.customerOneObservable.next(this.customer))
        });
    }
  }

  getDocumentType(document : string):void{
    if(this.documentTypeObservable.observed && !this.documentTypeObservable.closed){
      this.apiService.getDocumentType(document).subscribe({
        next : (data) => (this.documentType = data),
        complete : () =>(this.documentTypeObservable.next(this.documentType))
      });
    }
  }

}
