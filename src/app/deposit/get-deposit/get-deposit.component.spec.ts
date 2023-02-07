import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GetDepositComponent } from './get-deposit.component';
import { GetDepositModule } from './get-deposit.module';

describe('GetDepositComponent', () => {
  let component: GetDepositComponent;
  let fixture: ComponentFixture<GetDepositComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GetDepositModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
