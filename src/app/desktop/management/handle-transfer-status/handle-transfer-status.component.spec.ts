import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleTransferStatusComponent } from './handle-transfer-status.component';

describe('HandleTransferStatusComponent', () => {
  let component: HandleTransferStatusComponent;
  let fixture: ComponentFixture<HandleTransferStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleTransferStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleTransferStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
