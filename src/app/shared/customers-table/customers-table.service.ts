import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, asyncScheduler } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { CustomerModel } from 'src/app/interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersTableService implements OnDestroy {

  protected newDataCustomers: CustomerModel[] = [];
  public customersEmitter: BehaviorSubject<CustomerModel[]> = new BehaviorSubject<CustomerModel[]>(this.newDataCustomers);

  constructor(private api: AppService) { }

  ngOnDestroy(): void {
    this.customersEmitter.unsubscribe();
  }

  updateAllCustomers = () => {
    if(this.customersEmitter.observed && !this.customersEmitter.closed){
        this.api.getAllCustomers().subscribe({
        next: (value) => { this.newDataCustomers = value; },
        complete: () => {
          this.customersEmitter.next(this.newDataCustomers);
          asyncScheduler.schedule(this.updateAllCustomers, 1000); }
        });
    } else {
      asyncScheduler.schedule(this.updateAllCustomers, 1000);
    }
  }

}
