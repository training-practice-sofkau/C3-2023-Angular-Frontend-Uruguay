import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerByOneListComponent } from './customer-by-one-list.component';

describe('CustomerByOneListComponent', () => {
  let component: CustomerByOneListComponent;
  let fixture: ComponentFixture<CustomerByOneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerByOneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerByOneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
