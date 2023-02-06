import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoUpdateComponent } from './account-info-update.component';

describe('AccountInfoComponent', () => {
  let component: AccountInfoUpdateComponent;
  let fixture: ComponentFixture<AccountInfoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountInfoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountInfoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
