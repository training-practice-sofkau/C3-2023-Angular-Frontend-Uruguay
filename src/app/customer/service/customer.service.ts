import { Injectable, OnDestroy } from '@angular/core';
import { Customer } from '../interface/customer';
import { ApiService } from 'src/app/api/api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnDestroy {

  protected newCustomerList : Customer[] = [];
  public customerObservable: BehaviorSubject<Customer[]> = 
  new BehaviorSubject<Customer[]>(this.newCustomerList);
  
  constructor(private apiService : ApiService){}


  ngOnDestroy(): void {
    this.customerObservable.unsubscribe();
  }
  
  updateCustomerList(){
    if(this.customerObservable.observed && !this.customerObservable.closed){
      this.apiService.getAllCustomers().subscribe({
        next: (list) => {this.newCustomerList = list},
        complete: () => {this.customerObservable.next(this.newCustomerList)}
      });
    }
  }
}
