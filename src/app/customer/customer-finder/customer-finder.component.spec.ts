import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFinderComponent } from './customer-finder.component';

describe('CustomerFinderComponent', () => {
  let component: CustomerFinderComponent;
  let fixture: ComponentFixture<CustomerFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
