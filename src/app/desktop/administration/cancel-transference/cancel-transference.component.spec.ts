import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTransferenceComponent } from './cancel-transference.component';

describe('CancelTransferenceComponent', () => {
  let component: CancelTransferenceComponent;
  let fixture: ComponentFixture<CancelTransferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelTransferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelTransferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
