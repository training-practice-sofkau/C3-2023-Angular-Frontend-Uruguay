import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleDepositStatusComponent } from './handle-deposit-status.component';

describe('HandleDepositStatusComponent', () => {
  let component: HandleDepositStatusComponent;
  let fixture: ComponentFixture<HandleDepositStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleDepositStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleDepositStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
