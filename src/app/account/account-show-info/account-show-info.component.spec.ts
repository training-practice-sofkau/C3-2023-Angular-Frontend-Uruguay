import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountShowInfoComponent } from './account-show-info.component';

describe('AccountShowInfoComponent', () => {
  let component: AccountShowInfoComponent;
  let fixture: ComponentFixture<AccountShowInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountShowInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountShowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
