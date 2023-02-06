import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDepositComponent } from './remove-deposit.component';

describe('RemoveDepositComponent', () => {
  let component: RemoveDepositComponent;
  let fixture: ComponentFixture<RemoveDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDepositComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
