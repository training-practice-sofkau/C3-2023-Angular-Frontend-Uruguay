import { Injectable, OnDestroy } from '@angular/core';
import { Customer } from '../interface/customer';
import { ApiService } from 'src/app/api/api.service';
import { BehaviorSubject } from 'rxjs';
import { SignUpModel } from '../../login/interfaces/signUpModel';
import { upDateCustomerModel } from '../interface/upDateCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnDestroy {

  //repito codigo para evitar errores con los modelos signUp y customer
  protected tokenSignUp!: string;
  public SignUpObservable : BehaviorSubject<string> = 
  new BehaviorSubject<string>(this.tokenSignUp);

  //get Document Type
  protected documentType!: DocumentType;
  public documentTypeObservable : BehaviorSubject<DocumentType> = 
  new BehaviorSubject<DocumentType>(this.documentType);

  //get All customer
  protected newCustomerList : Customer[] = [];
  public customerAllObservable: BehaviorSubject<Customer[]> = 
  new BehaviorSubject<Customer[]>(this.newCustomerList);
  
  //customer update
  protected upDateCus!: upDateCustomerModel;
  public upDateObservable : BehaviorSubject<upDateCustomerModel> = 
  new BehaviorSubject<upDateCustomerModel>(this.upDateCus);
  
  //get One Customer
  protected customer!: Customer;
  public customerOneObservable : BehaviorSubject<Customer> = 
  new BehaviorSubject<Customer>(this.customer);

  constructor(private apiService : ApiService){}

//Para detener la emision de datos
  ngOnDestroy(): void {
    this.customerAllObservable.unsubscribe();
    this.customerOneObservable.unsubscribe();
    this.documentTypeObservable.unsubscribe();
    this.SignUpObservable.unsubscribe();
    this.upDateObservable.unsubscribe();
  }
 

  upDateCustomer(customer : upDateCustomerModel,idCustomer : string){
    this.apiService.upDateCustomer(customer,idCustomer).subscribe({
      next:(data) => (this.upDateCus = data),
      complete: () => (this.upDateObservable.next(this.upDateCus))
    }
    );
  }
  
  createSignUp(customer : SignUpModel){
    if(this.SignUpObservable.observed && !this.SignUpObservable.closed){
      this.apiService.sigUp(customer).subscribe({
        next: (data) => (this.tokenSignUp = data),
        complete: () => (this.SignUpObservable.next(this.tokenSignUp))
      });
    }
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

  getEmail(email: string ):void{  
    if(this.customerOneObservable.observed && !this.customerOneObservable.closed){
      this.apiService.getEmailCustomer(email).subscribe({
        next : (data) => (this.customer = data),
        complete: () =>(this.customerOneObservable.next(this.customer))
      });
    }
  }

}
