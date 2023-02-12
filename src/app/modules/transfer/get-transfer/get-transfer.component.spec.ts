import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTransferComponent } from './get-transfer.component';

describe('GetTransferComponent', () => {
  let component: GetTransferComponent;
  let fixture: ComponentFixture<GetTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
