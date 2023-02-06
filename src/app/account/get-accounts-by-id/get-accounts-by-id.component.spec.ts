import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAccountsByIdComponent } from './get-accounts-by-id.component';

describe('GetAccountsByIdComponent', () => {
  let component: GetAccountsByIdComponent;
  let fixture: ComponentFixture<GetAccountsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAccountsByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAccountsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
