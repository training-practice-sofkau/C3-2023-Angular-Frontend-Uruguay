import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMovementsCustomerComponent } from './last-movements-customer.component';

describe('LastMovementsCustomerComponent', () => {
  let component: LastMovementsCustomerComponent;
  let fixture: ComponentFixture<LastMovementsCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastMovementsCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMovementsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
