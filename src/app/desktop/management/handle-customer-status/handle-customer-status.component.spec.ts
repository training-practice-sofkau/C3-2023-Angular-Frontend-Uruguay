import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleCustomerStatusComponent } from './handle-customer-status.component';

describe('HandleCustomerStatusComponent', () => {
  let component: HandleCustomerStatusComponent;
  let fixture: ComponentFixture<HandleCustomerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleCustomerStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleCustomerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
