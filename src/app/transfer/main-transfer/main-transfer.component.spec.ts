import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTransferComponent } from './main-transfer.component';

describe('MainTransferComponent', () => {
  let component: MainTransferComponent;
  let fixture: ComponentFixture<MainTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
