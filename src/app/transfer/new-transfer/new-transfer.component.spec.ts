import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewTransferComponent } from './new-transfer.component';
import { NewTransferModule } from './new-transfer.module';

describe('NewTransferComponent', () => {
  let component: NewTransferComponent;
  let fixture: ComponentFixture<NewTransferComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NewTransferModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
