import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAccountMovementComponent } from './check-account-movement.component';

describe('CheckAccountMovementComponent', () => {
  let component: CheckAccountMovementComponent;
  let fixture: ComponentFixture<CheckAccountMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAccountMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAccountMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
