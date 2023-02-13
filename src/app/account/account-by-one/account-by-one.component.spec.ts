import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountByOneComponent } from './account-by-one.component';

describe('AccountByOneComponent', () => {
  let component: AccountByOneComponent;
  let fixture: ComponentFixture<AccountByOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountByOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountByOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
