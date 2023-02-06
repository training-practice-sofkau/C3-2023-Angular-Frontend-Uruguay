import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAccountInfoComponent } from './check-account-info.component';

describe('CheckAccountInfoComponent', () => {
  let component: CheckAccountInfoComponent;
  let fixture: ComponentFixture<CheckAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAccountInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
