import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GetCustomerComponent } from './get-customer.component';
import { GetCustomerModule } from './get-customer.module';

describe('GetCustomerComponent', () => {
  let component: GetCustomerComponent;
  let fixture: ComponentFixture<GetCustomerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GetCustomerModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
