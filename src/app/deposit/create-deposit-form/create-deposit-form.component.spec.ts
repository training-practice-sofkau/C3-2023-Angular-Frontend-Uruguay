import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepositFormComponent } from './create-deposit-form.component';

describe('CreateDepositFormComponent', () => {
  let component: CreateDepositFormComponent;
  let fixture: ComponentFixture<CreateDepositFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDepositFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDepositFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
