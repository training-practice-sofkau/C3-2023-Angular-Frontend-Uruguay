import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationWindowsComponent } from './confirmation-windows.component';

describe('ConfirmationWindowsComponent', () => {
  let component: ConfirmationWindowsComponent;
  let fixture: ComponentFixture<ConfirmationWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationWindowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
