import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleAccountTypeComponent } from './handle-account-type.component';

describe('HandleAccountTypeComponent', () => {
  let component: HandleAccountTypeComponent;
  let fixture: ComponentFixture<HandleAccountTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleAccountTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
