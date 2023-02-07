import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableCustomerComponent } from './disable-customer.component';

describe('DisableCustomerComponent', () => {
  let component: DisableCustomerComponent;
  let fixture: ComponentFixture<DisableCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisableCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
