import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAccountTypeComponent } from './get-account-type.component';

describe('GetAccountTypeComponent', () => {
  let component: GetAccountTypeComponent;
  let fixture: ComponentFixture<GetAccountTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAccountTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
