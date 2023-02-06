import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositFinderComponent } from './deposit-finder.component';

describe('DepositFinderComponent', () => {
  let component: DepositFinderComponent;
  let fixture: ComponentFixture<DepositFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
